import { services } from '@/services';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest, { params: { corporateId } }: ParamSegment) {
    if (!corporateId) {
        return NextResponse.json({
            message: `[ERROR] /api/customer-profile/e-dividend`,
            reason: 'Parameters are missing'
        }, { status: 400 });
    }
    try {
        const apiService = await services.getCustomerServiceApi();
        const result = await apiService.getCustomerProfileV2Api().customerProfileCustomerInformationEDividendGet({ corporateId: corporateId });
        return NextResponse.json(result);
    }
    catch (err: any) {
        return NextResponse.json({ message: `[ERROR] /api/customer-profile/e-dividend`, err }, { status: 500 });
    }
}

interface ParamSegment {
    params: {
        corporateId: string;
    }
}