import { motion } from 'framer-motion';

export function VintageOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden bg-[#020203]">
      {/* Background Cinematic Glows (Floating Blobs) */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-500/5 blur-[120px] rounded-full"
      />
      <motion.div 
        animate={{ 
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-amber-500/5 blur-[150px] rounded-full"
      />
      
      {/* Suble Global Fog */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(14,165,233,0.03)_0%,transparent_100%)]" />

      {/* Subtle Anamorphic Letterboxing (Translucent) */}
      <div className="fixed top-0 left-0 w-full h-[6vh] bg-gradient-to-b from-black/60 to-transparent z-[100]" />
      <div className="fixed bottom-0 left-0 w-full h-[6vh] bg-gradient-to-t from-black/60 to-transparent z-[100]" />
    </div>
  );
}
