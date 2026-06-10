'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'zoom-in';
  duration?: number;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade-in-up',
  duration = 700,
  delay = 0,
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-in':
        return isRevealed ? 'opacity-100' : 'opacity-0';
      case 'fade-in-up':
        return isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
      case 'fade-in-left':
        return isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12';
      case 'fade-in-right':
        return isRevealed ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12';
      case 'zoom-in':
        return isRevealed ? 'opacity-100 scale-100' : 'opacity-0 scale-95';
      default:
        return isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${getAnimationClass()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
