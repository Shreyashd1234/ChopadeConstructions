import { Building, MapPin, Clock, Trophy, Smile, Ruler, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Building,
      number: "100+",
      label: "Projects Completed",
      description: "Successful construction projects delivered"
    },
    {
      icon: Clock,
      number: "20+",
      label: "Years of Experience",
      description: "Two decades of construction excellence"
    },
    {
      icon: Trophy,
      number: "100%",
      label: "Client Satisfaction",
      description: "Committed to quality and trust"
    },
    {
      icon: MapPin,
      number: "Complete Handling",
      label: "Complete Project Handling",
      description: "From planning to finishing — we do it all"
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 slide-up">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-bold">
                Who <span className="text-gold-gradient">We Are</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark rounded-full"></div>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Chopade Constructions is a forward-thinking construction firm with over a decade of excellence. 
                We specialize in creating architectural marvels that stand the test of time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With 100+ projects delivered and 20+ years of experience, we build structures that inspire confidence 
                and reflect quality. Our commitment to innovation, sustainability, and client satisfaction 
                sets us apart in the construction industry.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-foreground">Expert architectural design and planning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-foreground">Premium quality materials and construction</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-foreground">Timely project delivery and execution</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-foreground">Sustainable and eco-friendly practices</span>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Spline Model */}
          <div className="relative flex flex-col items-center">
            {/* User Guide for 3D Model - revert to previous text with 'Tip:' */}
            <div className="mb-4 bg-gold/10 text-gold-dark px-4 py-2 rounded-full text-sm shadow-md z-20 text-center">
              <span className="font-semibold">Tip:</span> Click and drag to rotate the 3D model. Use your mouse wheel or pinch to zoom.
            </div>
            <div className="glass-card rounded-3xl overflow-hidden h-96 w-full">
              <iframe 
                src='https://my.spline.design/buildingblueprintfromscratch-u0DQFI7KAlZOJ3dHFnHzjtw5/' 
                frameBorder='0' 
                width='100%' 
                height='100%'
                className="rounded-3xl"
              />
            </div>
            
            {/* Floating Design Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gold/10 rounded-full blur-lg floating"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gold/20 rounded-full blur-sm floating" style={{animationDelay: '2s'}}></div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl p-6 text-center space-y-4 slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="w-12 h-12 mx-auto bg-gold/20 rounded-xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              <div>
                <div className="text-3xl font-bold text-gold">{stat.number}</div>
                <div className="text-sm font-medium text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground mt-2">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;