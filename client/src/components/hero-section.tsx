import { motion } from "framer-motion";
import { SiX } from "react-icons/si";
import { MessageCircle, Users } from "lucide-react";
import walkerMainImage from "@assets/photo_1_2025-09-28_00-15-58_1759037506774.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-texture" data-testid="hero-section">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        {/* Main Logo/Title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-4 glow-text font-mono" data-testid="main-title">
            $WALKER
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light" data-testid="subtitle">
            The Mystical Wanderer of the Digital Realm
          </p>
        </motion.div>

        {/* Character Image */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative floating">
            <div 
              className="w-80 h-80 rounded-full border-4 border-primary/50 pulse-glow bg-gradient-to-br from-primary/20 to-secondary/40 flex items-center justify-center overflow-hidden"
              data-testid="character-main"
            >
              <img 
                src={walkerMainImage} 
                alt="WALKER Character" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mb-16 space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a
            href="https://funance.fun/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg glow-button transition-all duration-300"
            data-testid="buy-button"
          >
            BUY $WALKER
          </a>
          <a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg border border-border transition-all duration-300"
            data-testid="chart-button"
          >
            VIEW CHART
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <a
            href="https://x.com/StinkWalkerOfc"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-muted hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            data-testid="twitter-link"
          >
            <SiX className="text-xl" />
          </a>
          <a
            href="#"
            className="w-14 h-14 bg-muted hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            data-testid="telegram-link"
          >
            <MessageCircle className="text-xl" />
          </a>
          <a
            href="#"
            className="w-14 h-14 bg-muted hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            data-testid="discord-link"
          >
            <Users className="text-xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
