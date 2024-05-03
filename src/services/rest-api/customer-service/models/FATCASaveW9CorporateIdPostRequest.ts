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
 * @interface FATCASaveW9CorporateIdPostRequest
 */
export interface FATCASaveW9CorporateIdPostRequest {
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorporateIdPostRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorporateIdPostRequest
     */
    businessName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorporateIdPostRequest
     */
    appropriate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorporateIdPostRequest
     */
    address1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorporateIdPostRequest
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorporateIdPostRequest
     */
    address3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorporateIdPostRequest
     */
    zipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorporateIdPostRequest
     */
    accountList?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorporateIdPostRequest
     */
    ssn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorporateIdPostRequest
     */
    ein?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorporateIdPostRequest
     */
    exemptionPayeeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorporateIdPostRequest
     */
    exemptionReportingCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorporateIdPostRequest
     */
    refId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorporateIdPostRequest
     */
    refType?: string | null;
}

/**
 * Check if a given object implements the FATCASaveW9CorporateIdPostRequest interface.
 */
export function instanceOfFATCASaveW9CorporateIdPostRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FATCASaveW9CorporateIdPostRequestFromJSON(json: any): FATCASaveW9CorporateIdPostRequest {
    return FATCASaveW9CorporateIdPostRequestFromJSONTyped(json, false);
}

export function FATCASaveW9CorporateIdPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FATCASaveW9CorporateIdPostRequest {
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

export function FATCASaveW9CorporateIdPostRequestToJSON(value?: FATCASaveW9CorporateIdPostRequest | null): any {
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

