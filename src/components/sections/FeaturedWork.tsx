import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    client: 'Afrobarometer',
    title: 'Voices of Africa — Research to Podcast',
    category: 'Podcast Production',
    tags: ['Strategy', 'Audio', 'Video'],
    img: 'https://images.unsplash.com/photo-1593697972679-c4041d131a4e?q=80&w=1400&auto=format&fit=crop',
    wide: true,
  },
  {
    id: 2,
    client: '[Verified Client]',
    title: 'From Data to Documentary',
    category: 'Video',
    tags: ['Film', 'Research'],
    img: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=900&auto=format&fit=crop',
    wide: false,
  },
  {
    id: 3,
    client: '[Verified Client]',
    title: 'Policy Intelligence Platform',
    category: 'Digital',
    tags: ['Digital', 'Design'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=900&auto=format&fit=crop',
    wide: false,
  },
];

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/work/${project.id}`} className="group block">
        {/* Image */}
        <div className="relative overflow-hidden bg-gray-100 mb-6" style={{ aspectRatio: project.wide ? '16/9' : '4/3' }}>
          <motion.img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-[var(--color-bb-dark)] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

          {/* Hover overlay label */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <span className="inline-flex items-center gap-2 bg-white text-[var(--color-bb-dark)] px-4 py-2 text-xs font-bold tracking-widest uppercase">
              View Project
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="tag-label text-[var(--color-bb-accent)]">{project.client}</span>
          <span className="text-black/20 text-xs">—</span>
          <span className="tag-label text-[var(--color-bb-muted)]">{project.category}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-serif text-[var(--color-bb-dark)] transition-colors group-hover:text-[var(--color-bb-accent)] leading-snug">
          {project.title}
        </h3>
      </Link>
    </motion.div>
  );
}

export function FeaturedWork() {
  return (
    <section className="py-24 md:py-36 bg-[var(--color-bb-white)]">
      <div className="container-site">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-20">
          <div>
            <div className="eyebrow text-[var(--color-bb-muted)] mb-5">Selected Work</div>
            <h2 className="section-heading text-[var(--color-bb-dark)]">
              Stories we've helped<br />bring to life.
            </h2>
          </div>
          <Link to="/work" className="group shrink-0 inline-flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-bb-accent)] hover:gap-4 transition-all duration-200 pb-1">
            View All Work
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Large featured project */}
        <div className="mb-8 md:mb-12">
          <ProjectCard project={projects[0]} delay={0} />
        </div>

        {/* Two smaller projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <ProjectCard project={projects[1]} delay={0.1} />
          <ProjectCard project={projects[2]} delay={0.2} />
        </div>
      </div>
    </section>
  );
}
