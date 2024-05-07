/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.350
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
 * @interface BaseResponse
 */
export interface BaseResponse {
    /**
     * 
     * @type {number}
     * @memberof BaseResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof BaseResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof BaseResponse
     */
    message?: string | null;
}

/**
 * Check if a given object implements the BaseResponse interface.
 */
export function instanceOfBaseResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BaseResponseFromJSON(json: any): BaseResponse {
    return BaseResponseFromJSONTyped(json, false);
}

export function BaseResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BaseResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function BaseResponseToJSON(value?: BaseResponse | null): any {
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
    };
}

