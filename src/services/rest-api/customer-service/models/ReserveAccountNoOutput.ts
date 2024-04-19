/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.268
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
 * @interface ReserveAccountNoOutput
 */
export interface ReserveAccountNoOutput {
    /**
     * 
     * @type {string}
     * @memberof ReserveAccountNoOutput
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReserveAccountNoOutput
     */
    reason?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ReserveAccountNoOutput
     */
    reservedAccountNo?: string | null;
}

/**
 * Check if a given object implements the ReserveAccountNoOutput interface.
 */
export function instanceOfReserveAccountNoOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReserveAccountNoOutputFromJSON(json: any): ReserveAccountNoOutput {
    return ReserveAccountNoOutputFromJSONTyped(json, false);
}

export function ReserveAccountNoOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReserveAccountNoOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'reason': !exists(json, 'reason') ? undefined : json['reason'],
        'reservedAccountNo': !exists(json, 'reservedAccountNo') ? undefined : json['reservedAccountNo'],
    };
}

export function ReserveAccountNoOutputToJSON(value?: ReserveAccountNoOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'reason': value.reason,
        'reservedAccountNo': value.reservedAccountNo,
    };
}

