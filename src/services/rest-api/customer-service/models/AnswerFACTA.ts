/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.305
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
 * @interface AnswerFACTA
 */
export interface AnswerFACTA {
    /**
     * 
     * @type {boolean}
     * @memberof AnswerFACTA
     */
    isFatcaIndividualSelfCert?: boolean | null;
    /**
     * 
     * @type {Array<Answer>}
     * @memberof AnswerFACTA
     */
    answers?: Array<Answer> | null;
}

/**
 * Check if a given object implements the AnswerFACTA interface.
 */
export function instanceOfAnswerFACTA(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AnswerFACTAFromJSON(json: any): AnswerFACTA {
    return AnswerFACTAFromJSONTyped(json, false);
}

export function AnswerFACTAFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnswerFACTA {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isFatcaIndividualSelfCert': !exists(json, 'isFatcaIndividualSelfCert') ? undefined : json['isFatcaIndividualSelfCert'],
        'answers': !exists(json, 'answers') ? undefined : (json['answers'] === null ? null : (json['answers'] as Array<any>).map(AnswerFromJSON)),
    };
}

export function AnswerFACTAToJSON(value?: AnswerFACTA | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isFatcaIndividualSelfCert': value.isFatcaIndividualSelfCert,
        'answers': value.answers === undefined ? undefined : (value.answers === null ? null : (value.answers as Array<any>).map(AnswerToJSON)),
    };
}

