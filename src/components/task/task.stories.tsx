import type { Meta, StoryObj } from '@storybook/react';

import { Task } from './task';

const meta: Meta<typeof Task> = {
  component: Task,
};

export default meta;
type Story = StoryObj<typeof Task>;

export const Done: Story = {
  args: {
    isDone: false,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  },
};

export const Undone: Story = {
  args: {
    isDone: true,
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  },
};
