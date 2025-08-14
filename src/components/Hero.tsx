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
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-7xl font-playfair font-bold text-warm-white mb-4 mt-12 leading-tight">
            Where Every Cup
            <span className="block text-accent">Tells a Story</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-warm-white/90 mb-6 font-inter leading-relaxed">
            Artisan coffee, fresh pastries, and warm community vibes in the heart of downtown
          </p>

          {/* CTA Buttons - side by side on all screens */}
          <div className="flex flex-row gap-4 justify-center items-center mb-6 w-full max-w-xs mx-auto">
            <Button
              variant="hero"
              size="lg"
              className="min-w-[180px] py-4 text-lg"
            >
              Reserve Your Table
            </Button>
            <Button variant="warm" size="lg" className="min-w-[140px]">
              View Our Menu
            </Button>
          </div>

          {/* Key Info Cards - side by side, dry, below buttons */}
          <div className="flex flex-row justify-center gap-3 mb-8 w-full max-w-xs mx-auto">
            <div className="flex items-center text-warm-white justify-center">
              <Clock className="w-5 h-5 mr-2 text-accent" />
              <span className="font-inter">Open 6AM - 8PM Daily</span>
            </div>
            <div className="flex items-center text-warm-white justify-center">
              <MapPin className="w-5 h-5 mr-2 text-accent" />
              <span className="font-inter">123 Coffee Street</span>
            </div>
            <div className="flex items-center text-warm-white justify-center">
              <Star className="w-5 h-5 mr-2 text-accent" />
              <span className="font-inter">4.9★ Google Reviews</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-4 text-warm-white/80">
            <p className="text-sm font-inter mb-2">Join 1,000+ coffee lovers who start their day with us</p>
            <div className="flex justify-center items-center space-x-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={`https://randomuser.me/api/portraits/thumb/men/${i + 10}.jpg`}
                    alt="Customer"
                    className="w-8 h-8 rounded-full border-2 border-warm-white object-cover"
                  />
                ))}
              </div>
              <span className="text-sm font-inter ml-2">and many more...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;