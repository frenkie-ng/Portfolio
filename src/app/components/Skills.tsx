import { Code2, Database, Smartphone, Cloud, GitBranch, Palette } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js']
  },
  {
    icon: Database,
    title: 'Backend Development',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs']
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'CI/CD', 'Kubernetes', 'Vercel']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    items: ['React Native', 'Flutter', 'iOS', 'Android', 'Progressive Web Apps']
  },
  {
    icon: GitBranch,
    title: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'VS Code', 'Jira', 'Figma']
  },
  {
    icon: Palette,
    title: 'Design & UX',
    items: ['UI/UX Design', 'Responsive Design', 'Accessibility', 'Prototyping']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card key={skill.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{skill.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="text-gray-600 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
