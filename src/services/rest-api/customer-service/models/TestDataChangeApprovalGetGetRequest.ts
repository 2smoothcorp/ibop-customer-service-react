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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TestDataChangeApprovalGetGetRequest
 */
export interface TestDataChangeApprovalGetGetRequest {
    /**
     * 
     * @type {string}
     * @memberof TestDataChangeApprovalGetGetRequest
     */
    dataType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TestDataChangeApprovalGetGetRequest
     */
    corpId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TestDataChangeApprovalGetGetRequest
     */
    refId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TestDataChangeApprovalGetGetRequest
     */
    refType?: string | null;
}

/**
 * Check if a given object implements the TestDataChangeApprovalGetGetRequest interface.
 */
export function instanceOfTestDataChangeApprovalGetGetRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TestDataChangeApprovalGetGetRequestFromJSON(json: any): TestDataChangeApprovalGetGetRequest {
    return TestDataChangeApprovalGetGetRequestFromJSONTyped(json, false);
}

export function TestDataChangeApprovalGetGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TestDataChangeApprovalGetGetRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'corpId': !exists(json, 'corpId') ? undefined : json['corpId'],
        'refId': !exists(json, 'refId') ? undefined : json['refId'],
        'refType': !exists(json, 'refType') ? undefined : json['refType'],
    };
}

export function TestDataChangeApprovalGetGetRequestToJSON(value?: TestDataChangeApprovalGetGetRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataType': value.dataType,
        'corpId': value.corpId,
        'refId': value.refId,
        'refType': value.refType,
    };
}

