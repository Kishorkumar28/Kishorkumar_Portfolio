
"use client";

import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { siteConfig, skills } from '@/lib/constants';
import { Award, Brain, Code, Users } from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: FC = () => {
  const mainSkills = skills.filter(skill => ['React', 'Node.js', 'MongoDB', 'Express.js', 'Next.js'].includes(skill.name)).slice(0, 5);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      // Ensure GSAP animations target elements correctly even if classes change
      // Target direct children or specific named elements if needed for more complex GSAP animations.
      // For a simple section reveal, targeting 'el' itself is fine.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%", 
          end: "top 35%",   
          scrub: 1,       
        }
      });

      tl.fromTo(el, 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, ease: "power2.inOut", duration: 1 }
      );
      
      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach(instance => {
          if (instance.trigger === el) {
            instance.kill();
          }
        });
      };
    }
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-secondary text-secondary-foreground py-16 px-4 opacity-0" // Changed to bg-secondary and text-secondary-foreground
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight"> {/* Inherits text-secondary-foreground */}
            About Me
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/80 max-w-2xl mx-auto"> {/* Adjusted for new foreground */}
            Discover my journey, skills, and passion for full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-secondary-foreground/20"> {/* Border adjusted for new foreground */}
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
            <h3 className="text-2xl font-semibold mb-4 text-secondary-foreground">{siteConfig.author}</h3> {/* Adjusted for new foreground */}
            <p className="text-secondary-foreground/80 leading-relaxed mb-6"> {/* Adjusted for new foreground */}
              {siteConfig.professionalSummary}
            </p>
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-secondary-foreground/90">Core Proficiencies:</h4> {/* Adjusted for new foreground */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {mainSkills.map(skill => (
                  <span key={skill.id} className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <Button asChild size="lg" variant="outline" className="shadow-md hover:shadow-lg transition-shadow text-secondary-foreground border-secondary-foreground/50 hover:bg-accent hover:text-accent-foreground hover:border-accent"> {/* Button text and border color adjusted */}
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
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300" // Changed to bg-card
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-card-foreground">{item.title}</h4> {/* Changed to text-card-foreground */}
              <p className="text-sm text-muted-foreground">{item.text.replace("X+", "X")}</p> {/* Remains text-muted-foreground, should be okay on card bg */}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
