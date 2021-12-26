import styled, { css } from 'styled-components/native';
import { theme } from '../../../styles';
import { HeaderProps } from './index';

export const Header = styled.View<HeaderProps>`
  ${({ hasBackArrow }) => css`
    background-color: ${theme.colors.primary};
    padding-horizontal: 30px;
    flex: 0.15;
    align-items: center;
    flex-direction: row;
    justify-content: ${hasBackArrow ? 'center' : 'flex-start'}};
    display: flex;
  `}
`;

export const TextsContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
`;
