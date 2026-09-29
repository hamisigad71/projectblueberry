import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function ServiceDetail() {
  const { id } = useParams();
  
  // Format the ID into a title
  const formattedTitle = id ? id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Service Name';

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-[var(--color-blueberry-dark)] text-white pt-24 pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium mb-8">
            {formattedTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-light mb-12">
             [Placeholder description explaining this specific service and its value proposition to organizations.]
          </p>
          <Button href="/contact" variant="primary">START A PROJECT</Button>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
           <div className="lg:col-span-1 border-t border-[var(--color-blueberry-primary)] pt-6">
              <h2 className="text-xs font-bold tracking-widest text-[var(--color-blueberry-primary)] uppercase mb-6">SERVICES INCLUDED</h2>
              <ul className="space-y-4">
                 <li className="text-[var(--color-blueberry-dark)] font-medium">Concept development</li>
                 <li className="text-[var(--color-blueberry-dark)] font-medium">Strategy & Planning</li>
                 <li className="text-[var(--color-blueberry-dark)] font-medium">Production & Execution</li>
                 <li className="text-[var(--color-blueberry-dark)] font-medium">Editing & Polish</li>
                 <li className="text-[var(--color-blueberry-dark)] font-medium">Distribution & Analytics</li>
              </ul>
           </div>
           
           <div className="lg:col-span-2 space-y-16">
              <div>
                <h3 className="text-3xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-6">WHY IT MATTERS</h3>
                <p className="text-lg text-[var(--color-blueberry-muted)] leading-relaxed">
                   [Explain the value of {formattedTitle}. Why do organizations need this? How does it help them achieve their goals in an African context?]
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-6">OUR APPROACH</h3>
                <p className="text-lg text-[var(--color-blueberry-muted)] leading-relaxed">
                   [Step-by-step process placeholder detailing how Blueberry Studio Africa handles {formattedTitle} from start to finish.]
                </p>
              </div>
           </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-32 bg-[var(--color-blueberry-light)] flex justify-center text-center">
         <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-6xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-10">
              LET'S CREATE SOMETHING WORTH HEARING.
            </h2>
            <Button href="/contact" variant="primary">GET IN TOUCH</Button>
         </div>
      </section>
    </div>
  );
}
