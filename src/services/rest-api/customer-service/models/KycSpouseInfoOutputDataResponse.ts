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
import type { KycSpouseInfoOutput } from './KycSpouseInfoOutput';
import {
    KycSpouseInfoOutputFromJSON,
    KycSpouseInfoOutputFromJSONTyped,
    KycSpouseInfoOutputToJSON,
} from './KycSpouseInfoOutput';

/**
 * 
 * @export
 * @interface KycSpouseInfoOutputDataResponse
 */
export interface KycSpouseInfoOutputDataResponse {
    /**
     * 
     * @type {number}
     * @memberof KycSpouseInfoOutputDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof KycSpouseInfoOutputDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof KycSpouseInfoOutputDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {KycSpouseInfoOutput}
     * @memberof KycSpouseInfoOutputDataResponse
     */
    data?: KycSpouseInfoOutput | null;
}

/**
 * Check if a given object implements the KycSpouseInfoOutputDataResponse interface.
 */
export function instanceOfKycSpouseInfoOutputDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycSpouseInfoOutputDataResponseFromJSON(json: any): KycSpouseInfoOutputDataResponse {
    return KycSpouseInfoOutputDataResponseFromJSONTyped(json, false);
}

export function KycSpouseInfoOutputDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycSpouseInfoOutputDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : KycSpouseInfoOutputFromJSON(json['data']),
    };
}

export function KycSpouseInfoOutputDataResponseToJSON(value?: KycSpouseInfoOutputDataResponse | null): any {
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
        'data': KycSpouseInfoOutputToJSON(value.data),
    };
}
