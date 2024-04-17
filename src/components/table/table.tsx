"use client";

import MuiPagination from '@mui/material/Pagination';
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
  hideFooter?: boolean
  getRowId?: (row: any) => any
  totalItems?: number
  totalPages?: number
  paginationModel: GridPaginationModel
  setPaginationModel: any
}

export interface ColProps {
  id: number;
  col1: string;
  col2: string;
}

const Table = (props: TableProps) => {
  const router = useRouter();
  /*
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 5,
    page: 0,
  });
  */

  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  });

  const pageSizeOptions = [1, 5, 10, 25];
  /*
  useEffect(() => {
    if (props.onPageChange) {
      props.onPageChange(paginationModel);
    }
  }, [paginationModel])

  const onPageChange = (
    model: GridPaginationModel,
    details: GridCallbackDetails<any>
  ) => {
    if (props.onPageChange) {
      //props.onPageChange(model);
    }
    console.log(`model`, model)
    setPaginationModel(model);
  };
  */

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

  const onPaginationChange = (page: number) => {
    console.log(`page`, page);
    props?.setPaginationModel({
      page: page,
      pageSize: paginationModel.pageSize
    })
    
  }

  const gridWidth = React.useMemo(() => {
    return (props.columns || []).reduce((acc, column) => {
      return acc + (column?.headerName?.length * 8);
    }, 0);
  }, [props.columns]);

  const { totalItems, totalPages, paginationModel } = props

  console.log(`totalItems`, totalItems)
  console.log(`totalPages`, totalPages)
  console.log(`props?.paginationModel`, props?.paginationModel)
  console.log(`props?.paginationModel?.page`, props?.paginationModel?.page)

  return (
    <DataGrid
      rows={props.rows || []}
      //columns={props.columns || []}
      columns={(props.columns || []).map(column => ({
        ...column,
        width: gridWidth > 1000 ? 150 : undefined // Adjust the threshold based on your layout
      }))}
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
      pageSizeOptions={pageSizeOptions}
      paginationModel={props.paginationModel}

      filterModel={filterModel}

      getRowId={props?.getRowId}
      hideFooter={props.hideFooter}
      disableColumnFilter={true}
      //onPaginationModelChange={onPageChange}
      onFilterModelChange={onFilterChange}
      onSortModelChange={onSortChange}
      autoHeight 
      //autoPageSize  
      slots={{
        pagination: ({ pagination, ...props }: any) => {
          return (
          <MuiPagination
            {...pagination}
            color="primary"
            page={paginationModel.page}
            count={totalPages}
            onChange={(event, page) => {
              console.log(`onChange page `, page);
              onPaginationChange(page)
            }}
          />
          )
          },
      }}
    />
  );
};

export default Table;