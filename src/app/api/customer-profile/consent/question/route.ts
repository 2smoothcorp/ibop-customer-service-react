/**
 *  API Route - Consent Question
 */

import { NextRequest, NextResponse } from 'next/server';
import { services } from '@/services';

export async function GET(_: NextRequest) {
  try {
    const formId = '28BFB1E6-C5ED-4D33-BB7D-99008A92258A';
    const apiService = await services.getCustomerServiceApi();
    const result = await apiService.getConsentApi().consentGetQuestionFormIdGet({ formId });
    return NextResponse.json(result);
  }
  catch(err: any) {
    return NextResponse.json({ message: '[ERROR] /api/customer-profile/consent/question', err }, { status: 500 });
  }
}