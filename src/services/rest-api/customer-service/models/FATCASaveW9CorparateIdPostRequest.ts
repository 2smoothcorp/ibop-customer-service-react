/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.316
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
 * @interface FATCASaveW9CorparateIdPostRequest
 */
export interface FATCASaveW9CorparateIdPostRequest {
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorparateIdPostRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorparateIdPostRequest
     */
    businessName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorparateIdPostRequest
     */
    appropriate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorparateIdPostRequest
     */
    address1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorparateIdPostRequest
     */
    address2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorparateIdPostRequest
     */
    address3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorparateIdPostRequest
     */
    zipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorparateIdPostRequest
     */
    accountList?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorparateIdPostRequest
     */
    ssn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorparateIdPostRequest
     */
    ein?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorparateIdPostRequest
     */
    exemptionPayeeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorparateIdPostRequest
     */
    exemptionReportingCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorparateIdPostRequest
     */
    refId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FATCASaveW9CorparateIdPostRequest
     */
    refType?: string | null;
}

/**
 * Check if a given object implements the FATCASaveW9CorparateIdPostRequest interface.
 */
export function instanceOfFATCASaveW9CorparateIdPostRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FATCASaveW9CorparateIdPostRequestFromJSON(json: any): FATCASaveW9CorparateIdPostRequest {
    return FATCASaveW9CorparateIdPostRequestFromJSONTyped(json, false);
}

export function FATCASaveW9CorparateIdPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FATCASaveW9CorparateIdPostRequest {
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

export function FATCASaveW9CorparateIdPostRequestToJSON(value?: FATCASaveW9CorparateIdPostRequest | null): any {
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

