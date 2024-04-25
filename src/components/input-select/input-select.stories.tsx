/**
 *  Component - Input Select : Storybook
 */

import { Meta, StoryObj } from '@storybook/react';
import { InputSelect } from './index';

const meta: Meta<typeof InputSelect> = {
  title: 'Components/InputSelect',
  component: InputSelect,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  // @ts-ignore
  args: {
    //👇 The args you need here will depend on your component
    name: 'storybook_select',
    options: [
      { label: 'sample1', value: 'sample1' }
    ]
  }
};