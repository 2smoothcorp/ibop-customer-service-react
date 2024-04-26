/**
 *  KYC CDD - List Action
 */

'use server'

import { services } from '@/services';
import type { KycGetAllOutputListDataResponse } from '@/services/rest-api/customer-service';

export const search = async (input: ActionSearch.Input): Promise<ActionSearch.Output> => {
  const {
    corporateId,
    referenceId,
    fullname,
    dateStart,
    dateEnd,
    page = 1,
    pageSize = 10
  } = input;

  try {
    const apiService = await services.getCustomerServiceApi();
    const result = await apiService.getKycApi().kycGetAllGet({
      corporateId, referenceId,
      name: fullname,
      startDate: dateStart,
      endDate: dateEnd,
      pageNumber: page,
      pageSize
    });

    return result;
  }
  catch(err) {
    return ({ data: [] });
  }
}

export module ActionSearch {
  export interface Input {
    corporateId?: string;
    referenceId?: string;
    fullname?: string;
    dateStart?: Date;
    dateEnd?: Date;
    page?: number;
    pageSize?: number;
  }

  export type Output = KycGetAllOutputListDataResponse;
}