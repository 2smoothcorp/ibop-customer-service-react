import { services } from "@/services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {    
    const customerService = await services.getCustomerProfileV2Service();
    const response = await customerService.customerProfileCustomerInfoMenuGet('12345')
    return NextResponse.json(response.data.data);
}
