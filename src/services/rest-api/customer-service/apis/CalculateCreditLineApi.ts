/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.268
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  DecimalNullableDataResponse,
} from '../models';
import {
    DecimalNullableDataResponseFromJSON,
    DecimalNullableDataResponseToJSON,
} from '../models';

export interface CalculateCreditLineGetCreditLineCorparateIdGetRequest {
    corparateId: string;
    xPortalToken?: string;
}

/**
 * 
 */
export class CalculateCreditLineApi extends runtime.BaseAPI {

    /**
     * Retrieves the credit line details based on the provided flow ID.
     */
    async calculateCreditLineGetCreditLineCorparateIdGetRaw(requestParameters: CalculateCreditLineGetCreditLineCorparateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DecimalNullableDataResponse>> {
        if (requestParameters.corparateId === null || requestParameters.corparateId === undefined) {
            throw new runtime.RequiredError('corparateId','Required parameter requestParameters.corparateId was null or undefined when calling calculateCreditLineGetCreditLineCorparateIdGet.');
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
            path: `/CalculateCreditLine/GetCreditLine/{corparateId}`.replace(`{${"corparateId"}}`, encodeURIComponent(String(requestParameters.corparateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DecimalNullableDataResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves the credit line details based on the provided flow ID.
     */
    async calculateCreditLineGetCreditLineCorparateIdGet(requestParameters: CalculateCreditLineGetCreditLineCorparateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DecimalNullableDataResponse> {
        const response = await this.calculateCreditLineGetCreditLineCorparateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
