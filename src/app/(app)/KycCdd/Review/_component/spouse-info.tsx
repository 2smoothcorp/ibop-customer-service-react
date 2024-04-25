/**
 *  KYC CDD : Private Component - Spouse Info
 */

'use client'

import {
  type ReactElement,
  Fragment,
  useEffect
} from 'react';
import { Form } from '@/components/form';

export const ReviewSpouseInfo = ({}: SpouseInfoProps): ReactElement => {
  useEffect(() => {}, []);

  const formAction = (data: FormData) => {
    //
  }

  return (
    <Fragment>
      <div className={'my-4 border-b-2 border-b-slate-500'}>
        <strong className={'text-xl text-success-500'}>ข้อมูลคู่สมรส</strong>
      </div>
      <Form
        action={ formAction }
        fields={[
          {
            type: 'text',
            label: 'สถานสภาพสมรส', viewText: 'test marital-status',
            colSpan: 4,
            name: 'maritalStatus'
          },
          {
            type: 'text',
            label: 'ประเภทหลักฐาน', viewText: 'test ref-type',
            colSpan: 4,
            name: 'refType'
          },
          {
            type: 'text',
            label: 'เลขทีบัตร', viewText: 'test ref-id',
            colSpan: 4,
            name: 'refId'
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
          }
        ]}
      />
    </Fragment>
  );
}

interface SpouseInfoProps {
  //
}