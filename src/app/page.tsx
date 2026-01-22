import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import RecentProjects from './components/RecentProjects';
import AboutUs from './components/AboutUs';
import ContactFooter from './components/ContactFooter';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="w-full bg-white relative">
      {/* Sticky Header */}
      <Header />

      {/* Hero Section - "First Impressions" */}
      <Hero />

      {/* Services Grid */}
      <Services />

      {/* About Us (Optional but good for SEO and context) */}
      <AboutUs />

      {/* Project Gallery */}
      <RecentProjects />

      {/* Contact & Footer */}
      <ContactFooter />

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
