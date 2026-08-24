import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import PricingCard from "@/components/PricingCard";
import Features from "@/components/Features";
import JourneyTimeline from "@/components/JourneyTimeline";
import PilgrimGallery from "@/components/PilgrimGallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <TrustSection />
        <PricingCard />
        <Features />
        <JourneyTimeline />
        <PilgrimGallery />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
