/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const radialGradientPlugin = plugin(
  function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        // map to bg-radient-[*]
        'bg-radient': value => ({
          'background-image': `radial-gradient(${value},var(--tw-gradient-stops))`,
        }),
      },
      { values: theme('radialGradients') }
    )
  },
  {
    theme: {
      radialGradients: _presets(),
    },
  }
)

/**
 * utility class presets
 */
function _presets() {
  const shapes = ['circle', 'ellipse'];
  const pos = {
    c: 'center',
    t: 'top',
    b: 'bottom',
    l: 'left',
    r: 'right',
    tl: 'top left',
    tr: 'top right',
    bl: 'bottom left',
    br: 'bottom right',
  };
  let result = {};
  for (const shape of shapes)
    for (const [posName, posValue] of Object.entries(pos))
      result[`${shape}-${posName}`] = `${shape} at ${posValue}`;

  return result;
}

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f1f9fe',
          100: '#e2f2fc',
          200: '#bee6f9',
          300: '#85d2f4',
          400: '#45bbeb',
          500: '#1da2da',
          600: '#0f83ba',
          700: '#0e6896',
          800: '#0f587d',
          900: '#134967',
          950: '#0c2f45',
          DEFAULT: '#F1F9FE',
        },
        'base': '#F1F9FE',
        'tailwind': {
          50: '#f1f9fe',
          100: '#e1f2fd',
          200: '#bde5fa',
          300: '#82d1f7',
          400: '#36b7f0',
          500: '#16a2e1',
          600: '#0982c0',
          700: '#09679b',
          800: '#0c5880',
          900: '#10496a',
          950: '#0a2f47',
          DEFAULT: '#36b7f0',
        },
        'vue': {
          50: '#eefbf4',
          100: '#d6f5e3',
          200: '#b1e9cb',
          300: '#7ed7ad',
          400: '#3fb27f',
          500: '#26a370',
          600: '#18835a',
          700: '#13694a',
          800: '#12533c',
          900: '#0f4533',
          950: '#07271c',
          DEFAULT: '#3FB27F',
        },
        'laravel': {
          50: '#fef3f2',
          100: '#ffe3e1',
          200: '#ffccc9',
          300: '#fea9a3',
          400: '#fb776e',
          500: '#f23b2f',
          600: '#e02e22',
          700: '#bd2218',
          800: '#9c2018',
          900: '#81211b',
          950: '#460d09',
          DEFAULT: '#F23B2F', 
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    radialGradientPlugin,
  ],
}