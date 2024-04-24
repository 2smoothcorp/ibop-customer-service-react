/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.286
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AddressListDataResponse,
  AttorneyDataResponse,
  KycBeneficiaryInfoOutputDataResponse,
  KycCustomerInputKycCustomerOutputPagination,
  KycPersonalInfoOutputDataResponse,
  KycResultResponseDataResponse,
  KycRiskLevelScoreOutputDataResponse,
  KycSpouseInfoOutputDataResponse,
} from '../models';
import {
    AddressListDataResponseFromJSON,
    AddressListDataResponseToJSON,
    AttorneyDataResponseFromJSON,
    AttorneyDataResponseToJSON,
    KycBeneficiaryInfoOutputDataResponseFromJSON,
    KycBeneficiaryInfoOutputDataResponseToJSON,
    KycCustomerInputKycCustomerOutputPaginationFromJSON,
    KycCustomerInputKycCustomerOutputPaginationToJSON,
    KycPersonalInfoOutputDataResponseFromJSON,
    KycPersonalInfoOutputDataResponseToJSON,
    KycResultResponseDataResponseFromJSON,
    KycResultResponseDataResponseToJSON,
    KycRiskLevelScoreOutputDataResponseFromJSON,
    KycRiskLevelScoreOutputDataResponseToJSON,
    KycSpouseInfoOutputDataResponseFromJSON,
    KycSpouseInfoOutputDataResponseToJSON,
} from '../models';

export interface KycAddressInfoCorporateIdGetRequest {
    corporateId: string;
    xPortalToken?: string;
}

export interface KycAttorneyInfoCorporateIdGetRequest {
    corporateId: string;
    xPortalToken?: string;
}

export interface KycBeneficiaryInfoCorporateIdGetRequest {
    corporateId: string;
    xPortalToken?: string;
}

export interface KycGetAllGetRequest {
    corporateId?: string;
    referenceId?: string;
    name?: string;
    startDate?: Date;
    endDate?: Date;
    pageIndex?: number;
    pageSize?: number;
    sortField?: string;
    sortDirection?: string;
    xPortalToken?: string;
}

export interface KycGetRiskLevelScoreCorporateIdGetRequest {
    corporateId: string;
    xPortalToken?: string;
}

export interface KycKycScoreCorporateIdGetRequest {
    corporateId: string;
    xPortalToken?: string;
}

export interface KycPersonalInfoCorporateIdGetRequest {
    corporateId: string;
    xPortalToken?: string;
}

export interface KycSpouseInfoCorporateIdGetRequest {
    corporateId: string;
    xPortalToken?: string;
}

/**
 * 
 */
export class KycApi extends runtime.BaseAPI {

