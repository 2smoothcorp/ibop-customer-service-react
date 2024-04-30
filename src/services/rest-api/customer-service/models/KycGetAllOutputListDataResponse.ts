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
import type { KycGetAllOutput } from './KycGetAllOutput';
import {
    KycGetAllOutputFromJSON,
    KycGetAllOutputFromJSONTyped,
    KycGetAllOutputToJSON,
} from './KycGetAllOutput';

/**
 * 
 * @export
 * @interface KycGetAllOutputListDataResponse
 */
export interface KycGetAllOutputListDataResponse {
    /**
     * 
     * @type {number}
     * @memberof KycGetAllOutputListDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof KycGetAllOutputListDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof KycGetAllOutputListDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {Array<KycGetAllOutput>}
     * @memberof KycGetAllOutputListDataResponse
     */
    data?: Array<KycGetAllOutput> | null;
}

/**
 * Check if a given object implements the KycGetAllOutputListDataResponse interface.
 */
export function instanceOfKycGetAllOutputListDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycGetAllOutputListDataResponseFromJSON(json: any): KycGetAllOutputListDataResponse {
    return KycGetAllOutputListDataResponseFromJSONTyped(json, false);
}

export function KycGetAllOutputListDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycGetAllOutputListDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(KycGetAllOutputFromJSON)),
    };
}

export function KycGetAllOutputListDataResponseToJSON(value?: KycGetAllOutputListDataResponse | null): any {
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
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(KycGetAllOutputToJSON)),
    };
}

