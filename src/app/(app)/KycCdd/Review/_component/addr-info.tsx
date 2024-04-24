/**
 *  KYC CDD : Private Component - Addr Info
 */

'use client'

import {
  type ReactElement,
  Fragment,
  useEffect
} from 'react';
// import { Form } from '@/components/form';

export const ReviewAddrInfo = ({}: AddrInfoProps): ReactElement => {
  useEffect(() => {}, []);

  const formCurrentAddrAction = (data: FormData) => {
    //
  }

  const formWorkAddrAction = (data: FormData) => {
    //
  }

  return (
    <Fragment>
      <div className={'my-4 border-b-2 border-b-slate-500'}>
        <strong className={'text-xl text-success-500'}>ข้อมูลที่อยู่ปัจจุบัน</strong>
      </div>
      {/* <Form
        columnPerRow={3}
        action={ formCurrentAddrAction }
        fields={[
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
        <strong className={'text-xl text-success-500'}>ข้อมูลที่ทำงาน</strong>
      </div>
      {/* <Form
        columnPerRow={3}
        action={ formWorkAddrAction }
        fields={[
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

interface AddrInfoProps {
  //
}