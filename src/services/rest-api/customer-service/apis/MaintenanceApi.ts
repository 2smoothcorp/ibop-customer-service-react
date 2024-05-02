/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.330
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountOfficerSPDataResponse,
  AccountOfficerSPListDataResponse,
  MaintenanceAccountOfficerPutRequest,
} from '../models';
import {
    AccountOfficerSPDataResponseFromJSON,
    AccountOfficerSPDataResponseToJSON,
    AccountOfficerSPListDataResponseFromJSON,
    AccountOfficerSPListDataResponseToJSON,
    MaintenanceAccountOfficerPutRequestFromJSON,
    MaintenanceAccountOfficerPutRequestToJSON,
} from '../models';

export interface MaintenanceAccountOfficerDeleteRequest {
    xPortalToken?: string;
    maintenanceAccountOfficerPutRequest?: MaintenanceAccountOfficerPutRequest;
}

export interface MaintenanceAccountOfficerEmployeeIDGetRequest {
    employeeID: string;
    xPortalToken?: string;
}

export interface MaintenanceAccountOfficerGetRequest {
    empCode?: string;
    role?: string;
    employeeID?: string;
    xPortalToken?: string;
}

export interface MaintenanceAccountOfficerPostRequest {
    xPortalToken?: string;
    maintenanceAccountOfficerPutRequest?: MaintenanceAccountOfficerPutRequest;
}

export interface MaintenanceAccountOfficerPutOperationRequest {
    xPortalToken?: string;
    maintenanceAccountOfficerPutRequest?: MaintenanceAccountOfficerPutRequest;
}

export interface MaintenanceEmployeeInformationEmployeeIDGetRequest {
    employeeID: string;
    xPortalToken?: string;
}

/**
 * 
 */
export class MaintenanceApi extends runtime.BaseAPI {

    /**
     */
    async maintenanceAccountOfficerDeleteRaw(requestParameters: MaintenanceAccountOfficerDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountOfficerSPDataResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/maintenance/AccountOfficer`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
            body: MaintenanceAccountOfficerPutRequestToJSON(requestParameters.maintenanceAccountOfficerPutRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountOfficerSPDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async maintenanceAccountOfficerDelete(requestParameters: MaintenanceAccountOfficerDeleteRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountOfficerSPDataResponse> {
        const response = await this.maintenanceAccountOfficerDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async maintenanceAccountOfficerEmployeeIDGetRaw(requestParameters: MaintenanceAccountOfficerEmployeeIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountOfficerSPDataResponse>> {
        if (requestParameters.employeeID === null || requestParameters.employeeID === undefined) {
            throw new runtime.RequiredError('employeeID','Required parameter requestParameters.employeeID was null or undefined when calling maintenanceAccountOfficerEmployeeIDGet.');
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
            path: `/maintenance/AccountOfficer/{EmployeeID}`.replace(`{${"EmployeeID"}}`, encodeURIComponent(String(requestParameters.employeeID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountOfficerSPDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async maintenanceAccountOfficerEmployeeIDGet(requestParameters: MaintenanceAccountOfficerEmployeeIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountOfficerSPDataResponse> {
        const response = await this.maintenanceAccountOfficerEmployeeIDGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async maintenanceAccountOfficerGetRaw(requestParameters: MaintenanceAccountOfficerGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountOfficerSPListDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.empCode !== undefined) {
            queryParameters['EmpCode'] = requestParameters.empCode;
        }

        if (requestParameters.role !== undefined) {
            queryParameters['Role'] = requestParameters.role;
        }

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
            path: `/maintenance/AccountOfficer`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountOfficerSPListDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async maintenanceAccountOfficerGet(requestParameters: MaintenanceAccountOfficerGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountOfficerSPListDataResponse> {
        const response = await this.maintenanceAccountOfficerGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async maintenanceAccountOfficerPostRaw(requestParameters: MaintenanceAccountOfficerPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountOfficerSPDataResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/maintenance/AccountOfficer`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MaintenanceAccountOfficerPutRequestToJSON(requestParameters.maintenanceAccountOfficerPutRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountOfficerSPDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async maintenanceAccountOfficerPost(requestParameters: MaintenanceAccountOfficerPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountOfficerSPDataResponse> {
        const response = await this.maintenanceAccountOfficerPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async maintenanceAccountOfficerPutRaw(requestParameters: MaintenanceAccountOfficerPutOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountOfficerSPDataResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/maintenance/AccountOfficer`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: MaintenanceAccountOfficerPutRequestToJSON(requestParameters.maintenanceAccountOfficerPutRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountOfficerSPDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async maintenanceAccountOfficerPut(requestParameters: MaintenanceAccountOfficerPutOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountOfficerSPDataResponse> {
        const response = await this.maintenanceAccountOfficerPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async maintenanceEmployeeInformationEmployeeIDGetRaw(requestParameters: MaintenanceEmployeeInformationEmployeeIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountOfficerSPDataResponse>> {
        if (requestParameters.employeeID === null || requestParameters.employeeID === undefined) {
            throw new runtime.RequiredError('employeeID','Required parameter requestParameters.employeeID was null or undefined when calling maintenanceEmployeeInformationEmployeeIDGet.');
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
            path: `/maintenance/EmployeeInformation/{EmployeeID}`.replace(`{${"EmployeeID"}}`, encodeURIComponent(String(requestParameters.employeeID))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountOfficerSPDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async maintenanceEmployeeInformationEmployeeIDGet(requestParameters: MaintenanceEmployeeInformationEmployeeIDGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountOfficerSPDataResponse> {
        const response = await this.maintenanceEmployeeInformationEmployeeIDGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
