/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.332
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
 * @interface Choice
 */
export interface Choice {
    /**
     * 
     * @type {number}
     * @memberof Choice
     */
    choiceId?: number;
    /**
     * 
     * @type {number}
     * @memberof Choice
     */
    questionId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Choice
     */
    choiceTextTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Choice
     */
    choiceTextEn?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Choice
     */
    sequence?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Choice
     */
    score?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Choice
     */
    logFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Choice
     */
    logUser?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Choice
     */
    logTimestamp?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof Choice
     */
    choiceCode?: string | null;
}

/**
 * Check if a given object implements the Choice interface.
 */
export function instanceOfChoice(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChoiceFromJSON(json: any): Choice {
    return ChoiceFromJSONTyped(json, false);
}

export function ChoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Choice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'choiceId': !exists(json, 'choiceId') ? undefined : json['choiceId'],
        'questionId': !exists(json, 'questionId') ? undefined : json['questionId'],
        'choiceTextTh': !exists(json, 'choiceTextTh') ? undefined : json['choiceTextTh'],
        'choiceTextEn': !exists(json, 'choiceTextEn') ? undefined : json['choiceTextEn'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'score': !exists(json, 'score') ? undefined : json['score'],
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logTimestamp': !exists(json, 'logTimestamp') ? undefined : (json['logTimestamp'] === null ? null : new Date(json['logTimestamp'])),
        'choiceCode': !exists(json, 'choiceCode') ? undefined : json['choiceCode'],
    };
}

export function ChoiceToJSON(value?: Choice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'choiceId': value.choiceId,
        'questionId': value.questionId,
        'choiceTextTh': value.choiceTextTh,
        'choiceTextEn': value.choiceTextEn,
        'sequence': value.sequence,
        'score': value.score,
        'logFlag': value.logFlag,
        'logUser': value.logUser,
        'logTimestamp': value.logTimestamp === undefined ? undefined : (value.logTimestamp === null ? null : value.logTimestamp.toISOString()),
        'choiceCode': value.choiceCode,
    };
}

