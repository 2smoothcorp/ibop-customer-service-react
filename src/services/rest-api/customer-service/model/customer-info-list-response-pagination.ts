/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.267
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { CustomerInfoListResponse } from './customer-info-list-response';

/**
 * 
 * @export
 * @interface CustomerInfoListResponsePagination
 */
export interface CustomerInfoListResponsePagination {
    /**
     * 
     * @type {Array<CustomerInfoListResponse>}
     * @memberof CustomerInfoListResponsePagination
     */
    'items'?: Array<CustomerInfoListResponse> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerInfoListResponsePagination
     */
    'totalItems'?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerInfoListResponsePagination
     */
    'currentPage'?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerInfoListResponsePagination
     */
    'pageSize'?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerInfoListResponsePagination
     */
    'totalPages'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerInfoListResponsePagination
     */
    'hasPreviousPage'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerInfoListResponsePagination
     */
    'hasNextPage'?: boolean;
}

