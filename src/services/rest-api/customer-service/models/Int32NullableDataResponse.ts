/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.294
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Int32NullableDataResponse
 */
export interface Int32NullableDataResponse {
    /**
     * 
     * @type {number}
     * @memberof Int32NullableDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof Int32NullableDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof Int32NullableDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Int32NullableDataResponse
     */
    data?: number | null;
}

/**
 * Check if a given object implements the Int32NullableDataResponse interface.
 */
export function instanceOfInt32NullableDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function Int32NullableDataResponseFromJSON(json: any): Int32NullableDataResponse {
    return Int32NullableDataResponseFromJSONTyped(json, false);
}

export function Int32NullableDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Int32NullableDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function Int32NullableDataResponseToJSON(value?: Int32NullableDataResponse | null): any {
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
        'data': value.data,
    };
}

