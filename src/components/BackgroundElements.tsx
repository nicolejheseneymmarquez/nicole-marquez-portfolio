import { motion } from "motion/react";

interface BackgroundProps {
  darkMode: boolean;
}

export default function BackgroundElements({ darkMode }: BackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 transition-colors duration-1000">
      {/* Wooden/Desk tactile simulation backdrop */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          darkMode 
            ? "bg-stone-950 bg-[radial-gradient(#2a2a29_1px,transparent_1px)] bg-[size:32px_32px] opacity-100" 
            : "bg-[#dcdbd8] bg-[radial-gradient(#c5c4c0_1.5px,transparent_1.5px)] bg-[size:32px_32px] opacity-100"
        }`} 
      />

      {/* Modern Studio Ambient Lights / Spotlights */}
      <div 
        className={`absolute -top-[40%] -left-[20%] w-[80%] h-[80%] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 ${
          darkMode ? "bg-amber-900/10" : "bg-orange-200/20"
        }`}
      />
      <div 
        className={`absolute -bottom-[20%] -right-[10%] w-[60%] h-[80%] rounded-full blur-[120px] pointer-events-none transition-all duration-1000 ${
          darkMode ? "bg-blue-900/10" : "bg-blue-200/10"
        }`}
      />

      {/* Floating Paper particles/seeds for realistic physical craft environment */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-xs shadow-xs ${
              darkMode ? "bg-stone-800/20 border border-stone-700/10" : "bg-white/40 border border-stone-200/20"
            }`}
            style={{
              width: Math.random() * 24 + 12,
              height: Math.random() * 32 + 16,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: `${Math.random() * 360}deg`,
            }}
            animate={{
              y: [0, Math.random() * -60 - 30],
              x: [0, Math.random() * 20 - 10],
              rotate: [0, Math.random() * 15 - 7],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Radial shade vignette for physical camera focus */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.12))] dark:bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.45))]" />
    </div>
  );
}
