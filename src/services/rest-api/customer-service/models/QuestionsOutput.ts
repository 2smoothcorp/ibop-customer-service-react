/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.313
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Choice } from './Choice';
import {
    ChoiceFromJSON,
    ChoiceFromJSONTyped,
    ChoiceToJSON,
} from './Choice';
import type { Question } from './Question';
import {
    QuestionFromJSON,
    QuestionFromJSONTyped,
    QuestionToJSON,
} from './Question';

/**
 * 
 * @export
 * @interface QuestionsOutput
 */
export interface QuestionsOutput {
    /**
     * 
     * @type {Array<Question>}
     * @memberof QuestionsOutput
     */
    questions?: Array<Question> | null;
    /**
     * 
     * @type {{ [key: string]: Array<Choice>; }}
     * @memberof QuestionsOutput
     */
    choices?: { [key: string]: Array<Choice>; } | null;
}

/**
 * Check if a given object implements the QuestionsOutput interface.
 */
export function instanceOfQuestionsOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function QuestionsOutputFromJSON(json: any): QuestionsOutput {
    return QuestionsOutputFromJSONTyped(json, false);
}

export function QuestionsOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuestionsOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'questions': !exists(json, 'questions') ? undefined : (json['questions'] === null ? null : (json['questions'] as Array<any>).map(QuestionFromJSON)),
        'choices': !exists(json, 'choices') ? undefined : json['choices'],
    };
}

export function QuestionsOutputToJSON(value?: QuestionsOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'questions': value.questions === undefined ? undefined : (value.questions === null ? null : (value.questions as Array<any>).map(QuestionToJSON)),
        'choices': value.choices,
    };
}

