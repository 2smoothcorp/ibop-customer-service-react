/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.333
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
 * @interface KycPersonalOutput
 */
export interface KycPersonalOutput {
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    referenceType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    titleCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    titleNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    firstNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    lastNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    titleCodeEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    titleNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    firstNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    lastNameEn?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    nationalityCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    nationalityDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    countryCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    countryDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    occupationCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    occupationDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    occupationDescOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    occupationOther?: string | null;
    /**
     * 
     * @type {number}
     * @memberof KycPersonalOutput
     */
    monthlyIncome?: number;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    investmentPurposeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    investmentPurposeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    investmentPurposeOther?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof KycPersonalOutput
     */
    investmentExp?: boolean;
    /**
     * 
     * @type {number}
     * @memberof KycPersonalOutput
     */
    investmentYear?: number;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    incomeCountry?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    incomeSourceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    incomeSourceDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    incomeSourceOther?: string | null;
    /**
     * 
     * @type {number}
     * @memberof KycPersonalOutput
     */
    income?: number;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    incomeRateCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    incomeRateDesc?: string | null;
    /**
     * 
     * @type {number}
     * @memberof KycPersonalOutput
     */
    assetValue?: number;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    logFlag?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycPersonalOutput
     */
    logUser?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof KycPersonalOutput
     */
    logTimestamp?: Date;
}

/**
 * Check if a given object implements the KycPersonalOutput interface.
 */
export function instanceOfKycPersonalOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycPersonalOutputFromJSON(json: any): KycPersonalOutput {
    return KycPersonalOutputFromJSONTyped(json, false);
}

export function KycPersonalOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycPersonalOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'titleCode': !exists(json, 'titleCode') ? undefined : json['titleCode'],
        'titleNameTh': !exists(json, 'titleNameTh') ? undefined : json['titleNameTh'],
        'firstNameTh': !exists(json, 'firstNameTh') ? undefined : json['firstNameTh'],
        'lastNameTh': !exists(json, 'lastNameTh') ? undefined : json['lastNameTh'],
        'titleCodeEn': !exists(json, 'titleCodeEn') ? undefined : json['titleCodeEn'],
        'titleNameEn': !exists(json, 'titleNameEn') ? undefined : json['titleNameEn'],
        'firstNameEn': !exists(json, 'firstNameEn') ? undefined : json['firstNameEn'],
        'lastNameEn': !exists(json, 'lastNameEn') ? undefined : json['lastNameEn'],
        'nationalityCode': !exists(json, 'nationalityCode') ? undefined : json['nationalityCode'],
        'nationalityDesc': !exists(json, 'nationalityDesc') ? undefined : json['nationalityDesc'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'countryDesc': !exists(json, 'countryDesc') ? undefined : json['countryDesc'],
        'occupationCode': !exists(json, 'occupationCode') ? undefined : json['occupationCode'],
        'occupationDesc': !exists(json, 'occupationDesc') ? undefined : json['occupationDesc'],
        'occupationDescOther': !exists(json, 'occupationDescOther') ? undefined : json['occupationDescOther'],
        'occupationOther': !exists(json, 'occupationOther') ? undefined : json['occupationOther'],
        'monthlyIncome': !exists(json, 'monthlyIncome') ? undefined : json['monthlyIncome'],
        'investmentPurposeCode': !exists(json, 'investmentPurposeCode') ? undefined : json['investmentPurposeCode'],
        'investmentPurposeDesc': !exists(json, 'investmentPurposeDesc') ? undefined : json['investmentPurposeDesc'],
        'investmentPurposeOther': !exists(json, 'investmentPurposeOther') ? undefined : json['investmentPurposeOther'],
        'investmentExp': !exists(json, 'investmentExp') ? undefined : json['investmentExp'],
        'investmentYear': !exists(json, 'investmentYear') ? undefined : json['investmentYear'],
        'incomeCountry': !exists(json, 'incomeCountry') ? undefined : json['incomeCountry'],
        'incomeSourceCode': !exists(json, 'incomeSourceCode') ? undefined : json['incomeSourceCode'],
        'incomeSourceDesc': !exists(json, 'incomeSourceDesc') ? undefined : json['incomeSourceDesc'],
        'incomeSourceOther': !exists(json, 'incomeSourceOther') ? undefined : json['incomeSourceOther'],
        'income': !exists(json, 'income') ? undefined : json['income'],
        'incomeRateCode': !exists(json, 'incomeRateCode') ? undefined : json['incomeRateCode'],
        'incomeRateDesc': !exists(json, 'incomeRateDesc') ? undefined : json['incomeRateDesc'],
        'assetValue': !exists(json, 'assetValue') ? undefined : json['assetValue'],
        'logFlag': !exists(json, 'logFlag') ? undefined : json['logFlag'],
        'logUser': !exists(json, 'logUser') ? undefined : json['logUser'],
        'logTimestamp': !exists(json, 'logTimestamp') ? undefined : (new Date(json['logTimestamp'])),
    };
}

export function KycPersonalOutputToJSON(value?: KycPersonalOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'referenceType': value.referenceType,
        'referenceId': value.referenceId,
        'titleCode': value.titleCode,
        'titleNameTh': value.titleNameTh,
        'firstNameTh': value.firstNameTh,
        'lastNameTh': value.lastNameTh,
        'titleCodeEn': value.titleCodeEn,
        'titleNameEn': value.titleNameEn,
        'firstNameEn': value.firstNameEn,
        'lastNameEn': value.lastNameEn,
        'nationalityCode': value.nationalityCode,
        'nationalityDesc': value.nationalityDesc,
        'countryCode': value.countryCode,
        'countryDesc': value.countryDesc,
        'occupationCode': value.occupationCode,
        'occupationDesc': value.occupationDesc,
        'occupationDescOther': value.occupationDescOther,
        'occupationOther': value.occupationOther,
        'monthlyIncome': value.monthlyIncome,
        'investmentPurposeCode': value.investmentPurposeCode,
        'investmentPurposeDesc': value.investmentPurposeDesc,
        'investmentPurposeOther': value.investmentPurposeOther,
        'investmentExp': value.investmentExp,
        'investmentYear': value.investmentYear,
        'incomeCountry': value.incomeCountry,
        'incomeSourceCode': value.incomeSourceCode,
        'incomeSourceDesc': value.incomeSourceDesc,
        'incomeSourceOther': value.incomeSourceOther,
        'income': value.income,
        'incomeRateCode': value.incomeRateCode,
        'incomeRateDesc': value.incomeRateDesc,
        'assetValue': value.assetValue,
        'logFlag': value.logFlag,
        'logUser': value.logUser,
        'logTimestamp': value.logTimestamp === undefined ? undefined : (value.logTimestamp.toISOString()),
    };
}

