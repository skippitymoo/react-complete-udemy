import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import sprite from '../../img/sprite.svg';

const meta: Meta<typeof Icon> = {
  title: 'UI/Icon',
  component: Icon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Cart: Story = {
  args: {
    href: `${sprite}#icon-cart`,
  },
};
