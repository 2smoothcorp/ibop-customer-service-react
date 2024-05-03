/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.338
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { EmergencyContactInfoResponse } from './EmergencyContactInfoResponse';
import {
    EmergencyContactInfoResponseFromJSON,
    EmergencyContactInfoResponseFromJSONTyped,
    EmergencyContactInfoResponseToJSON,
} from './EmergencyContactInfoResponse';

/**
 * 
 * @export
 * @interface EmergencyContactInfoResponseDataResponse
 */
export interface EmergencyContactInfoResponseDataResponse {
    /**
     * 
     * @type {number}
     * @memberof EmergencyContactInfoResponseDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof EmergencyContactInfoResponseDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof EmergencyContactInfoResponseDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {EmergencyContactInfoResponse}
     * @memberof EmergencyContactInfoResponseDataResponse
     */
    data?: EmergencyContactInfoResponse | null;
}

/**
 * Check if a given object implements the EmergencyContactInfoResponseDataResponse interface.
 */
export function instanceOfEmergencyContactInfoResponseDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmergencyContactInfoResponseDataResponseFromJSON(json: any): EmergencyContactInfoResponseDataResponse {
    return EmergencyContactInfoResponseDataResponseFromJSONTyped(json, false);
}

export function EmergencyContactInfoResponseDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmergencyContactInfoResponseDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : EmergencyContactInfoResponseFromJSON(json['data']),
    };
}

export function EmergencyContactInfoResponseDataResponseToJSON(value?: EmergencyContactInfoResponseDataResponse | null): any {
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
        'data': EmergencyContactInfoResponseToJSON(value.data),
    };
}

