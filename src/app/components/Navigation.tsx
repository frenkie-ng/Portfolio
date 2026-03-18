import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Circle } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ${isScrolled ? 'py-4' : 'py-10'}`}>
      <div className="section-container">
        <div className={`
          flex items-center justify-between transition-all duration-1000 px-12 py-6
          ${isScrolled ? 'bg-[#020202] border border-sky-500/10' : 'bg-transparent'}
        `}>
          <Magnetic>
            <a href="#hero" className="text-2xl font-serif font-light tracking-tighter text-white group">
              DUNG<span className="italic font-extralight text-sky-400">.</span>
            </a>
          </Magnetic>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Magnetic key={link.name}>
                <a
                  href={link.href}
                  className={`relative text-[9px] font-mono font-bold uppercase tracking-[0.4em] transition-all ${
                    activeSection === link.href.slice(1) ? 'text-sky-400' : 'text-slate-500 hover:text-sky-300'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2"
                    >
                      <Circle size={3} fill="currentColor" className="text-sky-400" />
                    </motion.div>
                  )}
                </a>
              </Magnetic>
            ))}
          </div>

          <button className="md:hidden text-sky-400" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050505] z-40 flex items-center justify-center"
          >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05)_0%,transparent_70%)]" />
            <div className="flex flex-col items-center gap-16 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-6xl font-serif font-light text-[#f8fafc] hover:text-sky-400 transition-colors uppercase tracking-[0.2em]"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <button 
               className="absolute top-12 right-12 text-sky-400"
               onClick={() => setMobileMenuOpen(false)}
            >
               <X size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
