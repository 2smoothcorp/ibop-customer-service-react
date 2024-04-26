/**
 *  API Route - Beneficiary Answer
 */

import { services } from '@/services';
import { FinancialInfoResponseDataResponse } from '@/services/rest-api/customer-service';
import { ApiResponse } from '@/type/api';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(_: NextRequest, { params }: { params: { corporateId?: string } }): Promise<NextResponse<ApiResponse<FinancialInfoResponseDataResponse>>> {

  // console.log('corporateId', params.corporateId)

  if (!params.corporateId) {
    return NextResponse.json({
      message: '[ERROR] /api/customer-profile/financial-info',
      err: 'Parameters are missing'
    }, { status: 400 });
  }

  try {
    const apiService = await services.getCustomerServiceApi();
    const result: FinancialInfoResponseDataResponse = await apiService.getCustomerProfileV2Api().customerProfileCustomerInformationFinancialInfoGet({
      corporateId: params.corporateId,

    })
    return NextResponse.json({ success: true, data: result });
  }
  catch (err: any) {
    return NextResponse.json({ success: false, message: '[ERROR] /api/customer-profile/financial-info', err }, { status: 500 });
  }
}
