/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      backgroundImage:{
        home: "url(https://images6.alphacoders.com/609/609345.jpg)",
        pizza: "url(https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
        carne: "url(https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)",
        sushi: "url(https://images.unsplash.com/photo-1562802378-063ec186a863?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)",
        ondas: "url(/Ondas.png)"
      }
    },
  },
  plugins: [],
}