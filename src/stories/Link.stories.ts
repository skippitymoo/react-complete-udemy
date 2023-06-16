import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

// This default export determines where your story goes in the story list
const meta: Meta<typeof Link> = {
  title: 'Example/Link',
  component: Link,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaults: Story = {
  args: {
    text: 'yeooo',
  },
};

export const NewTab: Story = {
  args: {
    text: 'Opens new Tab',
    target: '_blank',
  },
};
