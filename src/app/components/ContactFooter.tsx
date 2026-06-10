'use client';

import React, { useState, useEffect } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaInstagram, 
  FaFacebook, 
  FaCheck, 
  FaPaperPlane 
} from 'react-icons/fa';

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; color: string }[]>([]);

  const [captchaText, setCaptchaText] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Autofill Event Listener
  useEffect(() => {
    const handleAutofill = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        setFormData({
          name: '',
          phone: '',
          projectType: customEvent.detail.projectType || '',
          message: customEvent.detail.message || '',
        });
        
        // Focus name field
        setTimeout(() => {
          const nameInput = document.getElementById('contact-name');
          if (nameInput) {
            nameInput.focus();
          }
        }, 200);
      }
    };

    window.addEventListener('autofillContact', handleAutofill);
    return () => window.removeEventListener('autofillContact', handleAutofill);
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 9) + 2;
    const num2 = Math.floor(Math.random() * 8) + 2;
    setCaptchaText(`What is ${num1} + ${num2}?`);
    setCaptchaAnswer((num1 + num2).toString());
    setUserCaptcha('');
    setCaptchaError(false);
    setIsShaking(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const triggerParticles = () => {
    const newParticles = Array.from({ length: 45 }, (_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 60 + Math.random() * 140;
      return {
        id: i,
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance - 20,
        color: ['#3b82f6', '#06b6d4', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'][i % 6],
      };
    });
    setParticles(newParticles);
    // Clear particles after animation runs (800ms)
    setTimeout(() => setParticles([]), 900);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (userCaptcha !== captchaAnswer) {
      setCaptchaError(true);
      setIsShaking(true);
      // Stop shaking after animation ends
      setTimeout(() => setIsShaking(false), 500);
      return;
    }
    setCaptchaError(false);
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
        triggerParticles();
        setFormData({ name: '', phone: '', projectType: '', message: '' });
        setUserCaptcha('');
        generateCaptcha();
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
    <footer id="contact" className="bg-gray-950 text-white py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          
          {/* Contact Form Section */}
          <div className="bg-gray-900/40 p-8 rounded-3xl border border-gray-800 relative min-h-[500px] flex flex-col justify-center">
            
            {/* Particles Explosion */}
            {particles.map((p) => (
              <div
                key={p.id}
                className="absolute w-2 h-2 rounded-full animate-particle pointer-events-none z-30"
                style={{
                  backgroundColor: p.color,
                  left: '50%',
                  top: '45%',
                  '--x': `${p.x}px`,
                  '--y': `${p.y}px`,
                } as React.CSSProperties}
              />
            ))}

            {submitted ? (
              /* Success Panel */
              <div className="text-center space-y-6 py-8 animate-scale-up z-10">
                <div className="w-20 h-20 bg-green-500/10 border border-green-500/30 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-green-500/5">
                  <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path className="animate-check" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Message Sent!</h3>
                  <p className="text-gray-400 mt-2 leading-relaxed text-sm">
                    Thank you for reaching out. Vaghela Pachan Bhai will review your details and call you shortly.
                  </p>
                </div>

                <div className="pt-4 flex flex-col gap-3">
                  <a
                    href="https://wa.me/917621912319?text=Hello%20Pachan%20Bhai!%20I%20just%20submitted%20a%20construction%20inquiry%20on%20your%20website."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-green-500 hover:bg-green-600 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-500/20"
                  >
                    <FaWhatsapp size={18} />
                    <span>Connect Instantly on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-gray-500 hover:text-white underline transition-colors cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              /* Form Panel */
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-black">Send us a Message</h3>
                  <p className="text-gray-400 text-sm mt-1">Get custom project consultation & quotes.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <div className="relative">
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder=" "
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="peer block w-full px-4 pt-6 pb-2 rounded-xl bg-gray-800/80 text-white border border-gray-700/60 focus:border-blue-500 focus:outline-none transition-all text-sm"
                    />
                    <label
                      htmlFor="contact-name"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none text-gray-400 text-sm ${
                        formData.name ? 'top-1.5 text-xs text-blue-500' : 'top-4'
                      } peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-blue-500`}
                    >
                      Your Name
                    </label>
                  </div>

                  {/* Phone Input */}
                  <div className="relative">
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      placeholder=" "
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="peer block w-full px-4 pt-6 pb-2 rounded-xl bg-gray-800/80 text-white border border-gray-700/60 focus:border-blue-500 focus:outline-none transition-all text-sm"
                    />
                    <label
                      htmlFor="contact-phone"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none text-gray-400 text-sm ${
                        formData.phone ? 'top-1.5 text-xs text-blue-500' : 'top-4'
                      } peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-blue-500`}
                    >
                      Phone Number
                    </label>
                  </div>

                  {/* Project Type Select */}
                  <div className="relative">
                    <select
                      id="contact-project"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="peer block w-full px-4 pt-6 pb-2 rounded-xl bg-gray-800/80 text-white border border-gray-700/60 focus:border-blue-500 focus:outline-none transition-all text-sm appearance-none"
                    >
                      <option value="" disabled hidden></option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="renovation">Renovation & Remodeling</option>
                      <option value="material">Material Supply</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    <label
                      htmlFor="contact-project"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none text-gray-400 text-sm ${
                        formData.projectType ? 'top-1.5 text-xs text-blue-500' : 'top-4'
                      } peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-blue-500`}
                    >
                      Project Type
                    </label>
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder=" "
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="peer block w-full px-4 pt-6 pb-2 rounded-xl bg-gray-800/80 text-white border border-gray-700/60 focus:border-blue-500 focus:outline-none transition-all text-sm resize-none"
                    />
                    <label
                      htmlFor="contact-message"
                      className={`absolute left-4 transition-all duration-200 pointer-events-none text-gray-400 text-sm ${
                        formData.message ? 'top-1.5 text-xs text-blue-500' : 'top-4'
                      } peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-blue-500`}
                    >
                      Your Message
                    </label>
                  </div>

                  {/* CAPTCHA validation */}
                  <div className={`space-y-2 rounded-xl p-3 bg-gray-800/30 border border-gray-800/50 ${isShaking ? 'animate-shake' : ''}`}>
                    <label className="block text-gray-400 text-xs font-bold uppercase tracking-wider">
                      Security Check: {captchaText}
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Calculate answer"
                        value={userCaptcha}
                        onChange={(e) => {
                          setUserCaptcha(e.target.value);
                          if (captchaError) setCaptchaError(false);
                        }}
                        required
                        className={`flex-1 px-4 py-2.5 rounded-lg bg-gray-800 text-white placeholder-gray-500 border text-sm focus:outline-none transition-colors ${
                          captchaError ? 'border-red-500 focus:border-red-500' : 'border-gray-700 focus:border-blue-500'
                        }`}
                      />
                      <button
                        type="button"
                        onClick={generateCaptcha}
                        className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-xs font-bold text-gray-300 transition-colors cursor-pointer"
                      >
                        Refresh
                      </button>
                    </div>
                    {captchaError && (
                      <p className="text-red-400 text-xs font-semibold">Math verification incorrect. Try again.</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg ${
                      loading
                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/10 hover:shadow-blue-600/30 hover:scale-102'
                    }`}
                  >
                    {loading ? (
                      <span>Sending inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <FaPaperPlane size={12} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <h3 className="text-2xl font-black">Contact Information</h3>
              <p className="text-gray-400 text-sm mt-1">Get in touch directly with our leadership team.</p>
            </div>
            
            <div className="space-y-6">
              <div className="border-b border-gray-800 pb-5">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Managing Director</p>
                <p className="font-black text-2xl text-blue-400 mt-1">Vaghela Pachan Bhai</p>
              </div>

              {/* Phone */}
              <a 
                href="tel:+917621912319"
                className="flex items-start gap-4 p-4 rounded-2xl bg-gray-900/20 hover:bg-gray-900/60 border border-gray-800/30 hover:border-blue-500/20 transition-all duration-300 group"
              >
                <div className="bg-blue-600 text-white p-3.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <FaPhone size={18} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Call Directly</p>
                  <p className="font-extrabold text-lg mt-0.5 text-white group-hover:text-blue-400 transition-colors">
                    +91 7621912319
                  </p>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:vaghelahoney1@gmail.com"
                className="flex items-start gap-4 p-4 rounded-2xl bg-gray-900/20 hover:bg-gray-900/60 border border-gray-800/30 hover:border-blue-500/20 transition-all duration-300 group"
              >
                <div className="bg-blue-600 text-white p-3.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Email Inquiry</p>
                  <p className="font-extrabold text-lg mt-0.5 text-white group-hover:text-blue-400 transition-colors break-all">
                    vaghelahoney1@gmail.com
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-900/20 border border-gray-800/30">
                <div className="bg-blue-600 text-white p-3.5 rounded-xl">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-wider">Headquarters</p>
                  <p className="font-extrabold text-lg mt-0.5 text-white">
                    Radhanpur, Gujarat
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Quick Links */}
          <div className="space-y-8 flex flex-col justify-center">
            <div>
              <h3 className="text-2xl font-black">Follow Our Builds</h3>
              <p className="text-gray-400 text-sm mt-1">Connect with us on social media.</p>
            </div>

            <div className="space-y-6">
              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="https://wa.me/917621912319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white p-4.5 rounded-full transition-all hover:scale-110 hover:-translate-y-1 shadow-lg shadow-green-500/20"
                  title="WhatsApp"
                >
                  <FaWhatsapp size={22} />
                </a>
                <a
                  href="https://www.instagram.com/vaghela__19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 hover:from-yellow-600 hover:to-purple-700 text-white p-4.5 rounded-full transition-all hover:scale-110 hover:-translate-y-1 shadow-lg shadow-pink-500/20"
                  title="Instagram"
                >
                  <FaInstagram size={22} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100092647226242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-4.5 rounded-full transition-all hover:scale-110 hover:-translate-y-1 shadow-lg shadow-blue-600/20"
                  title="Facebook"
                >
                  <FaFacebook size={22} />
                </a>
              </div>

              {/* Quick Links */}
              <div className="pt-4">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">Quick Navigation</p>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors font-semibold flex items-center gap-1">
                      <span>→</span> Home
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors font-semibold flex items-center gap-1">
                      <span>→</span> Services
                    </a>
                  </li>
                  <li>
                    <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors font-semibold flex items-center gap-1">
                      <span>→</span> Projects
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors font-semibold flex items-center gap-1">
                      <span>→</span> Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-black mb-6">Office Location</h3>
          <div className="w-full h-80 rounded-3xl overflow-hidden shadow-2xl border border-gray-800/80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29198.29054862043!2d71.59302909903028!3d23.826196340088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395b74ee813661c1%3A0xe41aac92518f9e29!2sRadhanpur%2C%20Gujarat%20385340!5e0!3m2!1sen!2sin!4v1769078646711!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs font-semibold gap-4">
            <p>&copy; 2026 Construction. Crafted with Quality & Trust.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
