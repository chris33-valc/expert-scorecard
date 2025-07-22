/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // ← covers everything in /app
    "./components/**/*.{js,ts,jsx,tsx}" // ← covers a future /components folder
  ],
  theme: { extend: {} },
  plugins: [],
};

