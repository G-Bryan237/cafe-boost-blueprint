import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, UtensilsCrossed, Clock } from "lucide-react";
import coffeeImage from "@/assets/coffee-featured.jpg";
import pastriesImage from "@/assets/pastries.jpg";

const Featured = () => {
  const features = [
    {
      icon: Coffee,
      title: "Artisan Coffee",
      description: "Single-origin beans roasted fresh daily by our master roasters"
    },
    {
      icon: UtensilsCrossed,
      title: "Fresh Pastries",
      description: "House-made croissants, muffins, and seasonal treats baked every morning"
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Fast, friendly service that respects your time without compromising quality"
    }
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            What Makes Us Special
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            Every cup, every bite, every moment is crafted with passion and attention to detail
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-warm hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm
                w-full max-w-xs mx-auto md:max-w-none md:w-auto"
            >
              <CardContent className="p-6 md:p-8">
                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 bg-gradient-coffee rounded-full flex items-center justify-center shadow-coffee">
                  <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-warm-white" />
                </div>
                <h3 className="text-lg md:text-xl font-playfair font-semibold text-primary mb-2 md:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground font-inter leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Items */}
        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
          {/* Coffee Feature */}
          <div className="w-full md:w-1/2">
            <div className="relative mb-4">
              <img
                src={coffeeImage}
                alt="Artisan Coffee"
                className="w-full h-56 object-cover rounded-lg"
              />
              <div className="absolute top-3 left-3 bg-accent text-xs px-2 py-1 rounded-full">
                Customer Favorite
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Signature House Blend</h3>
            <p className="text-base mb-4">
              Our carefully curated blend of Ethiopian and Colombian beans, roasted to perfection.
              Notes of chocolate, caramel, and a hint of citrus create a smooth, balanced cup that's
              become the heart of our café.
            </p>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xl font-bold">$4.50</span>
              <span className="text-muted-foreground text-sm">Available hot or iced</span>
            </div>
            <Button className="w-full py-3">
              Order Now
            </Button>
          </div>

          {/* Pastries Feature */}
          <div className="w-full md:w-1/2">
            <div className="relative mb-4">
              <img
                src={pastriesImage}
                alt="Fresh Pastries"
                className="w-full h-56 object-cover rounded-lg"
              />
              <div className="absolute top-3 right-3 bg-coffee-medium text-warm-white text-xs px-2 py-1 rounded-full">
                Baked Fresh Daily
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">
              Fresh Daily Pastries
            </h3>
            <p className="text-base mb-4">
              Start your morning right with our selection of buttery croissants, seasonal muffins,
              and artisan breads. All baked fresh daily using traditional techniques and the finest ingredients.
            </p>
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-xl font-bold">From $2.95</span>
              <span className="text-muted-foreground text-sm">Gluten-free options available</span>
            </div>
            <Button variant="warm" className="w-full py-3">
              See Full Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;