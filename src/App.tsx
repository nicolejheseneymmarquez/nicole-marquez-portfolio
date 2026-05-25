import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, Phone, MapPin, Linkedin, Github, ExternalLink, 
  Code, Palette, Award, BookOpen, ChevronRight, ChevronLeft, 
  Sparkles, Moon, Sun, Monitor, Cpu, FileText, 
  Map, GraduationCap, Calendar, Briefcase, CheckCircle, Info, Layers
} from "lucide-react";

import BackgroundElements from "./components/BackgroundElements";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";
import Lightbox from "./components/Lightbox";
import { profileInfo, technicalSkills, coreSkills, toolsMastery, experiences, educationList, certifications, galleryItems } from "./data";
import { GalleryItem, GalleryCategory } from "./types";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [folderOpened, setFolderOpened] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // 1 = Spreads Page 1 (Profile & Career), 2 = Spreads Page 2 (Education & Showcase)
  const [darkMode, setDarkMode] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [activeGalleryTab, setActiveGalleryTab] = useState<GalleryCategory | "All">("All");

  // State to track hover for skills/cards to trigger "bond paper" slide-out effect
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [hoveredExp, setHoveredExp] = useState<string | null>(null);
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  // Keyboard navigation for turning pages inside open folder
  useEffect(() => {
    if (!folderOpened) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentPage === 1) {
        setCurrentPage(2);
      } else if (e.key === "ArrowLeft" && currentPage === 2) {
        setCurrentPage(1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [folderOpened, currentPage]);

  // Filtering gallery items smoothly
  const filteredGallery = galleryItems.filter(
    (item) => activeGalleryTab === "All" || item.category === activeGalleryTab
  );

  return (
    <div className={`relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden p-3 sm:p-6 transition-colors duration-1000 ${
      darkMode ? "bg-stone-950 text-stone-100 dark" : "bg-stone-100 text-stone-900"
    }`}>
      
      {/* Dynamic Cinematic Pre-Loader */}
      <Loader onComplete={() => setLoaded(true)} />

      {/* Desktop Physical Feedback Interactive Cursor */}
      <CustomCursor />

      {/* Luxury Wood Desk / Studio Backdrop */}
      <BackgroundElements darkMode={darkMode} />

      {/* Top Functional Header: Mode toggle & Physical Status */}
      <header className="w-full max-w-7xl mx-auto flex justify-between items-center z-10 py-2 sm:py-4 px-4 font-mono select-none">
        <div className="flex items-center space-x-3">
          <motion.div 
            className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-[10px] sm:text-xs text-stone-500 uppercase tracking-widest leading-none">
            Dossier ID: PUP-NJMM-2026
          </span>
        </div>

        {/* Studio Lighting Controls & Fast Actions */}
        <div className="flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-xl text-xs flex items-center space-x-2 border transition-all cursor-pointer pointer-events-auto shadow-xs ${
              darkMode 
                ? "bg-stone-900 border-stone-800 text-amber-400 hover:bg-stone-800" 
                : "bg-white border-stone-200 text-stone-700 hover:bg-stone-50"
            }`}
            title="Adjust Studio Light Level"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            <span className="hidden sm:inline text-[10px] uppercase font-bold tracking-wider">
              {darkMode ? "Studio Light ON" : "Ambient Dim OFF"}
            </span>
          </motion.button>
        </div>
      </header>

      {/* Main Folder Mechanics Sandbox */}
      <main className="flex-1 w-full max-w-7xl mx-auto flex items-center justify-center z-10 py-6 sm:py-10">
        <AnimatePresence mode="wait">
          {!folderOpened ? (
            
            /* ====================================================================== */
            /* 1. CLOSED FOLDER HERO STATE                                              */
            /* ====================================================================== */
            <motion.div
              key="closed-folder"
              className="relative flex flex-col items-center justify-center max-w-md w-full"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: -20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
            >
              {/* Tactical shadows below physical binder */}
              <div className="absolute -bottom-6 w-[105%] h-12 bg-black/20 dark:bg-black/45 rounded-full blur-2xl z-0" />

              {/* Folder cardboard shell wrap */}
              <div className={`relative w-full aspect-[3/4.2] rounded-2xl shadow-2xl overflow-hidden border-2 transition-all duration-1000 ${
                darkMode 
                  ? "bg-stone-900 border-stone-800/80 hover:border-amber-500/30" 
                  : "bg-orange-50/50 border-orange-100/60 hover:border-amber-600/20"
              }`}>
                {/* Vintage document paper grain effect inside folder */}
                <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none" />

                {/* Left Spine leather binder mockup with golden rivets */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-stone-950 flex flex-col justify-between items-center py-10 border-r border-stone-800 shadow-[2px_0_10px_rgba(0,0,0,0.5)] z-20">
                  <div className="w-2 h-2 rounded-full bg-amber-400/80 shadow-[0_0_4px_rgba(251,191,36,0.6)]" />
                  <div className="w-2 h-2 rounded-full bg-stone-800" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80 shadow-[0_0_4px_rgba(251,191,36,0.6)]" />
                  <div className="w-2 h-2 rounded-full bg-stone-800" />
                  <div className="w-2 h-2 rounded-full bg-amber-400/80 shadow-[0_0_4px_rgba(251,191,36,0.6)]" />
                </div>

                {/* Cover Main Grid Overlay & Labeling details */}
                <div className="pl-14 pr-8 py-12 h-full flex flex-col justify-between relative z-10 select-none">
                  {/* Stamp Design at upper margins */}
                  <div className="flex justify-between items-start font-mono text-[9px] text-stone-500">
                    <div className="text-left leading-none uppercase space-y-1">
                      <div>AGDANGAN / QUEZON</div>
                      <div className="text-amber-500 font-bold">4304 PHILIPPINES</div>
                    </div>
                    <div className="text-right border border-dashed border-stone-400/40 p-1 rounded-sm">
                      MUNICIPAL CERTIFIED
                    </div>
                  </div>

                  {/* Main Creative Title Heading */}
                  <div className="my-auto space-y-5">
                    <div className="inline-flex items-center space-x-2 text-amber-500 font-mono text-xs uppercase tracking-[0.2em]">
                      <Sparkles className="w-4 h-4 animate-pulse" />
                      <span>Creative VA Dossier</span>
                    </div>

                    <h1 className="text-2xl sm:text-3.5xl font-display font-bold text-stone-800 dark:text-stone-100 tracking-tight uppercase leading-[0.95]">
                      Marquez,
                      <span className="block text-amber-600 dark:text-amber-400 mt-1">Nicole Jheseney M.</span>
                    </h1>

                    <div className="h-px bg-gradient-to-r from-stone-400/40 via-stone-500/20 to-transparent my-4" />

                    <p className="text-xs text-stone-500 font-mono tracking-wide leading-relaxed">
                      BS INFORMATION TECHNOLOGY STUDENT & DEPARTMENT OF TOURISM HIRED GRAPHIC DESIGN SPECIALIST.
                    </p>
                  </div>

                  {/* Bottom mechanical interactive latch trigger */}
                  <div className="space-y-4">
                    <p className="font-mono text-[9px] text-stone-500/70 border-t border-stone-400/20 pt-4">
                      CLASSIFIED: CREATIVE DESIGN, UI/UX SYSTEM DEPLOYMENTS & PORTFOLIO COMPILATIONS
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFolderOpened(true)}
                      className="w-full relative py-4 px-6 rounded-xl bg-stone-900 dark:bg-amber-600 hover:bg-stone-950 dark:hover:bg-amber-500 text-white font-mono text-xs font-bold uppercase tracking-[0.2em] transition-all cursor-pointer shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group"
                    >
                      <span>Release Latch & Open</span>
                      <ChevronRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </motion.button>
                  </div>
                </div>

                {/* Red binder ribbon accent overlay sticking out from underneath */}
                <div className="absolute top-1/2 right-0 w-2 h-16 bg-red-600 rounded-l-md shadow-[0_2px_4px_rgba(0,0,0,0.3)] pointer-events-none" />
              </div>
            </motion.div>
          ) : (
            
            /* ====================================================================== */
            /* 2. PHYSICAL OPEN FOLDER CONTAINER (DUAL PAGE STRUCTURE)                */
            /* ====================================================================== */
            <motion.div
              key="opened-folder"
              className="w-full relative flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Ambient folder shadows */}
              <div className="absolute -bottom-8 w-11/12 h-12 bg-black/15 dark:bg-black/40 rounded-full blur-2xl z-0" />

              {/* Physical Binder Cover Wrapper */}
              <div className={`w-full rounded-3xl overflow-hidden shadow-2xl transition-colors duration-1000 ${
                darkMode ? "bg-stone-900 border border-stone-800" : "bg-orange-50/70 border border-orange-100/60"
              }`}>
                {/* Physical Centered Spine Hinge (Hides on single view grid on mobile) */}
                <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-[2px] bg-stone-700/20 dark:bg-stone-800/60 z-30 transform -translate-x-1/2 shadow-xs" />

                {/* Floating Bookmark/Page Tabs on right side margin (Physical representation) */}
                <div className="absolute -right-3 top-24 bottom-24 w-12 flex flex-col justify-start space-y-4 z-40 select-none">
                  {/* Folder Tab 1 bookmark */}
                  <button
                    onClick={() => setCurrentPage(1)}
                    className={`relative py-5 px-3 rounded-r-lg font-mono text-[10px] uppercase font-bold tracking-widest cursor-pointer text-left shadow-md transition-all duration-500 ${
                      currentPage === 1
                        ? "bg-amber-600 text-white w-14 translate-x-1.5 z-40"
                        : "bg-stone-800 dark:bg-stone-900 border-l border-stone-700 text-stone-400 hover:text-stone-200 w-11 hover:w-12 hover:translate-x-0.5"
                    }`}
                  >
                    <span className="block transform rotate-90 origin-left translate-x-2 translate-y-2 whitespace-nowrap">
                      I: Profile Info
                    </span>
                  </button>

                  {/* Folder Tab 2 bookmark */}
                  <button
                    onClick={() => setCurrentPage(2)}
                    className={`relative py-5 px-3 rounded-r-lg font-mono text-[10px] uppercase font-bold tracking-widest cursor-pointer text-left shadow-md transition-all duration-500 ${
                      currentPage === 2
                        ? "bg-amber-600 text-white w-14 translate-x-1.5 z-40"
                        : "bg-stone-800 dark:bg-stone-900 border-l border-stone-700 text-stone-400 hover:text-stone-200 w-11 hover:w-12 hover:translate-x-0.5"
                    }`}
                  >
                    <span className="block transform rotate-90 origin-left translate-x-2 translate-y-3 whitespace-nowrap">
                      II: Creative
                    </span>
                  </button>
                </div>

                {/* DUAL-PAGE RESPONSIVE FOLDER VIEW GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px] lg:min-h-[720px] relative z-20">
                  
                  {/* ==================================================== */}
                  {/* LEFT PAGE MAIN AREA (ADAPTS ON PAGE TABS CURRENT)    */}
                  {/* ==================================================== */}
                  <div className={`p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-600 ${
                    darkMode ? "bg-stone-900" : "bg-stone-50"
                  }`}>
                    {/* Retro Drafting Margin Line (aesthetic blueprint) */}
                    <div className="absolute left-6 sm:left-10 top-0 bottom-0 w-px bg-stone-300/30 dark:bg-stone-800/80 pointer-events-none" />
                    
                    {/* Paper Texture Overlay */}
                    <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none" />

                    {/* Page Content layout based on active sheet */}
                    <AnimatePresence mode="wait">
                      {currentPage === 1 ? (
                        /* ========================================== */
                        /* SPEEAD 1 - LEFT PAGE: BIO & SOCIALS & SKILLS */
                        /* ========================================== */
                        <motion.div
                          key="spread1-left"
                          className="pl-4 sm:pl-8 space-y-6 flex-1 flex flex-col justify-between"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -15 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Profile Header Block */}
                          <div className="space-y-2">
                            <span className="font-mono text-[9px] text-amber-500 uppercase tracking-[0.25em] block">
                              Dossier Profile Folder
                            </span>
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                              <h2 className="text-xl sm:text-2.5xl font-display font-bold text-stone-800 dark:text-stone-100 uppercase tracking-tight">
                                Nicole Jheseney Marquez
                              </h2>
                              <div className="inline-flex items-center text-[10px] text-stone-400 dark:text-stone-500 font-mono bg-stone-200/40 dark:bg-stone-850 py-1 px-2.5 rounded-sm border border-stone-300/10 w-fit">
                                <MapPin className="w-3 h-3 text-red-500 mr-1.5" />
                                <span>Agdangan, Quezon, PH</span>
                              </div>
                            </div>
                            <p className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                              IT Scholar & Creative Branding Assistant
                            </p>
                          </div>

                          {/* Profile Summary statement in premium design */}
                          <div className="relative p-4 rounded-xl bg-orange-100/10 dark:bg-stone-850 border-r-2 border-r-amber-500 dark:border-r-amber-400 border border-stone-200/40 dark:border-stone-800">
                            <h3 className="text-[10px] uppercase font-mono tracking-widest text-stone-400 mb-1.5 flex items-center">
                              <Info className="w-3.5 h-3.5 text-amber-500 mr-2" />
                              Creative Statement
                            </h3>
                            <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-light duration-300 hover:text-stone-800 dark:hover:text-stone-100">
                              {profileInfo.summary}
                            </p>
                          </div>

                          {/* Connection details / Contacts Grid (Real data sync) */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <a
                              href={`mailto:${profileInfo.email}`}
                              className="flex items-center p-2.5 rounded-lg border border-stone-200/60 dark:border-stone-800/75 hover:bg-stone-100/60 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 text-xs transition-all tracking-wide font-mono hover:scale-102 cursor-pointer pointer-events-auto"
                            >
                              <Mail className="w-4 h-4 text-amber-600 mr-3 shrink-0" />
                              <span className="truncate">{profileInfo.email}</span>
                            </a>
                            <a
                              href={`tel:${profileInfo.phone}`}
                              className="flex items-center p-2.5 rounded-lg border border-stone-200/60 dark:border-stone-800/75 hover:bg-stone-100/60 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 text-xs transition-all tracking-wide font-mono hover:scale-102 cursor-pointer pointer-events-auto"
                            >
                              <Phone className="w-4 h-4 text-amber-600 mr-3 shrink-0" />
                              <span>{profileInfo.phone}</span>
                            </a>
                            <a
                              href={`https://${profileInfo.linkedin}`}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center p-2.5 rounded-lg border border-stone-200/60 dark:border-stone-800/75 hover:bg-stone-100/60 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 text-xs transition-all tracking-wide font-mono hover:scale-102 cursor-pointer pointer-events-auto"
                            >
                              <Linkedin className="w-4 h-4 text-gradient-to-r text-amber-600 mr-3 shrink-0" />
                              <span className="truncate">{profileInfo.linkedin}</span>
                            </a>
                            <a
                              href={`https://${profileInfo.github}`}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center p-2.5 rounded-lg border border-stone-200/60 dark:border-stone-800/75 hover:bg-stone-100/60 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-300 text-xs transition-all tracking-wide font-mono hover:scale-102 cursor-pointer pointer-events-auto"
                            >
                              <Github className="w-4 h-4 text-amber-600 mr-3 shrink-0" />
                              <span>{profileInfo.github}</span>
                            </a>
                          </div>

                          {/* technical skills module with sliding paper notes */}
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h3 className="text-xs uppercase font-mono tracking-widest text-stone-400 flex items-center">
                                <Code className="w-4 h-4 mr-2 text-amber-500" />
                                Interactive Skills Mapping
                              </h3>
                              <span className="text-[10px] font-mono text-stone-550 italic">
                                Hover cards to audit specs
                              </span>
                            </div>

                            {/* Skills Capsules Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
                              {technicalSkills.map((skill, index) => {
                                const isHovered = hoveredSkill === skill.name;
                                return (
                                  <div
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => setHoveredSkill(skill.name)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                  >
                                    {/* Standard background display pill */}
                                    <div className="interactive-card p-3 rounded-lg border border-stone-200/80 dark:border-stone-800 bg-white/50 dark:bg-stone-850 hover:bg-white dark:hover:bg-stone-800 hover:shadow-sm transition-all duration-350 cursor-help select-none z-10 relative">
                                      <div className="flex justify-between items-center text-xs">
                                        <span className="font-semibold text-stone-700 dark:text-stone-200">
                                          {skill.name}
                                        </span>
                                        <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400">
                                          {skill.level}%
                                        </span>
                                      </div>
                                      
                                      {/* Minimal progress line bar */}
                                      <div className="mt-2 w-full h-1 bg-stone-200 dark:bg-stone-750 rounded-full overflow-hidden">
                                        <motion.div
                                          className="h-full bg-gradient-to-r from-amber-500 to-amber-600 shadow-[0_0_4px_rgba(245,158,11,0.5)]"
                                          initial={{ width: 0 }}
                                          animate={{ width: `${skill.level}%` }}
                                          transition={{ duration: 1, delay: 0.1 * index }}
                                        />
                                      </div>
                                    </div>

                                    {/* ==================================================== */}
                                    {/* PHYSICAL BOND PAPER SLIDEOUT ELEMENT ON HOVER        */}
                                    {/* ==================================================== */}
                                    <AnimatePresence>
                                      {isHovered && (
                                        <motion.div
                                          className="absolute left-4 right-4 -top-20 p-3 rounded-md bg-amber-50 dark:bg-stone-900 border border-amber-200 dark:border-amber-500/30 shadow-lg pointer-events-none z-50 text-[11px] font-mono"
                                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                          animate={{ opacity: 1, y: -5, scale: 1, rotate: -0.5 }}
                                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                          transition={{ type: "spring", damping: 15 }}
                                        >
                                          <div className="text-amber-700 dark:text-amber-400 font-extrabold uppercase tracking-widest flex items-center justify-between">
                                            <span>AUDIT SPEC SHEET</span>
                                            <span>#0{index + 1}</span>
                                          </div>
                                          <p className="text-stone-600 dark:text-stone-300 mt-1 uppercase text-[9px] leading-tight">
                                            Skill Level Achieved: Mastered Professional. Utilized extensively in Department of Tourism campaigns and PUP student systems.
                                          </p>
                                          {/* Tiny physical paper detailing stamp */}
                                          <div className="mt-1 pb-1 border-t border-dashed border-amber-200 dark:border-stone-800 text-[8px] text-stone-400 flex justify-between">
                                            <span>APPROVED BY LYDO</span>
                                            <span>TIMESTAMP: 2026</span>
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Core Skills Tags Stamps */}
                          <div className="pt-2">
                            <h4 className="text-[10px] uppercase font-mono tracking-widest text-stone-400 mb-2.5">
                              Core Traits & Methodologies
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {coreSkills.map((trait, idx) => (
                                <span
                                  key={idx}
                                  className="text-[10px] px-2.5 py-1 rounded bg-stone-200/40 dark:bg-stone-800/60 text-stone-600 dark:text-stone-300 border border-stone-300/10 hover:border-amber-500/20 transition-all font-sans cursor-default"
                                >
                                  {trait}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        /* ========================================== */
                        /* SPREAD 2 - LEFT PAGE: TOOLS & EDUCATION     */
                        /* ========================================== */
                        <motion.div
                          key="spread2-left"
                          className="pl-4 sm:pl-8 space-y-6 flex-1 flex flex-col justify-between"
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -15 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Tools Section Title */}
                          <div className="space-y-2">
                            <span className="font-mono text-[9px] text-amber-500 uppercase tracking-[0.25em] block">
                              Technical Instruments
                            </span>
                            <h2 className="text-xl sm:text-2.5xl font-display font-bold text-stone-800 dark:text-stone-100 uppercase tracking-tight">
                              Tools & Software Mastery
                            </h2>
                            <p className="text-xs text-stone-500 font-mono">
                              Hardware setups, remote clouds & graphic suites
                            </p>
                          </div>

                          {/* Dynamic Tools Grid displaying masteries */}
                          <div className="grid grid-cols-2 gap-3">
                            {toolsMastery.map((tool, idx) => {
                              const isHovered = hoveredTool === tool.name;
                              return (
                                <div
                                  key={idx}
                                  className="relative group"
                                  onMouseEnter={() => setHoveredTool(tool.name)}
                                  onMouseLeave={() => setHoveredTool(null)}
                                >
                                  <div className="p-3 rounded-lg border border-stone-200/60 dark:border-stone-800 bg-white/40 dark:bg-stone-900/60 hover:bg-stone-100/50 dark:hover:bg-stone-800 transition-all duration-300 select-none cursor-crosshair">
                                    <div className="flex justify-between items-center">
                                      <div className="flex items-center space-x-2">
                                        <div className="w-6 h-6 rounded flex items-center justify-center bg-amber-500/10 text-amber-500 text-xs font-bold uppercase font-mono border border-amber-500/15">
                                          {tool.name[0]}
                                        </div>
                                        <span className="text-xs font-semibold text-stone-700 dark:text-stone-200">
                                          {tool.name}
                                        </span>
                                      </div>
                                      <span className="text-[10px] font-mono text-stone-400">
                                        {tool.percentage}%
                                      </span>
                                    </div>

                                    {/* Indicator bars */}
                                    <div className="mt-3 w-full h-[3px] bg-stone-200 dark:bg-stone-750 rounded-full overflow-hidden">
                                      <motion.div
                                        className="h-full bg-amber-500"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${tool.percentage}%` }}
                                        transition={{ duration: 1 }}
                                      />
                                    </div>
                                  </div>

                                  {/* Paper notes pop out under Tools */}
                                  <AnimatePresence>
                                    {isHovered && (
                                      <motion.div
                                        className="absolute left-2 right-2 -bottom-24 p-2.5 rounded bg-yellow-50 dark:bg-stone-950 border border-amber-200 dark:border-stone-800 shadow-xl pointer-events-none z-50 text-[10px] font-mono whitespace-normal leading-normal"
                                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                      >
                                        <div className="font-bold text-amber-700 dark:text-amber-500 text-xxs">INSTRUMENT CLASSIFICATION</div>
                                        <div className="text-stone-600 dark:text-stone-350 uppercase tracking-tight mt-1 text-[9px]">
                                          Applied Categories: {tool.category}. Certified under Salesforce internship workflows & local organizational branding tasks.
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>

                          {/* Academic Background timeline (draft structure) */}
                          <div className="space-y-4 border-t border-stone-200/50 dark:border-stone-800 pt-4">
                            <h3 className="text-xs uppercase font-mono tracking-widest text-stone-400 flex items-center">
                              <GraduationCap className="w-4 h-4 mr-2 text-amber-500" />
                              Educational History
                            </h3>
                            <div className="space-y-4">
                              {educationList.map((edu, idx) => (
                                <div key={idx} className="relative pl-6 border-l border-stone-200 dark:border-stone-800">
                                  {/* Bullet */}
                                  <div className="absolute left-[-4.5px] top-1.5 w-2 h-2 rounded-full bg-amber-500" />
                                  <div className="flex justify-between items-start text-xs">
                                    <h4 className="font-bold text-stone-800 dark:text-stone-100">
                                      {edu.school}
                                    </h4>
                                    <span className="text-[10px] font-mono text-amber-600 dark:text-amber-400 opacity-80 whitespace-nowrap ml-3">
                                      {edu.period}
                                    </span>
                                  </div>
                                  <p className="text-xs text-stone-500 font-light mt-0.5">
                                    {edu.degree}
                                  </p>
                                  {/* Minimal badges */}
                                  <div className="flex flex-wrap gap-1 mt-1.5">
                                    {edu.courses.map((course, cIdx) => (
                                      <span key={cIdx} className="text-[9px] px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800/80 text-stone-400 dark:text-stone-300 font-mono">
                                        {course}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Official system Certifications Seals */}
                          <div className="space-y-2 border-t border-stone-200/50 dark:border-stone-800 pt-4">
                            <h3 className="text-xs uppercase font-mono tracking-widest text-stone-400 flex items-center">
                              <Award className="w-4 h-4 mr-2 text-amber-500" />
                              Certificates & Credentials
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                              {certifications.map((cert, index) => (
                                <div key={index} className="p-2 rounded border border-stone-200 dark:border-stone-800 bg-orange-100/10 dark:bg-stone-900 flex flex-col justify-between h-full">
                                  <h4 className="font-bold text-stone-800 dark:text-stone-100 text-[10px] uppercase tracking-tight line-clamp-2">
                                    {cert.title}
                                  </h4>
                                  <div className="flex justify-between items-center text-[8px] font-mono text-stone-400 mt-2">
                                    <span>{cert.issuer}</span>
                                    <span className="text-amber-500">{cert.year}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Left Page Vintage Stamp Marker */}
                    <div className="flex justify-between items-center border-t border-stone-200/50 dark:border-stone-800/80 pt-4 mt-6 select-none pl-4 sm:pl-8">
                      <span className="font-mono text-[9px] text-stone-400">
                        FOLDER SECTION REF: L-0{currentPage}
                      </span>
                      {currentPage === 1 && (
                        <div className="hidden sm:flex items-center space-x-1 font-mono text-[9px] text-emerald-600/60 dark:text-emerald-500/60 bg-emerald-55/10 py-0.5 px-2 rounded-sm border border-emerald-500/10">
                          <CheckCircle className="w-3 h-3" />
                          <span>ALL RECORDS VERIFIED</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ==================================================== */}
                  {/* RIGHT PAGE MAIN AREA (TIMELINE / PORTFOLIO)          */}
                  {/* ==================================================== */}
                  <div className={`p-6 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-stone-200 dark:border-stone-800 relative overflow-hidden transition-all duration-600 ${
                    darkMode ? "bg-stone-850" : "bg-white"
                  }`}>
                    {/* Retro Drafting Margin Line (aesthetic design) */}
                    <div className="absolute left-6 sm:left-10 top-0 bottom-0 w-px bg-stone-300/30 dark:bg-stone-800/80 pointer-events-none" />

                    {/* Paper Texture Overlay */}
                    <div className="absolute inset-0 paper-texture opacity-30 pointer-events-none" />

                    <AnimatePresence mode="wait">
                      {currentPage === 1 ? (
                        /* ========================================== */
                        /* SPREAD 1 - RIGHT PAGE: EXPERIENCE ACTIONS  */
                        /* ========================================== */
                        <motion.div
                          key="spread1-right"
                          className="pl-4 sm:pl-8 space-y-6 flex-1 flex flex-col justify-start"
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 15 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Experience Banner Title */}
                          <div className="space-y-1">
                            <span className="font-mono text-[9px] text-amber-500 uppercase tracking-[0.25em] block">
                              Leadership & Accomplishments
                            </span>
                            <h2 className="text-xl sm:text-2.5xl font-display font-bold text-stone-800 dark:text-stone-100 uppercase tracking-tight">
                              Work & Leadership Timeline
                            </h2>
                            <p className="text-xs text-stone-500 font-mono">
                              Hired roles inside public commissions & student architectures
                            </p>
                          </div>

                          {/* Dynamic timeline flow */}
                          <div className="space-y-4 custom-scrollbar overflow-y-auto max-h-[520px] pr-2">
                            {experiences.map((exp, index) => {
                              const isHovered = hoveredExp === exp.id;
                              return (
                                <div
                                  key={exp.id}
                                  className="relative pl-6 border-l border-stone-200 dark:border-stone-800"
                                  onMouseEnter={() => setHoveredExp(exp.id)}
                                  onMouseLeave={() => setHoveredExp(null)}
                                >
                                  {/* Timeline node */}
                                  <div className="absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full border border-white dark:border-stone-900 bg-amber-500 transition-all duration-300 ring-2 ring-amber-500/30 group-hover:bg-amber-400" />

                                  <div className="space-y-1.5 group cursor-help">
                                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                                      <h3 className="font-bold text-xs sm:text-sm text-stone-800 dark:text-stone-100 flex items-center">
                                        {exp.role}
                                        <span className={`ml-2 text-[8px] px-1.5 py-0.5 rounded font-mono uppercase font-bold text-white shadow-xs ${
                                          exp.type === "Work" ? "bg-amber-600" :
                                          exp.type === "Leadership" ? "bg-stone-700" :
                                          exp.type === "Academic" ? "bg-dashed bg-stone-500" : "bg-teal-700"
                                        }`}>
                                          {exp.type}
                                        </span>
                                      </h3>
                                      <span className="text-[10px] font-mono text-stone-400 dark:text-stone-500 whitespace-nowrap sm:ml-3">
                                        {exp.period}
                                      </span>
                                    </div>

                                    <h4 className="text-xs text-amber-600 dark:text-amber-400 font-mono">
                                      {exp.organization} &bull; <span className="text-stone-400 font-sans">{exp.location}</span>
                                    </h4>

                                    {/* Project bullet details */}
                                    <ul className="space-y-1 text-xs text-stone-600 dark:text-stone-300 font-light list-disc pl-4 leading-normal">
                                      {exp.details.map((detail, dIdx) => (
                                        <li key={dIdx}>{detail}</li>
                                      ))}
                                    </ul>
                                  </div>

                                  {/* ==================================================== */}
                                  {/* PHYSICAL BOND SPEC SLIDING SHEET FOR EXPERIENCE ITEMS*/}
                                  {/* ==================================================== */}
                                  <AnimatePresence>
                                    {isHovered && (
                                      <motion.div
                                        className="absolute right-2 left-6 -top-12 p-3 rounded-lg bg-yellow-50 dark:bg-stone-950 border border-amber-300 dark:border-stone-800 shadow-xl pointer-events-none z-50 text-[10px] font-mono"
                                        initial={{ opacity: 0, scale: 0.95, y: 15 }}
                                        animate={{ opacity: 1, scale: 1, y: 0, rotate: 0.5 }}
                                        exit={{ opacity: 0, scale: 0.95, y: 15 }}
                                        transition={{ type: "spring", damping: 12 }}
                                      >
                                        <div className="text-amber-700 dark:text-amber-500 font-extrabold uppercase text-[9px]">OFFICIAL OFFICE RECORD CERTIFIED</div>
                                        <div className="text-[9px] text-stone-600 dark:text-stone-400 flex items-center justify-between mt-1">
                                          <span>ROLE STABILIZATION ACTIVE</span>
                                          <span>APPROVED: 2026-05</span>
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      ) : (
                        /* ========================================== */
                        /* SPREAD 2 - RIGHT PAGE: PORTFOLIO SHOWCASE   */
                        /* ========================================== */
                        <motion.div
                          key="spread2-right"
                          className="pl-4 sm:pl-8 space-y-4 flex-1 flex flex-col justify-start"
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 15 }}
                          transition={{ duration: 0.3 }}
                        >
                          {/* Showcase Banner Title */}
                          <div className="space-y-1">
                            <span className="font-mono text-[9px] text-amber-500 uppercase tracking-[0.25em] block">
                              Visual Works Showcase
                            </span>
                            <h2 className="text-xl sm:text-2.5xl font-display font-bold text-stone-800 dark:text-stone-100 uppercase tracking-tight">
                              Creative Design Exhibit
                            </h2>
                            <p className="text-xs text-stone-500 font-mono">
                              Press cards to trigger real lightbox drafts
                            </p>
                          </div>

                          {/* Filtering menu tab row */}
                          <div className="flex flex-wrap gap-1 border-b border-stone-200 dark:border-stone-850 pb-2.5 z-20">
                            {(["All", "E-Commerce & Corporate Marketing", "Social Media Pubmats & Event Branding", "Corporate, Academic & Minimalist Designs"] as const).map((tab, tIdx) => (
                              <button
                                key={tIdx}
                                onClick={() => setActiveGalleryTab(tab)}
                                className={`text-[10px] uppercase font-mono tracking-wider px-2.5 py-1.5 rounded transition-all cursor-pointer select-none pointer-events-auto shrink-0 ${
                                  activeGalleryTab === tab
                                    ? "bg-amber-600 text-white font-bold"
                                    : "bg-stone-25/50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-450 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-200"
                                }`}
                              >
                                {tab === "All" ? "All Designs" : tab.split(" & ")[0]}
                              </button>
                            ))}
                          </div>

                          {/* Showcase Item Masonry/Grid view */}
                          <motion.div 
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 overflow-y-auto max-h-[480px] custom-scrollbar pr-1"
                          >
                            <AnimatePresence mode="popLayout">
                              {filteredGallery.map((item) => (
                                <motion.div
                                  layout
                                  key={item.id}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.9 }}
                                  transition={{ duration: 0.3 }}
                                  whileHover={{ y: -3 }}
                                  onClick={() => setSelectedGalleryItem(item)}
                                  className="group cursor-pointer select-none border border-stone-200/80 dark:border-stone-800 bg-white/60 dark:bg-stone-900 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 pointer-events-auto"
                                >
                                  {/* Thumbnail container */}
                                  <div className="aspect-[4/3] w-full overflow-hidden bg-stone-900 relative">
                                    <img
                                      src={item.imageUrl}
                                      alt={item.title}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                                      referrerPolicy="no-referrer"
                                    />
                                    {/* Category tag bubble overlay */}
                                    <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[8px] font-mono uppercase text-amber-400 tracking-widest leading-none">
                                      {item.category.split(" & ")[0]}
                                    </div>
                                  </div>

                                  {/* Meta cards text info */}
                                  <div className="p-3">
                                    <h4 className="font-bold text-xs text-stone-800 dark:text-stone-100 uppercase tracking-tight truncate">
                                      {item.title}
                                    </h4>
                                    <p className="text-[10px] text-stone-500 font-light line-clamp-2 mt-1 leading-normal">
                                      {item.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1 mt-2">
                                      {item.tags.slice(0, 3).map((tag, tagId) => (
                                        <span
                                          key={tagId}
                                          className="text-[9px] px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-400 dark:text-stone-300 font-mono"
                                        >
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </AnimatePresence>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Right Page Footer controls */}
                    <div className="flex justify-between items-center border-t border-stone-200/50 dark:border-stone-800/80 pt-4 mt-6 select-none pl-4 sm:pl-8">
                      {/* Leaf pagination keys */}
                      <span className="font-mono text-[9px] text-stone-400">
                        FOLDER SECTION REF: R-0{currentPage}
                      </span>
                      
                      {/* Interactive page buttons */}
                      <div className="flex items-center space-x-2 pointer-events-auto z-40">
                        {currentPage === 2 ? (
                          <button
                            onClick={() => setCurrentPage(1)}
                            className="p-1 px-3 border border-stone-250 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 hover:bg-stone-150 rounded text-xs font-mono uppercase tracking-wider text-stone-500 dark:text-stone-350 cursor-pointer flex items-center"
                          >
                            <ChevronLeft className="w-4.5 h-4.5 mr-1" />
                            <span>Spread I</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => setCurrentPage(2)}
                            className="p-1 px-3 border border-stone-250 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 hover:bg-stone-150 rounded text-xs font-mono uppercase tracking-wider text-stone-505 dark:text-stone-350 cursor-pointer flex items-center"
                          >
                            <span>Spread II</span>
                            <ChevronRight className="w-4.5 h-4.5 ml-1" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Red leather physical bookmark hanging below binder */}
              <div className="w-1.5 h-36 bg-red-600 rounded-b-md shadow-md transform -translate-y-4 opacity-85 z-10" />

              {/* Physical closing trigger button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFolderOpened(false)}
                className="mt-6 flex items-center space-x-2 text-xs font-mono uppercase tracking-widest border border-stone-350 dark:border-stone-850 hover:bg-stone-200/70 dark:hover:bg-stone-900 px-4 py-2 rounded-xl text-stone-500 dark:text-stone-400 cursor-pointer hover:text-stone-700 dark:hover:text-stone-100 duration-300 pointer-events-auto"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Close & Lock Folder</span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Dynamic Fullscreen Spec details Lightbox Overlay */}
      <Lightbox 
        item={selectedGalleryItem} 
        onClose={() => setSelectedGalleryItem(null)} 
      />

      {/* Persistent Human Footer */}
      <footer className="w-full text-center z-10 py-4 select-none border-t border-stone-200/50 dark:border-stone-800/60 mt-6 font-mono text-[9px] sm:text-[10px] text-stone-400 uppercase tracking-widest">
        <span>&copy; 2026 Nicole Jheseney M. Marquez &bull; Designed in Quezon Province &bull; All Rights Reserved</span>
      </footer>
    </div>
  );
}
