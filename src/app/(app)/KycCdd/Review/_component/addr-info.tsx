/**
 *  KYC CDD : Private Component - Addr Info
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
import { useMasterDataCountriesCustom } from '@/hooks/masterDataCountries';
import { useThailandAddress, type ThaiAddrInfo } from '@/hooks/thailand-address';
import type { KycAddressOutputListDataResponse } from '@/services/rest-api/customer-service';

export const ReviewAddrInfo = ({ corporateId }: AddrInfoProps): ReactElement => {
  const [ isEditingCurrentAddr, setIsEditingCurrentAddr ] = useState(true);
  const [ isEditingWorkAddr, setIsEditingWorkAddr ] = useState(false);
  const [ selectedCurrentAddrCountry, setSelectedCurrentAddrCountry ] = useState();
  const [ selectedWorkAddrCountry, setSelectedWorkAddrCountry ] = useState();
  const [ selectedCurrentThAddr, setSelectedCurrentThAddr ] = useState<ThaiAddrInfo>();
  const [ selectedWorkThAddr, setSelectedWorkThAddr ] = useState<ThaiAddrInfo>();

  const masterCountryList = useMasterDataCountriesCustom();
  const thaiAddrInfo = useThailandAddress();

  const currentAddrHookForm = useForm<CurrentAddrFormFields>({
    mode: 'onSubmit',
    resolver: undefined
  });

  const workAddrHookForm = useForm<WorkAddrFormFields>({
    mode: 'onSubmit',
    resolver: undefined
  });

  useEffect(() => {}, []);

  const { data: addressList, isLoading } = useQuery({
    queryFn: () => fetchGetAddress(),
    queryKey: ['kyccdd-address-info', corporateId]
  });

  const fetchGetAddress = async () => {
    const request = await fetch(`/api/kyc/get-address/${corporateId}`, { method: 'GET' });
    const response: KycAddressOutputListDataResponse = await request.json();

    const { data } = response;
    if (!data) { return ({ currentAddr: {}, workAddr: {} }); }

    const currentAddr = data.find((_f) => _f.addressTypeCode === '02');
    const workAddr = data.find((_f) => _f.addressTypeCode === '03');
    return ({ currentAddr: currentAddr || {}, workAddr: workAddr || {} });
  }

  const onSubmitCurrentAddrForm = (fieldsData: CurrentAddrFormFields) => {
    if(!selectedCurrentThAddr) { return; }

    const { pCode, dCode, sCode, po } = selectedCurrentThAddr;
    const submitFields = {
      ...fieldsData,
      currentAddr_country: '',
      currentAddr_postcode: po,
      currentAddr_province: pCode,
      currentAddr_district: dCode,
      currentAddr_subDistrict: sCode
    };
    
    console.log('submitFields', submitFields)
  }

  const onSubmitWorkAddrForm = (fieldsData: WorkAddrFormFields) => {
    console.log('onSubmitWorkAddrForm', fieldsData)
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
    const _countryLabel = `${ _info?.countryCode || '' } - ${ _info?.countryName || '' }`.trim();
    // const _countryCode = _info?.countryCode || '';
    const _provinceLabel = `${ _info?.provinceCode || '' } - ${ _info?.provinceName || '' }`.trim();
    // const _provinceCode = _info?.provinceCode || '';
    const _districtLabel = `${ _info?.districtCode || '' } - ${ _info?.districtName || '' }`.trim();
    // const _districtCode = _info?.districtCode || '';
    const _subDistrictLabel = `${ _info?.subDistrictCode || '' } - ${ _info?.subDistrictName || '' }`.trim();
    // const _subDistrictCode = _info?.subDistrictCode || '';
    const _customAddress1 = _info?.customAddress1 || '-';
    const _customAddress2 = _info?.customAddress2 || '-';
    const _customAddress3 = _info?.customAddress3 || '-';

    // const _addrInputRawValue = `${ _provinceCode } ${ _districtCode } ${ _subDistrictCode } ${ _zipCode }`.trim();
    // const _addrInputValue = (_addrInputRawValue) ? _addrInputRawValue.replaceAll(' ', '|') : '';

    return (
      <Form<CurrentAddrFormFields>
        isEditing={ isEditingCurrentAddr }
        baseColSpan={4}
        register={ register }
        onSubmit={ handleSubmit(onSubmitCurrentAddrForm) }
        fields={[
          {
            type: 'text',
            label: 'เลขที่', viewText: _addressNo,
            name: 'currentAddr_houseNumber'
          },
          {
            type: 'text',
            label: 'หมู่ที่', viewText: _moo,
            name: 'currentAddr_moo'
          },
          {
            type: 'text',
            label: 'หมู่บ้าน / อาคาร', viewText: _buildingOrVillage,
            name: 'currentAddr_building'
          },
          {
            type: 'text',
            label: 'ห้อง', viewText: _roomNo,
            name: 'currentAddr_room'
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
            name: 'currentAddr_road'
          },
          {
            type: 'autocomplete',
            label: 'ประเทศ', viewText: _countryLabel,
            name: 'currentAddr_country',
            options: masterCountryList.data || []
          },
          {
            type: 'autocomplete', asAddress: true,
            label: 'รหัสไปรษณีย์', viewText: _zipCode,
            name: 'currentAddr_postcode', value: selectedCurrentThAddr,
            options: thaiAddrInfo.data || [], optionSearchKey: 'po',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.po,
            onSelect: (selectedItem: ThaiAddrInfo) => { setSelectedCurrentThAddr(selectedItem); }
          },
          {
            type: 'autocomplete', asAddress: true,
            label: 'จังหวัด', viewText: _provinceLabel,
            name: 'currentAddr_province', value: selectedCurrentThAddr,
            options: thaiAddrInfo.data || [], optionSearchKey: 'p',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.pName,
            onSelect: (selectedItem: ThaiAddrInfo) => { setSelectedCurrentThAddr(selectedItem); }
          },
          {
            type: 'autocomplete', asAddress: true,
            label: 'อำเภอ / เขต', viewText: _districtLabel,
            name: 'currentAddr_district', value: selectedCurrentThAddr,
            options: thaiAddrInfo.data || [], optionSearchKey: 'd',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.dName,
            onSelect: (selectedItem: ThaiAddrInfo) => { setSelectedCurrentThAddr(selectedItem); }
          },
          {
            type: 'autocomplete', asAddress: true,
            label: 'ตำบล / แขวง', viewText: _subDistrictLabel,
            name: 'currentAddr_subDistrict', value: selectedCurrentThAddr,
            options: thaiAddrInfo.data || [], optionSearchKey: 's',
            getOptionKey: (item) => item.value,
            getOptionLabel: (item) => item.sName,
            onSelect: (selectedItem: ThaiAddrInfo) => { setSelectedCurrentThAddr(selectedItem); }
          },
          {
            type: 'text',
            label: 'ที่อยู่ 1', viewText: _customAddress1,
            name: 'currentAddr_addr1'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 2', viewText: _customAddress2,
            name: 'currentAddr_addr2'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 3', viewText: _customAddress3,
            name: 'currentAddr_addr3'
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
    const _country = `${ _info?.countryCode || '' } - ${ _info?.countryName || '' }`.trim();
    const _zipCode = _info?.zipCode || '-';
    const _province = `${ _info?.provinceCode || '' } - ${ _info?.provinceName || '' }`.trim();
    const _district = `${ _info?.districtCode || '' } - ${ _info?.districtName || '' }`.trim();
    const _subDistrict = `${ _info?.subDistrictCode || '' } - ${ _info?.subDistrictCode || '' }`.trim();
    const _customAddress1 = _info?.customAddress1 || '-';
    const _customAddress2 = _info?.customAddress2 || '-';
    const _customAddress3 = _info?.customAddress3 || '-';
    return (
      <Form<WorkAddrFormFields>
        isEditing={ isEditingWorkAddr }
        baseColSpan={4}
        register={ register }
        onSubmit={ handleSubmit(onSubmitWorkAddrForm) }
        fields={[
          {
            type: 'text',
            label: 'เลขที่', viewText: _addressNo,
            name: 'workAddr_houseNumber'
          },
          {
            type: 'text',
            label: 'หมู่ที่', viewText: _moo,
            name: 'workAddr_moo'
          },
          {
            type: 'text',
            label: 'หมู่บ้าน / อาคาร', viewText: _buildingOrVillage,
            name: 'workAddr_building'
          },
          {
            type: 'text',
            label: 'ห้อง', viewText: _roomNo,
            name: 'workAddr_room'
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
            name: 'workAddr_road'
          },
          {
            type: 'select',
            label: 'ประเทศ', viewText: _country,
            name: 'workAddr_country',
            options: []
          },
          {
            type: 'text',
            label: 'รหัสไปรษณีย์', viewText: _zipCode,
            name: 'workAddr_postcode'
          },
          {
            type: 'select',
            label: 'จังหวัด', viewText: _province,
            name: 'workAddr_province', disabled: false,
            options: []
          },
          {
            type: 'select',
            label: 'อำเภอ / เขต', viewText: _district,
            name: 'workAddr_district', disabled: true,
            options: []
          },
          {
            type: 'select',
            label: 'ตำบล / แขวง', viewText: _subDistrict,
            name: 'workAddr_subDistrict', disabled: true,
            options: []
          },
          {
            type: 'text',
            label: 'ที่อยู่ 1', viewText: _customAddress1,
            name: 'workAddr_addr1'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 2', viewText: _customAddress2,
            name: 'workAddr_addr2'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 3', viewText: _customAddress3,
            name: 'workAddr_addr3'
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
      { renderFormCurrentAddress() }
      {/* {
        (isLoading)
          ? (<AppLoader asContentLoader />)
          : (renderFormCurrentAddress())
      } */}

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

interface CurrentAddrFormFields {
  currentAddr_houseNumber: string;
  currentAddr_moo: string;
  currentAddr_building: string;
  currentAddr_room: string;
  currentAddr_floor: string;
  currentAddr_soi: string;
  currentAddr_road: string;
  currentAddr_country: string;
  currentAddr_postcode: string;
  currentAddr_province: string;
  currentAddr_district: string;
  currentAddr_subDistrict: string;
  currentAddr_addr1: string;
  currentAddr_addr2: string;
  currentAddr_addr3: string;
}

interface WorkAddrFormFields {
  workAddr_houseNumber: string;
  workAddr_moo: string;
  workAddr_building: string;
  workAddr_room: string;
  workAddr_floor: string;
  workAddr_soi: string;
  workAddr_road: string;
  workAddr_country: string;
  workAddr_postcode: string;
  workAddr_province: string;
  workAddr_district: string;
  workAddr_subDistrict: string;
  workAddr_addr1: string;
  workAddr_addr2: string;
  workAddr_addr3: string;
}