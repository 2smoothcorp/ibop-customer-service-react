/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.268
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ContactInfoOutput } from './ContactInfoOutput';
import {
    ContactInfoOutputFromJSON,
    ContactInfoOutputFromJSONTyped,
    ContactInfoOutputToJSON,
} from './ContactInfoOutput';

/**
 * 
 * @export
 * @interface ContactInfoOutputDataResponse
 */
export interface ContactInfoOutputDataResponse {
    /**
     * 
     * @type {number}
     * @memberof ContactInfoOutputDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof ContactInfoOutputDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof ContactInfoOutputDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {ContactInfoOutput}
     * @memberof ContactInfoOutputDataResponse
     */
    data?: ContactInfoOutput | null;
}

/**
 * Check if a given object implements the ContactInfoOutputDataResponse interface.
 */
export function instanceOfContactInfoOutputDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ContactInfoOutputDataResponseFromJSON(json: any): ContactInfoOutputDataResponse {
    return ContactInfoOutputDataResponseFromJSONTyped(json, false);
}

export function ContactInfoOutputDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactInfoOutputDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : ContactInfoOutputFromJSON(json['data']),
    };
}

export function ContactInfoOutputDataResponseToJSON(value?: ContactInfoOutputDataResponse | null): any {
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
        'data': ContactInfoOutputToJSON(value.data),
    };
}
