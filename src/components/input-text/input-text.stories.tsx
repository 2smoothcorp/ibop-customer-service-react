/**
 *  Component - Input Text : Storybook
 */

import { Meta, StoryObj } from '@storybook/react';
import { InputText } from './index';

const meta: Meta<typeof InputText> = {
  title: 'Components/InputText',
  component: InputText,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    //👇 The args you need here will depend on your component
    name: 'storybook_text'
  }
};