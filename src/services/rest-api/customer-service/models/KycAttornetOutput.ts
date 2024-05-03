/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.338
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
 * @interface KycAttornetOutput
 */
export interface KycAttornetOutput {
    /**
     * 
     * @type {number}
     * @memberof KycAttornetOutput
     */
    attorneyId?: number;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    titleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    titleName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    titleOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    referenceTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    referenceNo?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof KycAttornetOutput
     */
    referenceExpireDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof KycAttornetOutput
     */
    referenceNeverExpire?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    relationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    relationName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    relationOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    nationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    nationName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    tel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    mobile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    addressNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    moo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    buildingOrVillage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    roomNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    floor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    soi?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    street?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    tambonCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    tambonName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    amphurCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    amphurName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    provinceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    provinceName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    postCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    customAddress1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    customAddress2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    customAddress3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    countryname?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    createdBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof KycAttornetOutput
     */
    createdDateTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    modifiedBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof KycAttornetOutput
     */
    modifiedDateTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    logFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    logUser?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof KycAttornetOutput
     */
    logTimestamp?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    referenceType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    referenceName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycAttornetOutput
     */
    referenceId?: string | null;
}

/**
 * Check if a given object implements the KycAttornetOutput interface.
 */
export function instanceOfKycAttornetOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycAttornetOutputFromJSON(json: any): KycAttornetOutput {
    return KycAttornetOutputFromJSONTyped(json, false);
}

export function KycAttornetOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycAttornetOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attorneyId': !exists(json, 'attorneyId') ? undefined : json['attorneyId'],
        'titleCode': !exists(json, 'titleCode') ? undefined : json['titleCode'],
        'titleName': !exists(json, 'titleName') ? undefined : json['titleName'],
        'titleOther': !exists(json, 'titleOther') ? undefined : json['titleOther'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'referenceTypeCode': !exists(json, 'referenceTypeCode') ? undefined : json['referenceTypeCode'],
        'referenceNo': !exists(json, 'referenceNo') ? undefined : json['referenceNo'],
        'referenceExpireDate': !exists(json, 'referenceExpireDate') ? undefined : (json['referenceExpireDate'] === null ? null : new Date(json['referenceExpireDate'])),
        'referenceNeverExpire': !exists(json, 'referenceNeverExpire') ? undefined : json['referenceNeverExpire'],
        'relationCode': !exists(json, 'relationCode') ? undefined : json['relationCode'],
        'relationName': !exists(json, 'relationName') ? undefined : json['relationName'],
        'relationOther': !exists(json, 'relationOther') ? undefined : json['relationOther'],
        'nationCode': !exists(json, 'nationCode') ? undefined : json['nationCode'],
        'nationName': !exists(json, 'nationName') ? undefined : json['nationName'],
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
        'tambonName': !exists(json, 'tambonName') ? undefined : json['tambonName'],
        'amphurCode': !exists(json, 'amphurCode') ? undefined : json['amphurCode'],
        'amphurName': !exists(json, 'amphurName') ? undefined : json['amphurName'],
        'provinceCode': !exists(json, 'provinceCode') ? undefined : json['provinceCode'],
        'provinceName': !exists(json, 'provinceName') ? undefined : json['provinceName'],
        'postCode': !exists(json, 'postCode') ? undefined : json['postCode'],
        'customAddress1': !exists(json, 'customAddress1') ? undefined : json['customAddress1'],
        'customAddress2': !exists(json, 'customAddress2') ? undefined : json['customAddress2'],
        'customAddress3': !exists(json, 'customAddress3') ? undefined : json['customAddress3'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'countryname': !exists(json, 'countryname') ? undefined : json['countryname'],
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'createdDateTime': !exists(json, 'createdDateTime') ? undefined : (json['createdDateTime'] === null ? null : new Date(json['createdDateTime'])),
        'modifiedBy': !exists(json, 'modifiedBy') ? undefined : json['modifiedBy'],
        'modifiedDateTime': !exists(json, 'modifiedDateTime') ? undefined : (json['modifiedDateTime'] === null ? null : new Date(json['modifiedDateTime'])),
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logTimestamp': !exists(json, 'logTimestamp') ? undefined : (json['logTimestamp'] === null ? null : new Date(json['logTimestamp'])),
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceName': !exists(json, 'referenceName') ? undefined : json['referenceName'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
    };
}

export function KycAttornetOutputToJSON(value?: KycAttornetOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attorneyId': value.attorneyId,
        'titleCode': value.titleCode,
        'titleName': value.titleName,
        'titleOther': value.titleOther,
        'name': value.name,
        'referenceTypeCode': value.referenceTypeCode,
        'referenceNo': value.referenceNo,
        'referenceExpireDate': value.referenceExpireDate === undefined ? undefined : (value.referenceExpireDate === null ? null : value.referenceExpireDate.toISOString()),
        'referenceNeverExpire': value.referenceNeverExpire,
        'relationCode': value.relationCode,
        'relationName': value.relationName,
        'relationOther': value.relationOther,
        'nationCode': value.nationCode,
        'nationName': value.nationName,
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
        'tambonName': value.tambonName,
        'amphurCode': value.amphurCode,
        'amphurName': value.amphurName,
        'provinceCode': value.provinceCode,
        'provinceName': value.provinceName,
        'postCode': value.postCode,
        'customAddress1': value.customAddress1,
        'customAddress2': value.customAddress2,
        'customAddress3': value.customAddress3,
        'countryCode': value.countryCode,
        'countryname': value.countryname,
        'productCode': value.productCode,
        'createdBy': value.createdBy,
        'createdDateTime': value.createdDateTime === undefined ? undefined : (value.createdDateTime === null ? null : value.createdDateTime.toISOString()),
        'modifiedBy': value.modifiedBy,
        'modifiedDateTime': value.modifiedDateTime === undefined ? undefined : (value.modifiedDateTime === null ? null : value.modifiedDateTime.toISOString()),
        'logFlag': value.logFlag,
        'logUser': value.logUser,
        'logTimestamp': value.logTimestamp === undefined ? undefined : (value.logTimestamp === null ? null : value.logTimestamp.toISOString()),
        'referenceType': value.referenceType,
        'referenceName': value.referenceName,
        'referenceId': value.referenceId,
    };
}

