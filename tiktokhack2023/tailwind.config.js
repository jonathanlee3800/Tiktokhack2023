module.exports = {
  content: [
    'App.js',
    './screens/**/*.{html,js}',
    './components/**/*.{html,js}'
    ],
  theme: {
    extend: {
      "colors":{
        "red-tiktok":"#EE1D52",
        "white":"#FFFFFF",
      }
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
