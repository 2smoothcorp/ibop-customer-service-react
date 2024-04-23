/**
 *  KYC CDD : Customer Info - Detail
 */

'use client'

import {
  type ReactElement,
  Fragment,
  useEffect,
  useState
} from 'react';
import { useRouter, useParams } from 'next/navigation';
import dayjs from 'dayjs';
import type { GridPaginationModel } from '@mui/x-data-grid';

import Navbar from '@/components/navbar/header-navbar';
import DetailSection from '@/containers/detail-section/detail-section';
import Table from '@/components/table/table';

const KycCddCustomerInfoDetail = (): ReactElement => {
  const [ tableDatasource, setTableDatasource ] = useState<Array<TableDataModel>>([]);
  const [ tableTotalItem, setTableTotalItem ] = useState(0);
  const [ tableTotalPage, setTableTotalPage ] = useState(0);
  const [ tablePaginator, setTablePaginator ] = useState<GridPaginationModel>({ page: 1, pageSize: 10 });
  const router = useRouter();
  const params = useParams<{ customerId: string; }>();

  useEffect(() => {}, []);

  const renderResultSection = () => {
    return (
      <DetailSection
        topic={'ผลการจัดกลุ่มความเสี่ยงลูกค้า'}
        colPerRow={3}
        detailList={[
          { title: 'สรุปผลกลุ่มเสี่ยงของลูกค้า', value: 'ความเสี่ยงสูง (mock)' },
          { title: 'กลุ่ม', value: '3' },
          { title: 'คะแนน', value: '7' },
          { title: 'วันที่เริ่มต้น', value: dayjs().format('DD/MM/YYYY') },
          { title: 'วันหมดอายุ', value: dayjs().format('DD/MM/YYYY') }
        ]}
      />
    );
  }

  const renderSummarySection = () => {
    return (
      <DetailSection
        topic={'สรุปผลการจัดกลุ่มความเสี่ยงลูกค้า'}
        colPerRow={3}
        detailList={[
          { title: 'สรุปผลกลุ่มเสี่ยงของลูกค้า', value: '3' },
          { title: 'คะแนน', value: '7' }
        ]}
      />
    );
  }

  const renderRiskFactorTable = () => {
    const mockupRows: Array<TableDataModel> = [];
    mockupRows.push({
      name: 'mock name',
      group: 3,
      score: 7
    });

    return (
      <Table
        columns={[
          { field: 'name', headerName: 'ปัจจัยในการพิจารณาความเสี่ยง' },
          { field: 'group', headerName: 'กลุ่ม', type: 'number' },
          { field: 'score', headerName: 'คะแนน', type: 'number' }
        ]}
        getRowId={(row) => row.name}
        rows={ mockupRows } // <-- tableDatasource
        totalItems={ tableTotalItem }
        totalPages={ tableTotalPage }
        paginationModel={ tablePaginator }
        setPaginationModel={ setTablePaginator }
      />
    );
  }

  return (
    <Fragment>
      <Navbar title={'KYC / CDD ข้อมูลลูกค้า'} />
      <div className={'p-4'}>
        { renderResultSection() }
        { renderSummarySection() }
        { renderRiskFactorTable() }
      </div>
    </Fragment>
  );
}

interface TableDataModel {
  name: string;
  group: number;
  score: number;
}

export default KycCddCustomerInfoDetail;