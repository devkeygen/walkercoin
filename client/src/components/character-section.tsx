import { motion } from "framer-motion";

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
              <div 
                className="w-full h-64 bg-gradient-to-br from-primary/30 to-secondary/50 rounded-lg border border-border flex items-center justify-center"
                data-testid="mystical-forest-placeholder"
              >
                <div className="text-center text-muted-foreground">
                  <div className="text-4xl mb-2">🌲</div>
                  <div className="text-sm">Mystical Forest Scene</div>
                  <div className="text-xs">Ethereal lighting & glowing orbs</div>
                </div>
              </div>
              
              <div 
                className="w-full h-48 bg-gradient-to-br from-accent/20 to-primary/30 rounded-lg border border-border flex items-center justify-center"
                data-testid="ancient-stones-placeholder"
              >
                <div className="text-center text-muted-foreground">
                  <div className="text-3xl mb-2">🗿</div>
                  <div className="text-sm">Ancient Stone Circle</div>
                  <div className="text-xs">Mysterious runes in misty atmosphere</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
