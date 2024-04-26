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
import type { IsValidOutput } from './IsValidOutput';
import {
    IsValidOutputFromJSON,
    IsValidOutputFromJSONTyped,
    IsValidOutputToJSON,
} from './IsValidOutput';

/**
 * 
 * @export
 * @interface IsValidOutputDataResponse
 */
export interface IsValidOutputDataResponse {
    /**
     * 
     * @type {number}
     * @memberof IsValidOutputDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof IsValidOutputDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof IsValidOutputDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {IsValidOutput}
     * @memberof IsValidOutputDataResponse
     */
    data?: IsValidOutput | null;
}

/**
 * Check if a given object implements the IsValidOutputDataResponse interface.
 */
export function instanceOfIsValidOutputDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IsValidOutputDataResponseFromJSON(json: any): IsValidOutputDataResponse {
    return IsValidOutputDataResponseFromJSONTyped(json, false);
}

export function IsValidOutputDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IsValidOutputDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : IsValidOutputFromJSON(json['data']),
    };
}

export function IsValidOutputDataResponseToJSON(value?: IsValidOutputDataResponse | null): any {
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
        'data': IsValidOutputToJSON(value.data),
    };
}

