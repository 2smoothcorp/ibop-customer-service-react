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
import type { KycAddressOutput } from './KycAddressOutput';
import {
    KycAddressOutputFromJSON,
    KycAddressOutputFromJSONTyped,
    KycAddressOutputToJSON,
} from './KycAddressOutput';

/**
 * 
 * @export
 * @interface KycAddressOutputListDataResponse
 */
export interface KycAddressOutputListDataResponse {
    /**
     * 
     * @type {number}
     * @memberof KycAddressOutputListDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof KycAddressOutputListDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutputListDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {Array<KycAddressOutput>}
     * @memberof KycAddressOutputListDataResponse
     */
    data?: Array<KycAddressOutput> | null;
}

/**
 * Check if a given object implements the KycAddressOutputListDataResponse interface.
 */
export function instanceOfKycAddressOutputListDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycAddressOutputListDataResponseFromJSON(json: any): KycAddressOutputListDataResponse {
    return KycAddressOutputListDataResponseFromJSONTyped(json, false);
}

export function KycAddressOutputListDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycAddressOutputListDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(KycAddressOutputFromJSON)),
    };
}

export function KycAddressOutputListDataResponseToJSON(value?: KycAddressOutputListDataResponse | null): any {
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
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(KycAddressOutputToJSON)),
    };
}

