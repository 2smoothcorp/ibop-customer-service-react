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
 * @interface PersonalInfoModel
 */
export interface PersonalInfoModel {
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    personTypeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    personTypeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    referenceTypeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    referenceID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    countryNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    countryNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    nationalityCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    nationDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    identityExpireDate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof PersonalInfoModel
     */
    identityNeverExpire?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    titleCodeTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    titleNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    firstNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    lastNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    titleNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    firstNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    lastNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    genderCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    gender?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PersonalInfoModel
     */
    birthDate?: string | null;
}

/**
 * Check if a given object implements the PersonalInfoModel interface.
 */
export function instanceOfPersonalInfoModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PersonalInfoModelFromJSON(json: any): PersonalInfoModel {
    return PersonalInfoModelFromJSONTyped(json, false);
}

export function PersonalInfoModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonalInfoModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'personTypeCode': !exists(json, 'personTypeCode') ? undefined : json['personTypeCode'],
        'personTypeDesc': !exists(json, 'personTypeDesc') ? undefined : json['personTypeDesc'],
        'referenceTypeDesc': !exists(json, 'referenceTypeDesc') ? undefined : json['referenceTypeDesc'],
        'referenceID': !exists(json, 'referenceID') ? undefined : json['referenceID'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'countryNameTh': !exists(json, 'countryNameTh') ? undefined : json['countryNameTh'],
        'countryNameEn': !exists(json, 'countryNameEn') ? undefined : json['countryNameEn'],
        'nationalityCode': !exists(json, 'nationalityCode') ? undefined : json['nationalityCode'],
        'nationDesc': !exists(json, 'nationDesc') ? undefined : json['nationDesc'],
        'identityExpireDate': !exists(json, 'identityExpireDate') ? undefined : json['identityExpireDate'],
        'identityNeverExpire': !exists(json, 'identityNeverExpire') ? undefined : json['identityNeverExpire'],
        'titleCodeTh': !exists(json, 'titleCodeTh') ? undefined : json['titleCodeTh'],
        'titleNameTh': !exists(json, 'titleNameTh') ? undefined : json['titleNameTh'],
        'firstNameTh': !exists(json, 'firstNameTh') ? undefined : json['firstNameTh'],
        'lastNameTh': !exists(json, 'lastNameTh') ? undefined : json['lastNameTh'],
        'titleNameEn': !exists(json, 'titleNameEn') ? undefined : json['titleNameEn'],
        'firstNameEn': !exists(json, 'firstNameEn') ? undefined : json['firstNameEn'],
        'lastNameEn': !exists(json, 'lastNameEn') ? undefined : json['lastNameEn'],
        'genderCode': !exists(json, 'genderCode') ? undefined : json['genderCode'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'birthDate': !exists(json, 'birthDate') ? undefined : json['birthDate'],
    };
}

export function PersonalInfoModelToJSON(value?: PersonalInfoModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'personTypeCode': value.personTypeCode,
        'personTypeDesc': value.personTypeDesc,
        'referenceTypeDesc': value.referenceTypeDesc,
        'referenceID': value.referenceID,
        'countryCode': value.countryCode,
        'countryNameTh': value.countryNameTh,
        'countryNameEn': value.countryNameEn,
        'nationalityCode': value.nationalityCode,
        'nationDesc': value.nationDesc,
        'identityExpireDate': value.identityExpireDate,
        'identityNeverExpire': value.identityNeverExpire,
        'titleCodeTh': value.titleCodeTh,
        'titleNameTh': value.titleNameTh,
        'firstNameTh': value.firstNameTh,
        'lastNameTh': value.lastNameTh,
        'titleNameEn': value.titleNameEn,
        'firstNameEn': value.firstNameEn,
        'lastNameEn': value.lastNameEn,
        'genderCode': value.genderCode,
        'gender': value.gender,
        'birthDate': value.birthDate,
    };
}

