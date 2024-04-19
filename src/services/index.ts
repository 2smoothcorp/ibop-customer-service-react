import { Constants } from '@/constants/constants';
import { PortalService } from './portal-service/portal-service';
import { JWTInfoData, VaultService } from './vault-service/vault-service';

import { ApiCustomerService } from './rest-api/api.customer-service';
import { AuthApi as AuthCustomerServiceApi } from './rest-api/customer-service';

export default class Services {
    private vaultService?: VaultService<JWTInfoData>;
    private portalService?: PortalService;
    private vaultCustomerService?: VaultService<JWTInfoData>;

    /** Customer Service */
    private authApi?: AuthCustomerServiceApi;
    private apiService?: ApiCustomerService;

    private processUrlCorrection(urlString: string) {
        const refinedUrl = urlString.endsWith('/') ? urlString.slice(0, -1) : urlString;
        return refinedUrl;
    }

    private async getVaultService(){
        if(!this.vaultService) { this.vaultService = new VaultService(); }
        return this.vaultService
    }

    public async getPortalApi(){
        if(!this.portalService) { this.portalService = new PortalService(`${Constants.PortalUrl}`) }
        return this.portalService;
    }

    private async getAuthCustomerService(basePath: string) {
        basePath = this.processUrlCorrection(basePath);
        const _serviceVault = await this.getVaultService();
        const token = await _serviceVault.getJWTTokenByService('authen-jwt');
        const config = {
            isJsonMime: () => false,
            accessToken: token,
            basePath
        };

        if(!this.authApi) { this.authApi = new AuthCustomerServiceApi(config); }
        return this.authApi;
    }

    private async getCustomerServiceVault(){
        if(!this.vaultCustomerService) {
            const _vaultInfo = new VaultService<JWTInfoData>({ serviceUrl: 'customer-service-jwt' });
            await _vaultInfo.getVaultInfoByService();
            this.vaultCustomerService = _vaultInfo;
        }
        
        return this.vaultCustomerService;
    }

    private async getCustomerServiceConfig() {
        const authService = await this.getAuthCustomerService('https://ibop-customer-service-uat.asiaplus.co.th');
        const tokenInfo = await authService.authGenerateJwtTokenPost();
        const jwtToken = tokenInfo.data.jwtToken;
        const vaultCustomerService = await this.getCustomerServiceVault()
        const jwtInfoData: JWTInfoData = { BaseUrl: '', ...(vaultCustomerService?._vaultInfo?.data.data || {}) };

        return ({
            isJsonMime: () => false,
            apiKey: `Bearer ${ jwtToken }`,
            accessToken: `Bearer ${ jwtToken }`,
            basePath: jwtInfoData.BaseUrl || ''
        });
    }

    public async getCustomerServiceApi(): Promise<ApiCustomerService> {
        const config = await this.getCustomerServiceConfig();
        if(!this.apiService) { this.apiService = new ApiCustomerService(config); }
        return this.apiService;
    }
}

export const services = new Services();