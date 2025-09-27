import { motion } from "framer-motion";

export default function StatsSection() {
  return (
    <section className="py-20 bg-texture" data-testid="stats-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text font-mono"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="stats-title"
          >
            Join the Journey
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              className="bg-card border border-border rounded-lg p-6 text-center pulse-glow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              data-testid="stat-supply"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">∞</div>
              <div className="text-muted-foreground">Total Supply</div>
            </motion.div>
            
            <motion.div
              className="bg-card border border-border rounded-lg p-6 text-center pulse-glow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-testid="stat-community"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">🔥</div>
              <div className="text-muted-foreground">Community Driven</div>
            </motion.div>
            
            <motion.div
              className="bg-card border border-border rounded-lg p-6 text-center pulse-glow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              data-testid="stat-speed"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">⚡</div>
              <div className="text-muted-foreground">Lightning Fast</div>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <a
              href="https://funance.fun/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 rounded-lg font-bold text-xl glow-button transition-all duration-300"
              data-testid="cta-buy-button"
            >
              Enter the Realm - Buy $WALKER
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
