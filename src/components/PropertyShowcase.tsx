import { MapPin, TrendingUp, HandCoins, Users, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import property1 from "@/assets/building1.jpeg";
import property2 from "@/assets/building2.jpeg";
import property3 from "@/assets/building3.jpeg";
import property4 from "@/assets/i4.jpeg";
import property5 from "@/assets/i5.jpeg";
import property6 from "@/assets/i6.jpeg";
import property7 from "@/assets/i7.jpeg";
import { useState, useEffect } from "react";

const PropertyShowcase = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const propertyImages = [property1, property2, property3, property4, property5, property6, property7];
  
  const property = {
    id: 1,
    title: "Commercial Office Complex",
    location: "Gurgaon",
    price: "₹1.2 Cr",
    mininvestment: "₹10L",
    expectedReturn: "14.2%",
    investors: "14%-16%",
    timeLeft: "9%",
    funded: 78
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === propertyImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [propertyImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === propertyImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? propertyImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const handleInvestCall = () => {
    window.location.href = "tel:9211652088";
  };

  return (
    <section className="py-24 bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Investment</span> Opportunity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our premium property with strong rental yields and appreciation potential.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="property-card group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Image Slider */}
            <div className="relative overflow-hidden group/slider">
              <img 
                src={propertyImages[currentImageIndex]} 
                alt={property.title}
                className="w-full h-96 object-cover transition-transform duration-500"
              />
              
              {/* Navigation Buttons - Low opacity, visible on hover */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hover:scale-110 transform"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Property badges */}
              <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                {property.expectedReturn} Expected Return
              </div>
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {property.funded}% Funded
              </div>

              {/* Dots Navigation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300">
                {propertyImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
                <div 
                  className="h-full bg-white transition-all duration-300 ease-linear"
                  style={{ width: `${((currentImageIndex + 1) / propertyImages.length) * 100}%` }}
                />
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
                  <div className="flex items-center justify-center text-muted-foreground mb-1">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="text-xs">Minimum Investment</span>
                  </div>
                  <p className="font-semibold">{property.mininvestment}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-muted-foreground mb-1">
                    <Users className="h-4 w-4 mr-1" />
                    <span className="text-xs">Average Return</span>
                  </div>
                  <p className="font-semibold">{property.investors}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center text-muted-foreground mb-1">
                    <HandCoins className="h-4 w-4 mr-1" />
                    <span className="text-xs">Rental Income</span>
                  </div>
                  <p className="font-semibold">{property.timeLeft}</p>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transition-all duration-300" onClick={handleInvestCall}>
                Invest Now - Call 9211652088
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;