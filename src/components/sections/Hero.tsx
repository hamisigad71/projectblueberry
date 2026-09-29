import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });

  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Stagger children
  const container: any = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
  };
  const item: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Parallax background */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110 will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=2400&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-[#080F1D]"
      />

      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-24"
      >
        <div className="container-site">
          <motion.div variants={container} initial="hidden" animate="visible">

            {/* Eyebrow */}
            <motion.div variants={item} className="eyebrow text-white/50 mb-8 md:mb-12">
              Strategic Communications for Africa
            </motion.div>

            {/* Headline — split across lines for visual impact */}
            <div className="overflow-hidden mb-6 md:mb-8">
              <motion.h1
                variants={item}
                className="display-heading text-white"
              >
                Ideas Worth<br />
                <em>Hearing.</em>
              </motion.h1>
            </div>

            <motion.div variants={item} className="w-full h-px bg-white/10 mb-8 max-w-2xl" />

            {/* Sub copy and CTA side-by-side on desktop */}
            <motion.div
              variants={item}
              className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16 max-w-5xl"
            >
              <p className="body-lg text-white/70 max-w-lg">
                We help organizations across Africa turn research, ideas and lived experience into powerful stories, digital experiences and conversations that create impact.
              </p>

              <div className="flex items-center gap-4 shrink-0">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-white text-[var(--color-bb-dark)] px-7 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[var(--color-bb-accent)] hover:text-white transition-all duration-300"
                >
                  Start a Project
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 text-white/70 text-xs font-bold tracking-[0.15em] uppercase hover:text-white transition-colors"
                >
                  Our Work
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 right-8 md:right-12 hidden md:flex flex-col items-center gap-3"
      >
        <span className="text-white/30 text-[0.6rem] font-bold tracking-[0.25em] uppercase rotate-90 origin-center">Scroll</span>
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-12 bg-white/30 origin-top"
        />
      </motion.div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.06] py-4">
        <div className="container-site flex justify-between items-center text-white/30 text-[0.65rem] font-medium tracking-widest uppercase">
          <span>Nairobi · Kampala · Remote</span>
          <span>Est. [Year]</span>
        </div>
      </div>
    </section>
  );
}
