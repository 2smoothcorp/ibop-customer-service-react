export class VaultService<T>{
    private _vaultHost: string;
    private _vaultUser: string;
    private _vaultPass: string;

    private vaultToken?: string;
    public _vaultInfo?: T;

    static vaultInfo: any;

    constructor(vaultHost: string, vaultUser: string, vaultPass: string) {
        this._vaultHost = vaultHost;
        this._vaultUser = vaultUser;
        this._vaultPass = vaultPass;
    };

    async getVaultToken(): Promise<string> {
        try{
            if( this.vaultToken ) return this.vaultToken;

            const urlPath = `v1/auth/userpass/login/${this._vaultUser}`;
            const apiUrl = this._vaultHost + urlPath;
            console.log(`apiUrl`, apiUrl)

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

    async getVaultInfoByService<T>(service_url: string = ''): Promise<GetVaultJWTInfoResponse<T>>{
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
            return jsonResp;
        }
        catch(e){

        }

        return null as any;
    }

    async getJWTTokenByService(service_url: string = ''){
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

            console.log(`payload`, payload)

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

            console.log(`response`, response)

            const jsonResp: JWTTokenResponse = await response.json();
            console.log(`jsonResp`, jsonResp)
            return jsonResp.jwtToken;
        }
        catch(e){
            console.error(e)
        }
    }

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