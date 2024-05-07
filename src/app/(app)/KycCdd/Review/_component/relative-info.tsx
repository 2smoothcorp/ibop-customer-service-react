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
// import { useForm } from 'react-hook-form';
import { Grid } from '@mui/material';

import { AppLoader } from '@/components/app-loader';
import { Form } from '@/components/form';
import { SectionSeparator } from '@/components/section-separator';
import { type StoreTypeKycCdd } from '@/libs/redux/store/kyc-cdd';
import type {
  KycAttornetOutputDataResponse,
  KycBeneficiaryInfoOutputDataResponse
} from '@/services/rest-api/customer-service';

export const ReviewRelativeInfo = ({ corporateId }: RelativeInfoProps): ReactElement => {
  // const [ isEditingBeneficiary, setIsEditingBeneficiary ] = useState(false);
  // const [ isEditingAttorney, setIsEditingAttorney ] = useState(false);

  // const reduxDispatcher = useAppDispatch();

  // const beneficiaryHookForm = useForm<StoreTypeKycCdd.BeneficiaryFormFields>({
  //   mode: 'onSubmit',
  //   resolver: undefined
  // });

  // const attorneyHookForm = useForm<StoreTypeKycCdd.AttorneyFormFields>({
  //   mode: 'onSubmit',
  //   resolver: undefined
  // });

  const beneficiaryInfo = useQuery({
    queryFn: () => fetchGetBeneficiary(),
    queryKey: ['kyccdd-beneficiary-info', corporateId],
    enabled: !!corporateId
  });
  
  const attorneyInfo = useQuery({
    queryFn: () => fetchGetAttorney(),
    queryKey: ['kyccdd-attorney-info', corporateId],
    enabled: !!corporateId
  });

  useEffect(() => {}, []);

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

  // const onSubmitBeneficiaryForm = (fieldsData: StoreTypeKycCdd.BeneficiaryFormFields) => {
  //   reduxDispatcher(saveBeneficiarryInfo(fieldsData));
  //   setIsEditingBeneficiary(false);
  // }

  // const onSubmitAttorneyForm = (fieldsData: StoreTypeKycCdd.AttorneyFormFields) => {
  //   reduxDispatcher(saveAttorneyInfo(fieldsData));
  //   setIsEditingAttorney(false);
  // }

  const renderFormBeneficiary = () => {
    // const { register, handleSubmit } = beneficiaryHookForm;
    const { data } = beneficiaryInfo;
    const _type = data?.beneficiaryType || '-';
    const _firstname = data?.beneficiaryFirstName || '-';
    const _lastname = data?.beneficiaryLastName || '-';
    const _refType = data?.referenceType || '-';
    const _refId = data?.referenceId || '-';
    return (
      <Form<StoreTypeKycCdd.BeneficiaryFormFields>
        isEditing={ false }
        baseColSpan={ 4 }
        hookForm={{}}
        // register={ register }
        // onSubmit={ handleSubmit(onSubmitBeneficiaryForm) }
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
            name: 'beneficiary_addressNo'
          },
          {
            type: 'text',
            label: 'หมู่ที่', viewText: 'test_moo',
            name: 'beneficiary_moo'
          },
          {
            type: 'text',
            label: 'หมู่บ้าน / อาคาร', viewText: 'test_building',
            name: 'beneficiary_buildingOrVillage'
          },
          {
            type: 'text',
            label: 'ห้อง', viewText: 'test_room',
            name: 'beneficiary_roomNo'
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
            name: 'beneficiary_street'
          },
          {
            type: 'select',
            label: 'ประเทศ', viewText: 'test_country',
            name: 'beneficiary_countryCode',
            options: []
          },
          {
            type: 'text',
            label: 'รหัสไปรษณีย์', viewText: 'test_postcode',
            name: 'beneficiary_zipCode'
          },
          {
            type: 'select',
            label: 'จังหวัด', viewText: 'test_province',
            name: 'beneficiary_provinceCode', disabled: false,
            options: []
          },
          {
            type: 'select',
            label: 'อำเภอ / เขต', viewText: 'test_district',
            name: 'beneficiary_districtCode', disabled: true,
            options: []
          },
          {
            type: 'select',
            label: 'ตำบล / แขวง', viewText: 'test_subdistrict',
            name: 'beneficiary_subDistrictCode', disabled: true,
            options: []
          },
          {
            type: 'text',
            label: 'ที่อยู่ 1', viewText: 'test_addr1',
            name: 'beneficiary_customAddress1'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 2', viewText: 'test_addr2',
            name: 'beneficiary_customAddress2'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 3', viewText: 'test_addr3',
            name: 'beneficiary_customAddress3'
          }
        ]}
      />
    );
  }

  const renderFormAttorney = () => {
    // const { register, handleSubmit } = attorneyHookForm;
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
        <Form<StoreTypeKycCdd.AttorneyFormFields>
          isEditing={ false }
          baseColSpan={ 4 }
          hookForm={{}}
          // register={ register }
          // onSubmit={ handleSubmit(onSubmitAttorneyForm) }
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
              name: 'attorney_addressNo'
            },
            {
              type: 'text',
              label: 'หมู่ที่', viewText: _moo,
              name: 'attorney_moo'
            },
            {
              type: 'text',
              label: 'หมู่บ้าน / อาคาร', viewText: _buildingOrVillage,
              name: 'attorney_buildingOrVillage'
            },
            {
              type: 'text',
              label: 'ห้อง', viewText: _roomNo,
              name: 'attorney_roomNo'
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
              name: 'attorney_street'
            },
            {
              type: 'select',
              label: 'ประเทศ', viewText: _country,
              name: 'attorney_countryCode',
              options: []
            },
            {
              type: 'text',
              label: 'รหัสไปรษณีย์', viewText: _postCode,
              name: 'attorney_zipCode'
            },
            {
              type: 'select',
              label: 'จังหวัด', viewText: _province,
              name: 'attorney_provinceCode', disabled: false,
              options: []
            },
            {
              type: 'select',
              label: 'อำเภอ / เขต', viewText: _amphur,
              name: 'attorney_districtCode', disabled: true,
              options: []
            },
            {
              type: 'select',
              label: 'ตำบล / แขวง', viewText: _tambon,
              name: 'attorney_subDistrictCode', disabled: true,
              options: []
            },
            {
              type: 'text',
              label: 'ที่อยู่ 1', viewText: _customAddr1,
              name: 'attorney_customAddress1'
            },
            {
              type: 'text',
              label: 'ที่อยู่ 2', viewText: _customAddr2,
              name: 'attorney_customAddress2'
            },
            {
              type: 'text',
              label: 'ที่อยู่ 3', viewText: _customAddr3,
              name: 'attorney_customAddress3'
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
      <SectionSeparator title={'ผู้รับผลประโยชน์ที่แท้จริง'} />
      {
        (beneficiaryInfo.isLoading)
          ? (<AppLoader asContentLoader />)
          : (renderFormBeneficiary())
      }

      <SectionSeparator title={'ผู้รับมอบอำนาจ'} />
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