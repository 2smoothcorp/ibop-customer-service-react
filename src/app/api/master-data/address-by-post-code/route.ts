import { services } from '@/services';
import { ironSessionService } from '@/services/iron-session/iron-session';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(params: NextRequest, { }: ParamSegment) {
    const employeeId = await ironSessionService.getEmployeeId()
    try {
        const apiService = await services.getCustomerServiceApi();
        const result = await apiService.getMasterDataApi().masterDataAddressByPostCodeGet({
            postCodeMain: params.nextUrl.searchParams.get('postCodeMain') || undefined,
        });
        // console.log(result)
        return NextResponse.json(result);
    }
    catch (err: any) {
        return NextResponse.json({ message: `[ERROR] /api/master-data/ao-role [${employeeId}]`, err }, { status: 500 });
    }
}

interface ParamSegment {
    params: {
        nextUrl: {
            searchParams: {
                get: (key: string) => string | null;
            }
        }
    }
}