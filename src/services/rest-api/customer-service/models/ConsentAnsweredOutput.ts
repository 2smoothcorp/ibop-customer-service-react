/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.333
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ConsentDataDetailOutput } from './ConsentDataDetailOutput';
import {
    ConsentDataDetailOutputFromJSON,
    ConsentDataDetailOutputFromJSONTyped,
    ConsentDataDetailOutputToJSON,
} from './ConsentDataDetailOutput';

/**
 * 
 * @export
 * @interface ConsentAnsweredOutput
 */
export interface ConsentAnsweredOutput {
    /**
     * 
     * @type {Array<ConsentDataDetailOutput>}
     * @memberof ConsentAnsweredOutput
     */
    answers?: Array<ConsentDataDetailOutput> | null;
}

/**
 * Check if a given object implements the ConsentAnsweredOutput interface.
 */
export function instanceOfConsentAnsweredOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConsentAnsweredOutputFromJSON(json: any): ConsentAnsweredOutput {
    return ConsentAnsweredOutputFromJSONTyped(json, false);
}

export function ConsentAnsweredOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsentAnsweredOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'answers': !exists(json, 'answers') ? undefined : (json['answers'] === null ? null : (json['answers'] as Array<any>).map(ConsentDataDetailOutputFromJSON)),
    };
}

export function ConsentAnsweredOutputToJSON(value?: ConsentAnsweredOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'answers': value.answers === undefined ? undefined : (value.answers === null ? null : (value.answers as Array<any>).map(ConsentDataDetailOutputToJSON)),
    };
}

