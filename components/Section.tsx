import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', dark = false, id }) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-32 px-6 md:px-12 container mx-auto ${dark ? 'bg-brand-dark text-white' : ''} ${className}`}
    >
      {children}
    </section>
  );
};