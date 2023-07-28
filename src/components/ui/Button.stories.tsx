import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// This default export determines where your story goes in the story list
const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Press me!',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Press me!',
  },
};

export const Dark: Story = {
  args: {
    variant: 'dark',
    children: 'Press me!',
  },
};

export const Small: Story = {
  args: {
    variant: 'light',
    size: 'small',
    children: <span>yeo!</span>,
  },
};

export const Notification: Story = {
  args: {
    variant: 'dark',
    children: (
      <>
        <span>Press me!</span>
        <Button.Notification text='6' />
      </>
    ),
  },
};
