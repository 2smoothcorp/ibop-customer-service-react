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
import type { AddressMaster } from './AddressMaster';
import {
    AddressMasterFromJSON,
    AddressMasterFromJSONTyped,
    AddressMasterToJSON,
} from './AddressMaster';

/**
 * 
 * @export
 * @interface AddressMasterListDataResponse
 */
export interface AddressMasterListDataResponse {
    /**
     * 
     * @type {number}
     * @memberof AddressMasterListDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof AddressMasterListDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof AddressMasterListDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {Array<AddressMaster>}
     * @memberof AddressMasterListDataResponse
     */
    data?: Array<AddressMaster> | null;
}

/**
 * Check if a given object implements the AddressMasterListDataResponse interface.
 */
export function instanceOfAddressMasterListDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddressMasterListDataResponseFromJSON(json: any): AddressMasterListDataResponse {
    return AddressMasterListDataResponseFromJSONTyped(json, false);
}

export function AddressMasterListDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressMasterListDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(AddressMasterFromJSON)),
    };
}

export function AddressMasterListDataResponseToJSON(value?: AddressMasterListDataResponse | null): any {
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
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(AddressMasterToJSON)),
    };
}

