import { services } from '@/services';
import { ironSessionService } from '@/services/iron-session/iron-session';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest, { }: ParamSegment) {

    const employeeId = await ironSessionService.getEmployeeId()
    try {
        const apiService = await services.getCustomerServiceApi();
        const result = await apiService.getMasterDataApi().masterDataBranchesGet({ employeeID: employeeId });
        return NextResponse.json(result);
    }
    catch (err: any) {
        return NextResponse.json({ message: `[ERROR] /api/master-data/barnches [${employeeId}]`, err }, { status: 500 });
    }
}

interface ParamSegment {
    // employeeId?: string;
}