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

        {/* New Structure: Contact Info & Social on Left, Form Center, Map Right (Stacked on mobile) */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-5">
          {/* Left: Contact Info & Social (col-span-2) */}
          <div className="space-y-6 lg:col-span-2">
            <Card className="border-0 shadow-warm hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg font-playfair text-primary">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-coffee rounded-full flex items-center justify-center mt-1">
                        <info.icon className="w-5 h-5 text-warm-white" />
                      </div>
                      <div>
                        <div className="font-playfair font-semibold text-primary">{info.title}</div>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground font-inter text-sm">
                            {detail}
                          </p>
                        ))}
                        <Button variant="link" size="sm" className="px-0 mt-1">
                          {info.action}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Social Media */}
            <Card className="border-0 shadow-warm">
              <CardHeader>
                <CardTitle className="text-lg font-playfair text-primary">
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-row gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex flex-col items-center text-center hover:text-accent transition-colors"
                    >
                      <social.icon className="w-7 h-7 mb-1 text-coffee-medium" />
                      <span className="text-xs font-inter">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Center: Contact Form (col-span-2) */}
          <div className="lg:col-span-2 flex flex-col">
            <Card className="border-0 shadow-warm flex-1">
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
              <Button
                size="lg"
                className="min-w-[200px] bg-wood-brown text-warm-white border-none"
                style={{ backgroundColor: "#8B5C2A" }} // Example brown
              >
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