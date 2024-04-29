/**
 *  KYC CDD : Private Component - Relative Info
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
import { Grid } from '@mui/material';

import { AppLoader } from '@/components/app-loader';
import { Form } from '@/components/form';
import { InputCheckbox } from '@/components/input-checkbox';
import type {
  KycAttornetOutputDataResponse,
  KycBeneficiaryInfoOutputDataResponse
} from '@/services/rest-api/customer-service';

export const ReviewRelativeInfo = ({ corporateId }: RelativeInfoProps): ReactElement => {
  const [ isEditingBeneficiary, _setIsEditingBeneficiary ] = useState(true);
  const [ isEditingAttorney, _setIsEditingAttorney ] = useState(true);

  const beneficiaryHookForm = useForm<BeneficiaryFormFields>({
    mode: 'onSubmit',
    resolver: undefined
  });

  const attorneyHookForm = useForm<AttorneyFormFields>({
    mode: 'onSubmit',
    resolver: undefined
  });

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
    const request = await fetch(`/api/kyc/get-beneficiary/${corporateId}`, { method: 'GET' });
    const response: KycBeneficiaryInfoOutputDataResponse = await request.json();

    const { data } = response;
    if (!data) { return {}; }
    return data;
  }

  const fetchGetAttorney = async () => {
    const request = await fetch(`/api/kyc/get-attorney/${corporateId}`, { method: 'GET' });
    const response: KycAttornetOutputDataResponse = await request.json();

    const { data } = response;
    if (!data) { return {}; }
    return data;
  }

  const onSubmitBeneficiaryForm = (fieldsData: BeneficiaryFormFields) => {
    //
  }

  const onSubmitAttorneyForm = (fieldsData: AttorneyFormFields) => {
    //
  }

  const renderFormBeneficiary = () => {
    const { register, handleSubmit } = beneficiaryHookForm;
    const { data } = beneficiaryInfo;
    const _type = data?.beneficiaryType || '-';
    const _firstname = data?.beneficiaryFirstName || '-';
    const _lastname = data?.beneficiaryLastName || '-';
    const _refType = data?.referenceType || '-';
    const _refId = data?.referenceId || '-';
    return (
      <Form<BeneficiaryFormFields>
        isEditing={ isEditingBeneficiary }
        baseColSpan={ 4 }
        register={ register }
        onSubmit={ handleSubmit(onSubmitBeneficiaryForm) }
        fields={[
          {
            type: 'text',
            label: 'ประเภทผู้รับผลประโยชน์', viewText: _type,
            name: 'beneficiaryType'
          },
          {
            type: 'text',
            label: 'ความสัมพันธ์', viewText: 'test relation',
            name: 'beneficiary_relationship'
          },
          { type: 'space', label: '', viewText: '', },
          {
            type: 'text',
            label: 'ชื่อ', viewText: _firstname,
            name: 'beneficiary_firstname'
          },
          {
            type: 'text',
            label: 'นามสกุล', viewText: _lastname,
            name: 'beneficiary_lastname'
          },
          { type: 'space', label: '', viewText: '', },
          {
            type: 'text',
            label: 'ประเภทหลักฐาน', viewText: _refType,
            name: 'beneficiary_refType'
          },
          {
            type: 'text',
            label: 'เลขที่บัตร', viewText: _refId,
            name: 'beneficiary_refId'
          },
          { type: 'space', label: '', viewText: '', },

          ///////////////////////////////////////////////////////////////////////////////

          {
            type: 'text',
            label: 'เลขที่', viewText: 'test_no',
            name: 'beneficiary_houseNumber'
          },
          {
            type: 'text',
            label: 'หมู่ที่', viewText: 'test_moo',
            name: 'beneficiary_moo'
          },
          {
            type: 'text',
            label: 'หมู่บ้าน / อาคาร', viewText: 'test_building',
            name: 'beneficiary_building'
          },
          {
            type: 'text',
            label: 'ห้อง', viewText: 'test_room',
            name: 'beneficiary_room'
          },
          {
            type: 'text',
            label: 'ชั้น', viewText: 'test_floor',
            name: 'beneficiary_floor'
          },
          {
            type: 'text',
            label: 'ตรอก / ซอย', viewText: 'test_soi',
            name: 'beneficiary_soi'
          },
          {
            type: 'text',
            label: 'ถนน', viewText: 'test_road',
            name: 'beneficiary_road'
          },
          {
            type: 'select',
            label: 'ประเทศ', viewText: 'test_country',
            name: 'beneficiary_country',
            options: []
          },
          {
            type: 'text',
            label: 'รหัสไปรษณีย์', viewText: 'test_postcode',
            name: 'beneficiary_postcode'
          },
          {
            type: 'select',
            label: 'จังหวัด', viewText: 'test_province',
            name: 'beneficiary_province', disabled: false,
            options: []
          },
          {
            type: 'select',
            label: 'อำเภอ / เขต', viewText: 'test_district',
            name: 'beneficiary_district', disabled: true,
            options: []
          },
          {
            type: 'select',
            label: 'ตำบล / แขวง', viewText: 'test_subdistrict',
            name: 'beneficiary_subDistrict', disabled: true,
            options: []
          },
          {
            type: 'text',
            label: 'ที่อยู่ 1', viewText: 'test_addr1',
            name: 'beneficiary_addr1'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 2', viewText: 'test_addr2',
            name: 'beneficiary_addr2'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 3', viewText: 'test_addr3',
            name: 'beneficiary_addr3'
          }
        ]}
      />
    );
  }

  const renderFormAttorney = () => {
    const { register, handleSubmit } = attorneyHookForm;
    const { data } = attorneyInfo;
    const _refType = data?.referenceType || '-';
    const _refId = data?.referenceId || '-';
    const _nation = `${ data?.nationCode || '' } - ${ data?.nationName || '' }`.trim();
    const _title = (data?.titleOther) ? data?.titleOther : `${ data?.titleCode || '' } - ${ data?.titleName || '' }`.trim();
    const _name = data?.name || '-';
    const _relationship = (data?.relationOther) ? data?.relationOther || '' : `${ data?.relationCode || ''} - ${ data?.relationName || '' }`.trim();
    const _mobileNo = data?.mobile || '-';
    const _addressNo = data?.addressNo || '-';
    const _moo = data?.moo || '-';
    const _buildingOrVillage = data?.buildingOrVillage || '-';
    const _roomNo = data?.roomNo || '-';
    const _floor = data?.floor || '-';
    const _soi = data?.soi || '-';
    const _street = data?.street || '-';
    const _country = `${ data?.countryCode || '' } - ${ data?.countryname || '' }`.trim();
    const _postCode = data?.postCode || '-';
    const _province = `${ data?.provinceCode || '' } - ${ data?.provinceName || '' }`.trim();
    const _amphur = `${ data?.amphurCode || '' } - ${ data?.amphurName || '' }`.trim();
    const _tambon = `${ data?.tambonCode || '' } - ${ data?.tambonName || '' }`.trim();
    const _customAddr1 = data?.customAddress1 || '-';
    const _customAddr2 = data?.customAddress2 || '-';
    const _customAddr3 = data?.customAddress3 || '-';

    const _productCodes = (data?.productCode || '').split(',');
    const _nominatedProducts: Array<string> = [];
    for (const code of _productCodes) {
      switch (code) {
        case 'CASH_ACCOUNT': _nominatedProducts.push('บัญชีเงินสด (Cash)'); break;
        case 'CASH_BALANCE_THAI': _nominatedProducts.push('บัญชีแคชบาลานซ์หลักทรัพย์ไทย (Cash Balance - Thai)'); break;
        case 'CASH_BALANCE_GLOBAL': _nominatedProducts.push('บัญชีแคชบาลานซ์หลักทรัพย์ต่างประเทศ (Cash Balance - Global)'); break;
        case 'DERIVATIVES': _nominatedProducts.push('บัญชีสัญญาซื้อขายล่วงหน้า (Derivatives)'); break;
        case 'CREDIT_BALANCE': _nominatedProducts.push('บัญชีกู้ยืมเงินเพื่อซื้อหลักทรัพย์ประเภทมาร์จิน (Credit Balance)'); break;
        case 'MUTUAL_FUND_SEGREGATE': _nominatedProducts.push('บัญชีหน่วยลงทุน (Mutual Fund)'); break;
      }
    }

    return (
      <Fragment>
        <Form<AttorneyFormFields>
          isEditing={ isEditingAttorney }
          baseColSpan={ 4 }
          register={ register }
          onSubmit={ handleSubmit(onSubmitAttorneyForm) }
          fields={[
            {
              type: 'text',
              label: 'ประเภทหลักฐาน', viewText: _refType,
              name: 'attorney_refType'
            },
            {
              type: 'text',
              label: 'เลขที่บัตร', viewText: _refId,
              name: 'attorney_refId'
            },
            {
              type: 'text',
              label: 'ประเทศเจ้าของสัญชาติ', viewText: _nation,
              name: 'attorney_nationality'
            },
            {
              type: 'text',
              label: 'คำนำหน้า', viewText: _title,
              name: 'attorney_title'
            },
            {
              type: 'text',
              label: 'ชื่อ-นามสกุล', viewText: _name,
              name: 'attorney_fullname'
            },
            {
              type: 'text',
              label: 'ความสัมพันธ์', viewText: _relationship,
              name: 'attorney_relationship'
            },
            {
              type: 'text',
              label: 'โทรศัพท์มือถือ', viewText: _mobileNo,
              name: 'attorney_mobileNo'
            },
            {
              type: 'space', label: '', viewText: ''  },
            {
              type: 'space', label: '', viewText: ''  },

            ///////////////////////////////////////////////////////////////////////////////

            {
              type: 'text',
              label: 'เลขที่', viewText: _addressNo,
              name: 'attorney_houseNumber'
            },
            {
              type: 'text',
              label: 'หมู่ที่', viewText: _moo,
              name: 'attorney_moo'
            },
            {
              type: 'text',
              label: 'หมู่บ้าน / อาคาร', viewText: _buildingOrVillage,
              name: 'attorney_building'
            },
            {
              type: 'text',
              label: 'ห้อง', viewText: _roomNo,
              name: 'attorney_room'
            },
            {
              type: 'text',
              label: 'ชั้น', viewText: _floor,
              name: 'attorney_floor'
            },
            {
              type: 'text',
              label: 'ตรอก / ซอย', viewText: _soi,
              name: 'attorney_soi'
            },
            {
              type: 'text',
              label: 'ถนน', viewText: _street,
              name: 'attorney_road'
            },
            {
              type: 'select',
              label: 'ประเทศ', viewText: _country,
              name: 'attorney_country',
              options: []
            },
            {
              type: 'text',
              label: 'รหัสไปรษณีย์', viewText: _postCode,
              name: 'attorney_postcode'
            },
            {
              type: 'select',
              label: 'จังหวัด', viewText: _province,
              name: 'attorney_province', disabled: false,
              options: []
            },
            {
              type: 'select',
              label: 'อำเภอ / เขต', viewText: _amphur,
              name: 'attorney_district', disabled: true,
              options: []
            },
            {
              type: 'select',
              label: 'ตำบล / แขวง', viewText: _tambon,
              name: 'attorney_subDistrict', disabled: true,
              options: []
            },
            {
              type: 'text',
              label: 'ที่อยู่ 1', viewText: _customAddr1,
              name: 'attorney_addr1'
            },
            {
              type: 'text',
              label: 'ที่อยู่ 2', viewText: _customAddr2,
              name: 'attorney_addr2'
            },
            {
              type: 'text',
              label: 'ที่อยู่ 3', viewText: _customAddr3,
              name: 'attorney_addr3'
            }
          ]}
        />
        <Grid container spacing={4} className={'mt-4'}>
          <Grid item xs={4} className={'text-right'}>
            <strong>มอบอำนาจในการแทนข้าพเจ้าในบัญชี</strong>
          </Grid>
          <Grid item xs={8}>
            {
              _nominatedProducts.map((productName, idx) => (
                <div key={`product-name-${ idx }`}>{ productName }</div>
              ))
            }
          </Grid>
        </Grid>
      </Fragment>
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

      {
        (isEditingAttorney) && (
          <InputCheckbox
            name={'truthConfirm'}
            options={[{
              label: 'ลูกค้าขอรับรองและยืนยันว่าข้อมูลที่ให้ไว้ข้างต้นเป็นข้อมูลถูกต้องครบถ้วนตามความเป็นจริงและเป็นปัจจุบัน',
              value: 'confirmed'
            }]}
          />
        )
      }
    </Fragment>
  );
}

interface RelativeInfoProps {
  corporateId: string;
}

interface BeneficiaryFormFields {
  beneficiaryType: string;
  beneficiary_relationship: string;
  beneficiary_firstname: string;
  beneficiary_lastname: string;
  beneficiary_refType: string;
  beneficiary_refId: string;

  beneficiary_houseNumber: string;
  beneficiary_moo: string;
  beneficiary_building: string;
  beneficiary_room: string;
  beneficiary_floor: string;
  beneficiary_soi: string;
  beneficiary_road: string;
  beneficiary_country: string;
  beneficiary_postcode: string;
  beneficiary_province: string;
  beneficiary_district: string;
  beneficiary_subDistrict: string;
  beneficiary_addr1: string;
  beneficiary_addr2: string;
  beneficiary_addr3: string;
}

interface AttorneyFormFields {
  attorney_refType: string;
  attorney_refId: string;
  attorney_nationality: string;
  attorney_title: string;
  attorney_fullname: string;
  attorney_relationship: string;
  attorney_mobileNo: string;
  
  attorney_houseNumber: string;
  attorney_moo: string;
  attorney_building: string;
  attorney_room: string;
  attorney_floor: string;
  attorney_soi: string;
  attorney_road: string;
  attorney_country: string;
  attorney_postcode: string;
  attorney_province: string;
  attorney_district: string;
  attorney_subDistrict: string;
  attorney_addr1: string;
  attorney_addr2: string;
  attorney_addr3: string;
}