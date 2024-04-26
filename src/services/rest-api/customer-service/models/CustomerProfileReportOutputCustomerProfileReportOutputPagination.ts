/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.316
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CustomerProfileReportOutput } from './CustomerProfileReportOutput';
import {
    CustomerProfileReportOutputFromJSON,
    CustomerProfileReportOutputFromJSONTyped,
    CustomerProfileReportOutputToJSON,
} from './CustomerProfileReportOutput';

/**
 * 
 * @export
 * @interface CustomerProfileReportOutputCustomerProfileReportOutputPagination
 */
export interface CustomerProfileReportOutputCustomerProfileReportOutputPagination {
    /**
     * 
     * @type {Array<CustomerProfileReportOutput>}
     * @memberof CustomerProfileReportOutputCustomerProfileReportOutputPagination
     */
    items?: Array<CustomerProfileReportOutput> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileReportOutputCustomerProfileReportOutputPagination
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileReportOutputCustomerProfileReportOutputPagination
     */
    currentPage?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileReportOutputCustomerProfileReportOutputPagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomerProfileReportOutputCustomerProfileReportOutputPagination
     */
    totalPages?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerProfileReportOutputCustomerProfileReportOutputPagination
     */
    readonly hasPreviousPage?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerProfileReportOutputCustomerProfileReportOutputPagination
     */
    readonly hasNextPage?: boolean;
}

/**
 * Check if a given object implements the CustomerProfileReportOutputCustomerProfileReportOutputPagination interface.
 */
export function instanceOfCustomerProfileReportOutputCustomerProfileReportOutputPagination(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerProfileReportOutputCustomerProfileReportOutputPaginationFromJSON(json: any): CustomerProfileReportOutputCustomerProfileReportOutputPagination {
    return CustomerProfileReportOutputCustomerProfileReportOutputPaginationFromJSONTyped(json, false);
}

export function CustomerProfileReportOutputCustomerProfileReportOutputPaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerProfileReportOutputCustomerProfileReportOutputPagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(CustomerProfileReportOutputFromJSON)),
        'totalItems': !exists(json, 'totalItems') ? undefined : json['totalItems'],
        'currentPage': !exists(json, 'currentPage') ? undefined : json['currentPage'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'hasPreviousPage': !exists(json, 'hasPreviousPage') ? undefined : json['hasPreviousPage'],
        'hasNextPage': !exists(json, 'hasNextPage') ? undefined : json['hasNextPage'],
    };
}

export function CustomerProfileReportOutputCustomerProfileReportOutputPaginationToJSON(value?: CustomerProfileReportOutputCustomerProfileReportOutputPagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(CustomerProfileReportOutputToJSON)),
        'totalItems': value.totalItems,
        'currentPage': value.currentPage,
        'pageSize': value.pageSize,
        'totalPages': value.totalPages,
    };
}

