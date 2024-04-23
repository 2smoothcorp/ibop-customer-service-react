/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.272
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
 * @interface DocReceiveAddressInfoModel
 */
export interface DocReceiveAddressInfoModel {
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    addressTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    addressTypeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    addressNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    buildingOrVillage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    floor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    roomNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    moo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    soi?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    street?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    provinceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    provinceNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    districtCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    districtNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    subDistrictCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    subDistrictNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    countryDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    zipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    customAddress1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    customAddress2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    customAddress3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    telephoneNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    mobileNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    officeNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    docReceiveChannel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DocReceiveAddressInfoModel
     */
    docReceiveAddressType?: string | null;
}

/**
 * Check if a given object implements the DocReceiveAddressInfoModel interface.
 */
export function instanceOfDocReceiveAddressInfoModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DocReceiveAddressInfoModelFromJSON(json: any): DocReceiveAddressInfoModel {
    return DocReceiveAddressInfoModelFromJSONTyped(json, false);
}

export function DocReceiveAddressInfoModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): DocReceiveAddressInfoModel {
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
        'telephoneNo': !exists(json, 'telephoneNo') ? undefined : json['telephoneNo'],
        'mobileNo': !exists(json, 'mobileNo') ? undefined : json['mobileNo'],
        'officeNo': !exists(json, 'officeNo') ? undefined : json['officeNo'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'docReceiveChannel': !exists(json, 'docReceiveChannel') ? undefined : json['docReceiveChannel'],
        'docReceiveAddressType': !exists(json, 'docReceiveAddressType') ? undefined : json['docReceiveAddressType'],
    };
}

export function DocReceiveAddressInfoModelToJSON(value?: DocReceiveAddressInfoModel | null): any {
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
        'telephoneNo': value.telephoneNo,
        'mobileNo': value.mobileNo,
        'officeNo': value.officeNo,
        'email': value.email,
        'docReceiveChannel': value.docReceiveChannel,
        'docReceiveAddressType': value.docReceiveAddressType,
    };
}

