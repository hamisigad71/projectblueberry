import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'What We Do', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Insights', href: '/insights' },
  { name: 'Studio', href: '/studio' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  const textColor = mobileOpen
    ? 'text-[var(--color-bb-dark)]'
    : isScrolled
      ? 'text-[var(--color-bb-dark)]'
      : 'text-white';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)] py-4'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="container-site flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <span className={`font-serif text-xl tracking-tight transition-colors duration-300 ${textColor}`}>
              Blueberry Studio
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[0.7rem] font-bold tracking-[0.12em] uppercase transition-colors duration-200 relative group ${
                    isScrolled
                      ? active ? 'text-[var(--color-bb-accent)]' : 'text-[var(--color-bb-dark)] hover:text-[var(--color-bb-accent)]'
                      : active ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${active ? 'w-full bg-current' : 'w-0 group-hover:w-full bg-current'}`} />
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className={`text-[0.7rem] font-bold tracking-[0.12em] uppercase px-6 py-3 border transition-all duration-200 ${
                isScrolled
                  ? 'border-[var(--color-bb-primary)] text-[var(--color-bb-primary)] hover:bg-[var(--color-bb-primary)] hover:text-white'
                  : 'border-white/50 text-white hover:bg-white hover:text-[var(--color-bb-dark)]'
              }`}
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen
              ? <X className="w-6 h-6 text-[var(--color-bb-dark)]" />
              : <Menu className={`w-6 h-6 ${isScrolled ? 'text-[var(--color-bb-dark)]' : 'text-white'}`} />
            }
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-bb-warm)] flex flex-col justify-center"
          >
            <div className="container-site">
              <nav className="space-y-2">
                <Link to="/" className="block py-4 font-serif text-4xl text-[var(--color-bb-dark)] border-b border-black/[0.06]">Home</Link>
                {navLinks.map(link => (
                  <Link key={link.name} to={link.href} className="block py-4 font-serif text-4xl text-[var(--color-bb-dark)] border-b border-black/[0.06] hover:text-[var(--color-bb-accent)] transition-colors">
                    {link.name}
                  </Link>
                ))}
                <Link to="/contact" className="block py-4 font-serif text-4xl text-[var(--color-bb-accent)]">
                  Start a Project →
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
