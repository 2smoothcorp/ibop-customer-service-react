/**
 *  KYC CDD : Private Component - Relative Info
 */

'use client'

import {
  type ReactElement,
  Fragment,
  useEffect
} from 'react';
// import { Form } from '@/components/form';

export const ReviewRelativeInfo = ({}: RelativeInfoProps): ReactElement => {
  useEffect(() => {}, []);

  const formBeneficiaryAction = (data: FormData) => {
    //
  }

  const formAttorneyAction = (data: FormData) => {
    //
  }

  return (
    <Fragment>
      <div className={'my-4 border-b-2 border-b-slate-500'}>
        <strong className={'text-xl text-success-500'}>ผู้รับผลประโยชน์ที่แท้จริง</strong>
      </div>
      {/* <Form
        columnPerRow={3}
        action={ formBeneficiaryAction }
        fields={[
          { label: 'ประเภทผู้รับผลประโยชน์', viewText: 'test bene-type' },
          { label: 'ความสัมพันธ์', viewText: 'test relation' },
          { label: '', viewText: '' },
          { label: 'ชื่อ', viewText: 'test fn' },
          { label: 'นามสกุล', viewText: 'test ln' },
          { label: '', viewText: '' },
          { label: 'ประเภทหลักฐาน', viewText: 'test ref-type' },
          { label: 'เลขที่บัตร', viewText: 'test ref-id' },
          { label: '', viewText: '' },

          { label: 'เลขที่', viewText: 'test_no' },
          { label: 'หมู่ที่', viewText: 'test_moo' },
          { label: 'หมู่บ้าน / อาคาร', viewText: 'test_building' },
          { label: 'ห้อง', viewText: 'test_room' },
          { label: 'ชั้น', viewText: 'test_floor' },
          { label: 'ตรอก / ซอย', viewText: 'test_soi' },
          { label: 'ถนน', viewText: 'test_road' },
          { label: 'ประเทศ', viewText: 'test_country' },
          { label: 'รหัสไปรษณีย์', viewText: 'test_postcode' },
          { label: 'จังหวัด', viewText: 'test_province' },
          { label: 'อำเภอ / เขต', viewText: 'test_district' },
          { label: 'ตำบล / แขวง', viewText: 'test_subdistrict' },
          { label: 'ที่อยู่ 1', viewText: 'test_addr1' },
          { label: 'ที่อยู่ 2', viewText: 'test_addr2' },
          { label: 'ที่อยู่ 3', viewText: 'test_addr3' }
        ]}
      /> */}

      <div className={'my-4 border-b-2 border-b-slate-500'}>
        <strong className={'text-xl text-success-500'}>ผู้รับมอบอำนาจ</strong>
      </div>
      {/* <Form
        columnPerRow={3}
        action={ formAttorneyAction }
        fields={[
          { label: 'ประเภทหลักฐาน', viewText: 'test ref-type' },
          { label: 'เลขที่บัตร', viewText: 'test ref-id' },
          { label: 'ประเทศเจ้าของสัญชาติ', viewText: 'test nationality' },
          { label: 'คำนำหน้า', viewText: 'test title' },
          { label: 'ชื่อ-นามสกุล', viewText: 'test fullname' },
          { label: 'ความสัมพันธ์', viewText: 'test relation' },
          { label: 'โทรศัพท์มือถือ', viewText: 'test tel' },
          { label: '', viewText: '' },
          { label: '', viewText: '' },

          { label: 'เลขที่', viewText: 'test_no' },
          { label: 'หมู่ที่', viewText: 'test_moo' },
          { label: 'หมู่บ้าน / อาคาร', viewText: 'test_building' },
          { label: 'ห้อง', viewText: 'test_room' },
          { label: 'ชั้น', viewText: 'test_floor' },
          { label: 'ตรอก / ซอย', viewText: 'test_soi' },
          { label: 'ถนน', viewText: 'test_road' },
          { label: 'ประเทศ', viewText: 'test_country' },
          { label: 'รหัสไปรษณีย์', viewText: 'test_postcode' },
          { label: 'จังหวัด', viewText: 'test_province' },
          { label: 'อำเภอ / เขต', viewText: 'test_district' },
          { label: 'ตำบล / แขวง', viewText: 'test_subdistrict' },
          { label: 'ที่อยู่ 1', viewText: 'test_addr1' },
          { label: 'ที่อยู่ 2', viewText: 'test_addr2' },
          { label: 'ที่อยู่ 3', viewText: 'test_addr3' }
        ]}
      /> */}
    </Fragment>
  );
}

interface RelativeInfoProps {
  //
}