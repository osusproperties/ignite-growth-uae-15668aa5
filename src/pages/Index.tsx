import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Industries from "@/components/Industries";
import ROICalculator from "@/components/ROICalculator";
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
          <ROICalculator />
        </div>
        
        {/* Contact Form pattern */}
        <div className="relative">
          <BackgroundPatterns 
            pattern="hexagon" 
            opacity={0.15} 
            position="full"
            className="left-0 z-0"
          />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;