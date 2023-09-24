import type { ReactNode } from 'react';

import * as S from './PageSection.styles';

interface PageSectionProps {
  backgroudColor?: string;
  height?: string;
  children: ReactNode;
}

const PageSection = ({
  backgroudColor,
  children,
  height = 'auto'
}: PageSectionProps) => {
  return (
    <S.PageSectionContainer height={height} backgroundColor={backgroudColor}>
      {children}
    </S.PageSectionContainer>
  );
};

export { PageSection };
