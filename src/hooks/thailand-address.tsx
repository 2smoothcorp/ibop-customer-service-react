/**
 *  Thailand Address Query Hook
 */

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

export const useThailandAddress = () => {
  useEffect(() => {}, []);

  const addressInfo = useQuery({
    queryFn: () => fetchGetAddressDatasource(),
    queryKey: ['thailand-address-datasource'],
    // enabled: isEmptyAddr
  });

  const fetchGetAddressDatasource = async () => {
    const request = await fetch('https://2smooth.sgp1.digitaloceanspaces.com/public/thailand-address.min.json', { method: 'GET' });
    const response: Array<AddrJsonOutput> = await request.json();

    const results: Array<ThaiAddrInfo> = [];
    for(const addr of response) {
      const { p, d, s, po } = addr;
      const [ pName, pCode ] = p.split('|');
      const [ dName, dCode ] = d.split('|');
      const [ sName, sCode ] = s.split('|');
      const _addrLabel = `${ pName || '' } » ${ dName || '' } » ${ sName || '' } » ${ po }`;
      const _addrValue = `${ pCode || '' }|${ dCode || '' }|${ sCode || '' }|${ po }`;

      results.push({
        ...addr,
        pName, pCode,
        dName, dCode,
        sName, sCode,
        label: _addrLabel,
        value: _addrValue
      });
    }

    // setIsEmptyAddr(false);
    return results;
  }

  return addressInfo;
}

interface AddrJsonOutput {
  p: string;
  d: string;
  s: string;
  po: string;
}

export interface ThaiAddrInfo extends AddrJsonOutput {
  label: string;
  value: string;
  pName: string; pCode: string;
  dName: string; dCode: string;
  sName: string; sCode: string;
}