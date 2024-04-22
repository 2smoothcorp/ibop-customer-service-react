/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.270
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
    titleCodeTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    titleNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    firstNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    lastNameTh?: string | null;
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
    relationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    relationOther?: string | null;
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
    referenceID?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BeneficiaryInfoModel
     */
    identityExpireDate?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof BeneficiaryInfoModel
     */
    identityNeverExpire?: boolean;
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
        
        'titleCodeTh': !exists(json, 'titleCodeTh') ? undefined : json['titleCodeTh'],
        'titleNameTh': !exists(json, 'titleNameTh') ? undefined : json['titleNameTh'],
        'firstNameTh': !exists(json, 'firstNameTh') ? undefined : json['firstNameTh'],
        'lastNameTh': !exists(json, 'lastNameTh') ? undefined : json['lastNameTh'],
        'relationDesc': !exists(json, 'relationDesc') ? undefined : json['relationDesc'],
        'relationCode': !exists(json, 'relationCode') ? undefined : json['relationCode'],
        'relationOther': !exists(json, 'relationOther') ? undefined : json['relationOther'],
        'referenceTypeDesc': !exists(json, 'referenceTypeDesc') ? undefined : json['referenceTypeDesc'],
        'referenceID': !exists(json, 'referenceID') ? undefined : json['referenceID'],
        'identityExpireDate': !exists(json, 'identityExpireDate') ? undefined : json['identityExpireDate'],
        'identityNeverExpire': !exists(json, 'identityNeverExpire') ? undefined : json['identityNeverExpire'],
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
        
        'titleCodeTh': value.titleCodeTh,
        'titleNameTh': value.titleNameTh,
        'firstNameTh': value.firstNameTh,
        'lastNameTh': value.lastNameTh,
        'relationDesc': value.relationDesc,
        'relationCode': value.relationCode,
        'relationOther': value.relationOther,
        'referenceTypeDesc': value.referenceTypeDesc,
        'referenceID': value.referenceID,
        'identityExpireDate': value.identityExpireDate,
        'identityNeverExpire': value.identityNeverExpire,
    };
}

