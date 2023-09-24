import type { ReactNode } from 'react';

import * as S from './HomeUsersTableHeader.styles';

interface HomeUsersTableHeaderProps {
  children: ReactNode;
}

export const HomeUsersTableHeader = ({
  children
}: HomeUsersTableHeaderProps) => {
  return (
    <S.HomeUsersTableHeaderContainer>
      {children}
    </S.HomeUsersTableHeaderContainer>
  );
};
