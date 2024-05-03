/**
 *  Component - Section Separator : Storybook
 */

import { Meta, StoryObj } from '@storybook/react';
import { SectionSeparator } from './index';

const meta: Meta<typeof SectionSeparator> = {
  title: 'Components/SectionSeparator',
  component: SectionSeparator,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    //👇 The args you need here will depend on your component
    title: 'Section Title',
    hasEditAction: false,
    onClickEdit: () => { console.log('Click Edit Button'); }
  }
};