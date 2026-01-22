'use client';

import React from 'react';
import { FaHome, FaBuilding, FaTruck, FaHammer } from 'react-icons/fa';

const services = [
    {
        id: 1,
        icon: <FaHome size={32} />,
        title: 'Residential',
        description: 'Custom homes, luxury villas, and bungalows tailored to your lifestyle. We turn your dream home into reality.',
        color: 'from-blue-500 to-blue-600',
    },
    {
        id: 2,
        icon: <FaBuilding size={32} />,
        title: 'Commercial',
        description: 'Modern office complexes, retail stores, and commercial buildings built for functionality and business growth.',
        color: 'from-indigo-500 to-indigo-600',
    },
    {
        id: 3,
        icon: <FaTruck size={32} />,
        title: 'Material Supply',
        description: 'High-quality construction materials sourced directly from trusted manufacturers to ensure durability.',
        color: 'from-cyan-500 to-cyan-600',
    },
    {
        id: 4,
        icon: <FaHammer size={32} />,
        title: 'Renovation',
        description: 'Transforming existing spaces with modern upgrades. From kitchen remodels to full structural renovations.',
        color: 'from-teal-500 to-teal-600',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">What We Do</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">Our Premium Services</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive construction solutions delivering excellence in every project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group border border-gray-100"
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
