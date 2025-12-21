import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import BackgroundPatterns from "@/components/BackgroundPatterns";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Video, Download, Calendar, ArrowRight, Clock, Tag, Users, BarChart3, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { GoldGradientDef } from "@/components/GoldIcon";

const blogPosts = [
  {
    title: "How AI-Powered Automation Reduced Manual Data Entry by 85% for UAE Enterprises",
    excerpt: "A deep dive into how machine learning algorithms and intelligent document processing are eliminating repetitive tasks across finance, HR, and operations departments in the Middle East.",
    category: "AI & Automation",
    readTime: "7 min read",
    date: "Dec 15, 2024",
    author: "Mohammed Al Rashid",
    slug: "ai-automation-data-entry-reduction",
  },
  {
    title: "The Complete Guide to VAT Phase 2 Compliance in Saudi Arabia",
    excerpt: "With the Saudi ZATCA e-invoicing mandate now in full effect, businesses must adapt their ERP systems. Here's everything you need to know about achieving full compliance.",
    category: "Compliance",
    readTime: "12 min read",
    date: "Dec 10, 2024",
    author: "Fatima Hassan",
    slug: "vat-phase-2-compliance-guide",
  },
  {
    title: "Why Traditional ERP Implementations Fail: Lessons from 50+ Projects",
    excerpt: "After analyzing implementation data from over 50 enterprise projects, we identified the top 5 reasons ERP deployments exceed budget and timeline—and how to avoid them.",
    category: "Implementation",
    readTime: "9 min read",
    date: "Dec 5, 2024",
    author: "Raj Patel",
    slug: "erp-implementation-failures",
  },
  {
    title: "Real Estate CRM Integration: Connecting Yardi, PropertyFinder, and Bayut",
    excerpt: "A technical walkthrough of building seamless integrations between property management systems and major UAE real estate portals for automated listing syndication.",
    category: "Integration",
    readTime: "8 min read",
    date: "Nov 28, 2024",
    author: "Sarah Thompson",
    slug: "real-estate-crm-integration",
  },
  {
    title: "Measuring Digital Transformation ROI: Beyond the Spreadsheet",
    excerpt: "Traditional ROI calculations miss 60% of digital transformation value. Learn the comprehensive framework for measuring operational efficiency, employee productivity, and customer satisfaction gains.",
    category: "Strategy",
    readTime: "6 min read",
    date: "Nov 20, 2024",
    author: "Ahmed Al Mansoori",
    slug: "measuring-digital-transformation-roi",
  },
  {
    title: "From Legacy Systems to Cloud: A Manufacturing Company's 18-Month Journey",
    excerpt: "Case study of how a 200-employee manufacturing firm in Jebel Ali Free Zone migrated from on-premise SAP to cloud-native Odoo while maintaining zero production downtime.",
    category: "Case Study",
    readTime: "11 min read",
    date: "Nov 12, 2024",
    author: "Chen Wei",
    slug: "legacy-to-cloud-manufacturing",
  },
];

const resources = [
  {
    title: "2025 ERP Buyer's Guide for GCC Enterprises",
    description: "Compare 12 leading ERP platforms on features, pricing, local support, and VAT compliance. Includes vendor evaluation scorecard.",
    type: "eBook",
    pages: "47 pages",
    icon: BookOpen,
    downloadUrl: "/downloads/erp-buyers-guide-2025.html",
  },
  {
    title: "ERP Implementation Checklist",
    description: "120-point checklist covering requirements gathering, data migration, testing, training, and go-live preparation phases.",
    type: "Checklist",
    pages: "PDF + Excel",
    icon: FileText,
    downloadUrl: "/downloads/erp-implementation-checklist.html",
  },
  {
    title: "UAE VAT Compliance Audit Kit",
    description: "Self-assessment toolkit to evaluate your current VAT configuration, identify gaps, and prepare for FTA audits.",
    type: "Toolkit",
    pages: "15 templates",
    icon: Shield,
    downloadUrl: "/downloads/uae-vat-compliance-audit-kit.html",
  },
];

const webinars = [
  {
    title: "AI Document Processing: Automating Invoice & Receipt Capture",
    date: "Jan 8, 2025",
    time: "2:00 PM GST",
    status: "upcoming",
    speaker: "Dr. Amira Khalil, AI Solutions Architect",
    attendees: 234,
  },
  {
    title: "ZATCA Phase 2: Technical Implementation Workshop",
    date: "Jan 15, 2025",
    time: "11:00 AM GST",
    status: "upcoming",
    speaker: "Khalid bin Saeed, Compliance Director",
    attendees: 412,
  },
  {
    title: "Real Estate Tech Stack 2025: CRM, ERP & PropTech Integration",
    date: "Jan 22, 2025",
    time: "3:00 PM GST",
    status: "upcoming",
    speaker: "James Mitchell, PropTech Consultant",
    attendees: 187,
  },
];

