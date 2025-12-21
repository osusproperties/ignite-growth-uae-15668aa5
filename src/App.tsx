import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import LoadingScreen from "@/components/LoadingScreen";
import SmokeAurora from "@/components/SmokeAurora";
import JotFormChatbot from "@/components/JotFormChatbot";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Resources from "./pages/Resources";
import BookConsultation from "./pages/BookConsultation";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SmokeAurora />
      <LoadingScreen />
      <WhatsAppButton />
      <JotFormChatbot />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
          <Route path="/article/:slug" element={<Article />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
