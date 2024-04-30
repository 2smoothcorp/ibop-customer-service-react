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
/**
 * 
 * @export
 * @interface ConsentDataDetailSave
 */
export interface ConsentDataDetailSave {
    /**
     * 
     * @type {string}
     * @memberof ConsentDataDetailSave
     */
    consentId?: string;
    /**
     * 
     * @type {string}
     * @memberof ConsentDataDetailSave
     */
    isAccepted?: string | null;
}

/**
 * Check if a given object implements the ConsentDataDetailSave interface.
 */
export function instanceOfConsentDataDetailSave(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConsentDataDetailSaveFromJSON(json: any): ConsentDataDetailSave {
    return ConsentDataDetailSaveFromJSONTyped(json, false);
}

export function ConsentDataDetailSaveFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsentDataDetailSave {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'consentId': !exists(json, 'consentId') ? undefined : json['consentId'],
        'isAccepted': !exists(json, 'isAccepted') ? undefined : json['isAccepted'],
    };
}

export function ConsentDataDetailSaveToJSON(value?: ConsentDataDetailSave | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'consentId': value.consentId,
        'isAccepted': value.isAccepted,
    };
}

