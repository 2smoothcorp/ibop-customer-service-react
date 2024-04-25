/**
 *  KYC CDD : Private Component - Personal Info
 */

'use client'

import {
  type ReactElement,
  Fragment,
  useEffect
} from 'react';
import { Form } from '@/components/form';

export const ReviewPersonalInfo = ({}: PersonalInfoProps): ReactElement => {
  useEffect(() => {}, []);

  const formAction = (data: FormData) => {
    // console.log('formAction', data)
    // const investmentObjective = data.getAll('investmentObjective');
    // console.log('investmentObjective', investmentObjective)
  }

  return (
    <Fragment>
      <div className={'my-4 border-b-2 border-b-slate-500'}>
        <strong className={'text-xl text-success-500'}>ข้อมูลส่วนตัว</strong>
      </div>
      <Form isEditing
        action={ formAction }
        fields={[
          {
            type: 'text',
            label: 'ชื่อ (ภาษาไทย)', viewText: 'test TH-FN',
            name: 'firstnameTh'
          },
          {
            type: 'text',
            label: 'นามสกุล (ภาษาไทย)', viewText: 'test TH-LN',
            name: 'lastnameTh'
          },
          {
            type: 'text',
            label: 'ชื่อ (ภาษาอังกฤษ)', viewText: 'test EN-FN',
            name: 'firstnameEn'
          },
          {
            type: 'text',
            label: 'นามสกุล (ภาษาอังกฤษ)', viewText: 'test EN-FN',
            name: 'lastnameEn'
          },
          {
            type: 'text',
            label: 'ประเทศเจ้าของสัญชาติ ', viewText: 'test nationality',
            name: 'nationality'
          },
          {
            type: 'text',
            label: 'อาชีพ', viewText: 'test occupation',
            name: 'occupation'
          },
          {
            type: 'number',
            label: 'รายได้รวมต่อเดือน', viewText: '0',
            name: 'monthlyIncome'
          },
          {
            type: 'checkbox',
            label: 'แหล่งที่มาของรายได้', viewText: 'test income source',
            name: 'incomeSource',
            options: [
              { label: 'aaa', value: 'aaa' },
              { label: 'bbb', value: 'bbb' },
              { label: 'ccc', value: 'ccc' }
            ]
          },
          {
            type: 'select',
            label: 'ประเทศของแหล่งที่มาของรายได้/เงินลงทุน', viewText: 'test income country',
            name: 'incomeCountry',
            options: []
          },
          {
            type: 'number',
            label: 'ประสบการณ์การลงทุน (ปี)', viewText: '0',
            name: 'exp'
          },
          {
            type: 'checkbox',
            label: 'วัตถุประสงค์การลงทุน', viewText: 'test investment objective',
            name: 'investmentObjective',
            options: [
              { label: 'aaa', value: 'aaa' },
              { label: 'bbb', value: 'bbb' },
              { label: 'ccc', value: 'ccc' }
            ]
          }
        ]}
      />
    </Fragment>
  );
}

interface PersonalInfoProps {
  //
}