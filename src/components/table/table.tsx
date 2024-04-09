"use client";

import { Button } from "@mui/material";
import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridFilterModel,
  GridPaginationModel,
  GridRenderCellParams,
  GridRowsProp,
  GridSortModel,
} from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface TableProps {
  onPageChange?: (model: GridPaginationModel) => void;
}

export interface ColProps {
  id: number;
  col1: string;
  col2: string;
}

const Table = (props: TableProps) => {
  const router = useRouter();

  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 25,
    page: 0,
  });

  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  });

  const rows: GridRowsProp<ColProps> = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns: GridColDef[] = [
    {
      field: "actions",
      headerName: "Action",
      type: "actions",
      width: 150,
      renderCell: (params: GridRenderCellParams<ColProps>) => (
        //{JSON.stringify(params?.row)}
        <strong>
          <Button
            variant="contained"
            size="small"
            className="bg-primary"
            style={{ marginLeft: 16 }}
            tabIndex={params.hasFocus ? 0 : -1}
            onClick={() => router.push(`/CustomerProfile/${params.row.id}`)}
          >
            Open 
          </Button>
        </strong>
      ),
    },
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];

  const pageSizeOptions = [1, 5, 10, 25];

  const onPageChange = (
    model: GridPaginationModel,
    details: GridCallbackDetails<any>
  ) => {
    setPaginationModel(model);
    if (props.onPageChange) {
      props.onPageChange(model);
    }
  };

  const onFilterChange = (
    model: GridFilterModel,
    details: GridCallbackDetails<"filter">
  ) => {
    console.log(`model`, model);
    console.log(`details`, details);
    setFilterModel(model);
  };

  const onSortChange = (
    model: GridSortModel,
    details: GridCallbackDetails<any>
  ) => {
    console.log(`model`, model);
    console.log(`details`, details);
  };

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSizeOptions={pageSizeOptions}
      paginationModel={paginationModel}
      filterModel={filterModel}
      hideFooter={true}
      disableColumnFilter={true}
      onPaginationModelChange={onPageChange}
      onFilterModelChange={onFilterChange}
      onSortModelChange={onSortChange}
    />
  );
};

export default Table;
