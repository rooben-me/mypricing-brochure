module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        1: "url('/img/1.png')",
        2: "url('/img/2.png')",
        3: "url('/img/3.png')",
        4: "url('/img/4.png')",
        5: "url('/img/5.png')",
        6: "url('/img/6.png')",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppings: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
