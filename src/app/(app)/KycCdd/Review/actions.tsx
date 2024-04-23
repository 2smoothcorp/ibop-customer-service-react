/**
 *  KYC CSS : Review - List Action
 */

'use server'

// import { services } from '@/services';

export const search = async (fields: FormData): Promise<ActionSearch.Output> => {
  const corporateId = (fields.get('corporateId') || '').toString();
  const refId = (fields.get('refId') || '').toString();
  const fullname = (fields.get('fullname') || '').toString();
  const dateStart = (fields.get('dateStart') || '').toString();
  const dateEnd = (fields.get('dateEnd') || '').toString();

  console.log('[Server Action] Search', { corporateId, refId, fullname, dateStart, dateEnd });

  // const apiService = await services.getCustomerServiceApi();

  return ({
    items: [],
    totalItems: 0,
    totalPages: 0
  });
}

export module ActionSearch {
  export interface Input {
    corporateId: string;
    referenceId: string;
    fullname: string;
    dateStart: Date;
    dateEnd: Date;
  }

  export interface Output {
    items: Array<any>;
    totalItems: number;
    totalPages: number;
  }
}