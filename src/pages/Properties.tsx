import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Users, TrendingUp, Calendar } from "lucide-react";

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury Downtown Apartment Complex",
      location: "Manhattan, New York",
      image: "/src/assets/property-1.jpg",
      totalValue: "$2,850,000",
      minInvestment: "$1,000",
      expectedReturn: "8.5%",
      investors: 234,
      status: "Active",
      availability: "45% Available"
    },
    {
      id: 2,
      title: "Modern Office Building",
      location: "Austin, Texas",
      image: "/src/assets/property-2.jpg",
      totalValue: "$4,200,000",
      minInvestment: "$2,500",
      expectedReturn: "7.2%",
      investors: 187,
      status: "Active",
      availability: "62% Available"
    },
    {
      id: 3,
      title: "Suburban Retail Plaza",
      location: "Phoenix, Arizona",
      image: "/src/assets/property-3.jpg",
      totalValue: "$1,650,000",
      minInvestment: "$500",
      expectedReturn: "9.1%",
      investors: 298,
      status: "Fully Funded",
      availability: "Waitlist Only"
    },
    {
      id: 4,
      title: "Waterfront Condominiums",
      location: "Miami, Florida",
      image: "/src/assets/property-1.jpg",
      totalValue: "$5,800,000",
      minInvestment: "$5,000",
      expectedReturn: "6.8%",
      investors: 156,
      status: "Coming Soon",
      availability: "Pre-registration Open"
    },
    {
      id: 5,
      title: "Tech Campus Hub",
      location: "San Francisco, California",
      image: "/src/assets/property-2.jpg",
      totalValue: "$8,900,000",
      minInvestment: "$10,000",
      expectedReturn: "7.9%",
      investors: 89,
      status: "Active",
      availability: "28% Available"
    },
    {
      id: 6,
      title: "Historic Renovation Project",
      location: "Boston, Massachusetts",
      image: "/src/assets/property-3.jpg",
      totalValue: "$3,400,000",
      minInvestment: "$2,000",
      expectedReturn: "8.8%",
      investors: 201,
      status: "Active",
      availability: "71% Available"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "Fully Funded":
        return <Badge className="bg-blue-100 text-blue-800">Fully Funded</Badge>;
      case "Coming Soon":
        return <Badge className="bg-yellow-100 text-yellow-800">Coming Soon</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-primary">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Investment Properties
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover premium real estate investment opportunities with verified returns and professional management.
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="overflow-hidden hover:shadow-gold transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    {getStatusBadge(property.status)}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-primary">{property.expectedReturn}</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{property.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {property.location}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Total Value</p>
                      <p className="font-semibold">{property.totalValue}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Min. Investment</p>
                      <p className="font-semibold">{property.minInvestment}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{property.investors} investors</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-green-600">{property.expectedReturn} annual</span>
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <p className="text-muted-foreground">Availability</p>
                    <p className="font-medium">{property.availability}</p>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    disabled={property.status === "Fully Funded"}
                  >
                    {property.status === "Coming Soon" ? "Pre-Register" : 
                     property.status === "Fully Funded" ? "Join Waitlist" : "Invest Now"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Properties;