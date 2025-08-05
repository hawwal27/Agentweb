// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
         primary: '#2563eb', // Blue
      accent: '#f97316',  // Orange
      background: '#f9fafb',
      foreground: '#111827',
        primary: "#1E40AF", // Replace with your actual brand color
        "primary-dark": "#1E3A8A",
        "primary-foreground": "#FFFFFF",
        accent: "#F59E0B",
        "accent-foreground": "#1F2937",
        card: "#FFFFFF",
        "muted-foreground": "#6B7280",
        secondary: "#F3F4F6",
        
      },
    },
  },
  plugins: [],
};

