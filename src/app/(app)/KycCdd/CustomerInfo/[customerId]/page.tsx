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
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { Button } from '@mui/material';
import type { GridPaginationModel } from '@mui/x-data-grid';

import Navbar from '@/components/navbar/header-navbar';
import Table from '@/components/table/table';
import { AppLoader } from '@/components/app-loader';
import DetailSection from '@/containers/detail-section/detail-section';
import type {
  RiskLevelResultCallbackDataResponse,
  RiskLevelResponse
} from '@/services/rest-api/customer-service';

const Page = (): ReactElement => {
  const [ tablePaginator, setTablePaginator ] = useState<GridPaginationModel>({ page: 1, pageSize: 10 });
  const router = useRouter();
  const params = useParams<{ customerId: string; }>();
  const { customerId: corporateId } = params;

  useEffect(() => {}, []);

  const { data: riskData, isLoading } = useQuery({
    queryFn: () => fetchGetRiskInfo(),
    queryKey: ['kyccdd-risk-info', corporateId]
  });

  const fetchGetRiskInfo = async () => {
    const request = await fetch(`/api/kyc/get-risk/${ corporateId }`, { method: 'GET' });
    const response: RiskLevelResultCallbackDataResponse = await request.json();

    const { data } = response;
    if(!data) { return {}; }
    return data;
  }

  const onClickReviewButton = () => { router.push(`/KycCdd/Review/Info`); }

  const renderResultSection = () => {
    if(isLoading) {
      return (<AppLoader asContentLoader />);
    }

    const _riskLv = riskData?.riskLevel || '-';
    const _riskDescription = riskData?.riskDescription || '-';
    const _riskScore = riskData?.score || 0;
    const _dateStart = (riskData?.startDate) ? dayjs(riskData.startDate).format('DD/MM/YYYY') : '-'
    const _dateEnd = (riskData?.endDate) ? dayjs(riskData.endDate).format('DD/MM/YYYY') : '-'
    return (
      <DetailSection
        topic={'ผลการจัดกลุ่มความเสี่ยงลูกค้า'}
        colPerRow={3}
        detailList={[
          { title: 'สรุปผลกลุ่มเสี่ยงของลูกค้า', value: _riskDescription },
          { title: 'กลุ่ม', value: _riskLv },
          { title: 'คะแนน', value: `${ _riskScore }` },
          { title: 'วันที่เริ่มต้น', value: _dateStart },
          { title: 'วันหมดอายุ', value: _dateEnd }
        ]}
      />
    );
  }

  const renderSummarySection = () => {
    if(isLoading) {
      return (<AppLoader asContentLoader />);
    }

    const _riskLv = riskData?.riskLevel || '-';
    const _riskScore = riskData?.score || 0;

    return (
      <DetailSection
        topic={'สรุปผลการจัดกลุ่มความเสี่ยงลูกค้า'}
        colPerRow={3}
        detailList={[
          { title: 'สรุปผลกลุ่มเสี่ยงของลูกค้า', value: _riskLv },
          { title: 'คะแนน', value: `${ _riskScore }` }
        ]}
      />
    );
  }

  const renderRiskFactorTable = () => {
    const _datasource = riskData?.risks || [];
    const _totalItem = _datasource.length;
    const _totalPage = _totalItem / (tablePaginator.pageSize || 1);

    return (
      <Table<RiskLevelResponse>
        columns={[
          { field: 'ruleDescription', headerName: 'ปัจจัยในการพิจารณาความเสี่ยง' },
          { field: 'riskLevel', headerName: 'กลุ่ม', type: 'number' },
          { field: 'score', headerName: 'คะแนน', type: 'number' }
        ]}
        getRowId={(row) => `${ row.ruleId }`}
        rows={ _datasource }
        totalItems={ _totalItem }
        totalPages={ _totalPage }
        paginationModel={ tablePaginator }
        setPaginationModel={ setTablePaginator }
        isLoading={ isLoading }
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

        <div className={'mt-4 flex items-center justify-center'}>
          <Button variant={'contained'} onClick={ onClickReviewButton }>
            ทบทวนกลุ่มความเสี่ยง
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

interface TableDataModel {
  name: string;
  group: number;
  score: number;
}

export default Page;