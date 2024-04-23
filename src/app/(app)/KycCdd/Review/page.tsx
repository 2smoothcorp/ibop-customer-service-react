/**
 *  KYC CDD : Review - List
 */

'use client'

import {
  type ReactElement,
  Fragment,
  useEffect,
  useState
} from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Button, Grid } from '@mui/material';
import type { GridPaginationModel } from '@mui/x-data-grid';

import Navbar from '@/components/navbar/header-navbar';
import Table from '@/components/table/table';
// import DatePicker from '@/components/custom/input-date';

import { search } from './actions';

const KycCddCustomerInfoList = (): ReactElement => {
  const [ tableDatasource, setTableDatasource ] = useState<Array<TableDataModel>>([]);
  const [ tableTotalItem, setTableTotalItem ] = useState(0);
  const [ tableTotalPage, setTableTotalPage ] = useState(0);
  const [ tablePaginator, setTablePaginator ] = useState<GridPaginationModel>({ page: 1, pageSize: 10 });
  const router = useRouter();
  const params = useParams<{ customerId: string; }>();

  useEffect(() => {}, []);

  const formActionSearch = async (data: FormData) => {
    const { items, totalItems, totalPages } = await search(data);
    console.log('formActionSearch', { items, totalItems, totalPages });
  }

  const renderTextInput = (name: string) => {
    return (
      <input
        type={'text'}
        name={ name }
        className={`w-full px-3 py-2 h-10 bg-[#D9D9D9] border border-slate-300 rounded-md text-xl shadow-sm placeholder-slate-400`}
      />
    );
  }

  // const renderDateInput = (name: string) => {
  //   return (
  //     <DatePicker name={ name } defaultValue={ null } className={`w-full bg-[#D9D9D9] placeholder-slate-400`} />
  //   );
  // }

  const renderSearchPanel = () => {
    const fields = [
      { label: 'Corporate ID', input: renderTextInput('corporateId') },
      { label: 'เลขที่หลักฐาน', input: renderTextInput('refId') },
      { label: 'ชื่อ - นามสกุล', input: renderTextInput('fullname') },
      { label: 'วันที่ทำรายการ เริ่มต้น', input: renderTextInput('dateStart') },
      { label: 'วันที่ทำรายการ สิ้นสุด', input: renderTextInput('dateEnd') }
    ];

    return (
      <form action={ formActionSearch }>
        <Grid container>
          <Grid item flex={1}>
            <Grid container spacing={2} className={'mt-2 px-6'}>
              {
                fields.map(({ label, input }, idx) => (
                  <Grid key={`search-field-${ idx + 1 }`} item xs={12} md={4} className={'flex items-center gap-4'}>
                    <Grid item flex={1} className={'text-left md:text-right'}>
                      { label }
                    </Grid>
                    <Grid item flex={3}>
                      { input }
                    </Grid>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
          <Grid item xs={12} md={2} className={'flex items-end'}>
            <Grid container spacing={2} className={'w-full mt-2 px-6 flex items-end justify-end md:justify-start'}>
              <Grid item>
                <Button type={'submit'}
                  variant={'contained'}
                  className={'bg-primary-950 disabled:bg-primary-900 hover:bg-primary-900 transition-all text-white disabled:text-white text-xl py-0 w-25 h-10'}
                  // disabled={pending}
                >
                  ค้นหา
                </Button>
              </Grid>
              <Grid item>
                <Button type={'reset'}
                  variant={'contained'}
                  className={'bg-[#E8E8E8] hover:bg-[#E8E8E8] hover:brightness-95 text-xl py-0 w-25 h-10 !text-[#252525] font-db-helvethaica'}
                >
                  ล้างค่า
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }

  const renderTable = () => {
    const mockupRows: Array<TableDataModel> = [];
    mockupRows.push({
      createdDate: new Date(),
      corporateId: '12345',
      referenceType: 'บัตรประชาชน',
      referenceId: '1234567890123',
      fullname: 'mock',
      riskGroup: 3,
      rishScore: 7,
      createdBy: '???'
    });

    return (
      <div className={'p-4'}>
        <Table<TableDataModel>
          columns={[
            {
              field: 'action',
              type: 'actions',
              headerName: 'Action',
              width: 150,
              renderCell: ({ id, hasFocus }) => {
                return (
                  <Button
                    variant={'contained'}
                    size={'small'}
                    tabIndex={ hasFocus ? 0 : -1}
                    onClick={() => { router.push(`/KycCdd/CustomerInfo/${ id }`) }}
                  >
                    <strong>ดูรายละเอียด</strong>
                  </Button>
                );
              }
            },
            { field: 'createdDate', headerName: 'วันที่ทำรายการ', type: 'date', flex: 1 },
            { field: 'corporateId', headerName: 'Corporate ID', flex: 1 },
            { field: 'referenceType', headerName: 'ประเภทหลักฐาน', flex: 1 },
            { field: 'referenceId', headerName: 'เลขที่หลักฐาน', flex: 1 },
            { field: 'fullname', headerName: 'ชื่อ - นามสกุล', flex: 1 },
            { field: 'riskGroup', headerName: 'กลุ่มความเสี่ยง', type: 'number', width: 100 },
            { field: 'rishScore', headerName: 'คะแนน', type: 'number', width: 100 },
            { field: 'createdBy', headerName: 'ผู้ทำรายการ', flex: 1 }
          ]}
          rows={ mockupRows } // <-- tableDatasource
          totalItems={ tableTotalItem }
          totalPages={ tableTotalPage }
          getRowId={(row) => row.corporateId}
          paginationModel={ tablePaginator }
          setPaginationModel={ setTablePaginator }
        />
      </div>
    );
  }

  return (
    <Fragment>
      { renderSearchPanel() }
      { renderTable() }
    </Fragment>
  );
}

interface TableDataModel {
  createdDate: Date;
  corporateId: string;
  referenceType: string;
  referenceId: string;
  fullname: string;
  riskGroup: number;
  rishScore: number;
  createdBy: string;
}

export default KycCddCustomerInfoList;