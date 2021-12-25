import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as S from './styles';
import Text from '../../atoms/Text';

export type HeaderProps = {
  hasBackArrow?: boolean;
  title?: string;
  subTitle?: string;
};

const Header: React.FC<HeaderProps> = ({
  hasBackArrow = false,
  title = '',
  subTitle,
  ...props
}): JSX.Element => {
  return (
    <S.Header hasBackArrow={hasBackArrow} {...props}>
      {hasBackArrow && (
        <Icon
          style={{ position: 'absolute', left: 30 }}
          name="arrow-left"
          color="white"
          size={24}
        />
      )}
      <S.TextsContainer>
        <Text color="white" family="bold" size="big">
          {title}
        </Text>
        {subTitle && (
          <Text style={{ marginTop: 5 }} color="white">
            {subTitle}
          </Text>
        )}
      </S.TextsContainer>
    </S.Header>
  );
};

export default Header;
