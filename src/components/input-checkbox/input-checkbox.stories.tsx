/**
 *  Component - Input Checkbox : Storybook
 */

import { Meta, StoryObj } from '@storybook/react';
import { InputCheckbox } from './index';

const meta: Meta<typeof InputCheckbox> = {
  title: 'Components/InputCheckbox',
  component: InputCheckbox,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    //👇 The args you need here will depend on your component
    name: 'storybook_checkbox',
    options: [
      { label: 'sample1', value: 'sample1', disabled: false }
    ]
  }
};