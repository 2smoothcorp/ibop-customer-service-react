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
        console.log(`searchCustomerInfo`)
        const corporateID = formData.get('corporateID') as string || '';
        const referenceID = formData.get('referenceID') as string || '';
        const fullName = formData.get('fullName') as string || '';
        const emailNumber = formData.get('emailNumber') as string || '';
        const pageIndex = Number(formData.get('pageIndex') as string) || 1;
        const pageSize = Number(formData.get('pageSize')as string) || 10;
    
        const customerProfileApi = await services.getCustomerServiceApi();
        const response = await customerProfileApi.getCustomerProfileV2Api().customerProfileCustomerInfoListGet({
            corporateID,
            referenceID,
            fullName,
            emailNumber,
            pageIndex,
            pageSize
        });
        console.log('response', response)
        return { success: true, data: response };
    }catch(e: any){
        console.error('Error', e)
        return { success: false, error: e };
    }
}


