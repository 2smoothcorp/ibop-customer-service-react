/**
 *  API Route - Master Data Income Source
 */

import { services } from '@/services';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest) {

    try {
        const apiService = await services.getCustomerServiceApi();
        const result = await apiService.getMasterDataApi().masterDataIncomeSourceGet()
        return NextResponse.json(result);
    }
    catch (err: any) {
        return NextResponse.json({ message: `[ERROR] /api/master-data/income-rate`, err }, { status: 500 });
    }
}