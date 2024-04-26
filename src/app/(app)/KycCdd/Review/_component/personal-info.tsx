/**
 *  KYC CDD : Private Component - Personal Info
 */

'use client'

import {
  type ReactElement,
  Fragment,
  useEffect
} from 'react';
import { useQuery } from '@tanstack/react-query';

import { AppLoader } from '@/components/app-loader';
import type { KycPersonalOutputDataResponse } from '@/services/rest-api/customer-service';

import { Form } from '@/components/form';

export const ReviewPersonalInfo = ({ corporateId }: PersonalInfoProps): ReactElement => {
  useEffect(() => {}, []);

  const { data: personalData, isLoading } = useQuery({
    queryFn: () => fetchGetPersonalInfo(),
    queryKey: ['kyccdd-personal-info', corporateId]
  });

  const fetchGetPersonalInfo = async () => {
    const request = await fetch(`/api/kyc/get-personal/${ corporateId }`, { method: 'GET' });
    const response: KycPersonalOutputDataResponse = await request.json();

    const { data } = response;
    if(!data) { return {}; }
    return data;
  }

  const formAction = (data: FormData) => {
    // console.log('formAction', data)
    // const investmentObjective = data.getAll('investmentObjective');
    // console.log('investmentObjective', investmentObjective)
  }

  const renderFormPersonal = () => {
    const _firstNameTh = personalData?.firstNameTh || '-';
    const _lastNameTh = personalData?.lastNameTh || '-';
    const _firstNameEn = personalData?.firstNameEn || '-';
    const _lastNameEn = personalData?.lastNameEn || '-';
    const _nationality = `${ personalData?.nationalityCode || '' } - ${ personalData?.nationalityDesc || '' }`.trim();
    const _occupation = `${ personalData?.occupationCode || '' } - ${ personalData?.occupationDesc || '' }`.trim();
    const _monthlyIncome = personalData?.monthlyIncome || 0;
    const _incomeSource = `${ personalData?.incomeSourceCode || '' } - ${ personalData?.incomeSourceDesc || '' }`.trim();
    const _incomeCountry = personalData?.incomeCountry || '-';
    const _investmentYear = personalData?.investmentYear || 0;
    const _investmentPurpose = (personalData?.investmentPurposeOther) ? personalData?.investmentPurposeOther || '' : `${ personalData?.investmentPurposeCode || '' } - ${ personalData?.investmentPurposeDesc }`;

    return (
      <Form
        action={ formAction }
        fields={[
          {
            type: 'text',
            label: 'ชื่อ (ภาษาไทย)', viewText: _firstNameTh,
            name: 'firstnameTh'
          },
          {
            type: 'text',
            label: 'นามสกุล (ภาษาไทย)', viewText: _lastNameTh,
            name: 'lastnameTh'
          },
          {
            type: 'text',
            label: 'ชื่อ (ภาษาอังกฤษ)', viewText: _firstNameEn,
            name: 'firstnameEn'
          },
          {
            type: 'text',
            label: 'นามสกุล (ภาษาอังกฤษ)', viewText: _lastNameEn,
            name: 'lastnameEn'
          },
          {
            type: 'text',
            label: 'ประเทศเจ้าของสัญชาติ ', viewText: _nationality,
            name: 'nationality'
          },
          {
            type: 'text',
            label: 'อาชีพ', viewText: _occupation,
            name: 'occupation'
          },
          {
            type: 'number',
            label: 'รายได้รวมต่อเดือน', viewText: `${ _monthlyIncome }`,
            name: 'monthlyIncome'
          },
          {
            type: 'checkbox',
            label: 'แหล่งที่มาของรายได้', viewText: _incomeSource,
            name: 'incomeSource',
            options: [
              { label: 'aaa', value: 'aaa' },
              { label: 'bbb', value: 'bbb' },
              { label: 'ccc', value: 'ccc' }
            ]
          },
          {
            type: 'select',
            label: 'ประเทศของแหล่งที่มาของรายได้/เงินลงทุน', viewText: _incomeCountry,
            name: 'incomeCountry',
            options: []
          },
          {
            type: 'number',
            label: 'ประสบการณ์การลงทุน (ปี)', viewText: `${ _investmentYear }`,
            name: 'exp'
          },
          {
            type: 'checkbox',
            label: 'วัตถุประสงค์การลงทุน', viewText: _investmentPurpose,
            name: 'investmentPurpose',
            options: [
              { label: 'aaa', value: 'aaa' },
              { label: 'bbb', value: 'bbb' },
              { label: 'ccc', value: 'ccc' }
            ]
          }
        ]}
      />
    );
  }

  return (
    <Fragment>
      <div className={'my-4 border-b-2 border-b-slate-500'}>
        <strong className={'text-xl text-success-500'}>ข้อมูลส่วนตัว</strong>
      </div>

      {
        (isLoading)
        ? (<AppLoader asContentLoader />)
        : (renderFormPersonal())
      }
    </Fragment>
  );
}

interface PersonalInfoProps {
  corporateId: string;
}