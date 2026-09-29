import { Link } from 'react-router-dom';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bb-dark)] text-white">
      {/* Large statement */}
      <div className="container-site pt-20 md:pt-28 pb-16 md:pb-20 border-b border-white/[0.06]">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] max-w-4xl text-white/90">
          Ideas worth hearing.<br />
          <em>Stories worth moving.</em>
        </h2>
        <div className="mt-10">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 bg-white text-[var(--color-bb-dark)] px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase hover:bg-[var(--color-bb-accent)] hover:text-white transition-all duration-300"
          >
            Start a Project
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>

      {/* Links grid */}
      <div className="container-site py-16 grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-white/[0.06]">
        <div className="space-y-4">
          <p className="tag-label text-white/30 mb-5">Navigate</p>
          {[['What We Do', '/services'], ['Work', '/work'], ['About', '/about'], ['Insights', '/insights'], ['Studio', '/studio'], ['Contact', '/contact']].map(([label, href]) => (
            <Link key={href} to={href} className="block text-sm text-white/50 hover:text-white transition-colors">{label}</Link>
          ))}
        </div>

        <div className="space-y-4">
          <p className="tag-label text-white/30 mb-5">Services</p>
          {['Podcasts', 'Video', 'Strategy', 'Digital', 'Research', 'Events'].map(s => (
            <span key={s} className="block text-sm text-white/50">{s}</span>
          ))}
        </div>

        <div className="space-y-4">
          <p className="tag-label text-white/30 mb-5">Social</p>
          {[['LinkedIn', '#'], ['Instagram', '#'], ['YouTube', '#'], ['X (Twitter)', '#']].map(([label, href]) => (
            <a key={label} href={href} className="block text-sm text-white/50 hover:text-white transition-colors">{label}</a>
          ))}
        </div>

        <div className="space-y-4">
          <p className="tag-label text-white/30 mb-5">Contact</p>
          <a href="mailto:hello@blueberry.africa" className="block text-sm text-white/50 hover:text-white transition-colors">hello@blueberry.africa</a>
          <a href="tel:+254700000000" className="block text-sm text-white/50 hover:text-white transition-colors">+254 700 000 000</a>
          <p className="text-sm text-white/30 mt-4">Watermark Business Park<br/>Nairobi, Kenya</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-site py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white/25 text-xs font-medium">
        <p>&copy; {year} Blueberry Studio Africa. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="#" className="hover:text-white/50 transition-colors">Privacy Policy</Link>
          <Link to="#" className="hover:text-white/50 transition-colors">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
