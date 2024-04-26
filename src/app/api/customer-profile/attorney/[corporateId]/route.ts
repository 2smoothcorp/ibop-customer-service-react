/**
 *  API Route - Beneficiary Answer
 */

import { services } from '@/services';
import { AddressInfoResponseDataResponse, AttorneyInfoResponseDataResponse } from '@/services/rest-api/customer-service';
import { ApiResponse } from '@/type/api';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(_: NextRequest, { params }: { params: { corporateId?: string } }): Promise<NextResponse<ApiResponse<AttorneyInfoResponseDataResponse>>> {

  // console.log( 'corporateId', params.corporateId )

  if (!params.corporateId) {
    return NextResponse.json({
      message: '[ERROR] /api/customer-profile/attorney',
      err: 'Parameters are missing'
    }, { status: 400 });
  }

  try {
    const apiService = await services.getCustomerServiceApi();
    const result: AddressInfoResponseDataResponse = await apiService.getCustomerProfileV2Api().customerProfileCustomerInformationAttorneyInfoGet({
      corporateId: params.corporateId,

    })
    return NextResponse.json({ success: true, data: result });
  }
  catch (err: any) {
    return NextResponse.json({ success: false, message: '[ERROR] /api/customer-profile/attorney', err }, { status: 500 });
  }
}

interface ParamSegment {
  corporateId?: string;
}