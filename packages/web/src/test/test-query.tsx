import type { ReactNode } from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface ReactQueryWrapperProps {
  children: ReactNode;
}

const ReactQueryWrapper = ({ children }: ReactQueryWrapperProps) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export { ReactQueryWrapper };
