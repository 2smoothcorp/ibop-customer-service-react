/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.332
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AddressMasterListDataResponse,
  ComboBoxListDataResponse,
  GetMasterATSBankComboOutput,
} from '../models';
import {
    AddressMasterListDataResponseFromJSON,
    AddressMasterListDataResponseToJSON,
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

export interface MasterDataAddressByPostCodeGetRequest {
    postCodeMain?: string;
    xPortalToken?: string;
}

export interface MasterDataAmphurGetRequest {
    provinceCode?: string;
    xPortalToken?: string;
}

export interface MasterDataBankGetRequest {
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

export interface MasterDataNationGetRequest {
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

export interface MasterDataProductGetRequest {
    xPortalToken?: string;
}

export interface MasterDataProvinceGetRequest {
    xPortalToken?: string;
}

export interface MasterDataReferenceGetRequest {
    xPortalToken?: string;
}

export interface MasterDataTambonGetRequest {
    amphurCode?: string;
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
    async masterDataAddressByPostCodeGetRaw(requestParameters: MasterDataAddressByPostCodeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddressMasterListDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.postCodeMain !== undefined) {
            queryParameters['postCodeMain'] = requestParameters.postCodeMain;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/AddressByPostCode`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddressMasterListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataAddressByPostCodeGet(requestParameters: MasterDataAddressByPostCodeGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddressMasterListDataResponse> {
        const response = await this.masterDataAddressByPostCodeGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async masterDataAmphurGetRaw(requestParameters: MasterDataAmphurGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComboBoxListDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.provinceCode !== undefined) {
            queryParameters['provinceCode'] = requestParameters.provinceCode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/Amphur`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComboBoxListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataAmphurGet(requestParameters: MasterDataAmphurGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComboBoxListDataResponse> {
        const response = await this.masterDataAmphurGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async masterDataBankGetRaw(requestParameters: MasterDataBankGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComboBoxListDataResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/Bank`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComboBoxListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataBankGet(requestParameters: MasterDataBankGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComboBoxListDataResponse> {
        const response = await this.masterDataBankGetRaw(requestParameters, initOverrides);
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
    async masterDataNationGetRaw(requestParameters: MasterDataNationGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComboBoxListDataResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/Nation`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComboBoxListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataNationGet(requestParameters: MasterDataNationGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComboBoxListDataResponse> {
        const response = await this.masterDataNationGetRaw(requestParameters, initOverrides);
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
    async masterDataProductGetRaw(requestParameters: MasterDataProductGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComboBoxListDataResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/Product`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComboBoxListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataProductGet(requestParameters: MasterDataProductGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComboBoxListDataResponse> {
        const response = await this.masterDataProductGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async masterDataProvinceGetRaw(requestParameters: MasterDataProvinceGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComboBoxListDataResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/Province`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComboBoxListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataProvinceGet(requestParameters: MasterDataProvinceGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComboBoxListDataResponse> {
        const response = await this.masterDataProvinceGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async masterDataReferenceGetRaw(requestParameters: MasterDataReferenceGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComboBoxListDataResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/Reference`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComboBoxListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataReferenceGet(requestParameters: MasterDataReferenceGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComboBoxListDataResponse> {
        const response = await this.masterDataReferenceGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async masterDataTambonGetRaw(requestParameters: MasterDataTambonGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ComboBoxListDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.amphurCode !== undefined) {
            queryParameters['amphurCode'] = requestParameters.amphurCode;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/master-data/Tambon`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ComboBoxListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async masterDataTambonGet(requestParameters: MasterDataTambonGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ComboBoxListDataResponse> {
        const response = await this.masterDataTambonGetRaw(requestParameters, initOverrides);
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
