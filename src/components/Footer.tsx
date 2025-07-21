import { Building, Phone, Mail, MapPin, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import logo from '@/assets/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Helper to scroll to section after navigation
  const scrollToSectionAfterNav = (sectionId) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay to allow page render
  };

  const handleNav = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      scrollToSectionAfterNav(sectionId);
    }
  };

  return (
    <footer className="bg-card border-t border-gold/20 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={logo}
                alt="Chopade Constructions" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Chopade Constructions delivers innovative, high-quality buildings.<br />
              20+ years of experience, 100+ projects completed.<br />
              We build with trust, excellence, and vision.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://wa.me/919972255837" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
                aria-label="Message us on WhatsApp"
                title="Message us on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="space-y-3">
              <button 
                onClick={() => handleNav('hero')}
                className="block text-muted-foreground hover:text-gold transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => handleNav('about')}
                className="block text-muted-foreground hover:text-gold transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => handleNav('services')}
                className="block text-muted-foreground hover:text-gold transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => handleNav('projects')}
                className="block text-muted-foreground hover:text-gold transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => handleNav('contact')}
                className="block text-muted-foreground hover:text-gold transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Our Services</h3>
            <nav className="space-y-3">
              <div className="text-muted-foreground">Architectural Design</div>
              <div className="text-muted-foreground">Building Contracting</div>
              <div className="text-muted-foreground">Interior Designing</div>
              <div className="text-muted-foreground">Project Management</div>
              <div className="text-muted-foreground">Consultation</div>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
            <div className="text-muted-foreground text-sm leading-relaxed">
              <span className="font-semibold text-white">Address</span><br />
              CHOPADE CONSTRUCTIONS<br />
              Ayodhya nagar Ganeshapur<br />
              Belgaum Karnataka 591108<br />
              <span className="font-semibold text-white">Phone Number</span><br />
              9972255837<br />
              9972944524
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-sm">
              <span>© 2025 Chopade Constructions. All rights reserved. Developed by Nextverse</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;