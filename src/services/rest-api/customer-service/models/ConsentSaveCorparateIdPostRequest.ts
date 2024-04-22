/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.272
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
 * @interface ConsentSaveCorparateIdPostRequest
 */
export interface ConsentSaveCorparateIdPostRequest {
    /**
     * 
     * @type {string}
     * @memberof ConsentSaveCorparateIdPostRequest
     */
    formId?: string;
    /**
     * 
     * @type {string}
     * @memberof ConsentSaveCorparateIdPostRequest
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentSaveCorparateIdPostRequest
     */
    referenceType?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ConsentSaveCorparateIdPostRequest
     */
    flowId?: number | null;
    /**
     * 
     * @type {Array<ConsentDataDetailSave>}
     * @memberof ConsentSaveCorparateIdPostRequest
     */
    consentDataDetails?: Array<ConsentDataDetailSave> | null;
}

/**
 * Check if a given object implements the ConsentSaveCorparateIdPostRequest interface.
 */
export function instanceOfConsentSaveCorparateIdPostRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConsentSaveCorparateIdPostRequestFromJSON(json: any): ConsentSaveCorparateIdPostRequest {
    return ConsentSaveCorparateIdPostRequestFromJSONTyped(json, false);
}

export function ConsentSaveCorparateIdPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsentSaveCorparateIdPostRequest {
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

export function ConsentSaveCorparateIdPostRequestToJSON(value?: ConsentSaveCorparateIdPostRequest | null): any {
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

