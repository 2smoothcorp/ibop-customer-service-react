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
import { KycResultResponseDataResponse } from '../model';
/**
 * KycApi - axios parameter creator
 * @export
 */
export const KycApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Retrieves the KYC score and result for a specific flow.
         * @param {string} corperateId 
         * @param {string} [xPortalToken] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        kycKycScoreCorperateIdGet: async (corperateId: string, xPortalToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'corperateId' is not null or undefined
            assertParamExists('kycKycScoreCorperateIdGet', 'corperateId', corperateId)
            const localVarPath = `/Kyc/KycScore/{corperateId}`
                .replace(`{${"corperateId"}}`, encodeURIComponent(String(corperateId)));
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
 * KycApi - functional programming interface
 * @export
 */
export const KycApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = KycApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Retrieves the KYC score and result for a specific flow.
         * @param {string} corperateId 
         * @param {string} [xPortalToken] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async kycKycScoreCorperateIdGet(corperateId: string, xPortalToken?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<KycResultResponseDataResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.kycKycScoreCorperateIdGet(corperateId, xPortalToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * KycApi - factory interface
 * @export
 */
export const KycApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = KycApiFp(configuration)
    return {
        /**
         * 
         * @summary Retrieves the KYC score and result for a specific flow.
         * @param {KycApiKycKycScoreCorperateIdGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        kycKycScoreCorperateIdGet(requestParameters: KycApiKycKycScoreCorperateIdGetRequest, options?: AxiosRequestConfig): AxiosPromise<KycResultResponseDataResponse> {
            return localVarFp.kycKycScoreCorperateIdGet(requestParameters.corperateId, requestParameters.xPortalToken, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for kycKycScoreCorperateIdGet operation in KycApi.
 * @export
 * @interface KycApiKycKycScoreCorperateIdGetRequest
 */
export interface KycApiKycKycScoreCorperateIdGetRequest {
    /**
     * 
     * @type {string}
     * @memberof KycApiKycKycScoreCorperateIdGet
     */
    readonly corperateId: string

    /**
     * 
     * @type {}
     * @memberof KycApiKycKycScoreCorperateIdGet
     */
    readonly xPortalToken?: string
}

/**
 * KycApi - object-oriented interface
 * @export
 * @class KycApi
 * @extends {BaseAPI}
 */
export class KycApi extends BaseAPI {
    /**
     * 
     * @summary Retrieves the KYC score and result for a specific flow.
     * @param {KycApiKycKycScoreCorperateIdGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof KycApi
     */
    public kycKycScoreCorperateIdGet(requestParameters: KycApiKycKycScoreCorperateIdGetRequest, options?: AxiosRequestConfig) {
        return KycApiFp(this.configuration).kycKycScoreCorperateIdGet(requestParameters.corperateId, requestParameters.xPortalToken, options).then((request) => request(this.axios, this.basePath));
    }
}
