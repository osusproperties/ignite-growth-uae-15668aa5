import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Industries from "@/components/Industries";
import ROICalculator from "@/components/ROICalculator";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimation />
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <Industries />
        <ROICalculator />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;