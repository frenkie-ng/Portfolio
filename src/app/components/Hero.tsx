import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Button } from './ui/button';
import { Magnetic } from './ui/Magnetic';

export function Hero() {
  const { name, title } = portfolioData.personalInfo;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#020202] bg-grid overflow-hidden">
      {/* Precision Frame */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
         <div className="absolute top-8 left-8 bottom-8 right-8 border border-sky-500/20" />
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center">
        {/* Simplified Technical Metadata */}
        <div className="flex items-center gap-12 mb-20 font-mono text-[9px] tracking-[0.5em] text-sky-500/40 uppercase">
           <span>Core_Stable: 100%</span>
           <div className="w-1 h-1 rounded-full bg-sky-500/20" />
           <span>Stack: TS_REACT_NODE</span>
           <div className="w-1 h-1 rounded-full bg-sky-500/20" />
           <span className="text-amber-500/40">[43.2°N_23.1°E]</span>
        </div>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sky-500 font-mono text-[10px] tracking-[1.2em] uppercase mb-12 opacity-60">Architecting Digital Systems</p>
          <h1 className="text-5xl md:text-[8rem] font-serif font-light text-white mb-12 tracking-tighter whitespace-nowrap">
            {name.split(' ')[0]} <span className="italic font-extralight text-sky-400">{name.split(' ')[1]}</span>
          </h1>
        </motion.div>

        <div className="max-w-2xl space-y-16">
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1.5, delay: 0.5 }}
             className="text-2xl md:text-3xl font-mono text-slate-500 tracking-tight leading-snug"
           >
             {title}
           </motion.p>
           
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 1 }}
             className="flex items-center justify-center gap-16"
           >
             <Magnetic>
               <Button className="h-20 px-16 rounded-none bg-sky-500 text-black hover:bg-white transition-all font-mono font-bold text-[10px] tracking-[0.4em] uppercase">
                 EXEC_PROJECTS
               </Button>
             </Magnetic>
             <Magnetic>
               <a href="#about" className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-slate-500 hover:text-white transition-colors">
                 // VIEW_INTEL
               </a>
             </Magnetic>
           </motion.div>
        </div>
      </div>

      {/* Static Scale Decor */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 h-64 w-[1px] bg-sky-500/10 hidden lg:block" />
      <div className="absolute right-8 top-1/2 -translate-y-1/2 h-64 w-[1px] bg-sky-500/10 hidden lg:block" />
    </section>
  );
}
