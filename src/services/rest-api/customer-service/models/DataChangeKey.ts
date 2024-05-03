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
 * @interface DataChangeKey
 */
export interface DataChangeKey {
    /**
     * 
     * @type {string}
     * @memberof DataChangeKey
     */
    dataType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DataChangeKey
     */
    corpId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DataChangeKey
     */
    refId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DataChangeKey
     */
    refType?: string | null;
}

/**
 * Check if a given object implements the DataChangeKey interface.
 */
export function instanceOfDataChangeKey(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DataChangeKeyFromJSON(json: any): DataChangeKey {
    return DataChangeKeyFromJSONTyped(json, false);
}

export function DataChangeKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataChangeKey {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dataType': !exists(json, 'dataType') ? undefined : json['dataType'],
        'corpId': !exists(json, 'corpId') ? undefined : json['corpId'],
        'refId': !exists(json, 'refId') ? undefined : json['refId'],
        'refType': !exists(json, 'refType') ? undefined : json['refType'],
    };
}

export function DataChangeKeyToJSON(value?: DataChangeKey | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dataType': value.dataType,
        'corpId': value.corpId,
        'refId': value.refId,
        'refType': value.refType,
    };
}

