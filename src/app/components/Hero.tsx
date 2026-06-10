'use client';

import React, { useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const heroImages = [
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop', // Construction Site
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop', // Structural Building
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', // Completed Luxury Villa
];

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScrollDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Slideshow with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-kenburns-1 opacity-0"
          style={{ backgroundImage: `url("${heroImages[0]}")` }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-kenburns-2 opacity-0"
          style={{ backgroundImage: `url("${heroImages[1]}")` }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-kenburns-3 opacity-0"
          style={{ backgroundImage: `url("${heroImages[2]}")` }}
        />
        {/* Dark Overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/55 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto mt-16">
        <h1
          className={`text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight transition-all duration-1000 transform ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          Building Your Dreams with <br />
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-md">
            Quality & Trust
          </span>
        </h1>

        <p
          className={`text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light transition-all duration-1000 transform ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          From residential masterpieces to commercial landmarks, we construct excellence that stands the test of time.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 transform ${
            isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="https://wa.me/917621912319"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-blue-600/30 flex items-center gap-2"
          >
            Get a Free Quote
          </a>
          <button
            onClick={handleScrollDown}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-lg font-bold rounded-full transition-all hover:scale-105"
          >
            Explore Services
          </button>
        </div>
      </div>

      {/* Interactive Scroll Down Indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group focus:outline-none"
        aria-label="Scroll to Services"
      >
        <span className="text-xs uppercase tracking-widest font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
          Scroll Down
        </span>
        {/* Animated Mouse Icon */}
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1 group-hover:border-white transition-colors">
          <div className="w-1.5 h-3 bg-blue-500 rounded-full animate-float" />
        </div>
        <FaChevronDown className="animate-bounce text-sm mt-1" />
      </button>
    </section>
  );
}
