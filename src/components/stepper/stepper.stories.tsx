/**
 *  Component - Stepper : Storybook
 */

import { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './index';

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    //👇 The args you need here will depend on your component
    steps: ['Step 1', 'Step 2', 'Step 3'],
    currentStepIndex: 0,
    labelPosition: 'bottom',
    disabled: false,
    nonLinear: false,
    onChangeStep: (index) => { console.log('onChangeStep', index); }
  }
};