import { PenTool, Building2, Hammer, Users, Palette, Home, ClipboardList, Wrench } from 'lucide-react';
import structuralDrawingImg from '@/assets/Structural Drawing & Planning.jpg';
import architecturalDesignImg from '@/assets/Architectural Design.jpg';
import buildingContractingImg from '@/assets/Building Contracting.jpg';
import consultationServicesImg from '@/assets/Consultation Services.jpg';
import exteriorDesigningImg from '@/assets/Exterior Designing.jpg';
import interiorDesigningImg from '@/assets/Interior Designing.jpg';
import projectManagementImg from '@/assets/project management.jpg';
import renovationRemodelingImg from '@/assets/Renovation and Remodeling.jpg';

const Services = () => {
  const services = [
    {
      icon: PenTool,
      title: "Structural Drawing & Planning",
      description: "Detailed architectural blueprints and structural engineering",
      image: structuralDrawingImg
    },
    {
      icon: Building2,
      title: "Architectural Design",
      description: "Innovative and functional architectural solutions",
      image: architecturalDesignImg
    },
    {
      icon: Hammer,
      title: "Building Contracting",
      description: "End-to-end construction and project execution",
      image: buildingContractingImg
    },
    {
      icon: Users,
      title: "Consultation Services",
      description: "Expert guidance for construction and design decisions",
      image: consultationServicesImg
    },
    {
      icon: Palette,
      title: "Exterior Designing",
      description: "Stunning facade and landscape design solutions",
      image: exteriorDesigningImg
    },
    {
      icon: Home,
      title: "Interior Designing",
      description: "Luxurious and functional interior spaces",
      image: interiorDesigningImg
    },
    {
      icon: ClipboardList,
      title: "Project Management",
      description: "Comprehensive project oversight and coordination",
      image: projectManagementImg
    },
    {
      icon: Wrench,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with modern upgrades",
      image: renovationRemodelingImg
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gold/5 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-40 right-1/3 w-48 h-48 bg-gold/10 rounded-full blur-3xl floating" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            What <span className="text-gold-gradient">We Offer</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive construction and design services tailored to bring your vision to life 
            with precision, quality, and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer slide-up flex flex-col h-full"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-t-2xl mb-0 transition-transform duration-300 group-hover:scale-105"
              />

              {/* Content */}
              <div className="flex-1 flex flex-col p-4 bg-card rounded-b-2xl">
                <h3 className="font-semibold text-foreground text-lg leading-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 slide-up">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start your construction project?
          </p>
          <div className="flex justify-center">
            <a
              href="tel:9972255837"
              className="btn-gold-outline inline-flex w-auto px-3 py-2 rounded-full text-base hover:scale-105 transition-transform duration-300 items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15l2.25-2.25a1.5 1.5 0 00-.375-2.414l-4.125-2.062a1.5 1.5 0 00-1.636.176l-1.125.9a11.25 11.25 0 01-5.25-5.25l.9-1.125a1.5 1.5 0 00.176-1.636L4.914 3.375A1.5 1.5 0 002.5 3.75L.25 6c0 .414.336.75.75.75z" />
              </svg>
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;