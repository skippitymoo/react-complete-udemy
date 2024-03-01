import type { Meta, StoryObj } from '@storybook/react';
import { MainContent } from './MainContent';

const meta: Meta<typeof MainContent> = {
  title: 'Content/Main',
  component: MainContent,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
