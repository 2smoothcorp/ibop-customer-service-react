/**
 *  API Domain - Customer Service
 */

import {
    AuthApi,
    CustomerProfileV2Api
} from './customer-service';

class ApiCustomerService {
    private apiAuth?: AuthApi;
    private apiCustomerProfileV2?: CustomerProfileV2Api;

    constructor() {}

    public getAuthApi(config: InstanceConfig) {
        if(!this.apiAuth) { this.apiAuth = new AuthApi(config); }
        return this.apiAuth;
    }

    public getCustomerProfileV2Api(config: InstanceConfig) {
        if(!this.apiCustomerProfileV2) { this.apiCustomerProfileV2 = new CustomerProfileV2Api(config); }
        return this.apiCustomerProfileV2;
    }
}

interface InstanceConfig {
    isJsonMime: () => boolean,
    apiKey?: string;
    accessToken: string;
    basePath: string;
}

export default ApiCustomerService;