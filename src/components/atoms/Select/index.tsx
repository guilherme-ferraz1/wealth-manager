import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Text from '../Text';
import * as S from './styles';
import { CustomSelect } from './types';

const Select: React.FC<CustomSelect> = ({
  onChange,
  title,
  placeHolder,
  options,
}): JSX.Element => {
  return (
    <S.Container>
      <Text family="bold" size="large">
        {title}
      </Text>
      <RNPickerSelect
        style={S.pickerSelectStyles}
        items={options}
        onValueChange={(item: string) => onChange(item)}
        placeholder={placeHolder}
      />
    </S.Container>
  );
};

export default Select;
