/**
 *  API Route - Consent Answer
 */

import { services } from '@/services';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest, { params: { corporateId, addressType } }: ParamSegment) {
    try {
        const apiService = await services.getCustomerServiceApi();
        const result = await apiService.getCustomerProfileV2Api().customerProfileCustomerInformationAddressInfoGet({
            addressTypeCode: addressType,
            corporateId,
        });
        return NextResponse.json(result);
    }
    catch (err: any) {
        return NextResponse.json({ message: `[ERROR] /api/customer-profile/polotic-relation-info`, err }, { status: 500 });
    }
}

interface ParamSegment {
    params: {
        corporateId: string;
        addressType: '01' | '02' | '03' | '04' | '05' | '06';
    }
}