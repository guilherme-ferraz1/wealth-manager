import styled from 'styled-components/native';
import { theme } from '../../../styles';

export const Container = styled.View`
  flex-direction: column;
  padding-horizontal: 30px;
  width: 100%;
  margin-top: 50px;
`;

export const TextInput = styled.TextInput`
  height: 30px;
  width: 100%;
  color: ${theme.colors.primary};
  border-color: ${theme.colors.gray_dark};
  border-bottom-width: 1px;
  font-size: ${theme.fontSize.big};
  font-family: ${theme.family.regular};
  margin-top: 20px;
`;
