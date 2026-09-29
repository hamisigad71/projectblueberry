import { Button } from '../components/ui/Button';

export function Contact() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-[var(--color-blueberry-dark)] pt-32 pb-24 text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-medium mb-8 leading-tight">
            LET'S MAKE SOMETHING MEANINGFUL.
          </h1>
          <p className="text-xl text-white/80 max-w-2xl font-light">
             Tell us what you're working on and how we can help.
          </p>
        </div>
      </section>

      {/* Form and info Container */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
             
             {/* Left: Project Intake Form */}
             <div className="bg-[var(--color-blueberry-light)] p-8 md:p-12 rounded-sm border border-gray-100 shadow-sm">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-xs font-bold tracking-widest text-[var(--color-blueberry-dark)]">NAME</label>
                         <input type="text" className="w-full p-4 bg-white border border-gray-200 outline-none focus:border-[var(--color-blueberry-primary)] transition-colors text-[var(--color-blueberry-text)]" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold tracking-widest text-[var(--color-blueberry-dark)]">ORGANIZATION</label>
                         <input type="text" className="w-full p-4 bg-white border border-gray-200 outline-none focus:border-[var(--color-blueberry-primary)] transition-colors text-[var(--color-blueberry-text)]" placeholder="Company/NGO" />
                      </div>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-xs font-bold tracking-widest text-[var(--color-blueberry-dark)]">EMAIL</label>
                         <input type="email" className="w-full p-4 bg-white border border-gray-200 outline-none focus:border-[var(--color-blueberry-primary)] transition-colors text-[var(--color-blueberry-text)]" placeholder="hello@example.com" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold tracking-widest text-[var(--color-blueberry-dark)]">PHONE</label>
                         <input type="tel" className="w-full p-4 bg-white border border-gray-200 outline-none focus:border-[var(--color-blueberry-primary)] transition-colors text-[var(--color-blueberry-text)]" placeholder="+000 000 000 000" />
                      </div>
                   </div>

                   <div className="space-y-2">
                      <label className="text-xs font-bold tracking-widest text-[var(--color-blueberry-dark)]">PROJECT TYPE</label>
                      <select className="w-full p-4 bg-white border border-gray-200 outline-none focus:border-[var(--color-blueberry-primary)] transition-colors text-[var(--color-blueberry-text)]">
                         <option>Strategic Communications</option>
                         <option>Podcast</option>
                         <option>Video & Content</option>
                         <option>Digital Platform</option>
                         <option>Media Monitoring</option>
                         <option>Events & Experiences</option>
                         <option>Other</option>
                      </select>
                   </div>
                   
                   <div className="space-y-2">
                      <label className="text-xs font-bold tracking-widest text-[var(--color-blueberry-dark)]">HOW CAN WE HELP?</label>
                      <textarea rows={4} className="w-full p-4 bg-white border border-gray-200 outline-none focus:border-[var(--color-blueberry-primary)] transition-colors text-[var(--color-blueberry-text)] resize-none" placeholder="Tell us about the challenge..."></textarea>
                   </div>

                   <Button className="w-full" variant="primary">SEND PROJECT ENQUIRY</Button>
                </form>
             </div>

             {/* Right: Info */}
             <div className="flex flex-col space-y-16 py-8">
                <div>
                   <h3 className="text-sm font-bold tracking-widest text-[var(--color-blueberry-muted)] uppercase mb-4">DIRECT CONTACT</h3>
                   <div className="space-y-2 flex flex-col">
                      <a href="mailto:hello@blueberry.africa" className="text-2xl font-light text-[var(--color-blueberry-primary)] hover:text-[var(--color-blueberry-accent)] transition-colors">hello@blueberry.africa</a>
                      <a href="tel:+254700000000" className="text-2xl font-light text-[var(--color-blueberry-primary)] hover:text-[var(--color-blueberry-accent)] transition-colors">+254 700 000 000</a>
                   </div>
                </div>

                <div>
                   <h3 className="text-sm font-bold tracking-widest text-[var(--color-blueberry-muted)] uppercase mb-4">LOCATION</h3>
                   <p className="text-xl font-light text-[var(--color-blueberry-dark)] leading-relaxed">
                      Watermark Business Park<br />
                      Nairobi, Kenya
                   </p>
                </div>
                
                <div>
                   <h3 className="text-sm font-bold tracking-widest text-[var(--color-blueberry-muted)] uppercase mb-4">SOCIAL</h3>
                   <div className="flex space-x-6">
                      <a href="#" className="text-[var(--color-blueberry-dark)] font-medium hover:text-[var(--color-blueberry-primary)]">LinkedIn</a>
                      <a href="#" className="text-[var(--color-blueberry-dark)] font-medium hover:text-[var(--color-blueberry-primary)]">Instagram</a>
                      <a href="#" className="text-[var(--color-blueberry-dark)] font-medium hover:text-[var(--color-blueberry-primary)]">YouTube</a>
                   </div>
                </div>
             </div>
             
          </div>
        </div>
      </section>
    </div>
  );
}
