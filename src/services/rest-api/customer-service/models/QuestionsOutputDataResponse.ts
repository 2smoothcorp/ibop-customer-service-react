/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.286
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { QuestionsOutput } from './QuestionsOutput';
import {
    QuestionsOutputFromJSON,
    QuestionsOutputFromJSONTyped,
    QuestionsOutputToJSON,
} from './QuestionsOutput';

/**
 * 
 * @export
 * @interface QuestionsOutputDataResponse
 */
export interface QuestionsOutputDataResponse {
    /**
     * 
     * @type {number}
     * @memberof QuestionsOutputDataResponse
     */
    status?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof QuestionsOutputDataResponse
     */
    errors?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof QuestionsOutputDataResponse
     */
    message?: string | null;
    /**
     * 
     * @type {QuestionsOutput}
     * @memberof QuestionsOutputDataResponse
     */
    data?: QuestionsOutput | null;
}

/**
 * Check if a given object implements the QuestionsOutputDataResponse interface.
 */
export function instanceOfQuestionsOutputDataResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QuestionsOutputDataResponseFromJSON(json: any): QuestionsOutputDataResponse {
    return QuestionsOutputDataResponseFromJSONTyped(json, false);
}

export function QuestionsOutputDataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionsOutputDataResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'data': !exists(json, 'data') ? undefined : QuestionsOutputFromJSON(json['data']),
    };
}

export function QuestionsOutputDataResponseToJSON(value?: QuestionsOutputDataResponse | null): any {
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
        'data': QuestionsOutputToJSON(value.data),
    };
}

