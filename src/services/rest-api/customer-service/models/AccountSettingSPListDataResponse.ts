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
import type { AccountSettingSP } from './AccountSettingSP';
import {
    AccountSettingSPFromJSON,
    AccountSettingSPFromJSONTyped,
    AccountSettingSPToJSON,
} from './AccountSettingSP';

/**
 * 
 * @export
 * @interface AccountSettingSPListDataResponse
 */
export interface AccountSettingSPListDataResponse {
    /**
     * 
     * @type {number}
     * @memberof AccountSettingSPListDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof AccountSettingSPListDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof AccountSettingSPListDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {Array<AccountSettingSP>}
     * @memberof AccountSettingSPListDataResponse
     */
    data?: Array<AccountSettingSP> | null;
}

/**
 * Check if a given object implements the AccountSettingSPListDataResponse interface.
 */
export function instanceOfAccountSettingSPListDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountSettingSPListDataResponseFromJSON(json: any): AccountSettingSPListDataResponse {
    return AccountSettingSPListDataResponseFromJSONTyped(json, false);
}

export function AccountSettingSPListDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountSettingSPListDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(AccountSettingSPFromJSON)),
    };
}

export function AccountSettingSPListDataResponseToJSON(value?: AccountSettingSPListDataResponse | null): any {
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
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(AccountSettingSPToJSON)),
    };
}

