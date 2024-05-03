/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.346
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BankInfoOutput } from './BankInfoOutput';
import {
    BankInfoOutputFromJSON,
    BankInfoOutputFromJSONTyped,
    BankInfoOutputToJSON,
} from './BankInfoOutput';

/**
 * 
 * @export
 * @interface BankInfoOutputListDataResponse
 */
export interface BankInfoOutputListDataResponse {
    /**
     * 
     * @type {number}
     * @memberof BankInfoOutputListDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof BankInfoOutputListDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof BankInfoOutputListDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {Array<BankInfoOutput>}
     * @memberof BankInfoOutputListDataResponse
     */
    data?: Array<BankInfoOutput> | null;
}

/**
 * Check if a given object implements the BankInfoOutputListDataResponse interface.
 */
export function instanceOfBankInfoOutputListDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BankInfoOutputListDataResponseFromJSON(json: any): BankInfoOutputListDataResponse {
    return BankInfoOutputListDataResponseFromJSONTyped(json, false);
}

export function BankInfoOutputListDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankInfoOutputListDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(BankInfoOutputFromJSON)),
    };
}

export function BankInfoOutputListDataResponseToJSON(value?: BankInfoOutputListDataResponse | null): any {
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
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(BankInfoOutputToJSON)),
    };
}

