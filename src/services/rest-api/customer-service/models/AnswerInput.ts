/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.346
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
 * @interface AnswerInput
 */
export interface AnswerInput {
    /**
     * 
     * @type {number}
     * @memberof AnswerInput
     */
    questionId?: number;
    /**
     * 
     * @type {number}
     * @memberof AnswerInput
     */
    choiceId?: number;
}

/**
 * Check if a given object implements the AnswerInput interface.
 */
export function instanceOfAnswerInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AnswerInputFromJSON(json: any): AnswerInput {
    return AnswerInputFromJSONTyped(json, false);
}

export function AnswerInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnswerInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'questionId': !exists(json, 'questionId') ? undefined : json['questionId'],
        'choiceId': !exists(json, 'choiceId') ? undefined : json['choiceId'],
    };
}

export function AnswerInputToJSON(value?: AnswerInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'questionId': value.questionId,
        'choiceId': value.choiceId,
    };
}

