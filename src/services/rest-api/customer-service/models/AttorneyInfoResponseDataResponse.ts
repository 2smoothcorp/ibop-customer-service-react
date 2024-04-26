/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.313
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AttorneyInfoResponse } from './AttorneyInfoResponse';
import {
    AttorneyInfoResponseFromJSON,
    AttorneyInfoResponseFromJSONTyped,
    AttorneyInfoResponseToJSON,
} from './AttorneyInfoResponse';

/**
 * 
 * @export
 * @interface AttorneyInfoResponseDataResponse
 */
export interface AttorneyInfoResponseDataResponse {
    /**
     * 
     * @type {number}
     * @memberof AttorneyInfoResponseDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof AttorneyInfoResponseDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoResponseDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {AttorneyInfoResponse}
     * @memberof AttorneyInfoResponseDataResponse
     */
    data?: AttorneyInfoResponse | null;
}

/**
 * Check if a given object implements the AttorneyInfoResponseDataResponse interface.
 */
export function instanceOfAttorneyInfoResponseDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttorneyInfoResponseDataResponseFromJSON(json: any): AttorneyInfoResponseDataResponse {
    return AttorneyInfoResponseDataResponseFromJSONTyped(json, false);
}

export function AttorneyInfoResponseDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttorneyInfoResponseDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : AttorneyInfoResponseFromJSON(json['data']),
    };
}

export function AttorneyInfoResponseDataResponseToJSON(value?: AttorneyInfoResponseDataResponse | null): any {
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
        'data': AttorneyInfoResponseToJSON(value.data),
    };
}

