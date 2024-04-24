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
import type { Country } from './Country';
import {
    CountryFromJSON,
    CountryFromJSONTyped,
    CountryToJSON,
} from './Country';
import type { Nation } from './Nation';
import {
    NationFromJSON,
    NationFromJSONTyped,
    NationToJSON,
} from './Nation';
import type { ReferenceType } from './ReferenceType';
import {
    ReferenceTypeFromJSON,
    ReferenceTypeFromJSONTyped,
    ReferenceTypeToJSON,
} from './ReferenceType';
import type { Relation } from './Relation';
import {
    RelationFromJSON,
    RelationFromJSONTyped,
    RelationToJSON,
} from './Relation';
import type { Title } from './Title';
import {
    TitleFromJSON,
    TitleFromJSONTyped,
    TitleToJSON,
} from './Title';

/**
 * 
 * @export
 * @interface Attorney
 */
export interface Attorney {
    /**
     * 
     * @type {number}
     * @memberof Attorney
     */
    attorneyId?: number;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    titleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    titleOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    name?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    referenceTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    referenceNo?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Attorney
     */
    referenceExpireDate?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof Attorney
     */
    referenceNeverExpire?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    relationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    relationOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    nationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    tel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    mobile?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    addressNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    moo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    buildingOrVillage?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    roomNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    floor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    soi?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    street?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    tambonCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    amphurCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    provinceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    postCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    customAddress1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    customAddress2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    customAddress3?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    productCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    createdBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Attorney
     */
    createdDateTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    modifiedBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Attorney
     */
    modifiedDateTime?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    logFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    logUser?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof Attorney
     */
    logTimestamp?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    referenceType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Attorney
     */
    referenceId?: string | null;
    /**
     * 
     * @type {Title}
     * @memberof Attorney
     */
    titleRef?: Title | null;
    /**
     * 
     * @type {Country}
     * @memberof Attorney
     */
    countryRef?: Country | null;
    /**
     * 
     * @type {ReferenceType}
     * @memberof Attorney
     */
    referenceTypeRef?: ReferenceType | null;
    /**
     * 
     * @type {Relation}
     * @memberof Attorney
     */
    relationshipRef?: Relation | null;
    /**
     * 
     * @type {Nation}
     * @memberof Attorney
     */
    nationRef?: Nation | null;
}

/**
 * Check if a given object implements the Attorney interface.
 */
export function instanceOfAttorney(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AttorneyFromJSON(json: any): Attorney {
    return AttorneyFromJSONTyped(json, false);
}

export function AttorneyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Attorney {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attorneyId': !exists(json, 'attorneyId') ? undefined : json['attorneyId'],
        'titleCode': !exists(json, 'titleCode') ? undefined : json['titleCode'],
        'titleOther': !exists(json, 'titleOther') ? undefined : json['titleOther'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'referenceTypeCode': !exists(json, 'referenceTypeCode') ? undefined : json['referenceTypeCode'],
        'referenceNo': !exists(json, 'referenceNo') ? undefined : json['referenceNo'],
        'referenceExpireDate': !exists(json, 'referenceExpireDate') ? undefined : (json['referenceExpireDate'] === null ? null : new Date(json['referenceExpireDate'])),
        'referenceNeverExpire': !exists(json, 'referenceNeverExpire') ? undefined : json['referenceNeverExpire'],
        'relationCode': !exists(json, 'relationCode') ? undefined : json['relationCode'],
        'relationOther': !exists(json, 'relationOther') ? undefined : json['relationOther'],
        'nationCode': !exists(json, 'nationCode') ? undefined : json['nationCode'],
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
        'amphurCode': !exists(json, 'amphurCode') ? undefined : json['amphurCode'],
        'provinceCode': !exists(json, 'provinceCode') ? undefined : json['provinceCode'],
        'postCode': !exists(json, 'postCode') ? undefined : json['postCode'],
        'customAddress1': !exists(json, 'customAddress1') ? undefined : json['customAddress1'],
        'customAddress2': !exists(json, 'customAddress2') ? undefined : json['customAddress2'],
        'customAddress3': !exists(json, 'customAddress3') ? undefined : json['customAddress3'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'productCode': !exists(json, 'productCode') ? undefined : json['productCode'],
        'createdBy': !exists(json, 'createdBy') ? undefined : json['createdBy'],
        'createdDateTime': !exists(json, 'createdDateTime') ? undefined : (json['createdDateTime'] === null ? null : new Date(json['createdDateTime'])),
        'modifiedBy': !exists(json, 'modifiedBy') ? undefined : json['modifiedBy'],
        'modifiedDateTime': !exists(json, 'modifiedDateTime') ? undefined : (json['modifiedDateTime'] === null ? null : new Date(json['modifiedDateTime'])),
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logTimestamp': !exists(json, 'logTimestamp') ? undefined : (json['logTimestamp'] === null ? null : new Date(json['logTimestamp'])),
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'titleRef': !exists(json, 'titleRef') ? undefined : TitleFromJSON(json['titleRef']),
        'countryRef': !exists(json, 'countryRef') ? undefined : CountryFromJSON(json['countryRef']),
        'referenceTypeRef': !exists(json, 'referenceTypeRef') ? undefined : ReferenceTypeFromJSON(json['referenceTypeRef']),
        'relationshipRef': !exists(json, 'relationshipRef') ? undefined : RelationFromJSON(json['relationshipRef']),
        'nationRef': !exists(json, 'nationRef') ? undefined : NationFromJSON(json['nationRef']),
    };
}

export function AttorneyToJSON(value?: Attorney | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attorneyId': value.attorneyId,
        'titleCode': value.titleCode,
        'titleOther': value.titleOther,
        'name': value.name,
        'referenceTypeCode': value.referenceTypeCode,
        'referenceNo': value.referenceNo,
        'referenceExpireDate': value.referenceExpireDate === undefined ? undefined : (value.referenceExpireDate === null ? null : value.referenceExpireDate.toISOString()),
        'referenceNeverExpire': value.referenceNeverExpire,
        'relationCode': value.relationCode,
        'relationOther': value.relationOther,
        'nationCode': value.nationCode,
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
        'amphurCode': value.amphurCode,
        'provinceCode': value.provinceCode,
        'postCode': value.postCode,
        'customAddress1': value.customAddress1,
        'customAddress2': value.customAddress2,
        'customAddress3': value.customAddress3,
        'countryCode': value.countryCode,
        'productCode': value.productCode,
        'createdBy': value.createdBy,
        'createdDateTime': value.createdDateTime === undefined ? undefined : (value.createdDateTime === null ? null : value.createdDateTime.toISOString()),
        'modifiedBy': value.modifiedBy,
        'modifiedDateTime': value.modifiedDateTime === undefined ? undefined : (value.modifiedDateTime === null ? null : value.modifiedDateTime.toISOString()),
        'logFlag': value.logFlag,
        'logUser': value.logUser,
        'logTimestamp': value.logTimestamp === undefined ? undefined : (value.logTimestamp === null ? null : value.logTimestamp.toISOString()),
        'referenceType': value.referenceType,
        'referenceId': value.referenceId,
        'titleRef': TitleToJSON(value.titleRef),
        'countryRef': CountryToJSON(value.countryRef),
        'referenceTypeRef': ReferenceTypeToJSON(value.referenceTypeRef),
        'relationshipRef': RelationToJSON(value.relationshipRef),
        'nationRef': NationToJSON(value.nationRef),
    };
}

