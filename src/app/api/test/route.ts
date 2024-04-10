import { NextRequest, NextResponse } from "next/server";
import getConfig from 'next/config';
import { Constants } from "@/constants/constants";
import { VaultService } from "@/services/vault-service/vault-service";

const { publicRuntimeConfig } = getConfig();

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {

  const vaultService = new VaultService(Constants.VaultUrl, Constants.VaultUsername, Constants.VaultPassword);
  const token = await vaultService.getVaultToken();

  const service = 'customer-service-jwt'

  const customerServiceInfo = await vaultService.getVaultInfoByService(service);
  const customerJwtToken = await vaultService.getJWTTokenByService(service);

  return NextResponse.json({
    token, 
    customerServiceInfo,
    customerJwtToken: customerJwtToken,
  })
}
