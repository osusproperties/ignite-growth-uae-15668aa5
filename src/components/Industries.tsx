import { Building2, Hotel, Construction, Home, Factory, ShoppingBag } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      name: "Healthcare",
      description: "Patient management, compliance automation, intelligent scheduling",
      metrics: "40hrs saved/month",
    },
    {
      icon: Hotel,
      name: "Hospitality",
      description: "Guest experience automation, revenue optimization, operations intelligence",
      metrics: "25% revenue increase",
    },
    {
      icon: Construction,
      name: "Construction",
      description: "Project tracking, resource optimization, safety compliance automation",
      metrics: "60% faster delivery",
    },
    {
      icon: Home,
      name: "Real Estate",
      description: "Lead management, transaction automation, market intelligence",
      metrics: "180% ROI in 90 days",
    },
    {
      icon: Factory,
      name: "Manufacturing",
      description: "Supply chain intelligence, quality control automation, predictive maintenance",
      metrics: "90% error reduction",
    },
    {
      icon: ShoppingBag,
      name: "Retail",
      description: "Inventory optimization, customer intelligence, omnichannel automation",
      metrics: "35% margin improvement",
    },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent font-mono text-sm tracking-wider uppercase mb-4 block">
            Industry Expertise
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-foreground">Transforming </span>
            <span className="text-gradient">Every Industry</span>
          </h2>
          <p className="text-lg text-foreground-muted">
            AI-native solutions engineered for your industry's unique challenges
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="group bg-card border border-border rounded-sm p-8 hover:border-accent transition-all duration-300 hover-lift cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-sm bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon size={28} className="text-accent" />
                  </div>
                  <span className="text-xs font-mono text-success bg-success/10 px-3 py-1 rounded-full">
                    {industry.metrics}
                  </span>
                </div>
                
                <h3 className="font-display font-bold text-2xl mb-3 text-foreground group-hover:text-accent transition-colors">
                  {industry.name}
                </h3>
                
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;