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
import { DecimalNullableDataResponse } from '../model';
/**
 * CalculateCreditLineApi - axios parameter creator
 * @export
 */
export const CalculateCreditLineApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Retrieves the credit line details based on the provided flow ID.
         * @param {string} corparateId The flow ID associated with the credit line calculation.
         * @param {string} [xPortalToken] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        calculateCreditLineGetCreditLineCorparateIdGet: async (corparateId: string, xPortalToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'corparateId' is not null or undefined
            assertParamExists('calculateCreditLineGetCreditLineCorparateIdGet', 'corparateId', corparateId)
            const localVarPath = `/CalculateCreditLine/GetCreditLine/{corparateId}`
                .replace(`{${"corparateId"}}`, encodeURIComponent(String(corparateId)));
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
    }
};

/**
 * CalculateCreditLineApi - functional programming interface
 * @export
 */
export const CalculateCreditLineApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CalculateCreditLineApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Retrieves the credit line details based on the provided flow ID.
         * @param {string} corparateId The flow ID associated with the credit line calculation.
         * @param {string} [xPortalToken] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async calculateCreditLineGetCreditLineCorparateIdGet(corparateId: string, xPortalToken?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DecimalNullableDataResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.calculateCreditLineGetCreditLineCorparateIdGet(corparateId, xPortalToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CalculateCreditLineApi - factory interface
 * @export
 */
export const CalculateCreditLineApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CalculateCreditLineApiFp(configuration)
    return {
        /**
         * 
         * @summary Retrieves the credit line details based on the provided flow ID.
         * @param {CalculateCreditLineApiCalculateCreditLineGetCreditLineCorparateIdGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        calculateCreditLineGetCreditLineCorparateIdGet(requestParameters: CalculateCreditLineApiCalculateCreditLineGetCreditLineCorparateIdGetRequest, options?: AxiosRequestConfig): AxiosPromise<DecimalNullableDataResponse> {
            return localVarFp.calculateCreditLineGetCreditLineCorparateIdGet(requestParameters.corparateId, requestParameters.xPortalToken, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for calculateCreditLineGetCreditLineCorparateIdGet operation in CalculateCreditLineApi.
 * @export
 * @interface CalculateCreditLineApiCalculateCreditLineGetCreditLineCorparateIdGetRequest
 */
export interface CalculateCreditLineApiCalculateCreditLineGetCreditLineCorparateIdGetRequest {
    /**
     * The flow ID associated with the credit line calculation.
     * @type {string}
     * @memberof CalculateCreditLineApiCalculateCreditLineGetCreditLineCorparateIdGet
     */
    readonly corparateId: string

    /**
     * 
     * @type {}
     * @memberof CalculateCreditLineApiCalculateCreditLineGetCreditLineCorparateIdGet
     */
    readonly xPortalToken?: string
}

/**
 * CalculateCreditLineApi - object-oriented interface
 * @export
 * @class CalculateCreditLineApi
 * @extends {BaseAPI}
 */
export class CalculateCreditLineApi extends BaseAPI {
    /**
     * 
     * @summary Retrieves the credit line details based on the provided flow ID.
     * @param {CalculateCreditLineApiCalculateCreditLineGetCreditLineCorparateIdGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CalculateCreditLineApi
     */
    public calculateCreditLineGetCreditLineCorparateIdGet(requestParameters: CalculateCreditLineApiCalculateCreditLineGetCreditLineCorparateIdGetRequest, options?: AxiosRequestConfig) {
        return CalculateCreditLineApiFp(this.configuration).calculateCreditLineGetCreditLineCorparateIdGet(requestParameters.corparateId, requestParameters.xPortalToken, options).then((request) => request(this.axios, this.basePath));
    }
}
