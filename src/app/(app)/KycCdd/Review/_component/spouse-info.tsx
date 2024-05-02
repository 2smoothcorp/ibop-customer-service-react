/**
 *  KYC CDD : Private Component - Spouse Info
 */

'use client'

import {
  type ReactElement,
  Fragment,
  useEffect,
  useState
} from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

import { AppLoader } from '@/components/app-loader';
import { Form } from '@/components/form';
import type { KycSpouseInfoOutputDataResponse } from '@/services/rest-api/customer-service';
import { getSessionStorage } from '@/utils/web-storage';

export const ReviewSpouseInfo = ({ corporateId }: SpouseInfoProps): ReactElement => {
  const [ isEditing, setIsEditing ] = useState(false);
  const { register, handleSubmit } = useForm<SpouseFormFields>({
    mode: 'onSubmit',
    resolver: undefined
  });

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

  const onSubmitForm = (fieldsData: SpouseFormFields) => {
    console.log('onSubmitForm', fieldsData);

    const _storage = getSessionStorage();
    if(!_storage) { return; }

    const _storageKey = `kyccdd-spouse-info-${ corporateId }`;
    const _stingifyData = JSON.stringify(fieldsData);
    _storage.setItem(_storageKey, _stingifyData);
    setIsEditing(false);
  }

  const renderFormSpouse = () => {
    const _maritalStatus = spouseInfo?.familyStatus || '-';
    const _refType = spouseInfo?.spouseReferenceType || '-';
    const _refId = spouseInfo?.spouseIdentityId || '-';
    const _firstname = spouseInfo?.spouseFirstName || '-';
    const _lastname = spouseInfo?.spouseLastName || '-';
    return (
      <Form
        isEditing={ isEditing }
        baseColSpan={4}
        register={ register }
        onSubmit={ handleSubmit(onSubmitForm) }
        fields={[
          {
            type: 'text',
            label: 'สถานสภาพสมรส', viewText: _maritalStatus,
            name: 'maritalStatus'
          },
          {
            type: 'text',
            label: 'ประเภทหลักฐาน', viewText: _refType,
            name: 'refType'
          },
          {
            type: 'text',
            label: 'เลขทีบัตร', viewText: _refId,
            name: 'refId'
          },
          {
            type: 'text',
            label: 'ชื่อ', viewText: _firstname,
            name: 'firstname'
          },
          {
            type: 'text',
            label: 'นามสกุล', viewText: _lastname,
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

export interface SpouseFormFields {
  maritalStatus: string;
  refType: string;
  refId: string;
  firstname: string;
  lastname: string;
}