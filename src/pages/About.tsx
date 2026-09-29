import { Button } from '../components/ui/Button';

export function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-[var(--color-blueberry-light)] pt-32 pb-24 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-medium text-[var(--color-blueberry-dark)] mb-8 leading-tight">
            COMMUNICATION THAT MOVES IDEAS FORWARD.
          </h1>
          <p className="text-xl text-[var(--color-blueberry-muted)] max-w-2xl mx-auto font-light mb-12">
             [Use the actual company description from Blueberry explaining who they are and their mission.]
          </p>
        </div>
      </section>

      {/* Narrative Sections */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl space-y-24">
           <div>
              <h2 className="text-4xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-6">OUR STORY</h2>
              <p className="text-lg text-[var(--color-blueberry-muted)] leading-relaxed">
                 [Placeholder explaining who Blueberry is and how they started.]
              </p>
           </div>
           <div>
              <h2 className="text-4xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-6">WHAT WE BELIEVE</h2>
              <p className="text-lg text-[var(--color-blueberry-muted)] leading-relaxed">
                 [Placeholder outlining the company philosophy.]
              </p>
           </div>
           <div>
              <h2 className="text-4xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-6">HOW WE WORK</h2>
              <p className="text-lg text-[var(--color-blueberry-muted)] leading-relaxed">
                 [Placeholder detailing the overall approach to projects.]
              </p>
           </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-[var(--color-blueberry-primary)] text-white">
        <div className="container mx-auto px-6 md:px-12">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-medium mb-4">OUR TEAM</h2>
              <p className="text-white/70 max-w-xl mx-auto">
                 [Placeholder representing actual team members if available on the site.]
              </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1,2,3,4].map((member) => (
                 <div key={member} className="text-center group">
                    <div className="w-full aspect-square bg-gray-800 rounded-sm overflow-hidden mb-6 filter grayscale group-hover:grayscale-0 transition-all duration-500">
                       <img src={`https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop`} alt="Team Member" className="w-full h-full object-cover" />
                    </div>
                    <h3 className="text-xl font-heading font-medium">[Name Placeholder]</h3>
                    <p className="text-sm text-[var(--color-blueberry-accent)] mt-1">[Role]</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-32 bg-white text-center">
         <div className="container mx-auto px-6 md:px-12">
            <h2 className="text-4xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-8">JOIN OUR NETWORK</h2>
            <Button href="/contact" variant="primary">WORK WITH US</Button>
         </div>
      </section>
    </div>
  );
}
