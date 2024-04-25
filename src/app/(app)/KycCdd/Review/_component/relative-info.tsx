/**
 *  KYC CDD : Private Component - Relative Info
 */

'use client'

import {
  type ReactElement,
  Fragment,
  useEffect
} from 'react';
import { Form } from '@/components/form';

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
      <Form
        action={ formBeneficiaryAction }
        fields={[
          {
            type: 'text',
            label: 'ประเภทผู้รับผลประโยชน์', viewText: 'test bene-type',
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
            label: 'ชื่อ', viewText: 'test fn',
            colSpan: 4,
            name: 'firstname'
          },
          {
            type: 'text',
            label: 'นามสกุล', viewText: 'test ln',
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
            label: 'ประเภทหลักฐาน', viewText: 'test ref-type',
            colSpan: 4,
            name: 'refType'
          },
          {
            type: 'text',
            label: 'เลขที่บัตร', viewText: 'test ref-id',
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

      <div className={'my-4 border-b-2 border-b-slate-500'}>
        <strong className={'text-xl text-success-500'}>ผู้รับมอบอำนาจ</strong>
      </div>
      <Form
        action={ formAttorneyAction }
        fields={[
          {
            type: 'text',
            label: 'ประเภทหลักฐาน', viewText: 'test ref-type',
            colSpan: 4,
            name: 'refType'
          },
          {
            type: 'text',
            label: 'เลขที่บัตร', viewText: 'test ref-id',
            colSpan: 4,
            name: 'refId'
          },
          {
            type: 'text',
            label: 'ประเทศเจ้าของสัญชาติ', viewText: 'test nationality',
            colSpan: 4,
            name: 'nationality'
          },
          {
            type: 'text',
            label: 'คำนำหน้า', viewText: 'test title',
            colSpan: 4,
            name: 'title'
          },
          {
            type: 'text',
            label: 'ชื่อ-นามสกุล', viewText: 'test fullname',
            colSpan: 4,
            name: 'fullname'
          },
          {
            type: 'text',
            label: 'ความสัมพันธ์', viewText: 'test relation',
            colSpan: 4,
            name: 'relationship'
          },
          {
            type: 'text',
            label: 'โทรศัพท์มือถือ', viewText: 'test tel',
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
    </Fragment>
  );
}

interface RelativeInfoProps {
  //
}