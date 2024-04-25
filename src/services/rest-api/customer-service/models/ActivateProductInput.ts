/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.305
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
 * @interface ActivateProductInput
 */
export interface ActivateProductInput {
    /**
     * 
     * @type {string}
     * @memberof ActivateProductInput
     */
    refId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ActivateProductInput
     */
    refType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ActivateProductInput
     */
    accountNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ActivateProductInput
     */
    accountType?: string | null;
}

/**
 * Check if a given object implements the ActivateProductInput interface.
 */
export function instanceOfActivateProductInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ActivateProductInputFromJSON(json: any): ActivateProductInput {
    return ActivateProductInputFromJSONTyped(json, false);
}

export function ActivateProductInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivateProductInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'refId': !exists(json, 'refId') ? undefined : json['refId'],
        'refType': !exists(json, 'refType') ? undefined : json['refType'],
        'accountNo': !exists(json, 'accountNo') ? undefined : json['accountNo'],
        'accountType': !exists(json, 'accountType') ? undefined : json['accountType'],
    };
}

export function ActivateProductInputToJSON(value?: ActivateProductInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'refId': value.refId,
        'refType': value.refType,
        'accountNo': value.accountNo,
        'accountType': value.accountType,
    };
}

