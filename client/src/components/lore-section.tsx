import { motion } from "framer-motion";
import { Sparkles, Zap, Crown, TrendingUp, Users } from "lucide-react";
import photo4Image from "@assets/photo_4_2025-09-28_09-17-24.jpg";

const taglines = [
  "First Cat on Plasma.",
  "Where Chaos Meets the Chain.",
  "One Small Step for Cats, One Giant Stink for Meme-kind.",
  "Plasma's Original Catastrophe.",
  "Trade the Chaos. Own the Legend."
];

export default function LoreSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-background to-background/50" data-testid="lore-section">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary/8 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, 30, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main Lore Content with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-black mb-8 glow-text"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              THE LEGEND
            </motion.h2>

            <motion.div
              className="bg-gradient-to-br from-primary/10 to-secondary/5 border border-primary/20 rounded-2xl p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ 
                boxShadow: "0 0 40px rgba(74, 222, 128, 0.3)",
                scale: 1.02 
              }}
            >
              <motion.p 
                className="text-lg md:text-xl leading-relaxed text-foreground/90 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-primary font-bold">The Tokenized Stinkwalker</span> isn't just a meme—it's <span className="text-yellow-400 font-semibold">history</span>. 
                He is officially the <span className="text-primary font-bold glow-text">first cat on Plasma Chain</span>, immortalized as a digital IP that fans can collect, trade, and rally behind.
              </motion.p>
              
              <motion.p 
                className="text-lg md:text-xl leading-relaxed text-foreground/90"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
              >
                Each transaction is another <span className="text-primary font-semibold">paw print on the chain</span>, spreading the chaos across the decentralized world.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl backdrop-blur-sm">
                <motion.img 
                  src={photo4Image} 
                  alt="Walker - The Legend" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  whileHover={{ 
                    filter: "brightness(1.1) saturate(1.2)"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.p 
                    className="text-white font-bold text-xl drop-shadow-lg mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    The Legend Lives On
                  </motion.p>
                  <motion.p 
                    className="text-primary font-semibold text-sm glow-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    First Cat on Plasma Chain
                  </motion.p>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Rotating Taglines Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3 
            className="text-2xl md:text-3xl font-bold mb-8 text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Battle Cries
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {taglines.map((tagline, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/25 rounded-lg p-6 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(74, 222, 128, 0.4)",
                  backgroundColor: "rgba(74, 222, 128, 0.1)"
                }}
              >
                <motion.p 
                  className="text-sm md:text-base font-semibold text-primary italic"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(74, 222, 128, 0.3)",
                      "0 0 10px rgba(74, 222, 128, 0.6)",
                      "0 0 5px rgba(74, 222, 128, 0.3)"
                    ]
                  }}
                  transition={{ 
                    duration: 2 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  "{tagline}"
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center bg-gradient-to-br from-yellow-500/10 to-yellow-400/5 border border-yellow-400/20 rounded-xl p-6 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(251, 191, 36, 0.3)"
            }}
          >
            <Crown className="mx-auto mb-4 text-yellow-400" size={48} />
            <h4 className="text-xl font-bold text-yellow-400 mb-2">Historical First</h4>
            <p className="text-sm text-foreground/80">Pioneer cat breaking barriers in blockchain history</p>
          </motion.div>

          <motion.div 
            className="text-center bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(74, 222, 128, 0.3)"
            }}
          >
            <Zap className="mx-auto mb-4 text-primary" size={48} />
            <h4 className="text-xl font-bold text-primary mb-2">Plasma Native</h4>
            <p className="text-sm text-foreground/80">Born and bred on the fastest chain in crypto</p>
          </motion.div>

          <motion.div 
            className="text-center bg-gradient-to-br from-blue-500/10 to-blue-400/5 border border-blue-400/20 rounded-xl p-6 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
            }}
          >
            <TrendingUp className="mx-auto mb-4 text-blue-400" size={48} />
            <h4 className="text-xl font-bold text-blue-400 mb-2">Legendary Status</h4>
            <p className="text-sm text-foreground/80">Digital IP immortalized in blockchain forever</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}