import { useParams, Link } from 'react-router-dom';

export function ProjectDetail() {
  const { id } = useParams();

  return (
    <div className="bg-white min-h-screen">
      {/* Editorial Case Study Header */}
      <section className="pt-20 pb-16 px-6 md:px-12 container mx-auto text-center">
         <span className="text-sm font-bold tracking-widest text-[var(--color-blueberry-primary)] uppercase mb-6 block">
           DALBERG ADVISORS
         </span>
         <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-medium text-[var(--color-blueberry-dark)] leading-tight mb-8">
           Digital Inclusion Blueprint
         </h1>
      </section>

      {/* Hero Media */}
      <section className="px-6 md:px-12 container mx-auto mb-20">
         <div className="w-full aspect-[21/9] bg-gray-200 rounded-sm overflow-hidden">
            <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Hero" />
         </div>
      </section>

      {/* Project Meta */}
      <section className="border-t border-b border-[var(--color-blueberry-light)] py-12 mb-20">
         <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-8 text-sm">
            <div>
               <h4 className="font-bold tracking-widest text-[var(--color-blueberry-muted)] uppercase mb-2">SERVICES</h4>
               <p className="text-[var(--color-blueberry-dark)] font-medium">Digital, Strategy, Podcast</p>
            </div>
            <div>
               <h4 className="font-bold tracking-widest text-[var(--color-blueberry-muted)] uppercase mb-2">YEAR</h4>
               <p className="text-[var(--color-blueberry-dark)] font-medium">[Year]</p>
            </div>
            <div>
               <h4 className="font-bold tracking-widest text-[var(--color-blueberry-muted)] uppercase mb-2">INDUSTRY</h4>
               <p className="text-[var(--color-blueberry-dark)] font-medium">Think Tank</p>
            </div>
         </div>
      </section>

      {/* Narrative */}
      <section className="container mx-auto px-6 md:px-12 max-w-4xl space-y-24 mb-32">
         <div>
            <h2 className="text-4xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-6">THE CHALLENGE</h2>
            <p className="text-lg text-[var(--color-blueberry-muted)] leading-relaxed">
              The organization needed to translate a 200-page policy document into engaging, bite-sized multimedia content for policymakers and the public.
            </p>
         </div>
         <div>
            <h2 className="text-4xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-6">THE APPROACH</h2>
            <p className="text-lg text-[var(--color-blueberry-muted)] leading-relaxed">
              We developed a modular storytelling framework that broke down key insights into a mix of animated explainer videos and interactive web features.
            </p>
         </div>
         <div>
            <h2 className="text-4xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-6">THE WORK</h2>
            <p className="text-lg text-[var(--color-blueberry-muted)] leading-relaxed">
              A bespoke digital learning hub integrated with an original 6-part mini documentary series, alongside tailored social media toolkits.
            </p>
         </div>
         <div>
            <h2 className="text-4xl font-heading font-medium text-[var(--color-blueberry-dark)] mb-6">THE RESULT</h2>
            <p className="text-lg text-[var(--color-blueberry-muted)] leading-relaxed">
              Over 500k unique engagements across platforms and cited by three regional governments during policy reform debates.
            </p>
         </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[var(--color-blueberry-primary)] text-white py-32 mb-32">
         <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
            <blockquote className="text-3xl md:text-5xl font-heading font-light italic leading-tight mb-8">
              "Blueberry completely revolutionized our approach to policy communication. They turned our data into a movement."
            </blockquote>
            <p className="text-sm font-bold tracking-widest uppercase text-white/60">
              — Sarah Mensah, Dalberg
            </p>
         </div>
      </section>

      {/* Pagination */}
      <section className="container mx-auto px-6 md:px-12 py-16 border-t border-[var(--color-blueberry-light)] flex justify-between">
         <Link to="/work/prev" className="text-sm font-bold tracking-widest text-[var(--color-blueberry-muted)] uppercase hover:text-[var(--color-blueberry-primary)] transition-colors">
            ← PREVIOUS PROJECT
         </Link>
         <Link to="/work/next" className="text-sm font-bold tracking-widest text-[var(--color-blueberry-muted)] uppercase hover:text-[var(--color-blueberry-primary)] transition-colors">
            NEXT PROJECT →
         </Link>
      </section>
    </div>
  );
}
