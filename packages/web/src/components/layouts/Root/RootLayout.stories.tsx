import { RootLayout } from './RootLayout';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RootLayout> = {
  title: 'Layouts/RootLayout',
  component: RootLayout
};

type Story = StoryObj<typeof RootLayout>;

export const Basic: Story = {
  render: () => (
    <RootLayout>
      <div>Some page layout</div>
    </RootLayout>
  )
};

export default meta;