const caseStudyHighlights = [
  {
    title: "Samana Developers",
    metric: "67%",
    description: "Reduction in project reporting time",
    industry: "Real Estate Development",
  },
  {
    title: "Fresh Market UAE",
    metric: "AED 4.2M",
    description: "Annual savings from inventory optimization",
    industry: "Retail & Distribution",
  },
  {
    title: "Al Habtoor Engineering",
    metric: "14 Days",
    description: "Full ERP implementation timeline",
    industry: "Manufacturing",
  },
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <GoldGradientDef />
      <BackgroundAnimation />
      <BackgroundPatterns pattern="hexagon" opacity={0.12} position="top" className="left-0 z-0" />
      <Header />
      <main className="pt-32 pb-4xl">
        {/* Hero Section */}
        <section className="container text-center mb-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/10 text-gold text-sm font-medium mb-lg animate-fade-in">
            <BookOpen className="w-4 h-4" style={{ stroke: "url(#gold-gradient)", filter: "drop-shadow(0 0 4px rgba(255, 215, 0, 0.5))" }} />
            Resource Library
          </div>
          <h1 className="text-gradient mb-lg animate-fade-in stagger-1">
            Expert Insights & Practical Tools
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto animate-fade-in stagger-2">
            Industry research, implementation guides, and proven frameworks from 
            100+ successful digital transformation projects across the GCC region.
          </p>
        </section>

        {/* Quick Stats */}
        <section className="container mb-4xl">
          <div className="grid md:grid-cols-3 gap-xl">
            {caseStudyHighlights.map((item, index) => (
              <div
                key={item.title}
                className="glass rounded-xl p-xl text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-xs text-gold font-semibold uppercase tracking-wider mb-sm">
                  {item.industry}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-sm">{item.title}</h4>
                <div className="text-4xl font-bold text-gradient-gold mb-sm">{item.metric}</div>
                <p className="text-foreground-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Section */}
        <section className="container mb-4xl">
          <div className="flex items-center justify-between mb-xl">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Latest Insights</h2>
              <p className="text-foreground-muted mt-sm">Research, analysis, and best practices from our team</p>
            </div>
            <Button variant="ghost" size="sm" className="text-gold interactive-button hidden md:flex">
              View All Articles <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-xl">
            {blogPosts.map((post, index) => (
              <Link
                to={`/article/${post.slug}`}
                key={post.title}
                className="glass rounded-xl p-xl interactive-card cursor-pointer animate-fade-in group block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-md mb-md flex-wrap">
                  <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-foreground-subtle">
                    <Clock className="w-3 h-3" style={{ stroke: "url(#gold-gradient)" }} />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-sm group-hover:text-gold transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-foreground-muted text-sm mb-md line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-md border-t border-border/50">
                  <div className="text-xs text-foreground-subtle">
                    <span className="font-medium text-foreground-muted">{post.author}</span>
                    <span className="mx-2">•</span>
                    {post.date}
                  </div>
                  <ArrowRight className="w-4 h-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-xl text-center md:hidden">
            <Button variant="outline" className="interactive-button">
              View All Articles <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="container mb-4xl">
          <div className="text-center mb-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-md">Free Downloads</h2>
            <p className="text-foreground-muted">Proven templates and frameworks used by 500+ businesses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-xl">
            {resources.map((resource, index) => (
              <div
                key={resource.title}
                className="glass rounded-xl p-lg interactive-card animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-lg">
                  <div className="w-12 h-12 rounded-lg icon-gold-bg icon-gold-glow flex items-center justify-center flex-shrink-0">
                    <resource.icon 
                      className="w-6 h-6" 
                      style={{ stroke: "url(#gold-gradient)", filter: "drop-shadow(0 0 4px rgba(255, 215, 0, 0.5))" }} 
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-sm">
                      <span className="px-2 py-0.5 rounded bg-gold/20 text-gold text-xs font-semibold">
                        {resource.type}
                      </span>
                      <span className="text-xs text-foreground-subtle">{resource.pages}</span>
                    </div>
                    <h4 className="text-base font-bold text-foreground mb-sm group-hover:text-gold transition-colors">
                      {resource.title}
                    </h4>
                    <p className="text-sm text-foreground-muted mb-md">{resource.description}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full interactive-button border-gold/30 hover:bg-gold/10 hover:text-gold" 
                      asChild
                    >
                      <a href={resource.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" style={{ stroke: "url(#gold-gradient)" }} />
                        Download Free
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Webinars Section */}
        <section className="container mb-4xl">
          <div className="text-center mb-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-md">Upcoming Webinars</h2>
            <p className="text-foreground-muted">Live sessions with industry experts and hands-on workshops</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-lg">
            {webinars.map((webinar, index) => (
              <div
                key={webinar.title}
                className="glass rounded-xl p-lg flex flex-col md:flex-row md:items-center justify-between gap-lg interactive-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-lg">
                  <div className="w-14 h-14 rounded-lg icon-gold-bg icon-gold-glow flex flex-col items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5" style={{ stroke: "url(#gold-gradient)", filter: "drop-shadow(0 0 4px rgba(255, 215, 0, 0.5))" }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-xs">{webinar.title}</h4>
                    <p className="text-sm text-foreground-muted mb-xs">
                      {webinar.speaker}
                    </p>
                    <div className="flex items-center gap-md text-xs text-foreground-subtle">
                      <span>{webinar.date} • {webinar.time}</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" style={{ stroke: "url(#gold-gradient)" }} />
                        {webinar.attendees} registered
                      </span>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="interactive-button flex-shrink-0 border-gold/30 hover:bg-gold/10 hover:text-gold"
                  asChild
                >
                  <Link to="/book-consultation">
                    Register Free
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container">
          <div className="glass rounded-2xl p-3xl text-center tech-lines">
            <Tag className="w-12 h-12 mx-auto mb-lg" style={{ stroke: "url(#gold-gradient)", filter: "drop-shadow(0 0 8px rgba(255, 215, 0, 0.5))" }} />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-lg">
              Need Industry-Specific Research?
            </h2>
            <p className="text-lg text-foreground-muted max-w-xl mx-auto mb-xl">
              Our consultants can prepare custom market analysis, competitive benchmarks, 
              and implementation roadmaps tailored to your business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <Button variant="hero" size="lg" className="pulse-glow interactive-button" asChild>
                <Link to="/book-consultation">Request Custom Research</Link>
              </Button>
              <Button variant="outline" size="lg" className="interactive-button border-gold/30 hover:bg-gold/10 hover:text-gold" asChild>
                <Link to="/#contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
