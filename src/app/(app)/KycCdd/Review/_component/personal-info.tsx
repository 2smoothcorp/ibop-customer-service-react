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
import { SectionSeparator } from '@/components/section-separator';
import { useMasterDataCountriesCustom } from '@/hooks/masterDataCountries';
import { useMasterDataTitlesCustom } from '@/hooks/master-data-titles';
import { useMasterDataOccupationCustom } from '@/hooks/master-data-occupation';
import { useMasterDataIncomeRate } from '@/hooks/master-data-income-rate';
import { useMasterDataIncomeSource } from '@/hooks/master-data-income-source';
import { useMasterDataInvestmentPurpose } from '@/hooks/master-data-investment-purpose';
import { useAppDispatch } from '@/libs/redux/hook';
import {
  type StoreTypeKycCdd,
  savePersonalInfo
} from '@/libs/redux/store/kyc-cdd';
import type { ComboBoxWrapperOption } from '@/type/api';
import type { KycPersonalOutputDataResponse } from '@/services/rest-api/customer-service';

import { Form } from '@/components/form';

export const ReviewPersonalInfo = ({ corporateId }: PersonalInfoProps): ReactElement => {
  const [ selectedOccupation, setSelectedOccupation ] = useState<ComboBoxWrapperOption>();
  const [ selectedIncomeCountry, setSelectedIncomeCountry ] = useState<ComboBoxWrapperOption>();
  const [ isEditing, setIsEditing ] = useState(false);
  const { register, handleSubmit, watch: watchFormValue, getValues: getFormValue, setValue: setFormValue } = useForm<StoreTypeKycCdd.PersonalInfoFormFields>({
    mode: 'onSubmit',
    resolver: undefined
  });

  const reduxDispatcher = useAppDispatch();
  const masterTitleList = useMasterDataTitlesCustom();
  const masterCountryList = useMasterDataCountriesCustom();
  const masterOccupationList = useMasterDataOccupationCustom();
  const masterIncomeRateList = useMasterDataIncomeRate();
  const masterIncomeSourceList = useMasterDataIncomeSource();
  const masterInvestmentPurposeList = useMasterDataInvestmentPurpose();

  const { data: personalData, isLoading } = useQuery({
    queryFn: () => fetchGetPersonalInfo(),
    queryKey: ['kyccdd-personal-info', corporateId],
    enabled: !!corporateId
  });

  useEffect(() => {}, []);

  const fetchGetPersonalInfo = async () => {
    const request = await fetch(`/api/kyc/get-personal/${ corporateId }`, { method: 'GET' });
    const response: KycPersonalOutputDataResponse = await request.json();

    const { data } = response;
    if(!data) { return {}; }

    const {
      titleCode,
      firstNameTh, lastNameTh,
      firstNameEn, lastNameEn,
      nationalityCode,
      occupationCode,
      incomeRateCode,
      incomeSourceCode,
      incomeCountry,
      investmentYear,
      investmentPurposeCode
    } = data;
    setFormValue('titleTh', titleCode || '');
    setFormValue('firstnameTh', firstNameTh || '');
    setFormValue('lastnameTh', lastNameTh || '');
    setFormValue('firstnameEn', firstNameEn || '');
    setFormValue('lastnameEn', lastNameEn || '');
    setFormValue('nationality', nationalityCode || '');
    setFormValue('occupation', occupationCode || '');
    setFormValue('incomeRate', incomeRateCode || '');
    setFormValue('incomeSource', (incomeSourceCode || '').split(','));
    setFormValue('incomeCountry', incomeCountry || '');
    setFormValue('exp', investmentYear || 0);
    setFormValue('investmentPurpose', (investmentPurposeCode || '').split(','));
    reduxDispatcher(savePersonalInfo(getFormValue()));
    return data;
  }

  const toggleFormMode = () => { setIsEditing((current) => !current); }

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
            name: 'titleTh', value: watchFormValue('titleTh'),
            options: masterTitleList.data || []
          },
          {
            type: 'text',
            label: 'ชื่อ (ภาษาไทย)', viewText: watchFormValue('firstnameTh') || _firstNameTh,
            name: 'firstnameTh', value: watchFormValue('firstnameTh'),
          },
          {
            type: 'text',
            label: 'นามสกุล (ภาษาไทย)', viewText: watchFormValue('lastnameTh') || _lastNameTh,
            name: 'lastnameTh', value: watchFormValue('lastnameTh'),
          },
          {
            type: 'text',
            label: 'ประเทศเจ้าของสัญชาติ ', viewText: watchFormValue('nationality') || _nationality,
            name: 'nationality', value: watchFormValue('nationality'),
          },
          {
            type: 'text',
            label: 'ชื่อ (ภาษาอังกฤษ)', viewText: watchFormValue('firstnameEn') || _firstNameEn,
            name: 'firstnameEn', value: watchFormValue('firstnameEn'),
          },
          {
            type: 'text',
            label: 'นามสกุล (ภาษาอังกฤษ)', viewText: watchFormValue('lastnameEn') || _lastNameEn,
            name: 'lastnameEn', value: watchFormValue('lastnameEn'),
          },
          {
            type: 'autocomplete',
            label: 'อาชีพ', viewText: _occupation,
            name: 'occupation', value: selectedOccupation,
            options: masterOccupationList.data || [],
            searchMethod: 'contain',
            onSelect: (selectedItem: ComboBoxWrapperOption) => {
              setSelectedOccupation(selectedItem);
              setFormValue('occupation', selectedItem.value);
            }
          },
          {
            type: 'select',
            label: 'รายได้รวมต่อเดือน', viewText: watchFormValue('incomeRate') || `${ _incomeRate }`,
            name: 'incomeRate', value: watchFormValue('incomeRate'),
            options: masterIncomeRateList.data || []
          },
          {
            type: 'checkbox',
            label: 'แหล่งที่มาของรายได้', viewText: (watchFormValue('incomeSource') || []).join(', ') || _incomeSource,
            name: 'incomeSource', value: watchFormValue('incomeSource'),
            options: masterIncomeSourceList.data || [],
            ...((isEditing) ? { colSpan: 12, labelCol: 2, inputCol: 10 } : {})
          },
          {
            type: 'autocomplete',
            label: 'ประเทศของแหล่งที่มาของรายได้/เงินลงทุน', viewText: _incomeCountry,
            name: 'incomeCountry', value: selectedIncomeCountry,
            options: masterCountryList.data || [],
            searchMethod: 'contain',
            onSelect: (selectedItem: ComboBoxWrapperOption) => {
              setSelectedIncomeCountry(selectedItem);
              setFormValue('incomeCountry', selectedItem.value);
            }
          },
          {
            type: 'number',
            label: 'ประสบการณ์การลงทุน (ปี)', viewText: `${ _investmentYear }`,
            name: 'exp', value: watchFormValue('exp')
          },
          {
            type: 'checkbox',
            label: 'วัตถุประสงค์การลงทุน', viewText: (watchFormValue('investmentPurpose') || []).join(', ') || _investmentPurpose,
            name: 'investmentPurpose', value: watchFormValue('investmentPurpose'),
            options: masterInvestmentPurposeList.data || [],
            ...((isEditing) ? { colSpan: 12, labelCol: 2, inputCol: 10 } : {})
          }
        ]}
      />
    );
  }

  return (
    <Fragment>
      <SectionSeparator title={'ข้อมูลส่วนตัว'} hasEditAction={ !isEditing } onClickEdit={ toggleFormMode } />

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