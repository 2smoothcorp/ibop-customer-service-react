/**
 *  KYC CDD : Private Component - Addr Info
 */

'use client'

import {
  type ReactElement,
  Fragment,
  useEffect
} from 'react';
import { useQuery } from '@tanstack/react-query';

import { AppLoader } from '@/components/app-loader';
import { Form } from '@/components/form';
import type { KycAddressOutputListDataResponse } from '@/services/rest-api/customer-service';

export const ReviewAddrInfo = ({ corporateId }: AddrInfoProps): ReactElement => {
  useEffect(() => { }, []);

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

  const formCurrentAddrAction = (data: FormData) => {
    //
  }

  const formWorkAddrAction = (data: FormData) => {
    //
  }

  const renderFormCurrentAddress = () => {
    const _info = addressList?.currentAddr;
    const _addressNo = _info?.addressNo || '-';
    const _moo = _info?.moo || '-';
    const _buildingOrVillage = _info?.buildingOrVillage || '-';
    const _roomNo = _info?.roomNo || '-';
    const _floor = _info?.floor || '-';
    const _soi = _info?.soi || '-';
    const _street = _info?.street || '-';
    const _country = `${ _info?.countryCode || '' } - ${ _info?.countryName }`.trim();
    const _zipCode = _info?.zipCode || '-';
    const _province = `${ _info?.provinceCode || '' } - ${ _info?.provinceName || '' }`.trim();
    const _district = `${ _info?.districtCode || '' } - ${ _info?.districtName || '' }`.trim();
    const _subDistrict = `${ _info?.subDistrictCode || '' } - ${ _info?.subDistrictName || '' }`.trim();
    const _customAddress1 = _info?.customAddress1 || '-';
    const _customAddress2 = _info?.customAddress2 || '-';
    const _customAddress3 = _info?.customAddress3 || '-';
    return (
      <Form
        action={formCurrentAddrAction}
        fields={[
          {
            type: 'text',
            label: 'เลขที่', viewText: _addressNo,
            colSpan: 4,
            name: 'currentAddr_houseNumber'
          },
          {
            type: 'text',
            label: 'หมู่ที่', viewText: _moo,
            colSpan: 4,
            name: 'currentAddr_moo'
          },
          {
            type: 'text',
            label: 'หมู่บ้าน / อาคาร', viewText: _buildingOrVillage,
            colSpan: 4,
            name: 'currentAddr_building'
          },
          {
            type: 'text',
            label: 'ห้อง', viewText: _roomNo,
            colSpan: 4,
            name: 'currentAddr_room'
          },
          {
            type: 'text',
            label: 'ชั้น', viewText: _floor,
            colSpan: 4,
            name: 'currentAddr_floor'
          },
          {
            type: 'text',
            label: 'ตรอก / ซอย', viewText: _soi,
            colSpan: 4,
            name: 'currentAddr_soi'
          },
          {
            type: 'text',
            label: 'ถนน', viewText: _street,
            colSpan: 4,
            name: 'currentAddr_road'
          },
          {
            type: 'select',
            label: 'ประเทศ', viewText: _country,
            colSpan: 4,
            name: 'currentAddr_country',
            options: []
          },
          {
            type: 'text',
            label: 'รหัสไปรษณีย์', viewText: _zipCode,
            colSpan: 4,
            name: 'currentAddr_postcode'
          },
          {
            type: 'select',
            label: 'จังหวัด', viewText: _province,
            colSpan: 4,
            name: 'currentAddr_province', disabled: false,
            options: []
          },
          {
            type: 'select',
            label: 'อำเภอ / เขต', viewText: _district,
            colSpan: 4,
            name: 'currentAddr_district', disabled: true,
            options: []
          },
          {
            type: 'select',
            label: 'ตำบล / แขวง', viewText: _subDistrict,
            colSpan: 4,
            name: 'currentAddr_subDistrict', disabled: true,
            options: []
          },
          {
            type: 'text',
            label: 'ที่อยู่ 1', viewText: _customAddress1,
            colSpan: 4,
            name: 'currentAddr_addr1'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 2', viewText: _customAddress2,
            colSpan: 4,
            name: 'currentAddr_addr2'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 3', viewText: _customAddress3,
            colSpan: 4,
            name: 'currentAddr_addr3'
          }
        ]}
      />
    );
  }

  const renderFormWorkAddress = () => {
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
      <Form
        action={formWorkAddrAction}
        fields={[
          {
            type: 'text',
            label: 'เลขที่', viewText: _addressNo,
            colSpan: 4,
            name: 'workAddr_houseNumber'
          },
          {
            type: 'text',
            label: 'หมู่ที่', viewText: _moo,
            colSpan: 4,
            name: 'workAddr_moo'
          },
          {
            type: 'text',
            label: 'หมู่บ้าน / อาคาร', viewText: _buildingOrVillage,
            colSpan: 4,
            name: 'workAddr_building'
          },
          {
            type: 'text',
            label: 'ห้อง', viewText: _roomNo,
            colSpan: 4,
            name: 'workAddr_room'
          },
          {
            type: 'text',
            label: 'ชั้น', viewText: _floor,
            colSpan: 4,
            name: 'workAddr_floor'
          },
          {
            type: 'text',
            label: 'ตรอก / ซอย', viewText: _soi,
            colSpan: 4,
            name: 'workAddr_soi'
          },
          {
            type: 'text',
            label: 'ถนน', viewText: _street,
            colSpan: 4,
            name: 'workAddr_road'
          },
          {
            type: 'select',
            label: 'ประเทศ', viewText: _country,
            colSpan: 4,
            name: 'workAddr_country',
            options: []
          },
          {
            type: 'text',
            label: 'รหัสไปรษณีย์', viewText: _zipCode,
            colSpan: 4,
            name: 'workAddr_postcode'
          },
          {
            type: 'select',
            label: 'จังหวัด', viewText: _province,
            colSpan: 4,
            name: 'workAddr_province', disabled: false,
            options: []
          },
          {
            type: 'select',
            label: 'อำเภอ / เขต', viewText: _district,
            colSpan: 4,
            name: 'workAddr_district', disabled: true,
            options: []
          },
          {
            type: 'select',
            label: 'ตำบล / แขวง', viewText: _subDistrict,
            colSpan: 4,
            name: 'workAddr_subDistrict', disabled: true,
            options: []
          },
          {
            type: 'text',
            label: 'ที่อยู่ 1', viewText: _customAddress1,
            colSpan: 4,
            name: 'workAddr_addr1'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 2', viewText: _customAddress2,
            colSpan: 4,
            name: 'workAddr_addr2'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 3', viewText: _customAddress3,
            colSpan: 4,
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