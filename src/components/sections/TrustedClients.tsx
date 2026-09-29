import { motion } from 'framer-motion';

const clients = [
  'Afrobarometer',
  'African Arguments',
  'Open Society Foundations',
  'INASP',
  'Research for Evidence',
  '[Verified Client]',
  '[Verified Client]',
  '[Verified Client]',
];

export function TrustedClients() {
  const doubled = [...clients, ...clients];

  return (
    <section className="bg-[var(--color-bb-dark)] py-0">
      <div className="border-b border-white/[0.06]">
        {/* Header row */}
        <div className="container-site py-5 flex items-center justify-between">
          <span className="tag-label text-white">
            Trusted by organizations creating impact
          </span>
          <div className="hidden md:block w-px h-4 bg-white/10" />
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden py-6 border-b border-white/[0.06]">
        {/* Gradient fades on edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--color-bb-dark)] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--color-bb-dark)] to-transparent" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap shrink-0"
        >
          {doubled.map((client, i) => (
            <div key={i} className="inline-flex items-center px-10 gap-10">
              <span className="text-white/25 text-sm font-medium tracking-wide hover:text-white/60 transition-colors cursor-default">
                {client}
              </span>
              <span className="text-white/10">+</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
