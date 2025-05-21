
"use client";

import type { FC } from 'react';
import Link from 'next/link';
import { Menu, X, Briefcase, Home, User, Lightbulb, Code } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { navLinks, siteConfig } from '@/lib/constants';
import type { NavLinkData } from '@/lib/constants';

const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);

      const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollableHeight > 0) {
        const currentProgress = (window.scrollY / totalScrollableHeight) * 100;
        setScrollProgress(currentProgress);
      } else {
        setScrollProgress(0); // No scrollable area or already at the bottom
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Call handler once on mount to set initial state
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevents scrolling to a hash (e.g., #about) on homepage initial load/refresh
  useEffect(() => {
    if (window.location.pathname === '/' && window.location.hash) {
      const timer = setTimeout(() => {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const NavLinkItem: FC<{ link: NavLinkData; onClick?: () => void, isMobile?: boolean }> = ({ link, onClick, isMobile }) => (
    <Link href={link.href} passHref legacyBehavior>
      <a
        onClick={onClick}
        className={`
          px-3 py-2 rounded-md text-base font-medium transition-colors duration-300
          ${isMobile ? 'block w-full text-left hover:bg-accent hover:text-accent-foreground' : 'hover:text-accent focus:text-accent focus:outline-none focus:ring-2 focus:ring-accent/50'}
        `}
      >
        {link.label}
      </a>
    </Link>
  );
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" passHref legacyBehavior>
              <a className="flex items-center gap-2 text-xl font-bold text-primary hover:text-accent transition-colors">
                <Code className="h-7 w-7 text-accent" />
                <span>{siteConfig.name}</span>
              </a>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <NavLinkItem key={link.href} link={link} />
            ))}
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-0 pt-8 bg-card">
                <div className="flex flex-col h-full">
                  <div className="px-4 pb-4 border-b">
                     <Link href="/" passHref legacyBehavior>
                      <a className="flex items-center gap-2 text-lg font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                        <Code className="h-6 w-6 text-accent" />
                        <span>{siteConfig.name}</span>
                      </a>
                    </Link>
                  </div>
                  <nav className="flex-grow px-2 py-4 space-y-1">
                    {navLinks.map((link) => (
                       <SheetClose asChild key={link.href}>
                        <NavLinkItem link={link} onClick={() => setIsMobileMenuOpen(false)} isMobile />
                       </SheetClose>
                    ))}
                  </nav>
                  <div className="p-4 border-t mt-auto">
                     <p className="text-xs text-muted-foreground text-center">&copy; {new Date().getFullYear()} {siteConfig.name}</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      {/* Scroll Progress Bar */}
      <div className="w-full h-1 bg-transparent"> {/* Container to ensure bar is below main navbar content */}
        <div 
          className="h-1 bg-accent transition-all duration-100 ease-linear" 
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
          role="progressbar"
          aria-valuenow={Math.round(scrollProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </header>
  );
};

export default Navbar;
