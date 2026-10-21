import React from 'react';
import { motion } from 'framer-motion';
import useDarkMode from '../hooks/useDarkMode';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroTile from '../components/HeroTile';
import ExperienceCard from '../components/ExperienceCard';
import ProjectsCard from '../components/ProjectsCard';
import PortraitCard from '../components/PortraitCard';
import ContactButton from '../components/ContactButton';
import DownloadCvButton from '../components/DownloadCvButton';

/**
 * HomePage represents the core Fullscreen Bento Landing view.
 * Always rendered in the background — when a section overlay is open,
 * it remains visible but blurred beneath it.
 *
 * @param {Object}  props
 * @param {boolean} props.frozen — When true an overlay is open; pointer-events
 *                                 are disabled and aria-hidden is set so focus
 *                                 stays within the overlay.
 */
export default function HomePage({ frozen = false }) {
  const { isDark, toggle } = useDarkMode();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      aria-hidden={frozen || undefined}
      className={`font-sans min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between p-4 lg:p-6 lg:overflow-hidden bg-[#f8f9fa] dark:bg-[#0a0d14] text-[#121417] dark:text-[#f1f3f7] transition-colors duration-300 antialiased relative ${
        frozen ? 'pointer-events-none select-none' : ''
      }`}
    >
      {/* Top Header / Mode Switcher */}
      <Header isDark={isDark} onToggle={toggle} />

      {/* Main Bento Grid Canvas */}
      <main className="w-full flex-1 max-w-[1720px] mx-auto flex flex-col min-h-0 h-full">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-5 flex-1 min-h-0 items-stretch">
          {/* LEFT SIDE (Span 7 on Desktop / Mobile ordering: Hero then Experiences/Projects) */}
          <div className="contents lg:flex lg:flex-col lg:col-span-7 gap-4 lg:gap-5 h-full min-h-0">
            {/* 1. Hero Tile */}
            <div className="order-2 lg:order-none flex-1 min-h-0 flex flex-col">
              <HeroTile />
            </div>

            {/* 2 & 3. Bottom Split Row: Experiences & Projects */}
            <div className="order-3 lg:order-none grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 flex-1 min-h-0 items-stretch">
              <ExperienceCard />
              <ProjectsCard />
            </div>
          </div>

          {/* RIGHT SIDE (Span 5 on Desktop / Mobile ordering: Portrait first, then Buttons) */}
          <div className="contents lg:flex lg:flex-col lg:col-span-5 gap-4 lg:gap-5 h-full min-h-0">
            {/* 4. Portrait Card */}
            <div className="order-1 lg:order-none lg:flex-[2] min-h-[340px] sm:min-h-[400px] lg:min-h-0 flex flex-col">
              <PortraitCard />
            </div>

            {/* 5 & 6. Bottom Split Buttons: Contact & Download CV */}
            <div className="order-4 lg:order-none grid grid-cols-2 gap-4 lg:gap-5 lg:flex-1 min-h-0 items-stretch">
              <ContactButton />
              <DownloadCvButton />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Bar */}
      <Footer />
    </motion.div>
  );
}
