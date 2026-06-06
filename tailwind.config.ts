import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0D10",
        graphite: "#12161C",
        slate: "#262E39",
        fog: "#E8E1D3",
        ivory: "#F7F3EB",
        gold: "#C7A54B",
        amber: "#E2C16F"
      },
      boxShadow: {
        soft: "0 16px 60px rgba(0, 0, 0, 0.16)",
        panel: "0 20px 80px rgba(4, 6, 11, 0.28)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top left, rgba(199,165,75,0.22), transparent 30%), radial-gradient(circle at top right, rgba(226,193,111,0.08), transparent 22%)"
      },
      animation: {
        float: "float 8s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
