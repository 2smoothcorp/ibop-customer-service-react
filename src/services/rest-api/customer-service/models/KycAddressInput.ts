/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.350
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
 * @interface KycAddressInput
 */
export interface KycAddressInput {
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    addressTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    addressNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    moo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    buildingOrVillage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    roomNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    floor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    soi?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    street?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    subDistrictCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    districtCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    provinceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    zipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    customAddress1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    customAddress2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    customAddress3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    faxNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAddressInput
     */
    telephoneNo?: string | null;
}

/**
 * Check if a given object implements the KycAddressInput interface.
 */
export function instanceOfKycAddressInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycAddressInputFromJSON(json: any): KycAddressInput {
    return KycAddressInputFromJSONTyped(json, false);
}

export function KycAddressInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycAddressInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
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
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'faxNo': !exists(json, 'faxNo') ? undefined : json['faxNo'],
        'telephoneNo': !exists(json, 'telephoneNo') ? undefined : json['telephoneNo'],
    };
}

export function KycAddressInputToJSON(value?: KycAddressInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
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
        'countryCode': value.countryCode,
        'faxNo': value.faxNo,
        'telephoneNo': value.telephoneNo,
    };
}

