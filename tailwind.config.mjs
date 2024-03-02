/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    colors: {
      'red' : {
          500: '#fb4934',
          700: '#cc241d',
      },

      'green' : {
          500: '#b8bb26',
          700: '#98971a',
      },

      'yellow' : {
          500: '#fabd2f',
          700: '#d79921',
      },
      'blue' : {
          500: '#83a598',
          700: '#458588',
      },
      'purple' : {
          500: '#d3869b',
          700: '#b16286',
      },
      'mint' : {
          500: '#8ec07c',
          700: '#689d6a',
      },
      'gray' : {
          500: '#fbf1c7',
          700: '#a89984',
      },
      'black' : {
          500: '#928374',
          700: '#3c3836',
      },

	  'white' : '#EEEEEE',

      'foreground' : '#ebdbb2', 

      'background' : '#282828',

    },

    extend: {
		fontFamily: {
			jetbrains: ["JetBrains Mono"]
		},

	},
  },
  plugins: [],
}

