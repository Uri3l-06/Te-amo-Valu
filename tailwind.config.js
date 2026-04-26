/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-soft': 'var(--color-surface-soft)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text)',
        'text-strong': 'var(--color-text-strong)',
        muted: 'var(--color-muted)',
        border: 'var(--color-border)',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        paper: '0 20px 50px rgba(207, 144, 116, 0.12)',
        float: '0 18px 40px rgba(96, 51, 40, 0.12)',
      },
      backgroundImage: {
        'blush-glow': 'radial-gradient(circle at top, rgba(229, 173, 158, 0.26), transparent 52%)',
      },
    },
  },
  plugins: [],
}
