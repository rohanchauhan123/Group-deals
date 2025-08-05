import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-hover to-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="relative container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Start Your 
            <br />
            Real Estate Journey?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of investors who are already building wealth through co-owning luxury properties.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg group shadow-large"
            >
              <Link to="/about">
                Start Investing Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg group shadow-large"
            >
              <a href="tel:+919211652088">
                Schedule a Call
              </a>
            </Button>
          </div>
          
          {/* Contact info */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Email Us</p>
                <p className="text-white/75">info@groupdealz.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3 text-white/90">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Call Us</p>
                <p className="text-white/75"> +91 9211652088 </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CTA;
