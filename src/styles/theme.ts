import { scaleFont } from './mixins';

const theme = {
  colors: {
    primary: '#1A012E',
    secondary: '#1282A2',
    white: '#FFFFFF',
    black: 'rgba(0,0,0,0.7)',
    success: '#3adb76',
    warning: '#ffae00',
    gray_light: '#e6e6e6',
    gray_medium: '#cacaca',
    gray_dark: '#8a8a8a',
  },
  family: {
    regular: 'Avenir-Next-Regular',
    bold: 'Avenir-Next-Bold',
  },
  fontSize: {
    large: scaleFont(22),
    big: scaleFont(20),
    medium: scaleFont(18),
    small: scaleFont(16),
    ultra_small: scaleFont(12),
  },
};

export default theme;
