import type { Meta, StoryObj } from '@storybook/react';
import { CartItem } from './CartItem';

const meta: Meta<typeof CartItem> = {
  title: 'Cart/CartItem',
  component: CartItem,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    amount: 3,
    meal: {
      id: 'm1',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
  },
};

export const LongName: Story = {
  args: {
    amount: 3,
    meal: {
      id: 'm1',
      name: 'Schnitzel Frankfurters Wieners Bratwürste Rindswürste Knackwürste Bockwürste Currywurst Beutelwurst Debrecener Extrawurst Gelbwurst Liverwurst Stadtwurst Weisswurst',
      description: 'A german specialty!',
      price: 16.5,
    },
  },
};
