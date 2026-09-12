import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PartnersMarquee from '../components/PartnersMarquee';
import { PARTNER_LOGOS } from '../data/productsData';

export default function Partners() {
  useEffect(() => {
    document.title = 'Our Partners | DroneBug Technologies';
  }, []);

  return (
    <div className="pt-28 sm:pt-32 pb-4 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <span className="inline-block text-sm font-semibold tracking-wider uppercase text-sky-600 dark:text-sky-400 mb-3">
          Our Partners
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
          Businesses Running on DroneBug
        </h1>
        <p className="max-w-xl mx-auto text-zinc-500 dark:text-zinc-400 mb-10">
          From marts to mobile stores — our tools power daily sales across Nigeria.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
          {PARTNER_LOGOS.map((src, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 shadow-md backdrop-blur-xl overflow-hidden h-28 sm:h-32 flex items-center justify-center"
            >
              <img src={src} alt="" loading="lazy" draggable={false} className="h-full w-full object-cover select-none" />
            </div>
          ))}
        </div>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full hover:shadow-lg hover:shadow-sky-500/25 transition-all active:scale-[0.97]"
        >
          Explore Our Products
        </Link>
      </div>
      <PartnersMarquee compact />
    </div>
  );
}
