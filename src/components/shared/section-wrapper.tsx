import { cn } from '@/lib/utils';
import type React from 'react';

interface SectionWrapperProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  title: string; 
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, className, children, title }) => {
  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 animate-fadeIn opacity-0', 
        'w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
      style={{ animationFillMode: 'forwards', animationDelay: '0.2s' }} 
      aria-labelledby={`${id}-heading`}
    >
      <h2 id={`${id}-heading`} className="text-3xl md:text-4xl font-headline font-bold mb-10 md:mb-16 text-center text-primary-foreground relative pb-4
                     after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-20 after:h-1 after:bg-accent after:origin-center after:animate-title-underline-draw-delayed">
        {title}
      </h2>
      {children}
    </section>
  );
};
