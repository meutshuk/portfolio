const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        move: "move 10s ease-in-out infinite alternate",
      },
      keyframes: {
        move: {
          "50%": { transform: "translateY(-56px)" },
          "100%": { transform: "translateY(-112deg)" },
          "150%": { transform: "translateY(-168deg)" },
        },
      },
      container: {},
    },
  },
  plugins: [require("flowbite/plugin")],
};
