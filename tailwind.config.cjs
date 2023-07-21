/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "radial-gradient(rgba(255, 255, 255, 0.1) 9%, transparent 9%)",
        // pattern:
        //   "linear-gradient(to right, transparent 9%, rgba(255, 255, 255, 0.1) 9%), linear-gradient(to bottom, transparent 9%, rgba(255, 255, 255, 0.1) 9%)",
      },
      backgroundSize: {
        "pattern-size": "12vmin 12vmin",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"]
  }
};

module.exports = config;
