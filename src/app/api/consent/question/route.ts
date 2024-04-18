/**
 *  API Route - Consent Question
 */

import { services } from "@/services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest) {
  const formId = '28BFB1E6-C5ED-4D33-BB7D-99008A92258A';
  const apiKyc = await services.getKycApi();
  const res = await apiKyc.getConsentApi().consentFormIdGetQuestionGet({ formId });
  return NextResponse.json(res.data);
}