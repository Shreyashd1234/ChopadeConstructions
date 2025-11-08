import { useState } from 'react';
import { ExternalLink, MapPin, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';

// Import portfolio images
import samruddhi from '../assets/Portfolio/16 samruddhi colony ganeshpur.jpg';
import laxmiNagar21 from '../assets/Portfolio/21 Laxmi nagar, hindalga, belgaum.jpg';
import saraswatiNagar from '../assets/Portfolio/23 Saraswati Nagar, belgaum.jpg';
import laxmiNagar29 from '../assets/Portfolio/29 laxmi nagar, hindalga, belgaum.jpg';
import laxmiNagar32 from '../assets/Portfolio/32 laxmi nagar, hindalga belgaum.jpg';
import mahalaxmiNagar from '../assets/Portfolio/46 mahalaxmi nagar 5th cross.jpg';
import laxmiNagar48 from '../assets/Portfolio/48 laxmi nagar hindalga belgaum.jpg';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Samruddhi Colony Ganeshpur",
      location: "Ganeshpur",
      category: "Residential",
      image: samruddhi
    },
    {
      id: 2,
      title: "Laxmi Nagar Property",
      location: "Hindalga, Belgaum",
      category: "Residential",
      image: laxmiNagar21
    },
    {
      id: 3,
      title: "Saraswati Nagar Development",
      location: "Belgaum",
      category: "Residential",
      image: saraswatiNagar
    },
    {
      id: 4,
      title: "Laxmi Nagar Mixed-Use Complex",
      location: "Hindalga, Belgaum",
      category: ["Commercial", "Residential"],
      image: laxmiNagar29
    },
    {
      id: 5,
      title: "Modern Residential Complex",
      location: "Laxmi Nagar, Belgaum",
      category: "Residential",
      image: laxmiNagar32
    },
    {
      id: 6,
      title: "Mahalaxmi Nagar Project",
      location: "5th Cross",
      category: "Residential",
      image: mahalaxmiNagar
    },
    {
      id: 7,
      title: "Multi-Family Residence",
      location: "Laxmi Nagar, Belgaum",
      category: "Residential",
      image: laxmiNagar48
    }
  ];

  const filters = ['All', 'Residential', 'Commercial'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => 
        Array.isArray(project.category) 
          ? project.category.includes(activeFilter)
          : project.category === activeFilter
      );

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
              <div 
                className="relative overflow-hidden h-64" 
                onClick={() => setSelectedImage(project.image)}
              >
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
                <div className="absolute top-4 left-4 flex gap-2">
                  {Array.isArray(project.category) ? (
                    project.category.map((cat) => (
                      <span key={cat} className="bg-gold/20 backdrop-blur-sm text-gold text-xs px-3 py-1 rounded-full">
                        {cat}
                      </span>
                    ))
                  ) : (
                    <span className="bg-gold/20 backdrop-blur-sm text-gold text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>

                {/* Project Meta */}
                <div className="space-y-2 pt-2 border-t border-gold/20">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-gold" />
                    {project.location}
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

      {/* Image Modal */}
      <Dialog.Root open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50" />
          <Dialog.Content className="fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
            <div className="relative">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Project view"
                  className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg"
                />
              )}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 bg-gold text-black rounded-full p-2 hover:bg-gold-dark transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
};

export default Projects;