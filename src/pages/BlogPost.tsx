import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, User, Share2, Calendar } from "lucide-react";
import { Helmet } from "react-helmet";
import { client } from "@/lib/sanityClient";
import SanityBlockContent from "@sanity/block-content-to-react";

interface BlogPostData {
  _id: string;
  slug: { current: string };
  meta_title: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: { asset: { url: string } };
  content: any; // Block content from Sanity
  keywords: string[];
}

const BlogPost = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0]{
          _id,
          title,
          slug,
          excerpt,
          author,
          date,
          readTime,
          category,
          image{
            asset->{url}
          },
          content,
          keywords,
          meta_title
        }`;
        const fetchedPost: BlogPostData = await client.fetch(query, { slug });
        setPost(fetchedPost);
        setLoading(false);
        
      } catch (error) {
        console.error("Error fetching post:", error);
        setLoading(false);
      }
    };
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <p className="text-lg text-muted-foreground">Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-6">Blog Post Not Found</h1>
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

  const serializers = {
    types: {
      table: ({ node }) => (
        <table className="table-auto w-full border-collapse border border-gray-300 text-foreground">
          <thead>
            <tr className="border-b">
              {node.rows && Array.isArray(node.rows[0].cells) && (
                node.rows[0].cells.map((cell, cellIndex) => (
                  <th key={cellIndex} className="border p-2 font-bold">
                    {cell}
                  </th>
                ))
              )}
            </tr>
          </thead>
          <tbody>
            {node.rows && Array.isArray(node.rows) ? (
              node.rows.map((row, rowIndex) => (
                rowIndex === 0 ? null : ( // Skip the header row
                  <tr key={rowIndex} className="border-b">
                    {row.cells && Array.isArray(row.cells) ? (
                      row.cells.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`border p-2 ${cellIndex === 0 ? 'font-bold' : ''}`}
                        >
                          {cell}
                        </td>
                      ))
                    ) : (
                      <td className="border p-2">No cells data</td>
                    )}
                  </tr>
                )
              ))
            ) : (
              <tr>
                <td className="border p-2">No rows data</td>
              </tr>
            )}
          </tbody>
        </table>
      ),
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="title" content={post.meta_title} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <meta property="og:title" content={post.meta_title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image.asset.url} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.groupdealz.in/blog/${post.slug.current}`} />
        <link rel="canonical" href={`https://www.groupdealz.in/blog/${post.slug.current}`} />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Blog
            </Button>
          </Link>

          <Badge className="mb-4 text-sm px-3 py-1">{post.category}</Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-foreground">
            {post.title}
          </h1>

          <p className="text-lg text-muted-foreground italic mb-4">{post.excerpt}</p>

          {/* Author + Meta Info */}
          <div className="flex flex-wrap items-center justify-between border-b pb-6 mb-8 text-muted-foreground">
            <div className="flex flex-wrap items-center gap-6">
              <span className="flex items-center">
                <User className="h-5 w-5 mr-2" /> {post.author}
              </span>
              <span className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" /> {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="h-5 w-5 mr-2" /> {post.readTime}
              </span>
            </div>

            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" /> Share
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <img
            src={post.image.asset.url}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <style>{`
            .article-content p { text-align: justify; line-height: 1.85; margin-bottom: 1rem; }
            .article-content p:first-of-type::first-letter {
              font-size: 3.4rem;
              font-weight: 800;
              float: left;
              margin-right: 0.6rem;
              line-height: 0.9;
              color: #b45309;
            }
            .article-content h2 { font-size: 1.45rem; margin-top: 1.25rem; margin-bottom: 0.5rem; font-weight:700; }
            .article-content h3 { font-size: 1.15rem; margin-top: 1rem; margin-bottom: 0.45rem; font-weight:600; }
            @media (min-width: 768px) {
              .article-content p:first-of-type::first-letter { font-size: 4rem; }
            }
          `}</style>

          <div className="prose prose-lg max-w-none article-content text-foreground">
            <SanityBlockContent
              blocks={post.content}
              projectId={client.config().projectId}
              dataset={client.config().dataset}
              serializers={serializers}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-yellow-50 to-yellow-100 border-t">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Ready to Start Your Real Estate Investment Journey?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Join thousands of investors who are building wealth through fractional real estate ownership.
          </p>
          <Button size="lg" className="btn-gold rounded-xl px-8 py-3">
            Start Investing Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;