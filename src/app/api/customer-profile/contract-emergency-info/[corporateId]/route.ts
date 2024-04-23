/**
 *  API Route - Consent Answer
 */

import { services } from '@/services';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest, { params: { corporateId } }: ParamSegment) {
    if (!corporateId) {
        return NextResponse.json({
            message: `[ERROR] /api/customer-profile/contract-emergency-info`,
            reason: 'Parameters are missing'
        }, { status: 400 });
    }
    try {
        const apiService = await services.getCustomerServiceApi();
        const result = await apiService.getCustomerProfileV2Api().customerProfileCustomerInformationEmergencyContactInfoGet({ corporateId: corporateId });
        return NextResponse.json(result);
    }
    catch (err: any) {
        return NextResponse.json({ message: `[ERROR] /api/customer-profile/contract-emergency-info`, err }, { status: 500 });
    }
}

interface ParamSegment {
    params: {
        corporateId: string;
    }
}