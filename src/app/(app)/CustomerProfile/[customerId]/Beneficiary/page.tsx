/**
 *  Page - Beneficiary
 */

'use client'

import {
  type ReactElement,
  useEffect,
  useState
} from 'react';
import { useRouter, useParams } from 'next/navigation';
import { CircularProgress, Grid, FormControl, FormLabel } from '@mui/material';

import { AppLoader } from '@/components/app-loader';
import type { BeneficiaryInfoResponseDataResponse } from '@/services/rest-api/customer-service';

const Beneficiary = (): ReactElement => {
  const [ corporateId, setCorporateId ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const router = useRouter();
  const params = useParams<{ customerId: string; }>();

  useEffect(() => {
    const { back } = router;
    const { customerId } = params;

    const onInit = async () => {
      setIsLoading(true);
      // await fetchGetBeneficiaryInfo();
      // setIsLoading(false);
    }

    const fetchGetBeneficiaryInfo = async () => {
      const _corporateId = customerId;
      const request = await fetch(`/api/customer-profile/beneficiary/${ _corporateId }`, { method: 'GET' });
      const response: BeneficiaryInfoResponseDataResponse = await request.json();

      const { data } = response;
      if(!data) { return; }

      const { beneficiaryInfo } = data;
      if(!beneficiaryInfo) { return; }

      const {  } = beneficiaryInfo;
    }

    if(!customerId) { return back(); }
    setCorporateId(customerId);
    onInit();
  }, [ router, params ]);

  const renderPersonalInfo = () => {
    if(isLoading) {
      return (<AppLoader asContentLoader />);
    }

    return (
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>ชื่อ</FormLabel>
            <span>aaa</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>นามสกุล</FormLabel>
            <span>bbb</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>ความสัมพันธ์</FormLabel>
            <span>ccc</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>ประเภทหลักฐาน</FormLabel>
            <span>ddd</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>เลขที่บัตร</FormLabel>
            <span>eee</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>วันหมดอายุ (ค.ศ.)</FormLabel>
            <span>fff</span>
          </FormControl>
        </Grid>
      </Grid>
    );
  }

  const renderAddrInfo = () => {
    if(isLoading) {
      return (<AppLoader asContentLoader />);
    }

    return (
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>เลขที่</FormLabel>
            <span>xxx</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>หมู่ที่</FormLabel>
            <span>xxx</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>อาคาร/หมู่บ้าน</FormLabel>
            <span>xxx</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>เลขที่ห้อง</FormLabel>
            <span>xxx</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>ชั้น</FormLabel>
            <span>xxx</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>ซอย</FormLabel>
            <span>xxx</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>ถนน</FormLabel>
            <span>xxx</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>ประเทศ</FormLabel>
            <span>xxx</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>รหัสไปรษณีย์</FormLabel>
            <span>xxx</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>จังหวัด</FormLabel>
            <span>xxx</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>เขต/อำเภอ</FormLabel>
            <span>xxx</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>แขวง/ตำบล</FormLabel>
            <span>xxx</span>
          </FormControl>
        </Grid>
      </Grid>
    );
  }

  return (
    <div className={'text-black p-4'}>
      <div className={'py-2'}>
        <div className={'text-lg font-bold'}>
          ข้าพเจ้าเป็นเจ้าของบัญชีและเป็นผู้รับประโยชน์ที่แท้จริงจากการซื้อขายหลักทรัพย์ในบัญชีนี้
        </div>
        <div>
          ใช่ / บุคคลอื่นๆ
        </div>
      </div>

      <div className={'p-2'}></div>

      { renderPersonalInfo() }

      <div className={'mt-4 py-2 text-lg font-bold border-t boder-neutral-200'}>
        ที่อยู่ตามประเภทหลักฐาน
      </div>

      { renderAddrInfo() }
    </div>
  );
}

export default Beneficiary;