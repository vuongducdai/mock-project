/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#eeaeca',
				secondary: '#94bbe9',
				another: 'rgb(238 174 202)',
				fb: '#f7f7f9',
				'blue-pastel': '#213352',
				'blue-dark': '#1e20ff',
				'blue-dark-hover': '#3e3e73',
				white: '#ffffff',
				warning: '#ff4b4c',
			},
		},
		screens: {
			xsMui: '0px',
			smMui: '600px',
			mdMui: '900px',
			lgMui: '1200px',
			xlMui: '1536px',
		},
	},
	plugins: [
		require('cssnano')({
			preset: 'default',
		}),
	],
};
