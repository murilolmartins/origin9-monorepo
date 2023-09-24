import type { GetServerSideProps } from 'next';
import Head from 'next/head';

import { HomeLayout } from '@components-layout';

import { getUsers } from '@services';
import type { DehydratedState } from '@tanstack/react-query';
import { dehydrate } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Página principal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <HomeLayout />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  dehydratedState: DehydratedState;
}> = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['users'], getUsers);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};
