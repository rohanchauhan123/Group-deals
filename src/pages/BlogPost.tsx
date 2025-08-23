import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Share2, Calendar } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

const BlogPost = () => {
  const { id } = useParams();
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Real Estate Investment Trends in Delhi NCR 2024",
      excerpt: "Discover the latest trends shaping the real estate investment landscape in Delhi NCR and how fractional ownership is revolutionizing property investment.",
      author: "Priya Sharma",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Market Trends",
      image: "https://www.novyy.com/storage/blogs/666aa0a20ee32.png",
      content: `
        <h2>The Evolving Landscape of Delhi NCR Real Estate</h2>
        <p>Delhi NCR continues to be one of India's most dynamic real estate markets, with 2024 bringing unprecedented changes in investment patterns and opportunities. The region, encompassing Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad, has witnessed a significant shift towards fractional ownership models.</p>
        
        <h3>Key Trends Driving the Market</h3>
        <p><strong>1. Fractional Ownership Revolution</strong><br>
        The concept of fractional ownership has gained tremendous traction in Delhi NCR, allowing investors to own portions of premium properties starting from just ₹7,500. This democratization of real estate investment has opened doors for millennials and young professionals who previously couldn't afford property investments.</p>
        
        <p><strong>2. Commercial Real Estate Surge</strong><br>
        Commercial properties in areas like Connaught Place, Cyber City Gurgaon, and Sector 18 Noida are experiencing increased demand. Office spaces, retail outlets, and mixed-use developments are offering attractive rental yields of 8-14%.</p>
        
        <p><strong>3. Technology Integration</strong><br>
        PropTech solutions are transforming how investors discover, analyze, and invest in properties. Digital platforms now offer comprehensive market analysis, virtual property tours, and automated investment management.</p>
        
        <h3>Investment Hotspots in 2024</h3>
        <p><strong>Gurgaon:</strong> The Millennium City continues to attract corporate investments with new business districts emerging. Areas like Golf Course Extension Road and Sohna Road are seeing significant appreciation.</p>
        
        <p><strong>Noida:</strong> With the upcoming international airport and improved metro connectivity, Greater Noida and sectors along the Yamuna Expressway are becoming investor favorites.</p>
        
        <p><strong>Central Delhi:</strong> Premium commercial spaces in Connaught Place and Khan Market remain stable investment options with consistent rental income.</p>
        
        <h3>Why Fractional Ownership is the Future</h3>
        <p>Traditional real estate investment required substantial capital, often running into crores. Fractional ownership platforms have changed this by:</p>
        <ul>
          <li>Lowering entry barriers to as little as ₹7,500</li>
          <li>Providing professional property management</li>
          <li>Offering liquidity through secondary markets</li>
          <li>Enabling portfolio diversification across multiple properties</li>
        </ul>
        
        <h3>Market Outlook</h3>
        <p>Experts predict continued growth in the Delhi NCR real estate market, driven by infrastructure development, increasing urban population, and rising income levels. The fractional ownership model is expected to capture 15-20% of the real estate investment market by 2026.</p>
        
        <p>For investors looking to enter the real estate market, 2024 presents an opportune time to start with fractional ownership, building a diversified portfolio across different property types and locations in Delhi NCR.</p>
      `
    },
    {
      id: 2,
      title: "How to Build a Diversified Real Estate Portfolio with ₹50,000",
      excerpt: "Learn practical strategies to diversify your real estate investments across different property types and locations in India with a modest budget.",
      author: "Raj Patel",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Investment Strategy",
      image: "https://images.arrived.com/tr:h-1313,w-2100,q-90,c-maintain_ratio/images/wp/uploads/2022/05/What-is-fractional-real-estate-investing_-1.png",
      content: `
        <h2>Building Wealth Through Strategic Real Estate Diversification</h2>
        <p>Real estate investment has traditionally been reserved for the wealthy, but fractional ownership has democratized access to premium properties. With just ₹50,000, you can now build a well-diversified real estate portfolio across multiple properties and asset classes.</p>
        
        <h3>Understanding Portfolio Diversification</h3>
        <p>Diversification in real estate means spreading your investments across:</p>
        <ul>
          <li><strong>Geographic locations:</strong> Different cities and micro-markets</li>
          <li><strong>Property types:</strong> Residential, commercial, retail, and hospitality</li>
          <li><strong>Risk profiles:</strong> Stable income-generating vs growth-oriented properties</li>
          <li><strong>Investment horizons:</strong> Short-term and long-term holdings</li>
        </ul>
        
        <h3>Your ₹50,000 Investment Strategy</h3>
        <p><strong>Allocation 1: Commercial Office Space (₹15,000 - 30%)</strong><br>
        Invest in a premium office complex in Connaught Place or Cyber City. Commercial properties typically offer higher rental yields (10-14%) and stable returns.</p>
        
        <p><strong>Allocation 2: Residential Apartment (₹15,000 - 30%)</strong><br>
        Purchase fractional shares in a luxury residential project in Gurgaon or Noida. Residential properties provide capital appreciation and rental income potential.</p>
        
        <p><strong>Allocation 3: Retail Space (₹10,000 - 20%)</strong><br>
        Diversify into retail properties in high-footfall areas like Sector 18 Noida or major malls. Retail spaces benefit from India's growing consumption story.</p>
        
        <p><strong>Allocation 4: Growth Markets (₹10,000 - 20%)</strong><br>
        Invest in emerging areas with infrastructure development planned, such as properties near the upcoming Jewar Airport or new metro corridors.</p>
        
        <h3>Step-by-Step Implementation Guide</h3>
        
        <p><strong>Step 1: Research and Analysis</strong><br>
        Before investing, thoroughly research each property's location, developer track record, rental potential, and growth prospects. Use online platforms to compare different investment opportunities.</p>
        
        <p><strong>Step 2: Start with Conservative Investments</strong><br>
        Begin with established areas like central Delhi commercial properties that offer stable returns. As you gain experience, gradually move to higher-growth potential areas.</p>
        
        <p><strong>Step 3: Monitor Market Cycles</strong><br>
        Real estate markets are cyclical. Time your investments to take advantage of market corrections and avoid peak pricing periods.</p>
        
        <p><strong>Step 4: Reinvest Returns</strong><br>
        Use rental income and capital appreciation to acquire additional fractional shares, compounding your investment growth over time.</p>
        
        <h3>Risk Management Strategies</h3>
        <p><strong>Geographic Diversification:</strong> Don't put all your money in one city. Spread investments across Delhi, Gurgaon, and Noida to reduce location-specific risks.</p>
        
        <p><strong>Asset Class Diversification:</strong> Balance between income-generating commercial properties and appreciation-focused residential investments.</p>
        
        <p><strong>Developer Risk:</strong> Invest in properties from multiple reputed developers to avoid concentration risk with a single builder.</p>
        
        <h3>Expected Returns and Timeline</h3>
        <p>With a well-diversified ₹50,000 portfolio:</p>
        <ul>
          <li><strong>Year 1-2:</strong> Focus on rental yield (8-12% annually)</li>
          <li><strong>Year 3-5:</strong> Capital appreciation kicks in (5-8% annually)</li>
          <li><strong>Year 5+:</strong> Total returns of 12-18% annually possible</li>
        </ul>
        
        <h3>Tax Optimization</h3>
        <p>Fractional ownership investments qualify for various tax benefits:</p>
        <ul>
          <li>Depreciation benefits on commercial properties</li>
          <li>Long-term capital gains tax advantages (after 3 years)</li>
          <li>Interest deduction on borrowed funds</li>
        </ul>
        
        <h3>Getting Started Today</h3>
        <p>The key to successful real estate investment is starting early and staying consistent. With fractional ownership platforms, you can begin building your diversified portfolio immediately with just ₹7,500 per property.</p>
        
        <p>Remember, real estate is a long-term investment. Focus on quality properties in prime locations, maintain patience, and let the power of compounding work in your favor. Your ₹50,000 investment today could grow into a substantial portfolio worth several lakhs within 5-7 years.</p>
      `
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || "0"));

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Author Info */}
            <div className="flex items-center justify-between border-b pb-6 mb-8">
              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div 
                className="article-content text-foreground leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Real Estate Investment Journey?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of investors who are building wealth through fractional real estate ownership.
            </p>
            <Button size="lg" className="btn-gold">
              Start Investing Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;