/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.364
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
 * @interface KycPersonalInput
 */
export interface KycPersonalInput {
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    titleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    titleNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    firstNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    lastNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    titleNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    firstNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    lastNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    nationalityCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    occupationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    occupationDescOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    occupationOther?: string | null;
    /**
     * 
     * @type {number}
     * @memberof KycPersonalInput
     */
    monthlyIncome?: number | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    investmentPurposeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    investmentPurposeOther?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof KycPersonalInput
     */
    investmentExp?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof KycPersonalInput
     */
    investmentYear?: number | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    incomeCountry?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    incomeSourceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    incomeSourceOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalInput
     */
    incomeRateCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof KycPersonalInput
     */
    assetValue?: number | null;
}

/**
 * Check if a given object implements the KycPersonalInput interface.
 */
export function instanceOfKycPersonalInput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycPersonalInputFromJSON(json: any): KycPersonalInput {
    return KycPersonalInputFromJSONTyped(json, false);
}

export function KycPersonalInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycPersonalInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'titleCode': !exists(json, 'titleCode') ? undefined : json['titleCode'],
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

export function KycPersonalInputToJSON(value?: KycPersonalInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'titleCode': value.titleCode,
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

