import { Constants } from "@/constants/constants";
import { lookup } from 'dns/promises';
import os from 'os';
import { ironSessionService } from "../iron-session/iron-session";
import { PortalService } from "../portal-service/portal-service";
import { VaultService } from "../vault-service/vault-service";

export class AuthService{

    _pathUrl: string;

    constructor(pathUrl: string) {
        this._pathUrl = pathUrl;
    };

    async searchUserDirectory(token: string, employeeID: string): Promise<SearchUserDirectoryResponse>{
        try{
            const vaultService = new VaultService();
            const _token = await vaultService.getJWTTokenByService('authen-jwt');
            
            const portalService = new PortalService(Constants.PortalUrl);
            const verifyToken = portalService.verifyToken(token);
    
            const pathUrl = `${VaultService.vaultInfo?.data.data.baseUrlAuthen}/api/SearchDirectory/SearchDirectory`;
            const formData = new URLSearchParams();
            formData.append('employeeID', employeeID)
    
            const response = await fetch(pathUrl, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${_token}`
                },
                body: formData,
                cache: 'no-cache'
            });
            const responseJson = await response.json();
            return responseJson;
        }catch(e)
        {
            console.error(e)
        }

        return {} as SearchUserDirectoryResponse
    }

    async getPermission(): Promise<PermissionResponse>{
        const vaultService = new VaultService();

        const token = await vaultService.getJWTTokenByService('authen-jwt');

        const pathUrl = `${VaultService.vaultInfo?.data.data.baseUrlAuthen}/api/UserPermission`

        const employeeID = await ironSessionService.getEmployeeId() 

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
        
        const permissionResp = await fetch(pathUrl + `?${queryParams}`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`
            },
            cache: 'no-cache'
        })

        const response = await permissionResp.json();
        return response;
    }

    async login(username: string, password: string): Promise<LoginResponse> {
        try{
            console.log(`AuthService login`, username, password)
            const vaultService = new VaultService();
            const token = await vaultService.getJWTTokenByService('authen-jwt');

            const pathUrl = `${VaultService.vaultInfo?.data.data.baseUrlAuthen}/api/Login`;

            username = username.replace("@asiaplus.co.th", "") + "@asiaplus.co.th";

            const ipAddresses = await lookup(os.hostname(), { all: true });

            const formData = new URLSearchParams();
            formData.append('username', username);
            formData.append('password', password);
            formData.append('programcode', Constants.AppName);
            formData.append('version', Constants.AppVersion);
            formData.append('hostname', os.hostname());
            formData.append('ip', '1.1.1.1');

            const loginResp = await fetch(pathUrl, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData,
                cache: 'no-cache'
            })

            const responseJson = await loginResp.json()
            return responseJson;

        }catch(e){
            console.error(e)
        }

        return {} as LoginResponse
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

export interface LoginResponse{
    status: string
    message: string
    sAMAccountName: string
    employeeID: string
    displayName: string
    departmentNumber: string
    department: string
    email: string
    ipPhone: string
}

export interface SearchUserDirectoryResponse extends LoginResponse{

}