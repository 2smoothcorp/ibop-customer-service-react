/**
 *  API Route - Master Data Income Source
 */

import { services } from '@/services';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest) {

    try {
        const apiService = await services.getCustomerServiceApi();
        const result = await apiService.getMasterDataApi().masterDataProductGet()
        return NextResponse.json(result);
    }
    catch (err: any) {
        return NextResponse.json({ message: `[ERROR] /api/master-data/product`, err }, { status: 500 });
    }
}
