'use client';

import React from 'react';

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop")',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-16">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight animate-fade-in-up">
                    Building Your Dreams with <br />
                    <span className="text-blue-500">Quality & Trust</span>.
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
                    From residential masterpieces to commercial landmarks, we construct excellence that stands the test of time.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="https://wa.me/919879477206"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-lg font-bold rounded-full transition-all hover:scale-105"
                    >
                        Call Now
                    </a>
                </div>
            </div>
        </section>
    );
}
