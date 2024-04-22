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
/**
 * 
 * @export
 * @interface Question
 */
export interface Question {
    /**
     * 
     * @type {number}
     * @memberof Question
     */
    questionId?: number;
    /**
     * 
     * @type {string}
     * @memberof Question
     */
    questionnaireCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Question
     */
    questionTextTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Question
     */
    questionTextEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Question
     */
    noteTextTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Question
     */
    noteTextEn?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Question
     */
    sequence?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Question
     */
    logFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Question
     */
    logUser?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Question
     */
    logTimestamp?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof Question
     */
    selectionType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Question
     */
    questionType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Question
     */
    disable?: boolean;
}

/**
 * Check if a given object implements the Question interface.
 */
export function instanceOfQuestion(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QuestionFromJSON(json: any): Question {
    return QuestionFromJSONTyped(json, false);
}

export function QuestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Question {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'questionId': !exists(json, 'questionId') ? undefined : json['questionId'],
        'questionnaireCode': !exists(json, 'questionnaireCode') ? undefined : json['questionnaireCode'],
        'questionTextTh': !exists(json, 'questionTextTh') ? undefined : json['questionTextTh'],
        'questionTextEn': !exists(json, 'questionTextEn') ? undefined : json['questionTextEn'],
        'noteTextTh': !exists(json, 'noteTextTh') ? undefined : json['noteTextTh'],
        'noteTextEn': !exists(json, 'noteTextEn') ? undefined : json['noteTextEn'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logTimestamp': !exists(json, 'logTimestamp') ? undefined : (json['logTimestamp'] === null ? null : new Date(json['logTimestamp'])),
        'selectionType': !exists(json, 'selectionType') ? undefined : json['selectionType'],
        'questionType': !exists(json, 'questionType') ? undefined : json['questionType'],
        'disable': !exists(json, 'disable') ? undefined : json['disable'],
    };
}

export function QuestionToJSON(value?: Question | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'questionId': value.questionId,
        'questionnaireCode': value.questionnaireCode,
        'questionTextTh': value.questionTextTh,
        'questionTextEn': value.questionTextEn,
        'noteTextTh': value.noteTextTh,
        'noteTextEn': value.noteTextEn,
        'sequence': value.sequence,
        'logFlag': value.logFlag,
        'logUser': value.logUser,
        'logTimestamp': value.logTimestamp === undefined ? undefined : (value.logTimestamp === null ? null : value.logTimestamp.toISOString()),
        'selectionType': value.selectionType,
        'questionType': value.questionType,
        'disable': value.disable,
    };
}
