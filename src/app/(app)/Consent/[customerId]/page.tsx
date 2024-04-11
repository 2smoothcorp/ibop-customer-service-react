/**
 *  Page - Consent
 */

import {
  type ReactElement,
  useEffect,
  useState
} from 'react';
import { useRouter, useParams } from 'next/navigation';
import { AppBar, FormControl, FormControlLabel ,Radio, RadioGroup } from '@mui/material';

const Consent = (): ReactElement => {
  const consentFormId = '28BFB1E6-C5ED-4D33-BB7D-99008A92258A';
  const [ customerId, setCustomerId ] = useState('');
  const [ prefaceList, setPrefaceList ] = useState<Array<string>>([]);
  const [ postfaceList, setPostfaceList ] = useState<Array<string>>([]);
  const [ consentOptionList, setConsentOptionList ] = useState<Array<ConsentInfo>>([]);
  const [ isEditing, setIsEditing ] = useState(false);
  const router = useRouter();
  const params = useParams<{ customerId: string; }>();

  useEffect(() => {
    const fetchGetConsentInfo = async () => {
      const res = await fetch(`https://ibop-kyc-service-uat.asiaplus.co.th/Consent/${ consentFormId }/GetQuestion`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer xxx`,
          'Content-Type': 'application/json'
        }
      });
      const json = await res.json();
    }

    fetchGetConsentInfo();
  }, []);

  useEffect(() => {
    const { back } = router;
    const { customerId } = params;
    if(!customerId) { return back(); }
    setCustomerId(customerId);
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
      const { answer } = opt;
      const isConsent = answer === 'Y';
      return (
        <span key={ idx } className={'text-lg'}>{ resolveConsentLabel(isConsent) }</span>
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
    <AppBar>
      { generatePrefaceText() }
      { (isEditing) ? generateSelectableOptions() : generateTextOptions() }
      { generatePostfaceText() }
    </AppBar>
  );
}

interface ConsentInfo {
  order: number;
  consentId: string;
  question: string;
  answer: string;
}

export default Consent;