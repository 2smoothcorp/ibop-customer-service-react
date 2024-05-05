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
import { zodResolver } from '@hookform/resolvers/zod';

import { AppLoader } from '@/components/app-loader';
import { Form } from '@/components/form';
import { SectionSeparator } from '@/components/section-separator';
import { useMasterDataTitlesCustom } from '@/hooks/master-data-titles';
import { useMasterDataReferenceCustom } from '@/hooks/master-data-reference';
import { useAppDispatch } from '@/libs/redux/hook';
import { type StoreTypeKycCdd, saveSpouseInfo } from '@/libs/redux/store/kyc-cdd';
import type { KycSpouseInfoOutputDataResponse } from '@/services/rest-api/customer-service';
import { Codex } from '@/utils/codex';

import { FormSchemaSpouseInfo } from './_form-schema';

export const ReviewSpouseInfo = ({ corporateId }: SpouseInfoProps): ReactElement => {
  const [ maritalStatus, setMaritalStatus ] = useState('');
  const [ isEditing, setIsEditing ] = useState(false);
  const { register, handleSubmit, formState, watch: watchFormValue, getValues: getFormValue, setValue: setFormValue } = useForm<StoreTypeKycCdd.SpouseFormFields>({
    mode: 'onSubmit',
    resolver: zodResolver(FormSchemaSpouseInfo)
  });

  const reduxDispatcher = useAppDispatch();
  const masterTitleList = useMasterDataTitlesCustom();
  const masterReferenceTypeList = useMasterDataReferenceCustom();

  const { data: spouseInfo, isLoading } = useQuery({
    queryFn: () => fetchGetSpouse(),
    queryKey: ['kyccdd-spouse-info', corporateId],
    enabled: !!corporateId
  });

  useEffect(() => {}, []);

  const fetchGetSpouse = async () => {
    const request = await fetch(`/api/kyc/get-spouse/${corporateId}`, { method: 'GET' });
    const response: KycSpouseInfoOutputDataResponse = await request.json();

    const { data } = response;
    if (!data) { return ({}); }

    const {
      familyStatus,
      spouseTitleCode, spouseFirstName, spouseLastName,
      spouseReferenceType, spouseIdentityId
    } = data;
    setMaritalStatus(familyStatus || '');
    setFormValue('maritalStatus', familyStatus || '');
    setFormValue('title', spouseTitleCode || '');
    setFormValue('firstname', spouseFirstName || '');
    setFormValue('lastname', spouseLastName || '');
    setFormValue('refType', spouseReferenceType || '');
    setFormValue('refId', spouseIdentityId || '');
    reduxDispatcher(saveSpouseInfo(getFormValue()));
    return data;
  }

  const toggleFormMode = () => { setIsEditing((current) => !current); }

  const onSubmitForm = (fieldsData: StoreTypeKycCdd.SpouseFormFields) => {
    reduxDispatcher(saveSpouseInfo(fieldsData));
    setIsEditing(false);
  }

  const renderFormSpouse = () => {
    const { errors } = formState;
    const _maritalStatusText = spouseInfo?.familyStatus || '-';
    const _refTypeText = spouseInfo?.spouseReferenceType || '-';
    const _refTypeInitValue = spouseInfo?.spouseReferenceType || undefined;
    const _refIdText = spouseInfo?.spouseIdentityId || '-';
    const _refIdInitValue = spouseInfo?.spouseIdentityId || undefined;
    const _titleText = (spouseInfo?.spouseTitleOther) ? spouseInfo.spouseTitleOther : spouseInfo?.spouseTitleName || '';
    const _firstnameText = spouseInfo?.spouseFirstName || '-';
    const _firstnameInitValue = spouseInfo?.spouseFirstName || undefined;
    const _lastnameText = spouseInfo?.spouseLastName || '-';
    const _lastnameInitValue = spouseInfo?.spouseLastName || undefined;
    return (
      <Form<StoreTypeKycCdd.SpouseFormFields>
        isEditing={isEditing}
        baseColSpan={4}
        hookForm={{ register, errors }}
        onSubmit={handleSubmit(onSubmitForm)}
        fields={[
          {
            type: 'radio',
            label: 'สถานสภาพสมรส', viewText: _maritalStatusText,
            name: 'maritalStatus', value: watchFormValue('maritalStatus'),
            options: [
              { label: 'โสด', value: Codex.MaritalStatus.single },
              { label: 'สมรส', value: Codex.MaritalStatus.married }
            ],
            onSelect: (selected) => {
              setFormValue('maritalStatus', selected);
              setMaritalStatus(selected);
            }
          },
          {
            type: 'select',
            label: 'ประเภทหลักฐาน', viewText: _refTypeText,
            name: 'refType', value: _refTypeInitValue,
            isHidden: maritalStatus !== Codex.MaritalStatus.married,
            options: masterReferenceTypeList.data || []
          },
          {
            type: 'text',
            label: 'เลขทีบัตร', viewText: _refIdText,
            name: 'refId', value: _refIdInitValue,
            isHidden: maritalStatus !== Codex.MaritalStatus.married
          },
          {
            type: 'select',
            label: 'คำนำหน้า', viewText: _titleText,
            name: 'title', value: watchFormValue('title'),
            options: masterTitleList.data || [],
            isHidden: maritalStatus !== Codex.MaritalStatus.married
          },
          {
            type: 'text',
            label: 'ชื่อ', viewText: _firstnameText,
            name: 'firstname', value: _firstnameInitValue,
            isHidden: maritalStatus !== Codex.MaritalStatus.married
          },
          {
            type: 'text',
            label: 'นามสกุล', viewText: _lastnameText,
            name: 'lastname', value: _lastnameInitValue,
            isHidden: maritalStatus !== Codex.MaritalStatus.married
          }
        ]}
      />
    );
  }

  return (
    <Fragment>
      <SectionSeparator title={'ข้อมูลคู่สมรส'} hasEditAction={ !isEditing } onClickEdit={toggleFormMode} />

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