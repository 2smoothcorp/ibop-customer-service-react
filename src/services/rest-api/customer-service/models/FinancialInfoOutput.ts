/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.318
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
 * @interface FinancialInfoOutput
 */
export interface FinancialInfoOutput {
    /**
     * 
     * @type {string}
     * @memberof FinancialInfoOutput
     */
    investmentPurposeCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialInfoOutput
     */
    investmentPurposeDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialInfoOutput
     */
    investmentPurposeOther?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FinancialInfoOutput
     */
    investmentYear?: number | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialInfoOutput
     */
    incomeCountry?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialInfoOutput
     */
    incomeCountryDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialInfoOutput
     */
    incomeSourceCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialInfoOutput
     */
    incomeSourceDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialInfoOutput
     */
    incomeSourceOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialInfoOutput
     */
    incomeRateCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialInfoOutput
     */
    incomeRateDesc?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FinancialInfoOutput
     */
    assetValue?: number | null;
}

/**
 * Check if a given object implements the FinancialInfoOutput interface.
 */
export function instanceOfFinancialInfoOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FinancialInfoOutputFromJSON(json: any): FinancialInfoOutput {
    return FinancialInfoOutputFromJSONTyped(json, false);
}

export function FinancialInfoOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinancialInfoOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'investmentPurposeCode': !exists(json, 'investmentPurposeCode') ? undefined : json['investmentPurposeCode'],
        'investmentPurposeDesc': !exists(json, 'investmentPurposeDesc') ? undefined : json['investmentPurposeDesc'],
        'investmentPurposeOther': !exists(json, 'investmentPurposeOther') ? undefined : json['investmentPurposeOther'],
        'investmentYear': !exists(json, 'investmentYear') ? undefined : json['investmentYear'],
        'incomeCountry': !exists(json, 'incomeCountry') ? undefined : json['incomeCountry'],
        'incomeCountryDesc': !exists(json, 'incomeCountryDesc') ? undefined : json['incomeCountryDesc'],
        'incomeSourceCode': !exists(json, 'incomeSourceCode') ? undefined : json['incomeSourceCode'],
        'incomeSourceDesc': !exists(json, 'incomeSourceDesc') ? undefined : json['incomeSourceDesc'],
        'incomeSourceOther': !exists(json, 'incomeSourceOther') ? undefined : json['incomeSourceOther'],
        'incomeRateCode': !exists(json, 'incomeRateCode') ? undefined : json['incomeRateCode'],
        'incomeRateDesc': !exists(json, 'incomeRateDesc') ? undefined : json['incomeRateDesc'],
        'assetValue': !exists(json, 'assetValue') ? undefined : json['assetValue'],
    };
}

export function FinancialInfoOutputToJSON(value?: FinancialInfoOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'investmentPurposeCode': value.investmentPurposeCode,
        'investmentPurposeDesc': value.investmentPurposeDesc,
        'investmentPurposeOther': value.investmentPurposeOther,
        'investmentYear': value.investmentYear,
        'incomeCountry': value.incomeCountry,
        'incomeCountryDesc': value.incomeCountryDesc,
        'incomeSourceCode': value.incomeSourceCode,
        'incomeSourceDesc': value.incomeSourceDesc,
        'incomeSourceOther': value.incomeSourceOther,
        'incomeRateCode': value.incomeRateCode,
        'incomeRateDesc': value.incomeRateDesc,
        'assetValue': value.assetValue,
    };
}

