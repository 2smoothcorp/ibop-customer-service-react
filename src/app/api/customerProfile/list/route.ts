import { services } from "@/services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) { 
    const corporateId = '12345'; // req.nextUrl.searchParams.get('corporateId') || '';
    const apiCustomerService = await services.getCustomerServiceApi();
    const res = await apiCustomerService.getCustomerProfileV2Api().customerProfileCustomerInfoMenuGet({ corporateId })
    return NextResponse.json(res.data.data);
}