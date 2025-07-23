import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Globe, TrendingUp, Shield, CheckCircle } from "lucide-react";

const About = () => {
  useEffect(() => {
    // Add animation classes when elements come into view
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll(".fade-up, .slide-in-left, .slide-in-right");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: Shield,
      title: "Secure & Transparent",
      description: "Every investment is legally structured and professionally managed with complete transparency."
    },
    {
      icon: Users,
      title: "Collective Power",
      description: "Pool resources with other investors to access premium properties previously out of reach."
    },
    {
      icon: TrendingUp,
      title: "Passive Income",
      description: "Generate rental yields and benefit from capital appreciation without property management hassles."
    },
    {
      icon: Target,
      title: "Expert Curation",
      description: "Every property is meticulously vetted and selected by our team of real estate professionals."
    }
  ];

  const features = [
    "Fractional ownership starting from $500",
    "Professional property management included",
    "Legal documentation and protection",
    "Transparent reporting and analytics",
    "Diversified portfolio opportunities",
    "Exit options after minimum holding period"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-up">
              About GroupDealz
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto fade-up" style={{animationDelay: "0.2s"}}>
              Redefining real estate investing by making it inclusive, simplified, and smarter.
            </p>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
                About Us
              </h2>
              <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
                <p className="fade-up" style={{animationDelay: "0.1s"}}>
                  At GroupDealz, we are redefining the landscape of real estate investing by making it inclusive, simplified, and smarter.
                  We believe that access to high-quality property investment opportunities should not be limited to the ultra-wealthy or institutional investors.
                </p>
                <p className="fade-up" style={{animationDelay: "0.2s"}}>
                  That's why we've created a secure, transparent, and expertly managed platform that enables individuals to co-invest in premium real estate assets through fractional ownership, making property investment accessible to all.
                </p>
                <p className="fade-up" style={{animationDelay: "0.3s"}}>
                  GroupDealz is a fractional real estate investment company built on the idea that collective power leads to greater returns. By enabling multiple investors to pool their resources and jointly own high-potential, income-generating properties, we eliminate the traditional barriers to entry in real estate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose GroupDealz</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the power of collective investing with our innovative platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 hover:shadow-gold transition-all duration-300 group fade-up border-0 shadow-lg" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="slide-in-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Investment Made <span className="bg-gradient-primary bg-clip-text text-transparent">Simple</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our platform is designed for both seasoned investors and first-time entrants, offering a seamless way to diversify portfolios, generate passive rental income, and benefit from long-term capital appreciation.
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="slide-in-right">
                <Card className="p-8 bg-gradient-primary text-white border-0 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6">Platform Highlights</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">$500</div>
                      <div className="text-white/80 text-sm">Minimum Investment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">8.2%</div>
                      <div className="text-white/80 text-sm">Avg. Annual Return</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">150+</div>
                      <div className="text-white/80 text-sm">Properties</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">10K+</div>
                      <div className="text-white/80 text-sm">Investors</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Vision</h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Each property listed on GroupDealz is meticulously vetted, professionally managed, and legally structured to protect every stakeholder's rights and returns. Investors receive proportionate benefits, rental yields, appreciation gains, and clear, secure documentation.
              </p>
              <p>
                We take care of the sourcing, legal formalities, maintenance, and ongoing asset management so our investors can focus on building wealth, not on paperwork or tenants.
              </p>
              <div className="bg-gradient-primary rounded-2xl p-8 text-white mt-12">
                <h3 className="text-2xl font-bold mb-4">Welcome to GroupDealz</h3>
                <p className="text-xl">Where real estate meets innovation, and smart investing becomes a team effort.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of a growing community of investors building wealth through smart real estate investments.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Start Your Journey
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;