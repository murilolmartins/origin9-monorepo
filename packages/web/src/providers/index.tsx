import type { ReactNode } from 'react';
import { useState } from 'react';

import { StyledComponentsThemeProvider } from './StyledComponentsThemeProvider';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <StyledComponentsThemeProvider>{children}</StyledComponentsThemeProvider>
    </QueryClientProvider>
  );
};

export { Providers };
