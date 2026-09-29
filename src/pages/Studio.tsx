import { Button } from '../components/ui/Button';

export function Studio() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-[var(--color-blueberry-dark)] text-white pt-32 pb-24 text-center">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-medium mb-8">
            THE BLUEBERRY STUDIO
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light mb-12">
             [Placeholder: Supporting text explaining the studio, based on actual website information.]
          </p>
          <Button href="/contact" variant="primary">BOOK THE STUDIO</Button>
        </div>
      </section>

      {/* Equipment and Spaces */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <div className="order-2 lg:order-1 space-y-12">
                <div>
                  <h3 className="text-2xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-4">PODCASTS & VIDEO</h3>
                  <p className="text-[var(--color-blueberry-muted)] leading-relaxed">
                    [Verified description of the podcast and video production capabilities available in the studio, including cameras, microphones, etc.]
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-4">EVENTS & WORKSHOPS</h3>
                  <p className="text-[var(--color-blueberry-muted)] leading-relaxed">
                    [Verified description of event space, livestreaming options, and workshop accommodations.]
                  </p>
                </div>
             </div>
             <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=600&auto=format&fit=crop" className="w-full aspect-[4/5] object-cover rounded-sm" alt="Studio" />
                <img src="https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?q=80&w=600&auto=format&fit=crop" className="w-full aspect-[4/5] object-cover rounded-sm mt-12" alt="Equipment" />
             </div>
          </div>
        </div>
      </section>

    </div>
  );
}
