'use server'

import { services } from "@/services";
import { PoliticRelationInfoResponseDataResponse } from "@/services/rest-api/customer-service";

export interface PoliticRelationInfoActionResponse {
    success: boolean
    data?: PoliticRelationInfoResponseDataResponse | undefined,
    error?: any
}

export async function getPoliticRelationInfo(prevState: PoliticRelationInfoActionResponse, formData: FormData): Promise<PoliticRelationInfoActionResponse> {
    try {
        const corporateId = formData.get('corporateId') as string || '';

        const customerProfileApi = await services.getCustomerServiceApi();
        const response = await customerProfileApi.getCustomerProfileV2Api().customerProfileCustomerInformationPoliticRelationInfoGet({
            corporateId,
        });
        if (response.data == null) {
            return { success: false, error: response.message };
        }
        return { success: true, data: response };
    } catch (e: any) {
        console.error('Error', e)
        return { success: false, error: e };
    }
}


