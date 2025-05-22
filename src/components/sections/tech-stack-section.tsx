
"use client";

import type { FC, ReactElement } from 'react';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// SVG Icon Components
const ReactLogo: FC = () => (
  <svg viewBox="-10.5 -9.45 21 18.9" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#61DAFB] group-hover:text-[#88ECFF] transition-colors">
    <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
    <g stroke="currentColor" strokeWidth="1" fill="none">
      <ellipse rx="10" ry="4.5"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
      <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
    </g>
  </svg>
);

const JavaScriptLogo: FC = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 group-hover:opacity-90 transition-opacity rounded">
    <path fill="#F7DF1E" d="M0 0h48v48H0z"></path>
    <path fill="#000" d="M32.325 32.455c.25.435.399.94.399 1.515 0 1.126-.45 1.966-1.274 2.55-.86.62-1.966.929-3.224.929-1.296 0-2.38-.272-3.224-.82-.844-.547-1.42-1.275-1.748-2.204l2.992-.965c.193.548.547.965.997 1.24.45.27.98.41 1.62.41.675 0 1.225-.128 1.589-.37.399-.27.585-.62.585-1.079 0-.387-.112-.709-.337-.965-.225-.257-.585-.466-1.114-.64L28.2 31.35c-.966-.33-1.679-.73-2.129-1.202-.45-.473-.675-1.058-.675-1.758 0-.843.337-1.515.998-2.01.66-.495 1.515-.73 2.55-.73.93 0 1.714.21 2.416.64.66.43 1.112.98 1.368 1.68l-2.737.999c-.128-.375-.328-.652-.586-.82-.257-.17-.585-.257-.98-.257-.548 0-.948.128-1.18.37-.234.24-.338.547-.338.928 0 .33.097.608.284.821.186.213.508.399 1.008.585l1.202.425c1.296.425 2.115.835 2.55 1.31.435.472.64 1.031.64 1.696zM20.697 37.235h-3.45V24.71h3.45v12.525z"></path>
  </svg>
);

const HtmlLogo: FC = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#E34F26] group-hover:opacity-90 transition-opacity">
    <path fill="#E34F26" d="M20.8 115.2l-8.4-94.3h92.1l-8.4 94.3-37.6 10.5z"></path>
    <path fill="#F16529" d="M64 118.4V27.8h37.6l-7.2 81.1z"></path>
    <path fill="#EBEBEB" d="M64 59.9H39.4l-2.1-23.6h26.7v-8.5H27.6l.4 4.2 6.4 71.8h29.6v-8.5H40.3l-1.6-17.8h25.3zm0-23.6H45.2l-.9-10.1h20.6v-8.5H33.2l.4 4.2 3.2 36.3h27.2V36.3z"></path>
    <path fill="#FFF" d="M64 59.9v8.5h22.5l-2.1 23.6H64v8.5h27.6l.4-4.2L98.4 27.8H64v8.5h27.2l-.9 10.1zm0-23.6v8.5h19.5l-1.6-17.8H64v-8.5h29.6l.4 4.2-6.4 71.8H64v-8.5h23.3l1.2-13.9z"></path>
  </svg>
);

const CssLogo: FC = () => (
  <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#1572B6] group-hover:opacity-90 transition-opacity">
    <path fill="#1572B6" d="M20.8 115.2l-8.4-94.3h92.1l-8.4 94.3-37.6 10.5z"></path>
    <path fill="#33A9DC" d="M64 118.4V27.8h37.6l-7.2 81.1z"></path>
    <path fill="#EBEBEB" d="M64 59.9H39.4l-2.1-23.6h26.7v-8.5H27.6l.4 4.2 6.4 71.8h29.6v-8.5H40.3l-1.6-17.8h25.3zm0-23.6H45.2l-.9-10.1h20.6v-8.5H33.2l.4 4.2 3.2 36.3h27.2V36.3z"></path>
    <path fill="#FFF" d="M64 59.9v8.5h22.5l-2.1 23.6H64v8.5h27.6l.4-4.2L98.4 27.8H64v8.5h27.2l-.9 10.1zm0-23.6v8.5h19.5l-1.6-17.8H64v-8.5h29.6l.4 4.2-6.4 71.8H64v-8.5h23.3l1.2-13.9z"></path>
  </svg>
);

const MongoDbLogo: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 group-hover:opacity-90 transition-opacity">
    <path d="M15.373 6.099C15.063 4.418 13.74 3.168 12.002 3.168C10.448 3.168 9.231 4.193 8.808 5.661C6.699 5.868 5.135 7.503 5.135 9.606C5.135 10.593 5.468 11.486 6.044 12.186C4.469 12.618 3.601 13.807 3.601 15.156C3.601 16.732 4.833 17.949 6.439 17.949H10.06C10.06 17.949 10.06 20.832 12.002 20.832C13.932 20.832 13.932 17.949 13.932 17.949H17.573C19.168 17.949 20.4 16.722 20.4 15.156C20.4 13.807 19.532 12.618 17.957 12.186C18.532 11.486 18.865 10.593 18.865 9.606C18.865 7.503 17.301 5.868 15.192 5.661L15.372 6.099H15.373Z" fill="#4DB33D"></path>
    <path d="M12.0019 3.168C13.74 3.168 15.063 4.418 15.373 6.099L15.192 5.661C17.301 5.868 18.865 7.503 18.865 9.606C18.865 10.593 18.532 11.486 17.957 12.186C19.532 12.618 20.4 13.807 20.4 15.156C20.4 16.722 19.168 17.949 17.573 17.949H13.932C13.932 17.949 13.932 20.832 12.0019 20.832V3.168Z" fill="#3FA037"></path>
  </svg>
);

