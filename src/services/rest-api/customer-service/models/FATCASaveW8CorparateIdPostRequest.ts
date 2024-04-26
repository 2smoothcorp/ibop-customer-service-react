/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.313
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
 * @interface FATCASaveW8CorparateIdPostRequest
 */
export interface FATCASaveW8CorparateIdPostRequest {
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    citizenCountryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    address1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    address3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    mailingAddress1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    mailingAddress2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    mailingAddress3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    mailingCountryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    taxNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    foreignTaxNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    foreignTaxNoRemark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    referenceNo?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    dateOfBirth?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    beneficialTaxRate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    additionCondition?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    beneficialTaxRemark1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    beneficialTaxRemark2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    beneficialTaxRemark3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    beneficialCountryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    refId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW8CorparateIdPostRequest
     */
    refType?: string | null;
}

/**
 * Check if a given object implements the FATCASaveW8CorparateIdPostRequest interface.
 */
export function instanceOfFATCASaveW8CorparateIdPostRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FATCASaveW8CorparateIdPostRequestFromJSON(json: any): FATCASaveW8CorparateIdPostRequest {
    return FATCASaveW8CorparateIdPostRequestFromJSONTyped(json, false);
}

export function FATCASaveW8CorparateIdPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FATCASaveW8CorparateIdPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
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
        'beneficialTaxRemark1': !exists(json, 'beneficialTaxRemark1') ? undefined : json['beneficialTaxRemark1'],
        'beneficialTaxRemark2': !exists(json, 'beneficialTaxRemark2') ? undefined : json['beneficialTaxRemark2'],
        'beneficialTaxRemark3': !exists(json, 'beneficialTaxRemark3') ? undefined : json['beneficialTaxRemark3'],
        'beneficialCountryCode': !exists(json, 'beneficialCountryCode') ? undefined : json['beneficialCountryCode'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'refId': !exists(json, 'refId') ? undefined : json['refId'],
        'refType': !exists(json, 'refType') ? undefined : json['refType'],
    };
}

export function FATCASaveW8CorparateIdPostRequestToJSON(value?: FATCASaveW8CorparateIdPostRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
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
        'beneficialTaxRemark1': value.beneficialTaxRemark1,
        'beneficialTaxRemark2': value.beneficialTaxRemark2,
        'beneficialTaxRemark3': value.beneficialTaxRemark3,
        'beneficialCountryCode': value.beneficialCountryCode,
        'name': value.name,
        'refId': value.refId,
        'refType': value.refType,
    };
}

