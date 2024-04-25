/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.299
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ConsentAnsweredOutputDataResponse,
  ConsentQuestionOutputDataResponse,
  ConsentSaveCorparateIdPostRequest,
} from '../models';
import {
    ConsentAnsweredOutputDataResponseFromJSON,
    ConsentAnsweredOutputDataResponseToJSON,
    ConsentQuestionOutputDataResponseFromJSON,
    ConsentQuestionOutputDataResponseToJSON,
    ConsentSaveCorparateIdPostRequestFromJSON,
    ConsentSaveCorparateIdPostRequestToJSON,
} from '../models';

export interface ConsentGetAnsweredCorparateIdGetRequest {
    corparateId: string;
    formId?: string;
    xPortalToken?: string;
}

export interface ConsentGetQuestionFormIdGetRequest {
    formId: string;
    xPortalToken?: string;
}

export interface ConsentSaveCorparateIdPostOperationRequest {
    corparateId: string;
    xPortalToken?: string;
    consentSaveCorparateIdPostRequest?: ConsentSaveCorparateIdPostRequest;
}

/**
 * 
 */
export class ConsentApi extends runtime.BaseAPI {

    /**
     */
    async consentGetAnsweredCorparateIdGetRaw(requestParameters: ConsentGetAnsweredCorparateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConsentAnsweredOutputDataResponse>> {
        if (requestParameters.corparateId === null || requestParameters.corparateId === undefined) {
            throw new runtime.RequiredError('corparateId','Required parameter requestParameters.corparateId was null or undefined when calling consentGetAnsweredCorparateIdGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.formId !== undefined) {
            queryParameters['formId'] = requestParameters.formId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Consent/GetAnswered/{corparateId}`.replace(`{${"corparateId"}}`, encodeURIComponent(String(requestParameters.corparateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConsentAnsweredOutputDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async consentGetAnsweredCorparateIdGet(requestParameters: ConsentGetAnsweredCorparateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConsentAnsweredOutputDataResponse> {
        const response = await this.consentGetAnsweredCorparateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async consentGetQuestionFormIdGetRaw(requestParameters: ConsentGetQuestionFormIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConsentQuestionOutputDataResponse>> {
        if (requestParameters.formId === null || requestParameters.formId === undefined) {
            throw new runtime.RequiredError('formId','Required parameter requestParameters.formId was null or undefined when calling consentGetQuestionFormIdGet.');
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
            path: `/Consent/GetQuestion/{formId}`.replace(`{${"formId"}}`, encodeURIComponent(String(requestParameters.formId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConsentQuestionOutputDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async consentGetQuestionFormIdGet(requestParameters: ConsentGetQuestionFormIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConsentQuestionOutputDataResponse> {
        const response = await this.consentGetQuestionFormIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async consentSaveCorparateIdPostRaw(requestParameters: ConsentSaveCorparateIdPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.corparateId === null || requestParameters.corparateId === undefined) {
            throw new runtime.RequiredError('corparateId','Required parameter requestParameters.corparateId was null or undefined when calling consentSaveCorparateIdPost.');
        }

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
            path: `/Consent/Save/{corparateId}`.replace(`{${"corparateId"}}`, encodeURIComponent(String(requestParameters.corparateId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ConsentSaveCorparateIdPostRequestToJSON(requestParameters.consentSaveCorparateIdPostRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async consentSaveCorparateIdPost(requestParameters: ConsentSaveCorparateIdPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.consentSaveCorparateIdPostRaw(requestParameters, initOverrides);
    }

}
