import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

interface LoaderProps {
  onComplete: () => void;
}

const DESIGN_QUOTES = [
  "Form follows function. Art inspires connection.",
  "Design is intelligence made visible.",
  "Digital systems & visual craft combined.",
  "Simplicity is the ultimate sophistication.",
  "Typography is the garment of language.",
  "Engineering with artistic precision."
];

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    // Cycle quotes
    const quoteInterval = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % DESIGN_QUOTES.length);
    }, 1800);

    // Dynamic progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setShouldExit(true);
            setTimeout(onComplete, 600);
          }, 400);
          return 100;
        }
        // Accelerate or fluctuate naturally
        const jump = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + jump, 100);
      });
    }, 70);

    return () => {
      clearInterval(quoteInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!shouldExit && (
        <motion.div
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-stone-900 text-stone-100 font-mono select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Central Logo Draft Outline */}
          <div className="relative mb-8 flex flex-col items-center">
            <motion.div
              className="w-16 h-16 border-2 border-amber-500/30 rounded-full flex items-center justify-center relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              {/* Drafting grid overlay around logo */}
              <div className="absolute w-20 h-px bg-stone-700/60" />
              <div className="absolute h-20 w-px bg-stone-700/60" />
              <div className="w-10 h-10 border border-amber-400 border-dashed rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>
            </motion.div>
            
            {/* Title */}
            <h2 className="mt-6 text-sm uppercase tracking-[0.3em] font-display text-stone-300">
              Nicole Jheseney M. Marquez
            </h2>
            <p className="mt-1 text-xs text-stone-500 uppercase tracking-widest font-mono">
              Drafting Creative Assets
            </p>
          </div>

          <div className="w-64 max-w-full space-y-2">
            {/* Quote showcase */}
            <div className="h-8 flex items-center justify-center text-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={quoteIdx}
                  className="text-xs text-amber-500/80 italic tracking-wide"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  &ldquo;{DESIGN_QUOTES[quoteIdx]}&rdquo;
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Slider track */}
            <div className="w-full h-[3px] bg-stone-800 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Matrix style percentage */}
            <div className="flex justify-between items-center text-[10px] text-stone-500 pt-1">
              <span>SYS_INIT_ONLINE</span>
              <span className="text-amber-500 font-bold">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
