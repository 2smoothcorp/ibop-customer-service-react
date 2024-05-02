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
  ConsentAnsweredOutputDataResponse,
  ConsentQuestionOutputDataResponse,
  ConsentSaveCorporateIdPostRequest,
} from '../models';
import {
    ConsentAnsweredOutputDataResponseFromJSON,
    ConsentAnsweredOutputDataResponseToJSON,
    ConsentQuestionOutputDataResponseFromJSON,
    ConsentQuestionOutputDataResponseToJSON,
    ConsentSaveCorporateIdPostRequestFromJSON,
    ConsentSaveCorporateIdPostRequestToJSON,
} from '../models';

export interface ConsentGetAnsweredCorporateIdGetRequest {
    corporateId: string;
    formId?: string;
    xPortalToken?: string;
}

export interface ConsentGetQuestionFormIdGetRequest {
    formId: string;
    xPortalToken?: string;
}

export interface ConsentSaveCorporateIdPostOperationRequest {
    corporateId: string;
    xPortalToken?: string;
    consentSaveCorporateIdPostRequest?: ConsentSaveCorporateIdPostRequest;
}

/**
 * 
 */
export class ConsentApi extends runtime.BaseAPI {

    /**
     */
    async consentGetAnsweredCorporateIdGetRaw(requestParameters: ConsentGetAnsweredCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ConsentAnsweredOutputDataResponse>> {
        if (requestParameters.corporateId === null || requestParameters.corporateId === undefined) {
            throw new runtime.RequiredError('corporateId','Required parameter requestParameters.corporateId was null or undefined when calling consentGetAnsweredCorporateIdGet.');
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
            path: `/Consent/GetAnswered/{corporateId}`.replace(`{${"corporateId"}}`, encodeURIComponent(String(requestParameters.corporateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ConsentAnsweredOutputDataResponseFromJSON(jsonValue));
    }

    /**
     */
    async consentGetAnsweredCorporateIdGet(requestParameters: ConsentGetAnsweredCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ConsentAnsweredOutputDataResponse> {
        const response = await this.consentGetAnsweredCorporateIdGetRaw(requestParameters, initOverrides);
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
    async consentSaveCorporateIdPostRaw(requestParameters: ConsentSaveCorporateIdPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.corporateId === null || requestParameters.corporateId === undefined) {
            throw new runtime.RequiredError('corporateId','Required parameter requestParameters.corporateId was null or undefined when calling consentSaveCorporateIdPost.');
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
            path: `/Consent/Save/{corporateId}`.replace(`{${"corporateId"}}`, encodeURIComponent(String(requestParameters.corporateId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ConsentSaveCorporateIdPostRequestToJSON(requestParameters.consentSaveCorporateIdPostRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async consentSaveCorporateIdPost(requestParameters: ConsentSaveCorporateIdPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.consentSaveCorporateIdPostRaw(requestParameters, initOverrides);
    }

}
