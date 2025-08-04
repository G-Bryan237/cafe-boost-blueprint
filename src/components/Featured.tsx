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
            <Card key={index} className="text-center border-0 shadow-warm hover:shadow-elegant transition-all duration-300 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-coffee rounded-full flex items-center justify-center shadow-coffee">
                  <feature.icon className="w-8 h-8 text-warm-white" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Items */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coffee Feature */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={coffeeImage}
                alt="Artisan Coffee"
                className="w-full h-80 object-cover rounded-lg shadow-elegant"
              />
              <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-inter font-medium">
                Customer Favorite
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-playfair font-bold text-primary mb-4">
              Signature House Blend
            </h3>
            <p className="text-muted-foreground mb-6 font-inter text-lg leading-relaxed">
              Our carefully curated blend of Ethiopian and Colombian beans, roasted to perfection. 
              Notes of chocolate, caramel, and a hint of citrus create a smooth, balanced cup that's 
              become the heart of our café.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-2xl font-playfair font-bold text-primary">$4.50</span>
              <span className="text-muted-foreground font-inter">Available hot or iced</span>
            </div>
            <Button variant="cafe" size="lg">
              Order Now
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
          {/* Pastries Feature */}
          <div>
            <h3 className="text-3xl font-playfair font-bold text-primary mb-4">
              Fresh Daily Pastries
            </h3>
            <p className="text-muted-foreground mb-6 font-inter text-lg leading-relaxed">
              Start your morning right with our selection of buttery croissants, seasonal muffins, 
              and artisan breads. All baked fresh daily using traditional techniques and the finest ingredients.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-2xl font-playfair font-bold text-primary">From $2.95</span>
              <span className="text-muted-foreground font-inter">Gluten-free options available</span>
            </div>
            <Button variant="warm" size="lg">
              See Full Menu
            </Button>
          </div>
          <div>
            <div className="relative">
              <img
                src={pastriesImage}
                alt="Fresh Pastries"
                className="w-full h-80 object-cover rounded-lg shadow-elegant"
              />
              <div className="absolute top-4 right-4 bg-coffee-medium text-warm-white px-3 py-1 rounded-full text-sm font-inter font-medium">
                Baked Fresh Daily
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;