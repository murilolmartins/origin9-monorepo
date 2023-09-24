import { Header } from './Header';

import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Sections/Header',
  component: Header
} as Meta;

type Story = StoryObj<typeof Header>;

export const Basic: Story = {
  render: () => <Header />
};
