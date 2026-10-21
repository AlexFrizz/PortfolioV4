import React from 'react';
import { motion } from 'framer-motion';
import SectionNav from '../components/SectionNav';
import FeaturedProjectCard from '../components/FeaturedProjectCard';
import ProjectItemCard from '../components/ProjectItemCard';

/**
 * ProjectsPage displays featured systems and prototype builds.
 */
export default function ProjectsPage() {
  const secondaryProjects = [
    {
      title: 'EchoCode Engine (Placeholder)',
      stack: 'Rust • WebAssembly • Monaco',
      description:
        'Micro-ambiente di esecuzione e parsing di codice direttamente nel browser senza dipendenze server, garantendo isolamento di memoria e sicurezza.',
      linkText: 'Esplora sorgenti',
      linkUrl: '#',
    },
    {
      title: 'UniLife Campus Companion (Placeholder)',
      stack: 'React Native • TypeScript • Supabase',
      description:
        'Applicazione per studenti per pianificare orari delle lezioni, monitorare aule libere e condividere appunti in modo collaborativo.',
      linkText: 'Vedi prototipo live',
      linkUrl: '#',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-slate-950/60 backdrop-blur-md p-3 sm:p-5 md:p-6 flex items-center justify-center overflow-y-auto"
    >
      <motion.div
        initial={{ y: 35, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="relative w-full max-w-4xl mx-auto my-auto bg-white dark:bg-[#101522] rounded-[32px] border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 md:p-10 shadow-2xl text-left max-h-[92vh] overflow-y-auto no-scrollbar"
      >
        {/* Top Navigation */}
        <SectionNav currentPage="projects" />

        {/* Page Content */}
        <div className="mt-6 space-y-6 text-left">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 rounded-full inline-block mb-3 border border-amber-300/40 dark:border-amber-700/40">
              ✦ Portfolio Code &amp; Builds
            </span>
            <h2 className="font-headline font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-950 dark:text-white">
              Progetti Elencati e Descritti
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2.5">
              Applicazioni reali rilasciate, prototipi web e architetture algoritmiche ad alte prestazioni.
            </p>
          </div>

          {/* Featured Project */}
          <FeaturedProjectCard
            category="Featured System"
            title="HealthAI Diagnostics & Patient Stream (Placeholder)"
            tags={['Python / C++', 'FastAPI', 'WebSocket']}
            description="Piattaforma di calcolo e triage per dati clinici complessi. Realizzata per ottimizzare il throughput di referti e telemetrie mediche in tempo reale, combinando modelli predittivi e caching a bassissima latenza. Testo placeholder."
            stats={[
              { value: '94%', label: 'Telemetry Precision' },
              { value: '7.2M', label: 'Packets Elaborati' },
              { value: '04:50', label: 'Reach Window' },
            ]}
          />

          {/* Secondary Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {secondaryProjects.map((proj, idx) => (
              <ProjectItemCard
                key={idx}
                index={idx}
                title={proj.title}
                stack={proj.stack}
                description={proj.description}
                linkText={proj.linkText}
                linkUrl={proj.linkUrl}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
