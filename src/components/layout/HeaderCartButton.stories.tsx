import type { Meta, StoryObj } from '@storybook/react';
import { HeaderCartButton } from './HeaderCartButton';

// This default export determines where your story goes in the story list
const meta: Meta<typeof HeaderCartButton> = {
  title: 'Header/CartButton',
  component: HeaderCartButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Your Cart',
    itemCount: 0,
  },
};
