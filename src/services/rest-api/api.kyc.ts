/**
 *  API Domain - Customer Service
 */

import {
  ConsentApi
} from './kyc';

export class ApiKyc {
  private apiConfig: InstanceConfig;
  private apiConsent?: ConsentApi;

  constructor(config: InstanceConfig) { this.apiConfig = config; }

  public getConsentApi() {
    if(!this.apiConsent) { this.apiConsent = new ConsentApi(this.apiConfig); }
    return this.apiConsent;
  }
}

interface InstanceConfig {
  isJsonMime: () => boolean,
  apiKey?: string;
  accessToken: string;
  basePath: string;
}