import { motion } from "framer-motion";
import { SiX, SiDiscord, SiTelegram } from "react-icons/si";
import { MessageCircle, Users } from "lucide-react";
import walkerMainImage from "@assets/photo_1_2025-09-28_00-15-58_1759037506774.jpg";
import { useState, useEffect } from "react";

const taglines = [
  "First Cat on Plasma.",
  "Where Chaos Meets the Chain.",
  "One Small Step for Cats, One Giant Stink for Meme-kind.",
  "Plasma's Original Catastrophe.",
  "Trade the Chaos. Own the Legend."
];

function RotatingTaglines() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="h-16 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.7 }}
    >
      <motion.p
        className="text-lg md:text-xl text-primary font-semibold italic text-center px-4"
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        "{taglines[currentIndex]}"
      </motion.p>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-texture" data-testid="hero-section">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 right-10 w-48 h-48 bg-primary/15 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/20 rounded-full blur-lg"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>
        
        {/* Additional floating elements */}
        <motion.div 
          className="absolute top-1/3 right-1/3 w-16 h-16 bg-primary/10 rounded-full blur-md"
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        

        <motion.div 
          className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-primary/8 rounded-full blur-lg"
          animate={{ 
            x: [0, 25, 0],
            y: [0, -15, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Achievement Badges */}
        <motion.div
          className="mb-6 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-full px-4 py-2 text-sm font-bold text-primary backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(74, 222, 128, 0.3)",
                "0 0 30px rgba(74, 222, 128, 0.5)",
                "0 0 20px rgba(74, 222, 128, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🏆 FIRST CAT ON FUNANCE
          </motion.div>
          <motion.div 
            className="bg-gradient-to-r from-yellow-500/20 to-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-2 text-sm font-bold text-yellow-400 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                "0 0 15px rgba(251, 191, 36, 0.3)",
                "0 0 25px rgba(251, 191, 36, 0.4)",
                "0 0 15px rgba(251, 191, 36, 0.3)"
              ]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            ⭐ COMMUNITY CHAMPION
          </motion.div>
          <motion.div 
            className="bg-gradient-to-r from-blue-500/20 to-blue-400/10 border border-blue-400/30 rounded-full px-4 py-2 text-sm font-bold text-blue-400 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            animate={{
              boxShadow: [
                "0 0 15px rgba(59, 130, 246, 0.3)",
                "0 0 25px rgba(59, 130, 246, 0.4)",
                "0 0 15px rgba(59, 130, 246, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💎 DIAMOND HANDS
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-black mb-4 glow-text font-mono" 
            data-testid="main-title"
            animate={{ 
              textShadow: [
                "0 0 10px #4ade80, 0 0 20px #4ade80, 0 0 30px #4ade80",
                "0 0 15px #4ade80, 0 0 25px #4ade80, 0 0 35px #4ade80",
                "0 0 10px #4ade80, 0 0 20px #4ade80, 0 0 30px #4ade80"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            $WALKER
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground font-light mb-4" 
            data-testid="subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            First Cat on Plasma Chain
          </motion.p>
          
          {/* Rotating Taglines */}
          <RotatingTaglines />
        </motion.div>

        {/* Character Image */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="relative floating">
            {/* Rotating glow ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-primary/30 rotate-glow"></div>
            <div className="absolute -inset-2 rounded-full border border-primary/20 rotate-glow" style={{animationDelay: '2s', animationDirection: 'reverse'}}></div>
            
            <div 
              className="w-80 h-80 rounded-full border-4 border-primary/50 pulse-glow bg-gradient-to-br from-primary/20 to-secondary/40 flex items-center justify-center overflow-hidden relative z-10"
              data-testid="character-main"
            >
              <img 
                src={walkerMainImage} 
                alt="WALKER Character" 
                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent"></div>
            
            {/* Floating particles around character */}
            <div className="absolute top-10 left-10 w-2 h-2 bg-primary rounded-full particle-float opacity-60"></div>
            <div className="absolute top-20 right-15 w-1 h-1 bg-primary rounded-full particle-float opacity-80" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-15 left-20 w-1.5 h-1.5 bg-primary rounded-full particle-float opacity-70" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-10 right-10 w-2 h-2 bg-primary rounded-full particle-float opacity-50" style={{animationDelay: '3s'}}></div>
          </div>
        </motion.div>

        <motion.div
          className="mb-16 space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.a
            href="https://funance.fun/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg glow-button transition-all duration-300 relative overflow-hidden"
            data-testid="buy-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10">BUY $WALKER</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
          </motion.a>
          <motion.a
            href="https://dexscreener.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-lg font-bold text-lg border border-border transition-all duration-300 relative overflow-hidden"
            data-testid="chart-button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10">VIEW CHART</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700"></div>
          </motion.a>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div 
            className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center backdrop-blur-sm"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(74, 222, 128, 0.15)" }}
          >
            <div className="text-2xl font-bold text-primary">🥇 #1</div>
            <div className="text-sm text-muted-foreground">First on Funance</div>
          </motion.div>
          <motion.div 
            className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-4 text-center backdrop-blur-sm"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(251, 191, 36, 0.15)" }}
          >
            <div className="text-2xl font-bold text-yellow-400">👑 KING</div>
            <div className="text-sm text-muted-foreground">Cat Supremacy</div>
          </motion.div>
          <motion.div 
            className="bg-blue-500/10 border border-blue-400/20 rounded-lg p-4 text-center backdrop-blur-sm"
            whileHover={{ scale: 1.02, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
          >
            <div className="text-2xl font-bold text-blue-400">💎 HODL</div>
            <div className="text-sm text-muted-foreground">Diamond Paws</div>
          </motion.div>
        </motion.div>
        


        {/* Social Links */}
        <motion.div
          className="flex justify-center space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <motion.a
            href="#"
            className="text-3xl hover:text-primary transition-colors duration-300"
            aria-label="Twitter"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <SiX />
          </motion.a>
          <motion.a
            href="#"
            className="text-3xl hover:text-primary transition-colors duration-300"
            aria-label="Discord"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <SiDiscord />
          </motion.a>
          <motion.a
            href="#"
            className="text-3xl hover:text-primary transition-colors duration-300"
            aria-label="Telegram"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <SiTelegram />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}