/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.350
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
 * @interface SaveTinInput
 */
export interface SaveTinInput {
    /**
     * 
     * @type {number}
     * @memberof SaveTinInput
     */
    customerForeignTaxId?: number;
    /**
     * 
     * @type {string}
     * @memberof SaveTinInput
     */
    taxCountryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveTinInput
     */
    tinNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveTinInput
     */
    noTinResonCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveTinInput
     */
    noTinReasonRemark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveTinInput
     */
    refId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SaveTinInput
     */
    refType?: string | null;
}

/**
 * Check if a given object implements the SaveTinInput interface.
 */
export function instanceOfSaveTinInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SaveTinInputFromJSON(json: any): SaveTinInput {
    return SaveTinInputFromJSONTyped(json, false);
}

export function SaveTinInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveTinInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customerForeignTaxId': !exists(json, 'customerForeignTaxId') ? undefined : json['customerForeignTaxId'],
        'taxCountryCode': !exists(json, 'taxCountryCode') ? undefined : json['taxCountryCode'],
        'tinNo': !exists(json, 'tinNo') ? undefined : json['tinNo'],
        'noTinResonCode': !exists(json, 'noTinResonCode') ? undefined : json['noTinResonCode'],
        'noTinReasonRemark': !exists(json, 'noTinReasonRemark') ? undefined : json['noTinReasonRemark'],
        'refId': !exists(json, 'refId') ? undefined : json['refId'],
        'refType': !exists(json, 'refType') ? undefined : json['refType'],
    };
}

export function SaveTinInputToJSON(value?: SaveTinInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customerForeignTaxId': value.customerForeignTaxId,
        'taxCountryCode': value.taxCountryCode,
        'tinNo': value.tinNo,
        'noTinResonCode': value.noTinResonCode,
        'noTinReasonRemark': value.noTinReasonRemark,
        'refId': value.refId,
        'refType': value.refType,
    };
}

