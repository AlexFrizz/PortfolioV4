import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import PresentationPage from './pages/PresentationPage';
import ExperiencesPage from './pages/ExperiencesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

/**
 * App — Overlay-based routing architecture.
 *
 * The Landing Page (HomePage) is ALWAYS rendered in the background.
 * Section pages mount as animated overlays on top, preserving the bento
 * grid as a blurred backdrop behind the active section card.
 */
export default function App() {
  const location = useLocation();
  const isOverlayOpen = location.pathname !== '/';

  return (
    <>
      {/* ── Background: Landing Page (always rendered) ─────────────── */}
      <HomePage frozen={isOverlayOpen} />

      {/* ── Foreground: Animated section overlay ───────────────────── */}
      <AnimatePresence mode="wait">
        {location.pathname === '/presentation' && (
          <PresentationPage key="presentation" />
        )}
        {location.pathname === '/experiences' && (
          <ExperiencesPage key="experiences" />
        )}
        {location.pathname === '/projects' && (
          <ProjectsPage key="projects" />
        )}
        {location.pathname === '/contact' && (
          <ContactPage key="contact" />
        )}
      </AnimatePresence>
    </>
  );
}
