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
 * @interface KycUpdatePersonalInfoCorporateIdPostRequest
 */
export interface KycUpdatePersonalInfoCorporateIdPostRequest {
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    titleCodeTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    titleNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    firstNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    lastNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    titleNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    firstNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    lastNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    nationalityCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    occupationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    occupationDescOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    occupationOther?: string | null;
    /**
     * 
     * @type {number}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    monthlyIncome?: number | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    investmentPurposeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    investmentPurposeOther?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    investmentExp?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    investmentYear?: number | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    incomeCountry?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    incomeSourceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    incomeSourceOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    incomeRateCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof KycUpdatePersonalInfoCorporateIdPostRequest
     */
    assetValue?: number | null;
}

/**
 * Check if a given object implements the KycUpdatePersonalInfoCorporateIdPostRequest interface.
 */
export function instanceOfKycUpdatePersonalInfoCorporateIdPostRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycUpdatePersonalInfoCorporateIdPostRequestFromJSON(json: any): KycUpdatePersonalInfoCorporateIdPostRequest {
    return KycUpdatePersonalInfoCorporateIdPostRequestFromJSONTyped(json, false);
}

export function KycUpdatePersonalInfoCorporateIdPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycUpdatePersonalInfoCorporateIdPostRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'titleCodeTh': !exists(json, 'titleCodeTh') ? undefined : json['titleCodeTh'],
        'titleNameTh': !exists(json, 'titleNameTh') ? undefined : json['titleNameTh'],
        'firstNameTh': !exists(json, 'firstNameTh') ? undefined : json['firstNameTh'],
        'lastNameTh': !exists(json, 'lastNameTh') ? undefined : json['lastNameTh'],
        'titleNameEn': !exists(json, 'titleNameEn') ? undefined : json['titleNameEn'],
        'firstNameEn': !exists(json, 'firstNameEn') ? undefined : json['firstNameEn'],
        'lastNameEn': !exists(json, 'lastNameEn') ? undefined : json['lastNameEn'],
        'nationalityCode': !exists(json, 'nationalityCode') ? undefined : json['nationalityCode'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'occupationCode': !exists(json, 'occupationCode') ? undefined : json['occupationCode'],
        'occupationDescOther': !exists(json, 'occupationDescOther') ? undefined : json['occupationDescOther'],
        'occupationOther': !exists(json, 'occupationOther') ? undefined : json['occupationOther'],
        'monthlyIncome': !exists(json, 'monthlyIncome') ? undefined : json['monthlyIncome'],
        'investmentPurposeCode': !exists(json, 'investmentPurposeCode') ? undefined : json['investmentPurposeCode'],
        'investmentPurposeOther': !exists(json, 'investmentPurposeOther') ? undefined : json['investmentPurposeOther'],
        'investmentExp': !exists(json, 'investmentExp') ? undefined : json['investmentExp'],
        'investmentYear': !exists(json, 'investmentYear') ? undefined : json['investmentYear'],
        'incomeCountry': !exists(json, 'incomeCountry') ? undefined : json['incomeCountry'],
        'incomeSourceCode': !exists(json, 'incomeSourceCode') ? undefined : json['incomeSourceCode'],
        'incomeSourceOther': !exists(json, 'incomeSourceOther') ? undefined : json['incomeSourceOther'],
        'incomeRateCode': !exists(json, 'incomeRateCode') ? undefined : json['incomeRateCode'],
        'assetValue': !exists(json, 'assetValue') ? undefined : json['assetValue'],
    };
}

export function KycUpdatePersonalInfoCorporateIdPostRequestToJSON(value?: KycUpdatePersonalInfoCorporateIdPostRequest | null): any {
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
        'titleNameEn': value.titleNameEn,
        'firstNameEn': value.firstNameEn,
        'lastNameEn': value.lastNameEn,
        'nationalityCode': value.nationalityCode,
        'countryCode': value.countryCode,
        'occupationCode': value.occupationCode,
        'occupationDescOther': value.occupationDescOther,
        'occupationOther': value.occupationOther,
        'monthlyIncome': value.monthlyIncome,
        'investmentPurposeCode': value.investmentPurposeCode,
        'investmentPurposeOther': value.investmentPurposeOther,
        'investmentExp': value.investmentExp,
        'investmentYear': value.investmentYear,
        'incomeCountry': value.incomeCountry,
        'incomeSourceCode': value.incomeSourceCode,
        'incomeSourceOther': value.incomeSourceOther,
        'incomeRateCode': value.incomeRateCode,
        'assetValue': value.assetValue,
    };
}
