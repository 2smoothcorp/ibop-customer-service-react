import { Constants } from "@/constants/constants";
import { VaultService } from "@/services/vault-service/vault-service";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
    const vaultService = new VaultService(Constants.VaultUrl, Constants.VaultUsername, Constants.VaultPassword);
    const token = await vaultService.getAuthenJWTToken();

    const pathUrl = `${VaultService.vaultInfo?.data.data.baseUrlAuthen}/api/UserPermission`

    const employeeID = cookies().get('user')?.value || ''
    console.log(`employeeID`, employeeID )
    //console.log(`cookies().get('user')?.value`, _req.cookies.get('user')?.value )
    //console.log(`cookies().getAll()`, _req.cookies.getAll() )

    const payload: PermissionRequest = {
        appCode: Constants.AppCode,
        menuCode: "",
        menuAction: "",
        userId: employeeID
    }

    const queryParams = Object.keys(payload).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(payload[key as keyof PermissionRequest ] );
    }).join('&');

    console.log(pathUrl + `?${queryParams}`)

    const permissionResp = await fetch(pathUrl + `?${queryParams}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        },
        cache: 'no-cache'
    })

    const permissionJson = await permissionResp.json();
    const filterViewPermission = filterViewPermision(permissionJson);
    return NextResponse.json( filterViewPermission );
}

const filterViewPermision = (permission: PermissionResponse): Permission[] => {
    const action = 'view'
    return permission.data.filter( (permission : Permission) => (permission.menuAction || '').includes(action)) || []
}

interface PermissionRequest{
    appCode: string
    menuCode: string
    menuAction: string
    userId: string
}

interface PermissionResponse{
    data: Permission[]
    status: string
    message: string
}

export interface Permission{
    menuCode: string
    menuName: string
    menuAction: string
}