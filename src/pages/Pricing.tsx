import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import BackgroundPatterns from "@/components/BackgroundPatterns";
import { Button } from "@/components/ui/button";
import { Check, X, Zap, Star, Phone, Info } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    tier: "Bronze",
    description: "Perfect entry point for small teams beginning their digital transformation",
    originalPrice: "AED 30,374/year",
    price: "AED 15,187/year",
    savings: "Save AED 15,187 (50% off)",
    setupFee: "One-time setup fee: AED 4,999",
    usersIncluded: "1–3 users included",
    additionalUsersNote: "Additional users after 15: AED 145/user/year",
    features: [
      { text: "Basic features access", included: true },
      { text: "5GB storage per user", included: true },
      { text: "Standard support", included: true },
      { text: "Quarterly reports", included: true },
      { text: "Email integration", included: true },
      { text: "Mobile app access", included: true },
    ],
    cta: "Get Started – Save 50%",
    popular: false,
  },
  {
    name: "Growth",
    tier: "Silver",
    description: "Complete solution for growing SMEs ready to scale efficiently",
    originalPrice: "AED 48,374/year",
    price: "AED 24,187/year",
    savings: "Save AED 24,187 (50% off)",
    setupFee: "One-time setup fee: AED 4,999",
    usersIncluded: "4–8 users included",
    additionalUsersNote: "Additional users after 15: AED 145/user/year",
    features: [
      { text: "All Bronze features", included: true },
      { text: "20GB storage per user", included: true },
      { text: "Priority support", included: true },
      { text: "Monthly reports", included: true },
      { text: "CRM integration", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Workflow automation", included: true },
      { text: "Team collaboration tools", included: true },
    ],
    cta: "Get Started – Save 50%",
    popular: true,
  },
  {
    name: "Enterprise",
    tier: "Gold",
    description: "VIP service for established businesses requiring premium support",
    originalPrice: "AED 78,574/year",
    price: "AED 39,787/year",
    savings: "Save AED 38,787 (50% off)",
    setupFee: "One-time setup fee: AED 4,999",
    usersIncluded: "8–15 users included",
    additionalUsersNote: "Additional users after 15: AED 145/user/year",
    features: [
      { text: "All Silver features", included: true },
      { text: "100GB storage per user", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Weekly reports", included: true },
      { text: "Full API access", included: true },
      { text: "Custom integrations", included: true },
      { text: "Advanced security", included: true },
      { text: "Dedicated account manager", included: true },
      { text: "White label options", included: true },
    ],
    cta: "Get Started – Save 50%",
    popular: false,
  },
];

const faqs = [
  {
    question: "What's included in the 14-day implementation?",
    answer: "Our AI-powered implementation includes system configuration, data migration, user training, and go-live support. We handle everything from start to finish.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades apply at your next billing cycle.",
  },
  {
    question: "Do you offer a free trial?",
    answer: "Yes, Professional plan comes with a 14-day free trial. No credit card required to start.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "All plans include email support. Professional adds priority support with 4-hour response times. Enterprise includes 24/7 dedicated support.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <BackgroundPatterns pattern="hexagon" opacity={0.15} position="full" className="left-0 z-0" />
      <Header />
      <main className="pt-32 pb-4xl">
        {/* Hero Section */}
        <section className="container text-center mb-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-lg animate-fade-in">
            <Zap className="w-4 h-4" />
            Year-end implementation sale – 50% off annual!
          </div>
          <h1 className="text-gradient mb-lg animate-fade-in stagger-1">
            Simple, Scalable Pricing
          </h1>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto animate-fade-in stagger-2">
            Need more than 15 users? No problem. Additional users beyond 15 are AED 145 per user/year. One-time setup fee applies (AED 4,999). All prices in AED.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="container mb-4xl">
          <div className="grid md:grid-cols-3 gap-xl max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`glass rounded-xl p-xl relative animate-fade-in interactive-card ${
                  plan.popular ? "ring-2 ring-accent scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-center justify-between mb-sm">
                  <span className="text-sm uppercase tracking-wide text-foreground-subtle">{plan.tier} package</span>
                  {plan.popular && (
                    <div className="flex items-center gap-1 text-xs font-semibold text-accent">
                      <Star className="w-4 h-4" fill="currentColor" /> Best Value
                    </div>
                  )}
                </div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" fill="currentColor" />
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-xl space-y-sm">
                  <h3 className="text-2xl font-bold text-foreground mb-sm">{plan.name} Package</h3>
                  <p className="text-sm text-foreground-muted mb-sm">{plan.description}</p>
                  <div className="flex items-center justify-center gap-3 text-foreground-subtle text-sm">
                    <span className="line-through">{plan.originalPrice}</span>
                    <span className="text-success font-semibold">{plan.savings}</span>
                  </div>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-foreground-muted text-sm">paid annually</span>
                  </div>
                  <div className="text-xs text-foreground-muted">{plan.setupFee}</div>
                  <div className="flex items-center justify-center gap-2 text-xs text-foreground-subtle bg-muted/40 rounded-full px-3 py-1 w-fit mx-auto">
                    <Info className="w-4 h-4" />
                    <span>{plan.usersIncluded}</span>
                  </div>
                  <div className="text-xs text-foreground-subtle bg-muted/30 rounded-md px-3 py-2 w-fit mx-auto">
                    {plan.additionalUsersNote}
                  </div>
                </div>
                <ul className="space-y-md mb-xl">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-center gap-sm">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-success flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-foreground-subtle flex-shrink-0" />
                      )}
                      <span className={feature.included ? "text-foreground" : "text-foreground-subtle"}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                  className={`w-full ${plan.popular ? "pulse-glow" : ""}`}
                  asChild
                >
                  <Link to="/#contact">{plan.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="container mb-4xl">
          <div className="text-center mb-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-md">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-lg">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="glass rounded-xl p-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-sm">{faq.question}</h4>
                <p className="text-foreground-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container">
          <div className="glass rounded-2xl p-3xl text-center tech-lines">
            <Phone className="w-12 h-12 text-accent mx-auto mb-lg" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-lg">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-foreground-muted max-w-xl mx-auto mb-xl">
              Our team can create a tailored package that fits your exact requirements and budget.
            </p>
            <Button variant="hero" size="lg" className="pulse-glow" asChild>
              <Link to="/#contact">Talk to Sales</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
