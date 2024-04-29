/**
 *  API Route - KYC CDD Risk
 */

import { NextRequest, NextResponse } from 'next/server';
import { services } from '@/services';

export async function GET(_: NextRequest, { params }: { params: ParamSegment }) {
  const { corporateId } = params;
  if(!corporateId) {
    return NextResponse.json({
      message: '[ERROR] /api/kyc/get-risk',
      reason: 'Parameters are missing'
    }, { status: 400 });
  }

  try {
    const apiService = await services.getCustomerServiceApi();
    const result = await apiService.getKycApi().kycGetRiskLevelScoreCorporateIdGet({ corporateId });
    return NextResponse.json(result);
  }
  catch(err: any) {
    return NextResponse.json({ message: '[ERROR] /api/kyc/get-risk', err }, { status: 500 });
  }
}

interface ParamSegment {
  corporateId?: string;
}