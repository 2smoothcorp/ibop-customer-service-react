'use server'

import { services } from "@/services";
import { AddressInfoResponseDataResponse } from "@/services/rest-api/customer-service";

export interface AddressByTypeActionResponse {
    success: boolean
    data?: AddressInfoResponseDataResponse | undefined,
    error?: any
}

export async function getAddressByType(prevState: AddressByTypeActionResponse, formData: FormData): Promise<AddressByTypeActionResponse> {
    try {
        const corporateId = formData.get('corporateId') as string || '';

        const customerProfileApi = await services.getCustomerServiceApi();
        const response = await customerProfileApi.getCustomerProfileV2Api().customerProfileCustomerInformationAddressInfoGet({
            addressTypeCode: '01',
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
