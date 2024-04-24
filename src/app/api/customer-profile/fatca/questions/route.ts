import { services } from '@/services';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest, { }: ParamSegment) {
    // if (!corporateId) {
    //     return NextResponse.json({
    //         message: `[ERROR] /api/customer-profile/fatca/questions`,
    //         reason: 'Parameters are missing'
    //     }, { status: 400 });
    // }
    try {
        const apiService = await services.getCustomerServiceApi();
        const result = await apiService.getFATCAApi().fATCAQuestionsGet();
        return NextResponse.json(result);
    }
    catch (err: any) {
        return NextResponse.json({ message: `[ERROR] /api/customer-profile/fatca/questions`, err }, { status: 500 });
    }
}

interface ParamSegment {
    // params: {
    //     corporateId: string;
    // }
}