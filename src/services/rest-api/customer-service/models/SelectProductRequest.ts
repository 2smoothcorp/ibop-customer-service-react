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
 * @interface SelectProductRequest
 */
export interface SelectProductRequest {
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    accountNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    accountType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    options?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof SelectProductRequest
     */
    isReserveAccountNo?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    atsBankCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    atsBankShortName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    atsAccountNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    eDividendBankCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    eDividendBankShortName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    eDividendAccountNo?: string | null;
    /**
     * 
     * @type {number}
     * @memberof SelectProductRequest
     */
    estCreditLine?: number | null;
    /**
     * 
     * @type {string}
     * @memberof SelectProductRequest
     */
    status?: string | null;
}

/**
 * Check if a given object implements the SelectProductRequest interface.
 */
export function instanceOfSelectProductRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SelectProductRequestFromJSON(json: any): SelectProductRequest {
    return SelectProductRequestFromJSONTyped(json, false);
}

export function SelectProductRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelectProductRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountNo': !exists(json, 'accountNo') ? undefined : json['accountNo'],
        'accountType': !exists(json, 'accountType') ? undefined : json['accountType'],
        'options': !exists(json, 'options') ? undefined : json['options'],
        'isReserveAccountNo': !exists(json, 'isReserveAccountNo') ? undefined : json['isReserveAccountNo'],
        'atsBankCode': !exists(json, 'atsBankCode') ? undefined : json['atsBankCode'],
        'atsBankShortName': !exists(json, 'atsBankShortName') ? undefined : json['atsBankShortName'],
        'atsAccountNo': !exists(json, 'atsAccountNo') ? undefined : json['atsAccountNo'],
        'eDividendBankCode': !exists(json, 'eDividendBankCode') ? undefined : json['eDividendBankCode'],
        'eDividendBankShortName': !exists(json, 'eDividendBankShortName') ? undefined : json['eDividendBankShortName'],
        'eDividendAccountNo': !exists(json, 'eDividendAccountNo') ? undefined : json['eDividendAccountNo'],
        'estCreditLine': !exists(json, 'estCreditLine') ? undefined : json['estCreditLine'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function SelectProductRequestToJSON(value?: SelectProductRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountNo': value.accountNo,
        'accountType': value.accountType,
        'options': value.options,
        'isReserveAccountNo': value.isReserveAccountNo,
        'atsBankCode': value.atsBankCode,
        'atsBankShortName': value.atsBankShortName,
        'atsAccountNo': value.atsAccountNo,
        'eDividendBankCode': value.eDividendBankCode,
        'eDividendBankShortName': value.eDividendBankShortName,
        'eDividendAccountNo': value.eDividendAccountNo,
        'estCreditLine': value.estCreditLine,
        'status': value.status,
    };
}

