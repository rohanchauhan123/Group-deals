import { Shield, DollarSign, Clock, TrendingUp, Users, Award } from "lucide-react";
import growthChart from "@/assets/growth-chart.jpg";

const Benefits = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Low Minimum Investment",
      description: "Start building your real estate portfolio with just $100. No need for massive capital requirements."
    },
    {
      icon: Shield,
      title: "Secure & Regulated",
      description: "All investments are secured by real assets and comply with financial regulations for your protection."
    },
    {
      icon: Clock,
      title: "Passive Income",
      description: "Earn regular returns without the hassle of property management, maintenance, or tenant issues."
    },
    {
      icon: TrendingUp,
      title: "Professional Management",
      description: "Our expert team handles property acquisition, management, and optimization for maximum returns."
    },
    {
      icon: Users,
      title: "Diversified Portfolio",
      description: "Spread your investment across multiple properties and locations to minimize risk."
    },
    {
      icon: Award,
      title: "Transparent Reporting",
      description: "Get detailed quarterly reports on property performance, market trends, and your returns."
    }
  ];

  const stats = [
    { label: "Average Annual Return", value: "12.5%", suffix: "" },
    { label: "Total Properties", value: "150", suffix: "+" },
    { label: "Happy Investors", value: "25", suffix: "K+" },
    { label: "Years of Experience", value: "8", suffix: "+" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-accent">
      <div className="container mx-auto px-6">
        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center fade-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="number-counter mb-2">
                {stat.value}{stat.suffix}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="slide-in-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">GroupDealz</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              We make real estate investment accessible, profitable, and hassle-free for everyone.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div 
                    key={index} 
                    className="group hover-lift"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center group-hover:shadow-gold transition-all duration-300">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right visual */}
          <div className="slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-card rounded-3xl p-8 shadow-large">
                <h3 className="text-2xl font-bold mb-6 text-center">Investment Growth Projection</h3>
                
                {/* Growth chart image */}
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={growthChart} 
                    alt="Investment Growth Chart" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                {/* Sample calculation */}
                <div className="bg-gradient-to-r from-muted to-accent rounded-xl p-6">
                  <h4 className="font-semibold mb-4">Sample Investment Scenario</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Initial Investment:</span>
                      <span className="font-semibold">$1,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Annual Return (12.5%):</span>
                      <span className="font-semibold text-secondary">$125/year</span>
                    </div>
                    <div className="flex justify-between border-t pt-3">
                      <span className="text-muted-foreground">Value after 3 years:</span>
                      <span className="font-bold text-lg text-primary">$1,375</span>
                    </div>
                    <div className="text-center">
                      <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                        37.5% Total Return
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;