/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      Colors: {
        "Dark-100": "#1E2022",
        "Dark-200": "#1B262C",
        "Dark-300": "#52616B",
        "Primary-100": "#112D4E",
        "Primary-200": "#3F72AF",
        "Primary-300": "#0F4C75",
        "Primary-400": "#3282B8",
        "Secondary-100": "#C9D6DF",
        "Secondary-200": "#DBE2EF",
        "Secondary-300": "#F0F5F9",
      },
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
