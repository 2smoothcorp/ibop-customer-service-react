export class VaultService{
    _vaultHost: string;
    _vaultUser: string;
    _vaultPass: string;

    static vaultInfo: GetVaultJWTInfoResponse | undefined;

    constructor(vaultHost: string, vaultUser: string, vaultPass: string) {
        this._vaultHost = vaultHost;
        this._vaultUser = vaultUser;
        this._vaultPass = vaultPass;
    };

    async getVaultToken(): Promise<string> {
        try{
            const urlPart = `v1/auth/userpass/login/${this._vaultUser}`;
            const apiUrl = this._vaultHost + urlPart;
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
            return _vaultToken.client_token;
        }
        catch(e){
            console.error(e)
        }
        return '';
    }

    async getVaultAuthenJWTInfo(): Promise<GetVaultJWTInfoResponse | null> {
        try{
            const urlPart = `v1/secretv2/data/authen-jwt`;
            const apiUrl = this._vaultHost + urlPart;
            console.log(`apiUrl`, apiUrl);

            const token = await this.getVaultToken();

            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "X-Vault-Token": token
                },
            })
            const jsonResp: GetVaultJWTInfoResponse = await response.json();
            VaultService.vaultInfo = jsonResp;
            return jsonResp;
        }
        catch(e){
            console.error(`getVaultAuthenJWTInfo`, e)
        }
        return null;
    }

    async getAuthenJWTToken(){
        try{
            const urlPart = `v1/secretv2/data/authen-jwt`;
            const apiUrl = this._vaultHost + urlPart;
            console.log(`apiUrl`, apiUrl);

            const jwtInfo: GetVaultJWTInfoResponse | null = await this.getVaultAuthenJWTInfo();
            if( !jwtInfo ) throw ''

            const payload = {
                ClientCode: jwtInfo.data.data.ClientCode,
                JwtRequestUserName: jwtInfo.data.data.JWTRequestUserName,
                JwtRequestPassword: jwtInfo.data.data.JWTRequestPassword,
            }

            const response = await fetch(jwtInfo.data.data.Baseurl, 
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload),
                next: {
                    // hour 
                    revalidate: 3600
                }
            })

            const jsonResp: JWTTokenResponse = await response.json();
            console.log(`jwt token`, jsonResp.jwtToken)
            return jsonResp.jwtToken;
        }
        catch(e){
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

export interface GetVaultJWTInfoResponse{
    request_id: string
    data: {
        data: JWTInfoData
    }
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