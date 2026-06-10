'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaMapMarkerAlt, 
  FaRegCalendarAlt, 
  FaRegClock, 
  FaCoins, 
  FaUserAlt,
  FaTimes,
  FaArrowRight
} from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Project {
  id: number;
  title: string;
  category: 'residential' | 'commercial' | 'renovation';
  categoryLabel: string;
  location: string;
  description: string;
  longDescription: string;
  images: string[];
  client: string;
  area: string;
  budget: string;
  duration: string;
  year: string;
}

const projectsDataset: Project[] = [
  {
    id: 1,
    title: 'Royal Luxury Villas',
    category: 'residential',
    categoryLabel: 'Residential',
    location: 'Radhanpur Phase 1, Gujarat',
    description: 'A premium 4-BHK bungalow development featuring glass facades, private lawn, and earthquake-resistant RCC structure.',
    longDescription: 'Spanning across 4,500 sqft, the Royal Villas project stands as a hallmark of luxury residential living in Radhanpur. Designed with spacious open layouts, floor-to-ceiling glass paneling, smart home integration, and sustainable rainwater harvesting systems. The project took 14 months from planning to key handover.',
    images: [
      '/assent/one.jpeg',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200'
    ],
    client: 'Royal Group',
    area: '4,500 Sq. Ft.',
    budget: '₹1.8 Crores',
    duration: '14 Months',
    year: '2025'
  },
  {
    id: 2,
    title: 'Nexus Commercial Plaza',
    category: 'commercial',
    categoryLabel: 'Commercial',
    location: 'Radhanpur Highway, Gujarat',
    description: 'A multi-story commercial hub engineered for retail spaces, corporate offices, and central HVAC facilities.',
    longDescription: 'A state-of-the-art G+4 commercial complex designed to maximize retail display areas on lower floors and open corporate offices on upper storeys. Built using high-grade structural steel and pre-cast concrete, minimizing on-site waste and construction timeframe.',
    images: [
      '/assent/two.jpeg',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200',
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1200'
    ],
    client: 'Nexus Ltd.',
    area: '12,500 Sq. Ft.',
    budget: '₹4.5 Crores',
    duration: '18 Months',
    year: '2025'
  },
  {
    id: 3,
    title: 'Heritage Villa Restoration',
    category: 'renovation',
    categoryLabel: 'Renovation',
    location: 'Old Town Radhanpur, Gujarat',
    description: 'A modern preservation and renovation of a 40-year-old architectural ancestral home.',
    longDescription: 'Reviving historical beauty while retrofitting modern plumbing, luxury flooring, and heating solutions. We structurally reinforced the foundations, preserved the main wood carving balconies, and designed a completely modern open kitchen and bathrooms.',
    images: [
      '/assent/three.jpeg',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200',
      'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=1200'
    ],
    client: 'Pachanbhai Patel',
    area: '2,800 Sq. Ft.',
    budget: '₹85 Lakhs',
    duration: '6 Months',
    year: '2024'
  },
  {
    id: 4,
    title: 'Modern Glass Duplex',
    category: 'residential',
    categoryLabel: 'Residential',
    location: 'Sector 4, Radhanpur, Gujarat',
    description: 'Ultra-modern dual-occupancy residential duplex showcasing exposed structural beams and energy-saving solar roofs.',
    longDescription: 'This architectural marvel highlights clean minimalist geometry, natural stone masonry, and passive solar design. It includes double-glazed windows and smart insulation, resulting in a 40% reduction in air conditioning loads.',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200',
      '/assent/one.jpeg',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200'
    ],
    client: 'Vaghela Estates',
    area: '3,200 Sq. Ft.',
    budget: '₹1.2 Crores',
    duration: '11 Months',
    year: '2025'
  },
  {
    id: 5,
    title: 'Apex Logistics Hub',
    category: 'commercial',
    categoryLabel: 'Commercial',
    location: 'Industrial Zone, Radhanpur, Gujarat',
    description: 'Heavy-duty steel warehouse and cold storage facility built with high-tensile epoxy flooring.',
    longDescription: 'Engaged in delivering a 15,000 sqft industrial storage facility with high-clearance overhead cranes, custom concrete foundations for heavy vibrations, and an fully automated fire sprinkler system.',
    images: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200',
      '/assent/two.jpeg'
    ],
    client: 'Apex Logistics Co.',
    area: '15,000 Sq. Ft.',
    budget: '₹2.8 Crores',
    duration: '9 Months',
    year: '2024'
  },
  {
    id: 6,
    title: 'Premium Kitchen & Bath Remodel',
    category: 'renovation',
    categoryLabel: 'Renovation',
    location: 'Radhanpur East, Gujarat',
    description: 'Full interior demolition and high-end remodeling featuring custom teak cabinetry and marble counter slabs.',
    longDescription: 'A complete overhaul of the home\'s primary living areas. We knocked down two partition walls to establish an open-concept gourmet kitchen and created a spa-like master bathroom with custom tilework and premium fixtures.',
    images: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200',
      '/assent/three.jpeg',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200'
    ],
    client: 'Mrs. Shah',
    area: '950 Sq. Ft.',
    budget: '₹35 Lakhs',
    duration: '3 Months',
    year: '2025'
  }
];

