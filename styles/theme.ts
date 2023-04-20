import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { Inter, Montserrat } from 'next/font/google';

export const montserrat = Montserrat({ subsets: ['latin'] });
export const inter = Inter({
  subsets: ['latin'],
  style: ['normal'],
  fallback: ['system-ui', 'sans-serif'],
  weight: ['400', '500', '600', '700', '800'],
});

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: 'brand.black',
      },
    },
  },
  fonts: {
    heading: `${montserrat.style.fontFamily}`,
    body: `${inter.style.fontFamily}`,
  },
  colors: {
    brand: {
      white: 'white',
      black: 'black',
      semiblack: '#0F1137',
      darkgray: '#718096',
      lightgray: '#F5F6F8',
      primary: '#1A75E8',
      aliceblue: '#F0F8FF',
      cardColor: '#f7f4ff',
    },
  },
  config,
});

export default theme;
