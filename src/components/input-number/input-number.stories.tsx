/**
 *  Component - Input Number : Storybook
 */

import { Meta, StoryObj } from '@storybook/react';
import { InputNumber } from './index';

const meta: Meta<typeof InputNumber> = {
  title: 'Components/InputNumber',
  component: InputNumber,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    //👇 The args you need here will depend on your component
    name: 'storybook_number',
    disabled: false
  }
};