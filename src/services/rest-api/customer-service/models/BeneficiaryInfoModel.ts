/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.298
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
 * @interface BeneficiaryInfoModel
 */
export interface BeneficiaryInfoModel {
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    addressTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    addressTypeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    addressNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    buildingOrVillage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    floor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    roomNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    moo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    soi?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    street?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    provinceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    provinceNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    districtCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    districtNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    subDistrictCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    subDistrictNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    countryDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    zipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    customAddress1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    customAddress2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    customAddress3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    mobileNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    telephoneNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    officeNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    beneficiaryFirstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    beneficiaryLastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    relationDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    beneficiaryRelationshipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    beneficiaryRelationshipOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    referenceTypeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    beneficiaryType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    beneficiaryNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    beneficiaryExpireDate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof BeneficiaryInfoModel
     */
    beneficiaryNeverExpire?: boolean;
}

/**
 * Check if a given object implements the BeneficiaryInfoModel interface.
 */
export function instanceOfBeneficiaryInfoModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BeneficiaryInfoModelFromJSON(json: any): BeneficiaryInfoModel {
    return BeneficiaryInfoModelFromJSONTyped(json, false);
}

export function BeneficiaryInfoModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): BeneficiaryInfoModel {
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
        'beneficiaryFirstName': !exists(json, 'beneficiaryFirstName') ? undefined : json['beneficiaryFirstName'],
        'beneficiaryLastName': !exists(json, 'beneficiaryLastName') ? undefined : json['beneficiaryLastName'],
        'relationDesc': !exists(json, 'relationDesc') ? undefined : json['relationDesc'],
        'beneficiaryRelationshipCode': !exists(json, 'beneficiaryRelationshipCode') ? undefined : json['beneficiaryRelationshipCode'],
        'beneficiaryRelationshipOther': !exists(json, 'beneficiaryRelationshipOther') ? undefined : json['beneficiaryRelationshipOther'],
        'referenceTypeDesc': !exists(json, 'referenceTypeDesc') ? undefined : json['referenceTypeDesc'],
        'beneficiaryType': !exists(json, 'beneficiaryType') ? undefined : json['beneficiaryType'],
        'beneficiaryNo': !exists(json, 'beneficiaryNo') ? undefined : json['beneficiaryNo'],
        'beneficiaryExpireDate': !exists(json, 'beneficiaryExpireDate') ? undefined : json['beneficiaryExpireDate'],
        'beneficiaryNeverExpire': !exists(json, 'beneficiaryNeverExpire') ? undefined : json['beneficiaryNeverExpire'],
    };
}

export function BeneficiaryInfoModelToJSON(value?: BeneficiaryInfoModel | null): any {
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
        'beneficiaryFirstName': value.beneficiaryFirstName,
        'beneficiaryLastName': value.beneficiaryLastName,
        'relationDesc': value.relationDesc,
        'beneficiaryRelationshipCode': value.beneficiaryRelationshipCode,
        'beneficiaryRelationshipOther': value.beneficiaryRelationshipOther,
        'referenceTypeDesc': value.referenceTypeDesc,
        'beneficiaryType': value.beneficiaryType,
        'beneficiaryNo': value.beneficiaryNo,
        'beneficiaryExpireDate': value.beneficiaryExpireDate,
        'beneficiaryNeverExpire': value.beneficiaryNeverExpire,
    };
}

