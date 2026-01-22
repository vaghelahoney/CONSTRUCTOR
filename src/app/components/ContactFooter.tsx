'use client';

import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', phone: '', projectType: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-blue-500 focus:outline-none transition"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-blue-500 focus:outline-none transition"
                />
              </div>
              <div>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-blue-500 focus:outline-none transition appearance-none"
                  required
                >
                  <option value="" disabled>Select Project Type</option>
                  <option value="residential">Residential Construction</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="renovation">Renovation</option>
                  <option value="material">Material Supply</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:border-blue-500 focus:outline-none transition resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${loading
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
                  }`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {submitted && (
                <p className="text-green-400 text-sm">Message sent successfully! Thank you for contacting us.</p>
              )}
            </form>
          </div>

          {/* Direct Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="border-b border-gray-800 pb-4">
                <p className="text-gray-400 text-sm">Contact Person</p>
                <p className="font-bold text-xl text-blue-500">Vaghela Pachan Bhai</p>
              </div>
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg mt-1">
                  <FaPhone size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="font-semibold text-lg hover:text-blue-400 cursor-pointer">
                    +91 9879477206
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg mt-1">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="font-semibold text-lg hover:text-blue-400 cursor-pointer">
                    vaghelahoney1@gmail.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg mt-1">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm"> Address</p>
                  <p className="font-semibold">
                    Radhanpur<br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <div className="space-y-6">
              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="https://wa.me/919879477206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 p-4 rounded-full transition-all hover:scale-110"
                  title="WhatsApp"
                >
                  <FaWhatsapp size={24} />
                </a>
                <a
                  href="https://www.instagram.com/vaghela__19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 hover:bg-pink-600 p-4 rounded-full transition-all hover:scale-110"
                  title="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100092647226242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 p-4 rounded-full transition-all hover:scale-110"
                  title="Facebook"
                >
                  <FaFacebook size={24} />
                </a>
              </div>

              {/* Quick Links */}
              <div>
                <p className="text-gray-400 text-sm mb-2">Quick Links</p>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      → Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      → About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      → Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400 transition-colors">
                      → Projects
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Visit Our Office</h3>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29198.29054862043!2d71.59302909903028!3d23.826196340088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395b74ee813661c1%3A0xe41aac92518f9e29!2sRadhanpur%2C%20Gujarat%20385340!5e0!3m2!1sen!2sin!4v1769078646711!5m2!1sen!2sin" width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2026 Construction. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
