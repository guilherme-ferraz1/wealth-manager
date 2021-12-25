import { StyleProp, TextStyle } from 'react-native';

export type Color = 'primary' | 'secondary' | 'black' | 'white';

export type CustomTextProps = {
  family?: 'regular' | 'bold';
  color?: Color;
  size?: 'ultra_small' | 'small' | 'medium' | 'big' | 'large';
  children: string;
  style?: StyleProp<TextStyle>;
};
