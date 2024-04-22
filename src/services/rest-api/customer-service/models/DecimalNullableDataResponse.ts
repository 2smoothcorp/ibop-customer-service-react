/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.272
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
 * @interface DecimalNullableDataResponse
 */
export interface DecimalNullableDataResponse {
    /**
     * 
     * @type {number}
     * @memberof DecimalNullableDataResponse
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof DecimalNullableDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {number}
     * @memberof DecimalNullableDataResponse
     */
    data?: number | null;
}

/**
 * Check if a given object implements the DecimalNullableDataResponse interface.
 */
export function instanceOfDecimalNullableDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DecimalNullableDataResponseFromJSON(json: any): DecimalNullableDataResponse {
    return DecimalNullableDataResponseFromJSONTyped(json, false);
}

export function DecimalNullableDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DecimalNullableDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function DecimalNullableDataResponseToJSON(value?: DecimalNullableDataResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'message': value.message,
        'data': value.data,
    };
}

