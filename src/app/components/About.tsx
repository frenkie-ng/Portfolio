import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Magnetic } from './ui/Magnetic';

// Tabbed interface for About & Skills to save vertical space
export function About() {
  const [activeTab, setActiveTab] = useState<'narrative' | 'technical'>('narrative');
  const { about, stats, skills } = portfolioData;

  return (
    <section id="about" className="py-32 px-6 relative bg-[#020203]">
      <div id="skills" className="absolute top-0 left-0" /> {/* Anchor for old internal links */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-baseline gap-12 mb-24">
           <h2 className="text-6xl md:text-8xl font-serif font-light tracking-tight text-[#f8fafc]">
              The <span className="italic font-extralight text-sky-400">Profile</span>
           </h2>
           <div className="flex gap-8">
              {['narrative', 'technical'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all ${
                    activeTab === tab ? 'text-sky-400' : 'text-slate-700 hover:text-slate-500'
                  }`}
                >
                  {tab}
                </button>
              ))}
           </div>
        </div>

        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'narrative' ? (
              <motion.div
                key="narrative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="grid lg:grid-cols-12 gap-20 items-center"
              >
                <div className="lg:col-span-7 space-y-12">
                   <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed text-slate-400 italic">
                     {about}
                   </p>
                   <div className="grid grid-cols-3 gap-8">
                      {stats.map((stat) => (
                         <div key={stat.label} className="space-y-2">
                            <div className="text-4xl font-serif font-extralight text-sky-400/80">{stat.value}</div>
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-700">{stat.label}</div>
                         </div>
                      ))}
                   </div>
                </div>
                <div className="lg:col-span-5 aspect-[4/5] border border-sky-500/5 bg-slate-900/5 p-4 overflow-hidden relative group">
                   <img 
                      src={portfolioData.personalInfo.avatar} 
                      alt="Avatar"
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                   />
                   <div className="absolute inset-x-8 bottom-8 h-[1px] bg-sky-500/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left" />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="technical"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
              >
                {skills.map((group) => (
                  <div key={group.category} className="space-y-8 p-8 border border-sky-500/5 bg-slate-900/5">
                    <h3 className="text-xl font-serif italic text-sky-400/60 font-light underline decoration-sky-500/20 underline-offset-8">
                      {group.category}
                    </h3>
                    <div className="space-y-4">
                      {group.items.map((skill) => (
                        <div key={skill} className="text-lg font-serif font-light text-slate-500 flex items-center gap-4">
                           <div className="w-1 h-1 rounded-full bg-sky-500/30" />
                           {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// Keeping a shell for Skills to avoid breakages if references exist elsewhere, but we'll integrate it into About
export function Skills() {
  return null; // Integrated into About Section above as a "Technical" tab
}
