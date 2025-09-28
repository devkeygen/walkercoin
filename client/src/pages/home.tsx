import TickerBanner from "@/components/ticker-banner";
import HeroSection from "@/components/hero-section";
import LoreSection from "@/components/lore-section";
import CharacterSection from "@/components/character-section";
import StatsSection from "@/components/stats-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div 
      className="min-h-screen bg-background bg-texture text-foreground overflow-x-hidden relative" 
      style={{ backgroundColor: '#162f29', color: '#ffffff' }}
      data-testid="home-page"
    >
      {/* Background Image Overlay */}
      <div className="bg-image-overlay"></div>
      
      {/* Animated Particles */}
      <div className="bg-particles">
        <div className="particle particle-float" style={{ top: '10%', left: '10%', animationDelay: '0s' }}></div>
        <div className="particle particle-float" style={{ top: '20%', left: '80%', animationDelay: '1s' }}></div>
        <div className="particle particle-float" style={{ top: '30%', left: '20%', animationDelay: '2s' }}></div>
        <div className="particle particle-float" style={{ top: '40%', left: '90%', animationDelay: '3s' }}></div>
        <div className="particle particle-float" style={{ top: '50%', left: '15%', animationDelay: '1.5s' }}></div>
        <div className="particle particle-float" style={{ top: '60%', left: '75%', animationDelay: '2.5s' }}></div>
        <div className="particle particle-float" style={{ top: '70%', left: '30%', animationDelay: '0.5s' }}></div>
        <div className="particle particle-float" style={{ top: '80%', left: '85%', animationDelay: '3.5s' }}></div>
        <div className="particle particle-float" style={{ top: '15%', left: '50%', animationDelay: '1.2s' }}></div>
        <div className="particle particle-float" style={{ top: '35%', left: '60%', animationDelay: '2.8s' }}></div>
        <div className="particle particle-float" style={{ top: '55%', left: '5%', animationDelay: '0.8s' }}></div>
        <div className="particle particle-float" style={{ top: '75%', left: '65%', animationDelay: '3.2s' }}></div>
      </div>

      {/* Content with animations */}
      <div className="relative z-10">
        <div className="fade-in-up">
          <TickerBanner />
        </div>
        <div className="scale-in" style={{ animationDelay: '0.3s' }}>
          <HeroSection />
        </div>
        <div className="fade-in-up" style={{ animationDelay: '0.5s' }}>
          <LoreSection />
        </div>
        <div className="slide-in-left" style={{ animationDelay: '0.7s' }}>
          <CharacterSection />
        </div>
        <div className="slide-in-right" style={{ animationDelay: '0.9s' }}>
          <StatsSection />
        </div>
        <div className="fade-in-up" style={{ animationDelay: '1.2s' }}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
