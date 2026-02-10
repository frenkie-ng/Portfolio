import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BlciUyMGNvZGluZyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzA3MTc2Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Developer workspace"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              I'm a passionate software engineer with over 5 years of experience building web applications.
              I specialize in creating responsive, user-friendly interfaces and robust backend systems.
            </p>
            <p className="text-lg text-gray-700">
              My journey in software development started with a curiosity about how things work,
              and it has evolved into a career where I get to solve real-world problems through code.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, you can find me contributing to open-source projects,
              learning new technologies, or sharing my knowledge through technical blog posts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
