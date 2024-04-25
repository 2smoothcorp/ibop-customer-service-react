/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.305
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { KycPersonalInfoOutput } from './KycPersonalInfoOutput';
import {
    KycPersonalInfoOutputFromJSON,
    KycPersonalInfoOutputFromJSONTyped,
    KycPersonalInfoOutputToJSON,
} from './KycPersonalInfoOutput';

/**
 * 
 * @export
 * @interface KycPersonalInfoOutputDataResponse
 */
export interface KycPersonalInfoOutputDataResponse {
    /**
     * 
     * @type {number}
     * @memberof KycPersonalInfoOutputDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof KycPersonalInfoOutputDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInfoOutputDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {KycPersonalInfoOutput}
     * @memberof KycPersonalInfoOutputDataResponse
     */
    data?: KycPersonalInfoOutput | null;
}

/**
 * Check if a given object implements the KycPersonalInfoOutputDataResponse interface.
 */
export function instanceOfKycPersonalInfoOutputDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycPersonalInfoOutputDataResponseFromJSON(json: any): KycPersonalInfoOutputDataResponse {
    return KycPersonalInfoOutputDataResponseFromJSONTyped(json, false);
}

export function KycPersonalInfoOutputDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycPersonalInfoOutputDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : KycPersonalInfoOutputFromJSON(json['data']),
    };
}

export function KycPersonalInfoOutputDataResponseToJSON(value?: KycPersonalInfoOutputDataResponse | null): any {
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
        'data': KycPersonalInfoOutputToJSON(value.data),
    };
}

