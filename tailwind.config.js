/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        headline: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        surface: {
          DEFAULT: '#f7f9fb',
          dim: '#d8dadc',
          bright: '#f7f9fb',
          'container-lowest': '#ffffff',
          'container-low': '#f2f4f6',
          container: '#eceef0',
          'container-high': '#e6e8ea',
          'container-highest': '#e0e3e5',
        },
        ink: '#121417',
        mint: {
          DEFAULT: '#84E8C2',
          light: '#90e8bf',
          dark: '#0e3b2e',
          cta: '#7beba8',
          'cta-hover': '#6ee39d',
          soft: '#abf4ce',
        },
        lilac: {
          DEFAULT: '#D1B3E2',
          light: '#f1e6fa',
          dark: '#1a1528',
        },
        canary: {
          DEFAULT: '#FFF194',
          card: '#fde989',
          dark: '#28220a',
        },
        cyan: {
          DEFAULT: '#8CECE8',
        },
        coral: {
          DEFAULT: '#FFA07A',
        },
        slate_cloud: '#CFDCE3',
      },
      borderRadius: {
        bento: '28px',
        'bento-sm': '20px',
        'bento-lg': '32px',
      },
      spacing: {
        gutter: '1.25rem',
        'gutter-lg': '1.5rem',
      },
    },
  },
  plugins: [],
};
