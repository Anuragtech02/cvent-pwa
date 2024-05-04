/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#ccd82f'
				}
			},
			screens: {
				'3xl': '1920px',
				'4xl': '2560px',
				'5xl': '3840px'
			}
		}
	},
	plugins: []
};
