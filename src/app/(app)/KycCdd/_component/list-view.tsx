/**
 *  Private Component : KYC CDD - List View
 */

'use client'

import {
  type ReactElement,
  Fragment,
  useEffect,
  useState
} from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { Button, Grid } from '@mui/material';
import type { GridPaginationModel } from '@mui/x-data-grid';

import { InputText } from '@/components/input-text';
import Table from '@/components/table/table';

import { searchKyc, searchRevaluate } from './list-action';

export const ListView = ({}: ListViewProps): ReactElement => {
  const [ tablePaginator, setTablePaginator ] = useState<GridPaginationModel>({ page: 1, pageSize: 10 });
  const [ tableFilter, setTableFilter ] = useState<TableFilter>({});
  const router = useRouter();
  const pathName = usePathname();
  const isRevaluatePage = pathName.toLowerCase() === '/KycCdd/Review'.toLowerCase();

  useEffect(() => {}, []);

  const kycInfo = useQuery({
    queryFn: () => fetchGetKycTableData(),
    queryKey: [
      'kyccdd-kyc-table-data',
      tablePaginator.page, tablePaginator.pageSize,
      tableFilter.corporateId,
      tableFilter.refId,
      tableFilter.fullname,
      tableFilter.dateStart,
      tableFilter.dateEnd
    ],
  });

  const revaluateInfo = useQuery({
    queryFn: () => fetchGetRevaluateTableData(),
    queryKey: [
      'kyccdd-revaluate-table-data',
      tablePaginator.page, tablePaginator.pageSize,
      tableFilter.corporateId,
      tableFilter.refId,
      tableFilter.fullname,
      tableFilter.dateStart,
      tableFilter.dateEnd
    ],
  });

  const fetchGetKycTableData = async () => {
    const response = await searchKyc({ ...tableFilter, ...tablePaginator });

    const { data } = response;
    if(!data) { return ({ items: [], totalItems: 0, totalPages: 0 }); }
    if(!data.data) { return ({ items: [], totalItems: 0, totalPages: 0 }); }

    const datasource = data.data;
    const tableDs: Array<TableDataModel> = [];
    for (const item of datasource) {
      const {
        logTimestamp,
        corporateId,
        referenceType,
        referenceId,
        name,
        kycRiskLevel, kycRiskLevelDescription,
        kycScore,
        logUserDesc
      } = item;

      tableDs.push({
        createdDate: dayjs(logTimestamp).format('DD/MM/YYYY'),
        corporateId: corporateId || '',
        referenceType: referenceType || '',
        referenceId: referenceId || '',
        fullname: name || '',
        riskGroup: `${kycRiskLevel} - ${kycRiskLevelDescription}`,
        riskScore: kycScore || 0,
        createdBy: logUserDesc || ''
      });
    }

    return ({
      items: tableDs,
      totalItems: data.totalRecords || 0,
      totalPages: data.totalPages
    });
  }

  const fetchGetRevaluateTableData = async () => {
    const response = await searchRevaluate({ ...tableFilter, ...tablePaginator });

    const { data } = response;
    if(!data) { return ({ items: [], totalItems: 0, totalPages: 0 }); }
    if(!data.data) { return ({ items: [], totalItems: 0, totalPages: 0 }); }

    const datasource = data.data;
    const tableDs: Array<TableDataModel> = [];
    for (const item of datasource) {
      const {
        logTimestamp,
        corporateId,
        referenceType,
        referenceId,
        name,
        kycRiskLevel, kycRiskLevelDescription,
        kycScore,
        logUserDesc
      } = item;

      tableDs.push({
        createdDate: dayjs(logTimestamp).format('DD/MM/YYYY'),
        corporateId: corporateId || '',
        referenceType: referenceType || '',
        referenceId: referenceId || '',
        fullname: name || '',
        riskGroup: `${kycRiskLevel} - ${kycRiskLevelDescription}`,
        riskScore: kycScore || 0,
        createdBy: logUserDesc || ''
      });
    }

    return ({
      items: tableDs,
      totalItems: data.totalRecords || 0,
      totalPages: data.totalPages || 0
    });

    // setTableDatasource(tableDs);
    // setTableTotalItem(tableDs.length);
    // setTableTotalPage(Math.ceil(tableDs.length / pageSize));
  }

  const formActionSearch = async (data: FormData) => {
    const corporateId = (data.get('corporateId') || '').toString();
    const refId = (data.get('refId') || '').toString();
    const fullname = (data.get('fullname') || '').toString();
    const _dateStart = (data.get('dateStart') || '').toString();
    const _dateEnd = (data.get('dateEnd') || '').toString();
    setTableFilter({
      corporateId,
      refId,
      fullname,
      dateStart: (_dateStart) ? new Date(_dateStart) : undefined,
      dateEnd: (_dateEnd) ? new Date(_dateEnd) : undefined
    });
  }

  const onClickReviewButton = () => { router.push(`/KycCdd/Review/Info`); }
  const renderTextInput = (name: string) => (<InputText name={name} />);

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
      <form action={formActionSearch}>
        <Grid container>
          <Grid item flex={1}>
            <Grid container spacing={2} className={'mt-2 px-6'}>
              {
                fields.map(({ label, input }, idx) => (
                  <Grid key={`search-field-${idx + 1}`} item xs={12} md={4} className={'flex items-center gap-4'}>
                    <Grid item flex={1} className={'text-left md:text-right'}>
                      {label}
                    </Grid>
                    <Grid item flex={3}>
                      {input}
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

  const renderKycTable = () => {
    return (
      <div className={'p-4'}>
        <Table<TableDataModel>
          disableAutosize disableColumnMenu
          columns={[
            {
              field: 'action',
              type: 'actions',
              headerName: 'Action',
              minWidth: 150,
              renderCell: ({ id, hasFocus }) => {
                return (
                  <Button
                    variant={'contained'}
                    size={'small'}
                    tabIndex={hasFocus ? 0 : -1}
                    onClick={() => { router.push(`/KycCdd/CustomerInfo/${id}`) }}
                  >
                    <strong>ดูรายละเอียด</strong>
                  </Button>
                );
              }
            },
            { field: 'createdDate', headerName: 'วันที่ทำรายการ', minWidth: 150 },
            { field: 'corporateId', headerName: 'Corporate ID', minWidth: 200, flex: 1 },
            { field: 'referenceType', headerName: 'ประเภทหลักฐาน', minWidth: 200 },
            { field: 'referenceId', headerName: 'เลขที่หลักฐาน', minWidth: 200 },
            { field: 'fullname', headerName: 'ชื่อ - นามสกุล', minWidth: 300, flex: 1 },
            { field: 'riskGroup', headerName: 'กลุ่มความเสี่ยง', type: 'number', minWidth: 200, flex: 1 },
            { field: 'riskScore', headerName: 'คะแนน', type: 'number', minWidth: 100 },
            { field: 'createdBy', headerName: 'ผู้ทำรายการ', minWidth: 250 }
          ]}
          rows={ kycInfo.data?.items || [] }
          totalItems={ kycInfo.data?.totalItems || 0 }
          totalPages={ kycInfo.data?.totalPages || 0 }
          getRowId={(row) => row.corporateId}
          paginationModel={ tablePaginator }
          setPaginationModel={ setTablePaginator }
          isLoading={ kycInfo.isLoading }
        />
      </div>
    );
  }

  const renderRevaluateTable = () => {
    return (
      <div className={'p-4'}>
        <Table<TableDataModel>
          disableAutosize disableColumnMenu
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
                    tabIndex={hasFocus ? 0 : -1}
                    onClick={() => { router.push(`/KycCdd/CustomerInfo/${id}`) }}
                  >
                    <strong>ดูรายละเอียด</strong>
                  </Button>
                );
              }
            },
            { field: 'createdDate', headerName: 'วันที่ทำรายการ', minWidth: 150 },
            { field: 'corporateId', headerName: 'Corporate ID', minWidth: 200, flex: 1 },
            { field: 'referenceType', headerName: 'ประเภทหลักฐาน', minWidth: 200 },
            { field: 'referenceId', headerName: 'เลขที่หลักฐาน', minWidth: 200 },
            { field: 'fullname', headerName: 'ชื่อ - นามสกุล', minWidth: 300, flex: 1 },
            { field: 'riskGroup', headerName: 'กลุ่มความเสี่ยง', type: 'number', minWidth: 200, flex: 1 },
            { field: 'riskScore', headerName: 'คะแนน', type: 'number', minWidth: 100 },
            { field: 'createdBy', headerName: 'ผู้ทำรายการ', minWidth: 250 }
          ]}
          rows={ revaluateInfo.data?.items || [] }
          totalItems={ revaluateInfo.data?.totalItems || 0 }
          totalPages={ revaluateInfo.data?.totalPages || 0 }
          getRowId={(row) => row.corporateId}
          paginationModel={ tablePaginator }
          setPaginationModel={ setTablePaginator }
          isLoading={ revaluateInfo.isLoading }
        />
      </div>
    );
  }

  return (
    <Fragment>
      { renderSearchPanel() }

      {
        (isRevaluatePage) && (
          <div className={'px-4 mt-4 flex justify-end'}>
            <Button variant={'contained'} onClick={ onClickReviewButton }>
              ทบทวนกลุ่มความเสี่ยง
            </Button>
          </div>
        )
      }

      { (isRevaluatePage) ? renderRevaluateTable() : renderKycTable() }
    </Fragment>
  );
}

interface ListViewProps {
  //
}

interface TableDataModel {
  createdDate: string;
  corporateId: string;
  referenceType: string;
  referenceId: string;
  fullname: string;
  riskGroup: string;
  riskScore: number;
  createdBy: string;
}

interface TableFilter {
  corporateId?: string;
  refId?: string;
  fullname?: string;
  dateStart?: Date;
  dateEnd?: Date;
}