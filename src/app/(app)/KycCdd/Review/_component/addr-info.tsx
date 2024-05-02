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
import { useMasterDataCountriesCustom, type MasterDataCountryItem } from '@/hooks/masterDataCountries';
import { useThailandAddress, addressEmptyOption, addressForeignOption, type ThaiAddrInfo } from '@/hooks/thailand-address';
import { useAppDispatch } from '@/libs/redux/hook';
import { type StoreTypeKycCdd, saveCurrentAddressInfo, saveWorkAddressInfo } from '@/libs/redux/store/kyc-cdd';
import type { KycAddressOutputListDataResponse } from '@/services/rest-api/customer-service';
import { removeObjectKeyPrefix } from '@/utils/remove-object-key-prefix';

export const ReviewAddrInfo = ({ corporateId }: AddrInfoProps): ReactElement => {
  const [ isEditingCurrentAddr, setIsEditingCurrentAddr ] = useState(true);
  const [ isEditingWorkAddr, setIsEditingWorkAddr ] = useState(true);
  const [ selectedCurrentAddrCountry, setSelectedCurrentAddrCountry ] = useState<MasterDataCountryItem>();
  const [ selectedWorkAddrCountry, setSelectedWorkAddrCountry ] = useState<MasterDataCountryItem>();
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
    queryKey: ['kyccdd-address-info', corporateId]
  });

  useEffect(() => {

  }, []);

  const fetchGetAddress = async () => {
    const request = await fetch(`/api/kyc/get-address/${corporateId}`, { method: 'GET' });
    const response: KycAddressOutputListDataResponse = await request.json();

    const { data } = response;
    if (!data) { return ({ currentAddr: {}, workAddr: {} }); }

    const currentAddr = data.find((_f) => _f.addressTypeCode === '02');
    const workAddr = data.find((_f) => _f.addressTypeCode === '03');
    return ({ currentAddr: currentAddr || {}, workAddr: workAddr || {} });
  }

  const onSubmitCurrentAddrForm = (fieldsData: StoreTypeKycCdd.CurrentAddrFormFields) => {
    if(!selectedCurrentAddrCountry) { return; }
    if(!selectedCurrentThAddr) { return; }

    const { value: countryCode } = selectedCurrentAddrCountry;
    const { pCode, dCode, sCode, po } = selectedCurrentThAddr;
    const refinedFieldsData: StoreTypeKycCdd.AddressFields = removeObjectKeyPrefix({ obj: fieldsData, prefix: 'currentAddr_' });
    const submitFields = {
      ...refinedFieldsData,
      countryCode: countryCode,
      zipCode: po,
      provinceCode: pCode,
      districtCode: dCode,
      subDistrictCode: sCode
    };

    reduxDispatcher(saveCurrentAddressInfo(submitFields));
    setIsEditingCurrentAddr(false);
  }

  const onSubmitWorkAddrForm = (fieldsData: StoreTypeKycCdd.WorkAddrFormFields) => {
    if(!selectedWorkAddrCountry) { return; }
    if(!selectedWorkThAddr) { return; }

    const { value: countryCode } = selectedWorkAddrCountry;
    const { pCode, dCode, sCode, po } = selectedWorkThAddr;
    const refinedFieldsData: StoreTypeKycCdd.AddressFields = removeObjectKeyPrefix({ obj: fieldsData, prefix: 'currentAddr_' });
    const submitFields = {
      ...refinedFieldsData,
      countryCode: countryCode,
      zipCode: po,
      provinceCode: pCode,
      districtCode: dCode,
      subDistrictCode: sCode
    };

    reduxDispatcher(saveWorkAddressInfo(submitFields));
    setIsEditingWorkAddr(false);
  }

  const renderFormCurrentAddress = () => {
    const { register, handleSubmit } = currentAddrHookForm;
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
    const _isForeign = selectedCurrentThAddr?.po === '99999';
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
            onSelect: (selectedItem: MasterDataCountryItem) => {
              const isForeign = selectedItem.value !== '000';
              setSelectedCurrentAddrCountry(selectedItem);
              if(isForeign) { setSelectedCurrentThAddr(addressForeignOption); }
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'รหัสไปรษณีย์', viewText: _zipCode,
            name: 'currentAddr_zipCode', value: selectedCurrentThAddr,
            options: thaiAddrInfo.data || [], optionSearchKey: 'po',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.po,
            onSelect: (selectedItem: ThaiAddrInfo) => { setSelectedCurrentThAddr(selectedItem); }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'จังหวัด', viewText: _province,
            name: 'currentAddr_provinceCode', value: selectedCurrentThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 'p',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.pName,
            onSelect: (selectedItem: ThaiAddrInfo) => { setSelectedCurrentThAddr(selectedItem); }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'อำเภอ / เขต', viewText: _district,
            name: 'currentAddr_districtCode', value: selectedCurrentThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 'd',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.dName,
            onSelect: (selectedItem: ThaiAddrInfo) => { setSelectedCurrentThAddr(selectedItem); }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'ตำบล / แขวง', viewText: _subDistrict,
            name: 'currentAddr_subDistrictCode', value: selectedCurrentThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 's',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.sName,
            onSelect: (selectedItem: ThaiAddrInfo) => { setSelectedCurrentThAddr(selectedItem); }
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
    const { register, handleSubmit } = workAddrHookForm;
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
    const _isForeign = selectedWorkThAddr?.po === '99999' || false;
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
            onSelect: (selectedItem: MasterDataCountryItem) => {
              const isForeign = selectedItem.value !== '000';
              setSelectedWorkAddrCountry(selectedItem);
              if(isForeign) { setSelectedWorkThAddr(addressForeignOption); }
            }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'รหัสไปรษณีย์', viewText: _zipCode,
            name: 'workAddr_zipCode', value: selectedWorkThAddr,
            options: thaiAddrInfo.data || [], optionSearchKey: 'po',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.po,
            onSelect: (selectedItem: ThaiAddrInfo) => { setSelectedWorkThAddr(selectedItem); }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'จังหวัด', viewText: _province,
            name: 'workAddr_provinceCode', value: selectedWorkThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 'p',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.pName,
            onSelect: (selectedItem: ThaiAddrInfo) => { setSelectedWorkThAddr(selectedItem); }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'อำเภอ / เขต', viewText: _district,
            name: 'workAddr_districtCode', value: selectedWorkThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 'd',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.dName,
            onSelect: (selectedItem: ThaiAddrInfo) => { setSelectedWorkThAddr(selectedItem); }
          },
          {
            type: 'autocomplete', isAddress: true,
            label: 'ตำบล / แขวง', viewText: _subDistrict,
            name: 'workAddr_subDistrictCode', value: selectedWorkThAddr,
            isHidden: _isForeign,
            options: thaiAddrInfo.data || [], optionSearchKey: 's',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.sName,
            onSelect: (selectedItem: ThaiAddrInfo) => { setSelectedWorkThAddr(selectedItem); }
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
      <div className={'my-4 border-b-2 border-b-slate-500'}>
        <strong className={'text-xl text-success-500'}>ข้อมูลที่อยู่ปัจจุบัน</strong>
      </div>
      {
        (isLoading)
          ? (<AppLoader asContentLoader />)
          : (renderFormCurrentAddress())
      }

      <div className={'my-4 border-b-2 border-b-slate-500'}>
        <strong className={'text-xl text-success-500'}>ข้อมูลที่ทำงาน</strong>
      </div>
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