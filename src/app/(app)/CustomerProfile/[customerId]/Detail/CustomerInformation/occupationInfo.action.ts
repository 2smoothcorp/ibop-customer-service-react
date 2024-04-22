'use server'

import { services } from "@/services";
import { AddressInfoResponseDataResponse, OccupationInfoResponseDataResponse } from "@/services/rest-api/customer-service";

export interface OccupationInfoActionResponse {
    success: boolean
    dataAddress?: AddressInfoResponseDataResponse | undefined,
    dataOccupation?: OccupationInfoResponseDataResponse | undefined,
    error?: any
}

export async function getOccupationInfo(prevState: OccupationInfoActionResponse, formData: FormData): Promise<OccupationInfoActionResponse> {
    try {
        const corporateId = formData.get('corporateId') as string || '';

        const customerProfileApi = await services.getCustomerServiceApi();
        const responseOccupation = await customerProfileApi.getCustomerProfileV2Api().customerProfileCustomerInformationOccupationInfoGet({
            corporateId,
        });
        const responseAddress = await customerProfileApi.getCustomerProfileV2Api().customerProfileCustomerInformationAddressInfoGet({
            addressTypeCode: '01',
            corporateId,
        });

        if (responseAddress.data == null && responseOccupation.data == null) {
            return { success: false, error: responseAddress.message || responseOccupation.message };
        }
        return { success: true, dataOccupation: responseOccupation, dataAddress: responseAddress };
    } catch (e: any) {
        console.error('Error', e)
        return { success: false, error: e };
    }
}


