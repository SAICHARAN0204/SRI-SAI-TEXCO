import { NextResponse } from 'next/server';

// Proxy for Yahoo Finance ICE Cotton No. 2 Futures (CT=F)
// Fetches 1-month history in a single request — used for current price, 7-day, and 1-month trend.

export async function GET() {
  try {
    // 1-month daily data covers both the 7-day and 30-day trend in one request
    const url =
      'https://query1.finance.yahoo.com/v8/finance/chart/CT=F?interval=1d&range=1mo';

    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124.0 Safari/537.36',
        Accept: 'application/json',
      },
      next: { revalidate: 600 }, // 10-minute server cache
    });

    if (!res.ok) throw new Error(`Yahoo returned ${res.status}`);
    const json = await res.json();

    const result = json?.chart?.result?.[0];
    const meta = result?.meta;
    const timestamps: number[] = result?.timestamp ?? [];
    const closes: number[] = result?.indicators?.quote?.[0]?.close ?? [];

    if (!meta || !closes.length) throw new Error('Unexpected response shape');

    // Build history array — filter out nulls
    const history: { date: string; price: number }[] = [];
    for (let i = 0; i < timestamps.length; i++) {
      if (closes[i] != null) {
        history.push({
          date: new Date(timestamps[i] * 1000).toLocaleDateString('en-IN', {
            day: '2-digit', month: 'short', timeZone: 'UTC',
          }),
          price: +closes[i].toFixed(3),
        });
      }
    }

    const current = meta.regularMarketPrice as number;
    
    // Calculate daily change by comparing current price to the previous session's close
    let prevClose = current;
    if (history.length >= 2) {
      prevClose = history[history.length - 2].price;
    }
    const change = +(current - prevClose).toFixed(3);
    const changePct = prevClose ? +((change / prevClose) * 100).toFixed(2) : 0;

    // Conversion: USD/lb → Rs/kg  (1 lb = 0.453592 kg, 1 USD ≈ 83.5 INR)
    const usdToInr = 83.5;
    const lbToKg = 0.453592;
    const toRsKg = (usd: number) => +(usd * usdToInr / lbToKg).toFixed(0);

    // 7-day slice (last 7 trading days)
    const history7d = history.slice(-7);
    // Full 1-month slice
    const history1mo = history;

    // Period stats helper
    const stats = (arr: { price: number }[]) => {
      const prices = arr.map(x => x.price);
      const first = prices[0] ?? current;
      const last = prices[prices.length - 1] ?? current;
      return {
        change: +(last - first).toFixed(3),
        changePct: +((last - first) / first * 100).toFixed(2),
        high: +Math.max(...prices).toFixed(3),
        low: +Math.min(...prices).toFixed(3),
      };
    };

    return NextResponse.json({
      // Current price
      priceUSD: current,
      priceRsKg: toRsKg(current),
      change,
      changePct,
      direction: change > 0 ? 'up' : change < 0 ? 'down' : 'flat',
      // History
      history7d: history7d.map(x => ({ ...x, priceRsKg: toRsKg(x.price) })),
      history1mo: history1mo.map(x => ({ ...x, priceRsKg: toRsKg(x.price) })),
      stats7d: stats(history7d),
      stats1mo: stats(history1mo),
      // Meta
      symbol: 'CT=F',
      currency: 'USD/lb',
      timestamp: new Date().toISOString(),
      note: 'ICE Cotton No. 2 Futures — global benchmark. 15-min delay. MCX India closely correlated.',
    });
  } catch (err) {
    console.error('[cotton-price]', err);
    return NextResponse.json({
      priceUSD: null, priceRsKg: null,
      change: null, changePct: null, direction: 'flat',
      history7d: [], history1mo: [], stats7d: null, stats1mo: null,
      symbol: 'CT=F', currency: 'USD/lb',
      timestamp: new Date().toISOString(),
      error: 'Price temporarily unavailable',
    }, { status: 200 });
  }
}
