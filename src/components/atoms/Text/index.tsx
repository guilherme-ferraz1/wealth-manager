import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import * as S from './styles';

export type Color = 'primary' | 'secondary' | 'black' | 'white';

export type CustomTextProps = {
  family?: 'regular' | 'bold';
  color?: Color;
  size?: 'ultra_small' | 'small' | 'medium' | 'big' | 'large';
  children: string;
  style?: StyleProp<TextStyle>;
};

const Text: React.FC<CustomTextProps> = ({
  children,
  family = 'regular',
  color = 'black',
  size = 'medium',
  style,
  ...props
}): JSX.Element => {
  return (
    <S.Text family={family} color={color} size={size} style={style} {...props}>
      {children}
    </S.Text>
  );
};

export default Text;
