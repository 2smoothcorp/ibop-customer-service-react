/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.219
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { MasterATSBankOutput } from './master-atsbank-output';

/**
 * 
 * @export
 * @interface GetMasterATSBankComboOutput
 */
export interface GetMasterATSBankComboOutput {
    /**
     * 
     * @type {number}
     * @memberof GetMasterATSBankComboOutput
     */
    'status'?: number;
    /**
     * 
     * @type {{ [key: string]: Array<string>; }}
     * @memberof GetMasterATSBankComboOutput
     */
    'errors'?: { [key: string]: Array<string>; } | null;
    /**
     * 
     * @type {string}
     * @memberof GetMasterATSBankComboOutput
     */
    'message'?: string | null;
    /**
     * 
     * @type {Array<MasterATSBankOutput>}
     * @memberof GetMasterATSBankComboOutput
     */
    'data'?: Array<MasterATSBankOutput> | null;
}

