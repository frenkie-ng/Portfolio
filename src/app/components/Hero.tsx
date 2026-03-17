import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Button } from './ui/button';
import { Magnetic } from './ui/Magnetic';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  const { name, title, description } = portfolioData.personalInfo;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden bg-[#050505]">
      {/* Background Cinematic Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Artistic Scene Label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="px-8 py-2 border-x border-sky-500/20 text-sky-400 text-[10px] font-black uppercase tracking-[1em] backdrop-blur-sm">
            Scene 01: The Architect
          </span>
        </motion.div>

        {/* Name - Elegant Serif */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-8xl md:text-[12rem] font-serif font-light text-[#f8fafc] mb-12 tracking-[-0.03em] leading-none"
        >
          {name.split(' ')[0]}<span className="italic font-extralight text-sky-400 opacity-80">{name.split(' ')[1]}</span>
        </motion.h1>

        {/* Title & Description - Minimalist */}
        <div className="max-w-2xl mx-auto mb-20 space-y-8">
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1.5, delay: 0.8 }}
             className="text-2xl md:text-3xl font-serif italic text-sky-200/60 tracking-wide"
           >
             {title}
           </motion.p>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 1 }}
             className="text-slate-400 text-lg md:text-xl font-light leading-relaxed tracking-wide"
           >
             {description}
           </motion.p>
        </div>

        {/* CTA - Premium Minimalist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12"
        >
          <Magnetic>
            <Button className="h-20 px-12 rounded-none bg-transparent border border-sky-500/30 text-[#f8fafc] hover:bg-sky-500/10 transition-all font-serif italic text-xl group">
              View Showcase <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Magnetic>
          
          <Magnetic>
            <a href="#about" className="flex items-center gap-4 text-slate-500 hover:text-sky-400 transition-colors uppercase text-[10px] font-black tracking-[0.5em]">
               <Play size={16} fill="currentColor" /> Play Backstory
            </a>
          </Magnetic>
        </motion.div>
      </div>

      {/* Cinematic wide-frame decor */}
      <div className="absolute left-10 bottom-20 flex flex-col gap-4 opacity-20">
         <div className="w-1 h-32 bg-gradient-to-t from-sky-500 to-transparent" />
         <span className="text-[10px] font-black uppercase vertical-text tracking-widest text-sky-500">2.35:1 ANAMORPHIC</span>
      </div>
      
      <div className="absolute right-10 bottom-20 flex flex-col gap-4 items-end opacity-20">
         <span className="text-[10px] font-black uppercase vertical-text tracking-widest text-amber-500">4K REC.</span>
         <div className="w-1 h-32 bg-gradient-to-t from-amber-500 to-transparent" />
      </div>
    </section>
  );
}
