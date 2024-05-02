/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.330
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
 * @interface AddressInfoModel
 */
export interface AddressInfoModel {
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    addressTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    addressTypeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    addressNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    buildingOrVillage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    floor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    roomNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    moo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    soi?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    street?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    provinceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    provinceNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    districtCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    districtNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    subDistrictCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    subDistrictNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    countryDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    zipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    customAddress1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    customAddress2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    customAddress3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    mobileNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    telephoneNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    officeNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoModel
     */
    email?: string | null;
}

/**
 * Check if a given object implements the AddressInfoModel interface.
 */
export function instanceOfAddressInfoModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddressInfoModelFromJSON(json: any): AddressInfoModel {
    return AddressInfoModelFromJSONTyped(json, false);
}

export function AddressInfoModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressInfoModel {
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
    };
}

export function AddressInfoModelToJSON(value?: AddressInfoModel | null): any {
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
    };
}

