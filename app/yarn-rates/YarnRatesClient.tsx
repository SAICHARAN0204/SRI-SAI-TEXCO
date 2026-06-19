'use client';

import { useState, useMemo, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  TrendingUp, TrendingDown, Minus,
  MessageCircle, Search, Clock, X, ChevronUp, ChevronDown, RefreshCw,
} from 'lucide-react';
import type { PriceEntry, YarnCategory } from '@/lib/priceData';
import { getPriceChange } from '@/lib/priceData';

interface Props { entries: PriceEntry[]; lastUpdated: string; }

interface HistoryPoint { date: string; price: number; priceRsKg: number; }
interface PeriodStats { change: number; changePct: number; high: number; low: number; }

interface CottonPrice {
  priceUSD: number | null;
  priceRsKg: number | null;
  change: number | null;
  changePct: number | null;
  direction: 'up' | 'down' | 'flat';
  history7d: HistoryPoint[];
  history1mo: HistoryPoint[];
  stats7d: PeriodStats | null;
  stats1mo: PeriodStats | null;
  timestamp: string;
  error?: string;
}

// ── SVG Sparkline ─────────────────────────────────────────────────────────────
function Sparkline({ data, color, w = 160, h = 48 }: {
  data: number[]; color: string; w?: number; h?: number;
}) {
  if (data.length < 2) return <div className="text-[10px] text-txt-light">Not enough data</div>;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const pad = 4;
  const xs = data.map((_, i) => pad + (i / (data.length - 1)) * (w - pad * 2));
  const ys = data.map(v => h - pad - ((v - min) / range) * (h - pad * 2));
  const pathD = xs.map((x, i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${ys[i].toFixed(1)}`).join(' ');
  // area fill
  const areaD = `${pathD} L${xs[xs.length - 1].toFixed(1)},${h} L${xs[0].toFixed(1)},${h} Z`;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <defs>
        <linearGradient id={`grad-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0.01" />
        </linearGradient>
      </defs>
      <path d={areaD} fill={`url(#grad-${color})`} />
      <path d={pathD} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {/* last point dot */}
      <circle cx={xs[xs.length - 1]} cy={ys[ys.length - 1]} r="3" fill={color} />
    </svg>
  );
}

// ── Trend Card ────────────────────────────────────────────────────────────────
function TrendCard({ label, history, stats }: {
  label: string; history: HistoryPoint[]; stats: PeriodStats | null;
}) {
  if (!history.length || !stats) {
    return (
      <div className="flex-1 min-w-[180px] bg-cream border border-border rounded-xl p-3">
        <div className="text-[10px] text-txt-light font-mono uppercase tracking-wider mb-2">{label}</div>
        <div className="text-xs text-txt-light">Loading…</div>
      </div>
    );
  }
  const prices = history.map(h => h.price);
  const isUp = stats.changePct >= 0;
  const color = isUp ? '#16a34a' : '#dc2626';
  return (
    <div className="flex-1 min-w-[180px] bg-cream border border-border rounded-xl p-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] text-txt-light font-mono uppercase tracking-wider">{label}</span>
        <span className={`text-xs font-bold ${isUp ? 'text-green-700' : 'text-red-600'}`}>
          {isUp ? '+' : ''}{stats.changePct.toFixed(2)}%
        </span>
      </div>
      <Sparkline data={prices} color={color} />
      <div className="flex justify-between mt-1 text-[10px] text-txt-light font-mono">
        <span>L: {stats.low.toFixed(2)}</span>
        <span>H: {stats.high.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mt-0.5 text-[10px] text-txt-light">
        <span>{history[0]?.date}</span>
        <span>{history[history.length - 1]?.date}</span>
      </div>
    </div>
  );
}

// ── Cotton Price Widget ───────────────────────────────────────────────────────
function CottonPriceWidget() {
  const [data, setData] = useState<CottonPrice | null>(null);
  const [loading, setLoading] = useState(true);
  const [lastFetch, setLastFetch] = useState('');

  const fetchPrice = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/cotton-price');
      const json: CottonPrice = await res.json();
      setData(json);
      setLastFetch(new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }));
    } catch { /* silently keep stale data */ } finally { setLoading(false); }
  }, []);

  useEffect(() => {
    fetchPrice();
    const id = setInterval(fetchPrice, 10 * 60 * 1000);
    return () => clearInterval(id);
  }, [fetchPrice]);

  return (
    <div className="bg-white border border-border rounded-xl p-4 space-y-4">
      {/* Header row */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-base">🌿</div>
          <div>
            <div className="text-[10px] text-txt-light font-mono uppercase tracking-widest">Raw Cotton — ICE Futures (CT=F)</div>
            <div className="text-[10px] text-txt-light">Global benchmark · ~15 min delay · MCX India closely correlated</div>
          </div>
        </div>

        {loading && !data ? (
          <div className="flex items-center gap-2 text-txt-light text-sm animate-pulse">
            <RefreshCw size={13} className="animate-spin" /> Fetching live price…
          </div>
        ) : data?.error || !data?.priceUSD ? (
          <div className="text-xs text-amber-600 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-lg">
            Price temporarily unavailable — check back shortly.
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-4">
            <div>
              <span className="font-semibold text-txt-dark text-lg">{data.priceUSD.toFixed(2)}</span>
              <span className="text-xs text-txt-light ml-1">USD/lb</span>
            </div>
            <div className="text-txt-light text-sm">≈</div>
            <div>
              <span className="font-semibold text-teal text-lg">Rs. {data.priceRsKg}</span>
              <span className="text-xs text-txt-light ml-1">/ kg</span>
            </div>
            {data.direction === 'up' && (
              <span className="flex items-center gap-1 text-green-700 text-sm font-semibold">
                <TrendingUp size={14} />
                <span>+{data.change?.toFixed(3)} USD</span>
                <span className="font-normal text-xs text-green-600">({data.changePct?.toFixed(2)}% day)</span>
              </span>
            )}
            {data.direction === 'down' && (
              <span className="flex items-center gap-1 text-red-600 text-sm font-semibold">
                <TrendingDown size={14} />
                <span>{data.change?.toFixed(3)} USD</span>
                <span className="font-normal text-xs text-red-500">({data.changePct?.toFixed(2)}% day)</span>
              </span>
            )}
            {data.direction === 'flat' && (
              <span className="flex items-center gap-1 text-txt-light text-sm"><Minus size={14} /> Unchanged</span>
            )}
            <div className="flex items-center gap-1.5 text-[10px] text-txt-light font-mono ml-auto">
              <button onClick={fetchPrice} title="Refresh" className="hover:text-teal transition-colors">
                <RefreshCw size={11} className={loading ? 'animate-spin' : ''} />
              </button>
              {lastFetch && <span>Updated {lastFetch}</span>}
            </div>
          </div>
        )}
      </div>

      {/* Trend charts */}
      {data && !data.error && (
        <div className="flex flex-wrap gap-3 pt-1 border-t border-border">
          <TrendCard label="7-Day Trend" history={data.history7d} stats={data.stats7d} />
          <TrendCard label="1-Month Trend" history={data.history1mo} stats={data.stats1mo} />
        </div>
      )}
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true,
  }) + ' IST';
}

