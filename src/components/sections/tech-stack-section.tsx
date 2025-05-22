
"use client";

import type { FC, ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Inline SVG components (as they were before src/logos/ import attempt)

const ReactLogo: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="-10.5 -9.45 21 18.9" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="10" ry="4.5"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

const JavaScriptLogo: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fill="#F7DF1E" d="M0 0h48v48H0z"></path>
    <path fill="#000" d="M32.325 32.455c.25.435.399.94.399 1.515 0 1.126-.45 1.966-1.274 2.55-.86.62-1.966.929-3.224.929-1.296 0-2.38-.272-3.224-.82-.844-.547-1.42-1.275-1.748-2.204l2.992-.965c.193.548.547.965.997 1.24.45.27.98.41 1.62.41.675 0 1.225-.128 1.589-.37.399-.27.585-.62.585-1.079 0-.387-.112-.709-.337-.965-.225-.257-.585-.466-1.114-.64L28.2 31.35c-.966-.33-1.679-.73-2.129-1.202-.45-.473-.675-1.058-.675-1.758 0-.843.337-1.515.998-2.01.66-.495 1.515-.73 2.55-.73.93 0 1.714.21 2.416.64.66.43 1.112.98 1.368 1.68l-2.737.999c-.128-.375-.328-.652-.586-.82-.257-.17-.585-.257-.98-.257-.548 0-.948.128-1.18.37-.234.24-.338.547-.338.928 0 .33.097.608.284.821.186.213.508.399 1.008.585l1.202.425c1.296.425 2.115.835 2.55 1.31.435.472.64 1.031.64 1.696zM20.697 37.235h-3.45V24.71h3.45v12.525z"></path>
  </svg>
);

const HtmlLogo: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fill="#E44D26" d="M20.8 115.2l-8.4-94.3h92.1l-8.4 94.3-37.6 10.5z"></path>
    <path fill="#F16529" d="M64 118.4V27.8h37.6l-7.2 81.1z"></path>
    <path fill="#EBEBEB" d="M64 59.9H39.4l-2.1-23.6h26.7v-8.5H27.6l.4 4.2 6.4 71.8h29.6v-8.5H40.3l-1.6-17.8h25.3zm0-23.6H45.2l-.9-10.1h20.6v-8.5H33.2l.4 4.2 3.2 36.3h27.2V36.3z"></path>
    <path fill="#FFF" d="M64 59.9v8.5h22.5l-2.1 23.6H64v8.5h27.6l.4-4.2L98.4 27.8H64v8.5h27.2l-.9 10.1zm0-23.6v8.5h19.5l-1.6-17.8H64v-8.5h29.6l.4 4.2-6.4 71.8H64v-8.5h23.3l1.2-13.9z"></path>
  </svg>
);

const CssLogo: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path fill="#1572B6" d="M20.8 115.2l-8.4-94.3h92.1l-8.4 94.3-37.6 10.5z"></path>
    <path fill="#33A9DC" d="M64 118.4V27.8h37.6l-7.2 81.1z"></path>
    <path fill="#EBEBEB" d="M64 59.9H39.4l-2.1-23.6h26.7v-8.5H27.6l.4 4.2 6.4 71.8h29.6v-8.5H40.3l-1.6-17.8h25.3zm0-23.6H45.2l-.9-10.1h20.6v-8.5H33.2l.4 4.2 3.2 36.3h27.2V36.3z"></path>
    <path fill="#FFF" d="M64 59.9v8.5h22.5l-2.1 23.6H64v8.5h27.6l.4-4.2L98.4 27.8H64v8.5h27.2l-.9 10.1zm0-23.6v8.5h19.5l-1.6-17.8H64v-8.5h29.6l.4 4.2-6.4 71.8H64v-8.5h23.3l1.2-13.9z"></path>
  </svg>
);

const MongoDbLogo: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M15.373 6.099C15.063 4.418 13.74 3.168 12.002 3.168C10.448 3.168 9.231 4.193 8.808 5.661C6.699 5.868 5.135 7.503 5.135 9.606C5.135 10.593 5.468 11.486 6.044 12.186C4.469 12.618 3.601 13.807 3.601 15.156C3.601 16.732 4.833 17.949 6.439 17.949H10.06C10.06 17.949 10.06 20.832 12.002 20.832C13.932 20.832 13.932 17.949 13.932 17.949H17.573C19.168 17.949 20.4 16.722 20.4 15.156C20.4 13.807 19.532 12.618 17.957 12.186C18.532 11.486 18.865 10.593 18.865 9.606C18.865 7.503 17.301 5.868 15.192 5.661L15.372 6.099H15.373Z" fill="#4DB33D"></path>
    <path d="M12.0019 3.168C13.74 3.168 15.063 4.418 15.373 6.099L15.192 5.661C17.301 5.868 18.865 7.503 18.865 9.606C18.865 10.593 18.532 11.486 17.957 12.186C19.532 12.618 20.4 13.807 20.4 15.156C20.4 16.722 19.168 17.949 17.573 17.949H13.932C13.932 17.949 13.932 20.832 12.0019 20.832V3.168Z" fill="#3FA037"></path>
  </svg>
);

