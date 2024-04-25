/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.305
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
 * @interface AddressInfoOutput
 */
export interface AddressInfoOutput {
    /**
     * 
     * @type {number}
     * @memberof AddressInfoOutput
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof AddressInfoOutput
     */
    customerId?: number;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    addressTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    addressTypeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    addressNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    moo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    buildingOrVillage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    roomNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    floor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    soi?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    street?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    subDistrictCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    subDistrictNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    subDistrictNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    districtCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    districtNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    districtNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    provinceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    provinceNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    provinceNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    zipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    customAddress1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    customAddress2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    customAddress3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    customAddress4?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    countryDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    faxNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    telephoneNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    logFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressInfoOutput
     */
    logUser?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof AddressInfoOutput
     */
    logTimeStamp?: Date;
}

/**
 * Check if a given object implements the AddressInfoOutput interface.
 */
export function instanceOfAddressInfoOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddressInfoOutputFromJSON(json: any): AddressInfoOutput {
    return AddressInfoOutputFromJSONTyped(json, false);
}

export function AddressInfoOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressInfoOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'customerId': !exists(json, 'customerId') ? undefined : json['customerId'],
        'addressTypeCode': !exists(json, 'addressTypeCode') ? undefined : json['addressTypeCode'],
        'addressTypeDesc': !exists(json, 'addressTypeDesc') ? undefined : json['addressTypeDesc'],
        'addressNo': !exists(json, 'addressNo') ? undefined : json['addressNo'],
        'moo': !exists(json, 'moo') ? undefined : json['moo'],
        'buildingOrVillage': !exists(json, 'buildingOrVillage') ? undefined : json['buildingOrVillage'],
        'roomNo': !exists(json, 'roomNo') ? undefined : json['roomNo'],
        'floor': !exists(json, 'floor') ? undefined : json['floor'],
        'soi': !exists(json, 'soi') ? undefined : json['soi'],
        'street': !exists(json, 'street') ? undefined : json['street'],
        'subDistrictCode': !exists(json, 'subDistrictCode') ? undefined : json['subDistrictCode'],
        'subDistrictNameTh': !exists(json, 'subDistrictNameTh') ? undefined : json['subDistrictNameTh'],
        'subDistrictNameEn': !exists(json, 'subDistrictNameEn') ? undefined : json['subDistrictNameEn'],
        'districtCode': !exists(json, 'districtCode') ? undefined : json['districtCode'],
        'districtNameTh': !exists(json, 'districtNameTh') ? undefined : json['districtNameTh'],
        'districtNameEn': !exists(json, 'districtNameEn') ? undefined : json['districtNameEn'],
        'provinceCode': !exists(json, 'provinceCode') ? undefined : json['provinceCode'],
        'provinceNameTh': !exists(json, 'provinceNameTh') ? undefined : json['provinceNameTh'],
        'provinceNameEn': !exists(json, 'provinceNameEn') ? undefined : json['provinceNameEn'],
        'zipCode': !exists(json, 'zipCode') ? undefined : json['zipCode'],
        'customAddress1': !exists(json, 'customAddress1') ? undefined : json['customAddress1'],
        'customAddress2': !exists(json, 'customAddress2') ? undefined : json['customAddress2'],
        'customAddress3': !exists(json, 'customAddress3') ? undefined : json['customAddress3'],
        'customAddress4': !exists(json, 'customAddress4') ? undefined : json['customAddress4'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'countryDesc': !exists(json, 'countryDesc') ? undefined : json['countryDesc'],
        'faxNo': !exists(json, 'faxNo') ? undefined : json['faxNo'],
        'telephoneNo': !exists(json, 'telephoneNo') ? undefined : json['telephoneNo'],
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logTimeStamp': !exists(json, 'logTimeStamp') ? undefined : (new Date(json['logTimeStamp'])),
    };
}

export function AddressInfoOutputToJSON(value?: AddressInfoOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'customerId': value.customerId,
        'addressTypeCode': value.addressTypeCode,
        'addressTypeDesc': value.addressTypeDesc,
        'addressNo': value.addressNo,
        'moo': value.moo,
        'buildingOrVillage': value.buildingOrVillage,
        'roomNo': value.roomNo,
        'floor': value.floor,
        'soi': value.soi,
        'street': value.street,
        'subDistrictCode': value.subDistrictCode,
        'subDistrictNameTh': value.subDistrictNameTh,
        'subDistrictNameEn': value.subDistrictNameEn,
        'districtCode': value.districtCode,
        'districtNameTh': value.districtNameTh,
        'districtNameEn': value.districtNameEn,
        'provinceCode': value.provinceCode,
        'provinceNameTh': value.provinceNameTh,
        'provinceNameEn': value.provinceNameEn,
        'zipCode': value.zipCode,
        'customAddress1': value.customAddress1,
        'customAddress2': value.customAddress2,
        'customAddress3': value.customAddress3,
        'customAddress4': value.customAddress4,
        'countryCode': value.countryCode,
        'countryDesc': value.countryDesc,
        'faxNo': value.faxNo,
        'telephoneNo': value.telephoneNo,
        'logFlag': value.logFlag,
        'logUser': value.logUser,
        'logTimeStamp': value.logTimeStamp === undefined ? undefined : (value.logTimeStamp.toISOString()),
    };
}

