/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.299
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
 * @interface BackOfficeReportOutput
 */
export interface BackOfficeReportOutput {
    /**
     * 
     * @type {string}
     * @memberof BackOfficeReportOutput
     */
    accountNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BackOfficeReportOutput
     */
    accountType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BackOfficeReportOutput
     */
    boAccountType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BackOfficeReportOutput
     */
    boAccountNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BackOfficeReportOutput
     */
    status?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof BackOfficeReportOutput
     */
    activateTimestamp?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof BackOfficeReportOutput
     */
    logTimeStamp?: Date | null;
}

/**
 * Check if a given object implements the BackOfficeReportOutput interface.
 */
export function instanceOfBackOfficeReportOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BackOfficeReportOutputFromJSON(json: any): BackOfficeReportOutput {
    return BackOfficeReportOutputFromJSONTyped(json, false);
}

export function BackOfficeReportOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): BackOfficeReportOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountNo': !exists(json, 'accountNo') ? undefined : json['accountNo'],
        'accountType': !exists(json, 'accountType') ? undefined : json['accountType'],
        'boAccountType': !exists(json, 'boAccountType') ? undefined : json['boAccountType'],
        'boAccountNo': !exists(json, 'boAccountNo') ? undefined : json['boAccountNo'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'activateTimestamp': !exists(json, 'activateTimestamp') ? undefined : (json['activateTimestamp'] === null ? null : new Date(json['activateTimestamp'])),
        'logTimeStamp': !exists(json, 'logTimeStamp') ? undefined : (json['logTimeStamp'] === null ? null : new Date(json['logTimeStamp'])),
    };
}

export function BackOfficeReportOutputToJSON(value?: BackOfficeReportOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountNo': value.accountNo,
        'accountType': value.accountType,
        'boAccountType': value.boAccountType,
        'boAccountNo': value.boAccountNo,
        'status': value.status,
        'activateTimestamp': value.activateTimestamp === undefined ? undefined : (value.activateTimestamp === null ? null : value.activateTimestamp.toISOString()),
        'logTimeStamp': value.logTimeStamp === undefined ? undefined : (value.logTimeStamp === null ? null : value.logTimeStamp.toISOString()),
    };
}

