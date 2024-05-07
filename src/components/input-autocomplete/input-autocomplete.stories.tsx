/**
 *  Component - Input AutoComplete : Storybook
 */

import { Meta, StoryObj } from '@storybook/react';
import { InputAutoComplete } from './index';

const meta: Meta<typeof InputAutoComplete> = {
  title: 'Components/InputAutoComplete',
  component: InputAutoComplete,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    //👇 The args you need here will depend on your component
    name: 'storybook_autocomplete',
    options: [
      { label: 'a12345', value: 'a12345', disabled: false },
      { label: 'b12345', value: 'b12345', disabled: false },
      { label: 'c12345', value: 'c12345', disabled: false },
      { label: '98765d', value: '98765d', disabled: false },
      { label: '0x00', value: '0x00', disabled: false }
    ],
    selectedOption: { label: 'c12345', value: 'c12345' },
    errorMessage: '',
    optionSearchKey: 'label',
    disabled: false,
    getOptionKey: (item) => item.value,
    getOptionLabel: (item) => item.label
  }
};