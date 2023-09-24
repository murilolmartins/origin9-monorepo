import HomeUsersTable from './HomeUsersTable';

import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const meta: Meta<typeof HomeUsersTable> = {
  title: 'Sections/HomeUsersTable',
  component: HomeUsersTable,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    )
  ]
};

type Story = StoryObj<typeof HomeUsersTable>;

export const Basic: Story = {
  render: () => <HomeUsersTable />
};

export default meta;
