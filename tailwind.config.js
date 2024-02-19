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
          50: '#f4f6fb',
          100: '#e7edf7',
          200: '#cad8ed',
          300: '#9cb7dd',
          400: '#6691ca',
          500: '#4374b4',
          600: '#325b97',
          700: '#29497b',
          800: '#253f67',
          900: '#243757',
          950: '#182339',
          DEFAULT: '#243757',
        },
        'fortress': {
          50: '#f4f6fb',
          100: '#e7edf7',
          200: '#cad8ed',
          300: '#9cb7dd',
          400: '#6691ca',
          500: '#4374b4',
          600: '#325b97',
          700: '#29497b',
          800: '#253f67',
          900: '#243757',
          950: '#182339',
          DEFAULT: '#243757',
        },
        'blood': '#243757',
        'parchment': {
          50: '#f8f7f2',
          100: '#ece9d9',
          200: '#dad5b7',
          300: '#c2b787',
          400: '#b3a36c',
          500: '#a78e59',
          600: '#93764c',
          700: '#7b5e42',
          800: '#664e3a',
          900: '#554132',
          950: '#2f2219',
          DEFAULT: '#dad5b7',
        },
        'scroll': {
          50: '#f8f7f4',
          100: '#efede5',
          200: '#ded9ca',
          300: '#c2b79b',
          400: '#b3a384',
          500: '#a48e6b',
          600: '#977e5f',
          700: '#7e6850',
          800: '#675545',
          900: '#54463a',
          950: '#2c241e',
          DEFAULT: '#c2b79b',
        },
        'tome': {
          50: '#f4f4f2',
          100: '#e4e3dd',
          200: '#cbc9bd',
          300: '#ada997',
          400: '#95907a',
          500: '#86806c',
          600: '#736b5b',
          700: '#665e52',
          800: '#514a42',
          900: '#47413c',
          950: '#282420',
          DEFAULT: '#665e52', 
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    radialGradientPlugin,
  ],
}