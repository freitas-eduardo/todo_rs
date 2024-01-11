import type { Meta, StoryObj } from '@storybook/react';
import { Trash } from '@phosphor-icons/react'
import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    type: 'primary'
  },
};


export const Secondary: Story = {
  args: {
    children: <Trash size={16} />,
    type: 'secondary'
  },
};
