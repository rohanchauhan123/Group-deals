import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, Search, DollarSign, TrendingUp, Shield, Clock, Users, BarChart } from "lucide-react";

const HowItWorksPage = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "1. Create Account",
      description: "Sign up in minutes with basic information and complete our simple verification process."
    },
    {
      icon: Search,
      title: "2. Browse Properties",
      description: "Explore our curated selection of premium real estate investments with detailed analytics."
    },
    {
      icon: DollarSign,
      title: "3. Choose Investment",
      description: "Select your investment amount starting from as low as $500 per property."
    },
    {
      icon: TrendingUp,
      title: "4. Earn Returns",
      description: "Receive quarterly dividends and track your portfolio performance in real-time."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Secure & Regulated",
      description: "All investments are backed by real assets and managed by licensed professionals."
    },
    {
      icon: Clock,
      title: "3-Year Liquidity",
      description: "Sell your shares after the 3-year holding period or trade with other investors."
    },
    {
      icon: Users,
      title: "Professional Management",
      description: "Expert property management handles maintenance, tenants, and operations."
    },
    {
      icon: BarChart,
      title: "Transparent Reporting",
      description: "Get detailed quarterly reports and real-time dashboard access to your investments."
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
              How It Works
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Start your real estate investment journey in four simple steps and begin earning returns from premium properties.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose GroupDealz?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We make real estate investing accessible, transparent, and profitable for everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-gold transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process Detail */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Investment Process in Detail</h2>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Property Selection</h3>
                  <p className="text-muted-foreground mb-4">
                    Our team of real estate experts carefully vets each property based on location, 
                    market trends, rental income potential, and long-term appreciation prospects.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Due diligence and market analysis</li>
                    <li>• Financial projections and risk assessment</li>
                    <li>• Professional property inspections</li>
                    <li>• Legal structure and documentation</li>
                  </ul>
                </div>
                <div className="bg-gradient-primary rounded-lg p-8 text-white">
                  <h4 className="text-xl font-semibold mb-4">Investment Criteria</h4>
                  <div className="space-y-3">
                    <div>Expected Returns: <span className="font-bold">6-12% annually</span></div>
                    <div>Minimum Investment: <span className="font-bold">$500</span></div>
                    <div>Holding Period: <span className="font-bold">3 years minimum</span></div>
                    <div>Property Types: <span className="font-bold">Residential, Commercial, Mixed-use</span></div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <h3 className="text-2xl font-semibold mb-4">Ongoing Management</h3>
                  <p className="text-muted-foreground mb-4">
                    Once you invest, our professional management team handles all aspects of property 
                    operations, from tenant relations to maintenance and financial reporting.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Quarterly dividend distributions</li>
                    <li>• Regular property updates and reports</li>
                    <li>• Professional maintenance and improvements</li>
                    <li>• Market analysis and exit strategy planning</li>
                  </ul>
                </div>
                <div className="lg:order-1 bg-green-50 rounded-lg p-8">
                  <h4 className="text-xl font-semibold mb-4 text-green-800">Your Benefits</h4>
                  <div className="space-y-3 text-green-700">
                    <div>✓ Passive income without landlord duties</div>
                    <div>✓ Professional property management</div>
                    <div>✓ Diversified real estate portfolio</div>
                    <div>✓ Transparent fee structure</div>
                  </div>
                </div>
              </div>
            </div>
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
            Join thousands of investors who are building wealth through fractional real estate ownership.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorksPage;