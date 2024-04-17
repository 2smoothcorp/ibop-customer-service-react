/**
 *  API Route - Consent Answer
 */

import { NextRequest, NextResponse } from "next/server";
import { services } from "@/services";

export async function GET(req: NextRequest) {
  const referenceId = req.nextUrl.searchParams.get('referenceId') || '';
  const formId = '28BFB1E6-C5ED-4D33-BB7D-99008A92258A';
  const apiKyc = await services.getKycApi();
  const res = await apiKyc.getConsentApi().consentReferenceIdGetAnsweredGet({ referenceId, formId });
  return NextResponse.json(res.data);
}