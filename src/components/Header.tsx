import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/') return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      const sections = ['hero', 'about', 'services', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

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
    setIsOpen(false);
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

  const isHome = location.pathname === '/';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar-glass py-4`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center transition-opacity duration-300 opacity-100">
          <Link to="/">
            <img 
              src={logo}
              alt="Chopade Constructions" 
              className="h-8 w-auto sm:h-10 gold-glow"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/"
            className={`transition-colors duration-300 ${isHome && activeSection === 'hero' ? 'text-gold' : 'text-foreground hover:text-gold'}`}
            onClick={e => { e.preventDefault(); handleNav('hero'); }}
          >
            Home
          </Link>
          <button 
            onClick={() => handleNav('about')}
            className={`transition-colors duration-300 ${isHome && activeSection === 'about' ? 'text-gold' : 'text-foreground hover:text-gold'}`}
          >
            About
          </button>
          <button 
            onClick={() => handleNav('services')}
            className={`transition-colors duration-300 ${isHome && activeSection === 'services' ? 'text-gold' : 'text-foreground hover:text-gold'}`}
          >
            Services
          </button>
          <button 
            onClick={() => handleNav('projects')}
            className={`transition-colors duration-300 ${isHome && activeSection === 'projects' ? 'text-gold' : 'text-foreground hover:text-gold'}`}
          >
            Projects
          </button>
          <button 
            onClick={() => handleNav('contact')}
            className={`transition-colors duration-300 ${isHome && activeSection === 'contact' ? 'text-gold' : 'text-foreground hover:text-gold'}`}
          >
            Contact
          </button>
          <Link 
            to="/portfolio"
            className={`transition-colors duration-300 text-foreground hover:text-gold px-4 py-2 rounded-full border-2 border-gold
              ${location.pathname === '/portfolio' ? 'bg-gold/10 text-gold font-bold shadow-[0_0_16px_4px_rgba(255,215,0,0.5)]' : ''}`}
          >
            Portfolio
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/919972255837"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-outline px-6 py-2 rounded-full flex items-center gap-2"
            aria-label="Start a WhatsApp conversation with Chopade Constructions"
            title="Start a WhatsApp conversation with Chopade Constructions"
          >
            <MessageCircle className="w-4 h-4" />
            Let's Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 navbar-glass border-t border-gold/20">
          <nav className="container mx-auto px-6 py-6 space-y-4">
            <Link 
              to="/"
              className={`block transition-colors duration-300 ${isHome && activeSection === 'hero' ? 'text-gold' : 'text-foreground hover:text-gold'}`}
              onClick={e => { e.preventDefault(); handleNav('hero'); }}
            >
              Home
            </Link>
            <button 
              onClick={() => handleNav('about')}
              className={`block transition-colors duration-300 ${isHome && activeSection === 'about' ? 'text-gold' : 'text-foreground hover:text-gold'}`}
            >
              About
            </button>
            <button 
              onClick={() => handleNav('services')}
              className={`block transition-colors duration-300 ${isHome && activeSection === 'services' ? 'text-gold' : 'text-foreground hover:text-gold'}`}
            >
              Services
            </button>
            <button 
              onClick={() => handleNav('projects')}
              className={`block transition-colors duration-300 ${isHome && activeSection === 'projects' ? 'text-gold' : 'text-foreground hover:text-gold'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => handleNav('contact')}
              className={`block transition-colors duration-300 ${isHome && activeSection === 'contact' ? 'text-gold' : 'text-foreground hover:text-gold'}`}
            >
              Contact
            </button>
            <Link 
              to="/portfolio"
              className={`block transition-colors duration-300 text-foreground hover:text-gold px-4 py-2 rounded-full border-2 border-gold mt-2
                ${location.pathname === '/portfolio' ? 'bg-gold/10 text-gold font-bold shadow-[0_0_16px_4px_rgba(255,215,0,0.5)]' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Button 
              onClick={() => handleNav('contact')}
              className="btn-gold-outline w-full mt-4 py-2 rounded-full flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Let's Talk
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;