import { motion } from 'framer-motion';
import { SERVICES } from '../data/dronebugData';

export default function SolutionsBento() {
  return (
    <section id="solutions" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-sky-600 dark:text-sky-400 mb-3">
            What We Build
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Solutions That Cut Costs &amp; Boost Profits
          </h2>
          <p className="max-w-xl mx-auto text-zinc-500 dark:text-zinc-400">
            From lightweight desktop tools to AI-powered platforms — every solution is designed for maximum impact with minimum overhead.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* Gradient accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${svc.color}`} />

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-4 shadow-md`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {svc.icon === 'Monitor' && <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>}
                  {svc.icon === 'Brain' && <><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 5-4 6.5V18a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.5C6.5 14 5 11.5 5 9a7 7 0 0 1 7-7z" /><circle cx="12" cy="9" r="2" /></>}
                  {svc.icon === 'DeviceMobileCamera' && <><rect x="5" y="2" width="14" height="20" rx="3" /><line x1="12" y1="18" x2="12" y2="18" /></>}
                  {svc.icon === 'GlobeHemisphereEastern' && <><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10A15 15 0 0 1 12 2z" /></>}
                  {svc.icon === 'PenNib' && <><path d="M12 2l3 7h-6l3-7z" /><path d="M9 9l-1 13h8l-1-13" /><line x1="8" y1="12" x2="16" y2="12" /></>}
                  {svc.icon === 'GraduationCap' && <><path d="M12 3L1 9l11 6 9-4.5V19" /><path d="M1 9h22" /><line x1="6" y1="14" x2="6" y2="22" /></>}
                </svg>
              </div>

              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{svc.name}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">{svc.description}</p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2">
                {svc.features.map((f) => (
                  <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-medium">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
