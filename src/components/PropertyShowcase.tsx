import { MapPin, TrendingUp, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const PropertyShowcase = () => {
  const properties = [
    {
      id: 1,
      title: "Commercial Office Complex",
      location: "Connaught Place, New Delhi",
      image: property1,
      price: "₹18,75,00,000",
      sharePrice: "₹7,500",
      expectedReturn: "14.2%",
      investors: 156,
      timeLeft: "12 days",
      funded: 78
    },
    {
      id: 2,
      title: "Luxury Residential Tower",
      location: "Cyber City, Gurgaon",
      image: property2,
      price: "₹31,50,00,000",
      sharePrice: "₹11,250",
      expectedReturn: "11.8%",
      investors: 203,
      timeLeft: "8 days",
      funded: 92
    },
    {
      id: 3,
      title: "Premium Shopping Complex",
      location: "Sector 18, Noida",
      image: property3,
      price: "₹13,50,00,000",
      sharePrice: "₹5,625",
      expectedReturn: "13.5%",
      investors: 89,
      timeLeft: "18 days",
      funded: 45
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Investment</span> Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Handpicked premium properties with strong rental yields and appreciation potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div 
              key={property.id} 
              className="property-card group"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-t-xl">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {property.expectedReturn} Expected Return
                </div>
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {property.funded}% Funded
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Property Value</p>
                    <p className="font-bold text-lg">{property.price}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full mb-2 mx-auto">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground">Share Price</p>
                    <p className="font-semibold">{property.sharePrice}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-8 h-8 bg-secondary/10 rounded-full mb-2 mx-auto">
                      <Users className="h-4 w-4 text-secondary" />
                    </div>
                    <p className="text-xs text-muted-foreground">Investors</p>
                    <p className="font-semibold">{property.investors}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full mb-2 mx-auto">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground">Time Left</p>
                    <p className="font-semibold">{property.timeLeft}</p>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Funding Progress</span>
                    <span className="font-semibold">{property.funded}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
                      style={{width: `${property.funded}%`}}
                    ></div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="space-y-3">
                  <Button className="w-full btn-gold">
                    Invest Now
                  </Button>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-green">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;