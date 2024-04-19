/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.268
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
 * @interface CustomerW8ben
 */
export interface CustomerW8ben {
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    refId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    refType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    citizenCountryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    address1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    address3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    mailingAddress1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    mailingAddress2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    mailingAddress3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    mailingCountryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    taxNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    foreignTaxNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    foreignTaxNoRemark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    referenceNo?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CustomerW8ben
     */
    dateOfBirth?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    beneficialTaxRate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    additionCondition?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    logUser?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    logFlag?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CustomerW8ben
     */
    logTimestamp?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    beneficialTaxRemark1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    beneficialTaxRemark2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    beneficialTaxRemark3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    beneficialCountryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW8ben
     */
    name?: string | null;
}

/**
 * Check if a given object implements the CustomerW8ben interface.
 */
export function instanceOfCustomerW8ben(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerW8benFromJSON(json: any): CustomerW8ben {
    return CustomerW8benFromJSONTyped(json, false);
}

export function CustomerW8benFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerW8ben {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'refId': !exists(json, 'refId') ? undefined : json['refId'],
        'refType': !exists(json, 'refType') ? undefined : json['refType'],
        'citizenCountryCode': !exists(json, 'citizenCountryCode') ? undefined : json['citizenCountryCode'],
        'address1': !exists(json, 'address1') ? undefined : json['address1'],
        'address2': !exists(json, 'address2') ? undefined : json['address2'],
        'address3': !exists(json, 'address3') ? undefined : json['address3'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'mailingAddress1': !exists(json, 'mailingAddress1') ? undefined : json['mailingAddress1'],
        'mailingAddress2': !exists(json, 'mailingAddress2') ? undefined : json['mailingAddress2'],
        'mailingAddress3': !exists(json, 'mailingAddress3') ? undefined : json['mailingAddress3'],
        'mailingCountryCode': !exists(json, 'mailingCountryCode') ? undefined : json['mailingCountryCode'],
        'taxNo': !exists(json, 'taxNo') ? undefined : json['taxNo'],
        'foreignTaxNo': !exists(json, 'foreignTaxNo') ? undefined : json['foreignTaxNo'],
        'foreignTaxNoRemark': !exists(json, 'foreignTaxNoRemark') ? undefined : json['foreignTaxNoRemark'],
        'referenceNo': !exists(json, 'referenceNo') ? undefined : json['referenceNo'],
        'dateOfBirth': !exists(json, 'dateOfBirth') ? undefined : (json['dateOfBirth'] === null ? null : new Date(json['dateOfBirth'])),
        'beneficialTaxRate': !exists(json, 'beneficialTaxRate') ? undefined : json['beneficialTaxRate'],
        'additionCondition': !exists(json, 'additionCondition') ? undefined : json['additionCondition'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logTimestamp': !exists(json, 'logTimestamp') ? undefined : (json['logTimestamp'] === null ? null : new Date(json['logTimestamp'])),
        'beneficialTaxRemark1': !exists(json, 'beneficialTaxRemark1') ? undefined : json['beneficialTaxRemark1'],
        'beneficialTaxRemark2': !exists(json, 'beneficialTaxRemark2') ? undefined : json['beneficialTaxRemark2'],
        'beneficialTaxRemark3': !exists(json, 'beneficialTaxRemark3') ? undefined : json['beneficialTaxRemark3'],
        'beneficialCountryCode': !exists(json, 'beneficialCountryCode') ? undefined : json['beneficialCountryCode'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function CustomerW8benToJSON(value?: CustomerW8ben | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'refId': value.refId,
        'refType': value.refType,
        'citizenCountryCode': value.citizenCountryCode,
        'address1': value.address1,
        'address2': value.address2,
        'address3': value.address3,
        'countryCode': value.countryCode,
        'mailingAddress1': value.mailingAddress1,
        'mailingAddress2': value.mailingAddress2,
        'mailingAddress3': value.mailingAddress3,
        'mailingCountryCode': value.mailingCountryCode,
        'taxNo': value.taxNo,
        'foreignTaxNo': value.foreignTaxNo,
        'foreignTaxNoRemark': value.foreignTaxNoRemark,
        'referenceNo': value.referenceNo,
        'dateOfBirth': value.dateOfBirth === undefined ? undefined : (value.dateOfBirth === null ? null : value.dateOfBirth.toISOString()),
        'beneficialTaxRate': value.beneficialTaxRate,
        'additionCondition': value.additionCondition,
        'logUser': value.logUser,
        'logFlag': value.logFlag,
        'logTimestamp': value.logTimestamp === undefined ? undefined : (value.logTimestamp === null ? null : value.logTimestamp.toISOString()),
        'beneficialTaxRemark1': value.beneficialTaxRemark1,
        'beneficialTaxRemark2': value.beneficialTaxRemark2,
        'beneficialTaxRemark3': value.beneficialTaxRemark3,
        'beneficialCountryCode': value.beneficialCountryCode,
        'name': value.name,
    };
}

