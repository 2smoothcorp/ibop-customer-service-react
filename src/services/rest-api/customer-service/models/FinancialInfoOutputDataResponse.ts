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
import type { FinancialInfoOutput } from './FinancialInfoOutput';
import {
    FinancialInfoOutputFromJSON,
    FinancialInfoOutputFromJSONTyped,
    FinancialInfoOutputToJSON,
} from './FinancialInfoOutput';

/**
 * 
 * @export
 * @interface FinancialInfoOutputDataResponse
 */
export interface FinancialInfoOutputDataResponse {
    /**
     * 
     * @type {number}
     * @memberof FinancialInfoOutputDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof FinancialInfoOutputDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialInfoOutputDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {FinancialInfoOutput}
     * @memberof FinancialInfoOutputDataResponse
     */
    data?: FinancialInfoOutput | null;
}

/**
 * Check if a given object implements the FinancialInfoOutputDataResponse interface.
 */
export function instanceOfFinancialInfoOutputDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FinancialInfoOutputDataResponseFromJSON(json: any): FinancialInfoOutputDataResponse {
    return FinancialInfoOutputDataResponseFromJSONTyped(json, false);
}

export function FinancialInfoOutputDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinancialInfoOutputDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : FinancialInfoOutputFromJSON(json['data']),
    };
}

export function FinancialInfoOutputDataResponseToJSON(value?: FinancialInfoOutputDataResponse | null): any {
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
        'data': FinancialInfoOutputToJSON(value.data),
    };
}

