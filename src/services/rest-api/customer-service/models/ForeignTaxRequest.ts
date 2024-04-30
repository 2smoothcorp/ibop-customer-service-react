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
 * @interface ForeignTaxRequest
 */
export interface ForeignTaxRequest {
    /**
     * 
     * @type {string}
     * @memberof ForeignTaxRequest
     */
    taxCountryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ForeignTaxRequest
     */
    tinNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ForeignTaxRequest
     */
    noTinResonCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ForeignTaxRequest
     */
    noTinReasonRemark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ForeignTaxRequest
     */
    logUser?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ForeignTaxRequest
     */
    logFlag?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ForeignTaxRequest
     */
    logTimestamp?: Date | null;
}

/**
 * Check if a given object implements the ForeignTaxRequest interface.
 */
export function instanceOfForeignTaxRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ForeignTaxRequestFromJSON(json: any): ForeignTaxRequest {
    return ForeignTaxRequestFromJSONTyped(json, false);
}

export function ForeignTaxRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForeignTaxRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'taxCountryCode': !exists(json, 'taxCountryCode') ? undefined : json['taxCountryCode'],
        'tinNo': !exists(json, 'tinNo') ? undefined : json['tinNo'],
        'noTinResonCode': !exists(json, 'noTinResonCode') ? undefined : json['noTinResonCode'],
        'noTinReasonRemark': !exists(json, 'noTinReasonRemark') ? undefined : json['noTinReasonRemark'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logTimestamp': !exists(json, 'logTimestamp') ? undefined : (json['logTimestamp'] === null ? null : new Date(json['logTimestamp'])),
    };
}

export function ForeignTaxRequestToJSON(value?: ForeignTaxRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'taxCountryCode': value.taxCountryCode,
        'tinNo': value.tinNo,
        'noTinResonCode': value.noTinResonCode,
        'noTinReasonRemark': value.noTinReasonRemark,
        'logUser': value.logUser,
        'logFlag': value.logFlag,
        'logTimestamp': value.logTimestamp === undefined ? undefined : (value.logTimestamp === null ? null : value.logTimestamp.toISOString()),
    };
}

