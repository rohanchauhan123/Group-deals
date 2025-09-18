import { ArrowRight, TrendingUp, HandCoins , Coins, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/Artboard 1.jpg')`
        }}
      ></div>
      {/* Background overlay for readability */}
      <div className="absolute inset-0 bg-background/80"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left content */}
          <div className="flex-1 max-w-2xl">
            {/* Logo */}
            <div className="mb-8 fade-up">
              {/* <img 
                src="/lovable-uploads/a001c620-565a-4b42-b7f2-1fcfc76a23fc.png" 
                alt="GroupDealz Logo" 
                className="h-16 w-auto"
              /> */}
            </div>
            
            <div className="fade-up" style={{animationDelay: '0.2s'}}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Shared Assets.
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Shared Growth.
                </span>
              </h1>
            </div>
            
            <div className="fade-up" style={{animationDelay: '0.4s'}}>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Invest in premium real estate at fraction of cost. Own high value properties with a elite club of investors lead by Groupdealz under protection of RERA. Guaranteed exit within stipulated time with handsome returns. Rent starting from day 1.

              </p>
            </div>
            
            <div className="fade-up flex flex-col sm:flex-row gap-4 mb-12" style={{animationDelay: '0.6s'}}>
             
            <Link to="/how-it-works">
  <Button
    variant="outline"
    className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
  >
    Learn How It Works
  </Button>
</Link>
            </div>
            
            {/* Stats */}
            <div className="fade-up grid grid-cols-3 gap-8" style={{animationDelay: '0.8s'}}>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 mx-auto">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="number-counter">3 Years</div>
                <p className="text-sm text-muted-foreground">Avg Holding Period	Flexible exit windows for capital reinvestment.</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-3 mx-auto">
              <HandCoins className="h-6 w-6 text-secondary" />
                </div>
                <div className="number-counter">8%-9%</div>
                <p className="text-sm text-muted-foreground">Average Rental Returns from the first month of Investement</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-full mb-3 mx-auto">
                  <Coins className="h-6 w-6 text-secondary" />
                </div>
                <div className="number-counter">10L</div>
                <p className="text-sm text-muted-foreground">Start with little,  Co-own exclusive properties that match your investment goals</p>
              </div>
              
              
            </div>
          </div>
          
          {/* Right visual */}
          <div className="flex-1 max-w-lg slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl transform rotate-6"></div>
              <div className="relative bg-gradient-to-br from-card to-accent rounded-3xl p-8 shadow-large transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">Properties</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <div>
                        <p className="font-medium">Office Complex</p>
                        <p className="text-sm text-muted-foreground">Min investment - 10L</p>
                      </div>
                      <span className="text-secondary font-semibold">15.3% Returns</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <div>
                        <p className="font-medium">Service Apartments</p>
                        <p className="text-sm text-muted-foreground">Min investment - 12L</p>
                      </div>
                      <span className="text-secondary font-semibold">15.9% Returns</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <div>
                        <p className="font-medium">High Rise Society</p>
                        <p className="text-sm text-muted-foreground">Min investment - 15L</p>
                      </div>
                      <span className="text-secondary font-semibold">15.7% Returns</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-2">
                      {/* <span className="text-muted-foreground">Total Investment</span>
                      <span className="font-semibold">₹4,500</span> */}
                    </div>
                    <div className="flex items-center justify-between">
                      {/* <span className="text-muted-foreground">Current Value</span>
                      <span className="font-bold text-secondary text-lg">₹5,062</span> */}
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

export default Hero;