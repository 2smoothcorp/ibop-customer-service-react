/**
 *  KYC CDD : Review - Info
 */

'use client'

import {
  type ReactElement,
  type ChangeEvent,
  Fragment,
  useEffect,
  useState
} from 'react';
import { useRouter } from 'next/navigation';
import { Button, Grid } from '@mui/material';
import TabNavbar from '@/components/navbar/tab-navbar';

import {
  ReviewPersonalInfo,
  ReviewAddrInfo,
  ReviewSpouseInfo,
  ReviewRelativeInfo
} from '../_component';

const Page = (): ReactElement => {
  const [ inputCorp, setInputCorp ] = useState('');
  const [ corporateId, setCorporateId ] = useState('');
  const [ stepIndex, setStepIndex ] = useState(0);
  const router = useRouter();
  const stepData = ['ข้อมูลส่วนตัว', 'ข้อมูลที่อยู่', 'ข้อมูลคู่สมรส', 'ข้อมูลบุคคลที่เกี่ยวข้อง'];

  useEffect(() => {}, []);

  const onChangeStep = (index: number) => { setStepIndex(index % stepData.length); }

  const onChangeCorporateId = (evt: ChangeEvent<HTMLInputElement>) => {
    const inputValue = evt.target.value;
    setInputCorp(inputValue);
  }

  const onClickSearch = () => { setCorporateId(inputCorp || ''); }
  const onClickClear = () => { setInputCorp(''); setCorporateId(''); }

  const onClickPrevStep = () => {
    const { back } = router;
    if(stepIndex === 0) { return back(); }
    setStepIndex((current) => current - 1);
  }

  const onClickNextStep = () => {
    const {} = router;
    if(stepIndex === stepData.length - 1) { return; }
    setStepIndex((current) => current + 1);
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
              <input
                type={'text'}
                className={`w-full px-3 py-2 h-10 bg-[#D9D9D9] border border-slate-300 rounded-md text-xl shadow-sm placeholder-slate-400`}
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
        <Button variant={'contained'} onClick={ onClickNextStep }>
          ถัดไป
        </Button>
      </div>
    );
  }

  return (
    <Fragment>
      <TabNavbar list={ stepData } onChange={ onChangeStep } />
      <div className={'p-4'}>
        { renderSearchCorporateId() }
        { renderStepperView() }
        { renderStepperControlButtons() }
      </div>
    </Fragment>
  );
}

export default Page;