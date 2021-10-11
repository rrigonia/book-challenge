// theme.js
// 1. import `extendTheme` function
import { extendTheme, theme as base } from '@chakra-ui/react';
// 2. Add your color mode config
const config = {
	fontSizes: {
		...base.fontSizes,
		'2xl': '27px',
		xl: '24px',
		lg: '18px',
		md: '14px',
		sm: '10px'
	},
	colors: {
		brand: {
			50: 'green'
		}
	},
	initialColorMode: 'light',
	useSystemColorMode: false,
	fonts: {
		body: 'SF Pro Display'
	}
};
// 3. extend the theme
const theme = extendTheme(config);
export default theme;
