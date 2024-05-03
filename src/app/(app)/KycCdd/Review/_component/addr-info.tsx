/**
 *  KYC CDD : Private Component - Addr Info
 */

'use client'

import { useQuery } from '@tanstack/react-query';
import {
  Fragment,
  useEffect,
  useState,
  type ReactElement
} from 'react';
import { useForm } from 'react-hook-form';

import { AppLoader } from '@/components/app-loader';
import { Form } from '@/components/form';
import { SectionSeparator } from '@/components/section-separator';
import { useMasterDataCountriesCustom } from '@/hooks/masterDataCountries';
import { useThailandAddress, addressEmptyOption, addressForeignOption, type ThaiAddrInfo } from '@/hooks/thailand-address';
import { useAppDispatch } from '@/libs/redux/hook';
import { type StoreTypeKycCdd, saveCurrentAddressInfo, saveWorkAddressInfo } from '@/libs/redux/store/kyc-cdd';
import type { ComboBoxWrapperOption } from '@/type/api';
import type { KycAddressOutputListDataResponse } from '@/services/rest-api/customer-service';
import { Codex } from '@/utils/codex';
import { removeObjectKeyPrefix } from '@/utils/remove-object-key-prefix';

export const ReviewAddrInfo = ({ corporateId }: AddrInfoProps): ReactElement => {
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
    mode: 'onSubmit',
    resolver: undefined
  });

  const workAddrHookForm = useForm<StoreTypeKycCdd.WorkAddrFormFields>({
    mode: 'onSubmit',
    resolver: undefined
  });

  const { data: addressList, isLoading } = useQuery({
    queryFn: () => fetchGetAddress(),
    queryKey: ['kyccdd-address-info', corporateId],
    enabled: !!corporateId
  });

  useEffect(() => {

  }, []);

  const fetchGetAddress = async () => {
    const request = await fetch(`/api/kyc/get-address/${corporateId}`, { method: 'GET' });
    const response: KycAddressOutputListDataResponse = await request.json();

    const { data } = response;
    if (!data) { return ({ currentAddr: {}, workAddr: {} }); }

    const currentAddr = data.find((_f) => _f.addressTypeCode === Codex.AddressType.current);
    const workAddr = data.find((_f) => _f.addressTypeCode === Codex.AddressType.work);
    if(currentAddr) {
      const { setValue } = currentAddrHookForm;
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
      setValue('currentAddr_addressNo', addressNo || '');
      setValue('currentAddr_moo', moo || '');
      setValue('currentAddr_buildingOrVillage', buildingOrVillage || '');
      setValue('currentAddr_roomNo', roomNo || '');
      setValue('currentAddr_floor', floor || '');
      setValue('currentAddr_soi', soi || '');
      setValue('currentAddr_street', street || '');
      setValue('currentAddr_countryCode', countryCode || '');
      setValue('currentAddr_zipCode', zipCode || '');
      setValue('currentAddr_provinceCode', provinceCode || '');
      setValue('currentAddr_districtCode', districtCode || '');
      setValue('currentAddr_subDistrictCode', subDistrictCode || '');
      setValue('currentAddr_customAddress1', customAddress1 || '');
      setValue('currentAddr_customAddress2', customAddress2 || '');
      setValue('currentAddr_customAddress3', customAddress3 || '');
    }

    if(workAddr) {
      const { setValue } = workAddrHookForm;
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
      setValue('workAddr_addressNo', addressNo || '');
      setValue('workAddr_moo', moo || '');
      setValue('workAddr_buildingOrVillage', buildingOrVillage || '');
      setValue('workAddr_roomNo', roomNo || '');
      setValue('workAddr_floor', floor || '');
      setValue('workAddr_soi', soi || '');
      setValue('workAddr_street', street || '');
      setValue('workAddr_countryCode', countryCode || '');
      setValue('workAddr_zipCode', zipCode || '');
      setValue('workAddr_provinceCode', provinceCode || '');
      setValue('workAddr_districtCode', districtCode || '');
      setValue('workAddr_subDistrictCode', subDistrictCode || '');
      setValue('workAddr_customAddress1', customAddress1 || '');
      setValue('workAddr_customAddress2', customAddress2 || '');
      setValue('workAddr_customAddress3', customAddress3 || '');
    }

    return ({ currentAddr: currentAddr || {}, workAddr: workAddr || {} });
  }

  const toggleCurrentAddrFormMode = () => { setIsEditingCurrentAddr((current) => !current); }
  const toggleWorkAddrFormMode = () => { setIsEditingWorkAddr((current) => !current); }

  const onSubmitCurrentAddrForm = (fieldsData: StoreTypeKycCdd.CurrentAddrFormFields) => {
    if(!selectedCurrentAddrCountry) { return; }
    if(!selectedCurrentThAddr) { return; }

    const refinedFieldsData: StoreTypeKycCdd.AddressFields = removeObjectKeyPrefix({ obj: fieldsData, prefix: 'currentAddr_' });
    reduxDispatcher(saveCurrentAddressInfo(refinedFieldsData));
    setIsEditingCurrentAddr(false);
  }

  const onSubmitWorkAddrForm = (fieldsData: StoreTypeKycCdd.WorkAddrFormFields) => {
    if(!selectedWorkAddrCountry) { return; }
    if(!selectedWorkThAddr) { return; }

    const refinedFieldsData: StoreTypeKycCdd.AddressFields = removeObjectKeyPrefix({ obj: fieldsData, prefix: 'workAddr_' });
    reduxDispatcher(saveWorkAddressInfo(refinedFieldsData));
    setIsEditingWorkAddr(false);
  }

  const renderFormCurrentAddress = () => {
    const { register, handleSubmit, setValue } = currentAddrHookForm;
    const _info = addressList?.currentAddr;
    const _addressNo = _info?.addressNo || '-';
    const _moo = _info?.moo || '-';
    const _buildingOrVillage = _info?.buildingOrVillage || '-';
    const _roomNo = _info?.roomNo || '-';
    const _floor = _info?.floor || '-';
    const _soi = _info?.soi || '-';
    const _street = _info?.street || '-';

    const _zipCode = _info?.zipCode || '';
    const _country = `${ _info?.countryCode || '' } - ${ _info?.countryName || '' }`.trim();
    const _province = `${ _info?.provinceCode || '' } - ${ _info?.provinceName || '' }`.trim();
    const _district = `${ _info?.districtCode || '' } - ${ _info?.districtName || '' }`.trim();
    const _subDistrict = `${ _info?.subDistrictCode || '' } - ${ _info?.subDistrictName || '' }`.trim();
    const _customAddress1 = _info?.customAddress1 || '-';
    const _customAddress2 = _info?.customAddress2 || '-';
    const _customAddress3 = _info?.customAddress3 || '-';
    const _isForeign = selectedCurrentThAddr?.po === Codex.Postcode.foreign;
    return (
      <Form<StoreTypeKycCdd.CurrentAddrFormFields>
        isEditing={isEditingCurrentAddr}
        baseColSpan={4}
        register={register}
        onSubmit={handleSubmit(onSubmitCurrentAddrForm)}
        fields={[
          {
            type: 'text',
            label: 'เลขที่', viewText: _addressNo,
            name: 'currentAddr_addressNo'
          },
          {
            type: 'text',
            label: 'หมู่ที่', viewText: _moo,
            name: 'currentAddr_moo'
          },
          {
            type: 'text',
            label: 'หมู่บ้าน / อาคาร', viewText: _buildingOrVillage,
            name: 'currentAddr_buildingOrVillage'
          },
          {
            type: 'text',
            label: 'ห้อง', viewText: _roomNo,
            name: 'currentAddr_roomNo'
          },
          {
            type: 'text',
            label: 'ชั้น', viewText: _floor,
            name: 'currentAddr_floor'
          },
          {
            type: 'text',
            label: 'ตรอก / ซอย', viewText: _soi,
            name: 'currentAddr_soi'
          },
          {
            type: 'text',
            label: 'ถนน', viewText: _street,
            name: 'currentAddr_street'
          },
          {
            type: 'autocomplete',
            label: 'ประเทศ', viewText: _country,
            name: 'currentAddr_countryCode', value: selectedCurrentAddrCountry,
            options: masterCountryList.data || [],
            searchMethod: 'contain',
            onSelect: (selectedItem: ComboBoxWrapperOption) => {
              const isForeign = selectedItem.value !== '000';
              setSelectedCurrentAddrCountry(selectedItem);
              if(isForeign) {
                setSelectedCurrentThAddr(addressForeignOption);
                setValue('currentAddr_zipCode', addressForeignOption.po);
                setValue('currentAddr_provinceCode', addressForeignOption.p);
                setValue('currentAddr_districtCode', addressForeignOption.d);
                setValue('currentAddr_subDistrictCode', addressForeignOption.s);
              }
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'รหัสไปรษณีย์', viewText: _zipCode,
            name: 'currentAddr_zipCode', value: selectedCurrentThAddr,
            options: thaiAddrInfo.data || [], optionSearchKey: 'po',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.po,
            onSelect: (selectedItem: ThaiAddrInfo) => {
              setSelectedCurrentThAddr(selectedItem);
              setValue('currentAddr_zipCode', selectedItem.po);
              setValue('currentAddr_provinceCode', selectedItem.p);
              setValue('currentAddr_districtCode', selectedItem.d);
              setValue('currentAddr_subDistrictCode', selectedItem.s);
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'จังหวัด', viewText: _province,
            name: 'currentAddr_provinceCode', value: selectedCurrentThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 'p',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.pName,
            onSelect: (selectedItem: ThaiAddrInfo) => {
              setSelectedCurrentThAddr(selectedItem);
              setValue('currentAddr_zipCode', selectedItem.po);
              setValue('currentAddr_provinceCode', selectedItem.p);
              setValue('currentAddr_districtCode', selectedItem.d);
              setValue('currentAddr_subDistrictCode', selectedItem.s);
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'อำเภอ / เขต', viewText: _district,
            name: 'currentAddr_districtCode', value: selectedCurrentThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 'd',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.dName,
            onSelect: (selectedItem: ThaiAddrInfo) => {
              setSelectedCurrentThAddr(selectedItem);
              setValue('currentAddr_zipCode', selectedItem.po);
              setValue('currentAddr_provinceCode', selectedItem.p);
              setValue('currentAddr_districtCode', selectedItem.d);
              setValue('currentAddr_subDistrictCode', selectedItem.s);
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'ตำบล / แขวง', viewText: _subDistrict,
            name: 'currentAddr_subDistrictCode', value: selectedCurrentThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 's',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.sName,
            onSelect: (selectedItem: ThaiAddrInfo) => {
              setSelectedCurrentThAddr(selectedItem);
              setValue('currentAddr_zipCode', selectedItem.po);
              setValue('currentAddr_provinceCode', selectedItem.p);
              setValue('currentAddr_districtCode', selectedItem.d);
              setValue('currentAddr_subDistrictCode', selectedItem.s);
            }
          },
          {
            type: 'text',
            label: 'ที่อยู่ 1', viewText: _customAddress1,
            name: 'currentAddr_customAddress1', isHidden: !_isForeign
          },
          {
            type: 'text',
            label: 'ที่อยู่ 2', viewText: _customAddress2,
            name: 'currentAddr_customAddress2', isHidden: !_isForeign
          },
          {
            type: 'text',
            label: 'ที่อยู่ 3', viewText: _customAddress3,
            name: 'currentAddr_customAddress3', isHidden: !_isForeign
          }
        ]}
      />
    );
  }

  const renderFormWorkAddress = () => {
    const { register, handleSubmit, setValue } = workAddrHookForm;
    const _info = addressList?.workAddr;
    const _addressNo = _info?.addressNo || '-';
    const _moo = _info?.moo || '-';
    const _buildingOrVillage = _info?.buildingOrVillage || '-';
    const _roomNo = _info?.roomNo || '-';
    const _floor = _info?.floor || '-';
    const _soi = _info?.soi || '-';
    const _street = _info?.street || '-';
    const _country = `${_info?.countryCode || ''} - ${_info?.countryName || ''}`.trim();
    const _zipCode = _info?.zipCode || '-';
    const _province = `${_info?.provinceCode || ''} - ${_info?.provinceName || ''}`.trim();
    const _district = `${_info?.districtCode || ''} - ${_info?.districtName || ''}`.trim();
    const _subDistrict = `${_info?.subDistrictCode || ''} - ${_info?.subDistrictCode || ''}`.trim();
    const _customAddress1 = _info?.customAddress1 || '-';
    const _customAddress2 = _info?.customAddress2 || '-';
    const _customAddress3 = _info?.customAddress3 || '-';
    const _isForeign = selectedWorkThAddr?.po === Codex.Postcode.foreign || false;
    return (
      <Form<StoreTypeKycCdd.WorkAddrFormFields>
        isEditing={isEditingWorkAddr}
        baseColSpan={4}
        register={register}
        onSubmit={handleSubmit(onSubmitWorkAddrForm)}
        fields={[
          {
            type: 'text',
            label: 'เลขที่', viewText: _addressNo,
            name: 'workAddr_addressNo'
          },
          {
            type: 'text',
            label: 'หมู่ที่', viewText: _moo,
            name: 'workAddr_moo'
          },
          {
            type: 'text',
            label: 'หมู่บ้าน / อาคาร', viewText: _buildingOrVillage,
            name: 'workAddr_buildingOrVillage'
          },
          {
            type: 'text',
            label: 'ห้อง', viewText: _roomNo,
            name: 'workAddr_roomNo'
          },
          {
            type: 'text',
            label: 'ชั้น', viewText: _floor,
            name: 'workAddr_floor'
          },
          {
            type: 'text',
            label: 'ตรอก / ซอย', viewText: _soi,
            name: 'workAddr_soi'
          },
          {
            type: 'text',
            label: 'ถนน', viewText: _street,
            name: 'workAddr_street'
          },
          {
            type: 'autocomplete',
            label: 'ประเทศ', viewText: _country,
            name: 'workAddr_countryCode', value: selectedWorkAddrCountry,
            options: masterCountryList.data || [],
            searchMethod: 'contain',
            onSelect: (selectedItem: ComboBoxWrapperOption) => {
              const isForeign = selectedItem.value !== '000';
              setSelectedWorkAddrCountry(selectedItem);
              if(isForeign) {
                setSelectedWorkThAddr(addressForeignOption);
                setValue('workAddr_zipCode', addressForeignOption.po);
                setValue('workAddr_provinceCode', addressForeignOption.p);
                setValue('workAddr_districtCode', addressForeignOption.d);
                setValue('workAddr_subDistrictCode', addressForeignOption.s);
              }
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'รหัสไปรษณีย์', viewText: _zipCode,
            name: 'workAddr_zipCode', value: selectedWorkThAddr,
            options: thaiAddrInfo.data || [], optionSearchKey: 'po',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.po,
            onSelect: (selectedItem: ThaiAddrInfo) => {
              setSelectedWorkThAddr(selectedItem);
              setValue('workAddr_zipCode', selectedItem.po);
              setValue('workAddr_provinceCode', selectedItem.p);
              setValue('workAddr_districtCode', selectedItem.d);
              setValue('workAddr_subDistrictCode', selectedItem.s);
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'จังหวัด', viewText: _province,
            name: 'workAddr_provinceCode', value: selectedWorkThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 'p',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.pName,
            onSelect: (selectedItem: ThaiAddrInfo) => {
              setSelectedWorkThAddr(selectedItem);
              setValue('workAddr_zipCode', selectedItem.po);
              setValue('workAddr_provinceCode', selectedItem.p);
              setValue('workAddr_districtCode', selectedItem.d);
              setValue('workAddr_subDistrictCode', selectedItem.s);
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'อำเภอ / เขต', viewText: _district,
            name: 'workAddr_districtCode', value: selectedWorkThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 'd',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.dName,
            onSelect: (selectedItem: ThaiAddrInfo) => {
              setSelectedWorkThAddr(selectedItem);
              setValue('workAddr_zipCode', selectedItem.po);
              setValue('workAddr_provinceCode', selectedItem.p);
              setValue('workAddr_districtCode', selectedItem.d);
              setValue('workAddr_subDistrictCode', selectedItem.s);
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'ตำบล / แขวง', viewText: _subDistrict,
            name: 'workAddr_subDistrictCode', value: selectedWorkThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 's',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.sName,
            onSelect: (selectedItem: ThaiAddrInfo) => {
              setSelectedWorkThAddr(selectedItem);
              setValue('workAddr_zipCode', selectedItem.po);
              setValue('workAddr_provinceCode', selectedItem.p);
              setValue('workAddr_districtCode', selectedItem.d);
              setValue('workAddr_subDistrictCode', selectedItem.s);
            }
          },
          {
            type: 'text',
            label: 'ที่อยู่ 1', viewText: _customAddress1,
            name: 'workAddr_customAddress1', isHidden: !_isForeign
          },
          {
            type: 'text',
            label: 'ที่อยู่ 2', viewText: _customAddress2,
            name: 'workAddr_customAddress2', isHidden: !_isForeign
          },
          {
            type: 'text',
            label: 'ที่อยู่ 3', viewText: _customAddress3,
            name: 'workAddr_customAddress3', isHidden: !_isForeign
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
}