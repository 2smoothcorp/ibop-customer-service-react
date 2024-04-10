'use server'

import { services } from "@/services"
import { CustomerInfoListResponsePagination } from "@/services/rest-api/customer-service"

export interface CustomerProfileActionResponse{
    success: boolean
    data?: CustomerInfoListResponsePagination | undefined,
    error?: any
}

export async function searchCustomerInfo(prevState: CustomerProfileActionResponse, formData: FormData) : Promise<CustomerProfileActionResponse>
{
    try{
        const corporateID = formData.get('corporateID') as string || '';
        const referenceID = formData.get('referenceID') as string || '';
        const fullName = formData.get('fullName') as string || '';
        const emailNumber = formData.get('emailNumber') as string || '';
    
        const customerProfileApi = await services.getCustomerProfileV2Service();
        const response = await customerProfileApi.customerProfileCustomerInfoListGet({
            corporateID,
            referenceID,
            fullName,
            emailNumber,
        });
        console.log('response.data', response.data)
        return { success: true, data: response.data };
    }catch(e){
        console.error('Errrrr', e?.response?.data)
        return { success: false, error: e?.response?.data };
    }
}


