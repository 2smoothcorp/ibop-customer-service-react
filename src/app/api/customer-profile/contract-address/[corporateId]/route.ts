import { services } from '@/services';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest, { params: { corporateId } }: ParamSegment) {
    if (!corporateId) {
        return NextResponse.json({
            message: `[ERROR] /api/customer-profile/contract-address`,
            reason: 'Parameters are missing'
        }, { status: 400 });
    }
    try {
        const apiService = await services.getCustomerServiceApi();
        const result = await apiService.getCustomerProfileV2Api().customerProfileCustomerInformationDocReceiveInfoGet({ corporateId: corporateId });
        return NextResponse.json(result);
    }
    catch (err: any) {
        return NextResponse.json({ message: `[ERROR] /api/customer-profile/contract-address`, err }, { status: 500 });
    }
}

interface ParamSegment {
    params: {
        corporateId: string;
    }
}