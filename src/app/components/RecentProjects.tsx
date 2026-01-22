'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaExchangeAlt } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function RecentProjects() {
  const [activeImageState, setActiveImageState] = useState<{ [key: number]: 'before' | 'after' }>({});
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const toggleImageState = (id: number) => {
    setActiveImageState((prev) => ({
      ...prev,
      [id]: prev[id] === 'after' ? 'before' : 'after',
    }));
  };

  const projects = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Luxury Villa Project ${i + 1}`,
    location: `Green Valley, District ${i + 1}`,
    description: `A complete transformation of a ${1500 + i * 100} sqft residential property.`,
    beforeImage: `https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=800&h=600&fit=crop`, // Construction site
    afterImage: `https://images.unsplash.com/photo-${1500000000 + i * 1000000}?w=800&h=600&fit=crop`, // Finished
  }));

  return (
    <section id="projects" className="py-24 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-600">See the difference we make. Before and after transformations.</p>
        </div>

        {/* Swiper Container */}
        <div className="relative group px-4 md:px-12">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="recent-projects-swiper pb-16"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gray-100 group/card">
                    <img
                      src={activeImageState[project.id] === 'after' ? project.afterImage : project.beforeImage}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      {activeImageState[project.id] === 'after' ? 'After' : 'Before'}
                    </div>

                    {/* Toggle Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleImageState(project.id);
                      }}
                      className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-blue-600 px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 transition-all hover:scale-105 z-10"
                    >
                      <FaExchangeAlt /> {activeImageState[project.id] === 'after' ? 'See Before' : 'See After'}
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <div className="flex items-center text-gray-500 mb-4 text-sm font-medium">
                      <FaMapMarkerAlt className="mr-2 text-blue-500" />
                      {project.location}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{project.description}</p>
                    <button className="w-full py-3 bg-gray-900 text-white rounded-xl hover:bg-blue-600 transition-colors font-semibold">
                      View Project Details
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-12 z-10 bg-white hover:bg-blue-50 text-blue-900 border border-gray-100 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hidden md:block"
            aria-label="Previous slide"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-12 z-10 bg-white hover:bg-blue-50 text-blue-900 border border-gray-100 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hidden md:block"
            aria-label="Next slide"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Custom Pagination Styles */}
        <style jsx>{`
          :global(.recent-projects-swiper .swiper-pagination) {
            bottom: 0px !important;
          }
          :global(.recent-projects-swiper .swiper-pagination-bullet) {
            background-color: #cbd5e1;
            opacity: 1;
            width: 10px;
            height: 10px;
          }
          :global(.recent-projects-swiper .swiper-pagination-bullet-active) {
            background-color: #2563eb;
            width: 30px;
            border-radius: 999px;
          }
        `}</style>
      </div>
    </section>
  );
}
