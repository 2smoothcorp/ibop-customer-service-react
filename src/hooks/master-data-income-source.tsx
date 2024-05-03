/**
 *  Hook - Master Data Income Source
 */

import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { FormInternalTypeDef } from '@/components/form';
import type { ComboBoxListDataResponse } from '@/services/rest-api/customer-service';

export const useMasterDataIncomeSource = () => {
  useEffect(() => {}, []);

  const queryInfo = useQuery({
    queryFn: () => fetchGetData(),
    queryKey: ['master-data-income-source']
  });

  const fetchGetData = async () => {
    const request = await fetch(`/api/master-data/income-source`);
    const response: ComboBoxListDataResponse = await request.json();
    const refinedResponse: Array<FormInternalTypeDef.InputChoiceItem> = [];
    for(const item of (response.data || [])) {
      refinedResponse.push({ ...item, label: `${ item.rValue || '' } - ${ item.rText || '' }`, value: `${ item.rValue || '' }` });
    }

    return refinedResponse;
  }

  return queryInfo;
}