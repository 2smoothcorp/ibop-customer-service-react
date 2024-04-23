/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.272
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ComboBoxListDataResponse,
  GetMasterATSBankComboOutput,
} from '../models';
import {
    ComboBoxListDataResponseFromJSON,
    ComboBoxListDataResponseToJSON,
    GetMasterATSBankComboOutputFromJSON,
    GetMasterATSBankComboOutputToJSON,
} from '../models';

export interface MasterDataAORoleGetRequest {
    xPortalToken?: string;
}

export interface MasterDataATSBankGetRequest {
    mode?: string;
    filter?: string;
    userId?: string;
    keyword?: string;
    xPortalToken?: string;
}

export interface MasterDataBranchesGetRequest {
    employeeID?: string;
    xPortalToken?: string;
}

export interface MasterDataCountriesGetRequest {
    employeeID?: string;
    xPortalToken?: string;
}

export interface MasterDataICsGetRequest {
    employeeID?: string;
    xPortalToken?: string;
}

export interface MasterDataIncomeRateGetRequest {
    xPortalToken?: string;
}

export interface MasterDataIncomeSourceGetRequest {
    xPortalToken?: string;
}

export interface MasterDataInvestmentPurposeGetRequest {
    xPortalToken?: string;
}

export interface MasterDataOccupationGetRequest {
    employeeID?: string;
    xPortalToken?: string;
}

export interface MasterDataPersonTypeGetRequest {
    employeeID?: string;
    xPortalToken?: string;
}

export interface MasterDataTitlesGetRequest {
    employeeID?: string;
    xPortalToken?: string;
}

/**
 * 
 */
export class MasterDataApi extends runtime.BaseAPI {

    /**
     */
    async masterDataAORoleGetRaw(requestParameters: MasterDataAORoleGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComboBoxListDataResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/AORole`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComboBoxListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataAORoleGet(requestParameters: MasterDataAORoleGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComboBoxListDataResponse> {
        const response = await this.masterDataAORoleGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async masterDataATSBankGetRaw(requestParameters: MasterDataATSBankGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetMasterATSBankComboOutput>> {
        const queryParameters: any = {};

        if (requestParameters.mode !== undefined) {
            queryParameters['Mode'] = requestParameters.mode;
        }

        if (requestParameters.filter !== undefined) {
            queryParameters['Filter'] = requestParameters.filter;
        }

        if (requestParameters.userId !== undefined) {
            queryParameters['UserId'] = requestParameters.userId;
        }

        if (requestParameters.keyword !== undefined) {
            queryParameters['Keyword'] = requestParameters.keyword;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/ATSBank`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetMasterATSBankComboOutputFromJSON(jsonValue));
    }

    /**
     */
    async masterDataATSBankGet(requestParameters: MasterDataATSBankGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetMasterATSBankComboOutput> {
        const response = await this.masterDataATSBankGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async masterDataBranchesGetRaw(requestParameters: MasterDataBranchesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComboBoxListDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.employeeID !== undefined) {
            queryParameters['EmployeeID'] = requestParameters.employeeID;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/Branches`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComboBoxListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataBranchesGet(requestParameters: MasterDataBranchesGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComboBoxListDataResponse> {
        const response = await this.masterDataBranchesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async masterDataCountriesGetRaw(requestParameters: MasterDataCountriesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComboBoxListDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.employeeID !== undefined) {
            queryParameters['EmployeeID'] = requestParameters.employeeID;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/Countries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComboBoxListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataCountriesGet(requestParameters: MasterDataCountriesGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComboBoxListDataResponse> {
        const response = await this.masterDataCountriesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async masterDataICsGetRaw(requestParameters: MasterDataICsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComboBoxListDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.employeeID !== undefined) {
            queryParameters['EmployeeID'] = requestParameters.employeeID;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/ICs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComboBoxListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataICsGet(requestParameters: MasterDataICsGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComboBoxListDataResponse> {
        const response = await this.masterDataICsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async masterDataIncomeRateGetRaw(requestParameters: MasterDataIncomeRateGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComboBoxListDataResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/IncomeRate`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComboBoxListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataIncomeRateGet(requestParameters: MasterDataIncomeRateGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComboBoxListDataResponse> {
        const response = await this.masterDataIncomeRateGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async masterDataIncomeSourceGetRaw(requestParameters: MasterDataIncomeSourceGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComboBoxListDataResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/IncomeSource`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComboBoxListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataIncomeSourceGet(requestParameters: MasterDataIncomeSourceGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComboBoxListDataResponse> {
        const response = await this.masterDataIncomeSourceGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async masterDataInvestmentPurposeGetRaw(requestParameters: MasterDataInvestmentPurposeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComboBoxListDataResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/InvestmentPurpose`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComboBoxListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataInvestmentPurposeGet(requestParameters: MasterDataInvestmentPurposeGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComboBoxListDataResponse> {
        const response = await this.masterDataInvestmentPurposeGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async masterDataOccupationGetRaw(requestParameters: MasterDataOccupationGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComboBoxListDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.employeeID !== undefined) {
            queryParameters['EmployeeID'] = requestParameters.employeeID;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/Occupation`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComboBoxListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataOccupationGet(requestParameters: MasterDataOccupationGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComboBoxListDataResponse> {
        const response = await this.masterDataOccupationGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async masterDataPersonTypeGetRaw(requestParameters: MasterDataPersonTypeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComboBoxListDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.employeeID !== undefined) {
            queryParameters['EmployeeID'] = requestParameters.employeeID;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/PersonType`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComboBoxListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataPersonTypeGet(requestParameters: MasterDataPersonTypeGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComboBoxListDataResponse> {
        const response = await this.masterDataPersonTypeGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async masterDataTitlesGetRaw(requestParameters: MasterDataTitlesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComboBoxListDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.employeeID !== undefined) {
            queryParameters['EmployeeID'] = requestParameters.employeeID;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/Titles`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComboBoxListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataTitlesGet(requestParameters: MasterDataTitlesGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComboBoxListDataResponse> {
        const response = await this.masterDataTitlesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
