/* tslint:disable */
/* eslint-disable */
/**
 * KYC API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.93
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { ApplicantResponse } from './applicant-response';

/**
 * 
 * @export
 * @interface ApplicantResponseApplicantResponsePagination
 */
export interface ApplicantResponseApplicantResponsePagination {
    /**
     * 
     * @type {Array<ApplicantResponse>}
     * @memberof ApplicantResponseApplicantResponsePagination
     */
    'items'?: Array<ApplicantResponse> | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicantResponseApplicantResponsePagination
     */
    'totalItems'?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicantResponseApplicantResponsePagination
     */
    'currentPage'?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicantResponseApplicantResponsePagination
     */
    'pageSize'?: number;
    /**
     * 
     * @type {number}
     * @memberof ApplicantResponseApplicantResponsePagination
     */
    'totalPages'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicantResponseApplicantResponsePagination
     */
    'hasPreviousPage'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicantResponseApplicantResponsePagination
     */
    'hasNextPage'?: boolean;
}
