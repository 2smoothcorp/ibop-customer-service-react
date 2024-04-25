/**
 *  Component - Input Radio : Storybook
 */

import { Meta, StoryObj } from '@storybook/react';
import { InputRadio } from './index';

const meta: Meta<typeof InputRadio> = {
  title: 'Components/InputRadio',
  component: InputRadio,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    //👇 The args you need here will depend on your component
    name: 'storybook_radio',
    options: [
      { label: 'sample1', value: 'sample1', disabled: false }
    ]
  }
};