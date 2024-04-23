/**
 *  Page - Beneficiary
 */

'use client'

import {
  type ReactElement,
  Fragment,
  useEffect,
  useState
} from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Grid, FormControl, FormLabel } from '@mui/material';
import dayjs from 'dayjs';

import { AppLoader } from '@/components/app-loader';
import type { BeneficiaryInfoResponseDataResponse } from '@/services/rest-api/customer-service';

const Beneficiary = (): ReactElement => {
  const [ corporateId, setCorporateId ] = useState('');
  const [ personalInfo, setPersonalInfo ] = useState<PersonalInfo>({});
  const [ addrInfo, setAddrInfo ] = useState<AddrInfo>({});
  const [ isLoading, setIsLoading ] = useState(false);
  const router = useRouter();
  const params = useParams<{ customerId: string; }>();

  useEffect(() => {
    const { back } = router;
    const { customerId } = params;

    const onInit = async () => {
      setIsLoading(true);
      await fetchGetBeneficiaryInfo();
      setIsLoading(false);
    }

    const fetchGetBeneficiaryInfo = async () => {
      const _corporateId = customerId;
      const request = await fetch(`/api/customer-profile/beneficiary/${ _corporateId }`, { method: 'GET' });
      const response: BeneficiaryInfoResponseDataResponse = await request.json();

      const { data } = response;
      if(!data) { return; }

      const { beneficiaryInfo, referenceId } = data;
      if(!beneficiaryInfo) { return; }

      const {
        beneficiaryFirstName,
        beneficiaryLastName,
        referenceTypeDesc,
        beneficiaryExpireDate,
        beneficiaryNeverExpire,

        beneficiaryRelationshipCode,
        relationDesc,
        beneficiaryRelationshipOther,

        addressNo,
        moo,
        buildingOrVillage,
        roomNo,
        floor,
        soi,
        street,
        countryCode, countryDesc,
        provinceCode, provinceNameTh,
        districtCode, districtNameTh,
        subDistrictCode, subDistrictNameTh,
        zipCode,
        customAddress1,
        customAddress2,
        customAddress3
      } = beneficiaryInfo;

      const _expDate = (beneficiaryExpireDate) ? new Date(beneficiaryExpireDate) : undefined;
      const _personalInfo: PersonalInfo = {
        firstname: beneficiaryFirstName || '-',
        lastname: beneficiaryLastName || '-',
        refType: referenceTypeDesc || '-',
        refId: referenceId || '-',
        relation: (beneficiaryRelationshipOther) ? beneficiaryRelationshipOther : `${ beneficiaryRelationshipCode } - ${ relationDesc }`.trim(),
        expireDate: (beneficiaryNeverExpire) ? undefined : _expDate
      }

      const _addrInfo: AddrInfo = {
        houseNo: addressNo || '-',
        moo: moo || '-',
        buidling: buildingOrVillage || '-',
        roomNumber: roomNo || '-',
        buildingFloor: floor || '-',
        soi: soi || '-',
        road: street || '-',
        country: `${ countryCode } - ${ countryDesc }`.trim(),
        province: `${ provinceCode } - ${ provinceNameTh }`.trim(),
        district: `${ districtCode } - ${ districtNameTh }`.trim(),
        subDistrict: `${ subDistrictCode } - ${ subDistrictNameTh }`.trim(),
        postCode: zipCode || '-',
        addr1: customAddress1 || '',
        addr2: customAddress2 || '',
        addr3: customAddress3 || ''
      }

      setPersonalInfo(_personalInfo);
      setAddrInfo(_addrInfo);
    }

    if(!customerId) { return back(); }
    setCorporateId(customerId);
    onInit();
  }, [ router, params ]);

  const renderPersonalInfo = () => {
    if(isLoading) { return (<AppLoader asContentLoader />); }

    const { firstname, lastname, relation, refType, refId, expireDate } = personalInfo;
    return (
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>ชื่อ</FormLabel>
            <span>{ firstname }</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>นามสกุล</FormLabel>
            <span>{ lastname }</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>ความสัมพันธ์</FormLabel>
            <span>{ relation }</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>ประเภทหลักฐาน</FormLabel>
            <span>{ refType }</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>เลขที่บัตร</FormLabel>
            <span>{ refId }</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>วันหมดอายุ (ค.ศ.)</FormLabel>
            <span>
              { (expireDate) ? dayjs(expireDate).format('DD/MM/YYYY') : '-' }
            </span>
          </FormControl>
        </Grid>
      </Grid>
    );
  }

  const renderAddrInfo = () => {
    if(isLoading) { return (<AppLoader asContentLoader />); }

    const {
      houseNo, moo, buidling,
      roomNumber, buildingFloor,
      soi, road,
      postCode,
      country, province, district, subDistrict,

      addr1, addr2, addr3
    } = addrInfo;

    const _isForeign = addr1 || addr2 || addr3;

    const domesticInfo = (
      <Fragment>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>จังหวัด</FormLabel>
            <span>{ province }</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>เขต/อำเภอ</FormLabel>
            <span>{ district }</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>แขวง/ตำบล</FormLabel>
            <span>{ subDistrict }</span>
          </FormControl>
        </Grid>
      </Fragment>
    );

    const foreignInfo = (
      <Fragment>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>ที่อยู่ 1</FormLabel>
            <span>{ addr1 }</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>ที่อยู่ 2</FormLabel>
            <span>{ addr2 }</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>ที่อยู่ 3</FormLabel>
            <span>{ addr3 }</span>
          </FormControl>
        </Grid>
      </Fragment>
    );

    return (
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>เลขที่</FormLabel>
            <span>{ houseNo }</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>หมู่ที่</FormLabel>
            <span>{ moo }</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>อาคาร/หมู่บ้าน</FormLabel>
            <span>{ buidling }</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>เลขที่ห้อง</FormLabel>
            <span>{ roomNumber }</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>ชั้น</FormLabel>
            <span>{ buildingFloor }</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>ซอย</FormLabel>
            <span>{ soi }</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>ถนน</FormLabel>
            <span>{ road }</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>ประเทศ</FormLabel>
            <span>{ postCode }</span>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl>
            <FormLabel className={'font-bold'}>รหัสไปรษณีย์</FormLabel>
            <span>{ country }</span>
          </FormControl>
        </Grid>
        { (_isForeign) ? foreignInfo : domesticInfo }
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

interface PersonalInfo {
  firstname?: string;
  lastname?: string;
  relation?: string;
  refType?: string;
  refId?: string;
  expireDate?: Date;
}

interface AddrInfo {
  houseNo?: string;
  moo?: string;
  buidling?: string;
  roomNumber?: string;
  buildingFloor?: string;
  soi?: string;
  road?: string;
  country?: string;
  province?: string;
  district?: string;
  subDistrict?: string;
  postCode?: string;

  addr1?: string;
  addr2?: string;
  addr3?: string;
}

export default Beneficiary;