import styled from 'styled-components/native';
import { theme } from '../../../styles';

export const Button = styled.TouchableOpacity`
  width: 85%;
  height: 8%;
  background-color: ${theme.colors.primary};
  border-radius: 40px;
  align-self: center;
  position: absolute;
  bottom: 20px;
  align-items: center;
  justify-content: center;
`;
