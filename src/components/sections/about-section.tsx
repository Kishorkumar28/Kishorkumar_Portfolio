import type { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { siteConfig, skills } from '@/lib/constants';
import { Award, Brain, Code, Users } from 'lucide-react';
import Image from 'next/image';

const AboutSection: FC = () => {
  const mainSkills = skills.filter(skill => ['React', 'Node.js', 'MongoDB', 'Express.js', 'Next.js'].includes(skill.name)).slice(0, 5);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-background py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover my journey, skills, and passion for full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
              <Image 
                src="https://placehold.co/400x400.png" 
                alt={siteConfig.author}
                data-ai-hint="professional portrait"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 text-primary">{siteConfig.author}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {siteConfig.professionalSummary}
            </p>
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3">Core Proficiencies:</h4>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {mainSkills.map(skill => (
                  <span key={skill.id} className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <Button asChild size="lg" variant="outline" className="shadow-md hover:shadow-lg transition-shadow">
              <Link href="/skills">
                Explore All My Skills
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Award className="h-8 w-8 text-accent" />, title: "Experience", text: "X+ Years in Web Development" },
            { icon: <Brain className="h-8 w-8 text-accent" />, title: "Problem Solver", text: "Innovative and Analytical" },
            { icon: <Code className="h-8 w-8 text-accent" />, title: "MERN Expert", text: "Full-Stack Proficiency" },
            { icon: <Users className="h-8 w-8 text-accent" />, title: "Team Player", text: "Collaborative & Communicative" },
          ].map((item, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.text.replace("X+", "X") /* Replace X with actual years if needed */}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
