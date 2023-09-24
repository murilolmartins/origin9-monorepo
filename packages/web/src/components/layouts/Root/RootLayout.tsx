import type { ReactNode } from 'react';

import { Header } from './Header/Header';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export { RootLayout };
