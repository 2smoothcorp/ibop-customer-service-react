/**
 *  Component - App Loader : Storybook
 */

import { Meta, StoryObj } from '@storybook/react';
import { AppLoader } from './index';

const meta: Meta<typeof AppLoader> = {
  title: 'Components/AppLoader',
  component: AppLoader,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    //👇 The args you need here will depend on your component
    asContentLoader: false,
    color: 'primary'
  },
};