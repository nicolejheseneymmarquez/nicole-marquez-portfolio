import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Tag, User, Maximize, ExternalLink, Calendar } from "lucide-react";
import { GalleryItem } from "../types";

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function Lightbox({ item, onClose }: LightboxProps) {
  // Handle escape key closure
  useEffect(() => {
    if (!item) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-110 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md select-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop Click */}
          <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

          {/* Close button top right */}
          <button
            className="absolute top-6 right-6 p-3 rounded-full bg-stone-900/60 text-stone-300 hover:text-white border border-stone-800 hover:bg-stone-800 transition-all z-120 duration-300 pointer-events-auto cursor-pointer"
            onClick={onClose}
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Core Content Modal Container */}
          <motion.div
            className="relative w-full max-w-5xl bg-stone-950 border border-stone-800/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-115 pointer-events-auto"
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Left: Interactive Large Image Showcase */}
            <div className="w-full md:w-3/5 bg-stone-900 flex items-center justify-center min-h-[300px] md:min-h-[500px] overflow-hidden relative group">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-contain md:max-h-[80vh] transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Aspect Ratio Guideline indicators */}
              <div className="absolute bottom-4 left-4 p-2 bg-black/70 backdrop-blur-md rounded-md text-[10px] text-stone-400 font-mono tracking-wider flex items-center space-x-2">
                <Maximize className="w-3 h-3 text-amber-500" />
                <span>SPEC: {item.dimensions || "1:1 Adaptive HD Layout"}</span>
              </div>
            </div>

            {/* Right: Technical Specs & Creative Insight details */}
            <div className="w-full md:w-2/5 p-8 flex flex-col justify-between border-t md:border-t-0 md:border-l border-stone-800 font-sans text-stone-300">
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] text-amber-500 uppercase tracking-[0.2em] font-mono block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-display font-medium text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Subtitle description */}
                <div className="border-t border-b border-stone-800/60 py-4">
                  <h4 className="text-xs uppercase tracking-wider font-mono text-stone-500 mb-2">Creative Direction</h4>
                  <p className="text-sm text-stone-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Specific metadata list */}
                <div className="space-y-3 text-sm">
                  {item.client && (
                    <div className="flex items-center text-xs text-stone-400">
                      <User className="w-4 h-4 mr-3 text-amber-500" />
                      <span className="font-mono text-stone-500 mr-2">Client:</span>
                      <span className="text-stone-300 font-light">{item.client}</span>
                    </div>
                  )}
                  <div className="flex items-center text-xs text-stone-400">
                    <Calendar className="w-4 h-4 mr-3 text-amber-500" />
                    <span className="font-mono text-stone-500 mr-2">Timeline:</span>
                    <span className="text-stone-300 font-light">Completed Project</span>
                  </div>
                </div>

                {/* Detailed Tags capsules */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-mono text-stone-500 mb-3 flex items-center">
                    <Tag className="w-3 h-3 mr-2 text-amber-500" />
                    Applied Methodologies & Tools
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-stone-300 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action / Contact prompt in footer of specs */}
              <div className="pt-8 md:pt-4 border-t border-stone-800/40">
                <a
                  href={`mailto:nicolejheseneymanalo@gmail.com?subject=Inquiry: ${item.title}`}
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
                >
                  <span>Inquire About This Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
