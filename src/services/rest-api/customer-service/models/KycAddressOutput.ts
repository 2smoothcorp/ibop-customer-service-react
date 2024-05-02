/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.333
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
 * @interface KycAddressOutput
 */
export interface KycAddressOutput {
    /**
     * 
     * @type {number}
     * @memberof KycAddressOutput
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    addressTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    addressTypeName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    addressNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    moo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    buildingOrVillage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    roomNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    floor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    soi?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    street?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    subDistrictCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    subDistrictName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    districtCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    districtName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    provinceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    provinceName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    zipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    customAddress1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    customAddress2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    customAddress3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    customAddress4?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    countryName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    faxNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    telephoneNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    logFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    logUser?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof KycAddressOutput
     */
    logTimeStamp?: Date;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    referenceType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressOutput
     */
    referenceId?: string | null;
}

/**
 * Check if a given object implements the KycAddressOutput interface.
 */
export function instanceOfKycAddressOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycAddressOutputFromJSON(json: any): KycAddressOutput {
    return KycAddressOutputFromJSONTyped(json, false);
}

export function KycAddressOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycAddressOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'addressTypeCode': !exists(json, 'addressTypeCode') ? undefined : json['addressTypeCode'],
        'addressTypeName': !exists(json, 'addressTypeName') ? undefined : json['addressTypeName'],
        'addressNo': !exists(json, 'addressNo') ? undefined : json['addressNo'],
        'moo': !exists(json, 'moo') ? undefined : json['moo'],
        'buildingOrVillage': !exists(json, 'buildingOrVillage') ? undefined : json['buildingOrVillage'],
        'roomNo': !exists(json, 'roomNo') ? undefined : json['roomNo'],
        'floor': !exists(json, 'floor') ? undefined : json['floor'],
        'soi': !exists(json, 'soi') ? undefined : json['soi'],
        'street': !exists(json, 'street') ? undefined : json['street'],
        'subDistrictCode': !exists(json, 'subDistrictCode') ? undefined : json['subDistrictCode'],
        'subDistrictName': !exists(json, 'subDistrictName') ? undefined : json['subDistrictName'],
        'districtCode': !exists(json, 'districtCode') ? undefined : json['districtCode'],
        'districtName': !exists(json, 'districtName') ? undefined : json['districtName'],
        'provinceCode': !exists(json, 'provinceCode') ? undefined : json['provinceCode'],
        'provinceName': !exists(json, 'provinceName') ? undefined : json['provinceName'],
        'zipCode': !exists(json, 'zipCode') ? undefined : json['zipCode'],
        'customAddress1': !exists(json, 'customAddress1') ? undefined : json['customAddress1'],
        'customAddress2': !exists(json, 'customAddress2') ? undefined : json['customAddress2'],
        'customAddress3': !exists(json, 'customAddress3') ? undefined : json['customAddress3'],
        'customAddress4': !exists(json, 'customAddress4') ? undefined : json['customAddress4'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'countryName': !exists(json, 'countryName') ? undefined : json['countryName'],
        'faxNo': !exists(json, 'faxNo') ? undefined : json['faxNo'],
        'telephoneNo': !exists(json, 'telephoneNo') ? undefined : json['telephoneNo'],
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logTimeStamp': !exists(json, 'logTimeStamp') ? undefined : (new Date(json['logTimeStamp'])),
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
    };
}

export function KycAddressOutputToJSON(value?: KycAddressOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'addressTypeCode': value.addressTypeCode,
        'addressTypeName': value.addressTypeName,
        'addressNo': value.addressNo,
        'moo': value.moo,
        'buildingOrVillage': value.buildingOrVillage,
        'roomNo': value.roomNo,
        'floor': value.floor,
        'soi': value.soi,
        'street': value.street,
        'subDistrictCode': value.subDistrictCode,
        'subDistrictName': value.subDistrictName,
        'districtCode': value.districtCode,
        'districtName': value.districtName,
        'provinceCode': value.provinceCode,
        'provinceName': value.provinceName,
        'zipCode': value.zipCode,
        'customAddress1': value.customAddress1,
        'customAddress2': value.customAddress2,
        'customAddress3': value.customAddress3,
        'customAddress4': value.customAddress4,
        'countryCode': value.countryCode,
        'countryName': value.countryName,
        'faxNo': value.faxNo,
        'telephoneNo': value.telephoneNo,
        'logFlag': value.logFlag,
        'logUser': value.logUser,
        'logTimeStamp': value.logTimeStamp === undefined ? undefined : (value.logTimeStamp.toISOString()),
        'referenceType': value.referenceType,
        'referenceId': value.referenceId,
    };
}

