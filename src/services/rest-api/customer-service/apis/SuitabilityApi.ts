/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.286
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

export interface SuitabilityAnswersCorparateIdGetRequest {
    corparateId: string;
    xPortalToken?: string;
}

export interface SuitabilityQuestionsCorparateIdGetRequest {
    corparateId: string;
    xPortalToken?: string;
}

export interface SuitabilitySaveCorparateIdPostRequest {
    corparateId: string;
    xPortalToken?: string;
    answerInput?: Array<AnswerInput>;
}

export interface SuitabilitySummaryScoreCorparateIdGetRequest {
    corparateId: string;
    xPortalToken?: string;
}

/**
 * 
 */
export class SuitabilityApi extends runtime.BaseAPI {

    /**
     * Get All Answers By Flow ID
     */
    async suitabilityAnswersCorparateIdGetRaw(requestParameters: SuitabilityAnswersCorparateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnswerListDataResponse>> {
        if (requestParameters.corparateId === null || requestParameters.corparateId === undefined) {
            throw new runtime.RequiredError('corparateId','Required parameter requestParameters.corparateId was null or undefined when calling suitabilityAnswersCorparateIdGet.');
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
            path: `/Suitability/Answers/{corparateId}`.replace(`{${"corparateId"}}`, encodeURIComponent(String(requestParameters.corparateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnswerListDataResponseFromJSON(jsonValue));
    }

    /**
     * Get All Answers By Flow ID
     */
    async suitabilityAnswersCorparateIdGet(requestParameters: SuitabilityAnswersCorparateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnswerListDataResponse> {
        const response = await this.suitabilityAnswersCorparateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Question of Suitability Test
     */
    async suitabilityQuestionsCorparateIdGetRaw(requestParameters: SuitabilityQuestionsCorparateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuestionsOutputDataResponse>> {
        if (requestParameters.corparateId === null || requestParameters.corparateId === undefined) {
            throw new runtime.RequiredError('corparateId','Required parameter requestParameters.corparateId was null or undefined when calling suitabilityQuestionsCorparateIdGet.');
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
            path: `/Suitability/Questions/{corparateId}`.replace(`{${"corparateId"}}`, encodeURIComponent(String(requestParameters.corparateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QuestionsOutputDataResponseFromJSON(jsonValue));
    }

    /**
     * Get Question of Suitability Test
     */
    async suitabilityQuestionsCorparateIdGet(requestParameters: SuitabilityQuestionsCorparateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuestionsOutputDataResponse> {
        const response = await this.suitabilityQuestionsCorparateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Save Answers By customerId
     */
    async suitabilitySaveCorparateIdPostRaw(requestParameters: SuitabilitySaveCorparateIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnswerListDataResponse>> {
        if (requestParameters.corparateId === null || requestParameters.corparateId === undefined) {
            throw new runtime.RequiredError('corparateId','Required parameter requestParameters.corparateId was null or undefined when calling suitabilitySaveCorparateIdPost.');
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
            path: `/Suitability/Save/{corparateId}`.replace(`{${"corparateId"}}`, encodeURIComponent(String(requestParameters.corparateId))),
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
    async suitabilitySaveCorparateIdPost(requestParameters: SuitabilitySaveCorparateIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnswerListDataResponse> {
        const response = await this.suitabilitySaveCorparateIdPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get All Answers By Flow ID
     */
    async suitabilitySummaryScoreCorparateIdGetRaw(requestParameters: SuitabilitySummaryScoreCorparateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Int32NullableDataResponse>> {
        if (requestParameters.corparateId === null || requestParameters.corparateId === undefined) {
            throw new runtime.RequiredError('corparateId','Required parameter requestParameters.corparateId was null or undefined when calling suitabilitySummaryScoreCorparateIdGet.');
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
            path: `/Suitability/SummaryScore/{corparateId}`.replace(`{${"corparateId"}}`, encodeURIComponent(String(requestParameters.corparateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => Int32NullableDataResponseFromJSON(jsonValue));
    }

    /**
     * Get All Answers By Flow ID
     */
    async suitabilitySummaryScoreCorparateIdGet(requestParameters: SuitabilitySummaryScoreCorparateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Int32NullableDataResponse> {
        const response = await this.suitabilitySummaryScoreCorparateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
