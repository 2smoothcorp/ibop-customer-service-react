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
import { SectionSeparator } from '@/components/section-separator';
import { useMasterDataTitlesCustom } from '@/hooks/master-data-titles';
import { useAppDispatch } from '@/libs/redux/hook';
import { type StoreTypeKycCdd, saveSpouseInfo } from '@/libs/redux/store/kyc-cdd';
import type { KycSpouseInfoOutputDataResponse } from '@/services/rest-api/customer-service';
import { Codex } from '@/utils/codex';

export const ReviewSpouseInfo = ({ corporateId }: SpouseInfoProps): ReactElement => {
  const [ isEditing, setIsEditing ] = useState(false);
  const { register, handleSubmit, getValues: getFormValue, setValue: setFormValue } = useForm<StoreTypeKycCdd.SpouseFormFields>({
    mode: 'onSubmit',
    resolver: undefined
  });

  const reduxDispatcher = useAppDispatch();
  const masterTitleList = useMasterDataTitlesCustom();

  const { data: spouseInfo, isLoading } = useQuery({
    queryFn: () => fetchGetSpouse(),
    queryKey: ['kyccdd-spouse-info', corporateId]
  });

  useEffect(() => { }, []);

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
    setFormValue('maritalStatus', familyStatus || '');
    setFormValue('title', spouseTitleCode || '');
    setFormValue('firstname', spouseFirstName || '');
    setFormValue('lastname', spouseLastName || '');
    setFormValue('refType', spouseReferenceType || '');
    setFormValue('refId', spouseIdentityId || '');
    return data;
  }

  const toggleFormMode = () => { setIsEditing((current) => !current); }

  const onSubmitForm = (fieldsData: StoreTypeKycCdd.SpouseFormFields) => {
    reduxDispatcher(saveSpouseInfo(fieldsData));
    setIsEditing(false);
  }

  const renderFormSpouse = () => {
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
        register={register}
        onSubmit={handleSubmit(onSubmitForm)}
        fields={[
          {
            type: 'radio',
            label: 'สถานสภาพสมรส', viewText: _maritalStatusText,
            name: 'maritalStatus', value: getFormValue('maritalStatus'),
            options: [
              { label: 'โสด', value: Codex.MaritaiStatus.single },
              { label: 'สมรส', value: Codex.MaritaiStatus.married }
            ]
          },
          {
            type: 'text',
            label: 'ประเภทหลักฐาน', viewText: _refTypeText,
            name: 'refType', value: _refTypeInitValue,
            isHidden: getFormValue('maritalStatus') !== Codex.MaritaiStatus.married
          },
          {
            type: 'text',
            label: 'เลขทีบัตร', viewText: _refIdText,
            name: 'refId', value: _refIdInitValue,
            isHidden: getFormValue('maritalStatus') !== Codex.MaritaiStatus.married
          },
          {
            type: 'select',
            label: 'คำนำหน้า', viewText: _titleText,
            name: 'title', value: getFormValue('title'),
            options: masterTitleList.data || []
          },
          {
            type: 'text',
            label: 'ชื่อ', viewText: _firstnameText,
            name: 'firstname', value: _firstnameInitValue,
            isHidden: getFormValue('maritalStatus') !== Codex.MaritaiStatus.married
          },
          {
            type: 'text',
            label: 'นามสกุล', viewText: _lastnameText,
            name: 'lastname', value: _lastnameInitValue,
            isHidden: getFormValue('maritalStatus') !== Codex.MaritaiStatus.married
          }
        ]}
      />
    );
  }

  return (
    <Fragment>
      <SectionSeparator hasEditAction title={'ข้อมูลคู่สมรส'} onClickEdit={toggleFormMode} />

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