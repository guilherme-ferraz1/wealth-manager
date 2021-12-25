import React from 'react';
import { CustomButton } from './types';
import * as S from './styles';
import Text from '../Text';

const Button: React.FC<CustomButton> = ({ onChange, title }): JSX.Element => {
  return (
    <S.Button onPress={() => onChange()}>
      <Text size="large" color="white">
        {title}
      </Text>
    </S.Button>
  );
};

export default Button;
