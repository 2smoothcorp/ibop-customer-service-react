/**
 *  API Route - Master Data Countries
 */

import { services } from '@/services';
import { ironSessionService } from '@/services/iron-session/iron-session';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest) {

    try {
        const employeeId = await ironSessionService.getEmployeeId()
        const apiService = await services.getCustomerServiceApi();
        const result = await apiService.getMasterDataApi().masterDataCountriesGet({
            employeeID: employeeId
        })
        return NextResponse.json(result);
    }
    catch (err: any) {
        return NextResponse.json({ message: `[ERROR] /api/master-data/countries`, err }, { status: 500 });
    }
}
