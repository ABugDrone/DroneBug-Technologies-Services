import { PARTNER_LOGOS } from '../data/productsData';

/**
 * Infinite logo ticker — images only, no names or descriptions.
 * Duplicated list for a seamless loop; pauses on hover.
 */
export default function PartnersMarquee({ compact = false }: { compact?: boolean }) {
  const row = [...PARTNER_LOGOS, ...PARTNER_LOGOS];
  return (
    <section aria-label="Our partners" className="relative py-10 sm:py-14 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 mb-6">
          Trusted by businesses across Nigeria
        </p>
        <div className="relative">
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-zinc-50 dark:from-slate-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-zinc-50 dark:from-slate-950 to-transparent" />
          <div className="overflow-hidden">
            <div className="flex w-max items-center gap-4 sm:gap-5 animate-partners-marquee hover:[animation-play-state:paused]">
              {row.map((src, i) => (
                <div
                  key={i}
                  aria-hidden={i >= PARTNER_LOGOS.length}
                  className={`shrink-0 rounded-2xl border border-white/40 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 shadow-md backdrop-blur-xl overflow-hidden flex items-center justify-center ${
                    compact ? 'h-16 w-28 sm:h-20 sm:w-36' : 'h-20 w-32 sm:h-24 sm:w-44'
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover select-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