export default function RecentProjects() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'residential' | 'commercial' | 'renovation'>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const categories: { key: 'all' | 'residential' | 'commercial' | 'renovation'; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'residential', label: 'Residential' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'renovation', label: 'Renovations' }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsDataset
    : projectsDataset.filter(p => p.category === selectedCategory);

  const handleOpenModal = (project: Project) => {
    setActiveModalProject(project);
    setActiveImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setActiveModalProject(null);
    document.body.style.overflow = 'unset';
  };

  const handleInquire = (project: Project) => {
    handleCloseModal();
    // Emit Custom Event to prefill contact form
    const event = new CustomEvent('autofillContact', {
      detail: {
        projectType: project.category,
        message: `Hello! I was looking at your "${project.title}" portfolio project in ${project.location} and would like to inquire about a similar construction project for myself.`
      }
    });
    window.dispatchEvent(event);

    // Scroll to contact form
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section id="projects" className="py-24 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-12" animation="fade-in-up">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">See the difference we make. Transformations that speak for themselves.</p>
        </ScrollReveal>

        {/* Categories Tab Selector */}
        <ScrollReveal animation="fade-in-up" delay={100} className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-6 py-2.5 rounded-full font-bold transition-all duration-300 relative overflow-hidden cursor-pointer ${
                selectedCategory === cat.key
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </ScrollReveal>

        {/* Swiper Slider Container (We key it to re-initialize Swiper smoothly when categories change) */}
        <ScrollReveal animation="zoom-in" delay={200} className="relative group px-4 md:px-12">
          <Swiper
            key={selectedCategory}
            modules={[Navigation, Pagination]}
            spaceBetween={30}
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
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-full flex flex-col hover:shadow-2xl transition-all duration-300 group/card">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                    <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-xs font-extrabold uppercase px-3 py-1.5 rounded-full tracking-wider shadow">
                      {project.categoryLabel}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover/card:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-500 mb-4 text-sm font-medium">
                      <FaMapMarkerAlt className="mr-2 text-blue-500" />
                      {project.location}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{project.description}</p>
                    <button
                      onClick={() => handleOpenModal(project)}
                      className="w-full py-3 bg-gray-900 text-white rounded-xl hover:bg-blue-600 transition-all duration-300 font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-blue-500/20"
                    >
                      <span>View Project Details</span>
                      <FaArrowRight size={14} className="group-hover/card:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-12 z-10 bg-white hover:bg-blue-50 text-blue-900 border border-gray-100 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hidden md:block cursor-pointer"
            aria-label="Previous slide"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-12 z-10 bg-white hover:bg-blue-50 text-blue-900 border border-gray-100 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 hidden md:block cursor-pointer"
            aria-label="Next slide"
          >
            <FaChevronRight size={20} />
          </button>
        </ScrollReveal>
      </div>

      {/* Interactive Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            onClick={handleCloseModal}
            className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300"
          />
          
          {/* Modal Box */}
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-y-auto shadow-2xl relative z-10 animate-scale-up border border-gray-100 flex flex-col">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full transition-colors cursor-pointer"
              aria-label="Close details"
            >
              <FaTimes size={18} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left Side: Images */}
              <div className="md:col-span-6 p-6 flex flex-col justify-between bg-gray-50 border-r border-gray-100">
                <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden shadow-inner bg-gray-200">
                  <img
                    src={activeModalProject.images[activeImageIndex]}
                    alt={activeModalProject.title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute bottom-4 left-4 bg-gray-900/80 text-white text-xs font-semibold px-2.5 py-1 rounded">
                    Image {activeImageIndex + 1} of {activeModalProject.images.length}
                  </div>
                </div>

                {/* Thumbnails Row */}
                {activeModalProject.images.length > 1 && (
                  <div className="flex gap-3 mt-4 overflow-x-auto pb-1">
                    {activeModalProject.images.map((imgUrl, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImageIndex(index)}
                        className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 flex-shrink-0 cursor-pointer transition-all duration-200 ${
                          activeImageIndex === index ? 'border-blue-600 scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Side: Specifications & Text */}
              <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-blue-600 font-bold uppercase tracking-wider text-xs bg-blue-50 px-3 py-1 rounded-full">
                    {activeModalProject.categoryLabel}
                  </span>
                  <h3 className="text-3xl font-extrabold text-gray-900 mt-3 mb-2">{activeModalProject.title}</h3>
                  <div className="flex items-center text-gray-500 mb-6 text-sm font-semibold">
                    <FaMapMarkerAlt className="mr-2 text-blue-500" />
                    {activeModalProject.location}
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm mb-6">
                    {activeModalProject.longDescription}
                  </p>

                  {/* Spec Sheet Grid */}
                  <h4 className="font-extrabold text-gray-900 uppercase text-xs tracking-wider mb-3 border-b border-gray-100 pb-2">
                    Project Specifications
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm mb-8">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaUserAlt className="text-blue-500 flex-shrink-0" size={14} />
                      <div>
                        <p className="text-xxs text-gray-400 font-bold uppercase">Client</p>
                        <p className="font-semibold text-gray-800">{activeModalProject.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaRegClock className="text-blue-500 flex-shrink-0" size={14} />
                      <div>
                        <p className="text-xxs text-gray-400 font-bold uppercase">Timeline</p>
                        <p className="font-semibold text-gray-800">{activeModalProject.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaCoins className="text-blue-500 flex-shrink-0" size={14} />
                      <div>
                        <p className="text-xxs text-gray-400 font-bold uppercase">Budget Range</p>
                        <p className="font-semibold text-gray-800">{activeModalProject.budget}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaRegCalendarAlt className="text-blue-500 flex-shrink-0" size={14} />
                      <div>
                        <p className="text-xxs text-gray-400 font-bold uppercase">Handover Year</p>
                        <p className="font-semibold text-gray-800">{activeModalProject.year}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inquire Action Button */}
                <button
                  onClick={() => handleInquire(activeModalProject)}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30 hover:scale-102"
                >
                  <span>Inquire About a Similar Build</span>
                  <FaArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
