/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.364
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
 * @interface AttorneyRequest
 */
export interface AttorneyRequest {
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    titleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    titleOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    referenceTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    referenceNo?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof AttorneyRequest
     */
    referenceExpireDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof AttorneyRequest
     */
    referenceNeverExpire?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    relationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    relationOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    nationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    tel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    mobile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    addressNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    moo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    buildingOrVillage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    roomNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    floor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    soi?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    street?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    tambonCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    amphurCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    provinceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    postCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    customAddress1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    customAddress2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    customAddress3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    createdBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof AttorneyRequest
     */
    createdDateTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyRequest
     */
    modifiedBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof AttorneyRequest
     */
    modifiedDateTime?: Date | null;
}

/**
 * Check if a given object implements the AttorneyRequest interface.
 */
export function instanceOfAttorneyRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttorneyRequestFromJSON(json: any): AttorneyRequest {
    return AttorneyRequestFromJSONTyped(json, false);
}

export function AttorneyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttorneyRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'titleCode': !exists(json, 'titleCode') ? undefined : json['titleCode'],
        'titleOther': !exists(json, 'titleOther') ? undefined : json['titleOther'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'referenceTypeCode': !exists(json, 'referenceTypeCode') ? undefined : json['referenceTypeCode'],
        'referenceNo': !exists(json, 'referenceNo') ? undefined : json['referenceNo'],
        'referenceExpireDate': !exists(json, 'referenceExpireDate') ? undefined : (json['referenceExpireDate'] === null ? null : new Date(json['referenceExpireDate'])),
        'referenceNeverExpire': !exists(json, 'referenceNeverExpire') ? undefined : json['referenceNeverExpire'],
        'relationCode': !exists(json, 'relationCode') ? undefined : json['relationCode'],
        'relationOther': !exists(json, 'relationOther') ? undefined : json['relationOther'],
        'nationCode': !exists(json, 'nationCode') ? undefined : json['nationCode'],
        'tel': !exists(json, 'tel') ? undefined : json['tel'],
        'mobile': !exists(json, 'mobile') ? undefined : json['mobile'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'addressNo': !exists(json, 'addressNo') ? undefined : json['addressNo'],
        'moo': !exists(json, 'moo') ? undefined : json['moo'],
        'buildingOrVillage': !exists(json, 'buildingOrVillage') ? undefined : json['buildingOrVillage'],
        'roomNo': !exists(json, 'roomNo') ? undefined : json['roomNo'],
        'floor': !exists(json, 'floor') ? undefined : json['floor'],
        'soi': !exists(json, 'soi') ? undefined : json['soi'],
        'street': !exists(json, 'street') ? undefined : json['street'],
        'tambonCode': !exists(json, 'tambonCode') ? undefined : json['tambonCode'],
        'amphurCode': !exists(json, 'amphurCode') ? undefined : json['amphurCode'],
        'provinceCode': !exists(json, 'provinceCode') ? undefined : json['provinceCode'],
        'postCode': !exists(json, 'postCode') ? undefined : json['postCode'],
        'customAddress1': !exists(json, 'customAddress1') ? undefined : json['customAddress1'],
        'customAddress2': !exists(json, 'customAddress2') ? undefined : json['customAddress2'],
        'customAddress3': !exists(json, 'customAddress3') ? undefined : json['customAddress3'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'createdDateTime': !exists(json, 'createdDateTime') ? undefined : (json['createdDateTime'] === null ? null : new Date(json['createdDateTime'])),
        'modifiedBy': !exists(json, 'modifiedBy') ? undefined : json['modifiedBy'],
        'modifiedDateTime': !exists(json, 'modifiedDateTime') ? undefined : (json['modifiedDateTime'] === null ? null : new Date(json['modifiedDateTime'])),
    };
}

export function AttorneyRequestToJSON(value?: AttorneyRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'titleCode': value.titleCode,
        'titleOther': value.titleOther,
        'name': value.name,
        'referenceTypeCode': value.referenceTypeCode,
        'referenceNo': value.referenceNo,
        'referenceExpireDate': value.referenceExpireDate === undefined ? undefined : (value.referenceExpireDate === null ? null : value.referenceExpireDate.toISOString()),
        'referenceNeverExpire': value.referenceNeverExpire,
        'relationCode': value.relationCode,
        'relationOther': value.relationOther,
        'nationCode': value.nationCode,
        'tel': value.tel,
        'mobile': value.mobile,
        'email': value.email,
        'addressNo': value.addressNo,
        'moo': value.moo,
        'buildingOrVillage': value.buildingOrVillage,
        'roomNo': value.roomNo,
        'floor': value.floor,
        'soi': value.soi,
        'street': value.street,
        'tambonCode': value.tambonCode,
        'amphurCode': value.amphurCode,
        'provinceCode': value.provinceCode,
        'postCode': value.postCode,
        'customAddress1': value.customAddress1,
        'customAddress2': value.customAddress2,
        'customAddress3': value.customAddress3,
        'countryCode': value.countryCode,
        'productCode': value.productCode,
        'createdBy': value.createdBy,
        'createdDateTime': value.createdDateTime === undefined ? undefined : (value.createdDateTime === null ? null : value.createdDateTime.toISOString()),
        'modifiedBy': value.modifiedBy,
        'modifiedDateTime': value.modifiedDateTime === undefined ? undefined : (value.modifiedDateTime === null ? null : value.modifiedDateTime.toISOString()),
    };
}

