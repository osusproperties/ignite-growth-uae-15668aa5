import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import BackgroundPatterns from "@/components/BackgroundPatterns";
import { Button } from "@/components/ui/button";
import { Check, Zap, Shield, TrendingUp, Clock, Users, Database, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "AI-Powered ERP Implementation",
    description: "Deploy enterprise-grade ERP systems in 14 days, not months. Our AI automates configuration, data migration, and user training.",
    icon: Bot,
    features: [
      "Automated system configuration",
      "Intelligent data migration",
      "AI-assisted user onboarding",
      "Real-time optimization",
    ],
    highlight: true,
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable, secure cloud solutions that grow with your business. Zero downtime migrations and 24/7 monitoring.",
    icon: Database,
    features: [
      "Multi-cloud architecture",
      "Auto-scaling resources",
      "99.99% uptime guarantee",
      "Disaster recovery built-in",
    ],
  },
  {
    title: "Business Intelligence",
    description: "Transform raw data into actionable insights. AI-powered analytics that predict trends and optimize operations.",
    icon: TrendingUp,
    features: [
      "Real-time dashboards",
      "Predictive analytics",
      "Custom KPI tracking",
      "Automated reporting",
    ],
  },
  {
    title: "Process Automation",
    description: "Eliminate manual tasks and reduce errors. Our RPA solutions automate repetitive processes across departments.",
    icon: Zap,
    features: [
      "Workflow automation",
      "Document processing",
      "Invoice automation",
      "HR process automation",
    ],
  },
  {
    title: "Cybersecurity Solutions",
    description: "Enterprise-grade security for SMBs. Protect your data, comply with regulations, and prevent threats.",
    icon: Shield,
    features: [
      "Threat detection & response",
      "Compliance management",
      "Data encryption",
      "Security audits",
    ],
  },
  {
    title: "24/7 Support & Training",
    description: "Dedicated support team and comprehensive training programs to ensure your team maximizes system value.",
    icon: Users,
    features: [
      "24/7 technical support",
      "On-site training",
      "Video tutorials",
      "Dedicated account manager",
    ],
  },
];

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <BackgroundPatterns pattern="hexagon" opacity={0.12} position="top" className="left-0 z-0" />
      <Header />
      <main className="pt-32 pb-4xl">
        {/* Hero Section */}
        <section className="container text-center mb-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-lg animate-fade-in">
            <Zap className="w-4 h-4" />
            Enterprise Solutions
          </div>
          <h1 className="text-gradient mb-lg animate-fade-in stagger-1">
            Intelligent Solutions for<br />Modern Enterprises
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto mb-2xl animate-fade-in stagger-2">
            From AI-powered ERP to cybersecurity, we deliver end-to-end technology solutions 
            that transform how businesses operate in the UAE and beyond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in stagger-3">
            <Button variant="hero" size="lg" className="pulse-glow interactive-button" asChild>
              <Link to="/#roi-calculator">Calculate Your ROI</Link>
            </Button>
            <Button variant="outline" size="lg" className="interactive-button" asChild>
              <Link to="/#contact">Talk to an Expert</Link>
            </Button>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-xl">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`glass rounded-xl p-xl interactive-card animate-fade-in ${
                  solution.highlight ? "ring-2 ring-accent/50" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {solution.highlight && (
                  <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold mb-md">
                    Most Popular
                  </div>
                )}
                <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-lg">
                  <solution.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-md">{solution.title}</h3>
                <p className="text-foreground-muted mb-lg">{solution.description}</p>
                <ul className="space-y-sm">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-sm text-sm text-foreground-muted">
                      <Check className="w-4 h-4 text-success flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mt-4xl">
          <div className="glass rounded-2xl p-3xl text-center tech-lines">
            <Clock className="w-12 h-12 text-accent mx-auto mb-lg" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-lg">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-foreground-muted max-w-xl mx-auto mb-xl">
              Get a free consultation and discover how our solutions can accelerate your growth.
            </p>
            <Button variant="hero" size="lg" className="pulse-glow interactive-button" asChild>
              <Link to="/#contact">Book Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;
