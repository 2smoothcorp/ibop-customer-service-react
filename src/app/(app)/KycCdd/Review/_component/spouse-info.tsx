/**
 *  KYC CDD : Private Component - Spouse Info
 */

'use client'

import {
  type ReactElement,
  Fragment,
  useEffect
} from 'react';
import { useQuery } from '@tanstack/react-query';

import { AppLoader } from '@/components/app-loader';
import { Form } from '@/components/form';
import type { KycSpouseInfoOutputDataResponse } from '@/services/rest-api/customer-service';

export const ReviewSpouseInfo = ({ corporateId }: SpouseInfoProps): ReactElement => {
  useEffect(() => {}, []);

  const { data: spouseInfo, isLoading } = useQuery({
    queryFn: () => fetchGetSpouse(),
    queryKey: ['kyccdd-spouse-info', corporateId]
  });

  const fetchGetSpouse = async () => {
    const request = await fetch(`/api/kyc/get-spouse/${ corporateId }`, { method: 'GET' });
    const response: KycSpouseInfoOutputDataResponse = await request.json();

    const { data } = response;
    if(!data) { return ({}); }
    return data;
  }

  const formAction = (data: FormData) => {
    //
  }

  const renderFormSpouse = () => {
    const _maritalStatus = spouseInfo?.familyStatus || '-';
    const _refType = spouseInfo?.spouseReferenceType || '-';
    const _refId = spouseInfo?.spouseIdentityId || '-';
    const _firstname = spouseInfo?.spouseFirstName || '-';
    const _lastname = spouseInfo?.spouseLastName || '-';
    return (
      <Form
        action={ formAction }
        fields={[
          {
            type: 'text',
            label: 'สถานสภาพสมรส', viewText: _maritalStatus,
            colSpan: 4,
            name: 'maritalStatus'
          },
          {
            type: 'text',
            label: 'ประเภทหลักฐาน', viewText: _refType,
            colSpan: 4,
            name: 'refType'
          },
          {
            type: 'text',
            label: 'เลขทีบัตร', viewText: _refId,
            colSpan: 4,
            name: 'refId'
          },
          {
            type: 'text',
            label: 'ชื่อ', viewText: _firstname,
            colSpan: 4,
            name: 'firstname'
          },
          {
            type: 'text',
            label: 'นามสกุล', viewText: _lastname,
            colSpan: 4,
            name: 'lastname'
          }
        ]}
      />
    );
  }

  return (
    <Fragment>
      <div className={'my-4 border-b-2 border-b-slate-500'}>
        <strong className={'text-xl text-success-500'}>ข้อมูลคู่สมรส</strong>
      </div>

      {
        (isLoading)
        ? (<AppLoader asContentLoader />)
        : (renderFormSpouse())
      }
    </Fragment>
  );
}

interface SpouseInfoProps {
  corporateId: string;
}