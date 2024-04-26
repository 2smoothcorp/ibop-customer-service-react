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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
} from './Address';

/**
 * 
 * @export
 * @interface AddressListDataResponse
 */
export interface AddressListDataResponse {
    /**
     * 
     * @type {number}
     * @memberof AddressListDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof AddressListDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof AddressListDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {Array<Address>}
     * @memberof AddressListDataResponse
     */
    data?: Array<Address> | null;
}

/**
 * Check if a given object implements the AddressListDataResponse interface.
 */
export function instanceOfAddressListDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddressListDataResponseFromJSON(json: any): AddressListDataResponse {
    return AddressListDataResponseFromJSONTyped(json, false);
}

export function AddressListDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressListDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(AddressFromJSON)),
    };
}

export function AddressListDataResponseToJSON(value?: AddressListDataResponse | null): any {
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
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(AddressToJSON)),
    };
}

