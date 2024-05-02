/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.330
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
 * @interface BankInfoModel
 */
export interface BankInfoModel {
    /**
     * 
     * @type {number}
     * @memberof BankInfoModel
     */
    bankID?: number;
    /**
     * 
     * @type {string}
     * @memberof BankInfoModel
     */
    bankCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BankInfoModel
     */
    bank?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BankInfoModel
     */
    accountNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BankInfoModel
     */
    accountName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BankInfoModel
     */
    registerMethod?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof BankInfoModel
     */
    isDefault?: boolean;
    /**
     * 
     * @type {string}
     * @memberof BankInfoModel
     */
    action?: string | null;
}

/**
 * Check if a given object implements the BankInfoModel interface.
 */
export function instanceOfBankInfoModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BankInfoModelFromJSON(json: any): BankInfoModel {
    return BankInfoModelFromJSONTyped(json, false);
}

export function BankInfoModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankInfoModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bankID': !exists(json, 'bankID') ? undefined : json['bankID'],
        'bankCode': !exists(json, 'bankCode') ? undefined : json['bankCode'],
        'bank': !exists(json, 'bank') ? undefined : json['bank'],
        'accountNo': !exists(json, 'accountNo') ? undefined : json['accountNo'],
        'accountName': !exists(json, 'accountName') ? undefined : json['accountName'],
        'registerMethod': !exists(json, 'registerMethod') ? undefined : json['registerMethod'],
        'isDefault': !exists(json, 'isDefault') ? undefined : json['isDefault'],
        'action': !exists(json, 'action') ? undefined : json['action'],
    };
}

export function BankInfoModelToJSON(value?: BankInfoModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bankID': value.bankID,
        'bankCode': value.bankCode,
        'bank': value.bank,
        'accountNo': value.accountNo,
        'accountName': value.accountName,
        'registerMethod': value.registerMethod,
        'isDefault': value.isDefault,
        'action': value.action,
    };
}

