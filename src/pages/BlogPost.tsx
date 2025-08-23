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
      author: "Rohan Chauhan",
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
      title: "Breaking the Myth: Real Estate Investment Isn’t Just for the Rich",
      excerpt: "Learn how fractional ownership allows anyone to invest in premium real estate in Gurgaon, starting small and building wealth over time.",
      author: "Ankit Kumar",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Investment Strategy",
      image: "https://i.postimg.cc/pTsSt5mK/blogn.jpg",
      content: `
        <h2>Breaking the Myth: Real Estate Investment Isn’t Just for the Rich</h2>
        <p>For a long time, real estate was seen as a playground for the wealthy. High entry costs, complex paperwork, and the need for huge capital often discouraged beginners from even considering this market. But today, with innovative models like fractional ownership, real estate investment with a low budget has become a reality. Even first-time investors can now access premium properties in high-demand cities like Gurgaon without draining their savings.</p>
        
        <h3>Why Real Estate Still Stands Strong</h3>
        <p>Compared to volatile stocks or low-return savings accounts, real estate continues to be one of the most reliable asset classes. It offers property appreciation, stability, and the added advantage of rental income. For real estate investors in Gurgaon, the city’s booming infrastructure, multinational hubs, and lifestyle upgrades make it one of the best destinations to build long-term wealth. The growth of metro lines, the upcoming Dwarka Expressway, and the city’s corporate dominance all point to sustained demand for both residential and commercial spaces.</p>
        
        <h3>The Entry Barrier: High Prices</h3>
        <p>The best property to invest in Gurgaon often comes with a price tag running into crores, especially for luxury apartments or Grade A commercial spaces. For many, these figures are out of reach. This has created a perception that only the rich can participate in profitable property investment.</p>
        
        <h3>The Solution: Fractional Ownership</h3>
        <p>This is where fractional ownership changes the game. Instead of buying an entire property, investors can pool resources with others and purchase a share of a premium asset. For example, instead of investing ₹1 crore into a full commercial unit, you can start with a fraction of that amount while still enjoying returns proportional to your share.</p>
        <p>Platforms like Groupdealz make the process seamless. They not only identify the best property to invest in Gurgaon but also handle due diligence, paperwork, and property management. This gives small investors the same opportunities as large institutional players—without the stress of managing tenants or operations.</p>
        
        <h3>Why Start Small?</h3>
        <p>The beauty of real estate investment with a low budget is scalability. You can begin with one property share, learn how the model works, and then expand gradually. Over time, small investments compound into significant wealth. With every step, your portfolio grows across different sectors—residential, retail, and commercial—spreading risk and maximising returns.</p>
        
        <h3>Final Thoughts</h3>
        <p>Gone are the days when real estate was reserved for the wealthy elite. With fractional ownership and trusted platforms like Groupdealz, anyone can start small and still access premium real estate. Gurgaon, with its unmatched growth and global appeal, continues to be one of the best property investment markets in India.</p>
        <p>If you’ve been waiting to step into real estate, the opportunity is here. Start small, invest smart, and let your wealth grow—because even a modest beginning in Gurgaon’s real estate today can lead to financial freedom tomorrow.</p>
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