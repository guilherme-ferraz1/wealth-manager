import React from 'react';
import * as S from './styles';
import { CustomTextProps } from './types';

const Text: React.FC<CustomTextProps> = ({
  children,
  family = 'regular',
  color = 'primary',
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
