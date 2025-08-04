import { MapPin, Phone, Mail, Clock, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" }
  ];

  const services = [
    { name: "Online Ordering", href: "#" },
    { name: "Catering", href: "#" },
    { name: "Private Events", href: "#" },
    { name: "Gift Cards", href: "#" }
  ];

  return (
    <footer className="bg-coffee-dark text-warm-white">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Roasted Dreams
            </h3>
            <p className="text-warm-white/80 font-inter mb-6 leading-relaxed">
              Where every cup tells a story. Join us for artisan coffee, fresh pastries, 
              and warm community vibes in the heart of downtown.
            </p>
            <div className="flex items-center text-accent">
              <Heart className="w-5 h-5 mr-2" />
              <span className="font-inter text-sm">Made with love since 2018</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-accent">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-warm-white/80 hover:text-accent transition-colors font-inter"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-accent">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="text-warm-white/80 hover:text-accent transition-colors font-inter"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4 text-accent">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-warm-white/80 font-inter text-sm">
                  <div>123 Coffee Street</div>
                  <div>Downtown District</div>
                  <div>City, State 12345</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:+1234567890"
                  className="text-warm-white/80 hover:text-accent transition-colors font-inter text-sm"
                >
                  (123) 456-7890
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:hello@roasteddreams.cafe"
                  className="text-warm-white/80 hover:text-accent transition-colors font-inter text-sm"
                >
                  hello@roasteddreams.cafe
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-warm-white/80 font-inter text-sm">
                  <div>Mon-Fri: 6:00 AM - 8:00 PM</div>
                  <div>Sat-Sun: 7:00 AM - 9:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-warm-white/20 mt-12 pt-8">
          <div className="text-center">
            <h4 className="text-xl font-playfair font-semibold mb-4 text-accent">
              Stay Connected
            </h4>
            <p className="text-warm-white/80 font-inter mb-6 max-w-md mx-auto">
              Get updates on new menu items, special events, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md bg-warm-white/10 border border-warm-white/20 text-warm-white placeholder:text-warm-white/60 focus:outline-none focus:ring-2 focus:ring-accent font-inter"
              />
              <button className="px-6 py-2 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors font-inter font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-white/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-warm-white/60 font-inter text-sm">
              © 2024 Roasted Dreams Café. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-warm-white/60 hover:text-accent transition-colors font-inter">
                Privacy Policy
              </a>
              <a href="#" className="text-warm-white/60 hover:text-accent transition-colors font-inter">
                Terms of Service
              </a>
              <a href="#" className="text-warm-white/60 hover:text-accent transition-colors font-inter">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;