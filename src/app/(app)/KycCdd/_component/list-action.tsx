/**
 *  KYC CDD - List Action
 */

'use server'

import { services } from '@/services';
import type { KycGetAllOutputDataResponse } from '@/services/rest-api/customer-service';

export const searchKyc = async (input: ActionSearch.Input): Promise<ActionSearch.Output> => {
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
    return ({ data: { data: [], totalPages: 0, totalRecords: 0 } });
  }
}

export const searchRevaluate = async (input: ActionSearch.Input): Promise<ActionSearch.Output> => {
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
    const result = await apiService.getKycApi().kycGetRevaluateAllGet({
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
    return ({ data: { data: [], totalPages: 0, totalRecords: 0 } });
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

  export type Output = KycGetAllOutputDataResponse;
}