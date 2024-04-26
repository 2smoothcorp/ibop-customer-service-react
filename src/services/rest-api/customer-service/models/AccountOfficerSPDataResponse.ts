/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.313
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AccountOfficerSP } from './AccountOfficerSP';
import {
    AccountOfficerSPFromJSON,
    AccountOfficerSPFromJSONTyped,
    AccountOfficerSPToJSON,
} from './AccountOfficerSP';

/**
 * 
 * @export
 * @interface AccountOfficerSPDataResponse
 */
export interface AccountOfficerSPDataResponse {
    /**
     * 
     * @type {number}
     * @memberof AccountOfficerSPDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof AccountOfficerSPDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof AccountOfficerSPDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {AccountOfficerSP}
     * @memberof AccountOfficerSPDataResponse
     */
    data?: AccountOfficerSP | null;
}

/**
 * Check if a given object implements the AccountOfficerSPDataResponse interface.
 */
export function instanceOfAccountOfficerSPDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountOfficerSPDataResponseFromJSON(json: any): AccountOfficerSPDataResponse {
    return AccountOfficerSPDataResponseFromJSONTyped(json, false);
}

export function AccountOfficerSPDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountOfficerSPDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : AccountOfficerSPFromJSON(json['data']),
    };
}

export function AccountOfficerSPDataResponseToJSON(value?: AccountOfficerSPDataResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'errors': value.errors,
        'message': value.message,
        'data': AccountOfficerSPToJSON(value.data),
    };
}

