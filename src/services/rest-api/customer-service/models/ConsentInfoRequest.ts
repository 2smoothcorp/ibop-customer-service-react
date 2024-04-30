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
import type { ConsentDataDetailSave } from './ConsentDataDetailSave';
import {
    ConsentDataDetailSaveFromJSON,
    ConsentDataDetailSaveFromJSONTyped,
    ConsentDataDetailSaveToJSON,
} from './ConsentDataDetailSave';

/**
 * 
 * @export
 * @interface ConsentInfoRequest
 */
export interface ConsentInfoRequest {
    /**
     * 
     * @type {string}
     * @memberof ConsentInfoRequest
     */
    formId?: string;
    /**
     * 
     * @type {string}
     * @memberof ConsentInfoRequest
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentInfoRequest
     */
    referenceType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ConsentInfoRequest
     */
    flowId?: number | null;
    /**
     * 
     * @type {Array<ConsentDataDetailSave>}
     * @memberof ConsentInfoRequest
     */
    consentDataDetails?: Array<ConsentDataDetailSave> | null;
}

/**
 * Check if a given object implements the ConsentInfoRequest interface.
 */
export function instanceOfConsentInfoRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConsentInfoRequestFromJSON(json: any): ConsentInfoRequest {
    return ConsentInfoRequestFromJSONTyped(json, false);
}

export function ConsentInfoRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsentInfoRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'formId': !exists(json, 'formId') ? undefined : json['formId'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'flowId': !exists(json, 'flowId') ? undefined : json['flowId'],
        'consentDataDetails': !exists(json, 'consentDataDetails') ? undefined : (json['consentDataDetails'] === null ? null : (json['consentDataDetails'] as Array<any>).map(ConsentDataDetailSaveFromJSON)),
    };
}

export function ConsentInfoRequestToJSON(value?: ConsentInfoRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'formId': value.formId,
        'referenceId': value.referenceId,
        'referenceType': value.referenceType,
        'flowId': value.flowId,
        'consentDataDetails': value.consentDataDetails === undefined ? undefined : (value.consentDataDetails === null ? null : (value.consentDataDetails as Array<any>).map(ConsentDataDetailSaveToJSON)),
    };
}

