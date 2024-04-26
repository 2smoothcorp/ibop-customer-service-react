/**
 *  Component - Form : Storybook
 */

import { Meta, StoryObj } from '@storybook/react';
import { Form } from './index';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    //👇 The args you need here will depend on your component
    fields: [
      {
        type: 'text',
        label: 'sample1_label', viewText: 'sample1_text',
        name: 'sample1',
        colSpan: 6,
        labelCol: 6,
        viewCol: 6,
        inputCol: 6,
        disabled: false
      },
      {
        type: 'number',
        label: 'sample2_label', viewText: 'sample2_text',
        name: 'sample2',
        colSpan: 6,
        labelCol: 6,
        viewCol: 6,
        inputCol: 6,
        disabled: false
      },
      {
        type: 'select',
        label: 'sample3_label', viewText: 'sample3_text',
        name: 'sample3',
        colSpan: 6,
        labelCol: 6,
        viewCol: 6,
        inputCol: 6,
        disabled: false,
        options: [
          { label: 'opt-1', value: 'opt-1', disabled: false },
          { label: 'opt-2', value: 'opt-2', disabled: false },
          { label: 'opt-3', value: 'opt-3', disabled: false }
        ]
      },
      {
        type: 'radio',
        label: 'sample4_label', viewText: 'sample4_text',
        name: 'sample4',
        colSpan: 6,
        labelCol: 6,
        viewCol: 6,
        inputCol: 6,
        disabled: false,
        options: [
          { label: 'opt-1', value: 'opt-1', disabled: false },
          { label: 'opt-2', value: 'opt-2', disabled: false },
          { label: 'opt-3', value: 'opt-3', disabled: false }
        ]
      },
      {
        type: 'checkbox',
        label: 'sample5_label', viewText: 'sample5_text',
        name: 'sample5',
        colSpan: 6,
        labelCol: 6,
        viewCol: 6,
        inputCol: 6,
        disabled: false,
        options: [
          { label: 'opt-1', value: 'opt-1', disabled: false },
          { label: 'opt-2', value: 'opt-2', disabled: false },
          { label: 'opt-3', value: 'opt-3', disabled: false }
        ]
      }
    ],
    isEditing: false
  }
};