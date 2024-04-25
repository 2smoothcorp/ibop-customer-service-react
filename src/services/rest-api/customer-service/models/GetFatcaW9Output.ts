/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.300
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
 * @interface GetFatcaW9Output
 */
export interface GetFatcaW9Output {
    /**
     * 
     * @type {string}
     * @memberof GetFatcaW9Output
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFatcaW9Output
     */
    businessName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFatcaW9Output
     */
    appropriate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFatcaW9Output
     */
    address1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFatcaW9Output
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFatcaW9Output
     */
    address3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFatcaW9Output
     */
    zipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFatcaW9Output
     */
    accountList?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFatcaW9Output
     */
    ssn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFatcaW9Output
     */
    ein?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFatcaW9Output
     */
    exemptionPayeeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFatcaW9Output
     */
    exemptionReportingCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFatcaW9Output
     */
    refId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetFatcaW9Output
     */
    refType?: string | null;
}

/**
 * Check if a given object implements the GetFatcaW9Output interface.
 */
export function instanceOfGetFatcaW9Output(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetFatcaW9OutputFromJSON(json: any): GetFatcaW9Output {
    return GetFatcaW9OutputFromJSONTyped(json, false);
}

export function GetFatcaW9OutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetFatcaW9Output {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'businessName': !exists(json, 'businessName') ? undefined : json['businessName'],
        'appropriate': !exists(json, 'appropriate') ? undefined : json['appropriate'],
        'address1': !exists(json, 'address1') ? undefined : json['address1'],
        'address2': !exists(json, 'address2') ? undefined : json['address2'],
        'address3': !exists(json, 'address3') ? undefined : json['address3'],
        'zipCode': !exists(json, 'zipCode') ? undefined : json['zipCode'],
        'accountList': !exists(json, 'accountList') ? undefined : json['accountList'],
        'ssn': !exists(json, 'ssn') ? undefined : json['ssn'],
        'ein': !exists(json, 'ein') ? undefined : json['ein'],
        'exemptionPayeeCode': !exists(json, 'exemptionPayeeCode') ? undefined : json['exemptionPayeeCode'],
        'exemptionReportingCode': !exists(json, 'exemptionReportingCode') ? undefined : json['exemptionReportingCode'],
        'refId': !exists(json, 'refId') ? undefined : json['refId'],
        'refType': !exists(json, 'refType') ? undefined : json['refType'],
    };
}

export function GetFatcaW9OutputToJSON(value?: GetFatcaW9Output | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'businessName': value.businessName,
        'appropriate': value.appropriate,
        'address1': value.address1,
        'address2': value.address2,
        'address3': value.address3,
        'zipCode': value.zipCode,
        'accountList': value.accountList,
        'ssn': value.ssn,
        'ein': value.ein,
        'exemptionPayeeCode': value.exemptionPayeeCode,
        'exemptionReportingCode': value.exemptionReportingCode,
        'refId': value.refId,
        'refType': value.refType,
    };
}

