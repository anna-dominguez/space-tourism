/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      heanding1: "150px",
      heading2: "100px",
      heading3: "56px",
      heading4: "32px",
      heading5: "28px",
      subhead: "14px",
      nav: "16px",
      navS: "14px",
      bodyM: "20px",
      body: "18px",
      bodyS: ["15px", "25px"],
    },
    colors: {
      black: "#0B0D17",
      blue: "#D0D6F9",
      white: "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
}
