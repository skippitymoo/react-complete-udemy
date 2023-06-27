import type { Meta, StoryObj } from '@storybook/react';

import Greetings from './Greetings';

const meta: Meta<typeof Greetings> = {
  title: 'Example/Greetings',
  component: Greetings,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Defaults: Story = {
  args: {},
};