    /**
     */
    async kycAddressInfoCorporateIdGetRaw(requestParameters: KycAddressInfoCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddressListDataResponse>> {
        if (requestParameters.corporateId === null || requestParameters.corporateId === undefined) {
            throw new runtime.RequiredError('corporateId','Required parameter requestParameters.corporateId was null or undefined when calling kycAddressInfoCorporateIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Kyc/AddressInfo/{corporateId}`.replace(`{${"corporateId"}}`, encodeURIComponent(String(requestParameters.corporateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddressListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async kycAddressInfoCorporateIdGet(requestParameters: KycAddressInfoCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddressListDataResponse> {
        const response = await this.kycAddressInfoCorporateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async kycAttorneyInfoCorporateIdGetRaw(requestParameters: KycAttorneyInfoCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttorneyDataResponse>> {
        if (requestParameters.corporateId === null || requestParameters.corporateId === undefined) {
            throw new runtime.RequiredError('corporateId','Required parameter requestParameters.corporateId was null or undefined when calling kycAttorneyInfoCorporateIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Kyc/AttorneyInfo/{corporateId}`.replace(`{${"corporateId"}}`, encodeURIComponent(String(requestParameters.corporateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttorneyDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async kycAttorneyInfoCorporateIdGet(requestParameters: KycAttorneyInfoCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttorneyDataResponse> {
        const response = await this.kycAttorneyInfoCorporateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async kycBeneficiaryInfoCorporateIdGetRaw(requestParameters: KycBeneficiaryInfoCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KycBeneficiaryInfoOutputDataResponse>> {
        if (requestParameters.corporateId === null || requestParameters.corporateId === undefined) {
            throw new runtime.RequiredError('corporateId','Required parameter requestParameters.corporateId was null or undefined when calling kycBeneficiaryInfoCorporateIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Kyc/BeneficiaryInfo/{corporateId}`.replace(`{${"corporateId"}}`, encodeURIComponent(String(requestParameters.corporateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KycBeneficiaryInfoOutputDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async kycBeneficiaryInfoCorporateIdGet(requestParameters: KycBeneficiaryInfoCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KycBeneficiaryInfoOutputDataResponse> {
        const response = await this.kycBeneficiaryInfoCorporateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async kycGetAllGetRaw(requestParameters: KycGetAllGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KycCustomerInputKycCustomerOutputPagination>> {
        const queryParameters: any = {};

        if (requestParameters.corporateId !== undefined) {
            queryParameters['CorporateId'] = requestParameters.corporateId;
        }

        if (requestParameters.referenceId !== undefined) {
            queryParameters['ReferenceId'] = requestParameters.referenceId;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['Name'] = requestParameters.name;
        }

        if (requestParameters.startDate !== undefined) {
            queryParameters['StartDate'] = (requestParameters.startDate as any).toISOString();
        }

        if (requestParameters.endDate !== undefined) {
            queryParameters['EndDate'] = (requestParameters.endDate as any).toISOString();
        }

        if (requestParameters.pageIndex !== undefined) {
            queryParameters['PageIndex'] = requestParameters.pageIndex;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['PageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.sortField !== undefined) {
            queryParameters['SortField'] = requestParameters.sortField;
        }

        if (requestParameters.sortDirection !== undefined) {
            queryParameters['SortDirection'] = requestParameters.sortDirection;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Kyc/GetAll`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KycCustomerInputKycCustomerOutputPaginationFromJSON(jsonValue));
    }

    /**
     */
    async kycGetAllGet(requestParameters: KycGetAllGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KycCustomerInputKycCustomerOutputPagination> {
        const response = await this.kycGetAllGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async kycGetRiskLevelScoreCorporateIdGetRaw(requestParameters: KycGetRiskLevelScoreCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KycRiskLevelScoreOutputDataResponse>> {
        if (requestParameters.corporateId === null || requestParameters.corporateId === undefined) {
            throw new runtime.RequiredError('corporateId','Required parameter requestParameters.corporateId was null or undefined when calling kycGetRiskLevelScoreCorporateIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Kyc/GetRiskLevelScore/{corporateId}`.replace(`{${"corporateId"}}`, encodeURIComponent(String(requestParameters.corporateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KycRiskLevelScoreOutputDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async kycGetRiskLevelScoreCorporateIdGet(requestParameters: KycGetRiskLevelScoreCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KycRiskLevelScoreOutputDataResponse> {
        const response = await this.kycGetRiskLevelScoreCorporateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves the KYC score and result for a specific flow.
     */
    async kycKycScoreCorporateIdGetRaw(requestParameters: KycKycScoreCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KycResultResponseDataResponse>> {
        if (requestParameters.corporateId === null || requestParameters.corporateId === undefined) {
            throw new runtime.RequiredError('corporateId','Required parameter requestParameters.corporateId was null or undefined when calling kycKycScoreCorporateIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Kyc/KycScore/{corporateId}`.replace(`{${"corporateId"}}`, encodeURIComponent(String(requestParameters.corporateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KycResultResponseDataResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves the KYC score and result for a specific flow.
     */
    async kycKycScoreCorporateIdGet(requestParameters: KycKycScoreCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KycResultResponseDataResponse> {
        const response = await this.kycKycScoreCorporateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async kycPersonalInfoCorporateIdGetRaw(requestParameters: KycPersonalInfoCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KycPersonalInfoOutputDataResponse>> {
        if (requestParameters.corporateId === null || requestParameters.corporateId === undefined) {
            throw new runtime.RequiredError('corporateId','Required parameter requestParameters.corporateId was null or undefined when calling kycPersonalInfoCorporateIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Kyc/PersonalInfo/{corporateId}`.replace(`{${"corporateId"}}`, encodeURIComponent(String(requestParameters.corporateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KycPersonalInfoOutputDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async kycPersonalInfoCorporateIdGet(requestParameters: KycPersonalInfoCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KycPersonalInfoOutputDataResponse> {
        const response = await this.kycPersonalInfoCorporateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async kycSpouseInfoCorporateIdGetRaw(requestParameters: KycSpouseInfoCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<KycSpouseInfoOutputDataResponse>> {
        if (requestParameters.corporateId === null || requestParameters.corporateId === undefined) {
            throw new runtime.RequiredError('corporateId','Required parameter requestParameters.corporateId was null or undefined when calling kycSpouseInfoCorporateIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Kyc/SpouseInfo/{corporateId}`.replace(`{${"corporateId"}}`, encodeURIComponent(String(requestParameters.corporateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => KycSpouseInfoOutputDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async kycSpouseInfoCorporateIdGet(requestParameters: KycSpouseInfoCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<KycSpouseInfoOutputDataResponse> {
        const response = await this.kycSpouseInfoCorporateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
