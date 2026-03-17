import { motion } from 'framer-motion';
import { Mail, Phone, Send, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Magnetic } from './ui/Magnetic';
import { portfolioData } from '../data/portfolioData';

export function Contact() {
  const { email, phone } = portfolioData.personalInfo;

  return (
    <section id="contact" className="py-48 px-6 relative overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-48"
        >
          <div className="inline-block px-10 py-1 border-x border-sky-500/20 text-sky-500 text-[10px] font-black uppercase tracking-[1em] mb-12">
            The Inquiries
          </div>
          <h2 className="text-7xl md:text-[10rem] font-serif font-light mb-12 tracking-tighter text-[#f8fafc]">
            Get <span className="italic font-extralight text-sky-400">In Touch</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-2xl font-serif italic font-light">
             Opening a channel for collaboration and high-end production.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-32">
          {/* Detailed Info - Laboratory Grid Style */}
          <div className="lg:col-span-5 space-y-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 group"
            >
              <div className="flex items-center gap-6">
                 <div className="w-12 h-12 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/10 transition-all">
                    <Mail size={20} />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700">Relay Node 01</span>
              </div>
              <div>
                 <p className="text-slate-600 font-serif italic text-sm mb-4">Direct Message</p>
                 <h3 className="text-3xl md:text-4xl font-serif font-light text-[#f8fafc] break-all group-hover:text-sky-400 transition-colors">{email}</h3>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8 group"
            >
              <div className="flex items-center gap-6">
                 <div className="w-12 h-12 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/10 transition-all">
                    <Phone size={20} />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700">Relay Node 02</span>
              </div>
              <div>
                 <p className="text-slate-600 font-serif italic text-sm mb-4">Telecommunication</p>
                 <h3 className="text-3xl md:text-4xl font-serif font-light text-[#f8fafc] group-hover:text-sky-400 transition-colors">{phone}</h3>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 group"
            >
              <div className="flex items-center gap-6">
                 <div className="w-12 h-12 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500/10 transition-all">
                    <Globe size={20} />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700">Relay Node 03</span>
              </div>
              <div>
                 <p className="text-slate-600 font-serif italic text-sm mb-4">Base Coordinates</p>
                 <h3 className="text-3xl md:text-4xl font-serif font-light text-[#f8fafc] group-hover:text-sky-400 transition-colors">Global / Remote</h3>
              </div>
            </motion.div>
          </div>

          {/* Form Side - Minimalist Slate */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form className="space-y-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700 ml-1">Entity Name</label>
                  <input 
                    type="text" 
                    placeholder="Identify yourself..." 
                    className="w-full h-16 px-0 bg-transparent border-b border-sky-500/10 text-[#f8fafc] font-serif italic text-2xl placeholder:text-slate-800 focus:outline-none focus:border-sky-400 transition-all"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700 ml-1">Data Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter email address..." 
                    className="w-full h-16 px-0 bg-transparent border-b border-sky-500/10 text-[#f8fafc] font-serif italic text-2xl placeholder:text-slate-800 focus:outline-none focus:border-sky-400 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700 ml-1">The Message</label>
                <textarea 
                  placeholder="Draft your proposal here..." 
                  rows={4}
                  className="w-full h-40 py-4 bg-transparent border-b border-sky-500/10 text-[#f8fafc] font-serif italic text-2xl placeholder:text-slate-800 focus:outline-none focus:border-sky-400 transition-all resize-none"
                />
              </div>

              <Magnetic>
                <Button className="h-28 w-full md:w-auto px-20 rounded-none bg-sky-500/10 hover:bg-sky-500/20 text-[#f8fafc] border border-sky-400/20 transition-all text-xl font-serif italic group">
                  Transmit Signal <Send className="ml-6 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </Button>
              </Magnetic>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
