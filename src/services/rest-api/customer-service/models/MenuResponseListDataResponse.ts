/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.298
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MenuResponse } from './MenuResponse';
import {
    MenuResponseFromJSON,
    MenuResponseFromJSONTyped,
    MenuResponseToJSON,
} from './MenuResponse';

/**
 * 
 * @export
 * @interface MenuResponseListDataResponse
 */
export interface MenuResponseListDataResponse {
    /**
     * 
     * @type {number}
     * @memberof MenuResponseListDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof MenuResponseListDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof MenuResponseListDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {Array<MenuResponse>}
     * @memberof MenuResponseListDataResponse
     */
    data?: Array<MenuResponse> | null;
}

/**
 * Check if a given object implements the MenuResponseListDataResponse interface.
 */
export function instanceOfMenuResponseListDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MenuResponseListDataResponseFromJSON(json: any): MenuResponseListDataResponse {
    return MenuResponseListDataResponseFromJSONTyped(json, false);
}

export function MenuResponseListDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MenuResponseListDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(MenuResponseFromJSON)),
    };
}

export function MenuResponseListDataResponseToJSON(value?: MenuResponseListDataResponse | null): any {
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
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(MenuResponseToJSON)),
    };
}

