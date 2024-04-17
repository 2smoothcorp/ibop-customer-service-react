import { Constants } from '@/constants/constants';
import { PortalService } from './portal-service/portal-service';
import { JWTInfoData, VaultService } from './vault-service/vault-service';

import { ApiCustomerService } from './rest-api/api.customer-service';
import { ApiKyc } from './rest-api/api.kyc';
import { AuthApi } from './rest-api/customer-service';

export default class Services {
    private vaultService?: VaultService<JWTInfoData>;
    private customerServiceVault?: VaultService<JWTInfoData>;
    private portalService?: PortalService;

    /** Customer Service */
    private serviceAuthCustomerService?: AuthApi;
    private serviceCustomerService?: ApiCustomerService;

    /** KYC */
    private serviceKyc?: ApiKyc;

    private async getVaultService(){
        if( this.vaultService ){
            return this.vaultService
        }

        this.vaultService = new VaultService(Constants.VaultUrl, Constants.VaultUsername, Constants.VaultPassword)
        return this.vaultService
    }

    private async getCustomerServiceVault(){
        if( this.customerServiceVault ){
            return this.customerServiceVault;
        }

        const customerServiceVault = new VaultService<JWTInfoData>(Constants.VaultUrl, Constants.VaultUsername, Constants.VaultPassword, 'customer-service-jwt')
        await customerServiceVault.getVaultInfoByService();
        this.customerServiceVault = customerServiceVault;
        return this.customerServiceVault;
    }

    private async getCustomerServiceAuth() {
        const _serviceVault = await this.getVaultService();
        const token = await _serviceVault.getJWTTokenByService('authen-jwt');
        const config = {
            isJsonMime: () => false,
            accessToken: token,
            basePath: 'https://ibop-customer-service-uat.asiaplus.co.th'
        };

        if(!this.serviceAuthCustomerService) { this.serviceAuthCustomerService = new AuthApi(config); }
        return this.serviceAuthCustomerService;
    }

    private async getBaseConfig() {
        const svc = await this.getCustomerServiceAuth();
        const tokenInfo = await svc.authGenerateJwtTokenPost();
        const jwtToken = tokenInfo.data.jwtToken;
        const customerServiceVault = await this.getCustomerServiceVault()
        const jwtInfoData: JWTInfoData = customerServiceVault?._vaultInfo?.data.data;

        return ({
            isJsonMime: () => false,
            apiKey: `Bearer ${ jwtToken }`,
            accessToken: `Bearer ${ jwtToken }`,
            basePath: jwtInfoData.BaseUrl || ''
        });
    }

    public async getPortalApi(){
        if(!this.portalService) { this.portalService = new PortalService(`${Constants.PortalUrl}`) }
        return this.portalService;
    }

    public async getCustomerServiceApi(): Promise<ApiCustomerService> {
        const config = await this.getBaseConfig();
        if(!this.serviceCustomerService) { this.serviceCustomerService = new ApiCustomerService(config); }
        return this.serviceCustomerService;
    }

    public async getKycApi(): Promise<ApiKyc> {
        const config = await this.getBaseConfig();
        if(!this.serviceKyc) { this.serviceKyc = new ApiKyc(config); }
        return this.serviceKyc;
    }
}

export const services = new Services();