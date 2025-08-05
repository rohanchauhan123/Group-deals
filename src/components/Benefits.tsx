import { Shield, DollarSign, Clock, TrendingUp, Users, Award } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Low Minimum Investment",
      description: "Start building your real estate portfolio with little amount. No need for massive capital requirements."
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

  return (
    <section className="py-24 bg-gradient-to-br from-background to-accent">
      <div className="container mx-auto px-6">
        <div className="slide-in-left">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">
            Why Choose <span className="bg-gradient-to-r from-primary to-secondary  bg-clip-text text-transparent">GroupDealz</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center">
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
      </div>
    </section>
  );
};

export default WhyChooseUs;