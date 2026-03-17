import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUp } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const { name, github, linkedin, email } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-48 px-6 relative bg-[#050505] border-t border-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <Magnetic>
            <button 
              onClick={scrollToTop}
              className="w-20 h-20 border border-sky-500/10 text-slate-700 hover:text-sky-400 hover:border-sky-500/40 transition-all mb-32 group"
            >
              <ArrowUp className="w-6 h-6 mx-auto group-hover:-translate-y-4 transition-all duration-500" />
            </button>
          </Magnetic>

          <div className="w-full grid md:grid-cols-3 gap-32 items-end border-b border-sky-900/10 pb-32 mb-32">
             <div className="space-y-8">
                <h3 className="text-5xl font-serif font-light text-[#f8fafc]">
                   DUNG<span className="italic font-extralight text-sky-400">.</span>
                </h3>
                <p className="text-slate-500 font-serif italic text-lg font-light max-w-xs">
                   Synthesizing high-end engineering with artistic narrative.
                </p>
             </div>

             <div className="flex justify-center gap-16">
                <Magnetic>
                  <a href={github} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-sky-400 transition-colors">
                    <Github size={24} />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-sky-400 transition-colors">
                    <Linkedin size={24} />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href={`mailto:${email}`} className="text-slate-700 hover:text-sky-400 transition-colors">
                    <Mail size={24} />
                  </a>
                </Magnetic>
             </div>

             <div className="text-right space-y-4">
                <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-800">Operational Zone</p>
                <p className="text-slate-500 font-serif italic text-lg font-light">Global / Digital</p>
             </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 opacity-30">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-700">
              © {currentYear} {name} Production Collective.
            </p>
            <div className="flex gap-12 items-center">
               <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-700">Ref.342-01</span>
               <div className="flex gap-2">
                  <div className="w-1 h-1 rounded-full bg-slate-800" />
                  <div className="w-1 h-1 rounded-full bg-slate-800" />
                  <div className="w-1 h-1 rounded-full bg-slate-800" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
