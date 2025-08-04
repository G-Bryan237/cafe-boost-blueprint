import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Coffee Street", "Downtown District", "City, State 12345"],
      action: "Get Directions"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(123) 456-7890", "Order ahead or ask questions"],
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@roasteddreams.cafe", "We'll respond within 24 hours"],
      action: "Send Email"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday - Friday: 6:00 AM - 8:00 PM", "Saturday - Sunday: 7:00 AM - 9:00 PM", "Holidays: Check our social media"],
      action: "View Calendar"
    }
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@roasteddreams" },
    { icon: Facebook, name: "Facebook", handle: "RoastedDreamsCafe" },
    { icon: Twitter, name: "Twitter", handle: "@roasted_dreams" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            We'd love to hear from you. Visit us, call us, or send us a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-warm hover:shadow-elegant transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-coffee rounded-full flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-warm-white" />
                    </div>
                    <CardTitle className="text-lg font-playfair text-primary">
                      {info.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground font-inter text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}

            {/* Social Media */}
            <Card className="border-0 shadow-warm">
              <CardHeader>
                <CardTitle className="text-lg font-playfair text-primary">
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-center space-x-3 p-2 rounded hover:bg-accent/50 transition-colors">
                      <social.icon className="w-5 h-5 text-coffee-medium" />
                      <div>
                        <div className="font-inter font-medium text-primary text-sm">{social.name}</div>
                        <div className="text-muted-foreground text-xs">{social.handle}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <Card className="border-0 shadow-warm">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground font-inter">
                  Have a question, suggestion, or want to book a private event? We'd love to hear from you.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-inter">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-inter">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-inter">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="font-inter">Phone (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-inter">Subject</Label>
                  <Input id="subject" placeholder="General Inquiry" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-inter">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you..."
                    className="min-h-[120px]"
                  />
                </div>
                <Button variant="cafe" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="border-0 shadow-warm">
              <CardContent className="p-0">
                <div className="h-64 bg-gradient-warm rounded-lg flex items-center justify-center relative overflow-hidden">
                  {/* Map placeholder with attractive styling */}
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-coffee-medium mx-auto mb-4" />
                    <h3 className="text-xl font-playfair font-semibold text-primary mb-2">
                      Find Us Downtown
                    </h3>
                    <p className="text-muted-foreground font-inter">
                      123 Coffee Street, Downtown District
                    </p>
                    <Button variant="outline" className="mt-4">
                      Open in Google Maps
                    </Button>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 right-6 w-2 h-2 bg-coffee-light rounded-full animate-pulse delay-1000"></div>
                  <div className="absolute top-1/3 right-8 w-4 h-4 bg-coffee-medium/30 rounded-full animate-pulse delay-500"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-coffee rounded-lg p-8 md:p-12 text-warm-white">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              Ready to Visit?
            </h3>
            <p className="text-lg mb-8 font-inter opacity-90 max-w-2xl mx-auto">
              Skip the wait and order ahead, or reserve your favorite table for a meeting or study session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="warm" size="lg" className="min-w-[200px]">
                Order Ahead Online
              </Button>
              <Button variant="outline" size="lg" className="min-w-[200px] border-warm-white text-warm-white hover:bg-warm-white hover:text-coffee-dark">
                Reserve a Table
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;