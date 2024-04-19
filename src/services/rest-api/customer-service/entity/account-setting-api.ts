/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.267
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { AccountSettingCreatePostRequest } from '../model';
// @ts-ignore
import { AccountSettingSPListDataResponse } from '../model';
/**
 * AccountSettingApi - axios parameter creator
 * @export
 */
export const AccountSettingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary API for creating account setting
         * @param {string} [xPortalToken] 
         * @param {AccountSettingCreatePostRequest} [accountSettingCreatePostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountSettingCreatePost: async (xPortalToken?: string, accountSettingCreatePostRequest?: AccountSettingCreatePostRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/account-setting/create`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (xPortalToken != null) {
                localVarHeaderParameter['x-portal-token'] = typeof xPortalToken === 'string' 
                    ? xPortalToken 
                    : JSON.stringify(xPortalToken);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(accountSettingCreatePostRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary API for getting all account setting as list
         * @param {string} [prefix] 
         * @param {string} [newPrefix] 
         * @param {string} [status] 
         * @param {string} [remark] 
         * @param {string} [logUser] 
         * @param {string} [xPortalToken] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountSettingGet: async (prefix?: string, newPrefix?: string, status?: string, remark?: string, logUser?: string, xPortalToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/account-setting`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (prefix !== undefined) {
                localVarQueryParameter['Prefix'] = prefix;
            }

            if (newPrefix !== undefined) {
                localVarQueryParameter['NewPrefix'] = newPrefix;
            }

            if (status !== undefined) {
                localVarQueryParameter['Status'] = status;
            }

            if (remark !== undefined) {
                localVarQueryParameter['Remark'] = remark;
            }

            if (logUser !== undefined) {
                localVarQueryParameter['LogUser'] = logUser;
            }

            if (xPortalToken != null) {
                localVarHeaderParameter['x-portal-token'] = typeof xPortalToken === 'string' 
                    ? xPortalToken 
                    : JSON.stringify(xPortalToken);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary API for updating account setting
         * @param {string} [xPortalToken] 
         * @param {AccountSettingCreatePostRequest} [accountSettingCreatePostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountSettingUpdatePut: async (xPortalToken?: string, accountSettingCreatePostRequest?: AccountSettingCreatePostRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/account-setting/update`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            await setApiKeyToObject(localVarHeaderParameter, "Authorization", configuration)

            if (xPortalToken != null) {
                localVarHeaderParameter['x-portal-token'] = typeof xPortalToken === 'string' 
                    ? xPortalToken 
                    : JSON.stringify(xPortalToken);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(accountSettingCreatePostRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AccountSettingApi - functional programming interface
 * @export
 */
export const AccountSettingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AccountSettingApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary API for creating account setting
         * @param {string} [xPortalToken] 
         * @param {AccountSettingCreatePostRequest} [accountSettingCreatePostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountSettingCreatePost(xPortalToken?: string, accountSettingCreatePostRequest?: AccountSettingCreatePostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountSettingSPListDataResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountSettingCreatePost(xPortalToken, accountSettingCreatePostRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary API for getting all account setting as list
         * @param {string} [prefix] 
         * @param {string} [newPrefix] 
         * @param {string} [status] 
         * @param {string} [remark] 
         * @param {string} [logUser] 
         * @param {string} [xPortalToken] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountSettingGet(prefix?: string, newPrefix?: string, status?: string, remark?: string, logUser?: string, xPortalToken?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountSettingSPListDataResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountSettingGet(prefix, newPrefix, status, remark, logUser, xPortalToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary API for updating account setting
         * @param {string} [xPortalToken] 
         * @param {AccountSettingCreatePostRequest} [accountSettingCreatePostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accountSettingUpdatePut(xPortalToken?: string, accountSettingCreatePostRequest?: AccountSettingCreatePostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountSettingSPListDataResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.accountSettingUpdatePut(xPortalToken, accountSettingCreatePostRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AccountSettingApi - factory interface
 * @export
 */
export const AccountSettingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AccountSettingApiFp(configuration)
    return {
        /**
         * 
         * @summary API for creating account setting
         * @param {AccountSettingApiAccountSettingCreatePostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountSettingCreatePost(requestParameters: AccountSettingApiAccountSettingCreatePostRequest = {}, options?: AxiosRequestConfig): AxiosPromise<AccountSettingSPListDataResponse> {
            return localVarFp.accountSettingCreatePost(requestParameters.xPortalToken, requestParameters.accountSettingCreatePostRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary API for getting all account setting as list
         * @param {AccountSettingApiAccountSettingGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountSettingGet(requestParameters: AccountSettingApiAccountSettingGetRequest = {}, options?: AxiosRequestConfig): AxiosPromise<AccountSettingSPListDataResponse> {
            return localVarFp.accountSettingGet(requestParameters.prefix, requestParameters.newPrefix, requestParameters.status, requestParameters.remark, requestParameters.logUser, requestParameters.xPortalToken, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary API for updating account setting
         * @param {AccountSettingApiAccountSettingUpdatePutRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accountSettingUpdatePut(requestParameters: AccountSettingApiAccountSettingUpdatePutRequest = {}, options?: AxiosRequestConfig): AxiosPromise<AccountSettingSPListDataResponse> {
            return localVarFp.accountSettingUpdatePut(requestParameters.xPortalToken, requestParameters.accountSettingCreatePostRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for accountSettingCreatePost operation in AccountSettingApi.
 * @export
 * @interface AccountSettingApiAccountSettingCreatePostRequest
 */
export interface AccountSettingApiAccountSettingCreatePostRequest {
    /**
     * 
     * @type {}
     * @memberof AccountSettingApiAccountSettingCreatePost
     */
    readonly xPortalToken?: string

    /**
     * 
     * @type {AccountSettingCreatePostRequest}
     * @memberof AccountSettingApiAccountSettingCreatePost
     */
    readonly accountSettingCreatePostRequest?: AccountSettingCreatePostRequest
}

/**
 * Request parameters for accountSettingGet operation in AccountSettingApi.
 * @export
 * @interface AccountSettingApiAccountSettingGetRequest
 */
export interface AccountSettingApiAccountSettingGetRequest {
    /**
     * 
     * @type {string}
     * @memberof AccountSettingApiAccountSettingGet
     */
    readonly prefix?: string

    /**
     * 
     * @type {string}
     * @memberof AccountSettingApiAccountSettingGet
     */
    readonly newPrefix?: string

    /**
     * 
     * @type {string}
     * @memberof AccountSettingApiAccountSettingGet
     */
    readonly status?: string

    /**
     * 
     * @type {string}
     * @memberof AccountSettingApiAccountSettingGet
     */
    readonly remark?: string

    /**
     * 
     * @type {string}
     * @memberof AccountSettingApiAccountSettingGet
     */
    readonly logUser?: string

    /**
     * 
     * @type {}
     * @memberof AccountSettingApiAccountSettingGet
     */
    readonly xPortalToken?: string
}

/**
 * Request parameters for accountSettingUpdatePut operation in AccountSettingApi.
 * @export
 * @interface AccountSettingApiAccountSettingUpdatePutRequest
 */
export interface AccountSettingApiAccountSettingUpdatePutRequest {
    /**
     * 
     * @type {}
     * @memberof AccountSettingApiAccountSettingUpdatePut
     */
    readonly xPortalToken?: string

    /**
     * 
     * @type {AccountSettingCreatePostRequest}
     * @memberof AccountSettingApiAccountSettingUpdatePut
     */
    readonly accountSettingCreatePostRequest?: AccountSettingCreatePostRequest
}

/**
 * AccountSettingApi - object-oriented interface
 * @export
 * @class AccountSettingApi
 * @extends {BaseAPI}
 */
export class AccountSettingApi extends BaseAPI {
    /**
     * 
     * @summary API for creating account setting
     * @param {AccountSettingApiAccountSettingCreatePostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountSettingApi
     */
    public accountSettingCreatePost(requestParameters: AccountSettingApiAccountSettingCreatePostRequest = {}, options?: AxiosRequestConfig) {
        return AccountSettingApiFp(this.configuration).accountSettingCreatePost(requestParameters.xPortalToken, requestParameters.accountSettingCreatePostRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary API for getting all account setting as list
     * @param {AccountSettingApiAccountSettingGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountSettingApi
     */
    public accountSettingGet(requestParameters: AccountSettingApiAccountSettingGetRequest = {}, options?: AxiosRequestConfig) {
        return AccountSettingApiFp(this.configuration).accountSettingGet(requestParameters.prefix, requestParameters.newPrefix, requestParameters.status, requestParameters.remark, requestParameters.logUser, requestParameters.xPortalToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary API for updating account setting
     * @param {AccountSettingApiAccountSettingUpdatePutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountSettingApi
     */
    public accountSettingUpdatePut(requestParameters: AccountSettingApiAccountSettingUpdatePutRequest = {}, options?: AxiosRequestConfig) {
        return AccountSettingApiFp(this.configuration).accountSettingUpdatePut(requestParameters.xPortalToken, requestParameters.accountSettingCreatePostRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
