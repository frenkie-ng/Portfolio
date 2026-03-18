import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, ExternalLink, Cpu, Code2, ArrowRight } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';

function ImageWithFallback({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={(e) => {
        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080';
      }}
    />
  );
}

export function Projects() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.6%"]);

  return (
    <section id="projects" ref={targetRef} className="relative h-[300vh] bg-[#020202] bg-grid border-b border-sky-500/5">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        {/* Header Alignment */}
        <div className="section-container mb-20 space-y-6">
            <div className="flex items-center gap-4 text-sky-500 font-mono text-[10px] tracking-[0.5em] uppercase opacity-40">
               <Cpu size={14} /> / PROJECT_SEQUENCES
            </div>
            <h2 className="text-6xl md:text-8xl font-serif font-light tracking-tighter text-white">
              Technical <span className="italic font-extralight text-sky-400">Works</span>
            </h2>
        </div>

        {/* Horizontal Reel */}
        <motion.div style={{ x }} className="flex gap-20 px-12 md:px-24">
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex-shrink-0 w-[85vw] md:w-[65vw] aspect-[2.35/1] overflow-hidden border border-sky-500/10 bg-slate-900/10"
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-10 transition-all duration-[1.5s] ease-out"
              />
              
              {/* Technical Detail Overlays */}
              <div className="absolute inset-0 p-16 flex flex-col justify-end">
                <div className="grid lg:grid-cols-12 gap-12 items-end">
                   <div className="lg:col-span-8 space-y-8">
                      <div className="flex items-center gap-4 font-mono text-[9px] text-sky-500/40 uppercase tracking-widest">
                         <span>ID: P-0{index + 1}</span>
                         <span className="w-1 h-1 rounded-full bg-sky-500/20" />
                         <span>EST_2024</span>
                      </div>
                      <h3 className="text-5xl md:text-7xl font-serif font-light text-white tracking-tighter">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        {['React', 'Node', 'TypeScript', 'Tailwind'].map(tech => (
                          <span key={tech} className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                            {tech}
                          </span>
                        ))}
                      </div>
                   </div>
                   
                   <div className="lg:col-span-4 flex gap-12 justify-end pb-2">
                     <Magnetic>
                       <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-slate-500 hover:text-sky-400 transition-colors">
                         SOURCE_CODE
                       </a>
                     </Magnetic>
                     <Magnetic>
                       <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-sky-400 hover:text-white transition-colors">
                         RUN_SEQUENCE
                       </a>
                     </Magnetic>
                   </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Transition */}
          <div className="flex-shrink-0 w-[40vw] flex flex-col justify-center items-start pl-20 border-l border-sky-500/5">
             <h4 className="text-3xl font-serif italic font-extralight text-slate-600 mb-12">Next sequence in development.</h4>
             <div className="flex items-center gap-6 group cursor-pointer" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-slate-500 group-hover:text-sky-400 transition-colors">DISPATCH_MESSAGE</span>
                <ArrowRight className="text-sky-400 group-hover:translate-x-3 transition-transform" size={16} />
             </div>
          </div>
        </motion.div>

        {/* Global Progress Indicator */}
        <div className="absolute bottom-12 left-0 w-full h-[1px] bg-sky-500/5">
           <motion.div 
             className="h-full bg-sky-500/40"
             style={{ scaleX: scrollYProgress, originX: 0 }}
           />
        </div>
      </div>
    </section>
  );
}
