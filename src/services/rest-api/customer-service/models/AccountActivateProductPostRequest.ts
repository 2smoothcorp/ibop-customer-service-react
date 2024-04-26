/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.318
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
 * @interface AccountActivateProductPostRequest
 */
export interface AccountActivateProductPostRequest {
    /**
     * 
     * @type {string}
     * @memberof AccountActivateProductPostRequest
     */
    refId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountActivateProductPostRequest
     */
    refType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountActivateProductPostRequest
     */
    accountNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountActivateProductPostRequest
     */
    accountType?: string | null;
}

/**
 * Check if a given object implements the AccountActivateProductPostRequest interface.
 */
export function instanceOfAccountActivateProductPostRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountActivateProductPostRequestFromJSON(json: any): AccountActivateProductPostRequest {
    return AccountActivateProductPostRequestFromJSONTyped(json, false);
}

export function AccountActivateProductPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountActivateProductPostRequest {
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

export function AccountActivateProductPostRequestToJSON(value?: AccountActivateProductPostRequest | null): any {
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

