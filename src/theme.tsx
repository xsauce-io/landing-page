import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
import '@fontsource/inter';
import '@fontsource/space-grotesk';

const fonts = {
	//mono: `'Menlo', monospace`,
	heading: `'Space Grotesk', sans-serif`,
	body: `'inter', monospace`,
};

const config: ThemeConfig = {
	initialColorMode: 'system',
	useSystemColorMode: false,
};
const breakpoints = createBreakpoints({
	xs: '0em', // too small
	sm: '30em', //mobile
	md: '48em', //tablet
	lg: '64em', //laptop
	xl: '80em', //desktop
	'2xl': '96em', // Extra large
});

const theme = extendTheme({
	semanticTokens: {
		colors: {
			text: {
				default: '#16161D',
				_dark: '#ade3b8',
			},
			heroGradientStart: {
				default: '#7928CA',
				_dark: '#e3a7f9',
			},
			heroGradientEnd: {
				default: '#FF0080',
				_dark: '#fbec8f',
			},
		},
		radii: {
			button: '12px',
		},
	},
	fontSizes: {
		xs: '12px',
		sm: '14px',
		md: '16px',
		lg: '18px',
		xl: '20px',
		'2xl': '24px',

		// Add more font sizes as needed
	  },
	colors: {
		black: '#16161D',
		brand: {
			100: '#2FFD76',
			200: '#0C1516',
			300: '#EFF1f3',
			400: '#fff',
			500: '#676e6f',
			600: '#778282',
			700: '#D3D4D8',
			800: '#F9FFE8',
			900: '#F5F5F5',
			1000: '#748282',
			1100: '#999999'
		},
	},

	styles: {
		global: {
			'@keyframes marquee': {
				'0%': { transform: 'translateX(0%)' },
				'100%': { transform: 'translateX(-50%)' },
			},
			body: {
				bg: '#16161D',
			},
		},
	},
	fonts,
	breakpoints,
	config,
	Svg: {
		// Ensure necessary SVG props are not filtered out
		shouldForwardProp: (prop: string) => prop !== 'focusable',
	},
	components: {
		Input: {
		  defaultProps: {
			placeholderTextColor: 'white',
		  },
		},
	  },
});

export default theme;
