import React, {useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Search, DollarSign, TrendingUp, Shield, Clock, Users, BarChart, ArrowRight, PieChart, Building, Wallet, Target, CheckCircle, Star, Globe, Award, Zap, ChevronDown, ChevronUp, Phone, FileText, MapPin, Calendar } from "lucide-react";
import { Helmet } from 'react-helmet-async';
const HowItWorksPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    {
      icon: UserPlus,
      title: "Create Your Account",
      description: " Sign up in minutes  with basic details and complete our simple KYC process.",
      details: ["Hassle-free onboarding", "Investor dashboard access", "Secure, RERA-compliant platform"],
      time: "5 Minutes"
    },
    {
      icon: Search,
      title: "Explore Premium Properties",
      description: "Browse a curated selection of income-generating, high-growth properties with full due diligence reports.",
      details: ["Rental yield & ROI breakdown", "Legal and RERA documentation", "Location & neighborhood analysis"],
      time: "10 Minutes"
    },
    {
      icon: DollarSign,
      title: "Choose Your Investment",
      description: "Select a property and invest your preferred amount by purchasing Shared ownership units.",
      details: ["No hidden charges or maintenance burden", "Co-own with a trusted club of investors", "Rent starts from Day 1"],
      time: "Start from ₹10L"
    },
    {
      icon: TrendingUp,
      title: "Earn Returns & Exit Confidently",
      description: "Get quarterly rental payouts, monitor your investment performance, and plan your exit based on a guaranteed resale timeline.",
      details: ["12%–15% targeted returns", "Flexible holding period", "Easy exit options with resale support"],
      time: "Passive Income | Capital Appreciation"
    }
  ];

  const stats = [
    { value: "₹10L", label: "Minimum Investment", icon: Building },
    { value: "Day 1", label: "Rental Income Starts", icon: Calendar },
    { value: "14%-16%", label: "Targeted Returns", icon: TrendingUp },
    { value: "RERA", label: "Registered Properties", icon: Shield }
  ];

  const faqs = [
    {
      question: "What is the minimum investment amount?",
      answer: "You can start investing with just ₹10L in most listed properties. Our goal is to make premium real estate accessible to everyone through shared ownership."
    },
    {
      question: "How often will I receive returns?",
      answer: "Rental income is distributed quarterly and reflects directly in your dashboard. You can track your earnings and portfolio performance in real time with full transparency."
    },
    {
      question: "Can I exit before the holding period ends?",
      answer: "While we recommend holding your investment for the full term to maximize returns, you may exit earlier by reselling your shares through our secondary market platform, subject to demand."
    },
    {
      question: "What fees does GroupDealz charge?",
      answer: "We maintain a simple and transparent fee structure. Which is 4–5% property maintenance fees. There are no hidden charges—everything is disclosed upfront."
    },
    {
      question: "How are properties selected?",
      answer: "Each property goes through a rigorous vetting process including market and location analysis, legal and RERA compliance checks, rental income viability, and future growth potential. Only the top-performing assets make it to our platform."
    },
    {
      question: "Is my investment secure?",
      answer: "Yes. Your investment is backed by real, RERA-registered real estate assets. We ensure legal protection, regulatory compliance (SEBI-aligned), and operational transparency at every stage of the process."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
 <Helmet>
  <title>Groupdealz Real Estate - Fractional Property Investment in Gurgaon</title>
  <meta name="title" content="Groupdealz Real Estate - Fractional Property Investment in Gurgaon" />
  <meta
    name="description"
    content="Learn how fractional real estate investing works in Gurgaon. Start with ₹10L, earn rental income from Day 1, and enjoy high ROI with flexible exit options."
  />
  <meta name="keywords" content="Invest smart in real estate in Gurgaon with GroupDealz. Co-own RERA-registered properties from ₹10L. Earn rental income & get flexible exit options." />
  <link rel="canonical" href="https://www.groupdealz.in/how-it-works" />

  <meta name="DC.Title" content="Groupdealz Real Estate - Fractional Property Investment in Gurgaon" />
  <meta
    name="DC.Subject"
    content="Learn how fractional real estate investing works in Gurgaon. Start with ₹10L, earn rental income from Day 1, and enjoy high ROI with flexible exit options."
  />

  <meta property="og:title" content="Groupdealz Real Estate - Fractional Property Investment in Gurgaon" />
  <meta
    property="og:description"
    content="Learn how fractional real estate investing works in Gurgaon. Start with ₹10L, earn rental income from Day 1, and enjoy high ROI with flexible exit options."
  />

  <meta name="language" content="en-us" />
  <meta name="coverage" content="Global" />
  <meta name="robots" content="INDEX,FOLLOW" />
  <meta name="GOOGLEBOT" content="INDEX, FOLLOW" />
  <meta name="doc-type" content="Webpage" />
  <meta name="revisit-after" content="7 days" />
</Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center text-white max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              How Real Estate
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Investment Works.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-4xl mx-auto px-4">
              Experience premium real estate ownership—made simple, secure, and accessible. GroupDealz empowers you to co-invest in RERA-registered, high-value properties starting from just ₹10L. Earn rental income from Day 1, enjoy passive returns, and exit flexibly when the time is right.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-3 sm:p-6 text-center">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2 text-yellow-400" />
                  <div className="text-lg sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-12 sm:py-20 -mt-6 sm:-mt-10 relative z-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Your Investment
              <br />
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Journey, Simplified.
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
              From account creation to passive income, here's how GroupDealz makes real estate investing seamless in <strong>4 simple steps</strong>:
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="mb-12 sm:mb-16">
                {/* Mobile Layout - Stack vertically */}
                <div className="lg:hidden">
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-xl">
                      {index + 1}
                    </div>
                  </div>
                  
                  <Card className="p-4 sm:p-6 md:p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/50 border-2 border-blue-100 mb-6">
                    <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-lg flex-shrink-0">
                        <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">{step.title}</h3>
                        <div className="text-xs sm:text-sm text-blue-600 font-semibold">{step.time}</div>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-4 sm:mb-6 leading-relaxed">{step.description}</p>
                    <div className="space-y-2 sm:space-y-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start text-xs sm:text-sm">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Mobile Visual Infographic */}
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-200">
                    {index === 0 && (
                      <div className="text-center">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                          <UserPlus className="w-8 h-8 sm:w-10 sm:w-10 md:w-12 md:h-12 text-white" />
                        </div>
                        <div className="text-sm sm:text-base md:text-lg font-semibold mb-2">KYC Complete</div>
                        <div className="text-2xl sm:text-3xl font-bold text-green-600">5 Minutes</div>
                        <div className="text-xs sm:text-sm text-gray-600 mt-2">Quick & secure setup</div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="space-y-4">
                        <div className="text-center mb-4">
                          <Building className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto text-purple-600 mb-2" />
                          <div className="text-sm sm:text-base md:text-lg font-semibold">RERA-Registered</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                          <div>
                            <div className="text-xl sm:text-2xl font-bold text-purple-600">100%</div>
                            <div className="text-xs text-gray-600">Verified Properties</div>
                          </div>
                          <div>
                            <div className="text-xl sm:text-2xl font-bold text-orange-600">Full</div>
                            <div className="text-xs text-gray-600">Due Diligence</div>
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="text-center">
                        <div className="relative mb-3 sm:mb-4">
                          <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
                            <DollarSign className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
                          </div>
                        </div>
                        <div className="text-sm sm:text-base md:text-lg font-semibold mb-2">Shared Ownership</div>
                        <div className="text-2xl sm:text-3xl font-bold text-blue-600">₹10L</div>
                        <div className="text-xs sm:text-sm text-gray-600 mt-2">Minimum investment</div>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="text-center">
                        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                          <TrendingUp className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
                        </div>
                        <div className="text-sm sm:text-base md:text-lg font-semibold mb-2">Returns</div>
                        <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">14%-16%</div>
                        <div className="text-xs sm:text-sm text-gray-600 mt-2">Targeted annual returns</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Desktop Layout - Side by side */}
                <div className={`hidden lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Step Content */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <Card className="p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/50 border-2 border-blue-100">
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-6 shadow-lg">
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{step.title}</h3>
                          <div className="text-sm text-blue-600 font-semibold">{step.time}</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{step.description}</p>
                      <div className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </div>

                  {/* Step Number Circle */}
                  <div className="lg:w-2/12 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl z-10">
                      {index + 1}
                    </div>
                  </div>

                  {/* Visual Infographic */}
                  <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12'}`}>
                    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-200">
                      {index === 0 && (
                        <div className="text-center">
                          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <UserPlus className="w-12 h-12 text-white" />
                          </div>
                          <div className="text-lg font-semibold mb-2">KYC Complete</div>
                          <div className="text-3xl font-bold text-green-600">5 Minutes</div>
                          <div className="text-sm text-gray-600 mt-2">Quick & secure setup</div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="space-y-4">
                          <div className="text-center mb-4">
                            <Building className="w-16 h-16 mx-auto text-purple-600 mb-2" />
                            <div className="text-lg font-semibold">RERA-Registered</div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <div className="text-2xl font-bold text-purple-600">100%</div>
                              <div className="text-xs text-gray-600">Verified Properties</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-orange-600">Full</div>
                              <div className="text-xs text-gray-600">Due Diligence</div>
                            </div>
                          </div>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="text-center">
                          <div className="relative mb-4">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center">
                              <DollarSign className="w-10 h-10 text-white" />
                            </div>
                          </div>
                          <div className="text-lg font-semibold mb-2">Shared Ownership</div>
                          <div className="text-3xl font-bold text-blue-600">₹10L</div>
                          <div className="text-sm text-gray-600 mt-2">Minimum investment</div>
                        </div>
                      )}
                      {index === 3 && (
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <TrendingUp className="w-10 h-10 text-white" />
                          </div>
                          <div className="text-lg font-semibold mb-2">Returns</div>
                          <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">14%-16%</div>
                          <div className="text-sm text-gray-600 mt-2">Targeted annual returns</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Trusted & Regulated Platform
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed px-4">
              RERA-registered properties, SEBI-aligned compliance, and complete transparency.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { icon: Shield, title: "RERA Registered", desc: "All properties verified" },
              { icon: Award, title: "SEBI Aligned", desc: "Regulatory compliance" },
              { icon: Globe, title: "Transparent", desc: "Full disclosure" },
              { icon: Zap, title: "Secure Platform", desc: "Protected investments" }
            ].map((item, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-xl">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Frequently Asked
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
              Quick answers to the most common questions about investing with GroupDealz. Still need help? <strong>Contact our team</strong> — we're happy to assist.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="mb-3 sm:mb-4 overflow-hidden border-2 border-purple-100 hover:border-purple-200 transition-all duration-300">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-6 text-left flex justify-between items-start hover:bg-purple-50/50 transition-colors"
                >
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 pr-3 sm:pr-4 leading-tight">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;