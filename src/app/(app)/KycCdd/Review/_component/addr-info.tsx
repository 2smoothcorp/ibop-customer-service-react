/**
 *  KYC CDD : Private Component - Addr Info
 */

'use client'

import {
  Fragment,
  useEffect,
  useState,
  type ReactElement
} from 'react';
import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AppLoader } from '@/components/app-loader';
import { Form } from '@/components/form';
import { SectionSeparator } from '@/components/section-separator';
import { useMasterDataCountriesCustom } from '@/hooks/masterDataCountries';
import { useThailandAddress, getSingleThailandAddress, addressEmptyOption, addressForeignOption, type ThaiAddrInfo } from '@/hooks/thailand-address';
import { useAppDispatch } from '@/libs/redux/hook';
import { type StoreTypeKycCdd, saveCurrentAddressInfo, saveWorkAddressInfo } from '@/libs/redux/store/kyc-cdd';
import type { ComboBoxWrapperOption } from '@/type/api';
import type { KycAddressOutputListDataResponse } from '@/services/rest-api/customer-service';
import { Codex } from '@/utils/codex';
import { removeObjectKeyPrefix } from '@/utils/remove-object-key-prefix';

import { FormSchemaCurrentAddress, FormSchemaWorkAddress } from './_form-schema';

export const ReviewAddrInfo = ({ corporateId, onToggleEdit }: AddrInfoProps): ReactElement => {
  const [ isEditingCurrentAddr, setIsEditingCurrentAddr ] = useState(false);
  const [ isEditingWorkAddr, setIsEditingWorkAddr ] = useState(false);
  const [ selectedCurrentAddrCountry, setSelectedCurrentAddrCountry ] = useState<ComboBoxWrapperOption>();
  const [ selectedWorkAddrCountry, setSelectedWorkAddrCountry ] = useState<ComboBoxWrapperOption>();
  const [ selectedCurrentThAddr, setSelectedCurrentThAddr ] = useState<ThaiAddrInfo>(addressEmptyOption);
  const [ selectedWorkThAddr, setSelectedWorkThAddr ] = useState<ThaiAddrInfo>(addressEmptyOption);

  const reduxDispatcher = useAppDispatch();
  const masterCountryList = useMasterDataCountriesCustom();
  const thaiAddrInfo = useThailandAddress();

  const currentAddrHookForm = useForm<StoreTypeKycCdd.CurrentAddrFormFields>({
    defaultValues: {
      currentAddr_addressNo: '',
      currentAddr_moo: '',
      currentAddr_buildingOrVillage: '',
      currentAddr_roomNo: '',
      currentAddr_floor: '',
      currentAddr_soi: '',
      currentAddr_street: '',
      currentAddr_countryCode: '',
      currentAddr_zipCode: '',
      currentAddr_provinceCode: '',
      currentAddr_districtCode: '',
      currentAddr_subDistrictCode: '',
      currentAddr_customAddress1: '',
      currentAddr_customAddress2: '',
      currentAddr_customAddress3: ''
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(FormSchemaCurrentAddress)
  });

  const workAddrHookForm = useForm<StoreTypeKycCdd.WorkAddrFormFields>({
    defaultValues: {
      workAddr_addressNo: '',
      workAddr_moo: '',
      workAddr_buildingOrVillage: '',
      workAddr_roomNo: '',
      workAddr_floor: '',
      workAddr_soi: '',
      workAddr_street: '',
      workAddr_countryCode: '',
      workAddr_zipCode: '',
      workAddr_provinceCode: '',
      workAddr_districtCode: '',
      workAddr_subDistrictCode: '',
      workAddr_customAddress1: '',
      workAddr_customAddress2: '',
      workAddr_customAddress3: ''
    },
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: zodResolver(FormSchemaWorkAddress)
  });

  const { data: addressList, isLoading } = useQuery({
    queryFn: () => fetchGetAddress(),
    queryKey: ['kyccdd-address-info', corporateId],
    enabled: !!corporateId
  });

  useEffect(() => {}, []);

  const fetchGetAddress = async () => {
    const request = await fetch(`/api/kyc/get-address/${corporateId}`, { method: 'GET' });
    const response: KycAddressOutputListDataResponse = await request.json();

    const { data } = response;
    if (!data) { return ({ currentAddr: {}, workAddr: {} }); }

    const currentAddr = data.find((_f) => _f.addressTypeCode === Codex.AddressType.current);
    const workAddr = data.find((_f) => _f.addressTypeCode === Codex.AddressType.work);
    if(currentAddr) {
      const { getValues: getFormValue, setValue: setFormValue } = currentAddrHookForm;
      const {
        addressNo,
        moo,
        buildingOrVillage,
        roomNo,
        floor,
        soi,
        street,
        countryCode,
        zipCode,
        provinceCode,
        districtCode,
        subDistrictCode,
        customAddress1,
        customAddress2,
        customAddress3
      } = currentAddr;
      setFormValue('currentAddr_addressNo', addressNo || '');
      setFormValue('currentAddr_moo', moo || '');
      setFormValue('currentAddr_buildingOrVillage', buildingOrVillage || '');
      setFormValue('currentAddr_roomNo', roomNo || '');
      setFormValue('currentAddr_floor', floor || '');
      setFormValue('currentAddr_soi', soi || '');
      setFormValue('currentAddr_street', street || '');
      setFormValue('currentAddr_countryCode', countryCode || '');
      setFormValue('currentAddr_zipCode', zipCode || '');
      setFormValue('currentAddr_provinceCode', provinceCode || '');
      setFormValue('currentAddr_districtCode', districtCode || '');
      setFormValue('currentAddr_subDistrictCode', subDistrictCode || '');
      setFormValue('currentAddr_customAddress1', customAddress1 || '');
      setFormValue('currentAddr_customAddress2', customAddress2 || '');
      setFormValue('currentAddr_customAddress3', customAddress3 || '');

      if(countryCode === '000') {
        setSelectedCurrentAddrCountry({ label: '000 - ไทย', value: '000' });
      }

      const _addr = getSingleThailandAddress({ po: zipCode || '', p: provinceCode || '', d: districtCode || '', s: subDistrictCode || '' });
      setSelectedCurrentThAddr(_addr);

      const _refined = removeObjectKeyPrefix({ obj: getFormValue(), prefix: 'currentAddr_' });;
      reduxDispatcher(saveCurrentAddressInfo(_refined));
    }

    if(workAddr) {
      const { getValues: getFormValue, setValue: setFormValue } = workAddrHookForm;
      const {
        addressNo,
        moo,
        buildingOrVillage,
        roomNo,
        floor,
        soi,
        street,
        countryCode,
        zipCode,
        provinceCode,
        districtCode,
        subDistrictCode,
        customAddress1,
        customAddress2,
        customAddress3
      } = workAddr;
      setFormValue('workAddr_addressNo', addressNo || '');
      setFormValue('workAddr_moo', moo || '');
      setFormValue('workAddr_buildingOrVillage', buildingOrVillage || '');
      setFormValue('workAddr_roomNo', roomNo || '');
      setFormValue('workAddr_floor', floor || '');
      setFormValue('workAddr_soi', soi || '');
      setFormValue('workAddr_street', street || '');
      setFormValue('workAddr_countryCode', countryCode || '');
      setFormValue('workAddr_zipCode', zipCode || '');
      setFormValue('workAddr_provinceCode', provinceCode || '');
      setFormValue('workAddr_districtCode', districtCode || '');
      setFormValue('workAddr_subDistrictCode', subDistrictCode || '');
      setFormValue('workAddr_customAddress1', customAddress1 || '');
      setFormValue('workAddr_customAddress2', customAddress2 || '');
      setFormValue('workAddr_customAddress3', customAddress3 || '');

      if(countryCode === '000') {
        setSelectedWorkAddrCountry({ label: '000 - ไทย', value: '000' });
      }

      const _addr = getSingleThailandAddress({ po: zipCode || '', p: provinceCode || '', d: districtCode || '', s: subDistrictCode || '' });
      setSelectedWorkThAddr(_addr);

      const _refined = removeObjectKeyPrefix({ obj: getFormValue(), prefix: 'workAddr_' });;
      reduxDispatcher(saveCurrentAddressInfo(_refined));
    }

    return ({ currentAddr: currentAddr || {}, workAddr: workAddr || {} });
  }

  const toggleCurrentAddrFormMode = () => {
    if(onToggleEdit) { onToggleEdit(!isEditingCurrentAddr || !isEditingCurrentAddr); }
    setIsEditingCurrentAddr((current) => !current);
  }

  const toggleWorkAddrFormMode = () => {
    if(onToggleEdit) { onToggleEdit(!isEditingWorkAddr || !isEditingWorkAddr); }
    setIsEditingWorkAddr((current) => !current);
  }

  const onSubmitCurrentAddrForm = (fieldsData: StoreTypeKycCdd.CurrentAddrFormFields) => {
    if(!selectedCurrentAddrCountry) { return; }
    if(!selectedCurrentThAddr) { return; }

    const refinedFieldsData: StoreTypeKycCdd.AddressFields = removeObjectKeyPrefix({ obj: fieldsData, prefix: 'currentAddr_' });
    reduxDispatcher(saveCurrentAddressInfo(refinedFieldsData));
    toggleCurrentAddrFormMode();
  }

  const onSubmitWorkAddrForm = (fieldsData: StoreTypeKycCdd.WorkAddrFormFields) => {
    if(!selectedWorkAddrCountry) { return; }
    if(!selectedWorkThAddr) { return; }

    const refinedFieldsData: StoreTypeKycCdd.AddressFields = removeObjectKeyPrefix({ obj: fieldsData, prefix: 'workAddr_' });
    reduxDispatcher(saveWorkAddressInfo(refinedFieldsData));
    toggleWorkAddrFormMode();
  }

  const renderFormCurrentAddress = () => {
    const { register, handleSubmit, watch: watchFormValue, setValue: setFormValue, formState: { errors } } = currentAddrHookForm;
    const _isForeign = selectedCurrentThAddr?.po === Codex.Postcode.foreign;
    return (
      <Form<StoreTypeKycCdd.CurrentAddrFormFields>
        isEditing={isEditingCurrentAddr}
        baseColSpan={4}
        hookForm={{ register, errors }}
        onSubmit={handleSubmit(onSubmitCurrentAddrForm)}
        fields={[
          {
            type: 'text',
            label: 'เลขที่', viewText: watchFormValue('currentAddr_addressNo') || '-',
            name: 'currentAddr_addressNo', value: watchFormValue('currentAddr_addressNo')
          },
          {
            type: 'text',
            label: 'หมู่ที่', viewText: watchFormValue('currentAddr_moo') || '-',
            name: 'currentAddr_moo', value: watchFormValue('currentAddr_moo')
          },
          {
            type: 'text',
            label: 'หมู่บ้าน / อาคาร', viewText: watchFormValue('currentAddr_buildingOrVillage') || '-',
            name: 'currentAddr_buildingOrVillage', value: watchFormValue('currentAddr_buildingOrVillage')
          },
          {
            type: 'text',
            label: 'ห้อง', viewText: watchFormValue('currentAddr_roomNo') || '-',
            name: 'currentAddr_roomNo', value: watchFormValue('currentAddr_roomNo')
          },
          {
            type: 'text',
            label: 'ชั้น', viewText: watchFormValue('currentAddr_floor') || '-',
            name: 'currentAddr_floor', value: watchFormValue('currentAddr_floor')
          },
          {
            type: 'text',
            label: 'ตรอก / ซอย', viewText: watchFormValue('currentAddr_soi') || '-',
            name: 'currentAddr_soi', value: watchFormValue('currentAddr_soi')
          },
          {
            type: 'text',
            label: 'ถนน', viewText: watchFormValue('currentAddr_street') || '-',
            name: 'currentAddr_street', value: watchFormValue('currentAddr_street')
          },
          {
            type: 'autocomplete',
            label: 'ประเทศ', viewText: selectedCurrentAddrCountry?.label || '-',
            name: 'currentAddr_countryCode', value: selectedCurrentAddrCountry,
            options: masterCountryList.data || [],
            searchMethod: 'contain',
            onSelect: (selectedItem: ComboBoxWrapperOption) => {
              const isForeign = selectedItem.value !== '000';
              setSelectedCurrentAddrCountry(selectedItem);
              setFormValue('currentAddr_countryCode', selectedItem.value);
              if(isForeign) {
                setSelectedCurrentThAddr(addressForeignOption);
                setFormValue('currentAddr_zipCode', addressForeignOption.po);
                setFormValue('currentAddr_provinceCode', addressForeignOption.p);
                setFormValue('currentAddr_districtCode', addressForeignOption.d);
                setFormValue('currentAddr_subDistrictCode', addressForeignOption.s);
              }
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'รหัสไปรษณีย์', viewText: selectedCurrentThAddr.po || '-',
            name: 'currentAddr_zipCode', value: selectedCurrentThAddr,
            options: thaiAddrInfo.data || [], optionSearchKey: 'po',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.po,
            onSelect: (selectedItem: ThaiAddrInfo) => {
              setSelectedCurrentThAddr(selectedItem);
              setSelectedCurrentAddrCountry(undefined);
              setFormValue('currentAddr_zipCode', selectedItem.po);
              setFormValue('currentAddr_provinceCode', selectedItem.p);
              setFormValue('currentAddr_districtCode', selectedItem.d);
              setFormValue('currentAddr_subDistrictCode', selectedItem.s);
              if(selectedItem.po !== Codex.Postcode.foreign) {
                const countryThai = (masterCountryList.data || []).find((item) => item.value === '000');
                setSelectedCurrentAddrCountry(countryThai);
              }
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'จังหวัด', viewText: `${ selectedCurrentThAddr.pCode } - ${ selectedCurrentThAddr.pName }`.trim(),
            name: 'currentAddr_provinceCode', value: selectedCurrentThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 'p',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.pName,
            onSelect: (selectedItem: ThaiAddrInfo) => {
              setSelectedCurrentThAddr(selectedItem);
              setFormValue('currentAddr_zipCode', selectedItem.po);
              setFormValue('currentAddr_provinceCode', selectedItem.p);
              setFormValue('currentAddr_districtCode', selectedItem.d);
              setFormValue('currentAddr_subDistrictCode', selectedItem.s);
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'อำเภอ / เขต', viewText: `${ selectedCurrentThAddr.dCode } - ${ selectedCurrentThAddr.dName }`.trim(),
            name: 'currentAddr_districtCode', value: selectedCurrentThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 'd',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.dName,
            onSelect: (selectedItem: ThaiAddrInfo) => {
              setSelectedCurrentThAddr(selectedItem);
              setFormValue('currentAddr_zipCode', selectedItem.po);
              setFormValue('currentAddr_provinceCode', selectedItem.p);
              setFormValue('currentAddr_districtCode', selectedItem.d);
              setFormValue('currentAddr_subDistrictCode', selectedItem.s);
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'ตำบล / แขวง', viewText: `${ selectedCurrentThAddr.sCode } - ${ selectedCurrentThAddr.sName }`.trim(),
            name: 'currentAddr_subDistrictCode', value: selectedCurrentThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 's',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.sName,
            onSelect: (selectedItem: ThaiAddrInfo) => {
              setSelectedCurrentThAddr(selectedItem);
              setFormValue('currentAddr_zipCode', selectedItem.po);
              setFormValue('currentAddr_provinceCode', selectedItem.p);
              setFormValue('currentAddr_districtCode', selectedItem.d);
              setFormValue('currentAddr_subDistrictCode', selectedItem.s);
            }
          },
          {
            type: 'text',
            label: 'ที่อยู่ 1', viewText: watchFormValue('currentAddr_customAddress1') || '-',
            name: 'currentAddr_customAddress1', value: watchFormValue('currentAddr_customAddress1'),
            isHidden: !_isForeign
          },
          {
            type: 'text',
            label: 'ที่อยู่ 2', viewText: watchFormValue('currentAddr_customAddress2') || '-',
            name: 'currentAddr_customAddress2', value: watchFormValue('currentAddr_customAddress2'),
            isHidden: !_isForeign
          },
          {
            type: 'text',
            label: 'ที่อยู่ 3', viewText: watchFormValue('currentAddr_customAddress3') || '-',
            name: 'currentAddr_customAddress3', value: watchFormValue('currentAddr_customAddress3'),
            isHidden: !_isForeign
          }
        ]}
      />
    );
  }

  const renderFormWorkAddress = () => {
    const { register, handleSubmit, watch: watchFormValue, setValue: setFormValue, formState: { errors } } = workAddrHookForm;
    const _isForeign = selectedWorkThAddr?.po === Codex.Postcode.foreign || false;
    return (
      <Form<StoreTypeKycCdd.WorkAddrFormFields>
        isEditing={isEditingWorkAddr}
        baseColSpan={4}
        hookForm={{ register, errors }}
        onSubmit={handleSubmit(onSubmitWorkAddrForm)}
        fields={[
          {
            type: 'text',
            label: 'เลขที่', viewText: watchFormValue('workAddr_addressNo') || '-',
            name: 'workAddr_addressNo', value: watchFormValue('workAddr_addressNo')
          },
          {
            type: 'text',
            label: 'หมู่ที่', viewText: watchFormValue('workAddr_moo') || '-',
            name: 'workAddr_moo', value: watchFormValue('workAddr_moo')
          },
          {
            type: 'text',
            label: 'หมู่บ้าน / อาคาร', viewText: watchFormValue('workAddr_buildingOrVillage') || '-',
            name: 'workAddr_buildingOrVillage', value: watchFormValue('workAddr_buildingOrVillage')
          },
          {
            type: 'text',
            label: 'ห้อง', viewText: watchFormValue('workAddr_roomNo') || '-',
            name: 'workAddr_roomNo', value: watchFormValue('workAddr_roomNo')
          },
          {
            type: 'text',
            label: 'ชั้น', viewText: watchFormValue('workAddr_floor') || '-',
            name: 'workAddr_floor', value: watchFormValue('workAddr_floor')
          },
          {
            type: 'text',
            label: 'ตรอก / ซอย', viewText: watchFormValue('workAddr_soi') || '-',
            name: 'workAddr_soi', value: watchFormValue('workAddr_soi')
          },
          {
            type: 'text',
            label: 'ถนน', viewText: watchFormValue('workAddr_street') || '-',
            name: 'workAddr_street', value: watchFormValue('workAddr_street')
          },
          {
            type: 'autocomplete',
            label: 'ประเทศ', viewText: selectedWorkAddrCountry?.label || '-',
            name: 'workAddr_countryCode', value: selectedWorkAddrCountry,
            options: masterCountryList.data || [],
            searchMethod: 'contain',
            onSelect: (selectedItem: ComboBoxWrapperOption) => {
              const isForeign = selectedItem.value !== '000';
              setSelectedWorkAddrCountry(selectedItem);
              setFormValue('workAddr_countryCode', selectedItem.value);
              if(isForeign) {
                setSelectedWorkThAddr(addressForeignOption);
                setFormValue('workAddr_zipCode', addressForeignOption.po);
                setFormValue('workAddr_provinceCode', addressForeignOption.p);
                setFormValue('workAddr_districtCode', addressForeignOption.d);
                setFormValue('workAddr_subDistrictCode', addressForeignOption.s);
              }
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'รหัสไปรษณีย์', viewText: selectedWorkThAddr.po || '-',
            name: 'workAddr_zipCode', value: selectedWorkThAddr,
            options: thaiAddrInfo.data || [], optionSearchKey: 'po',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.po,
            onSelect: (selectedItem: ThaiAddrInfo) => {
              setSelectedWorkThAddr(selectedItem);
              setSelectedWorkAddrCountry(undefined);
              setFormValue('workAddr_zipCode', selectedItem.po);
              setFormValue('workAddr_provinceCode', selectedItem.p);
              setFormValue('workAddr_districtCode', selectedItem.d);
              setFormValue('workAddr_subDistrictCode', selectedItem.s);
              if(selectedItem.po !== Codex.Postcode.foreign) {
                const countryThai = (masterCountryList.data || []).find((item) => item.value === '000');
                setSelectedWorkAddrCountry(countryThai);
              }
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'จังหวัด', viewText: `${ selectedWorkThAddr.pCode } - ${ selectedWorkThAddr.pName }`.trim(),
            name: 'workAddr_provinceCode', value: selectedWorkThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 'p',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.pName,
            onSelect: (selectedItem: ThaiAddrInfo) => {
              setSelectedWorkThAddr(selectedItem);
              setFormValue('workAddr_zipCode', selectedItem.po);
              setFormValue('workAddr_provinceCode', selectedItem.p);
              setFormValue('workAddr_districtCode', selectedItem.d);
              setFormValue('workAddr_subDistrictCode', selectedItem.s);
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'อำเภอ / เขต', viewText: `${ selectedWorkThAddr.dCode } - ${ selectedWorkThAddr.dName }`.trim(),
            name: 'workAddr_districtCode', value: selectedWorkThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 'd',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.dName,
            onSelect: (selectedItem: ThaiAddrInfo) => {
              setSelectedWorkThAddr(selectedItem);
              setFormValue('workAddr_zipCode', selectedItem.po);
              setFormValue('workAddr_provinceCode', selectedItem.p);
              setFormValue('workAddr_districtCode', selectedItem.d);
              setFormValue('workAddr_subDistrictCode', selectedItem.s);
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'ตำบล / แขวง', viewText: `${ selectedWorkThAddr.sCode } - ${ selectedWorkThAddr.sName }`.trim(),
            name: 'workAddr_subDistrictCode', value: selectedWorkThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 's',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.sName,
            onSelect: (selectedItem: ThaiAddrInfo) => {
              setSelectedWorkThAddr(selectedItem);
              setFormValue('workAddr_zipCode', selectedItem.po);
              setFormValue('workAddr_provinceCode', selectedItem.p);
              setFormValue('workAddr_districtCode', selectedItem.d);
              setFormValue('workAddr_subDistrictCode', selectedItem.s);
            }
          },
          {
            type: 'text',
            label: 'ที่อยู่ 1', viewText: watchFormValue('workAddr_customAddress1') || '-',
            name: 'workAddr_customAddress1', value: watchFormValue('workAddr_customAddress1'),
            isHidden: !_isForeign
          },
          {
            type: 'text',
            label: 'ที่อยู่ 2', viewText: watchFormValue('workAddr_customAddress2') || '-',
            name: 'workAddr_customAddress2', value: watchFormValue('workAddr_customAddress2'),
            isHidden: !_isForeign
          },
          {
            type: 'text',
            label: 'ที่อยู่ 3', viewText: watchFormValue('workAddr_customAddress3') || '-',
            name: 'workAddr_customAddress3', value: watchFormValue('workAddr_customAddress3'),
            isHidden: !_isForeign
          }
        ]}
      />
    );
  }

  return (
    <Fragment>
      <SectionSeparator title={'ข้อมูลที่อยู่ปัจจุบัน'} hasEditAction={ !isEditingCurrentAddr } onClickEdit={ toggleCurrentAddrFormMode } />
      {
        (isLoading)
          ? (<AppLoader asContentLoader />)
          : (renderFormCurrentAddress())
      }

      <SectionSeparator title={'ข้อมูลที่ทำงาน'} hasEditAction={ !isEditingWorkAddr } onClickEdit={ toggleWorkAddrFormMode } />
      {
        (isLoading)
          ? (<AppLoader asContentLoader />)
          : (renderFormWorkAddress())
      }
    </Fragment>
  );
}

interface AddrInfoProps {
  corporateId: string;
  onToggleEdit?: (isEditing: boolean) => void;
}