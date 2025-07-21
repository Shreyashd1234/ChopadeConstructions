import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
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
    </div>
  );
};

export default Index;
