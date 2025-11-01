import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventInfo from "@/components/EventInfo";
import Countdown from "@/components/Countdown";
import TicketCards from "@/components/TicketCards";
import Features from "@/components/Features";
import MapSection from "@/components/MapSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import FloatingMenu from "@/components/FloatingMenu";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <EventInfo />
      <Countdown />
      <TicketCards />
      <Features />
      <MapSection />
      <FAQ />
      <Footer />
      <FloatingMenu />
    </div>
  );
};

export default Index;
