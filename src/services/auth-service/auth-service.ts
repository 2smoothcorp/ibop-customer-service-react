import { Constants } from "@/constants/constants";
import { PortalService } from "../portal-service/portal-service";
import { VaultService } from "../vault-service/vault-service";

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
}