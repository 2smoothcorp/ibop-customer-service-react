/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.310
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
 * @interface TestDataChangeOutput
 */
export interface TestDataChangeOutput {
    /**
     * 
     * @type {string}
     * @memberof TestDataChangeOutput
     */
    firstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TestDataChangeOutput
     */
    lastName?: string | null;
}

/**
 * Check if a given object implements the TestDataChangeOutput interface.
 */
export function instanceOfTestDataChangeOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TestDataChangeOutputFromJSON(json: any): TestDataChangeOutput {
    return TestDataChangeOutputFromJSONTyped(json, false);
}

export function TestDataChangeOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): TestDataChangeOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
    };
}

export function TestDataChangeOutputToJSON(value?: TestDataChangeOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'lastName': value.lastName,
    };
}

