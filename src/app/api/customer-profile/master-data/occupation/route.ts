/**
 *  API Route - Consent Answer
 */

import { services } from '@/services';
import { ironSessionService } from '@/services/iron-session/iron-session';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest, { }: ParamSegment) {
    // if (!employeeId) {
    //     return NextResponse.json({
    //         message: `[ERROR] /api/customer-profile/master-data/[employeeId]/occupation`,
    //         reason: 'Parameters are missing'
    //     }, { status: 400 });
    // }
    const employeeId = await ironSessionService.getEmployeeId()
    try {
        const apiService = await services.getCustomerServiceApi();
        const result = await apiService.getMasterDataApi().masterDataOccupationGet({ employeeID: employeeId });
        return NextResponse.json(result);
    }
    catch (err: any) {
        return NextResponse.json({ message: `[ERROR] /api/customer-profile/master-data/[${employeeId}]/occupation`, err }, { status: 500 });
    }
}

interface ParamSegment {
    // employeeId?: string;
}