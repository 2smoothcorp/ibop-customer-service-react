/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.299
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SpouseInfoResponse } from './SpouseInfoResponse';
import {
    SpouseInfoResponseFromJSON,
    SpouseInfoResponseFromJSONTyped,
    SpouseInfoResponseToJSON,
} from './SpouseInfoResponse';

/**
 * 
 * @export
 * @interface SpouseInfoResponseDataResponse
 */
export interface SpouseInfoResponseDataResponse {
    /**
     * 
     * @type {number}
     * @memberof SpouseInfoResponseDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof SpouseInfoResponseDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof SpouseInfoResponseDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {SpouseInfoResponse}
     * @memberof SpouseInfoResponseDataResponse
     */
    data?: SpouseInfoResponse | null;
}

/**
 * Check if a given object implements the SpouseInfoResponseDataResponse interface.
 */
export function instanceOfSpouseInfoResponseDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SpouseInfoResponseDataResponseFromJSON(json: any): SpouseInfoResponseDataResponse {
    return SpouseInfoResponseDataResponseFromJSONTyped(json, false);
}

export function SpouseInfoResponseDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpouseInfoResponseDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : SpouseInfoResponseFromJSON(json['data']),
    };
}

export function SpouseInfoResponseDataResponseToJSON(value?: SpouseInfoResponseDataResponse | null): any {
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
        'data': SpouseInfoResponseToJSON(value.data),
    };
}

