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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ReserveAccountNoInput
 */
export interface ReserveAccountNoInput {
    /**
     * 
     * @type {string}
     * @memberof ReserveAccountNoInput
     */
    refId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReserveAccountNoInput
     */
    refType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReserveAccountNoInput
     */
    accountType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReserveAccountNoInput
     */
    accountNo?: string | null;
}

/**
 * Check if a given object implements the ReserveAccountNoInput interface.
 */
export function instanceOfReserveAccountNoInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReserveAccountNoInputFromJSON(json: any): ReserveAccountNoInput {
    return ReserveAccountNoInputFromJSONTyped(json, false);
}

export function ReserveAccountNoInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReserveAccountNoInput {
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

export function ReserveAccountNoInputToJSON(value?: ReserveAccountNoInput | null): any {
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

