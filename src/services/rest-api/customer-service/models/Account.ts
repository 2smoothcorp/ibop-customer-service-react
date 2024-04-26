/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.310
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
 * @interface Account
 */
export interface Account {
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    accountNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    accountType?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof Account
     */
    isReserveAccountNo?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof Account
     */
    customerId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    atsbankCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    atsaccountNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    edividendBankCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    edividendAccountNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    status?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    activateBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Account
     */
    activateTimestamp?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    productKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    boProductKey?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    options?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    boAccountNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    sourceOfData?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    atsbankShortName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    edividendBankShortName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    referenceType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    logUser?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Account
     */
    logFlag?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Account
     */
    logTimestamp?: Date | null;
}

/**
 * Check if a given object implements the Account interface.
 */
export function instanceOfAccount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountFromJSON(json: any): Account {
    return AccountFromJSONTyped(json, false);
}

export function AccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Account {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountNo': !exists(json, 'accountNo') ? undefined : json['accountNo'],
        'accountType': !exists(json, 'accountType') ? undefined : json['accountType'],
        'isReserveAccountNo': !exists(json, 'isReserveAccountNo') ? undefined : json['isReserveAccountNo'],
        'customerId': !exists(json, 'customerId') ? undefined : json['customerId'],
        'atsbankCode': !exists(json, 'atsbankCode') ? undefined : json['atsbankCode'],
        'atsaccountNo': !exists(json, 'atsaccountNo') ? undefined : json['atsaccountNo'],
        'edividendBankCode': !exists(json, 'edividendBankCode') ? undefined : json['edividendBankCode'],
        'edividendAccountNo': !exists(json, 'edividendAccountNo') ? undefined : json['edividendAccountNo'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'activateBy': !exists(json, 'activateBy') ? undefined : json['activateBy'],
        'activateTimestamp': !exists(json, 'activateTimestamp') ? undefined : (json['activateTimestamp'] === null ? null : new Date(json['activateTimestamp'])),
        'productKey': !exists(json, 'productKey') ? undefined : json['productKey'],
        'boProductKey': !exists(json, 'boProductKey') ? undefined : json['boProductKey'],
        'options': !exists(json, 'options') ? undefined : json['options'],
        'boAccountNo': !exists(json, 'boAccountNo') ? undefined : json['boAccountNo'],
        'sourceOfData': !exists(json, 'sourceOfData') ? undefined : json['sourceOfData'],
        'atsbankShortName': !exists(json, 'atsbankShortName') ? undefined : json['atsbankShortName'],
        'edividendBankShortName': !exists(json, 'edividendBankShortName') ? undefined : json['edividendBankShortName'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logTimestamp': !exists(json, 'logTimestamp') ? undefined : (json['logTimestamp'] === null ? null : new Date(json['logTimestamp'])),
    };
}

export function AccountToJSON(value?: Account | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountNo': value.accountNo,
        'accountType': value.accountType,
        'isReserveAccountNo': value.isReserveAccountNo,
        'customerId': value.customerId,
        'atsbankCode': value.atsbankCode,
        'atsaccountNo': value.atsaccountNo,
        'edividendBankCode': value.edividendBankCode,
        'edividendAccountNo': value.edividendAccountNo,
        'status': value.status,
        'activateBy': value.activateBy,
        'activateTimestamp': value.activateTimestamp === undefined ? undefined : (value.activateTimestamp === null ? null : value.activateTimestamp.toISOString()),
        'productKey': value.productKey,
        'boProductKey': value.boProductKey,
        'options': value.options,
        'boAccountNo': value.boAccountNo,
        'sourceOfData': value.sourceOfData,
        'atsbankShortName': value.atsbankShortName,
        'edividendBankShortName': value.edividendBankShortName,
        'referenceType': value.referenceType,
        'referenceId': value.referenceId,
        'logUser': value.logUser,
        'logFlag': value.logFlag,
        'logTimestamp': value.logTimestamp === undefined ? undefined : (value.logTimestamp === null ? null : value.logTimestamp.toISOString()),
    };
}

