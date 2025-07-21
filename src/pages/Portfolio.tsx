import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const commercialProjects = Array.from({ length: 15 }, (_, i) => ({
  title: `Commercial Project ${i + 1}`,
  type: 'Commercial',
  image: '/assets/Architectural Design.jpg',
  description: 'A showcase of our commercial expertise.'
}));

const residentialProjects = Array.from({ length: 15 }, (_, i) => ({
  title: `Residential Project ${i + 1}`,
  type: 'Residential',
  image: '/assets/Interior Designing.jpg',
  description: 'A showcase of our residential excellence.'
}));

// Alternate commercial and residential for All section
const getAlternatingProjects = () => {
  const all = [];
  for (let i = 0; i < 15; i++) {
    if (i < commercialProjects.length) all.push(commercialProjects[i]);
    if (i < residentialProjects.length) all.push(residentialProjects[i]);
  }
  return all;
};

const Portfolio = () => {
  const [selectedSection, setSelectedSection] = useState('All');

  let projectsToShow = [];
  let sectionTitle = '';
  if (selectedSection === 'All') {
    projectsToShow = getAlternatingProjects();
    sectionTitle = 'All Projects';
  } else if (selectedSection === 'Commercial') {
    projectsToShow = commercialProjects;
    sectionTitle = 'Commercial Properties';
  } else if (selectedSection === 'Residential') {
    projectsToShow = residentialProjects;
    sectionTitle = 'Residential Properties';
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col relative overflow-x-hidden">
      {/* Subtle floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-32 left-10 w-40 h-40 bg-gold/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gold/20 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
      </div>
      <Header />
      <main className="flex-1 w-full relative z-10">
        <section className="py-16 px-4">
          <h1 className="text-4xl font-bold text-center mb-24 text-gold drop-shadow-lg mt-40">Our Portfolio</h1>
          {/* Navigation Buttons */}
          <div className="flex justify-center gap-6 mb-16">
            <button
              onClick={() => setSelectedSection('All')}
              className={`px-8 py-3 rounded-full font-bold border-2 border-gold shadow-lg text-lg focus:outline-none transition-all duration-200 backdrop-blur-md
                ${selectedSection === 'All' ? 'bg-gradient-to-r from-gold to-gold-dark text-black' : 'bg-black/60 text-gold hover:bg-gold hover:text-black'}`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedSection('Commercial')}
              className={`px-8 py-3 rounded-full font-bold border-2 border-gold shadow-lg text-lg focus:outline-none transition-all duration-200 backdrop-blur-md
                ${selectedSection === 'Commercial' ? 'bg-gradient-to-r from-gold to-gold-dark text-black' : 'bg-black/60 text-gold hover:bg-gold hover:text-black'}`}
            >
              Commercial
            </button>
            <button
              onClick={() => setSelectedSection('Residential')}
              className={`px-8 py-3 rounded-full font-bold border-2 border-gold shadow-lg text-lg focus:outline-none transition-all duration-200 backdrop-blur-md
                ${selectedSection === 'Residential' ? 'bg-gradient-to-r from-gold to-gold-dark text-black' : 'bg-black/60 text-gold hover:bg-gold hover:text-black'}`}
            >
              Residential
            </button>
          </div>
          {/* Section Title */}
          <div className="max-w-7xl mx-auto mb-8">
            <h2 className="text-3xl font-bold text-gold mb-16 mt-24 text-center tracking-wide drop-shadow-lg">{sectionTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {projectsToShow.map((project, idx) => (
                <div
                  key={idx}
                  className="relative group rounded-3xl overflow-hidden glass-card border border-gold/30 hover:border-gold/80 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-scale backdrop-blur-lg"
                  style={{
                    animationDelay: `${idx * 0.07 + 0.2}s`,
                    animationFillMode: 'both',
                  }}
                >
                  {/* Card background glow */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-gold/10 to-transparent rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 z-0" />
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-56 rounded-t-3xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`bg-gold/30 backdrop-blur-sm text-gold text-xs px-3 py-1 rounded-full font-semibold shadow-md border border-gold/40`}>{project.type}</span>
                    </div>
                  </div>
                  {/* Project Details */}
                  <div className="relative z-10 p-6 flex flex-col gap-2 bg-black/60 backdrop-blur-md rounded-b-3xl">
                    <h3 className="text-xl font-bold text-gold mb-1 drop-shadow-sm group-hover:tracking-wider transition-all duration-300">{project.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-3 group-hover:text-gold/90 transition-colors duration-300">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* Floating Call Button */}
      <a
        href="tel:9972255837"
        className="fixed bottom-8 right-8 z-50 bg-gold text-black rounded-full shadow-lg p-4 flex items-center justify-center hover:bg-gold-dark transition-colors duration-200"
        style={{ boxShadow: '0 4px 24px 0 rgba(255, 215, 0, 0.3)' }}
        aria-label="Call Now"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15l2.25-2.25a1.5 1.5 0 00-.375-2.414l-4.125-2.062a1.5 1.5 0 00-1.636.176l-1.125.9a11.25 11.25 0 01-5.25-5.25l.9-1.125a1.5 1.5 0 00.176-1.636L4.914 3.375A1.5 1.5 0 002.5 3.75L.25 6c0 .414.336.75.75.75z" />
        </svg>
      </a>
      {/* Animations */}
      <style>{`
        @keyframes fade-in-scale {
          0% { opacity: 0; transform: translateY(40px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>
    </div>
  );
};

export default Portfolio; 