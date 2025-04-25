import lineClamp from "@tailwindcss/line-clamp";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  plugins: [lineClamp],
  darkMode: false,
};
