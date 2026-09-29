import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const serviceCategories = [
  { id: 'podcast-production', title: 'Podcast Production', tag: 'STORIES' },
  { id: 'video-production', title: 'Video Production', tag: 'STORIES' },
  { id: 'strategic-communications', title: 'Strategic Communications', tag: 'STRATEGY' },
  { id: 'research-communications', title: 'Research Communications', tag: 'STRATEGY' },
  { id: 'digital-platforms', title: 'Digital Platforms', tag: 'DIGITAL' },
  { id: 'media-monitoring', title: 'Media Monitoring', tag: 'INSIGHT' },
  { id: 'events', title: 'Events', tag: 'EXPERIENCES' },
];

export function Services() {
  return (
    <div className="bg-white min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-20">WHAT WE DO</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service) => (
             <Link 
               key={service.id} 
               to={`/services/${service.id}`}
               className="group block p-8 md:p-12 bg-[var(--color-blueberry-light)] rounded-sm border border-transparent hover:border-[var(--color-blueberry-muted)]/20 transition-all duration-300"
             >
               <span className="text-xs font-bold tracking-widest uppercase text-[var(--color-blueberry-primary)] mb-4 block">
                 {service.tag}
               </span>
               <h3 className="text-2xl md:text-3xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-12 group-hover:text-[var(--color-blueberry-accent)] transition-colors">
                 {service.title}
               </h3>
               <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-[var(--color-blueberry-primary)]">
                  EXPLORE 
                  <motion.span className="inline-block" whileHover={{ x: 5 }} transition={{ type: "spring" }}>
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
               </div>
             </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
