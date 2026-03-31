import Navbar           from "@/components/Navbar";
import HeroSection      from "@/components/HeroSection";
import ProblemSection   from "@/components/ProblemSection";
import ServicesSection  from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection   from "@/components/ProcessSection";
import SocialProof      from "@/components/SocialProof";
import CTASection       from "@/components/CTASection";
import Footer           from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <SocialProof />
      <CTASection />
      <Footer />
    </>
  );
}
