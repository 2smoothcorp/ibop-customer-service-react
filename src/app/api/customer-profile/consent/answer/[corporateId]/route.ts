/**
 *  API Route - Consent Answer
 */

import { services } from '@/services';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest, { params }: { params: ParamSegment }) {
  const { corporateId } = params;
  if (!corporateId) {
    return NextResponse.json({
      message: '[ERROR] /api/customer-profile/consent/answer',
      reason: 'Parameters are missing'
    }, { status: 400 });
  }

  try {
    const formId = '28BFB1E6-C5ED-4D33-BB7D-99008A92258A';
    const apiService = await services.getCustomerServiceApi();
    const result = await apiService.getConsentApi().consentGetAnsweredCorporateIdGet({ corporateId: corporateId, formId });
    return NextResponse.json(result);
  }
  catch (err: any) {
    return NextResponse.json({ message: '[ERROR] /api/customer-profile/consent/answer', err }, { status: 500 });
  }
}

interface ParamSegment {
  corporateId?: string;
}