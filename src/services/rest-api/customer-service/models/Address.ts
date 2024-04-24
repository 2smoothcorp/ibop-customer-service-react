/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.294
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
 * @interface Address
 */
export interface Address {
    /**
     * 
     * @type {number}
     * @memberof Address
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    addressTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    addressNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    moo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    buildingOrVillage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    roomNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    floor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    soi?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    street?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    subDistrictCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    districtCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    provinceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    zipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    customAddress1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    customAddress2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    customAddress3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    customAddress4?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    faxNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    telephoneNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    logFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    logUser?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Address
     */
    logTimeStamp?: Date;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    referenceType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    referenceId?: string | null;
}

/**
 * Check if a given object implements the Address interface.
 */
export function instanceOfAddress(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddressFromJSON(json: any): Address {
    return AddressFromJSONTyped(json, false);
}

export function AddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): Address {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'addressTypeCode': !exists(json, 'addressTypeCode') ? undefined : json['addressTypeCode'],
        'addressNo': !exists(json, 'addressNo') ? undefined : json['addressNo'],
        'moo': !exists(json, 'moo') ? undefined : json['moo'],
        'buildingOrVillage': !exists(json, 'buildingOrVillage') ? undefined : json['buildingOrVillage'],
        'roomNo': !exists(json, 'roomNo') ? undefined : json['roomNo'],
        'floor': !exists(json, 'floor') ? undefined : json['floor'],
        'soi': !exists(json, 'soi') ? undefined : json['soi'],
        'street': !exists(json, 'street') ? undefined : json['street'],
        'subDistrictCode': !exists(json, 'subDistrictCode') ? undefined : json['subDistrictCode'],
        'districtCode': !exists(json, 'districtCode') ? undefined : json['districtCode'],
        'provinceCode': !exists(json, 'provinceCode') ? undefined : json['provinceCode'],
        'zipCode': !exists(json, 'zipCode') ? undefined : json['zipCode'],
        'customAddress1': !exists(json, 'customAddress1') ? undefined : json['customAddress1'],
        'customAddress2': !exists(json, 'customAddress2') ? undefined : json['customAddress2'],
        'customAddress3': !exists(json, 'customAddress3') ? undefined : json['customAddress3'],
        'customAddress4': !exists(json, 'customAddress4') ? undefined : json['customAddress4'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'faxNo': !exists(json, 'faxNo') ? undefined : json['faxNo'],
        'telephoneNo': !exists(json, 'telephoneNo') ? undefined : json['telephoneNo'],
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logTimeStamp': !exists(json, 'logTimeStamp') ? undefined : (new Date(json['logTimeStamp'])),
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
    };
}

export function AddressToJSON(value?: Address | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'addressTypeCode': value.addressTypeCode,
        'addressNo': value.addressNo,
        'moo': value.moo,
        'buildingOrVillage': value.buildingOrVillage,
        'roomNo': value.roomNo,
        'floor': value.floor,
        'soi': value.soi,
        'street': value.street,
        'subDistrictCode': value.subDistrictCode,
        'districtCode': value.districtCode,
        'provinceCode': value.provinceCode,
        'zipCode': value.zipCode,
        'customAddress1': value.customAddress1,
        'customAddress2': value.customAddress2,
        'customAddress3': value.customAddress3,
        'customAddress4': value.customAddress4,
        'countryCode': value.countryCode,
        'faxNo': value.faxNo,
        'telephoneNo': value.telephoneNo,
        'logFlag': value.logFlag,
        'logUser': value.logUser,
        'logTimeStamp': value.logTimeStamp === undefined ? undefined : (value.logTimeStamp.toISOString()),
        'referenceType': value.referenceType,
        'referenceId': value.referenceId,
    };
}

