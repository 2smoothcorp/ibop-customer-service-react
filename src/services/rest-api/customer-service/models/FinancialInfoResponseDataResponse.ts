/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.330
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FinancialInfoResponse } from './FinancialInfoResponse';
import {
    FinancialInfoResponseFromJSON,
    FinancialInfoResponseFromJSONTyped,
    FinancialInfoResponseToJSON,
} from './FinancialInfoResponse';

/**
 * 
 * @export
 * @interface FinancialInfoResponseDataResponse
 */
export interface FinancialInfoResponseDataResponse {
    /**
     * 
     * @type {number}
     * @memberof FinancialInfoResponseDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof FinancialInfoResponseDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialInfoResponseDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {FinancialInfoResponse}
     * @memberof FinancialInfoResponseDataResponse
     */
    data?: FinancialInfoResponse | null;
}

/**
 * Check if a given object implements the FinancialInfoResponseDataResponse interface.
 */
export function instanceOfFinancialInfoResponseDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FinancialInfoResponseDataResponseFromJSON(json: any): FinancialInfoResponseDataResponse {
    return FinancialInfoResponseDataResponseFromJSONTyped(json, false);
}

export function FinancialInfoResponseDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinancialInfoResponseDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : FinancialInfoResponseFromJSON(json['data']),
    };
}

export function FinancialInfoResponseDataResponseToJSON(value?: FinancialInfoResponseDataResponse | null): any {
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
        'data': FinancialInfoResponseToJSON(value.data),
    };
}

