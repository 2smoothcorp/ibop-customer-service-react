/**
 *  KYC CDD : Private Component - Spouse Info
 */

'use client'

import {
  type ReactElement,
  Fragment,
  useEffect
} from 'react';
// import { Form } from '@/components/form';

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
      {/* <Form
        columnPerRow={2}
        action={ formAction }
        fields={[
          { label: 'สถานสภาพสมรส', viewText: 'test marital-status' },
          { label: 'ประเภทหลักฐาน', viewText: 'test ref-type' },
          { label: 'เลขทีบัตร', viewText: 'test ref-id' },
          { label: 'ชื่อ', viewText: 'test fn' },
          { label: 'นามสกุล', viewText: 'test ln' }
        ]}
      /> */}
    </Fragment>
  );
}

interface SpouseInfoProps {
  //
}