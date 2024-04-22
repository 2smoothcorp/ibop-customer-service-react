'use server'

import { services } from "@/services";
import { PersonalInfoResponseDataResponse } from "@/services/rest-api/customer-service";

export interface PersonalInfoActionResponse {
    success: boolean
    data?: PersonalInfoResponseDataResponse | undefined,
    error?: any
}

export async function getPersonalInfo(prevState: PersonalInfoActionResponse, formData: FormData): Promise<PersonalInfoActionResponse> {
    try {
        const corporateId = formData.get('corporateId') as string || '';

        const customerProfileApi = await services.getCustomerServiceApi();
        const response = await customerProfileApi.getCustomerProfileV2Api().customerProfileCustomerInformationPersonalInfoGet({
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


