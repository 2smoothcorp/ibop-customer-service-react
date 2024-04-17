import { Constants } from '@/constants/constants';

export class VaultService<T>{
    private _vaultHost: string = Constants.VaultUrl;
    private _vaultUser: string = Constants.VaultUsername;
    private _vaultPass: string = Constants.VaultPassword;
    private _serviceUrl?: string;

    private vaultToken?: string;
    public _vaultInfo?: GetVaultJWTInfoResponse<any>;

    static vaultInfo: any;

    constructor(params?: ConstructorParams) {
        if(params) {
            const { vaultHost, vaultPass, vaultUser, serviceUrl } = params;
            this._vaultHost = vaultHost || '';
            this._vaultUser = vaultUser || '';
            this._vaultPass = vaultPass || '';
            this._serviceUrl = serviceUrl;
        }
    };

    async getVaultToken(): Promise<string> {
        try{
            if( this.vaultToken ) return this.vaultToken;

            const urlPath = `v1/auth/userpass/login/${this._vaultUser}`;
            const apiUrl = this._vaultHost + urlPath;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password: this._vaultPass
                }), 
            })
            const jsonResp: GetVaultTokenResponse = await response.json();
            const _vaultToken = jsonResp.auth;
            this.vaultToken = _vaultToken.client_token;
            return _vaultToken.client_token;
        }
        catch(e){
            console.error(e)
        }
        return '';
    }

    async getVaultInfoByService<T>(service_url: string = this._serviceUrl || ''): Promise<GetVaultJWTInfoResponse<T>>{
        try{
            const urlPath = `v1/secretv2/data/${service_url}`;
            const apiUrl = this._vaultHost + urlPath;
            const token = await this.getVaultToken();

            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "X-Vault-Token": token
                },
            })
            const jsonResp: GetVaultJWTInfoResponse<T> = await response.json();
            VaultService.vaultInfo = jsonResp;
            this._vaultInfo = jsonResp;
           
            return jsonResp;
        }
        catch(e){

        }

        return null as any;
    }

    async getJWTTokenByService(service_url: string = this._serviceUrl || ''): Promise<string | undefined>{
        try{
            const urlPath = `v1/secretv2/data/${service_url}`;
            const apiUrl = this._vaultHost + urlPath;

            const jwtInfo: GetVaultJWTInfoResponse<T & BaseJWTInfoData | JWTInfoData> | null = await this.getVaultInfoByService(service_url);
            if( !jwtInfo ) throw ''

            //const token = await this.getVaultToken();

            const payload = {
                ClientCode: jwtInfo.data.data.ClientCode,
                JwtRequestUserName: jwtInfo.data.data.JWTRequestUserName,
                JwtRequestPassword: jwtInfo.data.data.JWTRequestPassword,
            }

            const response = await fetch(jwtInfo.data.data.BaseUrlGetToken, 
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    //"X-Vault-Token": token
                },
                body: JSON.stringify(payload),
                next: {
                    // hour 
                    //revalidate: 3600
                },
                cache: 'no-cache'
            })

            const jsonResp: JWTTokenResponse = await response.json();
            return jsonResp.jwtToken;
        }
        catch(e){
            console.error(e)
        }
        return undefined
    }

}

export interface ConstructorParams {
    vaultHost?: string;
    vaultUser?: string;
    vaultPass?: string;
    serviceUrl?: string;
}

export interface GetVaultTokenResponse{
    request_id: string
    auth: VaultToken
}

export interface VaultToken{
    client_token: string
    accessor: string
    metadata: {
        username: string
    }
    token_type: string
    policies: Array<string>
}

export interface GetVaultJWTInfoResponse<T>{
    request_id: string
    data: {
        data: JWTInfoData | T
    }
}

export interface BaseJWTInfoData{ 
    ClientCode : string, 
    JWTRequestUserName : string, 
    JWTRequestPassword: string, 
    BaseUrlGetToken: string 
}

export interface JWTInfoData{
    AuthenADPass: string;
    AuthenADUser: string;
    AuthenFundPass: string;
    AuthenFundUser: string;
    BaseUrlGetToken: string;
    BaseUrlPortal: string;
    BaseUrlVerifyToken: string;
    Baseurl: string;
    BaseUrl: string;
    ClientCode: string;
    JWTRequestPassword: string;
    JWTRequestUserName: string;
    JwtAudience: string[];
    JwtExpireDays: number;
    JwtExpireMinutes: number;
    JwtIssuer: string[];
    JwtKey: string[];
    baseUrlAuthen: string;
}

export interface JWTTokenResponse{
    jwtTokenID: string;
    jwtToken: string;
    currentDateTime: string;
    expiredDateTime: string;
}