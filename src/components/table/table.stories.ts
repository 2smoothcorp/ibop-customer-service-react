import { Meta, StoryObj } from "@storybook/react";
import Table from "./table";

const meta: Meta<typeof Table> = {
   title: 'Components/Table',
    component: Table,
    parameters: {},
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
      //👇 The args you need here will depend on your component
      columns: [],
      rows: [],
      totalItems: 0,
      totalPages: 0,
      hideFooter: false,
      isLoading: false,
      paginationModel: { page: 1, pageSize: 10 },
      getRowId: (row) => '',
    },
};