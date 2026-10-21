import React from 'react';
import { motion } from 'framer-motion';
import SectionNav from '../components/SectionNav';
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';

/**
 * ContactPage displays direct contact channels and an interactive message form.
 */
export default function ContactPage() {
  const networks = [
    { name: 'GitHub', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Telegram', href: '#' },
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
        <SectionNav currentPage="contact" />

        {/* Page Content: 12-Column Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-8 text-left items-start">
          {/* Left Column: Direct Info & Social */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 rounded-full inline-block mb-3 border border-emerald-300/40 dark:border-emerald-700/40">
                ✦ Canali Diretti
              </span>
              <h2 className="font-headline font-extrabold text-2xl sm:text-3xl text-slate-950 dark:text-white">
                Parliamo del tuo prossimo progetto
              </h2>
              <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2">
                Aperto a proposte di collaborazione, progetti open-source o iniziative di sviluppo frontend e sistemi distribuiti.
              </p>
            </div>

            {/* Contact Channels */}
            <div className="space-y-3">
              <ContactCard
                icon="mail"
                label="Email"
                value="placeholder@example.com"
                href="mailto:placeholder@example.com"
              />
              <ContactCard
                icon="call"
                label="Telefono"
                value="+39 000 000 0000"
                href="tel:+390000000000"
              />
              <ContactCard
                icon="location_on"
                label="Posizione"
                value="Milano, Italia (Remoto / Ibrido)"
                href={null}
              />
            </div>

            {/* Social Network Links */}
            <div>
              <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                Network
              </div>
              <div className="flex flex-wrap gap-2">
                {networks.map((net, idx) => (
                  <a
                    key={idx}
                    href={net.href}
                    onClick={(e) => {
                      if (net.href === '#') {
                        e.preventDefault();
                        alert(`Link social ${net.name} (Placeholder)`);
                      }
                    }}
                    className="px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-mono font-semibold text-slate-800 dark:text-slate-200 transition-colors"
                  >
                    {net.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
