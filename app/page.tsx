import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import CoverageSection from "@/components/CoverageSection";
import PlatformSection from "@/components/PlatformSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <CoverageSection />
      <PlatformSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </>
  );
}
