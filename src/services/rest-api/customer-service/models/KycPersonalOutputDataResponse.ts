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
import type { KycPersonalOutput } from './KycPersonalOutput';
import {
    KycPersonalOutputFromJSON,
    KycPersonalOutputFromJSONTyped,
    KycPersonalOutputToJSON,
} from './KycPersonalOutput';

/**
 * 
 * @export
 * @interface KycPersonalOutputDataResponse
 */
export interface KycPersonalOutputDataResponse {
    /**
     * 
     * @type {number}
     * @memberof KycPersonalOutputDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof KycPersonalOutputDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutputDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {KycPersonalOutput}
     * @memberof KycPersonalOutputDataResponse
     */
    data?: KycPersonalOutput | null;
}

/**
 * Check if a given object implements the KycPersonalOutputDataResponse interface.
 */
export function instanceOfKycPersonalOutputDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycPersonalOutputDataResponseFromJSON(json: any): KycPersonalOutputDataResponse {
    return KycPersonalOutputDataResponseFromJSONTyped(json, false);
}

export function KycPersonalOutputDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycPersonalOutputDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : KycPersonalOutputFromJSON(json['data']),
    };
}

export function KycPersonalOutputDataResponseToJSON(value?: KycPersonalOutputDataResponse | null): any {
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
        'data': KycPersonalOutputToJSON(value.data),
    };
}

