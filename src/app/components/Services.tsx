'use client';

import React, { useState } from 'react';
import { FaHome, FaBuilding, FaTruck, FaHammer, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    id: 1,
    icon: <FaHome size={32} />,
    title: 'Residential',
    description: 'Custom homes, luxury villas, and bungalows tailored to your lifestyle. We turn your dream home into reality.',
    color: 'from-blue-500 to-blue-600',
    steps: [
      { step: '01', title: 'Initial Consultation', desc: 'Discussing requirements, site viability, and budget alignment.' },
      { step: '02', title: 'Blueprinting & Plan', desc: 'Sourcing 3D models and blueprints, submitting for government permits.' },
      { step: '03', title: 'Crafted Construction', desc: 'Building with premium materials, final delivery & key handover.' }
    ]
  },
  {
    id: 2,
    icon: <FaBuilding size={32} />,
    title: 'Commercial',
    description: 'Modern office complexes, retail stores, and commercial buildings built for functionality and business growth.',
    color: 'from-indigo-500 to-indigo-600',
    steps: [
      { step: '01', title: 'Feasibility & Design', desc: 'Analyzing zoning regulations and designing space layout.' },
      { step: '02', title: 'Structural Engineering', desc: 'Finalizing steel-frame designs, foundation work, and structural permits.' },
      { step: '03', title: 'Rapid Execution', desc: 'Constructing with tight timeline tracking and safety compliance.' }
    ]
  },
  {
    id: 3,
    icon: <FaTruck size={32} />,
    title: 'Material Supply',
    description: 'High-quality construction materials sourced directly from trusted manufacturers to ensure durability.',
    color: 'from-cyan-500 to-cyan-600',
    steps: [
      { step: '01', title: 'Order Sourcing', desc: 'Aggregating requirements and sourcing directly from suppliers.' },
      { step: '02', title: 'Quality Auditing', desc: 'Inspecting materials for tensile strength, grade, and quality standards.' },
      { step: '03', title: 'Timely Logistics', desc: 'On-site distribution and delivery tracking in Radhanpur.' }
    ]
  },
  {
    id: 4,
    icon: <FaHammer size={32} />,
    title: 'Renovation',
    description: 'Transforming existing spaces with modern upgrades. From kitchen remodels to full structural renovations.',
    color: 'from-teal-500 to-teal-600',
    steps: [
      { step: '01', title: 'Assessment', desc: 'Evaluating load-bearing walls and current electrical/plumbing status.' },
      { step: '02', title: 'Interior Design', desc: 'Formulating space layouts, mood boards, and material selection.' },
      { step: '03', title: 'Reconstruction', desc: 'Dust-controlled site work, replacement installation, and clean up.' }
    ]
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-350 group border ${
        isExpanded ? 'border-blue-200 ring-2 ring-blue-500/5' : 'border-gray-100'
      } h-fit`}
    >
      {/* Icon */}
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Expand/Collapse Trigger */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 focus:outline-none group/btn cursor-pointer"
      >
        <span>{isExpanded ? 'Hide Workflow' : 'View Workflow Steps'}</span>
        {isExpanded ? (
          <FaChevronUp className="text-xs group-hover/btn:-translate-y-0.5 transition-transform" />
        ) : (
          <FaChevronDown className="text-xs group-hover/btn:translate-y-0.5 transition-transform animate-bounce-short" />
        )}
      </button>

      {/* Stepper Drawer */}
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-gray-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden space-y-4">
          <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-400 mb-2">Our Process Steps</h4>
          {service.steps.map((stepItem, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <span className={`text-xs font-black px-2 py-1 rounded bg-gradient-to-br ${service.color} text-white mt-0.5`}>
                {stepItem.step}
              </span>
              <div>
                <h5 className="font-bold text-sm text-gray-900">{stepItem.title}</h5>
                <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{stepItem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal className="text-center mb-16" animation="fade-in-up">
          <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Our Premium Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction solutions delivering excellence in every project.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.id}
              animation="fade-in-up"
              delay={index * 150}
              className="h-full"
            >
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
