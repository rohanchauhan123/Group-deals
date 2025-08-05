import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Globe, TrendingUp, Shield, CheckCircle, Menu, X, Building, DollarSign, BarChart, Calendar, Star, Zap, Heart, ArrowUpRight, PieChart, Lightbulb, Rocket, MapPin, Eye } from "lucide-react";

// Simple Navbar Component (keeping original structure)
// Simple Footer Component (keeping original structure)

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
      description: "Every investment is legally structured and professionally managed with complete transparency.",
      
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Users,
      title: "Collective Power",
      description: "Pool resources with other investors to access premium properties previously out of reach.",
      
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: TrendingUp,
      title: "Passive Income",
      description: "Generate rental yields and benefit from capital appreciation without property management hassles.",
     
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Target,
      title: "Expert Curation",
      description: "Every property is meticulously vetted and selected by our team of real estate professionals.",
      
      color: "from-orange-500 to-red-600"
    }
  ];

  const features = [
    { text: "Co-ownership starting from 10L", icon: DollarSign },
    { text: "Professional property management included", icon: Users },
    { text: "Legal documentation and protection", icon: Shield },
    { text: "Transparent reporting and analytics", icon: BarChart },
    { text: "Diversified portfolio opportunities", icon: PieChart },
    { text: "Exit options after minimum holding period", icon: Calendar }
  ];

  const companyStats = [
  
    { value: "14%", label: "Minimum Average Annual Return", icon: TrendingUp },
    { value: "9%", label: "Rental Income", icon: Globe },
    { value: "98%", label: "Investor Satisfaction", icon: Star },
    { value: "24/7", label: "Customer Support", icon: Zap }
  ];

  const milestones = [
    { year: "2019", title: "Company Founded", description: "Started with a vision to democratize real estate", icon: Lightbulb },
    { year: "2020", title: "First $1M Raised", description: "Reached our first major funding milestone", icon: DollarSign },
    { year: "2022", title: "SEC Registration", description: "Became fully regulated and compliant", icon: Shield },
    { year: "2024", title: "15K+ Investors", description: "Built a thriving community of investors", icon: Users },
    { year: "2025", title: "Global Expansion", description: "Expanding to international markets", icon: Globe }
  ];

    // Scroll to top when component mounts
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  

  return (
    <div className="min-h-screen">

<Navbar />
      
      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight fade-up">
              About
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                GroupDealz.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto text-white/90 fade-up" style={{animationDelay: "0.2s"}}>
              Redefining real estate investing by making it inclusive, simplified, and smarter. Join the revolution that's democratizing property ownership for everyone.
            </p>
            
            {/* Animated Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {companyStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 text-center transform hover:scale-105 transition-all duration-500 fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Content with Visual Elements */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="fade-up">
                <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                  Our Story.
                  <br />
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Your Success.
                  </span>
                </h2>
                <div className="space-y-6">
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  At GroupDealz, we believe that real estate investment should be accessible, profitable, and stress-free for everyone. Through our co-ownership model, we enable like-minded individuals to pool their resources and invest in high-value, income-generating properties. This means you can own the premium real estate and enjoy benefits such as rental income, property appreciation, and capital gains, without the hassle of day-to-day management.
                  What truly sets us apart is our 40 years of combined experience in real estate and financial services. 
                  </p>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  This deep industry knowledge allows us to identify high-potential assets, conduct thorough due diligence, and manage every investment with precision and care. Our expert team ensures each property is legally compliant, professionally maintained, and optimally leased, maximizing your returns while minimizing risk.
                  </p>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  When you invest with GroupDealz, you’re not just buying property, you’re entering a partnership built on transparency, trust, and performance. We are committed to delivering timely, consistent returns on your investment and keeping you informed every step of the way. For investors seeking long-term value without the operational burden, GroupDealz offers the ideal balance of security, growth, and ease.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6 slide-in-right">
                <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <Rocket className="w-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Our Mission</h3>
                      <div className="text-sm text-blue-600 font-semibold">Democratizing Wealth</div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To democratize real estate investing and create wealth-building opportunities for everyone, regardless of their starting capital.
                  </p>
                </Card>
                
                <Card className="p-8 bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                      <Eye className="w-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Our Vision</h3>
                      <div className="text-sm text-green-600 font-semibold">Global Leadership</div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    To become the world's most trusted platform for Co-own  real estate investment, connecting millions of investors globally.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline with Enhanced Visuals */}


      {/* Enhanced Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of investing with GroupDealz
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Enhanced Visuals */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="slide-in-left">
                <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                  Investment Made
                  <br />
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Simple.
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Our platform is designed for both seasoned investors and first-time entrants, offering a seamless way to diversify portfolios, generate passive rental income, and benefit from long-term capital appreciation.
                </p>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-lg">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="slide-in-right">
                <Card className="p-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white border-0 shadow-2xl mb-6">
                  <h3 className="text-2xl font-bold mb-6">Platform Highlights</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="text-3xl font-bold mb-2">10L</div>
                      <div className="text-white/80 text-sm">Minimum Investment</div>
                    </div>
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="text-3xl font-bold mb-2">14%</div>
                      <div className="text-white/80 text-sm">Minimum Annual Return</div>
                    </div>
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="text-3xl font-bold mb-2">9%</div>
                      <div className="text-white/80 text-sm">Avg. Rental Income</div>
                    </div>
                    <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <div className="text-3xl font-bold mb-2">15K+</div>
                      <div className="text-white/80 text-sm">Investors</div>
                    </div>
                  </div>
                </Card>

                {/* <Card className="p-6 bg-gradient-to-br from-green-500 to-teal-600 text-white border-0 shadow-xl">
                  <h4 className="text-lg font-bold mb-4 flex items-center">
                    <Shield className="w-6 w-6 mr-2" />
                    Security & Compliance
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center bg-white/10 rounded-lg p-3">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>SEC Registered</span>
                    </div>
                    <div className="flex items-center bg-white/10 rounded-lg p-3">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>FDIC Insured</span>
                    </div>
                    <div className="flex items-center bg-white/10 rounded-lg p-3">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Bank Security</span>
                    </div>
                    <div className="flex items-center bg-white/10 rounded-lg p-3">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>Full Transparency</span>
                    </div>
                  </div>
                </Card> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section with Enhanced Design */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center fade-up">
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Our Vision
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                For Tomorrow.
              </span>
            </h2>
            <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Each property listed on GroupDealz is meticulously vetted, professionally managed, and legally structured to protect every stakeholder's rights and returns. Investors receive proportionate benefits, rental yields, appreciation gains, and clear, secure documentation.
              </p>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We take care of the sourcing, legal formalities, maintenance, and ongoing asset management so our investors can focus on building wealth, not on paperwork or tenants.
              </p>
              
              
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    
      <Footer />
    </div>
  );
};

export default About

const benefits = [
  {
    icon: Shield,
    title: "Premium Real Estate, Fractional Cost",
    description: "With GroupDealz, you don't need to commit a massive sum to enter the real estate market. Invest in premium, high-value properties with low entry capital by purchasing Co-Ownership. This allows you to build a powerful real estate portfolio without the burden of full ownership costs.",
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Users,
    title: "Passive Income from Day One",
    description: "Start earning from the moment you invest. Each property is income-generating and leased to reliable tenants, ensuring that rent begins from Day 1. Your money doesn't sit idle—it starts delivering returns immediately.",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: TrendingUp,
    title: "RERA-Registered & Legally Protected",
    description: "Every property listed on our platform is fully RERA-compliant and legally vetted to ensure complete transparency and regulatory protection. Your investment is secured under the guidelines of real estate authorities, offering peace of mind and legal clarity.",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Target,
    title: "Guaranteed Exit within a Defined Period",
    description: "Unlike traditional property investments, GroupDealz offers a guaranteed exit within a clearly defined holding period. This means you know your exit timeline and return expectations from the start—no surprises, no uncertainty.",
    color: "from-orange-500 to-red-600"
  }
];