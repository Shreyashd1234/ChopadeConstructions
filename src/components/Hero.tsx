import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl floating"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gold/20 rounded-full blur-2xl floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gold/15 rounded-full blur-3xl floating" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Company Name and Tagline */}
      {/* Removed company name as requested */}

      {/* Fullscreen 3D Spline Model */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-full max-w-5xl mx-auto aspect-[4/5] md:aspect-auto md:w-full md:h-full md:max-w-none">
          <iframe
            src="https://my.spline.design/claritystream-4gWa8x3CiLiORzmsWmoVmLh2/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="rounded-none w-full h-full"
            style={{ objectFit: 'cover' }}
            allowFullScreen
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10">
        <button 
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center space-y-2 text-gold/70 hover:text-gold transition-colors group"
        >
          <span className="text-sm">Scroll Down</span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-none" />
        </button>
      </div>
    </section>
  );
};

export default Hero;