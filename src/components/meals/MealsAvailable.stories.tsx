import type { Meta, StoryObj } from '@storybook/react';
import { MealsAvailable } from './MealsAvailable';

const meta: Meta<typeof MealsAvailable> = {
  title: 'Meal/MealsAvailable',
  component: MealsAvailable,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
