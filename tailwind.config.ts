import type { Config } from 'tailwindcss';
import bg from "./src/bg_img.svg";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'new-bg': 'radial-gradient(92.19% 89.74% at 32.27% 91.27%, rgba(31, 169, 17, 0.81) 17.21%, #2F15D0 64.58%, rgba(0, 0, 0, 0.00) 100%);',
        'dark-bg': 'linear-gradient(270deg, rgba(0, 0, 0, 0.50) 0.73%, rgba(0, 0, 0, 0.00) 21.93%, rgba(0, 0, 0, 0.00) 77.77%, rgba(0, 0, 0, 0.50) 100%);'
      },
    },
  },
  plugins: [],
};

export default config;
