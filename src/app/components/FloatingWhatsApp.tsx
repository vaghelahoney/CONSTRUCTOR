'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
    const phoneNumber = '15551234567'; // Replace with actual number
    const message = 'Hello! I am interested in your construction services.';

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-short"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp size={32} />
            <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold shadow-md whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none group-hover:opacity-100 hidden md:block">
                Chat with us!
            </span>
        </a>
    );
}
