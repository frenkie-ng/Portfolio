import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovered(
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') !== null ||
        target.closest('a') !== null
      );
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (typeof window === 'undefined') return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-600 pointer-events-none z-[9999] flex items-center justify-center invisible md:visible"
      style={{
        x: mouseX,
        y: mouseY,
        translateX: '-50%',
        translateY: '-50%',
        opacity: isVisible ? 1 : 0,
        scale: isHovered ? 2.5 : 1,
        backgroundColor: isHovered ? 'rgba(37, 99, 235, 0.1)' : 'transparent',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <motion.div 
        className="w-1.5 h-1.5 bg-blue-600 rounded-full"
        animate={{ scale: isHovered ? 0.5 : 1 }}
      />
    </motion.div>
  );
}
