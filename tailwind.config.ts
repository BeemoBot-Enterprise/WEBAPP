import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { max: "599px" },
        tablet: "600px",
        "max-laptop": { max: "1023px" },
        laptop: "1024px",
        "max-desktop": { max: "1279px" },
        desktop: "1280px",
      },
      backgroundColor: {
        discord: "#5865F2",
        "discord-hover": "#8891f2",
      },
      borderRadius: {
        "1": "4px",
        "2": "8px",
        "3": "16px",
        "4": "24px",
        6: "32px",
        8: "40px",
      },
    },
  },
  plugins: [],
} satisfies Config;
