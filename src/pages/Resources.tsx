import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, Download, Calendar, ArrowRight, Clock, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "AI in ERP: The Future of Enterprise Software",
    excerpt: "Discover how artificial intelligence is revolutionizing enterprise resource planning and what it means for your business.",
    category: "AI & Automation",
    readTime: "5 min read",
    date: "Dec 10, 2024",
  },
  {
    title: "14-Day ERP Implementation: Myth or Reality?",
    excerpt: "Learn how our accelerated implementation methodology delivers fully functional ERP systems in just two weeks.",
    category: "Implementation",
    readTime: "8 min read",
    date: "Dec 5, 2024",
  },
  {
    title: "UAE VAT Compliance: A Complete Guide",
    excerpt: "Everything you need to know about VAT compliance in the UAE and how your ERP can automate it.",
    category: "Compliance",
    readTime: "10 min read",
    date: "Nov 28, 2024",
  },
  {
    title: "Digital Transformation ROI: Measuring Success",
    excerpt: "Key metrics and KPIs to track the return on your digital transformation investment.",
    category: "Strategy",
    readTime: "6 min read",
    date: "Nov 20, 2024",
  },
];

const resources = [
  {
    title: "ERP Buyer's Guide 2024",
    description: "A comprehensive guide to selecting the right ERP system for your business",
    type: "eBook",
    icon: BookOpen,
  },
  {
    title: "ROI Calculator Worksheet",
    description: "Calculate your potential savings with our detailed ROI worksheet",
    type: "Template",
    icon: FileText,
  },
  {
    title: "Implementation Checklist",
    description: "Step-by-step checklist for a successful ERP implementation",
    type: "Checklist",
    icon: Download,
  },
  {
    title: "ERP Demo Videos",
    description: "Watch our comprehensive product demos and tutorials",
    type: "Video Series",
    icon: Video,
  },
];

const webinars = [
  {
    title: "AI-Powered Automation for SMBs",
    date: "Dec 20, 2024",
    time: "2:00 PM GST",
    status: "upcoming",
  },
  {
    title: "Real Estate Tech Trends 2025",
    date: "Jan 15, 2025",
    time: "11:00 AM GST",
    status: "upcoming",
  },
  {
    title: "Manufacturing 4.0 Workshop",
    date: "Jan 25, 2025",
    time: "3:00 PM GST",
    status: "upcoming",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <Header />
      <main className="pt-32 pb-4xl">
        {/* Hero Section */}
        <section className="container text-center mb-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-lg animate-fade-in">
            <BookOpen className="w-4 h-4" />
            Resources
          </div>
          <h1 className="text-gradient mb-lg animate-fade-in stagger-1">
            Learn, Grow, Transform
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto animate-fade-in stagger-2">
            Expert insights, practical guides, and industry resources to help you 
            navigate your digital transformation journey.
          </p>
        </section>

        {/* Blog Section */}
        <section className="container mb-4xl">
          <div className="flex items-center justify-between mb-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Latest Articles</h2>
            <Button variant="ghost" size="sm" className="text-accent">
              View All <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-xl">
            {blogPosts.map((post, index) => (
              <article
                key={post.title}
                className="glass rounded-xl p-xl hover-lift cursor-pointer animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-md mb-md">
                  <span className="px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-foreground-subtle">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-sm group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-foreground-muted mb-md">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-foreground-subtle">{post.date}</span>
                  <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Downloads Section */}
        <section className="container mb-4xl">
          <div className="text-center mb-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-md">Free Downloads</h2>
            <p className="text-foreground-muted">Practical resources to help your business succeed</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-xl">
            {resources.map((resource, index) => (
              <div
                key={resource.title}
                className="glass rounded-xl p-lg text-center hover-lift cursor-pointer animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-lg group-hover:bg-accent/20 transition-colors">
                  <resource.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-muted text-foreground-muted text-xs mb-md">
                  {resource.type}
                </span>
                <h4 className="text-lg font-bold text-foreground mb-sm">{resource.title}</h4>
                <p className="text-sm text-foreground-muted mb-lg">{resource.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Webinars Section */}
        <section className="container mb-4xl">
          <div className="text-center mb-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-md">Upcoming Webinars</h2>
            <p className="text-foreground-muted">Join our live sessions with industry experts</p>
          </div>
          <div className="max-w-2xl mx-auto space-y-lg">
            {webinars.map((webinar, index) => (
              <div
                key={webinar.title}
                className="glass rounded-xl p-lg flex flex-col md:flex-row md:items-center justify-between gap-md animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-lg">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{webinar.title}</h4>
                    <p className="text-sm text-foreground-muted">
                      {webinar.date} • {webinar.time}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Register
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container">
          <div className="glass rounded-2xl p-3xl text-center tech-lines">
            <Tag className="w-12 h-12 text-accent mx-auto mb-lg" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-lg">
              Want Custom Resources?
            </h2>
            <p className="text-lg text-foreground-muted max-w-xl mx-auto mb-xl">
              We can create tailored guides and assessments specific to your industry and needs.
            </p>
            <Button variant="hero" size="lg" className="pulse-glow" asChild>
              <Link to="/#contact">Request Custom Content</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
