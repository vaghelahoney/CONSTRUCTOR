'use client';

import React from 'react';
import { FaStar } from 'react-icons/fa';

interface Review {
  id: number;
  name: string;
  title: string;
  rating: number;
  testimonial: string;
  image: string;
}

export default function ClientReviews() {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'John Anderson',
      title: 'Homeowner',
      rating: 5,
      testimonial: 'Exceptional work! The team completed our home renovation ahead of schedule and within budget. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      title: 'Business Owner',
      rating: 5,
      testimonial: 'Professional, reliable, and detail-oriented. They transformed our office space beautifully. Best decision ever!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      id: 3,
      name: 'Michael Chen',
      title: 'Homeowner',
      rating: 5,
      testimonial: 'Great communication throughout the project. The quality of work exceeded our expectations. Thank you!',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      title: 'Property Developer',
      rating: 5,
      testimonial: 'Working with this team was a game-changer. Professional, skilled, and always on point with deadlines.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
    {
      id: 5,
      name: 'David Thompson',
      title: 'Homeowner',
      rating: 5,
      testimonial: 'Outstanding craftsmanship and attention to detail. Our dream home became a reality thanks to their expertise.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
    {
      id: 6,
      name: 'Jennifer Park',
      title: 'Interior Designer',
      rating: 5,
      testimonial: 'Collaborative approach and flawless execution. They understood our vision and delivered perfectly.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      id: 7,
      name: 'Robert Walsh',
      title: 'Homeowner',
      rating: 5,
      testimonial: 'Five stars all the way! From planning to completion, every step was handled with excellence.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    },
    {
      id: 8,
      name: 'Amanda Lopez',
      title: 'Business Owner',
      rating: 5,
      testimonial: 'Transparent pricing, clear communication, and exceptional results. Could not ask for better service!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        size={18}
        className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Reviews</h2>
          <p className="text-xl text-gray-600">Trusted by hundreds of satisfied customers</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Testimonial */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6 h-20 overflow-hidden">
                "{review.testimonial}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                  <p className="text-gray-600 text-xs">{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        {/* Trust Indicators Section */}
        <div className="mt-20 border-t border-gray-100 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-gray-50 rounded-3xl p-10">
            {/* Experience */}
            <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
              <div className="text-5xl font-bold text-blue-600 mb-2">15+</div>
              <p className="text-lg font-bold text-gray-900">Years of Experience</p>
              <p className="text-gray-500 text-sm mt-2">Delivering excellence since 2009</p>
            </div>

            {/* Certifications */}
            <div className="border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
              <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-lg font-bold text-gray-900">Certified & Insured</p>
              <p className="text-gray-500 text-sm mt-2">ISO 9001:2015 Certified Company</p>
            </div>

            {/* Rating */}
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">4.9/5</div>
              <p className="text-lg font-bold text-gray-900">Client Satisfaction</p>
              <div className="flex justify-center gap-1 mt-2 text-yellow-400">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
