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
 * @interface CustomerW9america
 */
export interface CustomerW9america {
    /**
     * 
     * @type {string}
     * @memberof CustomerW9america
     */
    refId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW9america
     */
    refType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW9america
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW9america
     */
    businessName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW9america
     */
    appropriate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW9america
     */
    address1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW9america
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW9america
     */
    address3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW9america
     */
    zipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW9america
     */
    accountList?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW9america
     */
    logUser?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW9america
     */
    logFlag?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof CustomerW9america
     */
    logTimestamp?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW9america
     */
    ssn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW9america
     */
    ein?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW9america
     */
    exemptionPayeeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerW9america
     */
    exemptionReportingCode?: string | null;
}

/**
 * Check if a given object implements the CustomerW9america interface.
 */
export function instanceOfCustomerW9america(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerW9americaFromJSON(json: any): CustomerW9america {
    return CustomerW9americaFromJSONTyped(json, false);
}

export function CustomerW9americaFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerW9america {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'refId': !exists(json, 'refId') ? undefined : json['refId'],
        'refType': !exists(json, 'refType') ? undefined : json['refType'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'businessName': !exists(json, 'businessName') ? undefined : json['businessName'],
        'appropriate': !exists(json, 'appropriate') ? undefined : json['appropriate'],
        'address1': !exists(json, 'address1') ? undefined : json['address1'],
        'address2': !exists(json, 'address2') ? undefined : json['address2'],
        'address3': !exists(json, 'address3') ? undefined : json['address3'],
        'zipCode': !exists(json, 'zipCode') ? undefined : json['zipCode'],
        'accountList': !exists(json, 'accountList') ? undefined : json['accountList'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logTimestamp': !exists(json, 'logTimestamp') ? undefined : (json['logTimestamp'] === null ? null : new Date(json['logTimestamp'])),
        'ssn': !exists(json, 'ssn') ? undefined : json['ssn'],
        'ein': !exists(json, 'ein') ? undefined : json['ein'],
        'exemptionPayeeCode': !exists(json, 'exemptionPayeeCode') ? undefined : json['exemptionPayeeCode'],
        'exemptionReportingCode': !exists(json, 'exemptionReportingCode') ? undefined : json['exemptionReportingCode'],
    };
}

export function CustomerW9americaToJSON(value?: CustomerW9america | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'refId': value.refId,
        'refType': value.refType,
        'name': value.name,
        'businessName': value.businessName,
        'appropriate': value.appropriate,
        'address1': value.address1,
        'address2': value.address2,
        'address3': value.address3,
        'zipCode': value.zipCode,
        'accountList': value.accountList,
        'logUser': value.logUser,
        'logFlag': value.logFlag,
        'logTimestamp': value.logTimestamp === undefined ? undefined : (value.logTimestamp === null ? null : value.logTimestamp.toISOString()),
        'ssn': value.ssn,
        'ein': value.ein,
        'exemptionPayeeCode': value.exemptionPayeeCode,
        'exemptionReportingCode': value.exemptionReportingCode,
    };
}

