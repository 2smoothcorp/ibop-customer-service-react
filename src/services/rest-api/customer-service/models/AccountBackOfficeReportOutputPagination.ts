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
import type { BackOfficeReportOutput } from './BackOfficeReportOutput';
import {
    BackOfficeReportOutputFromJSON,
    BackOfficeReportOutputFromJSONTyped,
    BackOfficeReportOutputToJSON,
} from './BackOfficeReportOutput';

/**
 * 
 * @export
 * @interface AccountBackOfficeReportOutputPagination
 */
export interface AccountBackOfficeReportOutputPagination {
    /**
     * 
     * @type {Array<BackOfficeReportOutput>}
     * @memberof AccountBackOfficeReportOutputPagination
     */
    items?: Array<BackOfficeReportOutput> | null;
    /**
     * 
     * @type {number}
     * @memberof AccountBackOfficeReportOutputPagination
     */
    totalItems?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountBackOfficeReportOutputPagination
     */
    currentPage?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountBackOfficeReportOutputPagination
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountBackOfficeReportOutputPagination
     */
    totalPages?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AccountBackOfficeReportOutputPagination
     */
    readonly hasPreviousPage?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AccountBackOfficeReportOutputPagination
     */
    readonly hasNextPage?: boolean;
}

/**
 * Check if a given object implements the AccountBackOfficeReportOutputPagination interface.
 */
export function instanceOfAccountBackOfficeReportOutputPagination(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountBackOfficeReportOutputPaginationFromJSON(json: any): AccountBackOfficeReportOutputPagination {
    return AccountBackOfficeReportOutputPaginationFromJSONTyped(json, false);
}

export function AccountBackOfficeReportOutputPaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountBackOfficeReportOutputPagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : (json['items'] === null ? null : (json['items'] as Array<any>).map(BackOfficeReportOutputFromJSON)),
        'totalItems': !exists(json, 'totalItems') ? undefined : json['totalItems'],
        'currentPage': !exists(json, 'currentPage') ? undefined : json['currentPage'],
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'hasPreviousPage': !exists(json, 'hasPreviousPage') ? undefined : json['hasPreviousPage'],
        'hasNextPage': !exists(json, 'hasNextPage') ? undefined : json['hasNextPage'],
    };
}

export function AccountBackOfficeReportOutputPaginationToJSON(value?: AccountBackOfficeReportOutputPagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items === undefined ? undefined : (value.items === null ? null : (value.items as Array<any>).map(BackOfficeReportOutputToJSON)),
        'totalItems': value.totalItems,
        'currentPage': value.currentPage,
        'pageSize': value.pageSize,
        'totalPages': value.totalPages,
    };
}

