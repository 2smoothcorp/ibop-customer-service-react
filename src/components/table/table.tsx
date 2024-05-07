'use client';

import { LabelDisplayedRowsArgs, Pagination as MuiPagination } from '@mui/material';
import {
  DataGrid,
  GridCallbackDetails,
  GridColDef,
  GridFilterModel,
  GridPagination,
  GridPaginationModel,
  GridSortModel,
  type GridRowIdGetter
} from '@mui/x-data-grid';
import { useMemo, useState } from 'react';

const Table = <DynamicType extends {}>(props: TableProps<DynamicType>) => {
  const { totalItems, totalPages, paginationModel } = props
  const [filterModel, setFilterModel] = useState<GridFilterModel>({ items: [] });
  const pageSizeOptions = [1, 5, 10, 25];

  const gridWidth = useMemo(() => {
    const { columns } = props;
    return (columns || []).reduce((acc, column) => {
      return acc + ((column?.headerName?.length || 0) * 8);
    }, 0);
  }, [props]);

  const onFilterChange = (model: GridFilterModel, details: GridCallbackDetails<'filter'>) => {
    setFilterModel(model);
  }

  const onSortChange = (model: GridSortModel, details: GridCallbackDetails<any>) => { }

  const onPaginationChange = (page: number) => {
    const { setPaginationModel } = props;
    if (setPaginationModel) {
      setPaginationModel({
        page: page,
        pageSize: paginationModel.pageSize,
      });
    }
  }

  const onPageSizeChange = (pageSize: number) => {
    const { setPaginationModel } = props;
    if (setPaginationModel) {
      setPaginationModel({
        page: 1,
        pageSize: pageSize
      })
    }
  }

  const CustomMuiPagination = () => {
    return (
      <MuiPagination
        color={'primary'}
        page={paginationModel.page}
        count={totalPages || 0}
        // className={'w-[40rem]'}
        onChange={(event, page) => { onPaginationChange(page) }}
      />
    )
  }

  const labelDisplayedRows = ({ from, to, count, page }: LabelDisplayedRowsArgs) => {
    return `${(paginationModel.page * paginationModel.pageSize) - paginationModel.pageSize + from}-${(paginationModel.page * paginationModel.pageSize) - paginationModel.pageSize + to} of ${totalItems}`;
  }

  const renderNotFound = () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%'
        }}
      >
        <div className='text-[25px] text-red-500'>ไม่มีข้อมูล</div>
      </div>
    );
  }

  return (
    <DataGrid<DynamicType>
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
        '.MuiDataGrid-footerContainer': { justifyContent: 'unset' },
        '.MuiTablePagination-root': { width: '100%', display: 'flex', justifyContent: 'flex-end' },
        '.MuiTablePagination-spacer': { display: 'none' }
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
        noResultsOverlay() {
          return renderNotFound();
        },
        noRowsOverlay(props, deprecatedLegacyContext) {
          return renderNotFound();
        },
        pagination: (props) => (
          <GridPagination
            {...props}
            ActionsComponent={CustomMuiPagination}
            rowsPerPageOptions={pageSizeOptions}
            rowsPerPage={paginationModel.pageSize}
            onRowsPerPageChange={(event) => onPageSizeChange(parseInt(event.target.value))}
            labelDisplayedRows={labelDisplayedRows}
          />
        )
      }}
    />
  );
}

export interface TableProps<T extends {}> {
  onPageChange?: (model: GridPaginationModel) => void;
  rows?: Array<T>
  columns?: GridColDef[]
  hideFooter?: boolean
  getRowId?: GridRowIdGetter<T>
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

export default Table;