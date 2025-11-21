import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logoVideo from "@/assets/sgc-logo-video.mp4";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted={false}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={logoVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background"></div>
      </div>

      {/* Animated Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>

      {/* Content */}
      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Launch Partner Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-accent/50 text-sm font-semibold text-accent animate-fade-in stagger-1">
            <Zap size={16} className="animate-glow" />
            <span>Launch Partner Program: <span className="text-gold">8 of 50 spots remaining</span></span>
          </div>

          {/* Coming Soon Digital Animation */}
          <div className="relative inline-block animate-fade-in stagger-2">
            <div className="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-wider text-accent animate-pulse">
              <span className="relative inline-block">
                <span className="absolute inset-0 blur-lg opacity-75 bg-accent animate-pulse"></span>
                <span className="relative digital-text glow-cyan">COMING SOON</span>
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-tight animate-fade-in stagger-3">
            <span className="text-gradient block mb-4 animate-glow">Intelligent Infrastructure.</span>
            <span className="text-foreground animate-fade-in stagger-4">Instant Impact.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground-muted max-w-3xl mx-auto leading-relaxed animate-fade-in stagger-5">
            Transform your enterprise in <span className="text-accent font-bold animate-glow">14 days</span> with AI-native technology. 
            Guaranteed <span className="text-success font-bold animate-glow">150-200% ROI</span>. 
            No PowerPoint. No delays. Just production-ready intelligent systems.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base animate-fade-in stagger-6">
            <div className="flex items-center gap-2 text-foreground-muted">
              <Zap size={20} className="text-accent" />
              <span>14-Day Deployments</span>
            </div>
            <div className="flex items-center gap-2 text-foreground-muted">
              <TrendingUp size={20} className="text-success" />
              <span>200% Faster Than Industry</span>
            </div>
            <div className="flex items-center gap-2 text-foreground-muted">
              <Shield size={20} className="text-gold" />
              <span>Guaranteed ROI</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in stagger-7">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#book-consultation">
                Book Free Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#how-it-works">
                See How It Works
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 animate-fade-in stagger-8">
            <p className="text-xs text-foreground-subtle mb-4 uppercase tracking-wider">
              Trusted by Enterprise Leaders in UAE
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-foreground-subtle font-display font-bold text-lg">Healthcare</div>
              <div className="text-foreground-subtle font-display font-bold text-lg">Hospitality</div>
              <div className="text-foreground-subtle font-display font-bold text-lg">Real Estate</div>
              <div className="text-foreground-subtle font-display font-bold text-lg">Construction</div>
              <div className="text-foreground-subtle font-display font-bold text-lg">Manufacturing</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-0"></div>
    </section>
  );
};

export default Hero;