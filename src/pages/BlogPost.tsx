import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Share2, Calendar } from "lucide-react";

interface BlogPost {
  id: number;
  slug: string;
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
  const { slug } = useParams();
  
  const blogPosts: BlogPost[] = [
    
    {
      id: 1,
      slug: "breaking-the-myth-real-estate-investment-isnt-just-for-the-rich",
      title: "Breaking the Myth: Real Estate Investment Isn’t Just for the Rich",
      excerpt: "Learn how fractional ownership allows anyone to invest in premium real estate in Gurgaon, starting small and building wealth over time.",
      author: "Group Dealz",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Investment Strategy",
      image: "https://i.postimg.cc/Y2n1Qzc1/blog2.jpg",
      content: `
        <h1 text-lg>Breaking the Myth: Real Estate Investment Isn’t Just for the Rich</h1>
        <p>For a long time, real estate was seen as a playground for the wealthy. High entry costs, complex paperwork, and the need for huge capital often discouraged beginners from even considering this market. But today, with innovative models like fractional ownership, real estate investment with a low budget has become a reality. Even first-time investors can now access premium properties in high-demand cities like Gurgaon without draining their savings.</p>
        
        <h3>Why Real Estate Still Stands Strong</h3>
        <p>Compared to volatile stocks or low-return savings accounts, real estate continues to be one of the most reliable asset classes. It offers property appreciation, stability, and the added advantage of rental income. For <a style="color: blue; font-size: 16px;" href ="groupdealz.in">real estate investors in Gurgaon</a>, the city’s booming infrastructure, multinational hubs, and lifestyle upgrades make it one of the best destinations to build long-term wealth. The growth of metro lines, the upcoming Dwarka Expressway, and the city’s corporate dominance all point to sustained demand for both residential and commercial spaces.</p>
        
        <h3>The Entry Barrier: High Prices</h3>
        <p>The best property to invest in Gurgaon often comes with a price tag running into crores, especially for luxury apartments or Grade A commercial spaces. For many, these figures are out of reach. This has created a perception that only the rich can participate in profitable property investment.</p>
        
        <h3>The Solution: Fractional Ownership</h3>
        <p>This is where fractional ownership changes the game. Instead of buying an entire property, investors can pool resources with others and purchase a share of a premium asset. For example, instead of investing ₹1 crore into a full commercial unit, you can start with a fraction of that amount while still enjoying returns proportional to your share.</p>
        <p>Platforms like <a style="color: blue; font-size: 16px;" href ="https://share.google/Dyac1WrvldMLvnFO1">Groupdealz </a>make the process seamless. They not only identify the best property to invest in Gurgaon but also handle due diligence, paperwork, and property management. This gives small investors the same opportunities as large institutional players—without the stress of managing tenants or operations.</p>
        
        <h3>Why Start Small?</h3>
        <p>The beauty of real estate investment with a low budget is scalability. You can begin with one property share, learn how the model works, and then expand gradually. Over time, small investments compound into significant wealth. With every step, your portfolio grows across different sectors—residential, retail, and commercial—spreading risk and maximising returns.</p>
        
        <h3>Final Thoughts</h3>
        <p>Gone are the days when real estate was reserved for the wealthy elite. With fractional ownership and trusted platforms like Groupdealz, anyone can start small and still access premium real estate. Gurgaon, with its unmatched growth and global appeal, continues to be one of the best property investment markets in India.</p>
        <p>If you’ve been waiting to step into real estate, the opportunity is here. Start small, invest smart, and let your wealth grow—because even a modest beginning in Gurgaon’s real estate today can lead to financial freedom tomorrow.</p>
      `
    }
  ];

  const post = blogPosts.find(p => p.slug === slug);

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