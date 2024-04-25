/**
 *  KYC CDD : Review - List
 */

'use client'

import {
  type ReactElement,
  useEffect,
  useState
} from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ListView } from '../_component/list-view';

const Page = (): ReactElement => {
  const [ corporateId, setCorporateId ] = useState('');
  const router = useRouter();
  const params = useParams<{ customerId: string; }>();

  useEffect(() => {
    const { back } = router;
    const { customerId } = params;

    if(!customerId) { back(); }
    setCorporateId(customerId);
  }, [ router, params ]);

  return (
    <ListView corporateId={ corporateId } />
  );
}

export default Page;