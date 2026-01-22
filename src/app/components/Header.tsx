'use client';

import React, { useState, useEffect } from 'react';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact Us', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 backdrop-blur-md shadow-md py-4'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <span className={`text-2xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                        Construction<span className="text-blue-500">.</span>
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`font-medium transition-colors ${isScrolled
                                ? 'text-gray-700 hover:text-blue-600'
                                : 'text-white/90 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="tel:+919879477206"
                        className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all ${isScrolled
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-white text-blue-900 hover:bg-blue-50'
                            }`}
                    >
                        <FaPhone size={14} />
                        <span>+91 9879477206</span>
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <FaTimes className={isScrolled ? 'text-gray-900' : 'text-white'} />
                    ) : (
                        <FaBars className={isScrolled ? 'text-gray-900' : 'text-white'} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-800 font-medium hover:text-blue-600"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="tel:+919879477206"
                        className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                    >
                        <FaPhone size={14} />
                        <span>+91 9879477206</span>
                    </a>
                </div>
            )}
        </header>
    );
}
