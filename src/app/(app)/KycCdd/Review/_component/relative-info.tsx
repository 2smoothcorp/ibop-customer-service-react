/**
 *  KYC CDD : Private Component - Relative Info
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
import type {
  KycBeneficiaryInfoOutputDataResponse,
  AttorneyDataResponse
} from '@/services/rest-api/customer-service';

export const ReviewRelativeInfo = ({ corporateId }: RelativeInfoProps): ReactElement => {
  useEffect(() => {}, []);

  const beneficiaryInfo = useQuery({
    queryFn: () => fetchGetBeneficiary(),
    queryKey: ['kyccdd-beneficiary-info', corporateId]
  });

  const attorneyInfo = useQuery({
    queryFn: () => fetchGetAttorney(),
    queryKey: ['kyccdd-attorney-info', corporateId]
  });

  const fetchGetBeneficiary = async () => {
    const request = await fetch(`/api/kyc/get-beneficiary/${ corporateId }`, { method: 'GET' });
    const response: KycBeneficiaryInfoOutputDataResponse = await request.json();

    const { data } = response;
    if(!data) { return {}; }
    return data;
  }

  const fetchGetAttorney = async () => {
    const request = await fetch(`/api/kyc/get-attorney/${ corporateId }`, { method: 'GET' });
    const response: AttorneyDataResponse = await request.json();

    const { data } = response;
    if(!data) { return {}; }
    return data;
  }

  const formBeneficiaryAction = (data: FormData) => {
    //
  }

  const formAttorneyAction = (data: FormData) => {
    //
  }

  const renderFormBeneficiary = () => {
    const { data } = beneficiaryInfo;
    const _type = data?.beneficiaryType || '';
    const _firstname = data?.beneficiaryFirstName || '';
    const _lastname = data?.beneficiaryLastName || '';
    const _refType =  data?.referenceType || '';
    const _refId = data?.referenceId || '';
    return (
      <Form
        action={ formBeneficiaryAction }
        fields={[
          {
            type: 'text',
            label: 'ประเภทผู้รับผลประโยชน์', viewText: _type,
            colSpan: 4,
            name: 'beneficiaryType'
          },
          {
            type: 'text',
            label: 'ความสัมพันธ์', viewText: 'test relation',
            colSpan: 4,
            name: 'relationship'
          },
          {
            type: 'text',
            label: '', viewText: '',
            colSpan: 4,
            name: ''
          },
          {
            type: 'text',
            label: 'ชื่อ', viewText: _firstname,
            colSpan: 4,
            name: 'firstname'
          },
          {
            type: 'text',
            label: 'นามสกุล', viewText: _lastname,
            colSpan: 4,
            name: 'lastname'
          },
          {
            type: 'text',
            label: '', viewText: '',
            colSpan: 4,
            name: ''
          },
          {
            type: 'text',
            label: 'ประเภทหลักฐาน', viewText: _refType,
            colSpan: 4,
            name: 'refType'
          },
          {
            type: 'text',
            label: 'เลขที่บัตร', viewText: _refId,
            colSpan: 4,
            name: 'refId'
          },
          {
            type: 'text',
            label: '', viewText: '',
            colSpan: 4,
            name: ''
          },

          ///////////////////////////////////////////////////////////////////////////////

          {
            type: 'text',
            label: 'เลขที่', viewText: 'test_no',
            colSpan: 4,
            name: 'houseNumber'
          },
          {
            type: 'text',
            label: 'หมู่ที่', viewText: 'test_moo',
            colSpan: 4,
            name: 'moo'
          },
          {
            type: 'text',
            label: 'หมู่บ้าน / อาคาร', viewText: 'test_building',
            colSpan: 4,
            name: 'building'
          },
          {
            type: 'text',
            label: 'ห้อง', viewText: 'test_room',
            colSpan: 4,
            name: 'room'
          },
          {
            type: 'text',
            label: 'ชั้น', viewText: 'test_floor',
            colSpan: 4,
            name: 'floor'
          },
          {
            type: 'text',
            label: 'ตรอก / ซอย', viewText: 'test_soi',
            colSpan: 4,
            name: 'soi'
          },
          {
            type: 'text',
            label: 'ถนน', viewText: 'test_road',
            colSpan: 4,
            name: 'road'
          },
          {
            type: 'select',
            label: 'ประเทศ', viewText: 'test_country',
            colSpan: 4,
            name: 'country',
            options: []
          },
          {
            type: 'text',
            label: 'รหัสไปรษณีย์', viewText: 'test_postcode',
            colSpan: 4,
            name: 'postcode'
          },
          {
            type: 'select',
            label: 'จังหวัด', viewText: 'test_province',
            colSpan: 4,
            name: 'province', disabled: false,
            options: []
          },
          {
            type: 'select',
            label: 'อำเภอ / เขต', viewText: 'test_district',
            colSpan: 4,
            name: 'district', disabled: true,
            options: []
          },
          {
            type: 'select',
            label: 'ตำบล / แขวง', viewText: 'test_subdistrict',
            colSpan: 4,
            name: 'subDistrict', disabled: true,
            options: []
          },
          {
            type: 'text',
            label: 'ที่อยู่ 1', viewText: 'test_addr1',
            colSpan: 4,
            name: 'addr1'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 2', viewText: 'test_addr2',
            colSpan: 4,
            name: 'addr2'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 3', viewText: 'test_addr3',
            colSpan: 4,
            name: 'addr3'
          }
        ]}
      />
    );
  }

  const renderFormAttorney = () => {
    const { data } = attorneyInfo;
    const _refType = data?.referenceType || '';
    const _refId = data?.referenceId || '';
    const _nation = `${ data?.nationCode || '' }` //
    const _title = (data?.titleOther) ? data?.titleOther : `${ data?.titleCode || '' }` //
    const _name = data?.name || '';
    const _relationship = `${ data?.relationOther || '' }` //
    const _mobileNo = data?.mobile || '';
    const _addressNo = data?.addressNo || '';
    const _moo = data?.moo || '';
    const _buildingOrVillage = data?.buildingOrVillage || '';
    const _roomNo = data?.roomNo || '';
    const _floor = data?.floor || '';
    const _soi = data?.soi || '';
    const _street = data?.street || '';
    const _country = `${ data?.countryCode || '' }` //
    const _postCode = data?.postCode || '';
    const _province = `${ data?.provinceCode || '' }` //
    const _amphur = `${ data?.amphurCode || '' }` //
    const _tambon = `${ data?.tambonCode || '' }` //
    const _customAddr1 = data?.customAddress1 || '';
    const _customAddr2 = data?.customAddress2 || '';
    const _customAddr3 = data?.customAddress3 || '';
    return (
      <Form
        action={ formAttorneyAction }
        fields={[
          {
            type: 'text',
            label: 'ประเภทหลักฐาน', viewText: _refType,
            colSpan: 4,
            name: 'refType'
          },
          {
            type: 'text',
            label: 'เลขที่บัตร', viewText: _refId,
            colSpan: 4,
            name: 'refId'
          },
          {
            type: 'text',
            label: 'ประเทศเจ้าของสัญชาติ', viewText: _nation,
            colSpan: 4,
            name: 'nationality'
          },
          {
            type: 'text',
            label: 'คำนำหน้า', viewText: _title,
            colSpan: 4,
            name: 'title'
          },
          {
            type: 'text',
            label: 'ชื่อ-นามสกุล', viewText: _name,
            colSpan: 4,
            name: 'fullname'
          },
          {
            type: 'text',
            label: 'ความสัมพันธ์', viewText: _relationship,
            colSpan: 4,
            name: 'relationship'
          },
          {
            type: 'text',
            label: 'โทรศัพท์มือถือ', viewText: _mobileNo,
            colSpan: 4,
            name: 'mobileNo'
          },
          {
            type: 'text',
            label: '', viewText: '',
            colSpan: 4,
            name: ''
          },
          {
            type: 'text',
            label: '', viewText: '',
            colSpan: 4,
            name: ''
          },

          ///////////////////////////////////////////////////////////////////////////////

          {
            type: 'text',
            label: 'เลขที่', viewText: _addressNo,
            colSpan: 4,
            name: 'houseNumber'
          },
          {
            type: 'text',
            label: 'หมู่ที่', viewText: _moo,
            colSpan: 4,
            name: 'moo'
          },
          {
            type: 'text',
            label: 'หมู่บ้าน / อาคาร', viewText: _buildingOrVillage,
            colSpan: 4,
            name: 'building'
          },
          {
            type: 'text',
            label: 'ห้อง', viewText: _roomNo,
            colSpan: 4,
            name: 'room'
          },
          {
            type: 'text',
            label: 'ชั้น', viewText: _floor,
            colSpan: 4,
            name: 'floor'
          },
          {
            type: 'text',
            label: 'ตรอก / ซอย', viewText: _soi,
            colSpan: 4,
            name: 'soi'
          },
          {
            type: 'text',
            label: 'ถนน', viewText: _street,
            colSpan: 4,
            name: 'road'
          },
          {
            type: 'select',
            label: 'ประเทศ', viewText: _country,
            colSpan: 4,
            name: 'country',
            options: []
          },
          {
            type: 'text',
            label: 'รหัสไปรษณีย์', viewText: _postCode,
            colSpan: 4,
            name: 'postcode'
          },
          {
            type: 'select',
            label: 'จังหวัด', viewText: _province,
            colSpan: 4,
            name: 'province', disabled: false,
            options: []
          },
          {
            type: 'select',
            label: 'อำเภอ / เขต', viewText: _amphur,
            colSpan: 4,
            name: 'district', disabled: true,
            options: []
          },
          {
            type: 'select',
            label: 'ตำบล / แขวง', viewText: _tambon,
            colSpan: 4,
            name: 'subDistrict', disabled: true,
            options: []
          },
          {
            type: 'text',
            label: 'ที่อยู่ 1', viewText: _customAddr1,
            colSpan: 4,
            name: 'addr1'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 2', viewText: _customAddr2,
            colSpan: 4,
            name: 'addr2'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 3', viewText: _customAddr3,
            colSpan: 4,
            name: 'addr3'
          }
        ]}
      />
    );
  }

  return (
    <Fragment>
      <div className={'my-4 border-b-2 border-b-slate-500'}>
        <strong className={'text-xl text-success-500'}>ผู้รับผลประโยชน์ที่แท้จริง</strong>
      </div>
      {
        (beneficiaryInfo.isLoading)
        ? (<AppLoader asContentLoader />)
        : (renderFormBeneficiary())
      }

      <div className={'my-4 border-b-2 border-b-slate-500'}>
        <strong className={'text-xl text-success-500'}>ผู้รับมอบอำนาจ</strong>
      </div>
      {
        (attorneyInfo.isLoading)
        ? (<AppLoader asContentLoader />)
        : (renderFormAttorney())
      }
    </Fragment>
  );
}

interface RelativeInfoProps {
  corporateId: string;
}