import { useParams } from 'react-router-dom';

export function ArticleDetail() {
  const { id } = useParams();

  return (
    <div className="bg-white min-h-screen pt-20 pb-32">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
         <div className="text-center mb-12">
            <span className="text-sm font-bold tracking-widest text-[var(--color-blueberry-primary)] uppercase mb-6 block">INSIGHTS</span>
            <h1 className="text-4xl md:text-6xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-8 leading-tight">
               [Article Title {id} Placeholder]
            </h1>
            <div className="flex items-center justify-center gap-4 text-sm text-[var(--color-blueberry-muted)]">
               <span>By [Author Name]</span>
               <span className="w-1 h-1 rounded-full bg-gray-300"></span>
               <span>Oct 2026</span>
            </div>
         </div>
         
         <div className="w-full aspect-[21/9] bg-gray-100 rounded-sm overflow-hidden mb-16">
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Article Banner" />
         </div>

         <div className="prose prose-lg mx-auto text-[var(--color-blueberry-text)]">
            <p className="lead text-xl">
               [Introductory paragraph summarizing the insight or report.]
            </p>
            <p>
               [Body paragraph placeholder. Markdown formatting can be injected here. The text should reflect the editorial, strategic, and intelligent brand voice.]
            </p>
            <h2>Analysis Header</h2>
            <p>
               [More body content explaining the African context or specific data points.]
            </p>
         </div>
      </div>
    </div>
  );
}
