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
/**
 * 
 * @export
 * @interface GetTinOutput
 */
export interface GetTinOutput {
    /**
     * 
     * @type {number}
     * @memberof GetTinOutput
     */
    customerForeignTaxId?: number;
    /**
     * 
     * @type {string}
     * @memberof GetTinOutput
     */
    refId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetTinOutput
     */
    refType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetTinOutput
     */
    taxCountryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetTinOutput
     */
    tinNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetTinOutput
     */
    noTinResonCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetTinOutput
     */
    noTinReasonRemark?: string | null;
}

/**
 * Check if a given object implements the GetTinOutput interface.
 */
export function instanceOfGetTinOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetTinOutputFromJSON(json: any): GetTinOutput {
    return GetTinOutputFromJSONTyped(json, false);
}

export function GetTinOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTinOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customerForeignTaxId': !exists(json, 'customerForeignTaxId') ? undefined : json['customerForeignTaxId'],
        'refId': !exists(json, 'refId') ? undefined : json['refId'],
        'refType': !exists(json, 'refType') ? undefined : json['refType'],
        'taxCountryCode': !exists(json, 'taxCountryCode') ? undefined : json['taxCountryCode'],
        'tinNo': !exists(json, 'tinNo') ? undefined : json['tinNo'],
        'noTinResonCode': !exists(json, 'noTinResonCode') ? undefined : json['noTinResonCode'],
        'noTinReasonRemark': !exists(json, 'noTinReasonRemark') ? undefined : json['noTinReasonRemark'],
    };
}

export function GetTinOutputToJSON(value?: GetTinOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customerForeignTaxId': value.customerForeignTaxId,
        'refId': value.refId,
        'refType': value.refType,
        'taxCountryCode': value.taxCountryCode,
        'tinNo': value.tinNo,
        'noTinResonCode': value.noTinResonCode,
        'noTinReasonRemark': value.noTinReasonRemark,
    };
}

