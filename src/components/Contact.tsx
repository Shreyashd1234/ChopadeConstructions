import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const waNumber = '9972255837';
    const waMessage =
      `Name: ${formData.name}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Project Details: ${formData.message}`;
    const waUrl = `https://wa.me/91${waNumber}?text=${waMessage}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer'); // Send your project details via WhatsApp
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-32 left-20 w-32 h-32 bg-gold/10 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Let's Build Something{' '}
            <span className="text-gold-gradient">Together</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold to-gold-dark rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your construction project? Get in touch with our expert team 
            for a free consultation and detailed project planning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Form & Map */}
          <div className="space-y-8">
            <div className="glass-card rounded-3xl p-8 slide-up">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-foreground mb-2">Send us a Message</h3>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you soon.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-input border-border focus:border-gold focus:ring-gold"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-input border-border focus:border-gold focus:ring-gold"
                    placeholder="9972255837"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-input border-border focus:border-gold focus:ring-gold resize-none"
                  placeholder="Tell us about your construction project..."
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="btn-gold-filled w-full py-4 text-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <CheckCircle className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
            </div>

            {/* Google Maps - Below Form */}
            <div className="glass-card rounded-3xl p-6 slide-up">
              <h3 className="text-lg font-semibold text-foreground mb-3">Find Us on Map</h3>
              <div className="relative w-full h-64 rounded-xl overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.8476575965033!2d74.4775645!3d15.864602199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf657f5774630d%3A0x7c2f7141d7708d4!2sChopade%20Constructions!5e0!3m2!1sen!2sin!4v1764872171107!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chopade Constructions Location"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-8 slide-up">
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Office Address</h4>
                    <p className="text-muted-foreground">
                      H No 322, Ramghat Road<br />
                      Near Ganesh Temple<br />
                      Saraswati Nagar, Ganeshpur<br />
                      Belagavi, Hindalga<br />
                      Karnataka 591108
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Phone Number</h4>
                    <p className="text-muted-foreground">9972255837</p>
                    <p className="text-muted-foreground">9972944524</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email Address</h4>
                    <a href="mailto:chopadeconstructions@gmail.com" className="text-muted-foreground hover:text-gold transition-colors block">
                      chopadeconstructions@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground mb-2">Quick support and consultation</p>
                    <Button 
                      className="btn-gold-outline text-sm px-4 py-2"
                      onClick={() => window.open('https://wa.me/919972255837', '_blank')}
                      aria-label="Chat with our team on WhatsApp"
                      title="Chat with our team on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat with us
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="glass-card rounded-3xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>9:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>9:00 AM - 3:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;