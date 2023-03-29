import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../src/index';
import { IButtonProps } from '../src/Button/type';

const meta: Meta<IButtonProps> = {
  title: 'Cloud.Core.UI/Components',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    id: { control: 'text' },
    name: { control: 'text' },
    theme: { control: 'select', options: ['primary', 'secondary', 'danger'] },
  },
};
export default meta;

type Story = StoryObj<IButtonProps>;
export const Primary: Story = {
  args: {
    disabled: false,
    fullWidth: false,
    id: '',
    name: '',
    theme: 'primary',
    children: 'button',
  },
};
