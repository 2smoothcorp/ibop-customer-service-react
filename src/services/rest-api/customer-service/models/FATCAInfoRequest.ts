/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.328
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AnswerInput } from './AnswerInput';
import {
    AnswerInputFromJSON,
    AnswerInputFromJSONTyped,
    AnswerInputToJSON,
} from './AnswerInput';
import type { FatcaW8Input } from './FatcaW8Input';
import {
    FatcaW8InputFromJSON,
    FatcaW8InputFromJSONTyped,
    FatcaW8InputToJSON,
} from './FatcaW8Input';
import type { FatcaW9Input } from './FatcaW9Input';
import {
    FatcaW9InputFromJSON,
    FatcaW9InputFromJSONTyped,
    FatcaW9InputToJSON,
} from './FatcaW9Input';
import type { SaveTinInput } from './SaveTinInput';
import {
    SaveTinInputFromJSON,
    SaveTinInputFromJSONTyped,
    SaveTinInputToJSON,
} from './SaveTinInput';

/**
 * 
 * @export
 * @interface FATCAInfoRequest
 */
export interface FATCAInfoRequest {
    /**
     * 
     * @type {Array<AnswerInput>}
     * @memberof FATCAInfoRequest
     */
    answerInput?: Array<AnswerInput> | null;
    /**
     * 
     * @type {FatcaW9Input}
     * @memberof FATCAInfoRequest
     */
    fatcaW9Input?: FatcaW9Input | null;
    /**
     * 
     * @type {FatcaW8Input}
     * @memberof FATCAInfoRequest
     */
    fatcaW8Input?: FatcaW8Input | null;
    /**
     * 
     * @type {boolean}
     * @memberof FATCAInfoRequest
     */
    isFatcaIndividualSelfCertified?: boolean | null;
    /**
     * 
     * @type {Array<SaveTinInput>}
     * @memberof FATCAInfoRequest
     */
    tinInput?: Array<SaveTinInput> | null;
}

/**
 * Check if a given object implements the FATCAInfoRequest interface.
 */
export function instanceOfFATCAInfoRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FATCAInfoRequestFromJSON(json: any): FATCAInfoRequest {
    return FATCAInfoRequestFromJSONTyped(json, false);
}

export function FATCAInfoRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FATCAInfoRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'answerInput': !exists(json, 'answerInput') ? undefined : (json['answerInput'] === null ? null : (json['answerInput'] as Array<any>).map(AnswerInputFromJSON)),
        'fatcaW9Input': !exists(json, 'fatcaW9Input') ? undefined : FatcaW9InputFromJSON(json['fatcaW9Input']),
        'fatcaW8Input': !exists(json, 'fatcaW8Input') ? undefined : FatcaW8InputFromJSON(json['fatcaW8Input']),
        'isFatcaIndividualSelfCertified': !exists(json, 'isFatcaIndividualSelfCertified') ? undefined : json['isFatcaIndividualSelfCertified'],
        'tinInput': !exists(json, 'tinInput') ? undefined : (json['tinInput'] === null ? null : (json['tinInput'] as Array<any>).map(SaveTinInputFromJSON)),
    };
}

export function FATCAInfoRequestToJSON(value?: FATCAInfoRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'answerInput': value.answerInput === undefined ? undefined : (value.answerInput === null ? null : (value.answerInput as Array<any>).map(AnswerInputToJSON)),
        'fatcaW9Input': FatcaW9InputToJSON(value.fatcaW9Input),
        'fatcaW8Input': FatcaW8InputToJSON(value.fatcaW8Input),
        'isFatcaIndividualSelfCertified': value.isFatcaIndividualSelfCertified,
        'tinInput': value.tinInput === undefined ? undefined : (value.tinInput === null ? null : (value.tinInput as Array<any>).map(SaveTinInputToJSON)),
    };
}

