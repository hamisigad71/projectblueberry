import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

export function FlagshipCaseStudy() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="bg-[var(--color-bb-dark)] py-24 md:py-36 overflow-hidden">
      <div className="container-site">

        {/* Top label row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-16 pb-6 border-b border-white/[0.08]"
        >
          <span className="eyebrow text-white/40">Featured Case Study</span>
          <span className="tag-label text-white/25">Research Communications</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-center">

          {/* Left: content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="tag-label text-white/40 mb-4 block"
            >
              [Verified Flagship Client]
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-10 leading-tight"
            >
              [Flagship Project Title Placeholder]
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="space-y-8 mb-12"
            >
              <div className="border-l-2 border-white/10 pl-6">
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/30 mb-2">The Challenge</p>
                <p className="text-white/60 leading-relaxed font-light">
                  [Placeholder: the communication challenge this organization faced in translating complex policy research into accessible public narratives across Africa.]
                </p>
              </div>
              <div className="border-l-2 border-white/10 pl-6">
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-white/30 mb-2">The Approach</p>
                <p className="text-white/60 leading-relaxed font-light">
                  [Placeholder: Blueberry's strategic approach — from research translation through podcast production, video, and digital distribution.]
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              <Link
                to="/work/flagship-project"
                className="group inline-flex items-center gap-3 border border-white/20 text-white px-7 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:bg-white hover:text-[var(--color-bb-dark)] transition-all duration-300"
              >
                View Full Case Study
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          </div>

          {/* Right: image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] md:aspect-square overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop"
                alt="Case Study"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bb-dark)] via-transparent to-transparent opacity-70" />
            </div>

            {/* Pull-quote overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <blockquote className="font-serif text-xl md:text-2xl italic text-white leading-snug">
                "[Placeholder for a verified pull quote from the client about working with Blueberry.]"
              </blockquote>
              <p className="mt-3 text-xs font-sans font-bold tracking-widest text-white/40 uppercase">
                — [Name], [Organization]
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
