import Link from 'next/link';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-cream">
      <div className="container-custom text-center max-w-lg py-20">
        <div className="font-playfair text-8xl font-black text-teal/20 mb-4">404</div>
        <h1 className="font-playfair text-3xl font-bold text-txt-dark mb-4">Page Not Found</h1>
        <p className="text-sm text-txt-light mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. It may have moved or the URL may be incorrect.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-teal">
            <Home size={15} /> Back to Home
          </Link>
          <Link href="/yarn-catalogue" className="btn-outline-teal">
            View Yarn Catalogue <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
