'use server'

import { services } from "@/services";
import { ironSessionService } from "@/services/iron-session/iron-session";
import { ComboBoxListDataResponse } from "@/services/rest-api/customer-service";

export interface AddressByCurrentActionResponse {
    success: boolean
    data?: ComboBoxListDataResponse | undefined,
    error?: any
}

export async function getMasterDataOccupation(): Promise<AddressByCurrentActionResponse> {
    try {
        // const corporateId = formData.get('corporateId') as string || '';
        const employeeID = await ironSessionService.getEmployeeId()

        const customerServiceApi = await services.getCustomerServiceApi();
        const response = await customerServiceApi.getMasterDataApi().masterDataOccupationGet({
            employeeID
        });
        console.log('response', response);
        // if (response.data == null) {
        //     return { success: false, error: response.message };
        // }
        return { success: true, data: response };
    } catch (e: any) {
        console.error('Error', e)
        return { success: false, error: e };
    }
}