const SqlLogo: FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 3C7.03 3 3 4.79 3 7s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 2c3.86 0 7 1.34 7 3s-3.14 3-7 3-7-1.34-7-3 3.14-3 7-3zm0 7c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 2c3.86 0 7 1.34 7 3s-3.14 3-7 3-7-1.34-7-3 3.14-3 7-3zm0 7c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 2c3.86 0 7 1.34 7 3s-3.14 3-7 3-7-1.34-7-3 3.14-3 7-3z" />
  </svg>
);

const NodeJsLogo: FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12.62 18.556c.33-.223.546-.385.695-.553.346-.395.518-.806.518-1.233 0-.38-.12-.708-.358-1.007-.237-.298-.563-.498-.978-.637l4.725-9.318h-3.29L9.206 14.07c-.476.2-.853.352-1.133.454a3.21 3.21 0 0 1-1.048.166c-.505 0-.931-.128-1.278-.385-.347-.256-.52-.61-.52-1.062 0-.451.14-.81.42-1.078.28-.268.668-.402 1.163-.402.458 0 .89.087 1.297.26.407.173.748.355 1.022.545l.917-1.925a8.139 8.139 0 0 0-2.24-.763 6.03 6.03 0 0 0-2.61-.39c-1.168 0-2.19.267-3.068.8-.88.533-1.318 1.243-1.318 2.13 0 .552.132 1.053.398 1.502.265.45.613.81 1.043 1.079.43.27.918.458 1.464.562.546.103 1.07.155 1.571.155.833 0 1.6-.159 2.298-.476.7-.317 1.233-.691 1.602-1.122l-2.91 5.742h3.434l2.604-5.136c.49.095.934.242 1.33.44.393.2.722.468.986.805.265.338.397.749.397 1.233 0 .561-.185 1.035-.554 1.422-.37.387-.85.69-1.442.908l.88 1.96c.66-.245 1.23-.588 1.712-1.029.48-.44.72-.99.72-1.652z"></path>
  </svg>
);

const TailwindCssLogo: FC<{ className?: string }> = ({ className }) => (
  <svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.854 7.146 8 8.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 9l1.147 1.146a.5.5 0 0 1-.708.708L8 9.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 9 6.146 7.854a.5.5 0 1 1 .708-.708z"></path>
  </svg>
);


interface TechItem {
  name: string;
  icon: ReactElement;
}

const techStackItems: TechItem[] = [
  { name: 'React', icon: <ReactLogo className="w-10 h-10 text-sky-500 group-hover:text-sky-400 transition-colors" /> },
  { name: 'JavaScript', icon: <JavaScriptLogo className="w-10 h-10 group-hover:opacity-90 transition-opacity" /> },
  { name: 'HTML5', icon: <HtmlLogo className="w-10 h-10 group-hover:opacity-90 transition-opacity" /> },
  { name: 'CSS3', icon: <CssLogo className="w-10 h-10 group-hover:opacity-90 transition-opacity" /> },
  { name: 'MongoDB', icon: <MongoDbLogo className="w-10 h-10 group-hover:opacity-90 transition-opacity" /> },
  { name: 'SQL', icon: <SqlLogo className="w-10 h-10 text-blue-600 group-hover:text-blue-500 transition-colors" /> },
  { name: 'Node.js', icon: <NodeJsLogo className="w-10 h-10 text-green-500 group-hover:text-green-400 transition-colors" /> },
  { name: 'Tailwind CSS', icon: <TailwindCssLogo className="w-10 h-10 text-teal-500 group-hover:text-teal-400 transition-colors" /> },
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
      className="py-12 md:py-16 bg-secondary text-secondary-foreground opacity-0" // Initial opacity 0 for GSAP
    >
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef} 
          className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-primary opacity-0" // Initial opacity 0 for GSAP
        >
          My Tech Arsenal
        </h2>
        {techStackItems.length > 0 ? (
          <div className="relative w-full overflow-x-hidden overflow-y-hidden group"> {/* Added overflow-y-hidden here */}
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

