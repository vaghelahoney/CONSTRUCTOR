'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import 'swiper/css';
import 'swiper/css/pagination';

interface Review {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
}

const reviewsDataset: Review[] = [
  {
    id: 1,
    name: 'Harish Patel',
    role: 'Bungalow Owner',
    location: 'Radhanpur Phase 1',
    rating: 5,
    text: 'Vaghela Pachan Bhai and his team built our multi-story bungalow from scratch. His transparency regarding material costs and his absolute focus on structural strength were exceptional. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Amit Mehta',
    role: 'Managing Director',
    location: 'Nexus Commercial Plaza',
    rating: 5,
    text: 'We hired them for our commercial showroom project on the highway. They managed everything from structural steel work to finishing details. The project was completed 2 weeks ahead of schedule!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Deepika Shah',
    role: 'Homeowner',
    location: 'Radhanpur East',
    rating: 5,
    text: 'We did a major renovation of our home, removing partition walls to make an open kitchen and modern bathrooms. The team kept the dust contained and executed custom teak carpentry beautifully.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Rajesh Vaghela',
    role: 'Warehouse Operations Manager',
    location: 'Radhanpur Industrial Area',
    rating: 5,
    text: 'Their material supply service is outstanding. We had tight timelines for concrete and aggregate deliveries for our warehouse foundation, and they never missed a delivery slot. Honest pricing.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop'
  },
  {
    id: 5,
    name: 'Karan Rabari',
    role: 'Luxury Villa Owner',
    location: 'Sector 4, Radhanpur',
    rating: 5,
    text: 'The duplex construction they completed is stunning. Superb architectural styling, double-insulated walls, and great ventilation. Pachan Bhai gave us daily updates on WhatsApp with photos.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop'
  }
];

export default function ClientReviews() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <ScrollReveal className="text-center mb-16" animation="fade-in-up">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read real feedback from homeowners and commercial clients who trusted our services.
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <ScrollReveal animation="zoom-in" delay={150} className="relative px-2 md:px-8">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="client-reviews-swiper pb-16"
          >
            {reviewsDataset.map((review) => (
              <SwiperSlide key={review.id} className="h-auto">
                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/40 border border-gray-100 h-full flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 relative group">
                  {/* Quote Icon Overlay */}
                  <div className="absolute top-6 right-8 text-blue-500/10 group-hover:text-blue-500/20 transition-colors duration-300">
                    <FaQuoteLeft size={44} />
                  </div>

                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <FaStar key={idx} className="text-amber-400 group-hover:scale-110 transition-transform duration-300" size={18} />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-600 leading-relaxed italic text-sm mb-6 relative z-10">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Profile */}
                  <div className="flex items-center gap-4 border-t border-gray-50 pt-5 mt-auto">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/20 group-hover:border-blue-500 transition-colors duration-300"
                    />
                    <div>
                      <h4 className="font-extrabold text-gray-900 text-sm">{review.name}</h4>
                      <p className="text-xxs text-gray-400 font-bold uppercase">{review.role}</p>
                      <p className="text-xxs text-blue-600 font-bold">{review.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </ScrollReveal>
      </div>
    </section>
  );
}
