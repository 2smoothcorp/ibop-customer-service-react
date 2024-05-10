/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.364
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountSettingCreatePostRequest,
  AccountSettingSPListDataResponse,
} from '../models';
import {
    AccountSettingCreatePostRequestFromJSON,
    AccountSettingCreatePostRequestToJSON,
    AccountSettingSPListDataResponseFromJSON,
    AccountSettingSPListDataResponseToJSON,
} from '../models';

export interface AccountSettingCreatePostOperationRequest {
    xPortalToken?: string;
    accountSettingCreatePostRequest?: AccountSettingCreatePostRequest;
}

export interface AccountSettingGetRequest {
    prefix?: string;
    newPrefix?: string;
    status?: string;
    remark?: string;
    logUser?: string;
    xPortalToken?: string;
}

export interface AccountSettingUpdatePutRequest {
    xPortalToken?: string;
    accountSettingCreatePostRequest?: AccountSettingCreatePostRequest;
}

/**
 * 
 */
export class AccountSettingApi extends runtime.BaseAPI {

    /**
     * API for creating account setting
     */
    async accountSettingCreatePostRaw(requestParameters: AccountSettingCreatePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountSettingSPListDataResponse>> {
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
            path: `/account-setting/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AccountSettingCreatePostRequestToJSON(requestParameters.accountSettingCreatePostRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountSettingSPListDataResponseFromJSON(jsonValue));
    }

    /**
     * API for creating account setting
     */
    async accountSettingCreatePost(requestParameters: AccountSettingCreatePostOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountSettingSPListDataResponse> {
        const response = await this.accountSettingCreatePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * API for getting all account setting as list
     */
    async accountSettingGetRaw(requestParameters: AccountSettingGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountSettingSPListDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.prefix !== undefined) {
            queryParameters['Prefix'] = requestParameters.prefix;
        }

        if (requestParameters.newPrefix !== undefined) {
            queryParameters['NewPrefix'] = requestParameters.newPrefix;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['Status'] = requestParameters.status;
        }

        if (requestParameters.remark !== undefined) {
            queryParameters['Remark'] = requestParameters.remark;
        }

        if (requestParameters.logUser !== undefined) {
            queryParameters['LogUser'] = requestParameters.logUser;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/account-setting`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountSettingSPListDataResponseFromJSON(jsonValue));
    }

    /**
     * API for getting all account setting as list
     */
    async accountSettingGet(requestParameters: AccountSettingGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountSettingSPListDataResponse> {
        const response = await this.accountSettingGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * API for updating account setting
     */
    async accountSettingUpdatePutRaw(requestParameters: AccountSettingUpdatePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountSettingSPListDataResponse>> {
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
            path: `/account-setting/update`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AccountSettingCreatePostRequestToJSON(requestParameters.accountSettingCreatePostRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountSettingSPListDataResponseFromJSON(jsonValue));
    }

    /**
     * API for updating account setting
     */
    async accountSettingUpdatePut(requestParameters: AccountSettingUpdatePutRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountSettingSPListDataResponse> {
        const response = await this.accountSettingUpdatePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
