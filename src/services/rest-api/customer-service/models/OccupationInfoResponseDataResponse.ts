/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.332
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { OccupationInfoResponse } from './OccupationInfoResponse';
import {
    OccupationInfoResponseFromJSON,
    OccupationInfoResponseFromJSONTyped,
    OccupationInfoResponseToJSON,
} from './OccupationInfoResponse';

/**
 * 
 * @export
 * @interface OccupationInfoResponseDataResponse
 */
export interface OccupationInfoResponseDataResponse {
    /**
     * 
     * @type {number}
     * @memberof OccupationInfoResponseDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof OccupationInfoResponseDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof OccupationInfoResponseDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {OccupationInfoResponse}
     * @memberof OccupationInfoResponseDataResponse
     */
    data?: OccupationInfoResponse | null;
}

/**
 * Check if a given object implements the OccupationInfoResponseDataResponse interface.
 */
export function instanceOfOccupationInfoResponseDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OccupationInfoResponseDataResponseFromJSON(json: any): OccupationInfoResponseDataResponse {
    return OccupationInfoResponseDataResponseFromJSONTyped(json, false);
}

export function OccupationInfoResponseDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OccupationInfoResponseDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : OccupationInfoResponseFromJSON(json['data']),
    };
}

export function OccupationInfoResponseDataResponseToJSON(value?: OccupationInfoResponseDataResponse | null): any {
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
        'data': OccupationInfoResponseToJSON(value.data),
    };
}

