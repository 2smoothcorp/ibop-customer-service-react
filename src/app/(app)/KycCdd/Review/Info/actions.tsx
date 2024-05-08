/**
 *  KYC CDD - Review Info Action
 */

'use server'

import { services } from '@/services';
import type {
  BaseResponse,
  KycPersonalInput,
  KycAddressInput,
  KycSpouseInput
} from '@/services/rest-api/customer-service';

export const actionRevaluation = async (input: ActionReviewInfo.Input): Promise<ActionReviewInfo.Output> => {
  const {
    corporateId,
    personalInfo,
    currentAddressInfo,
    workAddressInfo,
    spouseInfo
  } = input;

  const _addrInfo: Array<KycAddressInput> = [];
  _addrInfo.push(currentAddressInfo);
  _addrInfo.push(workAddressInfo);

  try {
    const apiService = await services.getCustomerServiceApi();
    const result = await apiService.getKycApi().kycSaveCorporateIdPost({
      corporateId,
      kycSaveCorporateIdPostRequest: {
        kycPersonalInput: personalInfo,
        kycAddressInputs: _addrInfo,
        kycSpouseInput: spouseInfo
      }
    });

    return result;
  }
  catch(err: any) {
    return ({ status: 500, message: '', errors: err });
  }
}

export module ActionReviewInfo {
  export interface Input {
    corporateId: string;
    personalInfo: KycPersonalInput;
    currentAddressInfo: KycAddressInput;
    workAddressInfo: KycAddressInput;
    spouseInfo: KycSpouseInput;
  }

  export type Output = BaseResponse;
}