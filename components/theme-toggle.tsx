"use client";

import { motion } from 'framer-motion';
import { useTheme } from './theme-provider';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="relative flex items-center gap-2 rounded-full border border-slate-300/50 px-3 py-1 text-sm text-slate-700 transition-colors hover:border-slate-400/80 dark:border-slate-600/50 dark:text-slate-100"
    >
      <motion.div
        layout
        className="relative flex h-7 w-14 items-center rounded-full px-1"
        animate={{ backgroundColor: isDark ? '#1f2937' : '#e2e8f0' }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      >
        <motion.div
          layout
          className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/40 via-sky-400/30 to-emerald-400/30 opacity-0"
          animate={{ opacity: isDark ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        />
        <motion.div
          layout
          className="z-10 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200 dark:bg-slate-100 dark:ring-slate-500/40"
          animate={{ x: isDark ? 26 : 0, rotate: isDark ? 12 : 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        >
          <motion.span
            key={isDark ? 'moon' : 'sun'}
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.7, rotate: 10 }}
            transition={{ duration: 0.18 }}
          >
            {isDark ? '🌙' : '🌞'}
          </motion.span>
        </motion.div>
      </motion.div>
      <span className="hidden text-xs font-semibold uppercase tracking-wide sm:inline">{isDark ? 'Dark' : 'Light'}</span>
    </button>
  );
}
