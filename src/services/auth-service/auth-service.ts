import { Constants } from "@/constants/constants";
import { PortalService } from "../portal-service/portal-service";
import { VaultService } from "../vault-service/vault-service";
import { cookies } from "next/headers";

export class AuthService{

    _pathUrl: string;

    constructor(pathUrl: string) {
        this._pathUrl = pathUrl;
    };

    async searchUserDirectory(token: string){

        const vaultService = new VaultService(Constants.VaultUrl, Constants.VaultUsername, Constants.VaultPassword);
        const _token = await vaultService.getAuthenJWTToken();
        
        const portalService = new PortalService(Constants.PortalUrl);
        const verifyToken = portalService.verifyToken(token);

        const pathUrl = `${VaultService.vaultInfo?.data.data.baseUrlAuthen}/api/SearchDirectory/SearchDirectory`;

        const formData = new FormData();
        formData.append('employeeID', '')

        const response = await fetch(pathUrl, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: formData,
            cache: 'no-cache'
        });
        console.log(`response`, await response.json())
    }

    async getPermission(): Promise<PermissionResponse>{
        const vaultService = new VaultService(Constants.VaultUrl, Constants.VaultUsername, Constants.VaultPassword);
        const token = await vaultService.getAuthenJWTToken();

        const pathUrl = `${VaultService.vaultInfo?.data.data.baseUrlAuthen}/api/UserPermission`

        const employeeID = cookies().get('user')?.value || ''
        console.log(`employeeID`, employeeID )
        if( !employeeID ) return {
            data: [],
            message: '',
            status: 'error'
        } as PermissionResponse;

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
        
        return await permissionResp.json();
    }
}

export interface PermissionRequest{
    appCode: string
    menuCode: string
    menuAction: string
    userId: string
}

export interface PermissionResponse{
    data: Permission[]
    status: string
    message: string
}

export interface Permission{
    menuCode: string
    menuName: string
    menuAction: string
}