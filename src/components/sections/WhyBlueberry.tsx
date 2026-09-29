import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const principles = [
  {
    num: '01',
    title: 'Real Experience',
    desc: 'Boasting a team of award-winning producers, strategists, and researchers, we turn complex realities into compelling human stories.'
  },
  {
    num: '02',
    title: 'Clarity Over Complexity',
    desc: 'We believe the best communication strips away jargon. Complex research needs translation, not simplification — we do the difference.'
  },
  {
    num: '03',
    title: 'Long-term Partnerships',
    desc: 'We don\\'t just deliver and disappear. We act as embedded partners, cultivating deep relationships and a nuanced understanding of your mission.'
  },
  {
    num: '04',
    title: 'African Context',
    desc: '[Verified: Position Blueberry\'s understanding of African audiences, media landscape and regional political context.]'
  },
];

export function WhyBlueberry() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-5%' });

  return (
    <section ref={ref} className="py-24 md:py-36 bg-[var(--color-bb-warm)]">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div>
            <div className="eyebrow text-[var(--color-bb-muted)] mb-5">Why Blueberry</div>
            <h2 className="section-heading text-[var(--color-bb-dark)]">
              What makes us<br />different.
            </h2>
          </div>
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y divide-black/[0.06] md:divide-y-0">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`py-10 md:py-12 ${i % 2 === 0 ? 'md:pr-16 md:border-r border-black/[0.06]' : 'md:pl-16'} ${i < 2 ? 'md:pb-12 md:border-b border-black/[0.06]' : 'md:pt-12'}`}
            >
              <span className="text-[5rem] font-serif leading-none text-black/[0.04] select-none block mb-2 -mt-4">
                {p.num}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[var(--color-bb-dark)] mb-4">
                {p.title}
              </h3>
              <p className="text-[var(--color-bb-muted)] leading-relaxed font-light">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
