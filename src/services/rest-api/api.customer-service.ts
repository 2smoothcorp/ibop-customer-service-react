/**
 *  API Domain - Customer Service
 */

import {
  ConsentApi,
  CustomerProfileV2Api
} from './customer-service';

export class ApiCustomerService {
  private apiConfig: InstanceConfig;
  private apiCustomerProfileV2?: CustomerProfileV2Api;
  private apiConsent?: ConsentApi;

  constructor(config: InstanceConfig) { this.apiConfig = config; }

  public getCustomerProfileV2Api() {
    if(!this.apiCustomerProfileV2) { this.apiCustomerProfileV2 = new CustomerProfileV2Api(this.apiConfig); }
    return this.apiCustomerProfileV2;
  }

  public getConsentApi() {
    if(!this.apiConsent) { this.apiConsent = new ConsentApi(this.apiConfig); }
    return this.apiConsent;
  }
}

interface InstanceConfig {
  isJsonMime: () => boolean,
  apiKey?: string;
  accessToken?: string;
  basePath: string;
}