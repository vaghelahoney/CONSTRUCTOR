'use client';

import React, { useEffect, useState, useRef } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

// Custom Count-Up Counter that triggers when visible
function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Parse target number and suffix (e.g. "1000+" -> 1000 and "+", "98%" -> 98 and "%")
  const numericMatch = value.match(/\d+/);
  const target = numericMatch ? parseInt(numericMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutQuad
      const easeProgress = progress * (2 - progress);
      const currentVal = Math.floor(easeProgress * target);
      
      setCount(currentVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return (
    <span ref={elementRef} className="font-bold">
      {count}
      {suffix}
    </span>
  );
}

export default function AboutUs() {
  const achievements = [
    '20+ Years of Industry Experience',
    'Premium Quality Materials & Craftsmanship',
    'Certified Professional Team',
    'On-Time Project Delivery',
    'Transparent Pricing & Communication',
    'Customer Satisfaction Guaranteed',
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <ScrollReveal animation="fade-in-left" className="relative h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform -skew-y-3 opacity-10" />
            <img
              src="/assent/one.jpeg"
              alt="Construction Team"
              className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10 hover:scale-102 transition-transform duration-500"
            />
          </ScrollReveal>

          {/* Right Side - Content */}
          <ScrollReveal animation="fade-in-right" className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Company</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                For over 20 years, we have been dedicated to delivering exceptional home construction
                services. Our commitment to quality, attention to detail, and customer satisfaction has
                made us a trusted name in the construction industry.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <p className="text-gray-600 mb-6">
                We blend modern construction techniques with timeless quality to create homes that stand
                the test of time. Our experienced team ensures every project is completed with precision
                and care.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={24} />
                  <p className="text-gray-700 font-medium group-hover:text-blue-900 transition-colors duration-300">{achievement}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-gray-200">
          {[
            { number: '1000+', label: 'Projects Completed' },
            { number: '25+', label: 'Years Experience' },
            { number: '98%', label: 'Customer Satisfaction' },
          ].map((stat, index) => (
            <ScrollReveal
              key={index}
              animation="fade-in-up"
              delay={index * 150}
              className="text-center group"
            >
              <div className="text-5xl font-extrabold text-blue-600 mb-2 group-hover:scale-105 transition-transform duration-300">
                <AnimatedCounter value={stat.number} />
              </div>
              <p className="text-gray-600 font-semibold tracking-wide uppercase text-sm">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
