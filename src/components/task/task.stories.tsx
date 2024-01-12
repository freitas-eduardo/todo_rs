import type { Meta, StoryObj } from '@storybook/react';

import { Task } from './task';

const meta: Meta<typeof Task> = {
  component: Task,
};

export default meta;
type Story = StoryObj<typeof Task>;

export const Primary: Story = {
  args: {

  },
};

