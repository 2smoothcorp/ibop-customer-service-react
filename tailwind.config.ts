import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        border: '#CED4DA',
        primary: {
          '50': '#EDF7FF',
          '100': '#D7ECFF',
          '200': '#B8DFFF',
          '300': '#88CDFF',
          '400': '#50B1FF',
          '500': '#288EFF',
          '600': '#116DFF',
          '700': '#0A56EB',
          '800': '#0F46BE',
          '900': '#133F95',
          '950': '#11285C' // ASP Main
        },
        secondary: {
          '50': '#F2FBF9',
          '100': '#D4F3ED',
          '200': '#A8E7DA',
          '300': '#75D3C3',
          '400': '#43AD9E', // ASP Main
          '500': '#2F9D8F',
          '600': '#237E75',
          '700': '#20655F',
          '800': '#1E514D',
          '900': '#1D4441',
          '950': '#0B2827'
        },
        tertiary: {
          '50': '#F3F6FB',
          '100': '#E4EAF5',
          '200': '#CFDBEE',
          '300': '#AFC4E1',
          '400': '#88A4D2',
          '500': '#6C88C5',
          '600': '#5870B8',
          '700': '#4E5FA7',
          '800': '#44508A', // ASP Main
          '900': '#3A456E',
          '950': '#272C44'
        },
        info: {
          '50': '#F0FAFF',
          '100': '#E0F5FE',
          '200': '#BAE8FD',
          '300': '#7DD5FC',
          '400': '#38BCF8',
          '500': '#0EA5E9', // ASP Main
          '600': '#028AC7',
          '700': '#0370A1',
          '800': '#075E85',
          '900': '#0C506E',
          '950': '#083549'
        },
        success: {
          '50': '#ECFDF7',
          '100': '#D1FAEC',
          '200': '#A7F3DA',
          '300': '#6EE7BF',
          '400': '#34D39E',
          '500': '#10B981', // ASP Main
          '600': '#059666',
          '700': '#047852',
          '800': '#065F42',
          '900': '#064E36',
          '950': '#022C1E'
        },
        warning: {
          '50': '#FFF8EB',
          '100': '#FEEAC7',
          '200': '#FDD28A',
          '300': '#FCBB4D',
          '400': '#FBAB24',
          '500': '#F59E0B', // ASP Main
          '600': '#D98B06',
          '700': '#B47409',
          '800': '#92610E',
          '900': '#78510F',
          '950': '#452C03'
        },
        danger: {
          '50': '#FEF2F2',
          '100': '#FEE2E2',
          '200': '#FECACA',
          '300': '#FCA5A5',
          '400': '#F87171',
          '500': '#EF4444', // ASP Main
          '600': '#DC2626',
          '700': '#B91C1C',
          '800': '#991B1B',
          '900': '#7F1D1D',
          '950': '#450A0A'
        }
      }
    },
  },
  plugins: [],
};

export default config;