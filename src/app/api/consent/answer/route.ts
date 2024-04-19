/**
 *  API Route - Consent Answer
 */

import { NextRequest, NextResponse } from "next/server";
import { services } from "@/services";

export async function GET(req: NextRequest) {
  const corporateId = req.nextUrl.searchParams.get('corporateId') || '';
  const formId = '28BFB1E6-C5ED-4D33-BB7D-99008A92258A';
  const apiService = await services.getCustomerServiceApi();
  const res = await apiService.getConsentApi().consentGetAnsweredCorparateIdGet({ corparateId: corporateId, formId });
  return NextResponse.json(res.data);
}