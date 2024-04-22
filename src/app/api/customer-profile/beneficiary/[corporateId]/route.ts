/**
 *  API Route - Beneficiary Answer
 */

import { NextRequest, NextResponse } from 'next/server';
import { services } from '@/services';

export async function GET(_: NextRequest, { corporateId }: ParamSegment) {
  if(!corporateId) {
    return NextResponse.json({
      message: '[ERROR] /api/customer-profile/beneficiary',
      reason: 'Parameters are missing'
    }, { status: 400 });
  }

  try {
    // const apiService = await services.getCustomerServiceApi();
    // const result = await apiService.getCustomerProfileV2Api().customerProfileCustomerInformationBeneficiaryInfoGet({  });
    return NextResponse.json({});
  }
  catch(err: any) {
    return NextResponse.json({ message: '[ERROR] /api/customer-profile/beneficiary', err }, { status: 500 });
  }
}

interface ParamSegment {
  corporateId?: string;
}