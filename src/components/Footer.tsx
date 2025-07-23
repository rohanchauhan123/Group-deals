import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/a001c620-565a-4b42-b7f2-1fcfc76a23fc.png" 
                alt="GroupDealz Logo" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/75 mb-6 leading-relaxed">
              Making real estate investment accessible to everyone through fractional ownership and professional management.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">Properties</a></li>
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">Regulatory Info</a></li>
              <li><a href="#" className="text-white/75 hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white/75">Email:</p>
                <p className="text-primary">invest@groupdealz.com</p>
              </div>
              <div>
                <p className="text-white/75">Phone:</p>
                <p className="text-primary">1-800-GROUP-DEALZ</p>
              </div>
              <div>
                <p className="text-white/75">Address:</p>
                <p className="text-white/75">123 Investment Street<br />New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/75">
            © 2024 GroupDealz. All rights reserved. | Securities offered through licensed broker-dealers.
          </p>
          <p className="text-white/50 text-sm mt-2">
            Real estate investments involve risk including loss of principal. Past performance does not guarantee future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;