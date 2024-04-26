/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.316
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
  QuestionsOutputDataResponse,
} from '../models';
import {
    AnswerInputFromJSON,
    AnswerInputToJSON,
    AnswerListDataResponseFromJSON,
    AnswerListDataResponseToJSON,
    QuestionsOutputDataResponseFromJSON,
    QuestionsOutputDataResponseToJSON,
} from '../models';

export interface KnowledgeAssessmentsAnswersCorparateIdGetRequest {
    corparateId: string;
    xPortalToken?: string;
}

export interface KnowledgeAssessmentsQuestionsGetRequest {
    xPortalToken?: string;
}

export interface KnowledgeAssessmentsSaveCorparateIdPostRequest {
    corparateId: string;
    xPortalToken?: string;
    answerInput?: Array<AnswerInput>;
}

/**
 * 
 */
export class KnowledgeAssessmentsApi extends runtime.BaseAPI {

    /**
     * Retrieves answers for a knowledge assessment or suitability test based on a specific flow ID.
     */
    async knowledgeAssessmentsAnswersCorparateIdGetRaw(requestParameters: KnowledgeAssessmentsAnswersCorparateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnswerListDataResponse>> {
        if (requestParameters.corparateId === null || requestParameters.corparateId === undefined) {
            throw new runtime.RequiredError('corparateId','Required parameter requestParameters.corparateId was null or undefined when calling knowledgeAssessmentsAnswersCorparateIdGet.');
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
            path: `/KnowledgeAssessments/Answers/{corparateId}`.replace(`{${"corparateId"}}`, encodeURIComponent(String(requestParameters.corparateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnswerListDataResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves answers for a knowledge assessment or suitability test based on a specific flow ID.
     */
    async knowledgeAssessmentsAnswersCorparateIdGet(requestParameters: KnowledgeAssessmentsAnswersCorparateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnswerListDataResponse> {
        const response = await this.knowledgeAssessmentsAnswersCorparateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieves questions for a knowledge assessment or suitability test.
     */
    async knowledgeAssessmentsQuestionsGetRaw(requestParameters: KnowledgeAssessmentsQuestionsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuestionsOutputDataResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/KnowledgeAssessments/Questions`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QuestionsOutputDataResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves questions for a knowledge assessment or suitability test.
     */
    async knowledgeAssessmentsQuestionsGet(requestParameters: KnowledgeAssessmentsQuestionsGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuestionsOutputDataResponse> {
        const response = await this.knowledgeAssessmentsQuestionsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Saves answers for a knowledge assessment or suitability test based on a specific flow ID.
     */
    async knowledgeAssessmentsSaveCorparateIdPostRaw(requestParameters: KnowledgeAssessmentsSaveCorparateIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AnswerListDataResponse>> {
        if (requestParameters.corparateId === null || requestParameters.corparateId === undefined) {
            throw new runtime.RequiredError('corparateId','Required parameter requestParameters.corparateId was null or undefined when calling knowledgeAssessmentsSaveCorparateIdPost.');
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
            path: `/KnowledgeAssessments/Save/{corparateId}`.replace(`{${"corparateId"}}`, encodeURIComponent(String(requestParameters.corparateId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.answerInput.map(AnswerInputToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AnswerListDataResponseFromJSON(jsonValue));
    }

    /**
     * Saves answers for a knowledge assessment or suitability test based on a specific flow ID.
     */
    async knowledgeAssessmentsSaveCorparateIdPost(requestParameters: KnowledgeAssessmentsSaveCorparateIdPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AnswerListDataResponse> {
        const response = await this.knowledgeAssessmentsSaveCorparateIdPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
