/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.310
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
 * @interface AttorneyInfoModel
 */
export interface AttorneyInfoModel {
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    addressTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    addressTypeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    addressNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    buildingOrVillage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    floor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    roomNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    moo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    soi?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    street?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    provinceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    provinceNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    districtCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    districtNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    subDistrictCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    subDistrictNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    countryDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    zipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    customAddress1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    customAddress2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    customAddress3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    mobileNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    telephoneNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    officeNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    referenceTypeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    referenceTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    referenceNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    identityExpireDate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AttorneyInfoModel
     */
    identityNeverExpire?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    nationDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    nationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    titleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    titleDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    titleOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    relationDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    relationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AttorneyInfoModel
     */
    relationOther?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof AttorneyInfoModel
     */
    productCode?: Array<string> | null;
}

/**
 * Check if a given object implements the AttorneyInfoModel interface.
 */
export function instanceOfAttorneyInfoModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttorneyInfoModelFromJSON(json: any): AttorneyInfoModel {
    return AttorneyInfoModelFromJSONTyped(json, false);
}

export function AttorneyInfoModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttorneyInfoModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressTypeCode': !exists(json, 'addressTypeCode') ? undefined : json['addressTypeCode'],
        'addressTypeDesc': !exists(json, 'addressTypeDesc') ? undefined : json['addressTypeDesc'],
        'addressNo': !exists(json, 'addressNo') ? undefined : json['addressNo'],
        'buildingOrVillage': !exists(json, 'buildingOrVillage') ? undefined : json['buildingOrVillage'],
        'floor': !exists(json, 'floor') ? undefined : json['floor'],
        'roomNo': !exists(json, 'roomNo') ? undefined : json['roomNo'],
        'moo': !exists(json, 'moo') ? undefined : json['moo'],
        'soi': !exists(json, 'soi') ? undefined : json['soi'],
        'street': !exists(json, 'street') ? undefined : json['street'],
        'provinceCode': !exists(json, 'provinceCode') ? undefined : json['provinceCode'],
        'provinceNameTh': !exists(json, 'provinceNameTh') ? undefined : json['provinceNameTh'],
        'districtCode': !exists(json, 'districtCode') ? undefined : json['districtCode'],
        'districtNameTh': !exists(json, 'districtNameTh') ? undefined : json['districtNameTh'],
        'subDistrictCode': !exists(json, 'subDistrictCode') ? undefined : json['subDistrictCode'],
        'subDistrictNameTh': !exists(json, 'subDistrictNameTh') ? undefined : json['subDistrictNameTh'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'countryDesc': !exists(json, 'countryDesc') ? undefined : json['countryDesc'],
        'zipCode': !exists(json, 'zipCode') ? undefined : json['zipCode'],
        'customAddress1': !exists(json, 'customAddress1') ? undefined : json['customAddress1'],
        'customAddress2': !exists(json, 'customAddress2') ? undefined : json['customAddress2'],
        'customAddress3': !exists(json, 'customAddress3') ? undefined : json['customAddress3'],
        'mobileNo': !exists(json, 'mobileNo') ? undefined : json['mobileNo'],
        'telephoneNo': !exists(json, 'telephoneNo') ? undefined : json['telephoneNo'],
        'officeNo': !exists(json, 'officeNo') ? undefined : json['officeNo'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'referenceTypeDesc': !exists(json, 'referenceTypeDesc') ? undefined : json['referenceTypeDesc'],
        'referenceTypeCode': !exists(json, 'referenceTypeCode') ? undefined : json['referenceTypeCode'],
        'referenceNo': !exists(json, 'referenceNo') ? undefined : json['referenceNo'],
        'identityExpireDate': !exists(json, 'identityExpireDate') ? undefined : json['identityExpireDate'],
        'identityNeverExpire': !exists(json, 'identityNeverExpire') ? undefined : json['identityNeverExpire'],
        'nationDesc': !exists(json, 'nationDesc') ? undefined : json['nationDesc'],
        'nationCode': !exists(json, 'nationCode') ? undefined : json['nationCode'],
        'titleCode': !exists(json, 'titleCode') ? undefined : json['titleCode'],
        'titleDesc': !exists(json, 'titleDesc') ? undefined : json['titleDesc'],
        'titleOther': !exists(json, 'titleOther') ? undefined : json['titleOther'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'relationDesc': !exists(json, 'relationDesc') ? undefined : json['relationDesc'],
        'relationCode': !exists(json, 'relationCode') ? undefined : json['relationCode'],
        'relationOther': !exists(json, 'relationOther') ? undefined : json['relationOther'],
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
    };
}

export function AttorneyInfoModelToJSON(value?: AttorneyInfoModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addressTypeCode': value.addressTypeCode,
        'addressTypeDesc': value.addressTypeDesc,
        'addressNo': value.addressNo,
        'buildingOrVillage': value.buildingOrVillage,
        'floor': value.floor,
        'roomNo': value.roomNo,
        'moo': value.moo,
        'soi': value.soi,
        'street': value.street,
        'provinceCode': value.provinceCode,
        'provinceNameTh': value.provinceNameTh,
        'districtCode': value.districtCode,
        'districtNameTh': value.districtNameTh,
        'subDistrictCode': value.subDistrictCode,
        'subDistrictNameTh': value.subDistrictNameTh,
        'countryCode': value.countryCode,
        'countryDesc': value.countryDesc,
        'zipCode': value.zipCode,
        'customAddress1': value.customAddress1,
        'customAddress2': value.customAddress2,
        'customAddress3': value.customAddress3,
        'mobileNo': value.mobileNo,
        'telephoneNo': value.telephoneNo,
        'officeNo': value.officeNo,
        'email': value.email,
        'referenceTypeDesc': value.referenceTypeDesc,
        'referenceTypeCode': value.referenceTypeCode,
        'referenceNo': value.referenceNo,
        'identityExpireDate': value.identityExpireDate,
        'identityNeverExpire': value.identityNeverExpire,
        'nationDesc': value.nationDesc,
        'nationCode': value.nationCode,
        'titleCode': value.titleCode,
        'titleDesc': value.titleDesc,
        'titleOther': value.titleOther,
        'name': value.name,
        'relationDesc': value.relationDesc,
        'relationCode': value.relationCode,
        'relationOther': value.relationOther,
        'productCode': value.productCode,
    };
}

