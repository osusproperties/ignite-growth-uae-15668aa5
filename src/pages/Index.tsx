import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Industries from "@/components/Industries";
import ROICalculatorEnhanced from "@/components/ROICalculatorEnhanced";
import FreeTrialWidget from "@/components/FreeTrialWidget";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";
import BackgroundPatterns from "@/components/BackgroundPatterns";
import PartnerCarousel from "@/components/PartnerCarousel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      
      {/* Hero section pattern */}
      <BackgroundPatterns 
        pattern="circuit" 
        opacity={0.1} 
        position="top"
        className="left-0 top-0 z-0"
      />
      
      <Header />
      <main>
        <Hero />
        <PartnerCarousel />
        
        {/* Value Proposition pattern */}
        <div className="relative">
          <BackgroundPatterns 
            pattern="hexagon" 
            opacity={0.12} 
            position="center"
            className="left-0 z-0"
          />
          <ValueProposition />
        </div>
        
        {/* Industries pattern */}
        <div className="relative">
          <BackgroundPatterns 
            pattern="geometric" 
            opacity={0.08} 
            position="bottom"
            className="left-0 z-0"
          />
          <Industries />
        </div>
        
        {/* ROI Calculator pattern */}
        <div className="relative">
          <BackgroundPatterns 
            pattern="circuit" 
            opacity={0.1} 
            position="center"
            className="left-0 z-0"
          />
          <ROICalculatorEnhanced />
        </div>
        
        {/* Contact Form & Free Trial Widget - Side by Side */}
        <div className="relative">
          <BackgroundPatterns 
            pattern="hexagon" 
            opacity={0.15} 
            position="full"
            className="left-0 z-0"
          />
          <section className="py-24 relative">
            <div className="container">
              <div className="text-center mb-16">
                <h2 className="text-gradient mb-4">Ready to Transform Your Business?</h2>
                <p className="text-lg text-foreground-muted max-w-3xl mx-auto">
                  Choose how you'd like to get started: Book a consultation or try our platform free for 4 weeks
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {/* Contact Form */}
                <div className="flex flex-col">
                  <ContactForm />
                </div>
                
                {/* Free Trial Widget */}
                <div className="flex flex-col">
                  <FreeTrialWidget />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;