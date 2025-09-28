import { motion } from "framer-motion";
import spaceWalkerImage from "@assets/photo_2_2025-09-28_00-15-58_1759037506776.jpg";
import natureWalkerImage from "@assets/photo_3_2025-09-28_00-15-58_1759037506777.jpg";

export default function CharacterSection() {
  return (
    <section className="py-20 bg-card relative" data-testid="character-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text font-mono" data-testid="character-title">
                WALKER,
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8" data-testid="character-description">
                A mysterious wanderer, shrouded in ancient wisdom and digital mystique. 
                He traverses the blockchain realms, wielding cryptographic powers and 
                ethereal energy. Where WALKER treads, fortune and transformation follow 
                in his luminous wake.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3" data-testid="trait-1">
                  <div className="w-2 h-2 bg-primary rounded-full pulse-glow"></div>
                  <span className="text-muted-foreground">Guardian of Digital Pathways</span>
                </div>
                <div className="flex items-center space-x-3" data-testid="trait-2">
                  <div className="w-2 h-2 bg-primary rounded-full pulse-glow"></div>
                  <span className="text-muted-foreground">Master of Blockchain Mysteries</span>
                </div>
                <div className="flex items-center space-x-3" data-testid="trait-3">
                  <div className="w-2 h-2 bg-primary rounded-full pulse-glow"></div>
                  <span className="text-muted-foreground">Bearer of Ancient Wisdom</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Purple Space Cat with Bottom-to-Top Animation */}
              <motion.div 
                className="w-full h-64 rounded-lg border border-border overflow-hidden relative"
                data-testid="space-walker"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <img 
                  src={spaceWalkerImage} 
                  alt="Space Walker" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </motion.div>
              
              {/* Third Cat Image */}
              <motion.div 
                className="w-full h-48 rounded-lg border border-border overflow-hidden relative"
                data-testid="nature-walker"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <img 
                  src={natureWalkerImage} 
                  alt="Nature Walker" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
