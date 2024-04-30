/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.328
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
 * @interface AttorneyInfoOutput
 */
export interface AttorneyInfoOutput {
    /**
     * 
     * @type {number}
     * @memberof AttorneyInfoOutput
     */
    customerProfileAttorneyId?: number;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    titleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    titleName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    titleOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    referenceTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    referenceTypeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    referenceNo?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof AttorneyInfoOutput
     */
    referenceExpireDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof AttorneyInfoOutput
     */
    referenceNeverExpire?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    relationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    relationDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    relationOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    nationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    nationDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    tel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    mobile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    addressNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    moo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    buildingOrVillage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    roomNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    floor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    soi?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    street?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    tambonCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    tambonNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    tambonNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    amphurCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    amphurNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    amphurNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    provinceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    provinceNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    provinceNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    postCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    customAddress1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    customAddress2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    customAddress3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    countryDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoOutput
     */
    productCode?: string | null;
}

/**
 * Check if a given object implements the AttorneyInfoOutput interface.
 */
export function instanceOfAttorneyInfoOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttorneyInfoOutputFromJSON(json: any): AttorneyInfoOutput {
    return AttorneyInfoOutputFromJSONTyped(json, false);
}

export function AttorneyInfoOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttorneyInfoOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customerProfileAttorneyId': !exists(json, 'customerProfileAttorneyId') ? undefined : json['customerProfileAttorneyId'],
        'titleCode': !exists(json, 'titleCode') ? undefined : json['titleCode'],
        'titleName': !exists(json, 'titleName') ? undefined : json['titleName'],
        'titleOther': !exists(json, 'titleOther') ? undefined : json['titleOther'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'referenceTypeCode': !exists(json, 'referenceTypeCode') ? undefined : json['referenceTypeCode'],
        'referenceTypeDesc': !exists(json, 'referenceTypeDesc') ? undefined : json['referenceTypeDesc'],
        'referenceNo': !exists(json, 'referenceNo') ? undefined : json['referenceNo'],
        'referenceExpireDate': !exists(json, 'referenceExpireDate') ? undefined : (json['referenceExpireDate'] === null ? null : new Date(json['referenceExpireDate'])),
        'referenceNeverExpire': !exists(json, 'referenceNeverExpire') ? undefined : json['referenceNeverExpire'],
        'relationCode': !exists(json, 'relationCode') ? undefined : json['relationCode'],
        'relationDesc': !exists(json, 'relationDesc') ? undefined : json['relationDesc'],
        'relationOther': !exists(json, 'relationOther') ? undefined : json['relationOther'],
        'nationCode': !exists(json, 'nationCode') ? undefined : json['nationCode'],
        'nationDesc': !exists(json, 'nationDesc') ? undefined : json['nationDesc'],
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
        'tambonNameTh': !exists(json, 'tambonNameTh') ? undefined : json['tambonNameTh'],
        'tambonNameEn': !exists(json, 'tambonNameEn') ? undefined : json['tambonNameEn'],
        'amphurCode': !exists(json, 'amphurCode') ? undefined : json['amphurCode'],
        'amphurNameTh': !exists(json, 'amphurNameTh') ? undefined : json['amphurNameTh'],
        'amphurNameEn': !exists(json, 'amphurNameEn') ? undefined : json['amphurNameEn'],
        'provinceCode': !exists(json, 'provinceCode') ? undefined : json['provinceCode'],
        'provinceNameTh': !exists(json, 'provinceNameTh') ? undefined : json['provinceNameTh'],
        'provinceNameEn': !exists(json, 'provinceNameEn') ? undefined : json['provinceNameEn'],
        'postCode': !exists(json, 'postCode') ? undefined : json['postCode'],
        'customAddress1': !exists(json, 'customAddress1') ? undefined : json['customAddress1'],
        'customAddress2': !exists(json, 'customAddress2') ? undefined : json['customAddress2'],
        'customAddress3': !exists(json, 'customAddress3') ? undefined : json['customAddress3'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'countryDesc': !exists(json, 'countryDesc') ? undefined : json['countryDesc'],
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
    };
}

export function AttorneyInfoOutputToJSON(value?: AttorneyInfoOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customerProfileAttorneyId': value.customerProfileAttorneyId,
        'titleCode': value.titleCode,
        'titleName': value.titleName,
        'titleOther': value.titleOther,
        'name': value.name,
        'referenceTypeCode': value.referenceTypeCode,
        'referenceTypeDesc': value.referenceTypeDesc,
        'referenceNo': value.referenceNo,
        'referenceExpireDate': value.referenceExpireDate === undefined ? undefined : (value.referenceExpireDate === null ? null : value.referenceExpireDate.toISOString()),
        'referenceNeverExpire': value.referenceNeverExpire,
        'relationCode': value.relationCode,
        'relationDesc': value.relationDesc,
        'relationOther': value.relationOther,
        'nationCode': value.nationCode,
        'nationDesc': value.nationDesc,
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
        'tambonNameTh': value.tambonNameTh,
        'tambonNameEn': value.tambonNameEn,
        'amphurCode': value.amphurCode,
        'amphurNameTh': value.amphurNameTh,
        'amphurNameEn': value.amphurNameEn,
        'provinceCode': value.provinceCode,
        'provinceNameTh': value.provinceNameTh,
        'provinceNameEn': value.provinceNameEn,
        'postCode': value.postCode,
        'customAddress1': value.customAddress1,
        'customAddress2': value.customAddress2,
        'customAddress3': value.customAddress3,
        'countryCode': value.countryCode,
        'countryDesc': value.countryDesc,
        'productCode': value.productCode,
    };
}

