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
import type { Answer } from './Answer';
import {
    AnswerFromJSON,
    AnswerFromJSONTyped,
    AnswerToJSON,
} from './Answer';

/**
 * 
 * @export
 * @interface AnswerListDataResponse
 */
export interface AnswerListDataResponse {
    /**
     * 
     * @type {number}
     * @memberof AnswerListDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof AnswerListDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof AnswerListDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {Array<Answer>}
     * @memberof AnswerListDataResponse
     */
    data?: Array<Answer> | null;
}

/**
 * Check if a given object implements the AnswerListDataResponse interface.
 */
export function instanceOfAnswerListDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AnswerListDataResponseFromJSON(json: any): AnswerListDataResponse {
    return AnswerListDataResponseFromJSONTyped(json, false);
}

export function AnswerListDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnswerListDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : (json['data'] === null ? null : (json['data'] as Array<any>).map(AnswerFromJSON)),
    };
}

export function AnswerListDataResponseToJSON(value?: AnswerListDataResponse | null): any {
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
        'data': value.data === undefined ? undefined : (value.data === null ? null : (value.data as Array<any>).map(AnswerToJSON)),
    };
}

