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
import { swal } from '@/libs/sweetalert';
import { useAppDispatch, useAppSelector } from '@/libs/redux/hook';
import { type StoreTypeKycCdd, saveSpouseInfo } from '@/libs/redux/store/kyc-cdd';
import type { KycSpouseInfoOutputDataResponse } from '@/services/rest-api/customer-service';
import { Codex } from '@/utils/codex';
import { getSingleLabelFromValue } from '@/utils/get-label-from-value';
import { hasTruthyValueFromObject } from '@/utils/has-truthy-value-from-object';

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
  const kyccddStored = useAppSelector((selector) => selector.kyccdd);
  const masterTitleList = useMasterDataTitlesCustom();
  const masterReferenceTypeList = useMasterDataReferenceCustom();

  const choicesMaritalStatus = [
    { label: 'โสด', value: Codex.MaritalStatus.single },
    { label: 'สมรส', value: Codex.MaritalStatus.married }
  ];

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

    if(hasTruthyValueFromObject(kyccddStored.spouseInfo)) {
      const { spouseInfo } = kyccddStored;
      const {
        maritalStatus,
        refType, refId,
        title, firstname, lastname
      } = spouseInfo;

      setMaritalStatus(maritalStatus || '');
      setFormValue('maritalStatus', maritalStatus || '');
      setFormValue('title', title || '');
      setFormValue('firstname', firstname || '');
      setFormValue('lastname', lastname || '');
      setFormValue('refType', refType || '');
      setFormValue('refId', refId || '');

      return data;
    }

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

  const onSubmitForm = async (fieldsData: StoreTypeKycCdd.SpouseFormFields) => {
    reduxDispatcher(saveSpouseInfo(fieldsData));

    await swal({
      title: 'ยืนยันข้อมูลสำเร็จ',
      description: 'ระบบได้ทำการบันทึกข้อมูลของคุณเรียบร้อย',
      icon: 'success',
      confirmButton: { text: 'เสร็จสิ้น' }
    });

    toggleFormMode();
  }

  const renderFormSpouse = () => {
    const { errors } = formState;
    return (
      <Form<StoreTypeKycCdd.SpouseFormFields>
        isEditing={isEditing}
        baseColSpan={4}
        hookForm={{ register, errors }}
        onSubmit={ handleSubmit(onSubmitForm) }
        onCancel={ toggleFormMode }
        fields={[
          {
            type: 'radio',
            label: 'สถานสภาพสมรส', viewText: getSingleLabelFromValue({ datasource: choicesMaritalStatus, searchValue: watchFormValue('maritalStatus') }),
            name: 'maritalStatus', value: watchFormValue('maritalStatus'),
            options: choicesMaritalStatus,
            onSelect: (selected) => { setFormValue('maritalStatus', selected); setMaritalStatus(selected); }
          },
          {
            type: 'select',
            label: 'ประเภทหลักฐาน', viewText: getSingleLabelFromValue({ datasource: masterReferenceTypeList.data || [], searchValue: watchFormValue('refType') }),
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
            label: 'คำนำหน้า', viewText: getSingleLabelFromValue({ datasource: masterTitleList.data || [], searchValue: watchFormValue('title') }),
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