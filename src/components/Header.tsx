import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-border shadow-warm">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-primary">
              Roasted Dreams
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-inter">
              Home
            </a>
            <a href="#menu" className="text-foreground hover:text-primary transition-colors font-inter">
              Menu
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-inter">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-inter">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+1234567890" className="flex items-center text-primary hover:text-coffee-dark transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-inter font-medium">(123) 456-7890</span>
            </a>
            <Button variant="cafe" size="default">
              Order Online
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-warm-white">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-colors font-inter px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#menu"
                className="text-foreground hover:text-primary transition-colors font-inter px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors font-inter px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors font-inter px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex flex-col space-y-3 pt-4 px-2">
                <a href="tel:+1234567890" className="flex items-center text-primary hover:text-coffee-dark transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-inter font-medium">(123) 456-7890</span>
                </a>
                <Button variant="cafe" size="default" className="w-full">
                  Order Online
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;