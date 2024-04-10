"use client";

import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridFilterModel,
  GridPaginationModel,
  GridSortModel
} from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export interface TableProps {
  onPageChange?: (model: GridPaginationModel) => void;
  rows?: []
  columns?: GridColDef[]
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

  const gridWidth = React.useMemo(() => {
    return (props.columns || []).reduce((acc, column) => {
      return acc + (column?.headerName?.length * 8);
    }, 0);
  }, [props.columns]);

  return (
    <DataGrid
      sx={{
        '& .MuiDataGrid-columnHeader': {
          backgroundColor: '#F0F0F0', 
          border: '1px solid #B9B9B9', 
        },
        '& .MuiDataGrid-filler': {
          backgroundColor: '#F0F0F0', 
          border: '1px solid #B9B9B9', 
        },
        '& .MuiDataGrid-columnHeaderTitle': {
          color: '#000000', 
          fontWeight: 'bold',
        },
        '& .MuiDataGrid-topContainer': {
          borderBottom: '1px solid #B9B9B9', 
        },
      }}
      rows={props.rows || []}
      //columns={props.columns || []}
      columns={(props.columns || []).map(column => ({
        ...column,
        width: gridWidth > 1000 ? 150 : undefined // Adjust the threshold based on your layout
      }))}
      pageSizeOptions={pageSizeOptions}
      paginationModel={paginationModel}
      filterModel={filterModel}
      hideFooter={true}
      disableColumnFilter={true}
      onPaginationModelChange={onPageChange}
      onFilterModelChange={onFilterChange}
      onSortModelChange={onSortChange}
      autoHeight 
      autoPageSize
    />
  );
};

export default Table;
