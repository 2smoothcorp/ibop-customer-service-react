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
import type { Attorney } from './Attorney';
import {
    AttorneyFromJSON,
    AttorneyFromJSONTyped,
    AttorneyToJSON,
} from './Attorney';

/**
 * 
 * @export
 * @interface AttorneyDataResponse
 */
export interface AttorneyDataResponse {
    /**
     * 
     * @type {number}
     * @memberof AttorneyDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof AttorneyDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {Attorney}
     * @memberof AttorneyDataResponse
     */
    data?: Attorney | null;
}

/**
 * Check if a given object implements the AttorneyDataResponse interface.
 */
export function instanceOfAttorneyDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttorneyDataResponseFromJSON(json: any): AttorneyDataResponse {
    return AttorneyDataResponseFromJSONTyped(json, false);
}

export function AttorneyDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttorneyDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : AttorneyFromJSON(json['data']),
    };
}

export function AttorneyDataResponseToJSON(value?: AttorneyDataResponse | null): any {
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
        'data': AttorneyToJSON(value.data),
    };
}

