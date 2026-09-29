import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const articles = [
  { id: '1', title: '[Insights Article Placeholder]', cat: 'Insights', date: 'Oct 2026', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop' },
  { id: '2', title: '[Case Study Report]', cat: 'Case Studies', date: 'Sep 2026', img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop' },
  { id: '3', title: '[Industry News Item]', cat: 'News', date: 'Aug 2026', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop' },
];

export function Insights() {
  return (
    <div className="bg-white min-h-screen pt-12 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-5xl md:text-7xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-16">INSIGHTS</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {articles.map((article) => (
             <Link key={article.id} to={`/insights/${article.id}`} className="group block">
                <div className="relative aspect-[4/3] bg-gray-100 mb-6 overflow-hidden rounded-sm">
                   <img src={article.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Article Cover" />
                </div>
                <div className="flex items-center justify-between mb-4">
                   <span className="text-xs font-bold tracking-widest uppercase text-[var(--color-blueberry-primary)]">{article.cat}</span>
                   <span className="text-xs font-medium text-[var(--color-blueberry-muted)]">{article.date}</span>
                </div>
                <h3 className="text-2xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-4 group-hover:text-[var(--color-blueberry-accent)] transition-colors">
                   {article.title}
                </h3>
                <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-[var(--color-blueberry-primary)]">
                   READ ARTICLE <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
             </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
