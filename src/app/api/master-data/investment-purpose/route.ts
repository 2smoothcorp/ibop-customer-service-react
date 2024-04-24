/**
 *  API Route - Master Data Investment Purpose
 */

import { services } from '@/services';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest) {
    try {
        const apiService = await services.getCustomerServiceApi();
        const result = await apiService.getMasterDataApi().masterDataInvestmentPurposeGet()
        return NextResponse.json(result);
    }
    catch (err: any) {
        return NextResponse.json({ message: `[ERROR] /api/master-data/investment-purpose`, err }, { status: 500 });
    }
}
