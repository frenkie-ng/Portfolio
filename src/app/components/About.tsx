import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Magnetic } from './ui/Magnetic';
import { Layers, Database, Globe, Command } from 'lucide-react';

export function About() {
  const { stats, skills } = portfolioData;

  const missionStatement = "Engineering high-performance digital architectures with a focus on scalability, precision, and state-of-the-art UI/UX. Transforming complex requirements into streamlined technical solutions.";

  return (
    <section id="about" className="relative bg-[#020202] bg-grid overflow-hidden border-y border-sky-500/5">
      <div id="skills" className="absolute top-0 left-0" />
      
      <div className="section-container section-padding">
        <div className="grid lg:grid-cols-2 gap-32 items-start">
          
          {/* Section Heading & Bio */}
          <div className="space-y-24">
            <div className="space-y-6">
              <div className="flex items-center gap-4 uppercase font-mono text-[10px] tracking-[0.5em] text-sky-500/40">
                 <Command size={14} /> / CAPABILITY_REPORTS
              </div>
              <h2 className="text-6xl md:text-8xl font-serif font-light text-white tracking-tighter">
                Technical <br/>
                <span className="italic font-extralight text-sky-400">Inventory</span>
              </h2>
            </div>

            <p className="text-2xl font-serif italic font-extralight text-slate-400 leading-relaxed border-l border-sky-500/10 pl-12">
              "{missionStatement}"
            </p>

            {/* Performance Metrics */}
            <div className="grid grid-cols-3 gap-12 pt-12">
               {stats.map((stat) => (
                  <div key={stat.label} className="space-y-4">
                     <div className="text-5xl font-serif font-light text-white">{stat.value}</div>
                     <div className="text-[9px] font-mono text-slate-600 uppercase tracking-widest leading-none">{stat.label}</div>
                  </div>
               ))}
            </div>
          </div>

          {/* Capability Grid */}
          <div className="grid sm:grid-cols-2 gap-8">
             {skills.map((group, i) => (
               <motion.div
                 key={group.category}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="p-8 border border-sky-500/5 bg-slate-900/10 space-y-8 relative group"
               >
                  <div className="flex items-center gap-3">
                     <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-sky-500/60">
                        {group.category}
                     </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                     {group.items.map((skill) => (
                       <span key={skill} className="text-[11px] font-serif font-light text-slate-500">
                          {skill}
                       </span>
                     ))}
                  </div>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
