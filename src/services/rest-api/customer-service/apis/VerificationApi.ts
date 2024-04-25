/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.298
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  VerifyRequestVerifyRequestOutputPagination,
} from '../models';
import {
    VerifyRequestVerifyRequestOutputPaginationFromJSON,
    VerifyRequestVerifyRequestOutputPaginationToJSON,
} from '../models';

export interface VerificationGetAllGetRequest {
    corparateId?: string;
    name?: string;
    refId?: string;
    getByRefId?: boolean;
    startDate?: Date;
    endDate?: Date;
    status?: Array<string>;
    isEmailSms?: boolean;
    channel?: Array<string>;
    customerType?: Array<string>;
    pageIndex?: number;
    pageSize?: number;
    sortField?: string;
    sortDirection?: string;
    xPortalToken?: string;
}

/**
 * 
 */
export class VerificationApi extends runtime.BaseAPI {

    /**
     * Endpoint to retrieve all customer verification requests.
     */
    async verificationGetAllGetRaw(requestParameters: VerificationGetAllGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VerifyRequestVerifyRequestOutputPagination>> {
        const queryParameters: any = {};

        if (requestParameters.corparateId !== undefined) {
            queryParameters['CorparateId'] = requestParameters.corparateId;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['Name'] = requestParameters.name;
        }

        if (requestParameters.refId !== undefined) {
            queryParameters['RefId'] = requestParameters.refId;
        }

        if (requestParameters.getByRefId !== undefined) {
            queryParameters['GetByRefId'] = requestParameters.getByRefId;
        }

        if (requestParameters.startDate !== undefined) {
            queryParameters['StartDate'] = (requestParameters.startDate as any).toISOString();
        }

        if (requestParameters.endDate !== undefined) {
            queryParameters['EndDate'] = (requestParameters.endDate as any).toISOString();
        }

        if (requestParameters.status) {
            queryParameters['Status'] = requestParameters.status;
        }

        if (requestParameters.isEmailSms !== undefined) {
            queryParameters['IsEmailSms'] = requestParameters.isEmailSms;
        }

        if (requestParameters.channel) {
            queryParameters['Channel'] = requestParameters.channel;
        }

        if (requestParameters.customerType) {
            queryParameters['CustomerType'] = requestParameters.customerType;
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
            path: `/Verification/GetAll`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VerifyRequestVerifyRequestOutputPaginationFromJSON(jsonValue));
    }

    /**
     * Endpoint to retrieve all customer verification requests.
     */
    async verificationGetAllGet(requestParameters: VerificationGetAllGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VerifyRequestVerifyRequestOutputPagination> {
        const response = await this.verificationGetAllGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
