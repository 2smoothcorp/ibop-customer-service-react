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
  AnswerInput,
  AnswerListDataResponse,
  Int32NullableDataResponse,
  QuestionsOutputDataResponse,
} from '../models';
import {
    AnswerInputFromJSON,
    AnswerInputToJSON,
    AnswerListDataResponseFromJSON,
    AnswerListDataResponseToJSON,
    Int32NullableDataResponseFromJSON,
    Int32NullableDataResponseToJSON,
    QuestionsOutputDataResponseFromJSON,
    QuestionsOutputDataResponseToJSON,
} from '../models';

export interface SuitabilityAnswersCorporateIdGetRequest {
    corporateId: string;
    xPortalToken?: string;
}

export interface SuitabilityQuestionsCorporateIdGetRequest {
    corporateId: string;
    xPortalToken?: string;
}

export interface SuitabilitySaveCorporateIdPostRequest {
    corporateId: string;
    xPortalToken?: string;
    answerInput?: Array<AnswerInput>;
}

export interface SuitabilitySummaryScoreCorporateIdGetRequest {
    corporateId: string;
    xPortalToken?: string;
}

/**
 * 
 */
export class SuitabilityApi extends runtime.BaseAPI {

    /**
     * Get All Answers By Flow ID
     */
    async suitabilityAnswersCorporateIdGetRaw(requestParameters: SuitabilityAnswersCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnswerListDataResponse>> {
        if (requestParameters.corporateId === null || requestParameters.corporateId === undefined) {
            throw new runtime.RequiredError('corporateId','Required parameter requestParameters.corporateId was null or undefined when calling suitabilityAnswersCorporateIdGet.');
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
            path: `/Suitability/Answers/{corporateId}`.replace(`{${"corporateId"}}`, encodeURIComponent(String(requestParameters.corporateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnswerListDataResponseFromJSON(jsonValue));
    }

    /**
     * Get All Answers By Flow ID
     */
    async suitabilityAnswersCorporateIdGet(requestParameters: SuitabilityAnswersCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnswerListDataResponse> {
        const response = await this.suitabilityAnswersCorporateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Question of Suitability Test
     */
    async suitabilityQuestionsCorporateIdGetRaw(requestParameters: SuitabilityQuestionsCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuestionsOutputDataResponse>> {
        if (requestParameters.corporateId === null || requestParameters.corporateId === undefined) {
            throw new runtime.RequiredError('corporateId','Required parameter requestParameters.corporateId was null or undefined when calling suitabilityQuestionsCorporateIdGet.');
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
            path: `/Suitability/Questions/{corporateId}`.replace(`{${"corporateId"}}`, encodeURIComponent(String(requestParameters.corporateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QuestionsOutputDataResponseFromJSON(jsonValue));
    }

    /**
     * Get Question of Suitability Test
     */
    async suitabilityQuestionsCorporateIdGet(requestParameters: SuitabilityQuestionsCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuestionsOutputDataResponse> {
        const response = await this.suitabilityQuestionsCorporateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Save Answers By customerId
     */
    async suitabilitySaveCorporateIdPostRaw(requestParameters: SuitabilitySaveCorporateIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnswerListDataResponse>> {
        if (requestParameters.corporateId === null || requestParameters.corporateId === undefined) {
            throw new runtime.RequiredError('corporateId','Required parameter requestParameters.corporateId was null or undefined when calling suitabilitySaveCorporateIdPost.');
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
            path: `/Suitability/Save/{corporateId}`.replace(`{${"corporateId"}}`, encodeURIComponent(String(requestParameters.corporateId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.answerInput.map(AnswerInputToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnswerListDataResponseFromJSON(jsonValue));
    }

    /**
     * Save Answers By customerId
     */
    async suitabilitySaveCorporateIdPost(requestParameters: SuitabilitySaveCorporateIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnswerListDataResponse> {
        const response = await this.suitabilitySaveCorporateIdPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get All Answers By Flow ID
     */
    async suitabilitySummaryScoreCorporateIdGetRaw(requestParameters: SuitabilitySummaryScoreCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Int32NullableDataResponse>> {
        if (requestParameters.corporateId === null || requestParameters.corporateId === undefined) {
            throw new runtime.RequiredError('corporateId','Required parameter requestParameters.corporateId was null or undefined when calling suitabilitySummaryScoreCorporateIdGet.');
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
            path: `/Suitability/SummaryScore/{corporateId}`.replace(`{${"corporateId"}}`, encodeURIComponent(String(requestParameters.corporateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Int32NullableDataResponseFromJSON(jsonValue));
    }

    /**
     * Get All Answers By Flow ID
     */
    async suitabilitySummaryScoreCorporateIdGet(requestParameters: SuitabilitySummaryScoreCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Int32NullableDataResponse> {
        const response = await this.suitabilitySummaryScoreCorporateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
