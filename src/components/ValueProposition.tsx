import { Link } from "react-router-dom";
import { Clock, DollarSign, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import PremiumIcon from "@/components/PremiumIcon";
import iconNavigate from "@/icons/icons/14-target-precision.webp";
import iconInnovate from "@/icons/icons/22-innovation-network.webp";
import iconTransform from "@/icons/icons/10-rocket-launch.webp";
import iconSpeed from "@/icons/icons/04-lightning-speed.webp";
import iconROI from "@/icons/icons/17-financial-roi.webp";
import iconSecurity from "@/icons/icons/05-security-shield-left.webp";

const ValueProposition = () => {
  const values = [
    {
      img: iconNavigate,
      title: "Navigate",
      description: "Strategic roadmaps built on deep industry expertise and AI-powered market intelligence.",
    },
    {
      img: iconInnovate,
      title: "Innovate",
      description: "AI-native solutions engineered for production from day one. No prototypes. Real infrastructure.",
    },
    {
      img: iconTransform,
      title: "Transform",
      description: "14-day deployments that deliver measurable ROI in first 30 days. Guaranteed results.",
    },
  ];

  const guarantees = [
    {
      icon: Clock,
      img: iconSpeed,
      title: "14 Days to Production",
      stat: "200% Faster",
      description: "Industry standard: 6-12 months. SGC TECH AI: 14 days.",
    },
    {
      icon: DollarSign,
      img: iconROI,
      title: "Guaranteed ROI",
      stat: "150-200%",
      description: "40-80 hours saved monthly. 90%+ error reduction.",
    },
    {
      icon: Shield,
      img: iconSecurity,
      title: "Zero Risk",
      stat: "10x Results",
      description: "If we don't deliver, you don't pay. Simple.",
    },
  ];

  return (
    <section className="py-24 bg-background-secondary relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-wider uppercase mb-4 block">
            The SGC Difference
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-foreground">We Don't Sell </span>
            <span className="text-gradient">PowerPoint Decks</span>
          </h2>
          <p className="text-lg text-foreground-muted">
            We engineer intelligent infrastructure that transforms enterprises in weeks, not years.
          </p>
        </div>

        {/* Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => {
            return (
              <div
                key={value.title}
                className="group bg-card p-8 rounded-sm border border-border hover:border-accent transition-all duration-300 hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PremiumIcon src={value.img} alt={value.title} className="mb-6" />
                <h3 className="font-display font-bold text-2xl mb-4 text-foreground">
                  {value.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Guarantees */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-display font-bold text-3xl md:text-4xl text-center mb-12 text-foreground">
            Our <span className="text-gold">Guarantees</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((guarantee, index) => {
              return (
                <div
                  key={guarantee.title}
                  className="bg-gradient-to-br from-card to-muted p-8 rounded-sm border border-border text-center hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <PremiumIcon src={guarantee.img} alt={guarantee.title} size={64} imageSize={32} className="mx-auto mb-6" />
                  <h4 className="font-display font-bold text-xl mb-2 text-foreground">
                    {guarantee.title}
                  </h4>
                  <div className="text-4xl font-display font-black text-gradient mb-3">
                    {guarantee.stat}
                  </div>
                  <p className="text-sm text-foreground-muted">
                    {guarantee.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="lg" asChild>
            <Link to="/pricing">
              View Launch Partner Pricing →
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;