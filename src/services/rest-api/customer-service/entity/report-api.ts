/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.242
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
import { AccountBackOfficeReportOutputPagination } from '../model';
/**
 * ReportApi - axios parameter creator
 * @export
 */
export const ReportApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [startDate] 
         * @param {string} [endDate] 
         * @param {number} [pageIndex] 
         * @param {number} [pageSize] 
         * @param {string} [sortField] 
         * @param {string} [sortDirection] 
         * @param {string} [xPortalToken] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reportGetBackOfficeReportGet: async (startDate?: string, endDate?: string, pageIndex?: number, pageSize?: number, sortField?: string, sortDirection?: string, xPortalToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/Report/GetBackOfficeReport`;
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

            if (startDate !== undefined) {
                localVarQueryParameter['StartDate'] = (startDate as any instanceof Date) ?
                    (startDate as any).toISOString() :
                    startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['EndDate'] = (endDate as any instanceof Date) ?
                    (endDate as any).toISOString() :
                    endDate;
            }

            if (pageIndex !== undefined) {
                localVarQueryParameter['PageIndex'] = pageIndex;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['PageSize'] = pageSize;
            }

            if (sortField !== undefined) {
                localVarQueryParameter['SortField'] = sortField;
            }

            if (sortDirection !== undefined) {
                localVarQueryParameter['SortDirection'] = sortDirection;
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
    }
};

/**
 * ReportApi - functional programming interface
 * @export
 */
export const ReportApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ReportApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} [startDate] 
         * @param {string} [endDate] 
         * @param {number} [pageIndex] 
         * @param {number} [pageSize] 
         * @param {string} [sortField] 
         * @param {string} [sortDirection] 
         * @param {string} [xPortalToken] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async reportGetBackOfficeReportGet(startDate?: string, endDate?: string, pageIndex?: number, pageSize?: number, sortField?: string, sortDirection?: string, xPortalToken?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AccountBackOfficeReportOutputPagination>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.reportGetBackOfficeReportGet(startDate, endDate, pageIndex, pageSize, sortField, sortDirection, xPortalToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ReportApi - factory interface
 * @export
 */
export const ReportApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ReportApiFp(configuration)
    return {
        /**
         * 
         * @param {ReportApiReportGetBackOfficeReportGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        reportGetBackOfficeReportGet(requestParameters: ReportApiReportGetBackOfficeReportGetRequest = {}, options?: AxiosRequestConfig): AxiosPromise<AccountBackOfficeReportOutputPagination> {
            return localVarFp.reportGetBackOfficeReportGet(requestParameters.startDate, requestParameters.endDate, requestParameters.pageIndex, requestParameters.pageSize, requestParameters.sortField, requestParameters.sortDirection, requestParameters.xPortalToken, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for reportGetBackOfficeReportGet operation in ReportApi.
 * @export
 * @interface ReportApiReportGetBackOfficeReportGetRequest
 */
export interface ReportApiReportGetBackOfficeReportGetRequest {
    /**
     * 
     * @type {string}
     * @memberof ReportApiReportGetBackOfficeReportGet
     */
    readonly startDate?: string

    /**
     * 
     * @type {string}
     * @memberof ReportApiReportGetBackOfficeReportGet
     */
    readonly endDate?: string

    /**
     * 
     * @type {number}
     * @memberof ReportApiReportGetBackOfficeReportGet
     */
    readonly pageIndex?: number

    /**
     * 
     * @type {number}
     * @memberof ReportApiReportGetBackOfficeReportGet
     */
    readonly pageSize?: number

    /**
     * 
     * @type {string}
     * @memberof ReportApiReportGetBackOfficeReportGet
     */
    readonly sortField?: string

    /**
     * 
     * @type {string}
     * @memberof ReportApiReportGetBackOfficeReportGet
     */
    readonly sortDirection?: string

    /**
     * 
     * @type {}
     * @memberof ReportApiReportGetBackOfficeReportGet
     */
    readonly xPortalToken?: string
}

/**
 * ReportApi - object-oriented interface
 * @export
 * @class ReportApi
 * @extends {BaseAPI}
 */
export class ReportApi extends BaseAPI {
    /**
     * 
     * @param {ReportApiReportGetBackOfficeReportGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReportApi
     */
    public reportGetBackOfficeReportGet(requestParameters: ReportApiReportGetBackOfficeReportGetRequest = {}, options?: AxiosRequestConfig) {
        return ReportApiFp(this.configuration).reportGetBackOfficeReportGet(requestParameters.startDate, requestParameters.endDate, requestParameters.pageIndex, requestParameters.pageSize, requestParameters.sortField, requestParameters.sortDirection, requestParameters.xPortalToken, options).then((request) => request(this.axios, this.basePath));
    }
}
