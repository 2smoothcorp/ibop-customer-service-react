/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.270
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ConsentQuestionOutput } from './ConsentQuestionOutput';
import {
    ConsentQuestionOutputFromJSON,
    ConsentQuestionOutputFromJSONTyped,
    ConsentQuestionOutputToJSON,
} from './ConsentQuestionOutput';

/**
 * 
 * @export
 * @interface ConsentQuestionOutputDataResponse
 */
export interface ConsentQuestionOutputDataResponse {
    /**
     * 
     * @type {number}
     * @memberof ConsentQuestionOutputDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof ConsentQuestionOutputDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentQuestionOutputDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {ConsentQuestionOutput}
     * @memberof ConsentQuestionOutputDataResponse
     */
    data?: ConsentQuestionOutput | null;
}

/**
 * Check if a given object implements the ConsentQuestionOutputDataResponse interface.
 */
export function instanceOfConsentQuestionOutputDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConsentQuestionOutputDataResponseFromJSON(json: any): ConsentQuestionOutputDataResponse {
    return ConsentQuestionOutputDataResponseFromJSONTyped(json, false);
}

export function ConsentQuestionOutputDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsentQuestionOutputDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : ConsentQuestionOutputFromJSON(json['data']),
    };
}

export function ConsentQuestionOutputDataResponseToJSON(value?: ConsentQuestionOutputDataResponse | null): any {
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
        'data': ConsentQuestionOutputToJSON(value.data),
    };
}

