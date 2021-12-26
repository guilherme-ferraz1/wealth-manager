import { StyleProp, TextInputProps } from 'react-native';

export type CustomTextInputProps = {
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  style?: StyleProp<TextInputProps>;
  placeholder: string;
  keyboardType?: 'default' | 'number-pad';
  maxLength?: number;
  title: string;
  onChangeText: (val: string) => void;
  value?: string;
};
