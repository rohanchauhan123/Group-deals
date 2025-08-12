import { Search, CreditCard, TrendingUp, Banknote } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse Properties",
      description: "Explore our curated selection of premium real estate opportunities with detailed analytics and projections.",
      color: "primary"
    },
    {
      icon: CreditCard,
      title: "Invest Your Amount",
      description: "Start small and become a co-owner in premium properties that align with your investment goals. Build your real estate portfolio without the need for large capital.",
      color: "secondary"
    },
    {
      icon: TrendingUp,
      title: "Earn Annual Returns",
      description: "Receive monthly rental income as well as your property value will appreciate over time. Watch your investment grow while enjoying consistent passive earnings.",
      color: "primary"
    },
    {
      icon: Banknote,
      title: "Exit After 3 Years",
      description: "Sell your property back to us and Enjoy your returns. You can re-invest again with us to enjoy more returns on your capital.",
      color: "secondary"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">GroupDealz</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, transparent, and secure. Start building your real estate portfolio in four easy steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isGold = step.color === "primary";
            
            return (
              <div 
                key={index} 
                className="info-card relative group"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 ${isGold ? 'bg-primary/10' : 'bg-secondary/10'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-8 w-8 ${isGold ? 'text-primary' : 'text-secondary'}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                
                {/* Connecting line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Infographic section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="slide-in-left">
            <h3 className="text-3xl font-bold mb-6">Investment Timeline</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">Y1</span>
                </div>
                <div>
                  <p className="font-semibold">Year 1: Property Acquisition</p>
                  <p className="text-muted-foreground">We purchase the property and you start earning returns</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <span className="text-secondary font-bold">Y2</span>
                </div>
                <div>
                  <p className="font-semibold">Year 2: Rental Earning From Day One</p>
                  <p className="text-muted-foreground">Consistent rental income and property appreciation</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">Y3+</span>
                </div>
                <div>
                  <p className="font-semibold">Year 3+: Exit Option</p>
                  <p className="text-muted-foreground">Guaranted Exit Through Groupdealz</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-card rounded-2xl p-8 shadow-large">
                <div className="text-center">
                  <h4 className="text-2xl font-bold mb-4">Sample Returns</h4>
                  <div className="space-y-4">
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Initial Investment</p>
                      <p className="text-2xl font-bold">10 Lakh </p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Annual Rental Income</p>
                      <p className="text-2xl font-bold">8%-9%</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Annual Property Capital Appriciation</p>
                      <p className="text-2xl font-bold">14%-16%</p>
                    </div>
                    <div className="bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Annual Property maintainence Fee</p>
                      <p className="text-2xl font-bold">4%-5%</p>
                    </div>
                    {/* <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">After 3 Years</p>
                      <p className="text-3xl font-bold text-secondary">₹1,03,125</p>
                      <p className="text-sm text-secondary font-semibold">+37.5% Total Return</p>
                    </div> */}
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

export default HowItWorks;