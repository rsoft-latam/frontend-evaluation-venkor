/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        open: ['"Open Sans"', 'sans-serif'],
      },
      fontSize: {
        menu: '16px',
        heading: '24px',
        tableHeader: '12px',
        tableCell: '14px',
        tableCellBold: '16px',
      },
      colors: {
        menu: '#FFFFFF',
        heading: '#182C62',
        tableText: '#4B5C68',
        footerText: '#4B5C68',
        headerBg: '#025FEB',
        tableHeaderBg: '#E4EDF2',
        tableBorder: '#E4EDF2',
        rowEven: '#F6F7F7',
        footerBg: '#F6F7F7',
      },
    },
  },
  plugins: [],
}

