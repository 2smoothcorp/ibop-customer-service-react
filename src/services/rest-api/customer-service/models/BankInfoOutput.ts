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
 * @interface BankInfoOutput
 */
export interface BankInfoOutput {
    /**
     * 
     * @type {number}
     * @memberof BankInfoOutput
     */
    bankID?: number;
    /**
     * 
     * @type {string}
     * @memberof BankInfoOutput
     */
    bankCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BankInfoOutput
     */
    bankShortName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BankInfoOutput
     */
    bankNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BankInfoOutput
     */
    bankNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BankInfoOutput
     */
    bankAccountNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BankInfoOutput
     */
    bankType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BankInfoOutput
     */
    isDefault?: string | null;
}

/**
 * Check if a given object implements the BankInfoOutput interface.
 */
export function instanceOfBankInfoOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BankInfoOutputFromJSON(json: any): BankInfoOutput {
    return BankInfoOutputFromJSONTyped(json, false);
}

export function BankInfoOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankInfoOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bankID': !exists(json, 'bankID') ? undefined : json['bankID'],
        'bankCode': !exists(json, 'bankCode') ? undefined : json['bankCode'],
        'bankShortName': !exists(json, 'bankShortName') ? undefined : json['bankShortName'],
        'bankNameTh': !exists(json, 'bankNameTh') ? undefined : json['bankNameTh'],
        'bankNameEn': !exists(json, 'bankNameEn') ? undefined : json['bankNameEn'],
        'bankAccountNo': !exists(json, 'bankAccountNo') ? undefined : json['bankAccountNo'],
        'bankType': !exists(json, 'bankType') ? undefined : json['bankType'],
        'isDefault': !exists(json, 'isDefault') ? undefined : json['isDefault'],
    };
}

export function BankInfoOutputToJSON(value?: BankInfoOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bankID': value.bankID,
        'bankCode': value.bankCode,
        'bankShortName': value.bankShortName,
        'bankNameTh': value.bankNameTh,
        'bankNameEn': value.bankNameEn,
        'bankAccountNo': value.bankAccountNo,
        'bankType': value.bankType,
        'isDefault': value.isDefault,
    };
}

