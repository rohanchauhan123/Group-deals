import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, MessageSquare, HelpCircle, Send, Users, Shield, TrendingUp } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch with our team",
      details: "info@groupdealz.com",
      action: "Send Email",
      href: "mailto:info@groupdealz.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with an investment advisor",
      details: "+91 9211652088",
      action: "Call Now",
      href: "tel:+919211652088"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office location",
      details: "Ist Floor, Plus Office, Landmark Cyber Park, Ramgarh, Sector 67, Gurugram, Haryana 122018",
      action: "Get Directions",
      href: "https://maps.google.com/?q=Landmark+Cyber+Park+Ramgarh+Sector+67+Gurugram+Haryana+122018"
    },
    {
      icon: Clock,
      title: "Business Hours",
      description: "When we're available to help",
      details: "Mon-Fri: 9AM-6PM IST",
      action: "Schedule Call"
    }
  ];

  const faqs = [
    {
      question: "What is the minimum investment amount?",
      answer: "You can start investing with as little as ₹50,000 in most properties. We believe in making real estate investment accessible to everyone."
    },
    {
      question: "How often do I receive returns?",
      answer: "Dividends are distributed quarterly, and you can track your returns in real-time through your dashboard. We provide complete transparency on your investments."
    },
    {
      question: "Can I sell my investment before the holding period?",
      answer: "While we recommend holding for the full investment period for optimal returns, you may be able to sell to other investors on our secondary market platform."
    },
    {
      question: "What fees do you charge?",
      answer: "We charge a transparent 1% annual management fee and a 10% performance fee on returns above 8%. No hidden charges, complete transparency."
    },
    {
      question: "How do you select properties?",
      answer: "Our expert team conducts thorough due diligence including location analysis, market trends, legal verification, and growth potential assessment before selecting any property."
    },
    {
      question: "Is my investment secure?",
      answer: "All investments are backed by real estate assets and we maintain strict compliance with SEBI regulations. Your investments are protected through multiple security layers."
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Investors"
    },
    {
      icon: TrendingUp,
      number: "₹500Cr+",
      label: "Assets Under Management"
    },
    {
      icon: Shield,
      number: "99.8%",
      label: "Success Rate"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      {/* <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight fade-up">
              Contact
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                GroupDealz.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-8 fade-up-delay-1">
              Have questions about real estate investing? Our team of experts is here to help you build wealth through smart property investments.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12 fade-up-delay-2">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">{stat.number}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Choose the best way to reach us. We're here to help you succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group border-0 bg-gradient-to-b from-white to-slate-50 hover:-translate-y-2">
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <method.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900">{method.title}</CardTitle>
                  <CardDescription className="text-slate-600">{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold mb-6 text-slate-800 leading-relaxed">{method.details}</p>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                    onClick={() => method.href && window.open(method.href, '_blank')}
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Send Us a Message</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours. Our investment experts are ready to help you start your real estate journey.
              </p>
              
              <Card className="p-8 shadow-xl border-0 bg-white">
                <form
                  action="https://formsubmit.co/0debb77ee24630a8b8f928929ed0e42b"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Optional: Disable CAPTCHA */}
                  <input type="hidden" name="_captcha" value="false" />
                  
                  {/* Optional: Custom Subject */}
                  <input type="hidden" name="_subject" value="New Lead from Website" />

                  {/* Optional: Redirect after submit */}
                  <input type="hidden" name="_next" value="https://www.groupdealz.in/" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-slate-700 font-medium">First Name</Label>
                      <Input 
                        id="firstName" 
                        name="First Name"    // 🔥 name added
                        placeholder="John" 
                        className="mt-2 border-slate-200 focus:border-primary focus:ring-primary/20 h-12"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-slate-700 font-medium">Last Name</Label>
                      <Input 
                        id="lastName" 
                        name="Last Name"     // 🔥 name added
                        placeholder="Doe" 
                        className="mt-2 border-slate-200 focus:border-primary focus:ring-primary/20 h-12"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      name="Email"          // 🔥 name added
                      placeholder="john@example.com" 
                      className="mt-2 border-slate-200 focus:border-primary focus:ring-primary/20 h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-slate-700 font-medium">Phone</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      name="Phone"          // 🔥 name added
                      placeholder="+91 98765 43210" 
                      className="mt-2 border-slate-200 focus:border-primary focus:ring-primary/20 h-12"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-slate-700 font-medium">Subject</Label>
                    <Input 
                      id="subject" 
                      name="Subject"        // 🔥 name added
                      placeholder="Investment Inquiry" 
                      className="mt-2 border-slate-200 focus:border-primary focus:ring-primary/20 h-12"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-slate-700 font-medium">Message</Label>
                    <Textarea 
                      id="message" 
                      name="Message"        // 🔥 name added
                      placeholder="Tell us about your investment goals and any questions you have..."
                      className="min-h-32 mt-2 border-slate-200 focus:border-primary focus:ring-primary/20 resize-none"
                    />
                  </div>
                  
                  <Button className="w-full h-14 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>

              </Card>
            </div>

            {/* Map & Office Info */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-900">Visit Our Office</h2>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Located in the heart of Gurugram's business district, our office is easily accessible and equipped with modern facilities.
              </p>
              
              {/* Office Details Card */}
              <Card className="p-8 mb-8 shadow-xl border-0 bg-white">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">GroupDealz Office</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Ist Floor, Plus Office<br />
                      Landmark Cyber Park, Ramgarh<br />
                      Sector 67, Gurugram<br />
                      Haryana 122018, India
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-slate-700">+91 9211652088</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="text-slate-700">info@groupdealz.com</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-white transition-all duration-300"
                  onClick={() => window.open("https://maps.google.com/?q=Landmark+Cyber+Park+Ramgarh+Sector+67+Gurugram+Haryana+122018", '_blank')}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </Card>

              {/* Embedded Map */}
              <Card className="overflow-hidden shadow-xl border-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.5123456789!2d77.0647!3d28.3949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d229b2b2b2b2b%3A0x1234567890abcdef!2sLandmark%20Cyber%20Park%2C%20Sector%2067%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1234567890123"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      

      {/* CTA Section */}
 

      <Footer />
    </div>
  );
};

export default Contact;