"use client";

import MuiPagination from '@mui/material/Pagination';
import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridFilterModel,
  GridPagination,
  GridPaginationModel,
  GridSortModel
} from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export interface TableProps {
  onPageChange?: (model: GridPaginationModel) => void;
  rows?: Array<any>
  columns?: GridColDef[]
  hideFooter?: boolean
  getRowId?: (row: any) => any
  totalItems?: number
  totalPages?: number
  paginationModel: GridPaginationModel
  setPaginationModel: (model: GridPaginationModel) => void
  setPageSizenModel?: (model: GridPaginationModel) => void
  isLoading?: boolean
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
    setFilterModel(model);
  };

  const onSortChange = (
    model: GridSortModel,
    details: GridCallbackDetails<any>
  ) => {
  };

  const onPaginationChange = (page: number) => {
    props?.setPaginationModel({
      page: page,
      pageSize: paginationModel.pageSize
    })
  }

  const onPageSizeChange = (pageSize: number) => {
    props?.setPaginationModel({
      page: 1,
      pageSize: pageSize
    })
  }

  const gridWidth = React.useMemo(() => {
    return (props.columns || []).reduce((acc, column) => {
      return acc + ((column?.headerName?.length || 0) * 8);
    }, 0);
  }, [props.columns]);

  const { totalItems, totalPages, paginationModel } = props
  console.log('paginationModel', paginationModel)

  const CustomMuiPagination = () => {
    return (
      <MuiPagination
        color='primary'
        page={paginationModel.page}
        count={totalPages || 0}
        onChange={(event, page) => {
          onPaginationChange(page)
        }}
      />
    )
  }

  function CustomPagination(props: any) {
    return <GridPagination
      ActionsComponent={CustomMuiPagination}
      rowsPerPageOptions={pageSizeOptions}
      rowsPerPage={paginationModel.pageSize}
      onRowsPerPageChange={(event) => onPageSizeChange(parseInt(event.target.value))}
      {...props}
    />;
  }

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

      getRowId={props?.getRowId}
      rows={props.rows || []}
      columns={(props.columns || []).map(column => ({
        ...column,
        width: gridWidth > 1000 ? 150 : undefined // Adjust the threshold based on your layout
      }))}
      //pageSizeOptions={pageSizeOptions}
      //paginationModel={props.paginationModel}
      filterModel={filterModel}
      hideFooter={props.hideFooter}
      //disableColumnFilter={true}
      //onPaginationModelChange={onPageChange}
      onFilterModelChange={onFilterChange}
      onSortModelChange={onSortChange}
      autoHeight
      //autoPageSize  
      loading={props.isLoading}
      slots={{
        pagination: CustomPagination
      }}
    />
  );
};

export default Table;