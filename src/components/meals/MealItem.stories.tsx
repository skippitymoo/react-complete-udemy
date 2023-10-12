import { Meta, StoryObj } from '@storybook/react';
import { MealItem } from './MealItem';

const meta: Meta<typeof MealItem> = {
  title: 'Meal/MealItem',
  component: MealItem,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <MealItem>
      <MealItem.Details title='Sushi' description='Finest fish and veggies' price={22.99} />
    </MealItem>
  ),
};
