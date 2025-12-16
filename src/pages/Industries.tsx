import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import BackgroundPatterns from "@/components/BackgroundPatterns";
import { Button } from "@/components/ui/button";
import { Building2, Home, ShoppingCart, Factory, Briefcase, Package, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    title: "Real Estate",
    description: "Streamline property management, sales tracking, and client relationships with AI-powered tools designed for the UAE real estate market.",
    icon: Home,
    stats: "40% faster deal closures",
    features: ["Property portfolio management", "Automated valuations", "Client CRM integration", "Contract automation"],
  },
  {
    title: "Property Management",
    description: "Automate tenant communications, maintenance scheduling, and financial reporting for residential and commercial properties.",
    icon: Building2,
    stats: "60% reduction in admin time",
    features: ["Tenant portal", "Maintenance tracking", "Rent collection automation", "Financial reporting"],
  },
  {
    title: "Trading & Distribution",
    description: "Optimize inventory, logistics, and supplier relationships with real-time visibility across your supply chain.",
    icon: Package,
    stats: "35% inventory optimization",
    features: ["Inventory management", "Order processing", "Supplier management", "Logistics tracking"],
  },
  {
    title: "Manufacturing",
    description: "Digitize production planning, quality control, and resource management for maximum efficiency and minimal waste.",
    icon: Factory,
    stats: "25% production efficiency gain",
    features: ["Production planning", "Quality management", "Resource optimization", "Predictive maintenance"],
  },
  {
    title: "Retail",
    description: "Unify online and offline channels, manage inventory in real-time, and deliver personalized customer experiences.",
    icon: ShoppingCart,
    stats: "50% better inventory accuracy",
    features: ["Omnichannel management", "POS integration", "Customer analytics", "Loyalty programs"],
  },
  {
    title: "Professional Services",
    description: "Manage projects, track billable hours, and streamline client delivery with integrated professional services automation.",
    icon: Briefcase,
    stats: "30% improved utilization",
    features: ["Project management", "Time & billing", "Resource planning", "Client portals"],
  },
];

const caseStudies = [
  {
    company: "Leading UAE Developer",
    industry: "Real Estate",
    result: "Reduced project delivery time by 45%",
    quote: "SGC TECH AI transformed how we manage our entire development portfolio.",
  },
  {
    company: "Regional Trading Group",
    industry: "Trading & Distribution",
    result: "Saved AED 2.5M annually in operational costs",
    quote: "The ROI was visible within the first quarter of implementation.",
  },
  {
    company: "Multi-brand Retailer",
    industry: "Retail",
    result: "Increased online revenue by 180%",
    quote: "Our omnichannel strategy finally became a reality.",
  },
];

const Industries = () => {
  return (
    <div className="min-h-screen bg-background relative">
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
            Tailored Solutions for<br />Every Industry
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto mb-2xl animate-fade-in stagger-2">
            Deep industry knowledge combined with cutting-edge technology. 
            We understand your challenges and deliver solutions that work.
          </p>
        </section>

        {/* Industries Grid */}
        <section className="container mb-4xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-xl">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className="glass rounded-xl p-xl interactive-card animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-lg group-hover:bg-accent/20 transition-colors">
                  <industry.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-sm">{industry.title}</h3>
                <div className="inline-block px-3 py-1 rounded-full bg-success/20 text-success text-xs font-semibold mb-md">
                  {industry.stats}
                </div>
                <p className="text-foreground-muted mb-lg">{industry.description}</p>
                <ul className="space-y-sm">
                  {industry.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-sm text-sm text-foreground-muted">
                      <TrendingUp className="w-3 h-3 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Case Studies */}
        <section className="container mb-4xl">
          <div className="text-center mb-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-md">
              Success Stories
            </h2>
            <p className="text-foreground-muted">Real results from real businesses</p>
          </div>
          <div className="grid md:grid-cols-3 gap-xl">
            {caseStudies.map((study, index) => (
              <div
                key={study.company}
                className="glass rounded-xl p-xl interactive-card animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="text-xs text-accent font-semibold uppercase tracking-wider mb-sm">
                  {study.industry}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-md">{study.company}</h4>
                <div className="text-2xl font-bold text-gradient mb-lg">{study.result}</div>
                <p className="text-foreground-muted italic">"{study.quote}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container">
          <div className="glass rounded-2xl p-3xl text-center tech-lines">
            <Users className="w-12 h-12 text-accent mx-auto mb-lg" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-lg">
              Don't See Your Industry?
            </h2>
            <p className="text-lg text-foreground-muted max-w-xl mx-auto mb-xl">
              We work with businesses across all sectors. Let's discuss how we can help you.
            </p>
            <Button variant="hero" size="lg" className="pulse-glow interactive-button" asChild>
              <Link to="/#contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
