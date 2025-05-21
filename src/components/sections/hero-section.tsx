import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, Briefcase } from 'lucide-react';
import { siteConfig } from '@/lib/constants';
import Image from 'next/image';

const HeroSection: FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30 relative overflow-hidden px-4 py-16 pt-32 md:pt-16">
      <div className="absolute inset-0 opacity-5">
        {/* Subtle background pattern or image can go here */}
      </div>
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            <span className="block">Hello, I&apos;m</span>
            <span className="block text-primary">{siteConfig.author}</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8">
            A Full-Stack Developer crafting seamless digital experiences with the MERN stack and modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href="/projects">
                <Briefcase className="mr-2 h-5 w-5" />
                View My Work
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href="#about">
                <ArrowDown className="mr-2 h-5 w-5" />
                Learn More About Me
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown className="h-8 w-8 text-primary/50" />
      </div>
    </section>
  );
};

export default HeroSection;
