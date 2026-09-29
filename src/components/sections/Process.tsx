import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  { num: '01', title: 'Discover', desc: 'Understand the challenge, audience and objective.' },
  { num: '02', title: 'Strategize', desc: 'Develop the communication or creative strategy.' },
  { num: '03', title: 'Create', desc: 'Produce the content, campaign, platform or experience.' },
  { num: '04', title: 'Distribute', desc: 'Connect the work with the right audiences and channels.' },
  { num: '05', title: 'Measure', desc: 'Evaluate performance and learn from the results.' },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="py-24 md:py-36 bg-[var(--color-bb-white)] border-t border-black/[0.06]">
      <div className="container-site">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <div className="eyebrow text-[var(--color-bb-muted)] mb-5">How We Work</div>
          <h2 className="section-heading text-[var(--color-bb-dark)]">From idea to impact.</h2>
        </div>

        {/* Steps — horizontal line on desktop */}
        <div className="relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-6 left-[3.5rem] right-0 h-px bg-black/[0.08]" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className="flex lg:flex-col items-start gap-6 lg:gap-5"
              >
                {/* Node */}
                <div className="shrink-0 w-12 h-12 border border-[var(--color-bb-accent)] rounded-full flex items-center justify-center relative z-10 bg-white">
                  <span className="text-xs font-bold font-sans tracking-wider text-[var(--color-bb-accent)]">{step.num}</span>
                </div>

                <div>
                  <h4 className="font-serif text-xl text-[var(--color-bb-dark)] mb-2">{step.title}</h4>
                  <p className="text-sm text-[var(--color-bb-muted)] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
