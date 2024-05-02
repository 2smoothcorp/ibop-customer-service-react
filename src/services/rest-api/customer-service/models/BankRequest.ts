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
 * @interface BankRequest
 */
export interface BankRequest {
    /**
     * 
     * @type {string}
     * @memberof BankRequest
     */
    bankCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BankRequest
     */
    bankShortName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BankRequest
     */
    bankAccountNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BankRequest
     */
    bankAccountName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BankRequest
     */
    bankType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BankRequest
     */
    isDefault?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BankRequest
     */
    registerMethod?: string | null;
}

/**
 * Check if a given object implements the BankRequest interface.
 */
export function instanceOfBankRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BankRequestFromJSON(json: any): BankRequest {
    return BankRequestFromJSONTyped(json, false);
}

export function BankRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bankCode': !exists(json, 'bankCode') ? undefined : json['bankCode'],
        'bankShortName': !exists(json, 'bankShortName') ? undefined : json['bankShortName'],
        'bankAccountNo': !exists(json, 'bankAccountNo') ? undefined : json['bankAccountNo'],
        'bankAccountName': !exists(json, 'bankAccountName') ? undefined : json['bankAccountName'],
        'bankType': !exists(json, 'bankType') ? undefined : json['bankType'],
        'isDefault': !exists(json, 'isDefault') ? undefined : json['isDefault'],
        'registerMethod': !exists(json, 'registerMethod') ? undefined : json['registerMethod'],
    };
}

export function BankRequestToJSON(value?: BankRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bankCode': value.bankCode,
        'bankShortName': value.bankShortName,
        'bankAccountNo': value.bankAccountNo,
        'bankAccountName': value.bankAccountName,
        'bankType': value.bankType,
        'isDefault': value.isDefault,
        'registerMethod': value.registerMethod,
    };
}

