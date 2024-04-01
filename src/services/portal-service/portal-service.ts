import { Constants } from "@/constants/constants";
import { VaultService } from "../vault-service/vault-service";
import { menuGQL } from "./menu-gql";

export class PortalService {
    _pathUrl: string;

    constructor(pathUrl: string) {
        this._pathUrl = pathUrl;
    };

    async getPortalMenu() {
        const portalUrl = `${this._pathUrl}/graphql/`;
        const appCode = "CustomerService";
        const response = await fetch(portalUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: menuGQL.query, variables: menuGQL.variable }),
        });

        const jsonData = await response.json();
        if(!jsonData) { return []; }

        const responseMenuList = jsonData.data.menus.items;
        return responseMenuList;
    }

    async verifyToken(token: string): Promise<VerifyTokenResponse>{
        const vaultService = new VaultService(Constants.VaultUrl, Constants.VaultUsername, Constants.VaultPassword);
        const _token = await vaultService.getAuthenJWTToken();

        const pathUrl = `${VaultService.vaultInfo?.data.data.BaseUrlVerifyToken}`;

        const formData = new URLSearchParams();
        formData.append('accessToken', token)

        const response = await fetch(pathUrl, {
            method: 'POST',
            body: formData,
            cache: 'no-cache',
        });

        const responseJson = await response.json();
        return responseJson;
    }
}

export interface VerifyTokenResponse{
    status: 'error' | 'success'
    data: {
        employeeId: string
    }
    message?: string
}