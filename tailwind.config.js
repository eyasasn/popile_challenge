/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'button-color': '#F9FAFF',
        'button-text-color': '#827F97',
        'button-active-color': '#965FFF'
      },
      height: {
        '52px': '45px',
      },
      width: {
        '668px': '109px'
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    }

  },
  plugins: [],
}

