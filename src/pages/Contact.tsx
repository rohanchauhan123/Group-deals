import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, MessageSquare, HelpCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch with our team",
      details: "invest@groupdealz.com",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with an investment advisor",
      details: "1-800-GROUP-DEALZ",
      action: "Call Now"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our headquarters location",
      details: "123 Investment Street, New York, NY 10001",
      action: "Get Directions"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "When we're available to help",
      details: "Mon-Fri: 9AM-6PM EST",
      action: "Schedule Call"
    }
  ];

  const faqs = [
    {
      question: "What is the minimum investment amount?",
      answer: "You can start investing with as little as $500 in most properties."
    },
    {
      question: "How often do I receive returns?",
      answer: "Dividends are distributed quarterly, and you can track your returns in real-time through your dashboard."
    },
    {
      question: "Can I sell my investment before 3 years?",
      answer: "While we recommend holding for the full 3-year period for optimal returns, you may be able to sell to other investors on our secondary market."
    },
    {
      question: "What fees do you charge?",
      answer: "We charge a transparent 1% annual management fee and a 10% performance fee on returns above 8%."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Have questions about real estate investing? Our team of experts is here to help you get started.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-gold transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-4">{method.details}</p>
                  <Button variant="outline" className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <Card className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Investment Inquiry" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your investment goals and any questions you have..."
                      className="min-h-32"
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-muted-foreground mb-8">
                Quick answers to common questions about investing with GroupDealz.
              </p>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="p-6 hover:shadow-gold transition-all duration-300">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-start gap-3">
                        <HelpCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed ml-8">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Don't see your question answered?
                </p>
                <Button variant="outline">
                  View All FAQs
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Offices</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at one of our locations or schedule a virtual meeting with our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-gold transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">New York (HQ)</CardTitle>
                <CardDescription>Our main headquarters</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  123 Investment Street<br />
                  New York, NY 10001<br />
                  United States
                </p>
                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-gold transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">San Francisco</CardTitle>
                <CardDescription>West Coast operations</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  456 Tech Boulevard<br />
                  San Francisco, CA 94105<br />
                  United States
                </p>
                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-gold transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Austin</CardTitle>
                <CardDescription>Southern region office</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  789 Real Estate Plaza<br />
                  Austin, TX 78701<br />
                  United States
                </p>
                <Button variant="outline" className="w-full">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Investing?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a call with one of our investment advisors to learn more about our opportunities.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Schedule a Call
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;