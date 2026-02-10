import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="mb-4">
            Hi, I'm <span className="text-blue-600">Dung Nguyen</span>
          </h1>
          <h2 className="text-4xl mb-6">Software Engineer</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I build exceptional digital experiences that combine clean code with beautiful design.
            Passionate about creating scalable web applications and solving complex problems.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center mb-8">
          <Button asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:alex@example.com"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
