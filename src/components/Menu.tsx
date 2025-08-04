import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Croissant, Sandwich, Cake } from "lucide-react";

const Menu = () => {
  const menuCategories = [
    {
      icon: Coffee,
      title: "Coffee & Espresso",
      items: [
        { name: "House Blend Coffee", price: "$4.50", description: "Our signature roast with notes of chocolate and caramel", popular: true },
        { name: "Cappuccino", price: "$5.25", description: "Rich espresso with steamed milk and velvety foam" },
        { name: "Latte", price: "$5.75", description: "Smooth espresso with steamed milk and latte art" },
        { name: "Americano", price: "$4.00", description: "Bold espresso shots with hot water" },
        { name: "Cold Brew", price: "$4.75", description: "Smooth, less acidic coffee steeped for 12 hours", seasonal: true },
        { name: "Mocha", price: "$6.25", description: "Rich chocolate and espresso with whipped cream" }
      ]
    },
    {
      icon: Croissant,
      title: "Fresh Pastries",
      items: [
        { name: "Butter Croissant", price: "$3.25", description: "Flaky, buttery layers baked to golden perfection", popular: true },
        { name: "Almond Croissant", price: "$4.50", description: "Filled with sweet almond cream and sliced almonds" },
        { name: "Blueberry Muffin", price: "$3.75", description: "Bursting with fresh blueberries and lemon zest" },
        { name: "Cinnamon Roll", price: "$4.25", description: "Warm, gooey rolls with cream cheese glaze" },
        { name: "Seasonal Scone", price: "$3.95", description: "Changes with the seasons - ask about today's flavor", seasonal: true },
        { name: "Chocolate Chip Cookie", price: "$2.95", description: "Soft-baked with premium dark chocolate chips" }
      ]
    },
    {
      icon: Sandwich,
      title: "Light Meals",
      items: [
        { name: "Avocado Toast", price: "$8.95", description: "Multigrain bread with smashed avocado, tomato, and everything seasoning", popular: true },
        { name: "Breakfast Sandwich", price: "$7.50", description: "Scrambled eggs, cheese, and choice of bacon or sausage" },
        { name: "Turkey & Brie Panini", price: "$9.25", description: "Sliced turkey, brie cheese, apple, and honey mustard" },
        { name: "Caprese Sandwich", price: "$8.75", description: "Fresh mozzarella, tomato, basil, and balsamic glaze" },
        { name: "Quinoa Salad Bowl", price: "$9.50", description: "Superfood bowl with fresh vegetables and lemon vinaigrette" },
        { name: "Soup of the Day", price: "$6.95", description: "Ask your server about today's homemade selection" }
      ]
    },
    {
      icon: Cake,
      title: "Sweet Treats",
      items: [
        { name: "New York Cheesecake", price: "$5.95", description: "Classic creamy cheesecake with berry compote", popular: true },
        { name: "Tiramisu", price: "$6.25", description: "Traditional Italian dessert with coffee-soaked ladyfingers" },
        { name: "Chocolate Brownie", price: "$4.50", description: "Fudgy brownie with walnuts and chocolate chips" },
        { name: "Lemon Tart", price: "$5.25", description: "Tangy lemon curd in a buttery pastry shell" },
        { name: "Seasonal Cake", price: "$5.75", description: "Rotating selection of seasonal flavors", seasonal: true },
        { name: "Macarons (3 pack)", price: "$7.50", description: "Delicate French cookies in assorted flavors" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            Carefully crafted items made fresh daily with premium ingredients
          </p>
          <div className="mt-6">
            <Button variant="cafe" size="lg">
              Download Full Menu PDF
            </Button>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Header */}
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center bg-card rounded-lg p-4 shadow-warm">
                  <div className="w-12 h-12 bg-gradient-coffee rounded-full flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-warm-white" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-primary">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Menu Items Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="border-0 shadow-warm hover:shadow-elegant transition-all duration-300 bg-card">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <h4 className="text-lg font-playfair font-semibold text-primary leading-tight">
                          {item.name}
                        </h4>
                        <div className="flex flex-col items-end space-y-1">
                          <span className="text-lg font-playfair font-bold text-coffee-dark">
                            {item.price}
                          </span>
                          <div className="flex space-x-1">
                            {item.popular && (
                              <Badge variant="secondary" className="text-xs bg-accent text-accent-foreground">
                                Popular
                              </Badge>
                            )}
                            {item.seasonal && (
                              <Badge variant="outline" className="text-xs border-coffee-light text-coffee-medium">
                                Seasonal
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Special Offers */}
        <div className="mt-20 bg-coffee-dark rounded-lg p-8 md:p-12 text-center text-warm-white">
          <h3 className="text-3xl font-playfair font-bold mb-4">
            Daily Specials & Loyalty Program
          </h3>
          <p className="text-lg mb-6 font-inter max-w-2xl mx-auto opacity-90">
            Join our loyalty program and get every 10th coffee free! Plus, check out our daily specials 
            for seasonal drinks and limited-time pastries.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-warm-white/10 rounded-lg p-4">
              <div className="text-xl font-playfair font-bold mb-2">Monday</div>
              <div className="text-sm font-inter">Buy one pastry, get second 50% off</div>
            </div>
            <div className="bg-warm-white/10 rounded-lg p-4">
              <div className="text-xl font-playfair font-bold mb-2">Wednesday</div>
              <div className="text-sm font-inter">$1 off all specialty drinks</div>
            </div>
            <div className="bg-warm-white/10 rounded-lg p-4">
              <div className="text-xl font-playfair font-bold mb-2">Friday</div>
              <div className="text-sm font-inter">Free cookie with coffee purchase</div>
            </div>
          </div>
          <div className="mt-8">
            <Button variant="warm" size="lg">
              Join Loyalty Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;