import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import { Button } from "@/components/ui/button";
import { Check, X, Zap, Star, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses getting started with digital transformation",
    price: "9,999",
    period: "/month",
    features: [
      { text: "Core ERP modules", included: true },
      { text: "Up to 10 users", included: true },
      { text: "Email support", included: true },
      { text: "Basic reporting", included: true },
      { text: "Cloud hosting", included: true },
      { text: "AI automation", included: false },
      { text: "Custom integrations", included: false },
      { text: "Dedicated support", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing businesses that need advanced features and automation",
    price: "24,999",
    period: "/month",
    features: [
      { text: "All ERP modules", included: true },
      { text: "Up to 50 users", included: true },
      { text: "Priority support", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Cloud hosting", included: true },
      { text: "AI automation", included: true },
      { text: "5 custom integrations", included: true },
      { text: "Dedicated support", included: false },
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Full-scale digital transformation with dedicated support and unlimited capabilities",
    price: "Custom",
    period: "",
    features: [
      { text: "Unlimited modules", included: true },
      { text: "Unlimited users", included: true },
      { text: "24/7 dedicated support", included: true },
      { text: "Custom analytics", included: true },
      { text: "Private cloud / on-premise", included: true },
      { text: "Advanced AI automation", included: true },
      { text: "Unlimited integrations", included: true },
      { text: "Dedicated success manager", included: true },
    ],
    cta: "Contact Sales",
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
      <Header />
      <main className="pt-32 pb-4xl">
        {/* Hero Section */}
        <section className="container text-center mb-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-lg animate-fade-in">
            <Zap className="w-4 h-4" />
            Transparent Pricing
          </div>
          <h1 className="text-gradient mb-lg animate-fade-in stagger-1">
            Simple, Scalable Pricing
          </h1>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto animate-fade-in stagger-2">
            No hidden fees. No surprises. Choose the plan that fits your business 
            and scale as you grow. All prices in AED.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="container mb-4xl">
          <div className="grid md:grid-cols-3 gap-xl max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`glass rounded-xl p-xl relative animate-fade-in ${
                  plan.popular ? "ring-2 ring-accent scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" fill="currentColor" />
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-xl">
                  <h3 className="text-2xl font-bold text-foreground mb-sm">{plan.name}</h3>
                  <p className="text-sm text-foreground-muted mb-lg">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-foreground-muted">AED</span>
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-foreground-muted">{plan.period}</span>
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
