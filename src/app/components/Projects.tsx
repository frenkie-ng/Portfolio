import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Github, ExternalLink, Play, ArrowRight, ArrowLeft } from 'lucide-react';
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
    <section id="projects" ref={targetRef} className="relative h-[300vh] bg-[#020203]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-20 left-12 md:left-24 z-20">
            <h2 className="text-6xl md:text-9xl font-serif font-light tracking-tighter text-[#f8fafc] opacity-20">
              Visual <span className="italic font-extralight text-sky-400">Works</span>
            </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-20 px-12 md:px-24">
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex-shrink-0 w-[85vw] md:w-[65vw] aspect-[2.35/1] overflow-hidden border border-sky-500/10 bg-slate-900/5"
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
              />
              
              {/* Artistic Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="flex items-center gap-6 mb-4 opacity-60">
                   <span className="text-sky-500 text-[10px] font-black uppercase tracking-[0.4em]">{project.type}</span>
                   <div className="h-[1px] w-12 bg-sky-500/20" />
                   <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.4em]">Project 0{index + 1}</span>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-serif font-light text-[#f8fafc] mb-6 tracking-tight">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-12 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                  <Magnetic>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-[#f8fafc] transition-colors text-[10px] font-black uppercase tracking-[0.4em]">
                      <Github size={18} /> Source File
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-sky-400 hover:text-sky-300 transition-colors text-[10px] font-black uppercase tracking-[0.4em]">
                      <ExternalLink size={18} /> Live Sequence
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>
          ))}
          
          {/* "The End" Signal */}
          <div className="flex-shrink-0 w-[50vw] flex flex-col justify-center items-center text-center px-12">
             <p className="text-sky-500 text-[10px] font-black uppercase tracking-[1em] mb-8">End of Reel</p>
             <h4 className="text-4xl font-serif italic font-extralight text-slate-700">More sequences in production.</h4>
             <div className="mt-20 flex items-center gap-4 group cursor-pointer" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500 group-hover:text-sky-400 transition-colors">Go to Inquiries</span>
                <ArrowRight className="text-sky-400 group-hover:translate-x-2 transition-transform" size={16} />
             </div>
          </div>
        </motion.div>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-20 left-12 md:left-24 right-12 md:right-24 h-[1px] bg-slate-900">
           <motion.div 
             className="h-full bg-sky-500/40"
             style={{ scaleX: scrollYProgress, originX: 0 }}
           />
        </div>
      </div>
    </section>
  );
}
