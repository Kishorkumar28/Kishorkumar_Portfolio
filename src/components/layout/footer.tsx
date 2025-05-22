import type { FC } from 'react';
import { siteConfig } from '@/lib/constants';
import { Github, Linkedin } from 'lucide-react';

const Footer: FC = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com/Kishorkumar28" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-secondary-foreground hover:text-accent transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/kishor-kumar-k-520788252/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary-foreground hover:text-accent transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.author}. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
