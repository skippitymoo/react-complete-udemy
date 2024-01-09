import type { Meta, StoryObj } from '@storybook/react';
import { Cart } from './Cart';

const meta: Meta<typeof Cart> = {
  title: 'Cart/Cart',
  component: Cart,
  tags: ['autodocs'],
};

export default meta;

type story = StoryObj<typeof meta>;

export const Default: story = {
  args: {
    initialCartItems: [
      {
        amount: 1,
        meal: {
          id: 'm1',
          name: 'Sushi',
          description: 'Finest fish and veggies',
          price: 22.99,
        },
      },
      {
        amount: 4,
        meal: {
          id: 'm2',
          name: 'Schnitzel',
          description: 'A german specialty!',
          price: 16.5,
        },
      },
    ],
  },
};
