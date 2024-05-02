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
import type { PersonalInfoResponse } from './PersonalInfoResponse';
import {
    PersonalInfoResponseFromJSON,
    PersonalInfoResponseFromJSONTyped,
    PersonalInfoResponseToJSON,
} from './PersonalInfoResponse';

/**
 * 
 * @export
 * @interface PersonalInfoResponseDataResponse
 */
export interface PersonalInfoResponseDataResponse {
    /**
     * 
     * @type {number}
     * @memberof PersonalInfoResponseDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof PersonalInfoResponseDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoResponseDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {PersonalInfoResponse}
     * @memberof PersonalInfoResponseDataResponse
     */
    data?: PersonalInfoResponse | null;
}

/**
 * Check if a given object implements the PersonalInfoResponseDataResponse interface.
 */
export function instanceOfPersonalInfoResponseDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PersonalInfoResponseDataResponseFromJSON(json: any): PersonalInfoResponseDataResponse {
    return PersonalInfoResponseDataResponseFromJSONTyped(json, false);
}

export function PersonalInfoResponseDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonalInfoResponseDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : PersonalInfoResponseFromJSON(json['data']),
    };
}

export function PersonalInfoResponseDataResponseToJSON(value?: PersonalInfoResponseDataResponse | null): any {
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
        'data': PersonalInfoResponseToJSON(value.data),
    };
}

