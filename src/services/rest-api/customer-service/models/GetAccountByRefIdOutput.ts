/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.294
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
 * @interface GetAccountByRefIdOutput
 */
export interface GetAccountByRefIdOutput {
    /**
     * 
     * @type {string}
     * @memberof GetAccountByRefIdOutput
     */
    accountNo?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GetAccountByRefIdOutput
     */
    suitScore?: number;
    /**
     * 
     * @type {Date}
     * @memberof GetAccountByRefIdOutput
     */
    suitDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof GetAccountByRefIdOutput
     */
    fatcaFlag?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GetAccountByRefIdOutput
     */
    creditLine?: number;
    /**
     * 
     * @type {string}
     * @memberof GetAccountByRefIdOutput
     */
    atsFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetAccountByRefIdOutput
     */
    atsBackCd?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetAccountByRefIdOutput
     */
    atsBankAcctNo?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof GetAccountByRefIdOutput
     */
    kycExpiredDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof GetAccountByRefIdOutput
     */
    birthDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof GetAccountByRefIdOutput
     */
    email?: string | null;
}

/**
 * Check if a given object implements the GetAccountByRefIdOutput interface.
 */
export function instanceOfGetAccountByRefIdOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetAccountByRefIdOutputFromJSON(json: any): GetAccountByRefIdOutput {
    return GetAccountByRefIdOutputFromJSONTyped(json, false);
}

export function GetAccountByRefIdOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAccountByRefIdOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountNo': !exists(json, 'accountNo') ? undefined : json['accountNo'],
        'suitScore': !exists(json, 'suitScore') ? undefined : json['suitScore'],
        'suitDate': !exists(json, 'suitDate') ? undefined : (new Date(json['suitDate'])),
        'fatcaFlag': !exists(json, 'fatcaFlag') ? undefined : json['fatcaFlag'],
        'creditLine': !exists(json, 'creditLine') ? undefined : json['creditLine'],
        'atsFlag': !exists(json, 'atsFlag') ? undefined : json['atsFlag'],
        'atsBackCd': !exists(json, 'atsBackCd') ? undefined : json['atsBackCd'],
        'atsBankAcctNo': !exists(json, 'atsBankAcctNo') ? undefined : json['atsBankAcctNo'],
        'kycExpiredDate': !exists(json, 'kycExpiredDate') ? undefined : (new Date(json['kycExpiredDate'])),
        'birthDate': !exists(json, 'birthDate') ? undefined : (new Date(json['birthDate'])),
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}

export function GetAccountByRefIdOutputToJSON(value?: GetAccountByRefIdOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountNo': value.accountNo,
        'suitScore': value.suitScore,
        'suitDate': value.suitDate === undefined ? undefined : (value.suitDate.toISOString()),
        'fatcaFlag': value.fatcaFlag,
        'creditLine': value.creditLine,
        'atsFlag': value.atsFlag,
        'atsBackCd': value.atsBackCd,
        'atsBankAcctNo': value.atsBankAcctNo,
        'kycExpiredDate': value.kycExpiredDate === undefined ? undefined : (value.kycExpiredDate.toISOString()),
        'birthDate': value.birthDate === undefined ? undefined : (value.birthDate.toISOString()),
        'email': value.email,
    };
}

