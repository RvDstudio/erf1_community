/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["var(--font-quicksand)"],
        flavors: ["Flavors", "cursive"],
      },
      keyframes: {
        "mesh-glitch": {
          "0%, 100%": {
            transform: "scale(1) rotate(0deg)",
            filter: "brightness(1)",
          },
          "25%": {
            transform: "scale(1.1) rotate(1deg) translate(1px, -1px)",
            filter: "brightness(1.05)",
          },
          "50%": {
            transform: "scale(1.1) rotate(2deg) translate(-1px, 1px)",
            filter: "brightness(0.95)",
          },
          "75%": {
            transform: "scale(1.1) rotate(1deg) translate(1px, 1px)",
            filter: "brightness(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "bounce-slow": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-5px)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        "pulse-slow": {
          "0%, 100%": {
            opacity: "0.3",
          },
          "50%": {
            opacity: "0.8",
          },
        },
        sway: {
          "0%, 100%": {
            transform: "rotate(-3deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
        },
        "spin-slow": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        drift: {
          "0%": {
            transform: "translateX(0px)",
          },
          "50%": {
            transform: "translateX(20px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
      },
      animation: {
        "mesh-glitch": "mesh-glitch 2s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "bounce-slow": "bounce-slow 2s infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        sway: "sway 4s ease-in-out infinite",
        "spin-slow": "spin-slow 20s linear infinite",
        drift: "drift 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
