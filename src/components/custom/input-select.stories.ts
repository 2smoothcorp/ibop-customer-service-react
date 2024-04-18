import { Meta, StoryObj } from "@storybook/react";
import InputSelect from "./input-select";


const meta: Meta<typeof InputSelect> = {
   title: 'Components/Input-Select',
    component: InputSelect,
    parameters: {
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};