/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1A2938",
        secondary: "#0C131A",
        tertiary: "#D3D1CF",
      },
    },
  },
  plugins: [],
};
