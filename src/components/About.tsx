import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Leaf } from "lucide-react";
import ownerImage from "@/assets/cafe-owner.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Coffee",
      description: "Every cup is brewed with love and expertise"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Building connections one conversation at a time"
    },
    {
      icon: Award,
      title: "Quality Standards",
      description: "Only the finest ingredients and traditional methods"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Ethically sourced beans supporting local farmers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Our Story Began with a Simple Dream
            </h2>
            <p className="text-lg text-muted-foreground mb-6 font-inter leading-relaxed">
              In 2018, Sarah Martinez opened Roasted Dreams with a vision to create more than just a coffee shop. 
              She wanted to build a warm, welcoming space where neighbors become friends and every cup tells a story 
              of craftsmanship and care.
            </p>
            <p className="text-lg text-muted-foreground mb-6 font-inter leading-relaxed">
              What started as a small corner café has grown into the heart of our community, serving over 500 cups 
              of happiness daily. We source our beans directly from sustainable farms, ensuring every sip supports 
              both incredible flavor and ethical practices.
            </p>
            <div className="flex flex-wrap gap-6 text-center lg:text-left">
              <div>
                <div className="text-3xl font-playfair font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground font-inter">Cups served daily</div>
              </div>
              <div>
                <div className="text-3xl font-playfair font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground font-inter">Years of excellence</div>
              </div>
              <div>
                <div className="text-3xl font-playfair font-bold text-primary">1,000+</div>
                <div className="text-sm text-muted-foreground font-inter">Happy customers</div>
              </div>
            </div>
          </div>
          <div className="order-first lg:order-last">
            <div className="relative">
              <img
                src={ownerImage}
                alt="Sarah Martinez, Café Owner"
                className="w-full max-w-md mx-auto h-96 object-cover rounded-lg shadow-elegant"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-lg shadow-warm">
                <p className="font-inter font-medium text-sm">
                  "Every cup is brewed with intention"
                </p>
                <p className="text-xs text-muted-foreground mt-1">- Sarah Martinez, Owner</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-playfair font-bold text-primary mb-4">
            What We Stand For
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            Our values guide every decision, from bean selection to customer service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center border-0 shadow-warm hover:shadow-elegant transition-all duration-300 bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-coffee rounded-full flex items-center justify-center shadow-coffee">
                  <value.icon className="w-6 h-6 text-warm-white" />
                </div>
                <h4 className="text-lg font-playfair font-semibold text-primary mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground font-inter text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Impact */}
        <div className="bg-gradient-warm rounded-lg p-8 md:p-12 mt-16 text-center">
          <h3 className="text-3xl font-playfair font-bold text-primary mb-4">
            Giving Back to Our Community
          </h3>
          <p className="text-lg text-muted-foreground mb-6 font-inter max-w-3xl mx-auto leading-relaxed">
            We're proud to support local schools, sponsor community events, and provide a gathering space 
            for book clubs, study groups, and neighborhood meetings. When you choose Roasted Dreams, 
            you're investing in our shared community.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-playfair font-bold text-primary">$15K+</div>
              <div className="text-sm text-muted-foreground font-inter">Donated to local schools</div>
            </div>
            <div>
              <div className="text-2xl font-playfair font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground font-inter">Community events sponsored</div>
            </div>
            <div>
              <div className="text-2xl font-playfair font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground font-inter">Local meetings hosted</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;