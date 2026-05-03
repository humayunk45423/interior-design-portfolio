module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['\"PT Serif\"', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 50px 0 rgb(30 58 138 / 0.1)',
      },
      colors: {
        accent: '#00d4ff',
        luxury: '#7c3aed',
      }
    },
  },
  plugins: [],
}
