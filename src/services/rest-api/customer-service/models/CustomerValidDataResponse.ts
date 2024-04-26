/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.318
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CustomerValid } from './CustomerValid';
import {
    CustomerValidFromJSON,
    CustomerValidFromJSONTyped,
    CustomerValidToJSON,
} from './CustomerValid';

/**
 * 
 * @export
 * @interface CustomerValidDataResponse
 */
export interface CustomerValidDataResponse {
    /**
     * 
     * @type {number}
     * @memberof CustomerValidDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof CustomerValidDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerValidDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {CustomerValid}
     * @memberof CustomerValidDataResponse
     */
    data?: CustomerValid | null;
}

/**
 * Check if a given object implements the CustomerValidDataResponse interface.
 */
export function instanceOfCustomerValidDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerValidDataResponseFromJSON(json: any): CustomerValidDataResponse {
    return CustomerValidDataResponseFromJSONTyped(json, false);
}

export function CustomerValidDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerValidDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : CustomerValidFromJSON(json['data']),
    };
}

export function CustomerValidDataResponseToJSON(value?: CustomerValidDataResponse | null): any {
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
        'data': CustomerValidToJSON(value.data),
    };
}

