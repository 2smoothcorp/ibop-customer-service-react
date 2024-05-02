/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.333
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PersonalOutput } from './PersonalOutput';
import {
    PersonalOutputFromJSON,
    PersonalOutputFromJSONTyped,
    PersonalOutputToJSON,
} from './PersonalOutput';

/**
 * 
 * @export
 * @interface PersonalOutputDataResponse
 */
export interface PersonalOutputDataResponse {
    /**
     * 
     * @type {number}
     * @memberof PersonalOutputDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof PersonalOutputDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalOutputDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {PersonalOutput}
     * @memberof PersonalOutputDataResponse
     */
    data?: PersonalOutput | null;
}

/**
 * Check if a given object implements the PersonalOutputDataResponse interface.
 */
export function instanceOfPersonalOutputDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PersonalOutputDataResponseFromJSON(json: any): PersonalOutputDataResponse {
    return PersonalOutputDataResponseFromJSONTyped(json, false);
}

export function PersonalOutputDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonalOutputDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : PersonalOutputFromJSON(json['data']),
    };
}

export function PersonalOutputDataResponseToJSON(value?: PersonalOutputDataResponse | null): any {
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
        'data': PersonalOutputToJSON(value.data),
    };
}

