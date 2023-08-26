module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        backgroundImage:{
          'hero-bg':"url('../src/assets/codeonwebBG.jpg')"
        }
      },
      screens: {
        'desktop': {'max':'1280px'},
        'tab': {'max':'850px'},
        'mobile': {'max':'500px'}
      },
    },
    plugins: [],
  };