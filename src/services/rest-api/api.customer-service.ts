/**
 *  API Domain - Customer Service
 */

import {
  CustomerProfileV2Api
} from './customer-service';

export class ApiCustomerService {
  private apiConfig: InstanceConfig;
  private apiCustomerProfileV2?: CustomerProfileV2Api;

  constructor(config: InstanceConfig) { this.apiConfig = config; }

  public getCustomerProfileV2Api() {
    if(!this.apiCustomerProfileV2) { this.apiCustomerProfileV2 = new CustomerProfileV2Api(this.apiConfig); }
    return this.apiCustomerProfileV2;
  }
}

interface InstanceConfig {
  isJsonMime: () => boolean,
  apiKey?: string;
  accessToken?: string;
  basePath: string;
}