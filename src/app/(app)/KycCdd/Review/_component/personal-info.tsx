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
import { zodResolver } from '@hookform/resolvers/zod';

import { AppLoader } from '@/components/app-loader';
import { Form } from '@/components/form';
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
import { getSingleLabelFromValue, getAggregateLabelFromValue } from '@/utils/get-label-from-value';

import { FormSchemaPersonalInfo } from './_form-schema';

export const ReviewPersonalInfo = ({ corporateId, onToggleEdit }: PersonalInfoProps): ReactElement => {
  const [ selectedNationality, setSelectedNationality ] = useState<ComboBoxWrapperOption>();
  const [ selectedOccupation, setSelectedOccupation ] = useState<ComboBoxWrapperOption>();
  const [ selectedIncomeCountry, setSelectedIncomeCountry ] = useState<ComboBoxWrapperOption>();
  const [ isEditing, setIsEditing ] = useState(false);
  const {
    register, handleSubmit, formState,
    watch: watchFormValue, getValues: getFormValue, setValue: setFormValue
  } = useForm<StoreTypeKycCdd.PersonalInfoFormFields>({
    defaultValues: {
      titleTh: '',
      firstnameTh: '',
      lastnameTh: '',
      firstnameEn: '',
      lastnameEn: '',
      nationality: '',
      occupation: '',
      incomeRate: '',
      incomeSource: [],
      incomeCountry: '',
      exp: 0,
      investmentPurpose: []
    },
    mode: 'onSubmit',
    resolver: zodResolver(FormSchemaPersonalInfo)
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
    setFormValue('incomeSource', (incomeSourceCode) ? incomeSourceCode.split(',') : []);
    setFormValue('incomeCountry', incomeCountry || '');
    setFormValue('exp', investmentYear || 0);
    setFormValue('investmentPurpose', (investmentPurposeCode) ? investmentPurposeCode.split(',') : []);
    reduxDispatcher(savePersonalInfo(getFormValue()));
    return data;
  }

  const toggleFormMode = () => {
    if(onToggleEdit) { onToggleEdit(!isEditing); }
    setIsEditing((current) => !current);
  }

  const onSubmitForm = (fieldsData: StoreTypeKycCdd.PersonalInfoFormFields) => {
    reduxDispatcher(savePersonalInfo(fieldsData));
    toggleFormMode();
  }

  const renderFormPersonal = () => {
    const { errors } = formState;
    return (
      <Form<StoreTypeKycCdd.PersonalInfoFormFields>
        isEditing={ isEditing }
        baseColSpan={4}
        hookForm={{ register, errors }}
        onSubmit={ handleSubmit(onSubmitForm) }
        fields={[
          {
            type: 'select',
            label: 'คำนำหน้า', viewText: getSingleLabelFromValue({ datasource: masterTitleList.data || [], searchValue: watchFormValue('titleTh') }),
            name: 'titleTh', value: watchFormValue('titleTh'),
            options: masterTitleList.data || []
          },
          {
            type: 'text',
            label: 'ชื่อ (ภาษาไทย)', viewText: watchFormValue('firstnameTh'),
            name: 'firstnameTh', value: watchFormValue('firstnameTh'),
          },
          {
            type: 'text',
            label: 'นามสกุล (ภาษาไทย)', viewText: watchFormValue('lastnameTh'),
            name: 'lastnameTh', value: watchFormValue('lastnameTh'),
          },
          {
            type: 'autocomplete',
            label: 'ประเทศเจ้าของสัญชาติ ', viewText: getSingleLabelFromValue({ datasource: masterCountryList.data || [], searchValue: watchFormValue('nationality') }),
            name: 'nationality', value: selectedNationality,
            options: masterCountryList.data || [],
            searchMethod: 'contain',
            onSelect: (selectedItem: ComboBoxWrapperOption) => {
              setSelectedNationality(selectedItem);
              setFormValue('nationality', selectedItem.value);
            }
          },
          {
            type: 'text',
            label: 'ชื่อ (ภาษาอังกฤษ)', viewText: watchFormValue('firstnameEn'),
            name: 'firstnameEn', value: watchFormValue('firstnameEn'),
          },
          {
            type: 'text',
            label: 'นามสกุล (ภาษาอังกฤษ)', viewText: watchFormValue('lastnameEn'),
            name: 'lastnameEn', value: watchFormValue('lastnameEn'),
          },
          {
            type: 'autocomplete',
            label: 'อาชีพ', viewText: getSingleLabelFromValue({ datasource: masterOccupationList.data || [], searchValue: watchFormValue('occupation') } ),
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
            label: 'รายได้รวมต่อเดือน', viewText: getSingleLabelFromValue({ datasource: masterIncomeRateList.data || [], searchValue: watchFormValue('incomeRate') } ),
            name: 'incomeRate', value: watchFormValue('incomeRate'),
            options: masterIncomeRateList.data || []
          },
          {
            type: 'checkbox',
            label: 'แหล่งที่มาของรายได้', viewText: getAggregateLabelFromValue({ datasource: masterIncomeSourceList.data || [], searchValue: watchFormValue('incomeSource') || [] }),
            name: 'incomeSource', value: watchFormValue('incomeSource'),
            options: masterIncomeSourceList.data || [],
            ...((isEditing) ? { colSpan: 12, labelCol: 2, inputCol: 10 } : {})
          },
          {
            type: 'autocomplete',
            label: 'ประเทศของแหล่งที่มาของรายได้/เงินลงทุน', viewText: getSingleLabelFromValue({ datasource: masterCountryList.data || [], searchValue: watchFormValue('incomeCountry') }),
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
            label: 'ประสบการณ์การลงทุน (ปี)', viewText: `${ watchFormValue('exp') }`,
            name: 'exp', value: watchFormValue('exp')
          },
          {
            type: 'checkbox',
            label: 'วัตถุประสงค์การลงทุน', viewText: getAggregateLabelFromValue({ datasource: masterInvestmentPurposeList.data || [], searchValue: watchFormValue('investmentPurpose') || [] }),
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
  onToggleEdit?: (isEditing: boolean) => void;
}