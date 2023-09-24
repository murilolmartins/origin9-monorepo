import users from '../../../test/mocks/users.json';
import { HomeLayout } from './HomeLayout';

import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { rest } from 'msw';

const queryClient = new QueryClient();

const meta: Meta<typeof HomeLayout> = {
  title: 'Layouts/HomeLayout',
  component: HomeLayout,
  parameters: {
    msw: {
      handlers: {
        users: [
          rest.get('/api/users', (req, res, ctx) => {
            return res(ctx.json(users));
          })
        ]
      }
    }
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
    )
  ]
};

type Story = StoryObj<typeof HomeLayout>;

export const Basic: Story = {
  render: () => <HomeLayout />
};

export default meta;
