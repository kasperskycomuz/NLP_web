import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './messages/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Manrope"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace']
      },
      colors: {
        aurora: {
          start: '#6366F1',
          end: '#A855F7',
          accent: '#14B8A6',
          surface: '#F8FAFC',
          dark: '#0F172A',
          text: '#334155',
          subtle: '#64748B'
        }
      },
      boxShadow: {
        glow: '0 10px 40px rgba(99, 102, 241, 0.25)'
      },
      backgroundImage: {
        'gradient-aurora': 'linear-gradient(135deg, #6366F1, #A855F7)',
        'gradient-lectures': 'linear-gradient(135deg, #6366F1, #8B5CF6)',
        'gradient-videos': 'linear-gradient(135deg, #EC4899, #F43F5E)',
        'gradient-practice': 'linear-gradient(135deg, #14B8A6, #22D3EE)',
        'gradient-tests': 'linear-gradient(135deg, #F59E0B, #EAB308)',
        'gradient-syllabus': 'linear-gradient(135deg, #10B981, #34D399)',
        'gradient-authors': 'linear-gradient(135deg, #3B82F6, #0EA5E9)'
      }
    }
  },
  plugins: []
};

export default config;
