import { useState } from "react";
import { Menu, X, TrendingUp, User, Mail, Phone, DollarSign, Building } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentAmount: '',
    propertyType: 'residential'
  });

  const navLinks = [
    { href: "/", label: "Home" },
    // { href: "/properties", label: "Properties" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.investmentAmount) {
      alert('Please fill in all required fields');
      return;
    }
    console.log('Form submitted:', formData);
    // Handle form submission here
    setShowPopup(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      investmentAmount: '',
      propertyType: 'residential'
    });
  };

  const openPopup = () => {
    setShowPopup(true);
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="/" 
              className="flex items-center space-x-2 group transition-transform duration-300 hover:scale-105"
            >
              <div className="relative">
                <img 
                  src="/lovable-uploads/GroupDealz.png" 
                  alt="GroupDealz Logo" 
                  className="h-14 w-auto transition-all duration-300 group-hover:brightness-110 group-hover:drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md scale-110"></div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-5 py-3 text-foreground hover:text-primary transition-all duration-300 font-medium text-sm group rounded-lg"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{link.label}</span>
                  <div className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                  <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-2/3 transform -translate-x-1/2 rounded-full"></div>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button 
                onClick={openPopup}
                className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg group overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4" />
                  <span>Start Investing</span>
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative p-3 rounded-lg bg-muted/50 hover:bg-muted transition-all duration-300 transform hover:scale-110 active:scale-95"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 h-6 w-6 text-foreground transition-all duration-300 ${
                    isOpen ? 'rotate-180 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'
                  }`} 
                />
                <X 
                  className={`absolute inset-0 h-6 w-6 text-foreground transition-all duration-300 ${
                    isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-75'
                  }`} 
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-6 border-t">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-4 text-foreground hover:text-primary transition-all duration-300 font-medium rounded-lg hover:bg-muted/50 transform hover:translate-x-2 group"
                    onClick={() => setIsOpen(false)}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
                      transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 100}ms`
                    }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute left-0 top-1/2 w-1 h-0 bg-primary transition-all duration-300 group-hover:h-1/2 transform -translate-y-1/2 rounded-r-full"></div>
                  </a>
                ))}
                <div className="px-4 pt-6">
                  <button 
                    onClick={openPopup}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group relative overflow-hidden"
                    style={{ 
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(-20px) scale(0.95)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1) 600ms'
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <TrendingUp className="h-4 w-4" />
                      <span>Start Investing</span>
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Popup Overlay */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <div 
            className="bg-background border rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 animate-in fade-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative p-6 pb-0">
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Start Your Investment Journey</h2>
                  <p className="text-muted-foreground text-sm">Join thousands of investors building wealth together</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-6 pt-0 space-y-4">
              {/* Name Field */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Phone Field */}
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Investment Amount Field */}
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <select
                  name="investmentAmount"
                  value={formData.investmentAmount}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="">Select Investment Amount</option>
                  <option value="10-15-lakhs">₹10-15 Lakhs</option>
                  <option value="15-20-lakhs">₹15-20 Lakhs</option>
                  <option value="20-plus-lakhs">₹20+ Lakhs</option>
                </select>
              </div>

              {/* Property Type Field */}
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                >
                  <option value="residential">Residential Properties</option>
                  <option value="commercial">Commercial Properties</option>
                  <option value="mixed">Mixed Portfolio</option>
                  <option value="industrial">Industrial Properties</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group relative overflow-hidden mt-6"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Get Started</span>
                </span>
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Disclaimer */}
              <p className="text-xs text-muted-foreground text-center mt-4 leading-relaxed">
                By submitting this form, you agree to our Terms of Service and Privacy Policy. 
                We'll contact you within 24 hours to discuss your investment opportunities.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;