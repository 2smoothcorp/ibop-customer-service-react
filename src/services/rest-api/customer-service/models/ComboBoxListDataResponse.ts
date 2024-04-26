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
import type { ComboBox } from './ComboBox';
import {
    ComboBoxFromJSON,
    ComboBoxFromJSONTyped,
    ComboBoxToJSON,
} from './ComboBox';

/**
 * 
 * @export
 * @interface ComboBoxListDataResponse
 */
export interface ComboBoxListDataResponse {
    /**
     * 
     * @type {number}
     * @memberof ComboBoxListDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof ComboBoxListDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof ComboBoxListDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {Array<ComboBox>}
     * @memberof ComboBoxListDataResponse
     */
    data?: Array<ComboBox> | null;
}

/**
 * Check if a given object implements the ComboBoxListDataResponse interface.
 */
export function instanceOfComboBoxListDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ComboBoxListDataResponseFromJSON(json: any): ComboBoxListDataResponse {
    return ComboBoxListDataResponseFromJSONTyped(json, false);
}

export function ComboBoxListDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComboBoxListDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(ComboBoxFromJSON)),
    };
}

export function ComboBoxListDataResponseToJSON(value?: ComboBoxListDataResponse | null): any {
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
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(ComboBoxToJSON)),
    };
}

