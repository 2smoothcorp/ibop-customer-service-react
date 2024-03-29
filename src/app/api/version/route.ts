import { NextRequest, NextResponse } from "next/server";
import getConfig from 'next/config';
import { Constants } from "@/constants/constants";

const { publicRuntimeConfig } = getConfig();

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  return NextResponse.json({
    applicationName: Constants.AppName, 
    version: publicRuntimeConfig.version
  })
}
