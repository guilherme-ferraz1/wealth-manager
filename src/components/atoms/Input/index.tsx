import React from 'react';
import { theme } from '../../../styles';
import Text from '../Text';
import * as S from './styles';
import { CustomTextInputProps } from './types';

const Input: React.FC<CustomTextInputProps> = ({
  keyboardType = 'default',
  maxLength,
  placeholder,
  autoCapitalize = 'none',
  title,
  onChangeText,
  value,
}): JSX.Element => {
  return (
    <S.Container>
      <Text family="bold" size="large">
        {title}
      </Text>
      <S.TextInput
        keyboardType={keyboardType}
        blurOnSubmit
        autoCorrect={false}
        maxLength={maxLength}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.gray_medium}
        autoCapitalize={autoCapitalize}
        onChangeText={onChangeText}
        value={value}
      />
    </S.Container>
  );
};

export default Input;
