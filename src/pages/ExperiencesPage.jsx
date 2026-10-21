import React from 'react';
import { motion } from 'framer-motion';
import SectionNav from '../components/SectionNav';
import ExperienceItem from '../components/ExperienceItem';

/**
 * ExperiencesPage displays the milestones, internships, and work history.
 */
export default function ExperiencesPage() {
  const experiences = [
    {
      role: 'Frontend & UI Engineering Intern (Placeholder)',
      period: '2024 — Presente',
      organization: 'Tech Studio Milan • Milano, Italia',
      description:
        'Sviluppo di componenti reattivi modulari con Tailwind CSS, TypeScript e framework moderni. Ottimizzazione delle prestazioni con Web Vitals oltre il 95% e pipeline CI/CD automatiche. Dati e testi puramente placeholder.',
      badgeTheme: 'emerald',
    },
    {
      role: 'Ricercatore Studente — Lab Sistemi Distribuiti (Placeholder)',
      period: '2023 — 2024',
      organization: 'Laboratorio Universitario di Informatica',
      description:
        'Analisi di algoritmi di consenso (Raft, Paxos) in ambienti ad alta latenza. Creazione di benchmark grafici automatizzati in Python per misurare i tassi di collisione e l\'affidabilità nei cluster. Testo descrittivo placeholder.',
      badgeTheme: 'slate',
    },
    {
      role: '1° Posto — Hackathon Nazionale Sviluppo Web (Placeholder)',
      period: 'Maggio 2023',
      organization: 'Tech Innovation Challenge',
      description:
        'Caposquadra nello sviluppo di un\'applicazione web in 36 ore per il supporto alla comunità, premiata per l\'usabilità accessibile e la solidità dell\'architettura client-server.',
      badgeTheme: 'amber',
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
        <SectionNav currentPage="experiences" />

        {/* Page Content */}
        <div className="mt-6 space-y-6 text-left">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 bg-purple-100 dark:bg-purple-950/80 text-purple-800 dark:text-purple-300 rounded-full inline-block mb-3 border border-purple-300/40 dark:border-purple-700/40">
              ✦ Milestones &amp; Ruoli
            </span>
            <h2 className="font-headline font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-950 dark:text-white">
              Esperienze Personali e Lavorative
            </h2>
            <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2.5">
              Sintesi del percorso formativo e professionale, stage in contesti tecnologici e progetti di ricerca.
            </p>
          </div>

          {/* List of Experiences */}
          <div className="space-y-4 pt-1">
            {experiences.map((exp, idx) => (
              <ExperienceItem
                key={idx}
                index={idx}
                role={exp.role}
                period={exp.period}
                organization={exp.organization}
                description={exp.description}
                badgeTheme={exp.badgeTheme}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
