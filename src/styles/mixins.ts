import { Dimensions, PixelRatio } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const guidelineBaseWidth = 350;

export const scaleSize = (size: number): string =>
  `${(WINDOW_WIDTH / guidelineBaseWidth) * size}px`;

export const scaleFont = (size: number): string =>
  `${size * PixelRatio.getFontScale()}px`;
