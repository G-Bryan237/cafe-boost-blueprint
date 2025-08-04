import { Button } from "@/components/ui/button";
import { Clock, MapPin, Star } from "lucide-react";
import heroImage from "@/assets/cafe-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-coffee-dark/60 to-coffee-dark/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-warm-white mb-6 leading-tight">
            Where Every Cup
            <span className="block text-accent">Tells a Story</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-warm-white/90 mb-8 font-inter leading-relaxed">
            Artisan coffee, fresh pastries, and warm community vibes in the heart of downtown
          </p>

          {/* Key Info Cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center bg-warm-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-warm-white">
              <Clock className="w-5 h-5 mr-2 text-accent" />
              <span className="font-inter">Open 6AM - 8PM Daily</span>
            </div>
            <div className="flex items-center bg-warm-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-warm-white">
              <MapPin className="w-5 h-5 mr-2 text-accent" />
              <span className="font-inter">123 Coffee Street</span>
            </div>
            <div className="flex items-center bg-warm-white/10 backdrop-blur-sm rounded-lg px-4 py-2 text-warm-white">
              <Star className="w-5 h-5 mr-2 text-accent" />
              <span className="font-inter">4.9★ Google Reviews</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="min-w-[200px]">
              Reserve Your Table
            </Button>
            <Button variant="warm" size="lg" className="min-w-[200px]">
              View Our Menu
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 text-warm-white/80">
            <p className="text-sm font-inter mb-2">Join 1,000+ coffee lovers who start their day with us</p>
            <div className="flex justify-center items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-accent border-2 border-warm-white"></div>
                ))}
              </div>
              <span className="text-sm font-inter ml-2">and many more...</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-warm-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-warm-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;