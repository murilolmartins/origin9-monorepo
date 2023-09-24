import type { AppProps } from 'next/app';

import { RootLayout } from '@components-layout';

import { Providers } from '../providers';

import { Hydrate } from '@tanstack/react-query';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Hydrate state={pageProps.dehydratedState}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </Hydrate>
    </Providers>
  );
}
