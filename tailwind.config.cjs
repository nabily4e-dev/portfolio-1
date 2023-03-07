/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			primary: 'Orbitron',
			secondary: 'Rajdhani',
			tertiary: 'Aldrich',
		},
		container: {
			padding: {
				DEFAULT: '15px',
			},
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '960px',
			xl: '1200px',
		},
		extend: {
			colors: {
				primary: '#0a0a0a',
				accent: '#8EC5CA',
			},
			backgroundImage: {
				site: "url('./assets/Site-Page.png')",
				about: "url('./assets/about.png')",
				services: "url('./assets/services.png')",
			},
		},
	},
	plugins: [],
}