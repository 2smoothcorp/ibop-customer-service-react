/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.270
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
 * @interface ConsentDataDetailOutput
 */
export interface ConsentDataDetailOutput {
    /**
     * 
     * @type {string}
     * @memberof ConsentDataDetailOutput
     */
    id?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ConsentDataDetailOutput
     */
    flowId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ConsentDataDetailOutput
     */
    sortOrder?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentDataDetailOutput
     */
    isAccepted?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConsentDataDetailOutput
     */
    remark?: string | null;
}

/**
 * Check if a given object implements the ConsentDataDetailOutput interface.
 */
export function instanceOfConsentDataDetailOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConsentDataDetailOutputFromJSON(json: any): ConsentDataDetailOutput {
    return ConsentDataDetailOutputFromJSONTyped(json, false);
}

export function ConsentDataDetailOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsentDataDetailOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'flowId': !exists(json, 'flowId') ? undefined : json['flowId'],
        'sortOrder': !exists(json, 'sortOrder') ? undefined : json['sortOrder'],
        'isAccepted': !exists(json, 'isAccepted') ? undefined : json['isAccepted'],
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
    };
}

export function ConsentDataDetailOutputToJSON(value?: ConsentDataDetailOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'flowId': value.flowId,
        'sortOrder': value.sortOrder,
        'isAccepted': value.isAccepted,
        'remark': value.remark,
    };
}

