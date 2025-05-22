
"use client";

import type { FC, ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import SVGs. Default Next.js behavior (without SVGR component loader)
// will provide an object with a 'src' property.
import ReactLogoSVG from '../../images/react.svg';
import JavaScriptLogoSVG from '../../images/javascript.svg';
import HtmlLogoSVG from '../../images/html.svg';
import CssLogoSVG from '../../images/css.svg';
import MongoDbLogoSVG from '../../images/mongodb.svg';
import SqlLogoSVG from '../../images/sql.svg';
import NodeJsLogoSVG from '../../images/nodejs.svg';
import TailwindCssLogoSVG from '../../images/tailwindcss.svg';


gsap.registerPlugin(ScrollTrigger);

interface TechItem {
  name: string;
  icon: ReactElement; // Can be <img> or other elements
}

const techStackItems: TechItem[] = [
  { name: 'React', icon: <img src={ReactLogoSVG.src} alt="React logo" className="w-10 h-10 group-hover:opacity-80 transition-opacity" /> },
  { name: 'JavaScript', icon: <img src={JavaScriptLogoSVG.src} alt="JavaScript logo" className="w-10 h-10 group-hover:opacity-80 transition-opacity" /> },
  { name: 'HTML5', icon: <img src={HtmlLogoSVG.src} alt="HTML5 logo" className="w-10 h-10 group-hover:opacity-80 transition-opacity" /> },
  { name: 'CSS3', icon: <img src={CssLogoSVG.src} alt="CSS3 logo" className="w-10 h-10 group-hover:opacity-80 transition-opacity" /> },
  { name: 'MongoDB', icon: <img src={MongoDbLogoSVG.src} alt="MongoDB logo" className="w-10 h-10 group-hover:opacity-80 transition-opacity" /> },
  { name: 'SQL', icon: <img src={SqlLogoSVG.src} alt="SQL logo" className="w-10 h-10 group-hover:opacity-80 transition-opacity" /> },
  { name: 'Node.js', icon: <img src={NodeJsLogoSVG.src} alt="Node.js logo" className="w-10 h-10 group-hover:opacity-80 transition-opacity" /> },
  { name: 'Tailwind CSS', icon: <img src={TailwindCssLogoSVG.src} alt="Tailwind CSS logo" className="w-10 h-10 group-hover:opacity-80 transition-opacity" /> },
];

const TechStackSection: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const techItemsRef = useRef<(HTMLDivElement | null)[]>([]);

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
      
      techItemsRef.current.forEach((item, index) => {
        if (item) {
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
        }
      });

      return () => {
        tl.kill();
        techItemsRef.current.forEach(item => {
          if (item && ScrollTrigger.getTweensOf(item).length > 0) {
            ScrollTrigger.getTweensOf(item).forEach(tween => tween.kill());
          }
        });
        if (titleEl && ScrollTrigger.getTweensOf(titleEl).length > 0) {
          ScrollTrigger.getTweensOf(titleEl).forEach(tween => tween.kill());
        }
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
        {techStackItems.length > 0 ? (
          <div className="relative w-full overflow-x-hidden overflow-y-hidden group">
            <div className="flex animate-scroll-left group-hover:animation-pause">
              {[...techStackItems, ...techStackItems].map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  ref={el => techItemsRef.current[index] = el}
                  className="group flex-shrink-0 flex flex-col items-center justify-center p-4 mx-3 sm:mx-4 w-32 h-36 sm:w-36 sm:h-40 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="mb-3">
                    {item.icon}
                  </div>
                  <span className="text-sm sm:text-md font-medium text-card-foreground text-center">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-muted-foreground">Tech stack coming soon...</p>
        )}
      </div>
    </section>
  );
};

export default TechStackSection;
