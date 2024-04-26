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
 * @interface CustomerInfoListResponse
 */
export interface CustomerInfoListResponse {
    /**
     * 
     * @type {string}
     * @memberof CustomerInfoListResponse
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerInfoListResponse
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerInfoListResponse
     */
    fullNameTH?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerInfoListResponse
     */
    fullNameEN?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerInfoListResponse
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerInfoListResponse
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerInfoListResponse
     */
    accountCreateDate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerInfoListResponse
     */
    accountBranch?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerInfoListResponse
     */
    advisor?: string | null;
}

/**
 * Check if a given object implements the CustomerInfoListResponse interface.
 */
export function instanceOfCustomerInfoListResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerInfoListResponseFromJSON(json: any): CustomerInfoListResponse {
    return CustomerInfoListResponseFromJSONTyped(json, false);
}

export function CustomerInfoListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerInfoListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'fullNameTH': !exists(json, 'fullNameTH') ? undefined : json['fullNameTH'],
        'fullNameEN': !exists(json, 'fullNameEN') ? undefined : json['fullNameEN'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'accountCreateDate': !exists(json, 'accountCreateDate') ? undefined : json['accountCreateDate'],
        'accountBranch': !exists(json, 'accountBranch') ? undefined : json['accountBranch'],
        'advisor': !exists(json, 'advisor') ? undefined : json['advisor'],
    };
}

export function CustomerInfoListResponseToJSON(value?: CustomerInfoListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'referenceId': value.referenceId,
        'fullNameTH': value.fullNameTH,
        'fullNameEN': value.fullNameEN,
        'email': value.email,
        'phoneNumber': value.phoneNumber,
        'accountCreateDate': value.accountCreateDate,
        'accountBranch': value.accountBranch,
        'advisor': value.advisor,
    };
}

