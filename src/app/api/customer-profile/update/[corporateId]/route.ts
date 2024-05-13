import { services } from '@/services';
import { CustomerProfileV2Api, ResponseError } from '@/services/rest-api/customer-service';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest, { params: { corporateId } }: ParamSegment) {
    if (!corporateId) {
        return NextResponse.json({
            message: `[ERROR] /api/customer-profile/update/[corporateId]`,
            reason: 'Parameters are missing'
        }, { status: 400 });
    }
    try {
        const form = await req.json();

        const customerProfileApi = await services.getCustomerServiceApi();
        const api: CustomerProfileV2Api = customerProfileApi.getCustomerProfileV2Api()
        const response = await api.customerProfileCustomerInformationCorporateIdPut({
            corporateId: corporateId,
            customerProfileCustomerInformationCorporateIdPutRequest: {
                //personalInfo: form.customerInformation as PersonalInfoRequest,
                beneficiaryInfo: form.beneficiary.data,
            }
        })

        return NextResponse.json({
            corporateId,
            form
        });
    }
    catch (err: any) {
        const _e = err as ResponseError
        const errorText = await _e.response.text() || ''
        console.error(`err`, _e.response.body)
        console.error(errorText)
        return NextResponse.json({ message: `[ERROR] /api/customer-profile/update/[corporateId]`, err, errorMessage: errorText }, { status: 500 });
    }
}

interface ParamSegment {
    params: {
        corporateId: string;
    }
}