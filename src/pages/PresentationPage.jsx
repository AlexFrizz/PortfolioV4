import React from 'react';
import SectionOverlay from '../components/SectionOverlay';
import SectionNav from '../components/SectionNav';
import EducationCard from '../components/EducationCard';
import SpecializationCard from '../components/SpecializationCard';
import SkillChip from '../components/SkillChip';

/**
 * PresentationPage displays the Academic Dossier & Study Pathway.
 */
export default function PresentationPage() {
  const skills = [
    'Algoritmi & Complessità',
    'Architettura RISC-V / x86',
    'Linux Kernel Internals',
    'Distributed Consensus (Raft)',
    'Human-Computer Interaction',
    'React & Modern Web Systems',
    'TypeScript & Tailwind CSS',
    'Container & Microservizi',
  ];

  return (
    <SectionOverlay>
      {/* Top Navigation */}
      <SectionNav currentPage="presentation" />

      {/* Page Content */}
      <div className="mt-6 space-y-6 text-left">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 rounded-full inline-block mb-3 border border-emerald-300/40 dark:border-emerald-700/40">
            ✦ Dossier Accademico
          </span>
          <h2 className="font-headline font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-950 dark:text-white">
            Presentazione &amp; Percorso di Studio
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
            Studente di Informatica appassionato di architetture distribuite, algoritmi avanzati e ingegneria del software moderno. Esploro la convergenza tra logica computazionale e interfaccia umana.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <EducationCard />
          <SpecializationCard />
        </div>

        {/* Skills & Courses */}
        <div className="pt-2">
          <h4 className="font-headline font-bold text-sm text-slate-950 dark:text-white mb-2.5">
            Corsi &amp; Competenze Chiave
          </h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <SkillChip key={idx} label={skill} />
            ))}
          </div>
        </div>
      </div>
    </SectionOverlay>
  );
}
