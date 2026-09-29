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
    img: 'https://i.pinimg.com/736x/a3/27/05/a327059440104d3f287d1d3cce5f165e.jpg',
    wide: false,
  },
  {
    id: 2,
    client: 'Dalberg',
    title: 'From Data to Documentary',
    category: 'Video',
    tags: ['Film', 'Research'],
    img: 'https://i.pinimg.com/736x/bc/03/79/bc0379950fca187f35def9bec331e75a.jpg',
    wide: false,
  },
  {
    id: 3,
    client: 'Mastercard Foundation',
    title: 'Policy Intelligence Platform',
    category: 'Digital',
    tags: ['Digital', 'Design'],
    img: 'https://i.pinimg.com/736x/1b/ac/02/1bac02294488491843d59e5fa7dcaf68.jpg',
    wide: false,
  },
];

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/work/${project.id}`} className="group block cursor-pointer">
        {/* Image */}
        <div className="relative overflow-hidden bg-gray-100 mb-6 rounded-sm" style={{ aspectRatio: project.wide ? '16/9' : '4/3' }}>
          <motion.img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700 ease-in-out" />

          {/* Hover View Label */}
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
            <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md text-[var(--color-bb-dark)] px-5 py-3 text-[0.65rem] font-bold tracking-[0.2em] uppercase rounded-full shadow-sm">
              Explore Project
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="tag-label text-[var(--color-bb-dark)]">{project.client}</span>
            <span className="w-[3px] h-[3px] rounded-full bg-[var(--color-bb-muted)] opacity-50" />
            <span className="tag-label text-[var(--color-bb-muted)]">{project.category}</span>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[var(--color-bb-dark)] leading-[1.15] transition-colors duration-300 group-hover:text-[var(--color-bb-accent)]">
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}

export function FeaturedWork() {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-bb-white)]">
      <div className="container-site">
        {/* Header */}
        <div className="border-t border-black/10 pt-12 mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="max-w-3xl">
            <div className="eyebrow text-[var(--color-bb-muted)] mb-6">Selected Work</div>
            <h2 className="section-heading text-[var(--color-bb-dark)] md:leading-[0.95]">
              Stories we've helped bring to life.
            </h2>
          </div>
          <Link to="/work" className="group shrink-0 inline-flex items-center gap-3 text-xs font-bold tracking-[0.15em] uppercase text-[var(--color-bb-dark)] hover:text-[var(--color-bb-accent)] transition-colors pb-2 border-b border-transparent hover:border-[var(--color-bb-accent)]">
            View All Projects
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16 md:mt-0">
          <ProjectCard project={projects[0]} delay={0.1} />
          <ProjectCard project={projects[1]} delay={0.2} />
          <ProjectCard project={projects[2]} delay={0.3} />
        </div>
      </div>
    </section>
  );
}
