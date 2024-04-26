/**
 *  API Domain - Customer Service
 */

import { Configuration } from "./customer-service";
import {
  ConsentApi,
  CustomerProfileV2Api,
  FATCAApi,
  MasterDataApi,
  KycApi
} from "./customer-service/apis";


export class ApiCustomerService {
  private apiConfig: Configuration;
  private apiCustomerProfileV2?: CustomerProfileV2Api;
  private apiConsent?: ConsentApi;
  private apiMasterData?: MasterDataApi;
  private apiFATCA?: FATCAApi;
  private apiKyc?: KycApi;

  constructor(config: Configuration) { this.apiConfig = config; }

  public getCustomerProfileV2Api() {
    if (!this.apiCustomerProfileV2) { this.apiCustomerProfileV2 = new CustomerProfileV2Api(this.apiConfig); }
    return this.apiCustomerProfileV2;
  }

  public getConsentApi() {
    if (!this.apiConsent) { this.apiConsent = new ConsentApi(this.apiConfig); }
    return this.apiConsent;
  }

  public getMasterDataApi() {
    if (!this.apiMasterData) { this.apiMasterData = new MasterDataApi(this.apiConfig); }
    return this.apiMasterData;
  }

  public getFATCAApi() {
    if (!this.apiFATCA) { this.apiFATCA = new FATCAApi(this.apiConfig); }
    return this.apiFATCA;
  }

  public getKycApi() {
    if (!this.apiKyc) { this.apiKyc = new KycApi(this.apiConfig); }
    return this.apiKyc;
  }
}

interface InstanceConfig {
  isJsonMime: () => boolean,
  apiKey?: string;
  accessToken?: string;
  basePath: string;
}