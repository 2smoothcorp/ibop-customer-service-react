/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.242
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { HistoriesOutput } from './histories-output';

/**
 * 
 * @export
 * @interface AccountActionLogHistoriesOutputPagination
 */
export interface AccountActionLogHistoriesOutputPagination {
    /**
     * 
     * @type {Array<HistoriesOutput>}
     * @memberof AccountActionLogHistoriesOutputPagination
     */
    'items'?: Array<HistoriesOutput> | null;
    /**
     * 
     * @type {number}
     * @memberof AccountActionLogHistoriesOutputPagination
     */
    'totalItems'?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountActionLogHistoriesOutputPagination
     */
    'currentPage'?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountActionLogHistoriesOutputPagination
     */
    'pageSize'?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountActionLogHistoriesOutputPagination
     */
    'totalPages'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AccountActionLogHistoriesOutputPagination
     */
    'hasPreviousPage'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountActionLogHistoriesOutputPagination
     */
    'hasNextPage'?: boolean;
}

