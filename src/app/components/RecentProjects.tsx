'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function RecentProjects() {
  const projects = Array.from({ length: 3 }, (_, i) => ({
    id: i + 1,
    title: `House ${i + 1}`,
    location: `Radhanpur ${i + 1}`,
    description: `A complete transformation of a ${1500 + i * 100} sqft residential property.`,
    image: `/assent/${['one.jpeg', 'two.jpeg', 'three.jpeg'][i % 3]}`,
  }));

  return (
    <section id="projects" className="py-24 px-4 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-16" animation="fade-in-up">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-600">See the difference we make. Transformations that speak for themselves.</p>
        </ScrollReveal>

        {/* Swiper Container */}
        <ScrollReveal animation="zoom-in" className="relative group px-4 md:px-12">
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
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            className="recent-projects-swiper pb-16"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gray-100 group/card">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
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
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-12 z-10 bg-white hover:bg-blue-50 text-blue-900 border border-gray-100 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hidden md:block"
            aria-label="Previous slide"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-12 z-10 bg-white hover:bg-blue-50 text-blue-900 border border-gray-100 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hidden md:block"
            aria-label="Next slide"
          >
            <FaChevronRight size={20} />
          </button>
        </ScrollReveal>
      </div>
    </section>
  );
}
