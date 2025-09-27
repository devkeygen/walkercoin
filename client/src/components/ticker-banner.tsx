import { motion } from "framer-motion";

export default function TickerBanner() {
  return (
    <div className="bg-primary/20 border-b border-primary/30 overflow-hidden relative" data-testid="ticker-banner">
      <motion.div
        className="whitespace-nowrap py-3 text-lg font-bold"
        animate={{
          x: [window.innerWidth, -window.innerWidth],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        data-testid="ticker-text"
      >
        <span className="mx-8">$WALKER</span>
        <span className="mx-8">$WALKER</span>
        <span className="mx-8">$WALKER</span>
        <span className="mx-8">$WALKER</span>
        <span className="mx-8">$WALKER</span>
        <span className="mx-8">$WALKER</span>
        <span className="mx-8">$WALKER</span>
        <span className="mx-8">$WALKER</span>
        <span className="mx-8">$WALKER</span>
        <span className="mx-8">$WALKER</span>
      </motion.div>
    </div>
  );
}
