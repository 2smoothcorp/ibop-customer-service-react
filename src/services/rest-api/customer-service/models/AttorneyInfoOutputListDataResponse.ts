/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.270
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AttorneyInfoOutput } from './AttorneyInfoOutput';
import {
    AttorneyInfoOutputFromJSON,
    AttorneyInfoOutputFromJSONTyped,
    AttorneyInfoOutputToJSON,
} from './AttorneyInfoOutput';

/**
 * 
 * @export
 * @interface AttorneyInfoOutputListDataResponse
 */
export interface AttorneyInfoOutputListDataResponse {
    /**
     * 
     * @type {number}
     * @memberof AttorneyInfoOutputListDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof AttorneyInfoOutputListDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutputListDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {Array<AttorneyInfoOutput>}
     * @memberof AttorneyInfoOutputListDataResponse
     */
    data?: Array<AttorneyInfoOutput> | null;
}

/**
 * Check if a given object implements the AttorneyInfoOutputListDataResponse interface.
 */
export function instanceOfAttorneyInfoOutputListDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttorneyInfoOutputListDataResponseFromJSON(json: any): AttorneyInfoOutputListDataResponse {
    return AttorneyInfoOutputListDataResponseFromJSONTyped(json, false);
}

export function AttorneyInfoOutputListDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttorneyInfoOutputListDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(AttorneyInfoOutputFromJSON)),
    };
}

export function AttorneyInfoOutputListDataResponseToJSON(value?: AttorneyInfoOutputListDataResponse | null): any {
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
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(AttorneyInfoOutputToJSON)),
    };
}