const NodeJsLogo: FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#68A063] group-hover:text-[#8CC84B] transition-colors">
    <path d="M12.62 18.556c.33-.223.546-.385.695-.553.346-.395.518-.806.518-1.233 0-.38-.12-.708-.358-1.007-.237-.298-.563-.498-.978-.637l4.725-9.318h-3.29L9.206 14.07c-.476.2-.853.352-1.133.454a3.21 3.21 0 0 1-1.048.166c-.505 0-.931-.128-1.278-.385-.347-.256-.52-.61-.52-1.062 0-.451.14-.81.42-1.078.28-.268.668-.402 1.163-.402.458 0 .89.087 1.297.26.407.173.748.355 1.022.545l.917-1.925a8.139 8.139 0 0 0-2.24-.763 6.03 6.03 0 0 0-2.61-.39c-1.168 0-2.19.267-3.068.8-.88.533-1.318 1.243-1.318 2.13 0 .552.132 1.053.398 1.502.265.45.613.81 1.043 1.079.43.27.918.458 1.464.562.546.103 1.07.155 1.571.155.833 0 1.6-.159 2.298-.476.7-.317 1.233-.691 1.602-1.122l-2.91 5.742h3.434l2.604-5.136c.49.095.934.242 1.33.44.393.2.722.468.986.805.265.338.397.749.397 1.233 0 .561-.185 1.035-.554 1.422-.37.387-.85.69-1.442.908l.88 1.96c.66-.245 1.23-.588 1.712-1.029.48-.44.72-.99.72-1.652z"/>
  </svg>
);

const TailwindCssLogo: FC = () => (
  <svg fill="none" viewBox="0 0 54 33" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-[#38BDF8] group-hover:text-[#7DD3FC] transition-colors">
    <path d="M13.5 0C6.042 0 0 6.042 0 13.5S6.042 27 13.5 27s13.5-6.042 13.5-13.5S20.958 0 13.5 0zm0 24.3A10.8 10.8 0 1124.3 13.5 10.812 10.812 0 0113.5 24.3zM40.5 0C33.042 0 27 6.042 27 13.5S33.042 27 40.5 27s13.5-6.042 13.5-13.5S47.958 0 40.5 0zm0 24.3A10.8 10.8 0 1151.3 13.5 10.812 10.812 0 0140.5 24.3z" fill="currentColor" />
  </svg>
);

const SqlLogo: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-[#00758F] group-hover:text-[#009FB7] transition-colors">
    <path d="M12 3c-4.42 0-8 1.79-8 4s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zm0 6c-3.31 0-6-1.34-6-3s2.69-3 6-3 6 1.34 6 3-2.69 3-6 3zm0 4c-4.42 0-8 1.79-8 4s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zm0 6c-3.31 0-6-1.34-6-3s2.69-3 6-3 6 1.34 6 3-2.69 3-6 3z"/>
  </svg>
);

interface TechItem {
  name: string;
  icon: ReactElement;
}

const techStackItems: TechItem[] = [
  { name: 'React', icon: <ReactLogo /> },
  { name: 'JavaScript', icon: <JavaScriptLogo /> },
  { name: 'HTML5', icon: <HtmlLogo /> },
  { name: 'CSS3', icon: <CssLogo /> },
  { name: 'MongoDB', icon: <MongoDbLogo /> },
  { name: 'SQL', icon: <SqlLogo /> },
  { name: 'Node.js', icon: <NodeJsLogo /> },
  { name: 'Tailwind CSS', icon: <TailwindCssLogo /> },
];

const TechStackSection: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
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
      
      const childTitle = el.querySelector('.animate-gsap-child-title');
      if (childTitle) {
        tl.fromTo(childTitle,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          ">-0.3"
        );
      }

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach(instance => {
          if (instance.trigger === el || (childTitle && instance.trigger === childTitle)) {
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
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-primary animate-gsap-child-title">
          My Tech Arsenal
        </h2>
        <div className="relative w-full overflow-x-hidden group">
          <div className="flex animate-scroll-left group-hover:animation-pause">
            {techStackItems.map((item, index) => (
              <div key={`${item.name}-${index}`} className="group flex-shrink-0 flex flex-col items-center justify-center p-4 mx-3 sm:mx-4 w-32 h-36 sm:w-36 sm:h-40 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="mb-3">
                  {item.icon}
                </div>
                <span className="text-sm sm:text-md font-medium text-card-foreground text-center">{item.name}</span>
              </div>
            ))}
            {/* Duplicate for infinite scroll */}
            {techStackItems.map((item, index) => (
              <div key={`${item.name}-${index}-duplicate`} className="group flex-shrink-0 flex flex-col items-center justify-center p-4 mx-3 sm:mx-4 w-32 h-36 sm:w-36 sm:h-40 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
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

    