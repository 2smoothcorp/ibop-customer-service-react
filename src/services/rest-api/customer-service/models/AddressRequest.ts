/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.268
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
 * @interface AddressRequest
 */
export interface AddressRequest {
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    addressTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    addressNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    moo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    buildingOrVillage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    roomNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    floor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    soi?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    street?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    subDistrictCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    districtCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    provinceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    zipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    customAddress1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    customAddress2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    customAddress3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    customAddress4?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    faxNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AddressRequest
     */
    telephoneNo?: string | null;
}

/**
 * Check if a given object implements the AddressRequest interface.
 */
export function instanceOfAddressRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddressRequestFromJSON(json: any): AddressRequest {
    return AddressRequestFromJSONTyped(json, false);
}

export function AddressRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
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
    };
}

export function AddressRequestToJSON(value?: AddressRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
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
    };
}
