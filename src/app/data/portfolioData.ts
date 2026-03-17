import { Code2, Database, GitBranch, Cloud } from 'lucide-react';

export const portfolioData = {
  personalInfo: {
    name: "Dung Nguyen",
    title: "Software Engineer",
    description: "I build exceptional digital experiences that combine clean code with beautiful design. Passionate about creating scalable web applications and solving complex problems.",
    email: "alex@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
  },
  about: "Driven by the art of narrative and technical precision, I am a Software Engineer with 3+ years of experience in crafting high-impact digital solutions. My journey spans from the delicate logic of decentralized systems to the cinematic expression of modern web interfaces. I believe every line of code is a production still, contributing to a much larger story of innovation and user-centric design.",
  stats: [
    { label: "Production Years", value: "3+" },
    { label: "Reels Completed", value: "20+" },
    { label: "Studio Partners", value: "10+" }
  ],
  skills: [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'Tailwind', 'Next.js', 'Framer']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'REST APIs', 'Postgres', 'MongoDB', 'Supabase']
    },
    {
      category: 'Apparatus',
      items: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma']
    },
    {
      category: 'Specialties',
      items: ['Solidity', 'Web3.js', 'Performance', 'Animation']
    }
  ],
  projects: [
    {
      id: 'ecommerce',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzA3MTM0OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
      type: 'Full-stack'
    },
    {
      id: 'task-mgmt',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team workflows, and productivity analytics.',
      image: 'https://images.unsplash.com/photo-1661246627162-feb0269e0c07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzcwNjk1NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['TypeScript', 'Next.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com',
      demo: 'https://example.com',
      type: 'Web App'
    },
    {
      id: 'analytics',
      title: 'Analytics Dashboard',
      description: 'An interactive data visualization dashboard for tracking business metrics with customizable reports and charts.',
      image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzA2NTE4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'D3.js', 'Python', 'FastAPI'],
      github: 'https://github.com',
      demo: 'https://example.com',
      type: 'Data Viz'
    }
  ]
};
