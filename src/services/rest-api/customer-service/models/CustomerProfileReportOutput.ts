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
 * @interface CustomerProfileReportOutput
 */
export interface CustomerProfileReportOutput {
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileReportOutput
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileReportOutput
     */
    firstNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileReportOutput
     */
    lastNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileReportOutput
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileReportOutput
     */
    referenceType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileReportOutput
     */
    referenceTypeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileReportOutput
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileReportOutput
     */
    personTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileReportOutput
     */
    personTypeDesc?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CustomerProfileReportOutput
     */
    openDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerProfileReportOutput
     */
    boAccountNo?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CustomerProfileReportOutput
     */
    logTimestamp?: Date | null;
}

/**
 * Check if a given object implements the CustomerProfileReportOutput interface.
 */
export function instanceOfCustomerProfileReportOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerProfileReportOutputFromJSON(json: any): CustomerProfileReportOutput {
    return CustomerProfileReportOutputFromJSONTyped(json, false);
}

export function CustomerProfileReportOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerProfileReportOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'firstNameTh': !exists(json, 'firstNameTh') ? undefined : json['firstNameTh'],
        'lastNameTh': !exists(json, 'lastNameTh') ? undefined : json['lastNameTh'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceTypeDesc': !exists(json, 'referenceTypeDesc') ? undefined : json['referenceTypeDesc'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'personTypeCode': !exists(json, 'personTypeCode') ? undefined : json['personTypeCode'],
        'personTypeDesc': !exists(json, 'personTypeDesc') ? undefined : json['personTypeDesc'],
        'openDate': !exists(json, 'openDate') ? undefined : (json['openDate'] === null ? null : new Date(json['openDate'])),
        'boAccountNo': !exists(json, 'boAccountNo') ? undefined : json['boAccountNo'],
        'logTimestamp': !exists(json, 'logTimestamp') ? undefined : (json['logTimestamp'] === null ? null : new Date(json['logTimestamp'])),
    };
}

export function CustomerProfileReportOutputToJSON(value?: CustomerProfileReportOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'firstNameTh': value.firstNameTh,
        'lastNameTh': value.lastNameTh,
        'name': value.name,
        'referenceType': value.referenceType,
        'referenceTypeDesc': value.referenceTypeDesc,
        'referenceId': value.referenceId,
        'personTypeCode': value.personTypeCode,
        'personTypeDesc': value.personTypeDesc,
        'openDate': value.openDate === undefined ? undefined : (value.openDate === null ? null : value.openDate.toISOString()),
        'boAccountNo': value.boAccountNo,
        'logTimestamp': value.logTimestamp === undefined ? undefined : (value.logTimestamp === null ? null : value.logTimestamp.toISOString()),
    };
}

