import TickerBanner from "@/components/ticker-banner";
import HeroSection from "@/components/hero-section";
import CharacterSection from "@/components/character-section";
import StatsSection from "@/components/stats-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" data-testid="home-page">
      <TickerBanner />
      <HeroSection />
      <CharacterSection />
      <StatsSection />
      <Footer />
    </div>
  );
}
