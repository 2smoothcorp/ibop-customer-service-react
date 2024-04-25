/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.298
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
 * @interface IsValidOutput
 */
export interface IsValidOutput {
    /**
     * 
     * @type {string}
     * @memberof IsValidOutput
     */
    isValid?: string | null;
    /**
     * 
     * @type {string}
     * @memberof IsValidOutput
     */
    description?: string | null;
}

/**
 * Check if a given object implements the IsValidOutput interface.
 */
export function instanceOfIsValidOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IsValidOutputFromJSON(json: any): IsValidOutput {
    return IsValidOutputFromJSONTyped(json, false);
}

export function IsValidOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): IsValidOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isValid': !exists(json, 'isValid') ? undefined : json['isValid'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function IsValidOutputToJSON(value?: IsValidOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isValid': value.isValid,
        'description': value.description,
    };
}

