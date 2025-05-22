
"use client";

import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { siteConfig, skills } from '@/lib/constants';
import { Award, Brain, Code, Users, BookOpen } from 'lucide-react'; // Added BookOpen for education
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: FC = () => {
  const mainSkills = skills.filter(skill => ['React', 'Node.js', 'MongoDB', 'Express.js', 'Next.js'].includes(skill.name)).slice(0, 5);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%", // When the top of the section is 85% from the top of the viewport
          end: "top 35%",   // When the top of the section is 35% from the top of the viewport
          scrub: 1,         // Smooth scrubbing effect
        }
      });

      // Animate the entire section from scale 0.8, opacity 0 to scale 1, opacity 1
      tl.fromTo(el,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, ease: "power2.inOut", duration: 1 }
      );

      // Animate direct children text elements and image container for a layered effect, after the main section reveal
      const childElements = el.querySelectorAll('.animate-gsap-child');
      childElements.forEach((child) => { // Removed index as it's not used in this simplified staggering
        tl.fromTo(child,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          ">-0.3" // Stagger start times slightly
        );
      });
      
      const infoCards = el.querySelectorAll('.info-card-animate');
      infoCards.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%", // Start animation when 90% of the card is visible
              toggleActions: "play none none none", // Play animation once when it enters viewport
            },
            delay: index * 0.1 // Stagger the animation for each card
          }
        );
      });


      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach(instance => {
          if (instance.trigger === el || Array.from(childElements).includes(instance.trigger as Element) || Array.from(infoCards).includes(instance.trigger as Element)) {
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
      className="min-h-screen flex items-center justify-center bg-secondary text-secondary-foreground py-16 px-4 opacity-0" // Initial opacity for GSAP
    >
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-gsap-child">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About Me
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
            Discover my journey, skills, and passion for full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start animate-gsap-child">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-secondary-foreground/20">
              <Image
                src="/memoji-kishorkumar.png"
                alt={siteConfig.author}
                data-ai-hint="memoji avatar"
                layout="fill"
                objectFit="cover"
                className="transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <div className="text-center md:text-left animate-gsap-child">
            <h3 className="text-2xl font-semibold mb-4 text-secondary-foreground">{siteConfig.author}</h3>
            <p className="text-secondary-foreground/80 leading-relaxed mb-6">
              {siteConfig.professionalSummary}
            </p>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-2 text-secondary-foreground/90 flex items-center justify-center md:justify-start">
                <BookOpen className="mr-2 h-5 w-5 text-accent" />
                Highest Level of Education
              </h4>
              <p className="text-secondary-foreground/80">SASTRA Deemed to be University, Tamilnadu</p>
              <p className="text-secondary-foreground/70 text-sm">Bachelor of Technology, Computer Science and Engineering</p>
              <p className="text-secondary-foreground/70 text-sm">2020 - 2024</p>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3 text-secondary-foreground/90">Core Proficiencies:</h4>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {mainSkills.map(skill => (
                  <span key={skill.id} className="bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <Button asChild size="lg" variant="outline" className="shadow-md hover:shadow-lg transition-shadow text-secondary-foreground border-secondary-foreground/50 hover:bg-accent hover:text-accent-foreground hover:border-accent">
              <Link href="/skills" passHref legacyBehavior>
                <a> {/* Explicit <a> tag for legacyBehavior */}
                  Explore All My Skills
                </a>
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
              className="info-card-animate bg-card p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300" 
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-card-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.text.replace("X+", "X")}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

