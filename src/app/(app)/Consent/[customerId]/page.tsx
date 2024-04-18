/**
 *  Page - Consent
 */

'use client'

import type { ConsentAnsweredOutputDataResponse, ConsentQuestionOutputDataResponse } from '@/services/rest-api/kyc';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useParams, useRouter } from 'next/navigation';
import {
  type ReactElement,
  useEffect,
  useState
} from 'react';

const Consent = (): ReactElement => {
  const [ customerId, setCustomerId ] = useState('');
  const [ prefaceList, setPrefaceList ] = useState<Array<string>>([
    // `<p>
    //   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;คำที่ใช้ในเอกสารฉบับนี้ให้มีความหมายเดียวกันกับคำที่ได้นิยามไว้ในนโยบายความเป็นส่วนตัวของ บริษัท เอเซีย พลัส กรุ๊ป โฮลดิ้งส์ จำกัด (มหาชน) และ บริษัทในกลุ่ม (รวมเรียกว่า <b>"บริษัท"</b>) เว้นแต่ เอกสารฉบับนี้ได้นิยามไว้เป็นอย่างอื่นเพิ่มเติม
    //   <br>
    //   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ข้าพเจ้าประสงค์ที่จะใช้บริการการซื้อขายหลักทรัพย์ การยืมและให้ยืมหลักทรัพย์ และ/หรือการซื้อขายสัญญาซื้อขายล่วงหน้าของบริษัท ซื่งข้าพเจ้ารับทราบว่าบริษัทมีความจำเป็นต้องใช้ข้อมูลส่วนบุคคลของข้าพเจ้า ดังนั้น ข้าพเจ้าจึงขอแสดงเจตนาให้ความยินยอมแก่บริษัทเกี่ยวกับการใช้ข้อมูลส่วนบุคคลที่ข้าพเจ้าได้ให้ไว้ดังนี้
    // </p>`
  ]);
  const [ postfaceList, setPostfaceList ] = useState<Array<string>>([
    // `<p>ทั้งนี้ กลุ่มบริษัทในเครือ ได้แก่ บริษัท เอเซีย พลัส กรุ๊ป โฮลดิ้งส์ จำกัด, บริษัทหลักทรัพย์ เอเซีย พลัส จำกัด และ บริษัท ที่ปรึกษา เอเซีย พลัส จํากัด</p>`
  ]);
  const [ consentOptionList, setConsentOptionList ] = useState<Array<ConsentInfo>>([
    // {
    //   consentId: '84f273fb-7163-4b06-a72b-07e84bc7ce8b',
    //   order: 1,
    //   question: '<p> \r\r\n    <b>ข้าพเจ้ายินยอมให้บริษัทนำเสนอข่าวสาร บริการ และผลิตภัณฑ์ต่างๆ ที่น่าสนใจเพิ่มเติม</b> \r\r\n    <br>\r\r\n    เพื่อให้ข้าพเจ้าไม่พลาดโอกาสในการรับข่าวสารและเข้าถึงข้อเสนอการให้บริการและผลิตภัณฑ์อื่น ๆ รวมถึงกิจกรรมต่าง ๆ ที่น่าสนใจและเป็น\r\r\n        <br>\r\r\n        ประโยชน์ซึ่งคัดสรรอย่างเหมาะสมเพื่อข้าพเจ้า ข้าพเจ้ายินยอมให้บริษัทเก็บรวบรวม ใช้ และ เปิดเผยข้อมูลส่วนบุคคลของข้าพเจ้าเพื่อ\r\r\n        <br>\r\r\n        วัตถุประสงค์ดังกล่าว\r\r\n</p>',
    //   answer: 'Y'
    // },
    // {
    //   consentId: '0f0f1b02-8888-419c-bd7d-ad1ab888406e',
    //   order: 2,
    //   question: '<p> \r\r\n    <b>ข้าพเจ้ายินยอมให้บริษัทใช้ข้อมูลเพื่อพัฒนาผลิตภัณฑ์และการบริการให้ดียิ่งขึ้น</b> \r\r\n    <br>\r\r\n    เพื่อให้ข้าพเจ้าได้รับการบริการและเข้าถึงผลิตภัณฑ์ที่ถูกใจมากยิ่งขึ้น ข้าพเจ้ายินยอมให้บริษัทเก็บรวบรวมและใช้ข้อมูลส่วนบุคคลของข้าพเจ้า\r\n         <br>\r\r\n        เพื่อวิเคราะห์ วิจัย ทำสถิติ เพื่อพัฒนาผลิตภัณฑ์และการบริการของบริษัทให้ดียิ่งขึ้น\r\r\n</p>',
    //   answer: 'N'
    // },
    // {
    //   consentId: '2a4e6fb3-9850-4ef7-a7f5-81c8088d25dd',
    //   order: 3,
    //   question: '<p> \r\r\n    <b>ข้าพเจ้ายินยอมให้บริษัทเปิดเผยข้อมูลของคุณไปยังกลุ่มบริษัทในเครือ</b> \r\r\n    <br>\r\r\n    เพื่อให้ข้าพเจ้าไม่พลาดโอกาสในรับข้อเสนอการให้บริการและผลิตภัณฑ์ที่น่าสนใจด้านการลงทุนซึ่งคัดสรรอย่างเหมาะสมจากกลุ่มบริษัทในเครือ\r\r\n        <br>\r\r\n        ข้าพเจ้ายินยอมให้บริษัทเก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลของข้าพเจ้าเพื่อวัตถุประสงค์ดังต่อไปนี้\r\r\n    <br>\r\r\n        -\tวิเคราะห์ วิจัย ทำสถิติ เพื่อพัฒนาผลิตภัณฑ์และการบริการของกลุ่มบริษัทในเครือให้ตอบสนองความต้องการของข้าพเจ้า และ\r\r\n    <br>\r\r\n        -\tติดต่อคุณเพื่อนำเสนอผลิตภัณฑ์และบริการของกลุ่มบริษัทในเครือ รวมทั้งสิทธิประโยชน์ต่าง ๆ ที่เหมาะสมกับข้าพเจ้าโดยเฉพาะ\r\r\n</p>',
    //   answer: 'Y'
    // }
  ]);
  const [ isEditing, setIsEditing ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(false);
  const router = useRouter();
  const params = useParams<{ customerId: string; }>();

  useEffect(() => {
    const { back } = router;
    const { customerId } = params;

    const onInit = async () => {
      setIsLoading(true);
      const consentOptions = await fetchGetConsentQuestion();
      await fetchGetConsentAnswer(consentOptions);
      setIsLoading(false);
    }

    const fetchGetConsentQuestion = async (): Promise<Array<ConsentInfo>> => {
      const request = await fetch(`/api/consent/question`, { method: 'GET' });
      const response: ConsentQuestionOutputDataResponse = await request.json();

      const { data } = response;
      if(!data) { return []; }

      const {
        // id, title,
        header, header2, header3, header4, header5,
        footer, footer2, footer3,
        consentDetail
      } = data;

      const _preface = [];
      if(header) { _preface.push(header); }
      if(header2) { _preface.push(header2); }
      if(header3) { _preface.push(header3); }
      if(header4) { _preface.push(header4); }
      if(header5) { _preface.push(header5); }

      const _postface = [];
      if(footer) { _postface.push(footer); }
      if(footer2) { _postface.push(footer2); }
      if(footer3) { _postface.push(footer3); }

      const _opts: Array<ConsentInfo> = [];
      for(const question of consentDetail || []) {
        const { id, sortOrder, contentHtml } = question;
        _opts.push({
          order: sortOrder || 0,
          consentId: `${ id }`,
          question: contentHtml || "",
          answer: ""
        });
      }

      setPrefaceList(_preface);
      setPostfaceList(_postface);
      return _opts;
    }

    const fetchGetConsentAnswer = async (options: Array<ConsentInfo>) => {
      const urlQuery = new URLSearchParams({ referenceId: '' });
      const request = await fetch(`/api/consent/answer?${ urlQuery }`, { method: 'GET' });
      const response: ConsentAnsweredOutputDataResponse = await request.json();

      const { data } = response;
      if(!data) { return; }

      const { answers } = data;

      for(const answer of answers || []) {
        const { isAccepted, sortOrder } = answer;
        const _idx = (sortOrder || 1) - 1;
        options[_idx] = {
          ...options[_idx],
          answer: isAccepted || ''
        }
      }

      setConsentOptionList(options);
    }

    if(!customerId) { return back(); }
    setCustomerId(customerId);
    onInit();
  }, [ router, params ]);

  const onChangeConsentOption = (changedValue: string, idx: number) => {
    const cpyConsent = [ ...consentOptionList ];
    cpyConsent[idx].answer = changedValue;
    setConsentOptionList(cpyConsent);
  }

  const resolveConsentLabel = (isConsent: boolean) => {
    if(isConsent) { return ('ยินยอมเปิดเผยข้อมูล'); }
    return ('ไม่ยินยอมเปิดเผยข้อมูล');
  }

  const generatePrefaceText = () => {
    return prefaceList.map((txt, idx) => (
      <div key={idx} dangerouslySetInnerHTML={{ __html: txt }}></div>
    ));
  }

  const generatePostfaceText = () => {
    return postfaceList.map((txt, idx) => (
      <div key={idx} dangerouslySetInnerHTML={{ __html: txt }}></div>
    ));
  }

  const generateTextOptions = () => {
    return consentOptionList.map((opt, idx) => {
      const { question, answer } = opt;
      const isConsent = answer === 'Y';
      return (
        <div key={ idx } className={'py-2 border-b border-neutral-200'}>
          <span className={'text-lg'} dangerouslySetInnerHTML={{ __html: question }}></span>
          <div className={'h-4'}></div>
          <span className={'text-lg p-2 bg-neutral-200'}>{ resolveConsentLabel(isConsent) }</span>
        </div>
      );
    });
  }

  const generateSelectableOptions = () => {
    return consentOptionList.map((opt, idx) => {
      const { answer } = opt;
      return (
        <FormControl key={`consent-controlbox-${ idx }`}>
          <RadioGroup row
            name={`consent-option-${ idx }`}
            value={ answer }
            onChange={(_, changedValue) => { onChangeConsentOption(changedValue, idx); }}
          >
            <FormControlLabel control={<Radio />} value={'Y'} label={ resolveConsentLabel(true) } />
            <FormControlLabel control={<Radio />} value={'N'} label={ resolveConsentLabel(false) } />
          </RadioGroup>
        </FormControl>
      );
    });
  }

  return (
    <div className={'text-black p-4'}>
      { generatePrefaceText() }
      { (isEditing) ? generateSelectableOptions() : generateTextOptions() }
      <div className={'h-4'}></div>
      { generatePostfaceText() }
    </div>
  );
}

interface ConsentInfo {
  order: number;
  consentId: string;
  question: string;
  answer: string;
}

export default Consent;