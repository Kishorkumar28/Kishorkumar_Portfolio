
import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, Briefcase } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

const HeroSection: FC = () => {
  return (
    <section 
      id="hero" 
      className="h-[175vh] relative overflow-hidden px-4 bg-gradient-to-br from-background to-secondary/30" 
    >
      <div className="absolute inset-0 opacity-5">
        {/* Subtle background pattern or image can go here, it will scroll with the 175vh section */}
      </div>

      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center pt-16 md:pt-0"> 
        {/* This container makes its content sticky for 100vh. Added pt-16 md:pt-0 for navbar offset consistency */}
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              <span className="block animate-fade-in-down">Hello, I&apos;m</span>
              <span className="block text-primary animate-fade-in-down animation-delay-100">{siteConfig.author}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-200" >
              A Full-Stack Developer crafting seamless digital experiences with the MERN stack and modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animation-delay-300">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href="/projects"> {/* Removed passHref and legacyBehavior */}
                  <span className="flex items-center gap-2">
                    <Briefcase className="mr-2 h-5 w-5" />
                    View My Work
                  </span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href="#about"> {/* Removed passHref and legacyBehavior */}
                  <span className="flex items-center gap-2">
                    <ArrowDown className="mr-2 h-5 w-5" /> 
                    Learn More About Me
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        {/* 
          The original scroll down arrow was removed. 
          If a scroll indicator is desired within the sticky portion, it could be added here,
          for example, at the bottom of this sticky container.
        */}
      </div>
    </section>
  );
};

export default HeroSection;
