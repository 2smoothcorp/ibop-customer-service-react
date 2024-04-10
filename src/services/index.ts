import { Constants } from '@/constants/constants';
import { PortalService } from './portal-service/portal-service';
import { AuthApi, CustomerProfileV2Api } from './rest-api/customer-service';
import { BaseJWTInfoData, JWTInfoData, VaultService } from './vault-service/vault-service';

export default class Services {

    private vaultService?: VaultService<JWTInfoData>
    private customerServiceVault?: VaultService<JWTInfoData>
    private customerServiceAuthService?: AuthApi
    private customerProfileV2Service?: CustomerProfileV2Api
    private portalService?: PortalService

    async getVaultService(){
        if( this.vaultService ){
            return this.vaultService
        }

        this.vaultService = new VaultService(Constants.VaultUrl, Constants.VaultUsername, Constants.VaultPassword)
        return this.vaultService
    }

    async getPortalService(){
        if( this.portalService ){
            return this.portalService
        }
        this.portalService = new PortalService(`${Constants.PortalUrl}`)
        return this.portalService
    }

    async getCustomerServiceVaule(){
        if( this.customerServiceVault ){
            return this.customerServiceVault;
        }

        const customerServiceVault = new VaultService<JWTInfoData>(Constants.VaultUrl, Constants.VaultUsername, Constants.VaultPassword, 'customer-service-jwt')
        await customerServiceVault.getVaultInfoByService();
        this.customerServiceVault = customerServiceVault;
    }

    async AuthApi(){
        if( this.customerServiceAuthService ){
            return this.customerServiceAuthService
        }

        const token = await (await this.getVaultService()).getJWTTokenByService('authen-jwt');

        const customerServiceAuthService = new AuthApi({
            isJsonMime: () => false,
            accessToken: token,
            basePath: 'https://ibop-customer-service-uat.asiaplus.co.th'
        })
        this.customerServiceAuthService = customerServiceAuthService
        return customerServiceAuthService
    }

    async getCustomerServiceToken(): Promise<any>{
        const authToken = await (await this.AuthApi()).authGenerateJwtTokenPost() 
        return authToken
    }

    async getCustomerProfileV2Service(){
        if( this.customerProfileV2Service ){
            return this.customerProfileV2Service;
        }

        const customerServiceVault = await this.getCustomerServiceVaule()
        const jwtInfoData: JWTInfoData = (customerServiceVault?._vaultInfo?.data.data as JWTInfoData)

        const authToken = await this.getCustomerServiceToken()
        this.customerProfileV2Service = new CustomerProfileV2Api({
            isJsonMime: () => false,
            apiKey: `Bearer ${authToken.data.jwtToken}`,
            accessToken: `Bearer ${authToken.data.jwtToken}`,
            basePath: jwtInfoData.BaseUrl || ''
        });

        this.customerProfileV2Service.customerProfileCustomerInfoListGet
        
        return this.customerProfileV2Service;
    }

}

export const services = new Services();