/**
 *  KYC CDD : Private Component - Personal Info
 */

'use client'

import {
  type ReactElement,
  Fragment,
  useEffect
} from 'react';
// import { Form } from '@/components/form';

export const ReviewPersonalInfo = ({}: PersonalInfoProps): ReactElement => {
  useEffect(() => {}, []);

  const formAction = (data: FormData) => {
    //
  }

  return (
    <Fragment>
      <div className={'my-4 border-b-2 border-b-slate-500'}>
        <strong className={'text-xl text-success-500'}>ข้อมูลส่วนตัว</strong>
      </div>
      {/* <Form
        columnPerRow={2}
        action={ formAction }
        fields={[
          { label: 'ชื่อ (ภาษาไทย)', viewText: 'test TH-FN' },
          { label: 'นามสกุล (ภาษาไทย)', viewText: 'test TH-LN' },
          { label: 'ชื่อ (ภาษาอังกฤษ)', viewText: 'test EN-FN' },
          { label: 'นามสกุล (ภาษาอังกฤษ)', viewText: 'test EN-FN' },
          { label: 'ประเทศเจ้าของสัญชาติ ', viewText: 'test nationality' },
          { label: 'อาชีพ', viewText: 'test occupation' },
          { label: 'รายได้รวมต่อเดือน', viewText: '0' },
          { label: 'แหล่งที่มาของรายได้', viewText: 'test income source' },
          { label: 'ประเทศของแหล่งที่มาของรายได้/เงินลงทุน', viewText: 'test income country' },
          { label: 'ประสบการณ์การลงทุน (ปี)', viewText: '0' },
          { label: 'วัตถุประสงค์การลงทุน', viewText: 'test investment objective' }
        ]}
      /> */}
    </Fragment>
  );
}

interface PersonalInfoProps {
  //
}