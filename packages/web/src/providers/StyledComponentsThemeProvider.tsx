import type { ReactNode } from 'react';

import { GlobalStyles } from '@styles';

import theme from '../styles/theme';

import { ThemeProvider } from 'styled-components';

interface StyledComponentsThemeProviderProps {
  children: ReactNode;
}

const StyledComponentsThemeProvider = ({
  children
}: StyledComponentsThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export { StyledComponentsThemeProvider };
