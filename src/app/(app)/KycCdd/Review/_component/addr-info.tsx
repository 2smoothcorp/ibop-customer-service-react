/**
 *  KYC CDD : Private Component - Addr Info
 */

'use client'

import {
  type ReactElement,
  Fragment,
  useEffect
} from 'react';
import { Form } from '@/components/form';

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
      <Form
        action={ formCurrentAddrAction }
        fields={[
          {
            type: 'text',
            label: 'เลขที่', viewText: 'test_no',
            colSpan: 4,
            name: 'currentAddr_houseNumber'
          },
          {
            type: 'text',
            label: 'หมู่ที่', viewText: 'test_moo',
            colSpan: 4,
            name: 'currentAddr_moo'
          },
          {
            type: 'text',
            label: 'หมู่บ้าน / อาคาร', viewText: 'test_building',
            colSpan: 4,
            name: 'currentAddr_building'
          },
          {
            type: 'text',
            label: 'ห้อง', viewText: 'test_room',
            colSpan: 4,
            name: 'currentAddr_room'
          },
          {
            type: 'text',
            label: 'ชั้น', viewText: 'test_floor',
            colSpan: 4,
            name: 'currentAddr_floor'
          },
          {
            type: 'text',
            label: 'ตรอก / ซอย', viewText: 'test_soi',
            colSpan: 4,
            name: 'currentAddr_soi'
          },
          {
            type: 'text',
            label: 'ถนน', viewText: 'test_road',
            colSpan: 4,
            name: 'currentAddr_road'
          },
          {
            type: 'select',
            label: 'ประเทศ', viewText: 'test_country',
            colSpan: 4,
            name: 'currentAddr_country',
            options: []
          },
          {
            type: 'text',
            label: 'รหัสไปรษณีย์', viewText: 'test_postcode',
            colSpan: 4,
            name: 'currentAddr_postcode'
          },
          {
            type: 'select',
            label: 'จังหวัด', viewText: 'test_province',
            colSpan: 4,
            name: 'currentAddr_province', disabled: false,
            options: []
          },
          {
            type: 'select',
            label: 'อำเภอ / เขต', viewText: 'test_district',
            colSpan: 4,
            name: 'currentAddr_district', disabled: true,
            options: []
          },
          {
            type: 'select',
            label: 'ตำบล / แขวง', viewText: 'test_subdistrict',
            colSpan: 4,
            name: 'currentAddr_subDistrict', disabled: true,
            options: []
          },
          {
            type: 'text',
            label: 'ที่อยู่ 1', viewText: 'test_addr1',
            colSpan: 4,
            name: 'currentAddr_addr1'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 2', viewText: 'test_addr2',
            colSpan: 4,
            name: 'currentAddr_addr2'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 3', viewText: 'test_addr3',
            colSpan: 4,
            name: 'currentAddr_addr3'
          }
        ]}
      />

      <div className={'my-4 border-b-2 border-b-slate-500'}>
        <strong className={'text-xl text-success-500'}>ข้อมูลที่ทำงาน</strong>
      </div>
      <Form isEditing
        action={ formWorkAddrAction }
        fields={[
          {
            type: 'text',
            label: 'เลขที่', viewText: 'test_no',
            colSpan: 4,
            name: 'workAddr_houseNumber'
          },
          {
            type: 'text',
            label: 'หมู่ที่', viewText: 'test_moo',
            colSpan: 4,
            name: 'workAddr_moo'
          },
          {
            type: 'text',
            label: 'หมู่บ้าน / อาคาร', viewText: 'test_building',
            colSpan: 4,
            name: 'workAddr_building'
          },
          {
            type: 'text',
            label: 'ห้อง', viewText: 'test_room',
            colSpan: 4,
            name: 'workAddr_room'
          },
          {
            type: 'text',
            label: 'ชั้น', viewText: 'test_floor',
            colSpan: 4,
            name: 'workAddr_floor'
          },
          {
            type: 'text',
            label: 'ตรอก / ซอย', viewText: 'test_soi',
            colSpan: 4,
            name: 'workAddr_soi'
          },
          {
            type: 'text',
            label: 'ถนน', viewText: 'test_road',
            colSpan: 4,
            name: 'workAddr_road'
          },
          {
            type: 'select',
            label: 'ประเทศ', viewText: 'test_country',
            colSpan: 4,
            name: 'workAddr_country',
            options: []
          },
          {
            type: 'text',
            label: 'รหัสไปรษณีย์', viewText: 'test_postcode',
            colSpan: 4,
            name: 'workAddr_postcode'
          },
          {
            type: 'select',
            label: 'จังหวัด', viewText: 'test_province',
            colSpan: 4,
            name: 'workAddr_province', disabled: false,
            options: []
          },
          {
            type: 'select',
            label: 'อำเภอ / เขต', viewText: 'test_district',
            colSpan: 4,
            name: 'workAddr_district', disabled: true,
            options: []
          },
          {
            type: 'select',
            label: 'ตำบล / แขวง', viewText: 'test_subdistrict',
            colSpan: 4,
            name: 'workAddr_subDistrict', disabled: true,
            options: []
          },
          {
            type: 'text',
            label: 'ที่อยู่ 1', viewText: 'test_addr1',
            colSpan: 4,
            name: 'workAddr_addr1'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 2', viewText: 'test_addr2',
            colSpan: 4,
            name: 'workAddr_addr2'
          },
          {
            type: 'text',
            label: 'ที่อยู่ 3', viewText: 'test_addr3',
            colSpan: 4,
            name: 'workAddr_addr3'
          }
        ]}
      />
    </Fragment>
  );
}

interface AddrInfoProps {
  //
}