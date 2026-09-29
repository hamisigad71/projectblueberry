import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

export function PodcastSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <section ref={ref} className="py-24 md:py-36 bg-[var(--color-bb-warm)]">
      <div className="container-site">

        {/* Big editorial headline */}
        <div className="mb-16 md:mb-24">
          <div className="eyebrow text-[var(--color-bb-muted)] mb-5">Podcast Production</div>
          <h2 className="section-heading text-[var(--color-bb-dark)] max-w-3xl">
            Turn your ideas<br />into conversations.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-start">

          {/* Left: details */}
          <div>
            <p className="body-lg text-[var(--color-bb-muted)] mb-10 max-w-lg">
              [Placeholder: Explain Blueberry's end-to-end podcast production offering — from strategy and concept through to recording, editing, video clips, distribution and analytics.]
            </p>

            {/* Services list */}
            <ul className="divide-y divide-black/[0.06] border-t border-black/[0.06] mb-12">
              {['Podcast Strategy', 'Concept Development', 'Recording & Production', 'Editing & Sound Design', 'Short-form Video Clips', 'Distribution & Analytics'].map(item => (
                <li key={item} className="py-4 flex items-center justify-between text-sm font-medium text-[var(--color-bb-dark)]">
                  {item}
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-bb-accent)] opacity-60" />
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services/podcast-production"
                className="group inline-flex items-center gap-3 bg-[var(--color-bb-primary)] text-white px-7 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[var(--color-bb-secondary)] transition-colors"
              >
                Start a Podcast
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: player card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="bg-[var(--color-bb-dark)] rounded-sm overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1593697972679-c4041d131a4e?q=80&w=800&auto=format&fit=crop"
                  alt="Podcast artwork"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="p-8">
                <p className="tag-label text-white/40 mb-2">Latest Episode</p>
                <h4 className="font-serif text-2xl text-white mb-6">
                  [Verified Episode Title Placeholder]
                </h4>

                {/* Simple progress bar */}
                <div className="w-full h-px bg-white/10 rounded-full mb-2">
                  <div className="h-px bg-white/40 rounded-full w-1/3" />
                </div>
                <div className="flex justify-between text-[0.65rem] font-mono text-white/30 mb-6">
                  <span>12:34</span>
                  <span>38:00</span>
                </div>

                {/* Platforms */}
                <div className="flex flex-wrap gap-3">
                  {['Spotify', 'Apple', 'YouTube'].map(p => (
                    <a key={p} href="#" className="px-4 py-2 border border-white/10 text-xs font-bold tracking-widest text-white/50 uppercase hover:text-white hover:border-white/30 transition-colors">
                      {p}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
