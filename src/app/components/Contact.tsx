import { motion } from 'framer-motion';
import { Mail, Phone, Send, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Magnetic } from './ui/Magnetic';
import { portfolioData } from '../data/portfolioData';

export function Contact() {
  const { email } = portfolioData.personalInfo;
  const phone = "+84 123 456 789"; // Fallback or direct string if not in data

  return (
    <section id="contact" className="relative bg-[#020202] bg-grid overflow-hidden border-t border-sky-500/5">
      <div className="section-container section-padding">
        
        {/* Section Heading */}
        <div className="mb-32">
           <div className="flex items-center gap-4 uppercase font-mono text-[10px] tracking-[0.5em] text-sky-500/40 mb-8">
              <span className="w-8 h-[1px] bg-sky-500/20" /> // DISPATCH_CENTER
           </div>
           <h2 className="text-6xl md:text-8xl font-serif font-light text-white tracking-tighter">
              Get In <span className="italic font-extralight text-sky-400">Touch</span>
           </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-32">
          
          {/* Info Side */}
          <div className="space-y-16">
             {[
               { icon: <Mail size={18} />, label: 'Relay_01', val: email, type: 'Direct' },
               { icon: <Phone size={18} />, label: 'Relay_02', val: phone, type: 'Telecom' },
               { icon: <Globe size={18} />, label: 'Relay_03', val: 'Global / Remote', type: 'Base' }
             ].map((node) => (
               <div key={node.label} className="p-8 border border-sky-500/5 bg-slate-900/10 group hover:border-sky-500/20 transition-all">
                  <div className="flex items-center justify-between mb-8">
                     <span className="text-[9px] font-mono text-slate-700 tracking-[0.4em] uppercase">{node.label}</span>
                     <div className="text-sky-500/30">{node.icon}</div>
                  </div>
                  <div className="text-[10px] font-mono text-sky-500/40 uppercase mb-2">{node.type}</div>
                  <h3 className="text-3xl font-serif font-light text-white group-hover:text-sky-400 transition-colors break-all">
                    {node.val}
                  </h3>
               </div>
             ))}
          </div>

          {/* Form Side */}
          <div className="space-y-16">
            <form className="space-y-12 p-12 border border-sky-500/5 bg-slate-900/10">
               <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                     <label className="text-[9px] font-mono text-slate-700 uppercase tracking-widest">Identify_Name</label>
                     <input type="text" className="w-full bg-[#050505] border border-sky-500/10 p-4 font-mono text-xs text-white focus:outline-none focus:border-sky-500/30" placeholder="NAME//" />
                  </div>
                  <div className="space-y-4">
                     <label className="text-[9px] font-mono text-slate-700 uppercase tracking-widest">Data_Address</label>
                     <input type="email" className="w-full bg-[#050505] border border-sky-500/10 p-4 font-mono text-xs text-white focus:outline-none focus:border-sky-500/30" placeholder="EMAIL//" />
                  </div>
               </div>
               <div className="space-y-4">
                  <label className="text-[9px] font-mono text-slate-700 uppercase tracking-widest">Proposal_Data</label>
                  <textarea rows={4} className="w-full bg-[#050505] border border-sky-500/10 p-4 font-mono text-xs text-white focus:outline-none focus:border-sky-500/30 resize-none" placeholder="ENCODE MESSAGE..." />
               </div>
               <Magnetic>
                 <Button className="h-16 px-12 rounded-none bg-sky-500 text-black hover:bg-white transition-all font-mono font-bold text-[10px] tracking-[0.4em] uppercase">
                    TRANSMIT_SIGNAL
                 </Button>
               </Magnetic>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
