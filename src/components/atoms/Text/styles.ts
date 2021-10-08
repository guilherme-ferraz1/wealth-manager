import styled, { css } from 'styled-components/native';
import { CustomTextProps } from '.';
import { theme } from '../../../styles';

export const Text = styled.Text<CustomTextProps>`
  ${({ family, color, size }) => css`
    font-size: ${theme.fontSize[size!]};
    color: ${theme.colors[color!]};
    font-family: ${theme.family[family!]};
  `}
`;
