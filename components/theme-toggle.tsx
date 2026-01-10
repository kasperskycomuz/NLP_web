"use client";

import { motion } from 'framer-motion';
import { useTheme } from './theme-provider';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="relative flex items-center gap-2 rounded-full border border-slate-300/50 px-3 py-1 text-sm text-slate-700 hover:border-slate-400/80 dark:border-slate-600/50 dark:text-slate-100"
    >
      <motion.span
        layout
        className="flex h-6 w-12 items-center rounded-full bg-slate-200 dark:bg-slate-800"
      >
        <motion.span
          layout
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white shadow dark:bg-slate-200"
        />
      </motion.span>
      <span className="hidden sm:inline">{theme === 'light' ? '🌞' : '🌙'}</span>
    </button>
  );
}
