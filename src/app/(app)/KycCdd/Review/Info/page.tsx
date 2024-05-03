/**
 *  KYC CDD : Review - Info
 */

'use client'

import { Button, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import {
  type ChangeEvent,
  Fragment,
  type ReactElement,
  useEffect,
  useState
} from 'react';

import { InputText } from '@/components/input-text';
import { InputCheckbox } from '@/components/input-checkbox';
import { Stepper } from '@/components/stepper';
import { useAppSelector } from '@/libs/redux/hook';

import {
  ReviewAddrInfo,
  ReviewPersonalInfo,
  ReviewRelativeInfo,
  ReviewSpouseInfo
} from '../_component';
import { actionRevaluation } from './actions';

const Page = (): ReactElement => {
  const [ inputCorp, setInputCorp ] = useState('');
  const [ corporateId, setCorporateId ] = useState('');
  const [ stepIndex, setStepIndex ] = useState(0);
  const [ isTruthConfirm, setIsTruthConfirm ] = useState(false);
  const router = useRouter();
  const stepData = ['ข้อมูลส่วนตัว', 'ข้อมูลที่อยู่', 'ข้อมูลคู่สมรส', 'ข้อมูลบุคคลที่เกี่ยวข้อง'];

  const storeKycCdd = useAppSelector((selector) => selector.kyccdd);

  useEffect(() => {}, []);

  const onChangeStep = (index: number) => {
    setIsTruthConfirm(false);
    setStepIndex(index % stepData.length);
  }

  const onChangeCorporateId = (changedText: string) => { setInputCorp(changedText); }
  const onClickSearch = () => { setCorporateId(inputCorp || ''); }
  const onClickClear = () => { setInputCorp(''); setCorporateId(''); }
  const onCheckTruthConfirm = (checked: boolean) => { setIsTruthConfirm(checked); }

  const onClickPrevStep = () => {
    const { back } = router;
    if(stepIndex === 0) { return back(); }
    setStepIndex((current) => current - 1);
  }

  const onClickNextStep = () => {
    const {} = router;
    const isLastStep = stepIndex === 3;
    if(!isLastStep) {
      setStepIndex((current) => current + 1);
      return;
    }

    const {
      personalInfo,
      currentAddrInfo,
      workAddrInfo,
      spouseInfo
    } = storeKycCdd;
    
    actionRevaluation({
      corporateId: corporateId,
      personalInfo: personalInfo,
      currentAddressInfo: currentAddrInfo,
      workAddressInfo: workAddrInfo,
      spouseInfo: {
        familyStatus: spouseInfo.maritalStatus,
        spouseTitleCode: spouseInfo.title,
        spouseFirstName: spouseInfo.firstname,
        spouseLastName: spouseInfo.lastname,
        spouseReferenceType: spouseInfo.refType,
        spouseIdentityId: spouseInfo.refId
      }
    });
  }

  const renderSearchCorporateId = (): ReactElement => {
    return (
      <Grid container spacing={4} className={'flex items-center gap-4'}>
        <Grid item>
          <Grid container spacing={2} className={'flex items-center'}>
            <Grid item>
              <strong>Corporate ID</strong>
            </Grid>
            <Grid item>
              {/* <input
                type={'text'}
                className={`w-full px-3 py-2 h-10 bg-[#D9D9D9] border border-slate-300 rounded-md text-xl shadow-sm placeholder-slate-400`}
                onChange={ onChangeCorporateId }
              /> */}
              <InputText
                name={'corporateId'}
                onChange={ onChangeCorporateId }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <div className={'flex gap-x-2'}>
            <Button
              variant={'contained'}
              className={'bg-primary-950 disabled:bg-primary-900 hover:bg-primary-900 transition-all text-white disabled:text-white text-xl py-0 w-25 h-10'}
              onClick={ onClickSearch }
            >
              ค้นหา
            </Button>
            <Button
              variant={'contained'}
              className={'bg-[#E8E8E8] hover:bg-[#E8E8E8] hover:brightness-95 text-xl py-0 w-25 h-10 !text-[#252525] font-db-helvethaica'}
              onClick={ onClickClear }
            >
              ล้างค่า
            </Button>
          </div>
        </Grid>
      </Grid>
    );
  }

  const renderStepperView = (): ReactElement => {
    switch(stepIndex) {
      case 0: return (<ReviewPersonalInfo corporateId={ corporateId } />);
      case 1: return (<ReviewAddrInfo corporateId={ corporateId } />);
      case 2: return (<ReviewSpouseInfo corporateId={ corporateId } />);
      case 3: return (<ReviewRelativeInfo corporateId={ corporateId } />);
      default: return (<div></div>);
    }
  }

  const renderTruthConfirmCheckbox = (): ReactElement => {
    const isLastStep = stepIndex === 3;
    if(!isLastStep) { return (<div></div>); }

    return (
      <InputCheckbox
        name={'truthConfirm'}
        options={[{
          label: 'ลูกค้าขอรับรองและยืนยันว่าข้อมูลที่ให้ไว้ข้างต้นเป็นข้อมูลถูกต้องครบถ้วนตามความเป็นจริงและเป็นปัจจุบัน',
          value: 'confirmed'
        }]}
        onTick={ onCheckTruthConfirm }
      />
    );
  }

  const renderStepperControlButtons = (): ReactElement => {
    return (
      <div className={'flex items-center justify-end gap-x-4 mt-4 p-4'}>
        <Button
          variant={'contained'}
          className={'bg-neutral-200 hover:bg-neutral-200 hover:brightness-95 text-xl text-black py-0 w-25 h-10'}
          onClick={ onClickPrevStep }
        >
          ย้อนกลับ
        </Button>
        <Button variant={'contained'} onClick={ onClickNextStep } disabled={ stepIndex === 3 && !isTruthConfirm }>
          ถัดไป
        </Button>
      </div>
    );
  }

  return (
    <Fragment>
      <Stepper disabled steps={ stepData } currentStepIndex={ stepIndex } onChangeStep={ onChangeStep } />
      <div className={'p-4'}>
        { renderSearchCorporateId() }
        { renderStepperView() }
        { renderTruthConfirmCheckbox() }
        { renderStepperControlButtons() }
      </div>
    </Fragment>
  );
}

export default Page;