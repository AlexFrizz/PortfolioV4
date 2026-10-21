import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

/**
 * SectionNav component for modal-style page headers.
 * Provides Back to Bento Grid button, section navigation pills with active states, and a close button.
 */
export default function SectionNav({ currentPage }) {
  const navigate = useNavigate();

  const navItems = [
    { id: 'presentation', label: 'Percorso', path: '/presentation' },
    { id: 'experiences', label: 'Esperienze', path: '/experiences' },
    { id: 'projects', label: 'Progetti', path: '/projects' },
    { id: 'contact', label: 'Contatti', path: '/contact' },
  ];

  const activeClass =
    'px-3.5 py-1.5 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-semibold shadow-sm text-xs font-headline';
  const inactiveClass =
    'px-3.5 py-1.5 rounded-full hover:bg-white/80 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-all text-xs font-headline font-medium';

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-200/80 dark:border-slate-800">
      {/* Back Button */}
      <button
        type="button"
        onClick={() => navigate('/')}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-headline font-semibold transition-colors cursor-pointer"
        aria-label="Torna alla Bento Grid"
      >
        <span className="material-symbols-rounded text-[1.1rem]">arrow_back</span>
        <span>Torna alla Bento Grid</span>
      </button>

      {/* Navigation Pills */}
      <nav aria-label="Sezioni del portfolio" className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800/80 rounded-full">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className={currentPage === item.id ? activeClass : inactiveClass}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Close button */}
      <button
        type="button"
        onClick={() => navigate('/')}
        className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
        aria-label="Chiudi finestra"
      >
        <span className="material-symbols-rounded text-lg">close</span>
      </button>
    </div>
  );
}
