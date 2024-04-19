/**
 *  API Route - Consent Answer
 */

import { NextRequest, NextResponse } from 'next/server';
import { services } from '@/services';

export async function GET(_: NextRequest, { corporateId }: ParamSegment) {
  if(!corporateId) {
    return NextResponse.json({
      message: '[ERROR] /api/consent/answer',
      reason: 'Parameters are missing'
    }, { status: 400 });
  }

  try {
    const formId = '28BFB1E6-C5ED-4D33-BB7D-99008A92258A';
    const apiService = await services.getCustomerServiceApi();
    const res = await apiService.getConsentApi().consentGetAnsweredCorparateIdGet({ corparateId: corporateId, formId });
    return NextResponse.json(res.data);
  }
  catch(err: any) {
    return NextResponse.json({ message: '[ERROR] /api/consent/answer', err }, { status: 500 });
  }
}

interface ParamSegment {
  corporateId?: string;
}