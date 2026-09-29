import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const audiences = [
  'Think Tanks',
  'NGOs',
  'Development Orgs',
  'Foundations',
  'Businesses',
  'Public Institutions',
  'Mission-driven Organizations',
];

export function WhoWeWorkWith() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="py-24 md:py-36 bg-[var(--color-bb-primary)]">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="eyebrow text-white/40 mb-5">Who We Serve</div>
            <h2 className="section-heading text-white">
              Built for organizations doing important work.
            </h2>
          </div>

          {/* Right: tag cloud */}
          <div className="flex flex-wrap gap-3">
            {audiences.map((aud, i) => (
              <motion.span
                key={aud}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="px-5 py-3 border border-white/20 text-sm font-medium text-white/70 hover:text-white hover:border-white/50 transition-colors cursor-default"
              >
                {aud}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
