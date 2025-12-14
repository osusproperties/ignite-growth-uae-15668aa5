import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";
import sgcLogo from "@/assets/sgc-logo.png";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" },
    ],
    solutions: [
      { name: "Intelligent Operations Platform", href: "#operations" },
      { name: "AI Accelerator", href: "#accelerator" },
      { name: "Rapid Rescue", href: "#rescue" },
      { name: "All Solutions", href: "#solutions" },
    ],
    industries: [
      { name: "Healthcare", href: "#healthcare" },
      { name: "Hospitality", href: "#hospitality" },
      { name: "Construction", href: "#construction" },
      { name: "Real Estate", href: "#real-estate" },
    ],
    resources: [
      { name: "Blog", href: "#blog" },
      { name: "Case Studies", href: "#case-studies" },
      { name: "Whitepapers", href: "#whitepapers" },
      { name: "Webinars", href: "#webinars" },
    ],
  };

  return (
    <footer className="bg-background-secondary border-t border-border">
      <div className="container px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <img src={sgcLogo} alt="SGC TECH AI Logo" className="h-12 w-12 transition-transform group-hover:scale-110" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-gradient leading-none">SGC TECH AI</span>
                <span className="text-xs text-foreground-subtle font-body">by Scholarix Global</span>
              </div>
            </Link>
            <p className="text-foreground-muted mb-6 text-sm leading-relaxed">
              Intelligent Infrastructure. Instant Impact. Transform your enterprise with AI-native technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-foreground-muted">
                <MapPin size={16} className="text-accent" />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2 text-foreground-muted">
                <Phone size={16} className="text-accent" />
                <a href="tel:+971509675518" className="hover:text-accent transition-colors">+971 50 967 5518</a>
              </div>
              <div className="flex items-center gap-2 text-foreground-muted">
                <Mail size={16} className="text-accent" />
                <a href="mailto:info@sgctech.ai" className="hover:text-accent transition-colors">info@sgctech.ai</a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-foreground-muted hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-foreground-muted hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Industries</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-foreground-muted hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-foreground-muted hover:text-accent transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground-subtle">
            © 2025 SGC TECH AI. A division of Scholarix Global Consultants. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-accent transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-foreground-muted hover:text-accent transition-colors">
              <Youtube size={20} />
            </a>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <a href="#privacy" className="text-foreground-muted hover:text-accent transition-colors">Privacy Policy</a>
            <span className="text-border">|</span>
            <a href="#terms" className="text-foreground-muted hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;