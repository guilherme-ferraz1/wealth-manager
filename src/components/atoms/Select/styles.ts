import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { theme } from '../../../styles';

export const Container = styled.View`
  flex-direction: column;
  padding-horizontal: 30px;
  width: 100%;
  margin-top: 50px;
`;

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 30,
    width: '100%',
    color: theme.colors.primary,
    borderColor: theme.colors.gray_dark,
    borderBottomWidth: 1,
    fontSize: 20,
    fontFamily: theme.family.regular,
    marginTop: 20,
  },
  inputAndroid: {
    height: 30,
    width: '100%',
    color: theme.colors.primary,
    borderColor: theme.colors.gray_dark,
    borderBottomWidth: 1,
    fontSize: 20,
    fontFamily: theme.family.regular,
    marginTop: 20,
  },
});
