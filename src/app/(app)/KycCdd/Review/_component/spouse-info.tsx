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

export const ReviewSpouseInfo = ({ corporateId, onToggleEdit }: SpouseInfoProps): ReactElement => {
  const [ maritalStatus, setMaritalStatus ] = useState('');
  const [ isEditing, setIsEditing ] = useState(false);
  const {
    register, handleSubmit, formState,
    watch: watchFormValue, getValues: getFormValue, setValue: setFormValue
  } = useForm<StoreTypeKycCdd.SpouseFormFields>({
    defaultValues: {
      maritalStatus: '',
      refType: '',
      refId: '',
      title: '',
      firstname: '',
      lastname: ''
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
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

  const toggleFormMode = () => {
    if(onToggleEdit) { onToggleEdit(!isEditing); }
    setIsEditing((current) => !current);
  }

  const onSubmitForm = (fieldsData: StoreTypeKycCdd.SpouseFormFields) => {
    reduxDispatcher(saveSpouseInfo(fieldsData));
    toggleFormMode();
  }

  const renderFormSpouse = () => {
    const { errors } = formState;
    return (
      <Form<StoreTypeKycCdd.SpouseFormFields>
        isEditing={isEditing}
        baseColSpan={4}
        hookForm={{ register, errors }}
        onSubmit={handleSubmit(onSubmitForm)}
        fields={[
          {
            type: 'radio',
            label: 'สถานสภาพสมรส', viewText: watchFormValue('maritalStatus') || '-',
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
            label: 'ประเภทหลักฐาน', viewText: (masterReferenceTypeList.data || []).find((_f) => _f.value === watchFormValue('refType'))?.label || '-',
            name: 'refType', value: watchFormValue('refType'),
            isHidden: maritalStatus !== Codex.MaritalStatus.married,
            options: masterReferenceTypeList.data || []
          },
          {
            type: 'text',
            label: 'เลขทีบัตร', viewText: watchFormValue('refId') || '-',
            name: 'refId', value: watchFormValue('refId'),
            isHidden: maritalStatus !== Codex.MaritalStatus.married
          },
          {
            type: 'select',
            label: 'คำนำหน้า', viewText: (masterTitleList.data || []).find((_f) => _f.value === watchFormValue('title'))?.label || '-',
            name: 'title', value: watchFormValue('title'),
            options: masterTitleList.data || [],
            isHidden: maritalStatus !== Codex.MaritalStatus.married
          },
          {
            type: 'text',
            label: 'ชื่อ', viewText: watchFormValue('firstname') || '-',
            name: 'firstname', value: watchFormValue('firstname'),
            isHidden: maritalStatus !== Codex.MaritalStatus.married
          },
          {
            type: 'text',
            label: 'นามสกุล', viewText: watchFormValue('lastname') || '-',
            name: 'lastname', value: watchFormValue('lastname'),
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
  onToggleEdit?: (isEditing: boolean) => void;
}