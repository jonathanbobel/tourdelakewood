import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: { DEFAULT: '#E25A28' },
				teal: { DEFAULT: '#1C8282' },
				light: { DEFAULT: '#F5F5F5' },
				dark: { DEFAULT: '#111111' },
				accent: { DEFAULT: '#E25A28' }
			},
			fontFamily: {
				sans: ['Raleway', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};

