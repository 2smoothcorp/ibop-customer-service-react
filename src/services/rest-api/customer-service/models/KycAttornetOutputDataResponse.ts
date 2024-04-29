/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.320
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { KycAttornetOutput } from './KycAttornetOutput';
import {
    KycAttornetOutputFromJSON,
    KycAttornetOutputFromJSONTyped,
    KycAttornetOutputToJSON,
} from './KycAttornetOutput';

/**
 * 
 * @export
 * @interface KycAttornetOutputDataResponse
 */
export interface KycAttornetOutputDataResponse {
    /**
     * 
     * @type {number}
     * @memberof KycAttornetOutputDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof KycAttornetOutputDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutputDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {KycAttornetOutput}
     * @memberof KycAttornetOutputDataResponse
     */
    data?: KycAttornetOutput | null;
}

/**
 * Check if a given object implements the KycAttornetOutputDataResponse interface.
 */
export function instanceOfKycAttornetOutputDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycAttornetOutputDataResponseFromJSON(json: any): KycAttornetOutputDataResponse {
    return KycAttornetOutputDataResponseFromJSONTyped(json, false);
}

export function KycAttornetOutputDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycAttornetOutputDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : KycAttornetOutputFromJSON(json['data']),
    };
}

export function KycAttornetOutputDataResponseToJSON(value?: KycAttornetOutputDataResponse | null): any {
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
        'data': KycAttornetOutputToJSON(value.data),
    };
}

