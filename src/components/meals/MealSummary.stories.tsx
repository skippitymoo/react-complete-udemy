import type { Meta, StoryObj } from '@storybook/react';
import { MealSummary } from './MealSummary';

const meta: Meta<typeof MealSummary> = {
  title: 'Meal/Summary',
  component: MealSummary,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <div style={{ display: 'flex' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};
