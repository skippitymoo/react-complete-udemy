import type { Meta, StoryObj } from '@storybook/react';
import { Cart } from './Cart';

const meta: Meta<typeof Cart> = {
  title: 'Cart/Cart',
  component: Cart,
  tags: ['autodocs'],
};

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {};
