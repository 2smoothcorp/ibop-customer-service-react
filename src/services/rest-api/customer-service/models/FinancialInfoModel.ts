/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.272
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
 * @interface FinancialInfoModel
 */
export interface FinancialInfoModel {
    /**
     * 
     * @type {Array<string>}
     * @memberof FinancialInfoModel
     */
    investmentPurposeCode?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialInfoModel
     */
    investmentFundCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialInfoModel
     */
    investmentPurposeOther?: string | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof FinancialInfoModel
     */
    incomeSourceCode?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialInfoModel
     */
    incomeRateCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof FinancialInfoModel
     */
    incomeSourceOther?: string | null;
    /**
     * 
     * @type {number}
     * @memberof FinancialInfoModel
     */
    investmentYear?: number;
    /**
     * 
     * @type {number}
     * @memberof FinancialInfoModel
     */
    assetValue?: number;
}

/**
 * Check if a given object implements the FinancialInfoModel interface.
 */
export function instanceOfFinancialInfoModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FinancialInfoModelFromJSON(json: any): FinancialInfoModel {
    return FinancialInfoModelFromJSONTyped(json, false);
}

export function FinancialInfoModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): FinancialInfoModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'investmentPurposeCode': !exists(json, 'investmentPurposeCode') ? undefined : json['investmentPurposeCode'],
        'investmentFundCode': !exists(json, 'investmentFundCode') ? undefined : json['investmentFundCode'],
        'investmentPurposeOther': !exists(json, 'investmentPurposeOther') ? undefined : json['investmentPurposeOther'],
        'incomeSourceCode': !exists(json, 'incomeSourceCode') ? undefined : json['incomeSourceCode'],
        'incomeRateCode': !exists(json, 'incomeRateCode') ? undefined : json['incomeRateCode'],
        'incomeSourceOther': !exists(json, 'incomeSourceOther') ? undefined : json['incomeSourceOther'],
        'investmentYear': !exists(json, 'investmentYear') ? undefined : json['investmentYear'],
        'assetValue': !exists(json, 'assetValue') ? undefined : json['assetValue'],
    };
}

export function FinancialInfoModelToJSON(value?: FinancialInfoModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'investmentPurposeCode': value.investmentPurposeCode,
        'investmentFundCode': value.investmentFundCode,
        'investmentPurposeOther': value.investmentPurposeOther,
        'incomeSourceCode': value.incomeSourceCode,
        'incomeRateCode': value.incomeRateCode,
        'incomeSourceOther': value.incomeSourceOther,
        'investmentYear': value.investmentYear,
        'assetValue': value.assetValue,
    };
}

