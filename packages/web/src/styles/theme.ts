import { quicksand } from './fonts';

export default {
  border: {
    radius: '10px'
  },
  box: {
    shadow: '0 8px 8px rgba(0, 0, 0, 0.08)'
  },
  p: {
    classes: {
      small: 'p_responsive_small',
      large: 'p_responsive_large'
    }
  },
  font: {
    family: quicksand.style.fontFamily,
    lineHeights: {
      small: '1.5',
      medium: '1.8',
      large: '2.0',
      xlarge: '2.2'
    },
    weight: {
      extraLight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800
    },
    style: {
      italic: 'italic',
      normal: 'normal'
    },
    sizes: {
      small: '8px',
      xxsmall: '12px',
      xsmall: '10px',
      medium: '15px',
      large: '16px',
      xlarge: '18px',
      xxlarge: '22px',
      huge: '28px',
      xhuge: '32px',
      xxhuge: '44px',
      xxxhuge: '48px',
      mega: '64px',
      xmega: '72px',
      xxmega: '88px'
    }
  },
  colors: {
    white: '#fff',
    gray_50: '#f0efeb',
    gray_100: '#d1d1d1',
    gray_200: '#677294',
    gray_300: '#343a40',
    purple_100: '#7F57DF',
    purple_300: '#5855E9',
    primary: '#6EC1E4',
    cyan_400: '#858da8',
    black: '#2c3e50',
    blue_700: '#1D1A4E',
    red_400: '#ff0000'
  },
  gaps: {
    small: '6px',
    xsmall: '10px',
    xxxsmall: '12px',
    medium: '20px',
    large: '40px',
    xlarge: '80px',
    xxlarge: '160px'
  },
  transition: {
    default: 'all 0.2s linear'
  },
  breakpoints: {
    mobile_xl: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptop_l: '1440px',
    widscreen: '1920px'
  }
} as const;
