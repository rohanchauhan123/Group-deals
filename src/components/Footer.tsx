import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img
                src="/lovable-uploads/GroupDealz.png"
                alt="GroupDealz Logo"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/75 mb-6 leading-relaxed">
              Making real estate investment accessible to everyone through co owning Luxury properties and professional management.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/groupdealz/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/thegroupdealz" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/groupdealz/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/groupdealz/" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/how-it-works" className="text-white/75 hover:text-primary transition-colors">How It Works</Link></li>
              
              <li><Link to="/about" className="text-white/75 hover:text-primary transition-colors">About Us</Link></li>
              <li><a href="/blog" className="text-white/75 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/how-it-works" className="text-white/75 hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="/terms" className="text-white/75 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><Link to="/privacy" className="text-white/75 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="text-white/75 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white/75 mb-1">Email:</p>
                <a 
                  href="mailto:info@groupdealz.com" 
                  className="text-primary hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  info@groupdealz.com
                </a>
              </div>
              <div>
                <p className="text-white/75 mb-1">Phone:</p>
                <a 
                  href="tel:+919211652088" 
                  className="text-primary hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  +91 9211652088
                </a>
              </div>
              <div>
                <p className="text-white/75 mb-1">Address:</p>
                <a 
                  href="https://maps.app.goo.gl/yGXpoBKGFpfrByNk8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/75 hover:text-primary transition-colors flex items-start gap-2"
                >
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Ist Floor, Plus Office, Landmark Cyber Park, Ramgarh, Sector 67, Gurugram, Haryana 122018</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/75">
            © 2025 GroupDealz. All rights reserved. 
          </p>
          {/* <p className="text-white/50 text-sm mt-2">
            Real estate investments involve risk including loss of principal. Past performance does not guarantee future results.
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;