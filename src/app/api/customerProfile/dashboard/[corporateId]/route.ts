import { services } from "@/services";
import { MenuResponseListDataResponse } from "@/services/rest-api/customer-service";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { corporateId?: string } }): Promise<MenuResponseListDataResponse> {    
   try{
        if( !params?.corporateId ){
            return NextResponse.json({
                message: "missing corporateId"
            }, {
                status: 400,
            })
        }
        const customerService = await services.getCustomerProfileV2Service();
        const response = await customerService.customerProfileCustomerInfoMenuGet({
            corporateId: params?.corporateId
        })
        return NextResponse.json(response.data);
   }catch(e){
    return NextResponse.json({
        message: "Error"
      }, {
        status: 500,
      })
   }
}
