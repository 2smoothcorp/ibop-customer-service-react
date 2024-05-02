/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.330
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DocReceiveAddressInfoResponse } from './DocReceiveAddressInfoResponse';
import {
    DocReceiveAddressInfoResponseFromJSON,
    DocReceiveAddressInfoResponseFromJSONTyped,
    DocReceiveAddressInfoResponseToJSON,
} from './DocReceiveAddressInfoResponse';

/**
 * 
 * @export
 * @interface DocReceiveAddressInfoResponseDataResponse
 */
export interface DocReceiveAddressInfoResponseDataResponse {
    /**
     * 
     * @type {number}
     * @memberof DocReceiveAddressInfoResponseDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof DocReceiveAddressInfoResponseDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoResponseDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {DocReceiveAddressInfoResponse}
     * @memberof DocReceiveAddressInfoResponseDataResponse
     */
    data?: DocReceiveAddressInfoResponse | null;
}

/**
 * Check if a given object implements the DocReceiveAddressInfoResponseDataResponse interface.
 */
export function instanceOfDocReceiveAddressInfoResponseDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DocReceiveAddressInfoResponseDataResponseFromJSON(json: any): DocReceiveAddressInfoResponseDataResponse {
    return DocReceiveAddressInfoResponseDataResponseFromJSONTyped(json, false);
}

export function DocReceiveAddressInfoResponseDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocReceiveAddressInfoResponseDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : DocReceiveAddressInfoResponseFromJSON(json['data']),
    };
}

export function DocReceiveAddressInfoResponseDataResponseToJSON(value?: DocReceiveAddressInfoResponseDataResponse | null): any {
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
        'data': DocReceiveAddressInfoResponseToJSON(value.data),
    };
}

