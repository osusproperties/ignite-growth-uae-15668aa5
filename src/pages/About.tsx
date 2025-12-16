import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import BackgroundPatterns from "@/components/BackgroundPatterns";
import { Button } from "@/components/ui/button";
import { Target, Users, Award, Globe, Lightbulb, Heart, Rocket, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "14", label: "Days Average Implementation" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50M+", label: "AED Saved for Clients" },
];

const values = [
  {
    icon: Rocket,
    title: "Innovation First",
    description: "We leverage cutting-edge AI and automation to deliver solutions that keep you ahead of the competition.",
  },
  {
    icon: Heart,
    title: "Client Success",
    description: "Your success is our success. We measure our performance by the results we deliver for your business.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "Enterprise-grade security and unwavering commitment to protecting your data and privacy.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "We stay at the forefront of technology to bring you the most effective solutions available.",
  },
];

const team = [
  {
    name: "Ahmed Al Rashid",
    role: "CEO & Founder",
    bio: "20+ years in enterprise technology. Former Microsoft & Oracle executive.",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "AI/ML specialist with background at Google Cloud and AWS.",
  },
  {
    name: "Mohammed Hassan",
    role: "Head of Implementation",
    bio: "Led 200+ ERP implementations across the MENA region.",
  },
  {
    name: "Emily Thompson",
    role: "VP of Customer Success",
    bio: "Customer experience expert with 15 years in enterprise software.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundAnimation />
      <BackgroundPatterns pattern="geometric" opacity={0.1} position="top" className="left-0 z-0" />
      <Header />
      <main className="pt-32 pb-4xl">
        {/* Hero Section */}
        <section className="container text-center mb-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium mb-lg animate-fade-in">
            <Target className="w-4 h-4" />
            About Us
          </div>
          <h1 className="text-gradient mb-lg animate-fade-in stagger-1">
            Transforming Businesses<br />Through Technology
          </h1>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto animate-fade-in stagger-2">
            SGC TECH AI, a division of Scholarix Global, is the UAE's leading AI-powered 
            enterprise technology partner. We're on a mission to democratize digital 
            transformation for businesses of all sizes.
          </p>
        </section>

        {/* Stats Section */}
        <section className="container mb-4xl">
          <div className="glass rounded-2xl p-xl md:p-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-xl">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-sm">{stat.value}</div>
                  <div className="text-foreground-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mb-4xl">
          <div className="grid md:grid-cols-2 gap-3xl items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold mb-md">
                <Globe className="w-4 h-4" />
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-lg">
                Making Enterprise Technology Accessible
              </h2>
              <p className="text-foreground-muted mb-lg">
                For too long, enterprise-grade technology has been reserved for large corporations 
                with massive budgets. We believe every business deserves access to the tools 
                that drive growth and efficiency.
              </p>
              <p className="text-foreground-muted">
                Through AI-powered automation, we've reduced implementation times from months to 
                days, cut costs dramatically, and made world-class technology accessible to SMBs 
                across the UAE and the wider MENA region.
              </p>
            </div>
            <div className="glass rounded-2xl p-xl interactive-card animate-fade-in stagger-2">
              <Award className="w-16 h-16 text-accent mb-lg" />
              <h3 className="text-2xl font-bold text-foreground mb-md">Industry Recognition</h3>
              <ul className="space-y-md text-foreground-muted">
                <li>• UAE Digital Transformation Award 2024</li>
                <li>• Microsoft Gold Partner</li>
                <li>• SAP Certified Implementation Partner</li>
                <li>• ISO 27001 Certified</li>
                <li>• Top 10 Tech Companies in MENA - Forbes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="container mb-4xl">
          <div className="text-center mb-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-md">Our Values</h2>
            <p className="text-foreground-muted">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-xl">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass rounded-xl p-lg text-center interactive-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-lg">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-sm">{value.title}</h4>
                <p className="text-sm text-foreground-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="container mb-4xl">
          <div className="text-center mb-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-md">Leadership Team</h2>
            <p className="text-foreground-muted">The experts driving our vision forward</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-xl">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="glass rounded-xl p-lg text-center interactive-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-lg flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-bold text-foreground">{member.name}</h4>
                <p className="text-sm text-accent mb-md">{member.role}</p>
                <p className="text-sm text-foreground-muted">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container">
          <div className="glass rounded-2xl p-3xl text-center tech-lines">
            <Users className="w-12 h-12 text-accent mx-auto mb-lg" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-lg">
              Join Our Growing Family
            </h2>
            <p className="text-lg text-foreground-muted max-w-xl mx-auto mb-xl">
              Whether you're looking for a technology partner or a career opportunity, we'd love to connect.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="pulse-glow interactive-button" asChild>
                <Link to="/#contact">Become a Client</Link>
              </Button>
              <Button variant="outline" size="lg" className="interactive-button" asChild>
                <Link to="/#contact">View Careers</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
