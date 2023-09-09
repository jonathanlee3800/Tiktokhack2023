module.exports = {
  content: ["./*/**.{js,jsx}"],
  theme: {
    extend: {
      "colors":{
        "red-tiktok":"#EE1D52",
        "white":"#FFFFFF"
      }
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
