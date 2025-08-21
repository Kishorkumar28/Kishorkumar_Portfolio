
"use client";

import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, Briefcase } from 'lucide-react';
import { siteConfig } from '@/lib/constants';
import { useState, useEffect } from 'react';

const sentences = [
  "A Full-Stack Developer crafting seamless digital experiences with the MERN stack and modern web technologies.",
  "Building responsive and user-friendly web applications.",
  "Expert in JavaScript, React, Node.js, and MongoDB.",
  "Let's create something incredible together!"
];

const TYPING_SPEED = 100; // Milliseconds per character
const DELETING_SPEED = 50; // Milliseconds per character
const PAUSE_DURATION = 2000; // Milliseconds to pause after a sentence is typed

const HeroSection: FC = () => {
  const [displayedText, setDisplayedText] = useState(sentences[0]); // Start with the first sentence fully visible
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(sentences[0].length); // Start as if first sentence is typed
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(true); // Start paused to show the first sentence

  useEffect(() => {
    // Initial pause before starting the animation cycle
    const initialPauseTimeout = setTimeout(() => {
      setIsPaused(false);
      setIsDeleting(true); // Begin by deleting the first fully displayed sentence
    }, PAUSE_DURATION);

    return () => clearTimeout(initialPauseTimeout);
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    if (isPaused) return;

    const currentFullSentence = sentences[sentenceIndex % sentences.length];

    const handleTypingEffect = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentFullSentence.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else { // Finished deleting
          setIsDeleting(false);
          setSentenceIndex((prev) => prev + 1); // Move to the next sentence index
          // charIndex is already 0, will start typing from the beginning of the new sentence
        }
      } else { // Typing
        if (charIndex < currentFullSentence.length) {
          setDisplayedText(currentFullSentence.substring(0, charIndex + 1));
          setCharIndex((prev) => prev - 1);
        } else { // Finished typing current sentence
          setIsPaused(true); // Pause
          setTimeout(() => {
            setIsDeleting(true); // Prepare to delete the currently displayed sentence
            setIsPaused(false); // Unpause to start deletion
          }, PAUSE_DURATION);
        }
      }
    };

    const timeoutId = setTimeout(handleTypingEffect, isDeleting ? DELETING_SPEED : TYPING_SPEED);
    return () => clearTimeout(timeoutId);
  }, [charIndex, sentenceIndex, isDeleting, isPaused]); // removed displayedText

  return (
    <section
      id="hero"
      className="h-[140vh] relative overflow-hidden px-4 bg-gradient-to-br from-background to-secondary/30"
    >
      <div className="absolute inset-0 opacity-5">
        {/* Subtle background pattern or image can go here */}
      </div>

      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center pt-16 md:pt-0">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              <span className="block animate-fade-in-down">Hello, I&apos;m</span>
              <span className="block text-primary animate-fade-in-down animation-delay-100">{siteConfig.author}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-200 min-h-[100px] sm:min-h-[80px]">
              {displayedText}
              <span className="animate-blink ml-1 text-primary">|</span>
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up animation-delay-300">
              <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href="/projects" passHref legacyBehavior>
                  <a>
                    <Briefcase className="mr-2 h-5 w-5" />
                    View My Work
                  </a>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href="#about" passHref legacyBehavior>
                  <a>
                    <ArrowDown className="mr-2 h-5 w-5" />
                    Learn More About Me
                  </a>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
