module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#9EC9E2',
        'dark-blue': '#7FB0CC',
        'deep-azure': "#415A80"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'banner-dashboard': "url('/src/assets/img/banner.png')"
      },
      gridTemplateColumns: {
        'card-class': 'repeat(auto-fill,minmax(320px,1fr))',
      },
      gridAutoRows: {
        'card-class': 'minmax(300px,320px)'
      }
    },
  },
  plugins: [],
}
