'use server'

import { services } from "@/services";
import { SpouseInfoResponseDataResponse } from "@/services/rest-api/customer-service";

export interface SpouseInfoActionResponse {
    success: boolean
    data?: SpouseInfoResponseDataResponse | undefined,
    error?: any
}

export async function getSpouseInfo(prevState: SpouseInfoActionResponse, formData: FormData): Promise<SpouseInfoActionResponse> {
    try {
        const corporateId = formData.get('corporateId') as string || '';
        // const corporateID = formData.get('corporateID') as string || '';
        // const referenceId = formData.get('referenceID') as string || '';
        // const referenceId = 'CCB321'
        // const fullName = formData.get('fullName') as string || '';
        // const emailNumber = formData.get('emailNumber') as string || '';
        // const pageIndex = Number(formData.get('pageIndex') as string) || 1;
        // const pageSize = Number(formData.get('pageSize')as string) || 10;

        const customerServiceApi = await services.getCustomerServiceApi();
        const response = await customerServiceApi.getCustomerProfileV2Api().customerProfileCustomerInformationSpouseInfoGet({
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


