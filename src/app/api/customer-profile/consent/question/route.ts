/**
 *  API Route - Consent Question
 */

import { NextRequest, NextResponse } from 'next/server';
import { services } from '@/services';

export async function GET(_: NextRequest) {
  try {
    const formId = '28BFB1E6-C5ED-4D33-BB7D-99008A92258A';
    const apiService = await services.getCustomerServiceApi();
    const res = await apiService.getConsentApi().consentGetQuestionFormIdGet({ formId });
    return NextResponse.json(res.data);
  }
  catch(err: any) {
    return NextResponse.json({ message: '[ERROR] /api/consent/question', err }, { status: 500 });
  }
}