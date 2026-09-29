import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = ['ALL', 'PODCASTS', 'VIDEO', 'RESEARCH', 'DIGITAL', 'CAMPAIGNS', 'EVENTS'];

const projects = [
  { id: 1, title: 'Afrobarometer Voices', client: 'Afrobarometer', cat: 'PODCASTS', img: 'https://images.unsplash.com/photo-1593697972679-c4041d131a4e?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Impact Documentary', client: 'Foundation X', cat: 'VIDEO', img: 'https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Data Portal', client: 'Policy Inst.', cat: 'DIGITAL', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
];

export function Work() {
  const [filter, setFilter] = useState('ALL');
  
  const filteredProjects = filter === 'ALL' ? projects : projects.filter(p => p.cat === filter);

  return (
    <div className="bg-white min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-12">OUR WORK</h1>
        
        {/* Animated filtering */}
        <div className="flex flex-wrap gap-4 border-b border-[var(--color-blueberry-muted)]/20 pb-8 mb-16">
          {categories.map(cat => (
             <button 
               key={cat}
               onClick={() => setFilter(cat)}
               className={`text-xs font-bold tracking-widest uppercase transition-colors px-2 py-1 ${
                 filter === cat ? 'text-[var(--color-blueberry-primary)] border-b-2 border-[var(--color-blueberry-primary)]' : 'text-[var(--color-blueberry-muted)] hover:text-[var(--color-blueberry-dark)]'
               }`}
             >
               {cat}
             </button>
          ))}
        </div>

        {/* Portfolio Archive Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/work/${project.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-sm mb-6 aspect-[4/3] bg-gray-100">
                    <img src={project.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={project.title} />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold tracking-widest uppercase text-[var(--color-blueberry-primary)]">{project.client}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span className="text-xs font-medium tracking-wide text-[var(--color-blueberry-muted)]">{project.cat}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-4">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-[var(--color-blueberry-primary)]">
                    VIEW PROJECT <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