// CATS & AVAIL are static
const CATS: ('All' | YarnCategory)[] = ['All', 'CWC', 'KWC', 'Compact', 'Slub', 'OE'];
const AVAIL = ['All', 'Available', 'Limited', 'Enquire'];
type SortKey = 'count' | 'price' | 'mill';

function SortBtn({ label, id, sortKey, sortDir, onSort }: {
  label: string; id: SortKey; sortKey: SortKey; sortDir: 'asc' | 'desc'; onSort: (k: SortKey) => void;
}) {
  const active = sortKey === id;
  return (
    <button onClick={() => onSort(id)} className="flex items-center gap-1 text-xs font-semibold text-txt-mid hover:text-teal uppercase tracking-wider select-none whitespace-nowrap">
      {label}
      <span className="flex flex-col">
        <ChevronUp size={9} className={active && sortDir === 'asc' ? 'text-teal' : 'opacity-30'} />
        <ChevronDown size={9} className={active && sortDir === 'desc' ? 'text-teal' : 'opacity-30'} />
      </span>
    </button>
  );
}


// ── Main Page ─────────────────────────────────────────────────────────────────

export default function YarnRatesClient({ entries, lastUpdated }: Props) {
  const [mill, setMill] = useState('All Mills');
  const [cat, setCat] = useState<'All' | YarnCategory>('All');
  const [avail, setAvail] = useState('All');
  const [q, setQ] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('count');
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');

  // Derive active mills from the current entries
  const MILLS = useMemo(() => {
    const activeMills = Array.from(new Set(entries.map(e => e.mill))).sort();
    return ['All Mills', ...activeMills];
  }, [entries]);

  const wa = 'https://wa.me/919080229490?text=';

  function handleSort(key: SortKey) {
    if (sortKey === key) setSortDir(d => d === 'asc' ? 'desc' : 'asc');
    else { setSortKey(key); setSortDir('asc'); }
  }

  const filtered = useMemo(() => {
    let data = entries.filter(e => {
      if (mill !== 'All Mills' && e.mill !== mill) return false;
      if (cat !== 'All' && e.category !== cat) return false;
      if (avail !== 'All' && e.availability !== avail) return false;
      if (q) {
        const s = q.toLowerCase();
        if (!e.count.toLowerCase().includes(s) && !e.mill.toLowerCase().includes(s) && !e.category.toLowerCase().includes(s)) return false;
      }
      return true;
    });
    return [...data].sort((a, b) => {
      let cmp = 0;
      if (sortKey === 'count') cmp = a.countNum - b.countNum;
      else if (sortKey === 'price') cmp = a.pricePerKg - b.pricePerKg;
      else cmp = a.mill.localeCompare(b.mill);
      return sortDir === 'asc' ? cmp : -cmp;
    });
  }, [entries, mill, cat, avail, q, sortKey, sortDir]);

  // Interleave entries by mill for the marquee so it doesn't just show one mill for a long time
  const marqueeEntries = useMemo(() => {
    const byMill: Record<string, PriceEntry[]> = {};
    entries.forEach(e => {
      if (!byMill[e.mill]) byMill[e.mill] = [];
      byMill[e.mill].push(e);
    });
    const millKeys = Object.keys(byMill);
    const result: PriceEntry[] = [];
    let i = 0;
    while (true) {
      let added = false;
      for (const m of millKeys) {
        if (i < byMill[m].length) {
          result.push(byMill[m][i]);
          added = true;
        }
      }
      if (!added) break;
      i++;
    }
    return result;
  }, [entries]);

  const up = entries.filter(e => getPriceChange(e).direction === 'up').length;
  const down = entries.filter(e => getPriceChange(e).direction === 'down').length;
  const flat = entries.filter(e => getPriceChange(e).direction === 'flat').length;

  return (
    <div className="min-h-screen bg-cream">

      {/* ── Scrolling Ticker ─────────────────────────────────────────── */}
      <div className="bg-teal-dark overflow-hidden py-2 border-b border-teal/30">
        <div className="flex items-center">
          <div className="shrink-0 bg-gold text-teal-dark text-xs font-bold px-3 py-1 mr-4 font-mono tracking-widest">LIVE</div>
          <div className="overflow-hidden flex-1">
            <div className="flex gap-10 animate-marquee whitespace-nowrap">
              {[...marqueeEntries, ...marqueeEntries].map((e, i) => {
                const ch = getPriceChange(e);
                return (
                  <span key={i} className="inline-flex items-center gap-2 text-xs font-mono">
                    <span className="text-teal-pale">{e.mill}</span>
                    <span className="text-white font-semibold">{e.count} {e.category}</span>
                    <span className="text-gold font-bold">Rs.{e.pricePerKg}/kg</span>
                    {ch.direction === 'up' && <span className="text-green-300">+{ch.diff}</span>}
                    {ch.direction === 'down' && <span className="text-red-300">{ch.diff}</span>}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Page Header ──────────────────────────────────────────────── */}
      <div className="bg-teal text-white">
        <div className="container-custom py-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="section-label text-teal-pale mb-2">Cotton Yarn — Daily Price Board</p>
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-2">Today's Yarn Rates</h1>
              <p className="text-teal-pale text-sm max-w-xl leading-relaxed">
                Indicative ex-mill prices in Rs. per kg (excl. GST &amp; freight). Updated daily by SRI SAI TEXCO.
                Contact us to confirm before placing an order.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center">
                <div className="text-2xl font-bold text-green-300">{up}</div>
                <div className="text-xs text-teal-pale mt-0.5">Price Up</div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center">
                <div className="text-2xl font-bold text-red-300">{down}</div>
                <div className="text-xs text-teal-pale mt-0.5">Price Down</div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl px-5 py-3 text-center">
                <div className="text-2xl font-bold text-white">{flat}</div>
                <div className="text-xs text-teal-pale mt-0.5">Unchanged</div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-teal-pale font-mono">
            <Clock size={13} className="text-gold" />
            Yarn rates last updated: <span className="text-gold font-semibold">{formatDate(lastUpdated)}</span>
          </div>
        </div>
      </div>

      {/* ── Cotton Price Widget ───────────────────────────────────────── */}
      <div className="container-custom pt-5">
        <CottonPriceWidget />
      </div>

      {/* ── Filters ──────────────────────────────────────────────────── */}
      <div className="sticky top-[68px] z-40 bg-white border-b border-border shadow-sm mt-4">
        <div className="container-custom py-3">
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative w-full sm:w-52">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-txt-light" />
              <input
                type="text"
                placeholder="Search count or mill…"
                value={q}
                onChange={e => setQ(e.target.value)}
                className="w-full border border-border rounded-lg text-sm pl-9 pr-8 py-2 text-txt-dark placeholder:text-txt-light focus:outline-none focus:border-teal focus:ring-1 focus:ring-teal/20 bg-cream"
              />
              {q && (
                <button onClick={() => setQ('')} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-txt-light hover:text-txt-dark">
                  <X size={13} />
                </button>
              )}
            </div>

            <div className="h-5 w-px bg-border hidden sm:block" />

            {/* Mill filter */}
            <div className="flex flex-wrap gap-1.5">
              {MILLS.map(m => (
                <button key={m} onClick={() => setMill(m)}
                  className={`text-sm px-3 py-1.5 rounded-lg border transition-all font-medium ${mill === m ? 'bg-teal text-white border-teal' : 'bg-white text-txt-mid border-border hover:border-teal hover:text-teal'}`}>
                  {m}
                </button>
              ))}
            </div>

            <div className="h-5 w-px bg-border hidden sm:block" />

            {/* Category filter */}
            <div className="flex flex-wrap gap-1.5">
              {CATS.map(c => (
                <button key={c} onClick={() => setCat(c)}
                  className={`text-sm px-3 py-1.5 rounded-lg border transition-all font-medium ${cat === c ? 'bg-gold text-teal-dark border-gold' : 'bg-white text-txt-mid border-border hover:border-gold hover:text-gold-dark'}`}>
                  {c}
                </button>
              ))}
            </div>

            <div className="ml-auto text-xs text-txt-light font-mono whitespace-nowrap">
              {filtered.length} of {entries.length} rates
            </div>
          </div>

          {/* Availability row */}
          <div className="flex gap-2 mt-2 flex-wrap items-center">
            <span className="text-xs text-txt-light">Availability:</span>
            {AVAIL.map(a => (
              <button key={a} onClick={() => setAvail(a)}
                className={`text-xs px-2.5 py-1 rounded-full border transition-all ${avail === a ? 'bg-teal-pale text-teal border-teal/30 font-semibold' : 'bg-white text-txt-light border-border hover:text-teal'}`}>
                {a}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Table ────────────────────────────────────────────────────── */}
      <div className="container-custom py-6">

        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-2xl border border-border shadow-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-teal-pale border-b border-border">
                <th className="text-left px-5 py-3.5"><SortBtn label="Mill" id="mill" sortKey={sortKey} sortDir={sortDir} onSort={handleSort} /></th>
                <th className="text-left px-5 py-3.5"><SortBtn label="Count" id="count" sortKey={sortKey} sortDir={sortDir} onSort={handleSort} /></th>
                <th className="text-left px-5 py-3.5"><span className="text-xs font-semibold text-txt-mid uppercase tracking-wider">Type</span></th>
                <th className="text-right px-5 py-3.5"><SortBtn label="Rate / kg" id="price" sortKey={sortKey} sortDir={sortDir} onSort={handleSort} /></th>
                <th className="text-right px-5 py-3.5"><span className="text-xs font-semibold text-txt-mid uppercase tracking-wider">Change</span></th>
                <th className="text-left px-5 py-3.5"><span className="text-xs font-semibold text-txt-mid uppercase tracking-wider">MOQ</span></th>
                <th className="text-left px-5 py-3.5"><span className="text-xs font-semibold text-txt-mid uppercase tracking-wider">Status</span></th>
                <th className="text-center px-5 py-3.5"><span className="text-xs font-semibold text-txt-mid uppercase tracking-wider">Enquire</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filtered.length === 0 ? (
                <tr><td colSpan={8} className="text-center text-txt-light py-16 text-sm">No rates match your filters.</td></tr>
              ) : filtered.map((e, i) => {
                const ch = getPriceChange(e);
                const msg = encodeURIComponent(`Hello SRI SAI TEXCO, please share today's rate for ${e.count} ${e.category} from ${e.mill}.`);
                return (
                  <tr key={e.id} className={`hover:bg-teal-pale/30 transition-colors ${i % 2 === 1 ? 'bg-cream/40' : 'bg-white'}`}>
                    <td className="px-5 py-4"><span className="font-semibold text-txt-dark text-sm">{e.mill}</span></td>
                    <td className="px-5 py-4">
                      <span className="font-mono font-bold text-teal text-lg">{e.count}</span>
                      {e.notes && <span className="ml-2 text-[10px] tag-gold">{e.notes}</span>}
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${
                        e.category === 'CWC' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        e.category === 'KWC' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                        e.category === 'Compact' ? 'bg-cyan-50 text-cyan-700 border-cyan-200' :
                        e.category === 'Slub' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                        'bg-teal-pale text-teal border-teal/20'
                      }`}>{e.category}</span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <div className="font-semibold text-txt-dark text-base">Rs. {e.pricePerKg}</div>
                      <div className="text-[10px] text-txt-light">per kg</div>
                    </td>
                    <td className="px-5 py-4 text-right">
                      {ch.direction === 'up' && <span className="inline-flex items-center gap-1 text-green-700 font-semibold text-sm"><TrendingUp size={14}/>+{ch.diff}</span>}
                      {ch.direction === 'down' && <span className="inline-flex items-center gap-1 text-red-600 font-semibold text-sm"><TrendingDown size={14}/>{ch.diff}</span>}
                      {ch.direction === 'flat' && <span className="inline-flex items-center gap-1 text-txt-light text-sm"><Minus size={14}/>—</span>}
                    </td>
                    <td className="px-5 py-4 text-txt-light text-sm font-mono">{e.moq}</td>
                    <td className="px-5 py-4">
                      <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                        e.availability === 'Available' ? 'bg-green-50 text-green-700 border border-green-200' :
                        e.availability === 'Limited' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                        'bg-gray-100 text-gray-500 border border-gray-200'
                      }`}>{e.availability}</span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <a href={`${wa}${msg}`} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-teal text-white text-sm px-3 py-1.5 rounded-lg hover:bg-teal-light transition-colors font-medium">
                        <MessageCircle size={13}/> Quote
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center text-txt-light py-12 text-sm bg-white rounded-2xl border border-border">No rates match your filters.</div>
          ) : filtered.map(e => {
            const ch = getPriceChange(e);
            const msg = encodeURIComponent(`Hello SRI SAI TEXCO, please share today's rate for ${e.count} ${e.category} from ${e.mill}.`);
            return (
              <div key={e.id} className="bg-white rounded-xl border border-border p-4 shadow-card">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-xs text-txt-light mb-1">{e.mill}</div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-teal text-2xl">{e.count}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-semibold ${
                        e.category === 'CWC' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                        e.category === 'KWC' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                        e.category === 'Compact' ? 'bg-cyan-50 text-cyan-700 border-cyan-200' :
                        e.category === 'OE' ? 'bg-teal-pale text-teal border-teal/20' :
                        'bg-orange-50 text-orange-700 border-orange-200'
                      }`}>{e.category}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-txt-dark">Rs. {e.pricePerKg}</div>
                    <div className="text-[10px] text-txt-light">per kg</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm">
                    {ch.direction === 'up' && <span className="text-green-700 font-semibold flex items-center gap-1"><TrendingUp size={13}/>+{ch.diff}</span>}
                    {ch.direction === 'down' && <span className="text-red-600 font-semibold flex items-center gap-1"><TrendingDown size={13}/>{ch.diff}</span>}
                    {ch.direction === 'flat' && <span className="text-txt-light">Unchanged</span>}
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                      e.availability === 'Available' ? 'bg-green-50 text-green-700 border border-green-200' :
                      e.availability === 'Limited' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                      'bg-gray-100 text-gray-500 border border-gray-200'
                    }`}>{e.availability}</span>
                  </div>
                  <a href={`${wa}${msg}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-teal text-white text-sm px-4 py-2 rounded-lg font-medium hover:bg-teal-light transition-colors">
                    <MessageCircle size={13}/> Get Quote
                  </a>
                </div>
                <div className="mt-3 pt-3 border-t border-border text-xs text-txt-light">
                  MOQ: <span className="font-mono text-txt-mid">{e.moq}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 bg-white border border-border rounded-xl p-5">
          <p className="text-xs text-txt-light leading-relaxed">
            <span className="font-semibold text-txt-mid">Disclaimer:</span>{' '}
            Yarn prices are indicative ex-mill rates in Rs. per kg, excluding GST and freight.
            Raw cotton price is sourced from ICE Cotton No. 2 Futures (CT=F) — the global benchmark closely tracked by MCX India. Both yarn and cotton prices change daily.
            Always{' '}
            <a href={`${wa}${encodeURIComponent("Hello SRI SAI TEXCO, please confirm today's yarn rate.")}`}
              target="_blank" rel="noopener noreferrer" className="text-teal underline hover:text-teal-dark">
              confirm via WhatsApp
            </a>{' '}
            before placing an order.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-6 bg-teal rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-playfair text-xl font-bold text-white">Need a count not listed here?</p>
            <p className="text-teal-pale text-sm mt-1">We source from a wide mill network. Send us your requirement.</p>
          </div>
          <a href={`${wa}${encodeURIComponent('Hello SRI SAI TEXCO, I have a custom yarn enquiry.')}`}
            target="_blank" rel="noopener noreferrer" className="shrink-0 btn-gold">
            <MessageCircle size={16}/> WhatsApp Enquiry
          </a>
        </div>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-txt-light hover:text-teal transition-colors">&larr; Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
