/**
 *  KYC CDD : Review - Info
 */

'use client'

import {
  type ReactElement,
  type ChangeEvent,
  Fragment,
  useEffect,
  useState,
  useMemo
} from 'react';
import { Button, Grid } from '@mui/material';
// import { Stepper } from '@/components/stepper';
import TabNavbar from '@/components/navbar/tab-navbar';

import {
  ReviewPersonalInfo,
  ReviewAddrInfo,
  ReviewSpouseInfo,
  ReviewRelativeInfo
} from '../_component';

const Page = (): ReactElement => {
  const [ corporateId, setCorporateId ] = useState('');
  const [ stepIndex, setStepIndex ] = useState(0);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const stepData = ['ข้อมูลส่วนตัว', 'ข้อมูลที่อยู่', 'ข้อมูลคู่สมรส', 'ข้อมูลบุคคลที่เกี่ยวข้อง'];

  useEffect(() => {}, []);

  const onChangeStep = (index: number) => { setStepIndex(index % stepData.length); }

  const onChangeCorporateId = (evt: ChangeEvent<HTMLInputElement>) => {
    const inputValue = evt.target.value;
    setCorporateId(inputValue);
  }

  const onClickSearch = () => {}

  const onClickClear = () => {}

  const renderSearchCorporateId = () => {
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

  const renderStepperView = () => {
    switch(stepIndex) {
      case 0: return (<ReviewPersonalInfo />);
      case 1: return (<ReviewAddrInfo />);
      case 2: return (<ReviewSpouseInfo />);
      case 3: return (<ReviewRelativeInfo />);
      default: return (<div></div>);
    }
  }

  return (
    <Fragment>
      {/* <Stepper isLinear steps={ stepData } currentIndex={ stepIndex } onChangeStep={ onChangeStep } /> */}
      <TabNavbar list={ stepData } onChange={ onChangeStep } />
      <div className={'p-4'}>
        { renderSearchCorporateId() }
        { renderStepperView() }
      </div>
    </Fragment>
  );
}

export default Page;