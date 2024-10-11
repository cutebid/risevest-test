import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        teal: "#07969E",
        tint_black:'#4A5050',
        teal_4:'#ECFEFE',
        orange_4:'#FFF4F0',
        indigo_4:'#F6F2FF',
        teal_3: '#A0DDE2'
      },
      animation: {
        bounceUpDown: 'bounceUpDown 2s infinite',
        bounceLeftRight: 'bounceLeftRight 2s infinite',
        bounceDiagonal: 'bounceDiagonal 2s infinite',
        bounceCenter: 'bounceCenter 2s infinite',
        bounceInPlace: 'bounceInPlace 2s infinite',
      },
      screens: {
				medium: "960px",
			},
    },
  },
  plugins: [],
};
export default config;
