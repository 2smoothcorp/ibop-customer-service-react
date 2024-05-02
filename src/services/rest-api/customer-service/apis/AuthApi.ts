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
  GetTokenOutput,
  PermissionInfoOuput,
} from '../models';
import {
    GetTokenOutputFromJSON,
    GetTokenOutputToJSON,
    PermissionInfoOuputFromJSON,
    PermissionInfoOuputToJSON,
} from '../models';

export interface AuthGenerateJwtTokenPostRequest {
    xPortalToken?: string;
}

export interface AuthGetEmployeePermissionGetEmployeePermissionGetRequest {
    employeeId?: string;
    xPortalToken?: string;
}

export interface AuthNlogNlogGetRequest {
    xPortalToken?: string;
}

/**
 * 
 */
export class AuthApi extends runtime.BaseAPI {

    /**
     * Generates a new JWT token.
     */
    async authGenerateJwtTokenPostRaw(requestParameters: AuthGenerateJwtTokenPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetTokenOutput>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Auth/GenerateJwtToken`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetTokenOutputFromJSON(jsonValue));
    }

    /**
     * Generates a new JWT token.
     */
    async authGenerateJwtTokenPost(requestParameters: AuthGenerateJwtTokenPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetTokenOutput> {
        const response = await this.authGenerateJwtTokenPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async authGetEmployeePermissionGetEmployeePermissionGetRaw(requestParameters: AuthGetEmployeePermissionGetEmployeePermissionGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermissionInfoOuput>> {
        const queryParameters: any = {};

        if (requestParameters.employeeId !== undefined) {
            queryParameters['EmployeeId'] = requestParameters.employeeId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Auth/GetEmployeePermission/GetEmployeePermission`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PermissionInfoOuputFromJSON(jsonValue));
    }

    /**
     */
    async authGetEmployeePermissionGetEmployeePermissionGet(requestParameters: AuthGetEmployeePermissionGetEmployeePermissionGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermissionInfoOuput> {
        const response = await this.authGetEmployeePermissionGetEmployeePermissionGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async authNlogNlogGetRaw(requestParameters: AuthNlogNlogGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Auth/Nlog/Nlog`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async authNlogNlogGet(requestParameters: AuthNlogNlogGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.authNlogNlogGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
