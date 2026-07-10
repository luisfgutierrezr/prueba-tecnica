import { HeroSection } from "@/components/home/HeroSection";
import { TreasurySection } from "@/components/home/TreasurySection";
import { ContactSection } from "@/components/home/ContactSection";
import { SiteFooter } from "@/components/home/SiteFooter";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TreasurySection />
      <ContactSection />
      <SiteFooter />
    </>
  );
}
