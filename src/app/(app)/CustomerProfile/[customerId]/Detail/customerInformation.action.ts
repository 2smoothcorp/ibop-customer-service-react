'use server'

import { services } from "@/services";
import { AddressInfoResponseDataResponse } from "@/services/rest-api/customer-service";

export interface AddressByCurrentActionResponse {
    success: boolean
    data?: AddressInfoResponseDataResponse | undefined,
    error?: any
}

export async function getMasterDataOccupation(): Promise<AddressByCurrentActionResponse> {
    try {
        // const corporateId = formData.get('corporateId') as string || '';

        const customerServiceApi = await services.getCustomerServiceApi();
        const response = await customerServiceApi.getMasterDataApi().masterDataOccupationGet();
        console.log('response', response);
        // if (response.data == null) {
        //     return { success: false, error: response.message };
        // }
        return { success: true, data: undefined };
    } catch (e: any) {
        console.error('Error', e)
        return { success: false, error: e };
    }
}
