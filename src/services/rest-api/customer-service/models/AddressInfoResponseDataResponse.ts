/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.310
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AddressInfoResponse } from './AddressInfoResponse';
import {
    AddressInfoResponseFromJSON,
    AddressInfoResponseFromJSONTyped,
    AddressInfoResponseToJSON,
} from './AddressInfoResponse';

/**
 * 
 * @export
 * @interface AddressInfoResponseDataResponse
 */
export interface AddressInfoResponseDataResponse {
    /**
     * 
     * @type {number}
     * @memberof AddressInfoResponseDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof AddressInfoResponseDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoResponseDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {AddressInfoResponse}
     * @memberof AddressInfoResponseDataResponse
     */
    data?: AddressInfoResponse | null;
}

/**
 * Check if a given object implements the AddressInfoResponseDataResponse interface.
 */
export function instanceOfAddressInfoResponseDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddressInfoResponseDataResponseFromJSON(json: any): AddressInfoResponseDataResponse {
    return AddressInfoResponseDataResponseFromJSONTyped(json, false);
}

export function AddressInfoResponseDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressInfoResponseDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : AddressInfoResponseFromJSON(json['data']),
    };
}

export function AddressInfoResponseDataResponseToJSON(value?: AddressInfoResponseDataResponse | null): any {
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
        'data': AddressInfoResponseToJSON(value.data),
    };
}

