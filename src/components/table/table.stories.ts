import { Meta, StoryObj } from "@storybook/react";
import Table from "./table";

const meta: Meta<typeof Table> = {
   title: 'Components/Input-Select',
    component: Table,
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