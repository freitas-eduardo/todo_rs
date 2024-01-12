import type { Meta, StoryObj } from '@storybook/react';

import { CheckBox } from './checkbox';

const meta: Meta<typeof CheckBox> = {
  component: CheckBox,
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Primary: Story = {
  args: {
    isChecked: true
  },
};

