import logo from '@images/logo.png';

import * as S from './Header.styles';

const Header = () => {
  return (
    <S.HeaderContainer>
      <S.HeaderLogo src={logo} alt="Origin9 logo" priority />
    </S.HeaderContainer>
  );
};

export { Header };
