/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.328
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
 * @interface AccountReserveAccountNoPostRequest
 */
export interface AccountReserveAccountNoPostRequest {
    /**
     * 
     * @type {string}
     * @memberof AccountReserveAccountNoPostRequest
     */
    refId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountReserveAccountNoPostRequest
     */
    refType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountReserveAccountNoPostRequest
     */
    accountType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AccountReserveAccountNoPostRequest
     */
    accountNo?: string | null;
}

/**
 * Check if a given object implements the AccountReserveAccountNoPostRequest interface.
 */
export function instanceOfAccountReserveAccountNoPostRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountReserveAccountNoPostRequestFromJSON(json: any): AccountReserveAccountNoPostRequest {
    return AccountReserveAccountNoPostRequestFromJSONTyped(json, false);
}

export function AccountReserveAccountNoPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountReserveAccountNoPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'refId': !exists(json, 'refId') ? undefined : json['refId'],
        'refType': !exists(json, 'refType') ? undefined : json['refType'],
        'accountType': !exists(json, 'accountType') ? undefined : json['accountType'],
        'accountNo': !exists(json, 'accountNo') ? undefined : json['accountNo'],
    };
}

export function AccountReserveAccountNoPostRequestToJSON(value?: AccountReserveAccountNoPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'refId': value.refId,
        'refType': value.refType,
        'accountType': value.accountType,
        'accountNo': value.accountNo,
    };
}

