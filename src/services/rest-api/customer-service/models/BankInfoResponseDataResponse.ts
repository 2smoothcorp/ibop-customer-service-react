/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.333
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BankInfoResponse } from './BankInfoResponse';
import {
    BankInfoResponseFromJSON,
    BankInfoResponseFromJSONTyped,
    BankInfoResponseToJSON,
} from './BankInfoResponse';

/**
 * 
 * @export
 * @interface BankInfoResponseDataResponse
 */
export interface BankInfoResponseDataResponse {
    /**
     * 
     * @type {number}
     * @memberof BankInfoResponseDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof BankInfoResponseDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof BankInfoResponseDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {BankInfoResponse}
     * @memberof BankInfoResponseDataResponse
     */
    data?: BankInfoResponse | null;
}

/**
 * Check if a given object implements the BankInfoResponseDataResponse interface.
 */
export function instanceOfBankInfoResponseDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BankInfoResponseDataResponseFromJSON(json: any): BankInfoResponseDataResponse {
    return BankInfoResponseDataResponseFromJSONTyped(json, false);
}

export function BankInfoResponseDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankInfoResponseDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : BankInfoResponseFromJSON(json['data']),
    };
}

export function BankInfoResponseDataResponseToJSON(value?: BankInfoResponseDataResponse | null): any {
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
        'data': BankInfoResponseToJSON(value.data),
    };
}

