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
import type { DataChangeKey } from './DataChangeKey';
import {
    DataChangeKeyFromJSON,
    DataChangeKeyFromJSONTyped,
    DataChangeKeyToJSON,
} from './DataChangeKey';

/**
 * 
 * @export
 * @interface TestDataChangeApprovalSavePostRequest
 */
export interface TestDataChangeApprovalSavePostRequest {
    /**
     * 
     * @type {DataChangeKey}
     * @memberof TestDataChangeApprovalSavePostRequest
     */
    key?: DataChangeKey | null;
    /**
     * 
     * @type {string}
     * @memberof TestDataChangeApprovalSavePostRequest
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TestDataChangeApprovalSavePostRequest
     */
    lastName?: string | null;
}

/**
 * Check if a given object implements the TestDataChangeApprovalSavePostRequest interface.
 */
export function instanceOfTestDataChangeApprovalSavePostRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TestDataChangeApprovalSavePostRequestFromJSON(json: any): TestDataChangeApprovalSavePostRequest {
    return TestDataChangeApprovalSavePostRequestFromJSONTyped(json, false);
}

export function TestDataChangeApprovalSavePostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TestDataChangeApprovalSavePostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': !exists(json, 'key') ? undefined : DataChangeKeyFromJSON(json['key']),
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
    };
}

export function TestDataChangeApprovalSavePostRequestToJSON(value?: TestDataChangeApprovalSavePostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': DataChangeKeyToJSON(value.key),
        'firstName': value.firstName,
        'lastName': value.lastName,
    };
}

