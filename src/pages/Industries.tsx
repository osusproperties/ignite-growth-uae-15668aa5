import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import BackgroundPatterns from "@/components/BackgroundPatterns";
import { Button } from "@/components/ui/button";
import { Building2, Home, ShoppingCart, Factory, Briefcase, Package, TrendingUp, Users, Quote, CheckCircle, ArrowRight, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { GoldGradientDef } from "@/components/GoldIcon";

const industries = [
  {
    title: "Real Estate Development",
    description: "End-to-end solutions for property developers, from land acquisition and project costing to unit sales, handover management, and post-sale customer service portals.",
    icon: Home,
    stats: "45% faster deal closures",
    features: ["Project cost tracking & budget variance", "Unit inventory & availability management", "Sales commission automation", "Snagging & handover workflows", "Customer portal for owners"],
    clients: ["Samana Developers", "GJ Real Estate", "Urban Properties"],
  },
  {
    title: "Property Management",
    description: "Streamline facility operations, tenant lifecycle management, and financial reporting for residential communities, commercial buildings, and mixed-use developments.",
    icon: Building2,
    stats: "60% reduction in admin time",
    features: ["Tenant onboarding & lease management", "Maintenance request tracking", "Automated rent invoicing & reminders", "Vendor management & procurement", "Owner statement generation"],
    clients: ["Dubai Holding", "AHS Properties"],
  },
  {
    title: "Trading & Distribution",
    description: "Unified commerce platform connecting suppliers, warehouses, and customers with real-time inventory visibility, multi-location stock transfers, and landed cost tracking.",
    icon: Package,
    stats: "35% inventory optimization",
    features: ["Multi-warehouse management", "Purchase & sales order automation", "Lot/serial number tracking", "Landed cost calculation", "Supplier performance analytics"],
    clients: ["Fresh Market UAE", "Emirates Trading Co."],
  },
  {
    title: "Manufacturing & Assembly",
    description: "Production planning, shop floor control, and quality management systems designed for discrete and process manufacturing in free zones and mainland facilities.",
    icon: Factory,
    stats: "28% production efficiency gain",
    features: ["Bill of materials management", "Work order scheduling", "Quality inspection checkpoints", "Machine maintenance tracking", "Production cost analysis"],
    clients: ["Al Habtoor Engineering", "Gulf Industrial Supplies"],
  },
  {
    title: "Retail & E-Commerce",
    description: "Omnichannel retail management unifying physical stores, online marketplaces, and direct-to-consumer channels with centralized inventory and customer data.",
    icon: ShoppingCart,
    stats: "52% better inventory accuracy",
    features: ["Multi-channel order management", "POS system integration", "Customer loyalty & rewards", "Marketplace connectors (Noon, Amazon)", "Returns & exchange processing"],
    clients: ["Osus Retail Group"],
  },
  {
    title: "Professional Services",
    description: "Project-based billing, resource utilization tracking, and client delivery management for consulting firms, agencies, and technical service providers.",
    icon: Briefcase,
    stats: "34% improved utilization",
    features: ["Project profitability tracking", "Timesheet & expense management", "Resource capacity planning", "Milestone-based invoicing", "Client collaboration portals"],
    clients: ["LMD Consulting", "AX Capital Advisory"],
  },
];

const caseStudies = [
  {
    company: "Samana Developers",
    logo: "samana",
    industry: "Real Estate Development",
    challenge: "Managing 12 active development projects across Dubai with disconnected spreadsheets, causing delays in financial reporting and sales tracking.",
    solution: "Implemented unified project management system with real-time cost tracking, automated sales commission calculations, and integrated customer handover workflows.",
    results: [
      { metric: "67%", label: "Reduction in monthly reporting time" },
      { metric: "AED 2.8M", label: "Saved in avoided budget overruns" },
      { metric: "14 days", label: "Go-live from project kickoff" },
    ],
    quote: "SGC TECH AI delivered what three previous vendors couldn't—a system our sales and finance teams actually use daily. The visibility into project costs alone paid for the implementation within two months.",
    author: "Imran Farooq",
    title: "COO, Samana Developers",
    timeline: "Q3 2024",
  },
  {
    company: "Fresh Market UAE",
    logo: "freshmarket",
    industry: "Retail & Distribution",
    challenge: "High inventory shrinkage and stockouts across 8 retail locations and 2 distribution centers, with no visibility into real-time stock levels.",
    solution: "Deployed centralized inventory management with barcode scanning, automated reorder points, and integration with suppliers for just-in-time replenishment.",
    results: [
      { metric: "AED 4.2M", label: "Annual savings from reduced waste" },
      { metric: "89%", label: "Reduction in stockout incidents" },
      { metric: "23%", label: "Improvement in inventory turnover" },
    ],
    quote: "The ROI was visible in the first quarter. We went from guessing our stock levels to knowing exactly what we have, where it is, and when to reorder. Our category managers can finally focus on merchandising instead of firefighting.",
    author: "Rashed Al Blooshi",
    title: "Supply Chain Director, Fresh Market UAE",
    timeline: "Q2 2024",
  },
  {
    company: "Al Habtoor Engineering",
    logo: "alhabtoor",
    industry: "Manufacturing",
    challenge: "Legacy ERP system couldn't handle complex bill of materials for custom fabrication, leading to production delays and inaccurate job costing.",
    solution: "Migrated to cloud-native manufacturing ERP with multi-level BOM support, work order scheduling, and real-time production cost tracking.",
    results: [
      { metric: "28%", label: "Improvement in on-time delivery" },
      { metric: "15%", label: "Reduction in material waste" },
      { metric: "3 weeks", label: "Full data migration & training" },
    ],
    quote: "We were skeptical about a 14-day implementation, but SGC TECH AI's team had us running production on the new system within two weeks. The shop floor tablet interface made training almost unnecessary.",
    author: "Hassan Mahmoud",
    title: "Operations Manager, Al Habtoor Engineering",
    timeline: "Q4 2024",
  },
];

const clientLogos = [
  { name: "Samana Developers", industry: "Real Estate" },
  { name: "Fresh Market UAE", industry: "Retail" },
  { name: "Dubai Holding", industry: "Property Management" },
  { name: "GJ Real Estate", industry: "Real Estate" },
  { name: "Al Habtoor Engineering", industry: "Manufacturing" },
  { name: "AX Capital", industry: "Financial Services" },
  { name: "Urban Properties", industry: "Property Development" },
  { name: "Osus Group", industry: "Retail" },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <GoldGradientDef />
      <BackgroundAnimation />
      <BackgroundPatterns pattern="circuit" opacity={0.1} position="top" className="left-0 z-0" />
      <Header />
      <main className="pt-32 pb-4xl">
        {/* Hero Section */}
        <section className="container text-center mb-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-lg animate-fade-in">
            <Building2 className="w-4 h-4" />
            Industry Expertise
          </div>
          <h1 className="text-gradient mb-lg animate-fade-in stagger-1">
            Proven Solutions Across<br />Key Sectors
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto mb-xl animate-fade-in stagger-2">
            100+ successful implementations across real estate, trading, manufacturing, 
            and professional services in the UAE and GCC region.
          </p>
          <div className="flex flex-wrap justify-center gap-md animate-fade-in stagger-3">
            {clientLogos.slice(0, 6).map((client) => (
              <div
                key={client.name}
                className="px-4 py-2 rounded-full bg-muted/50 text-foreground-muted text-sm"
              >
                {client.name}
              </div>
            ))}
          </div>
        </section>

        {/* Industries Grid */}
        <section className="container mb-4xl">
          <div className="text-center mb-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-md">
              Specialized Solutions by Sector
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto">
              Deep domain expertise combined with flexible technology to address 
              industry-specific challenges
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-xl">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className="glass rounded-xl p-xl interactive-card animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-lg">
                  <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <industry.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-success/20 text-success text-xs font-semibold">
                    {industry.stats}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-sm">{industry.title}</h3>
                <p className="text-foreground-muted text-sm mb-lg">{industry.description}</p>
                <ul className="space-y-sm mb-lg">
                  {industry.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-center gap-sm text-sm text-foreground-muted">
                      <CheckCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {industry.clients.length > 0 && (
                  <div className="pt-lg border-t border-border/50">
                    <p className="text-xs text-foreground-subtle mb-sm">Trusted by</p>
                    <div className="flex flex-wrap gap-xs">
                      {industry.clients.map((client) => (
                        <span key={client} className="text-xs text-foreground-muted bg-muted/50 px-2 py-1 rounded">
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Detailed Case Studies */}
        <section className="container mb-4xl">
          <div className="text-center mb-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-lg">
              <Award className="w-4 h-4" />
              Client Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-md">
              Real Results, Real Businesses
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto">
              Documented outcomes from recent implementations across the GCC region
            </p>
          </div>
          <div className="space-y-3xl">
            {caseStudies.map((study, index) => (
              <div
                key={study.company}
                className="glass rounded-2xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Left: Company Info */}
                  <div className="lg:col-span-2 p-xl lg:p-2xl bg-gradient-to-br from-primary/10 to-transparent">
                    <div className="text-xs text-accent font-semibold uppercase tracking-wider mb-sm">
                      {study.industry}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-md">{study.company}</h3>
                    <p className="text-sm text-foreground-subtle mb-lg">Implemented {study.timeline}</p>
                    
                    {/* Results */}
                    <div className="grid grid-cols-1 gap-md mb-xl">
                      {study.results.map((result) => (
                        <div key={result.label} className="bg-background/50 rounded-lg p-md">
                          <div className="text-2xl font-bold text-gradient">{result.metric}</div>
                          <div className="text-xs text-foreground-muted">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right: Details */}
                  <div className="lg:col-span-3 p-xl lg:p-2xl">
                    <div className="mb-xl">
                      <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-sm">
                        The Challenge
                      </h4>
                      <p className="text-foreground-muted">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-xl">
                      <h4 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-sm">
                        Our Solution
                      </h4>
                      <p className="text-foreground-muted">{study.solution}</p>
                    </div>
                    
                    {/* Quote */}
                    <div className="bg-muted/30 rounded-xl p-lg relative">
                      <Quote className="w-8 h-8 text-primary/20 absolute top-lg left-lg" />
                      <p className="text-foreground italic pl-lg mb-md">"{study.quote}"</p>
                      <div className="pl-lg">
                        <p className="font-semibold text-foreground">{study.author}</p>
                        <p className="text-sm text-foreground-muted">{study.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mb-4xl">
          <div className="glass rounded-2xl p-xl lg:p-3xl">
            <div className="grid md:grid-cols-4 gap-xl text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-sm">100+</div>
                <p className="text-foreground-muted">Successful Implementations</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-sm">14</div>
                <p className="text-foreground-muted">Average Days to Go-Live</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-sm">98%</div>
                <p className="text-foreground-muted">Client Retention Rate</p>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-sm">6</div>
                <p className="text-foreground-muted">GCC Countries Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container">
          <div className="glass rounded-2xl p-3xl text-center tech-lines">
            <Users className="w-12 h-12 text-accent mx-auto mb-lg" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-lg">
              Ready to See Similar Results?
            </h2>
            <p className="text-lg text-foreground-muted max-w-xl mx-auto mb-xl">
              Book a consultation to discuss your industry-specific challenges and 
              see how we've helped similar businesses transform.
            </p>
            <div className="flex flex-col sm:flex-row gap-md justify-center">
              <Button variant="hero" size="lg" className="pulse-glow interactive-button" asChild>
                <Link to="/book-consultation">
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="interactive-button" asChild>
                <Link to="/#contact">Contact Sales Team</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;