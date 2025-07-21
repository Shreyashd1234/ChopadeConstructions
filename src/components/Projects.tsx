import { useState } from 'react';
import { ExternalLink, MapPin, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Complex",
      location: "Pune, Maharashtra",
      year: "2024",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Premium residential complex with modern amenities"
    },
    {
      id: 2,
      title: "Commercial Tower",
      location: "Mumbai, Maharashtra",
      year: "2023",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "25-story commercial building with premium offices"
    },
    {
      id: 3,
      title: "Residential Apartments",
      location: "Nashik, Maharashtra",
      year: "2024",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern apartment complex with garden spaces"
    },
    {
      id: 4,
      title: "Shopping Complex",
      location: "Aurangabad, Maharashtra",
      year: "2023",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Multi-level retail and entertainment complex"
    },
    {
      id: 5,
      title: "Luxury Bungalow",
      location: "Lonavala, Maharashtra",
      year: "2024",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Premium bungalow with panoramic views"
    },
    {
      id: 6,
      title: "Office Complex",
      location: "Satara, Maharashtra",
      year: "2023",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Modern office spaces with co-working areas"
    }
  ];

  const filters = ['All', 'Residential', 'Commercial'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gold/10 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Our <span className="text-gold-gradient">Work</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of exceptional construction projects that showcase 
            our commitment to quality, innovation, and architectural excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12">
          <div className="glass-card rounded-full p-2 flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gold text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <ExternalLink className="w-8 h-8 text-gold mx-auto" />
                    <p className="text-white text-sm">View Details</p>
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gold/20 backdrop-blur-sm text-gold text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Meta */}
                <div className="space-y-2 pt-2 border-t border-gold/20">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-gold" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-gold" />
                    Completed in {project.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 slide-up">
          <button
            className="btn-gold-outline px-8 py-3 rounded-full text-lg hover:scale-105 transition-transform duration-300"
            onClick={() => navigate('/portfolio')}
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;