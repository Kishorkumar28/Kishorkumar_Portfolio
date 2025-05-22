
"use client";

import type { FC, ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import SVGs as React components from the src/logos/ folder
import ReactLogoSVG from '@/logos/react.svg';
import JavaScriptLogoSVG from '@/logos/javascript.svg';
import HtmlLogoSVG from '@/logos/html.svg';
// import CssLogoSVG from '@/logos/css.svg'; // Reverted to css.svg - Temporarily removed
import MongoDbLogoSVG from '@/logos/mongodb.svg';
import SqlLogoSVG from '@/logos/sql.svg';
import NodeJsLogoSVG from '@/logos/nodejs.svg';
import TailwindCssLogoSVG from '@/logos/tailwind.svg';

gsap.registerPlugin(ScrollTrigger);

interface TechItem {
  name: string;
  icon: ReactElement;
}

const techStackItems: TechItem[] = [
  { name: 'React', icon: <ReactLogoSVG className="w-10 h-10 group-hover:opacity-75 transition-opacity" /> },
  { name: 'JavaScript', icon: <JavaScriptLogoSVG className="w-10 h-10 group-hover:opacity-75 transition-opacity" /> },
  { name: 'HTML5', icon: <HtmlLogoSVG className="w-10 h-10 group-hover:opacity-75 transition-opacity" /> },
  // { name: 'CSS3', icon: <CssLogoSVG className="w-10 h-10 group-hover:opacity-75 transition-opacity" /> }, // Temporarily removed
  { name: 'MongoDB', icon: <MongoDbLogoSVG className="w-10 h-10 group-hover:opacity-75 transition-opacity" /> },
  { name: 'SQL', icon: <SqlLogoSVG className="w-10 h-10 group-hover:opacity-75 transition-opacity" /> },
  { name: 'Node.js', icon: <NodeJsLogoSVG className="w-10 h-10 group-hover:opacity-75 transition-opacity" /> },
  { name: 'Tailwind CSS', icon: <TailwindCssLogoSVG className="w-10 h-10 group-hover:opacity-75 transition-opacity" /> },
];

const TechStackSection: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const titleEl = titleRef.current;

    if (el) {
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
      
      if (titleEl) {
        tl.fromTo(titleEl,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          ">-0.7" 
        );
      }
      
      const techItems = el.querySelectorAll('.tech-item-animate');
      techItems.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, y: 20, scale: 0.9 },
          {
            opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power1.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none none", 
            },
            delay: index * 0.05 + 0.3 
          }
        );
      });


      return () => {
        tl.kill();
        gsap.killTweensOf(techItems); 
        ScrollTrigger.getAll().forEach(instance => {
          if (instance.trigger === el || (titleEl && instance.trigger === titleEl) || Array.from(techItems).includes(instance.trigger as Element) ) {
            instance.kill();
          }
        });
      };
    }
  }, []);

  return (
    <section 
      id="tech-stack" 
      ref={sectionRef}
      className="py-12 md:py-16 bg-secondary text-secondary-foreground opacity-0" 
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef} 
          className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-primary opacity-0"
        >
          My Tech Arsenal
        </h2>
        <div className="relative w-full overflow-x-hidden group">
          <div className="flex animate-scroll-left group-hover:animation-pause">
            {[...techStackItems, ...techStackItems].map((item, index) => ( 
              <div 
                key={`${item.name}-${index}`} 
                className="group flex-shrink-0 flex flex-col items-center justify-center p-4 mx-3 sm:mx-4 w-32 h-36 sm:w-36 sm:h-40 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 tech-item-animate"
              >
                <div className="mb-3">
                  {item.icon}
                </div>
                <span className="text-sm sm:text-md font-medium text-card-foreground text-center">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
