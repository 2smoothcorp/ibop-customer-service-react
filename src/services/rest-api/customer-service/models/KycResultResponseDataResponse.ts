/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.298
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { KycResultResponse } from './KycResultResponse';
import {
    KycResultResponseFromJSON,
    KycResultResponseFromJSONTyped,
    KycResultResponseToJSON,
} from './KycResultResponse';

/**
 * 
 * @export
 * @interface KycResultResponseDataResponse
 */
export interface KycResultResponseDataResponse {
    /**
     * 
     * @type {number}
     * @memberof KycResultResponseDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof KycResultResponseDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof KycResultResponseDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {KycResultResponse}
     * @memberof KycResultResponseDataResponse
     */
    data?: KycResultResponse | null;
}

/**
 * Check if a given object implements the KycResultResponseDataResponse interface.
 */
export function instanceOfKycResultResponseDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycResultResponseDataResponseFromJSON(json: any): KycResultResponseDataResponse {
    return KycResultResponseDataResponseFromJSONTyped(json, false);
}

export function KycResultResponseDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycResultResponseDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : KycResultResponseFromJSON(json['data']),
    };
}

export function KycResultResponseDataResponseToJSON(value?: KycResultResponseDataResponse | null): any {
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
        'data': KycResultResponseToJSON(value.data),
    };
}

