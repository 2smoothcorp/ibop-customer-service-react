import { Constants } from "@/constants/constants";
import { AuthService, Permission } from "@/services/auth-service/auth-service";
import { VaultService } from "@/services/vault-service/vault-service";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
    const authService = new AuthService("");

    const permissionJson = await authService.getPermission();
    const filterViewPermission = filterViewPermision(permissionJson.data);
    return NextResponse.json( filterViewPermission );
}

const filterViewPermision = (permission: Permission[]): Permission[] => {
    const action = 'view'
    return permission.filter( (permission : Permission) => (permission.menuAction || '').includes(action)) || []
}

