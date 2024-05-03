/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.338
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  TestDataChangeApprovalGetGetRequest,
  TestDataChangeApprovalSavePostRequest,
  TestDataChangeOutput,
} from '../models';
import {
    TestDataChangeApprovalGetGetRequestFromJSON,
    TestDataChangeApprovalGetGetRequestToJSON,
    TestDataChangeApprovalSavePostRequestFromJSON,
    TestDataChangeApprovalSavePostRequestToJSON,
    TestDataChangeOutputFromJSON,
    TestDataChangeOutputToJSON,
} from '../models';

export interface TestDataChangeApprovalApprovePostRequest {
    xPortalToken?: string;
    testDataChangeApprovalGetGetRequest?: TestDataChangeApprovalGetGetRequest;
}

export interface TestDataChangeApprovalGetGetOperationRequest {
    xPortalToken?: string;
    testDataChangeApprovalGetGetRequest?: TestDataChangeApprovalGetGetRequest;
}

export interface TestDataChangeApprovalRejectPostRequest {
    xPortalToken?: string;
    testDataChangeApprovalGetGetRequest?: TestDataChangeApprovalGetGetRequest;
}

export interface TestDataChangeApprovalSavePostOperationRequest {
    xPortalToken?: string;
    testDataChangeApprovalSavePostRequest?: TestDataChangeApprovalSavePostRequest;
}

/**
 * 
 */
export class TestDataChangeApprovalApi extends runtime.BaseAPI {

    /**
     */
    async testDataChangeApprovalApprovePostRaw(requestParameters: TestDataChangeApprovalApprovePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/TestDataChangeApproval/Approve`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TestDataChangeApprovalGetGetRequestToJSON(requestParameters.testDataChangeApprovalGetGetRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testDataChangeApprovalApprovePost(requestParameters: TestDataChangeApprovalApprovePostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testDataChangeApprovalApprovePostRaw(requestParameters, initOverrides);
    }

    /**
     */
    async testDataChangeApprovalGetGetRaw(requestParameters: TestDataChangeApprovalGetGetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TestDataChangeOutput>> {
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
            path: `/TestDataChangeApproval/Get`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: TestDataChangeApprovalGetGetRequestToJSON(requestParameters.testDataChangeApprovalGetGetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TestDataChangeOutputFromJSON(jsonValue));
    }

    /**
     */
    async testDataChangeApprovalGetGet(requestParameters: TestDataChangeApprovalGetGetOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TestDataChangeOutput> {
        const response = await this.testDataChangeApprovalGetGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async testDataChangeApprovalRejectPostRaw(requestParameters: TestDataChangeApprovalRejectPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/TestDataChangeApproval/Reject`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TestDataChangeApprovalGetGetRequestToJSON(requestParameters.testDataChangeApprovalGetGetRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testDataChangeApprovalRejectPost(requestParameters: TestDataChangeApprovalRejectPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testDataChangeApprovalRejectPostRaw(requestParameters, initOverrides);
    }

    /**
     */
    async testDataChangeApprovalSavePostRaw(requestParameters: TestDataChangeApprovalSavePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
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
            path: `/TestDataChangeApproval/Save`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TestDataChangeApprovalSavePostRequestToJSON(requestParameters.testDataChangeApprovalSavePostRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async testDataChangeApprovalSavePost(requestParameters: TestDataChangeApprovalSavePostOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.testDataChangeApprovalSavePostRaw(requestParameters, initOverrides);
    }

}
