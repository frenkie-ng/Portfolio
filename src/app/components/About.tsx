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
              I'm a software engineer with nearly 3 years of experience building web applications. My work spans
              frontend development—crafting intuitive interfaces and proposing user-experience improvements—and
              blockchain problems such as smart contracts, on-chain/off-chain integrations, and designing
              decentralized systems.
            </p>
            <p className="text-lg text-gray-700">
              I specialize in building responsive frontends, reliable backends, and optimizing performance for
              distributed applications and blockchain-based products, including integrations with non-custodial wallets.
            </p>
            <p className="text-lg text-gray-700">
              Outside of work, I contribute to open-source projects, explore new protocols, and share technical
              insights through blog posts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
