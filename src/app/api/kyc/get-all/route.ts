/**
 *  API Route - KYC CDD List
 */

import { NextRequest, NextResponse } from 'next/server';
import { services } from '@/services';

export async function GET(_: NextRequest) {
  try {
    const apiService = await services.getCustomerServiceApi();
    const result = await apiService.getKycApi().kycGetAllGet();
    return NextResponse.json(result);
  }
  catch(err: any) {
    return NextResponse.json({ message: '[ERROR] /api/kyc/get-all', err }, { status: 500 });
  }
}

interface ParamSegment {
  corporateId?: string;
}