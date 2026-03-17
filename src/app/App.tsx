import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/ui/CustomCursor';
import { VintageOverlay } from './components/ui/VintageOverlay';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-amber-900/30 selection:text-amber-200">
      <VintageOverlay />
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
