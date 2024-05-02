/**
 *  KYC CDD : Private Component - Personal Info
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
import { useMasterDataCountriesCustom } from '@/hooks/masterDataCountries';
import { useMasterDataTitlesCustom } from '@/hooks/master-data-titles';
import { useMasterDataIncomeRate } from '@/hooks/master-data-income-rate';
import { useMasterDataIncomeSource } from '@/hooks/master-data-income-source';
import { useMasterDataInvestmentPurpose } from '@/hooks/master-data-investment-purpose';
import { useAppDispatch } from '@/libs/redux/hook';
import {
  type StoreTypeKycCdd,
  savePersonalInfo
} from '@/libs/redux/store/kyc-cdd';
import type { KycPersonalOutputDataResponse } from '@/services/rest-api/customer-service';

import { Form } from '@/components/form';

export const ReviewPersonalInfo = ({ corporateId }: PersonalInfoProps): ReactElement => {
  const [ isEditing, setIsEditing ] = useState(true);
  const { register, handleSubmit } = useForm<StoreTypeKycCdd.PersonalInfoFormFields>({
    mode: 'onSubmit',
    resolver: undefined
  });

  const reduxDispatcher = useAppDispatch();
  const masterDataTitleList = useMasterDataTitlesCustom();
  const masterCountryList = useMasterDataCountriesCustom();
  const masterIncomeRateList = useMasterDataIncomeRate();
  const masterIncomeSourceList = useMasterDataIncomeSource();
  const masterInvestmentPurposeList = useMasterDataInvestmentPurpose();

  const { data: personalData, isLoading } = useQuery({
    queryFn: () => fetchGetPersonalInfo(),
    queryKey: ['kyccdd-personal-info', corporateId]
  });

  useEffect(() => {}, []);

  const fetchGetPersonalInfo = async () => {
    const request = await fetch(`/api/kyc/get-personal/${ corporateId }`, { method: 'GET' });
    const response: KycPersonalOutputDataResponse = await request.json();

    const { data } = response;
    if(!data) { return {}; }
    return data;
  }

  const onSubmitForm = (fieldsData: StoreTypeKycCdd.PersonalInfoFormFields) => {
    reduxDispatcher(savePersonalInfo(fieldsData));
    setIsEditing(false);
  }

  const renderFormPersonal = () => {
    const _titleTh = `${ personalData?.titleCode || '' } - ${ personalData?.titleNameTh || '' }`.trim();
    const _firstNameTh = personalData?.firstNameTh || '-';
    const _lastNameTh = personalData?.lastNameTh || '-';
    const _firstNameEn = personalData?.firstNameEn || '-';
    const _lastNameEn = personalData?.lastNameEn || '-';
    const _nationality = `${ personalData?.nationalityCode || '' } - ${ personalData?.nationalityDesc || '' }`.trim();
    const _occupation = `${ personalData?.occupationCode || '' } - ${ personalData?.occupationDesc || '' }`.trim();
    const _incomeRate = `${ personalData?.incomeRateCode || '' } - ${ personalData?.incomeRateDesc || '' }`.trim();
    const _incomeSource = personalData?.incomeSourceDesc || '-';
    const _incomeCountry = personalData?.incomeCountry || '-';
    const _investmentYear = personalData?.investmentYear || 0;
    const _investmentPurpose = (personalData?.investmentPurposeOther) ? personalData?.investmentPurposeOther || '-' : personalData?.investmentPurposeDesc || '-';

    return (
      <Form<StoreTypeKycCdd.PersonalInfoFormFields>
        isEditing={ isEditing }
        baseColSpan={4}
        register={ register }
        onSubmit={ handleSubmit(onSubmitForm) }
        fields={[
          {
            type: 'select',
            label: 'คำนำหน้า', viewText: _titleTh,
            name: 'titleTh',
            options: masterDataTitleList.data || []
          },
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
            label: 'ประเทศเจ้าของสัญชาติ ', viewText: _nationality,
            name: 'nationality'
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
            label: 'อาชีพ', viewText: _occupation,
            name: 'occupation'
          },
          {
            type: 'select',
            label: 'รายได้รวมต่อเดือน', viewText: `${ _incomeRate }`,
            name: 'incomeRate',
            options: masterIncomeRateList.data || []
          },
          {
            type: 'checkbox',
            label: 'แหล่งที่มาของรายได้', viewText: _incomeSource,
            ...((isEditing) ? { colSpan: 12, labelCol: 2, inputCol: 10 } : {}),
            name: 'incomeSource',
            options: masterIncomeSourceList.data || []
          },
          {
            type: 'select',
            label: 'ประเทศของแหล่งที่มาของรายได้/เงินลงทุน', viewText: _incomeCountry,
            name: 'incomeCountry',
            options: masterCountryList.data || []
          },
          {
            type: 'number',
            label: 'ประสบการณ์การลงทุน (ปี)', viewText: `${ _investmentYear }`,
            name: 'exp'
          },
          {
            type: 'checkbox',
            label: 'วัตถุประสงค์การลงทุน', viewText: _investmentPurpose,
            ...((isEditing) ? { colSpan: 12, labelCol: 2, inputCol: 10 } : {}),
            name: 'investmentPurpose',
            options: masterInvestmentPurposeList.data || []
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