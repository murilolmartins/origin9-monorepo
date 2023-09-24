import styled from 'styled-components';

interface PageSectionContainerProps {
  backgroundColor?: string;
  height: string;
}

export const PageSectionContainer = styled.section<PageSectionContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 24px;
  height: ${({ height }) => height};
  background: ${({ backgroundColor, theme }) =>
    backgroundColor ?? theme.colors.white};
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile_xl}) {
    padding: 40px 40px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 40px 150px;
  }
  @media only screen and (min-width: 1824px) {
    padding-left: 200px;
    padding-right: 200px;
  }
`;
