/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.300
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Account,
  AccountActionLogHistoriesOutputPagination,
  AccountActivateProductPostRequest,
  AccountCreateProfilePostRequest,
  AccountReserveAccountNoPostRequest,
  GetAccountByRefIdOutput,
  ReserveAccountNoOutput,
  SelectProductGetAllOutputPagination,
} from '../models';
import {
    AccountFromJSON,
    AccountToJSON,
    AccountActionLogHistoriesOutputPaginationFromJSON,
    AccountActionLogHistoriesOutputPaginationToJSON,
    AccountActivateProductPostRequestFromJSON,
    AccountActivateProductPostRequestToJSON,
    AccountCreateProfilePostRequestFromJSON,
    AccountCreateProfilePostRequestToJSON,
    AccountReserveAccountNoPostRequestFromJSON,
    AccountReserveAccountNoPostRequestToJSON,
    GetAccountByRefIdOutputFromJSON,
    GetAccountByRefIdOutputToJSON,
    ReserveAccountNoOutputFromJSON,
    ReserveAccountNoOutputToJSON,
    SelectProductGetAllOutputPaginationFromJSON,
    SelectProductGetAllOutputPaginationToJSON,
} from '../models';

export interface AccountAccountsByCustomerCorporateIdGetRequest {
    corporateId: string;
    xPortalToken?: string;
}

export interface AccountAccountsByRefIdReferenceIdGetRequest {
    referenceId: string;
    xPortalToken?: string;
}

export interface AccountActivateProductPostOperationRequest {
    xPortalToken?: string;
    accountActivateProductPostRequest?: AccountActivateProductPostRequest;
}

export interface AccountCreateProfilePostOperationRequest {
    xPortalToken?: string;
    accountCreateProfilePostRequest?: AccountCreateProfilePostRequest;
}

export interface AccountGetAllGetRequest {
    refId?: string;
    refType?: string;
    accountNo?: string;
    accountType?: string;
    corporateId?: string;
    pageIndex?: number;
    pageSize?: number;
    sortField?: string;
    sortDirection?: string;
    xPortalToken?: string;
}

export interface AccountGetRefIdAccountNoGetRequest {
    accountNo: string;
    xPortalToken?: string;
}

export interface AccountHistoriesGetRequest {
    refId?: string;
    refType?: string;
    pageIndex?: number;
    pageSize?: number;
    sortField?: string;
    sortDirection?: string;
    xPortalToken?: string;
}

export interface AccountReserveAccountNoPostOperationRequest {
    xPortalToken?: string;
    accountReserveAccountNoPostRequest?: AccountReserveAccountNoPostRequest;
}

/**
 * 
 */
export class AccountApi extends runtime.BaseAPI {

    /**
     */
    async accountAccountsByCustomerCorporateIdGetRaw(requestParameters: AccountAccountsByCustomerCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Account>>> {
        if (requestParameters.corporateId === null || requestParameters.corporateId === undefined) {
            throw new runtime.RequiredError('corporateId','Required parameter requestParameters.corporateId was null or undefined when calling accountAccountsByCustomerCorporateIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Account/AccountsByCustomer/{corporateId}`.replace(`{${"corporateId"}}`, encodeURIComponent(String(requestParameters.corporateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AccountFromJSON));
    }

    /**
     */
    async accountAccountsByCustomerCorporateIdGet(requestParameters: AccountAccountsByCustomerCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Account>> {
        const response = await this.accountAccountsByCustomerCorporateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async accountAccountsByRefIdReferenceIdGetRaw(requestParameters: AccountAccountsByRefIdReferenceIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetAccountByRefIdOutput>>> {
        if (requestParameters.referenceId === null || requestParameters.referenceId === undefined) {
            throw new runtime.RequiredError('referenceId','Required parameter requestParameters.referenceId was null or undefined when calling accountAccountsByRefIdReferenceIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Account/AccountsByRefId/{referenceId}`.replace(`{${"referenceId"}}`, encodeURIComponent(String(requestParameters.referenceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetAccountByRefIdOutputFromJSON));
    }

    /**
     */
    async accountAccountsByRefIdReferenceIdGet(requestParameters: AccountAccountsByRefIdReferenceIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetAccountByRefIdOutput>> {
        const response = await this.accountAccountsByRefIdReferenceIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async accountActivateProductPostRaw(requestParameters: AccountActivateProductPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Account/ActivateProduct`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AccountActivateProductPostRequestToJSON(requestParameters.accountActivateProductPostRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async accountActivateProductPost(requestParameters: AccountActivateProductPostOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.accountActivateProductPostRaw(requestParameters, initOverrides);
    }

    /**
     */
    async accountCreateProfilePostRaw(requestParameters: AccountCreateProfilePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Account/CreateProfile`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AccountCreateProfilePostRequestToJSON(requestParameters.accountCreateProfilePostRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async accountCreateProfilePost(requestParameters: AccountCreateProfilePostOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.accountCreateProfilePostRaw(requestParameters, initOverrides);
    }

    /**
     */
    async accountGetAllGetRaw(requestParameters: AccountGetAllGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SelectProductGetAllOutputPagination>> {
        const queryParameters: any = {};

        if (requestParameters.refId !== undefined) {
            queryParameters['RefId'] = requestParameters.refId;
        }

        if (requestParameters.refType !== undefined) {
            queryParameters['RefType'] = requestParameters.refType;
        }

        if (requestParameters.accountNo !== undefined) {
            queryParameters['AccountNo'] = requestParameters.accountNo;
        }

        if (requestParameters.accountType !== undefined) {
            queryParameters['AccountType'] = requestParameters.accountType;
        }

        if (requestParameters.corporateId !== undefined) {
            queryParameters['CorporateId'] = requestParameters.corporateId;
        }

        if (requestParameters.pageIndex !== undefined) {
            queryParameters['PageIndex'] = requestParameters.pageIndex;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['PageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.sortField !== undefined) {
            queryParameters['SortField'] = requestParameters.sortField;
        }

        if (requestParameters.sortDirection !== undefined) {
            queryParameters['SortDirection'] = requestParameters.sortDirection;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Account/GetAll`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SelectProductGetAllOutputPaginationFromJSON(jsonValue));
    }

    /**
     */
    async accountGetAllGet(requestParameters: AccountGetAllGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SelectProductGetAllOutputPagination> {
        const response = await this.accountGetAllGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async accountGetRefIdAccountNoGetRaw(requestParameters: AccountGetRefIdAccountNoGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.accountNo === null || requestParameters.accountNo === undefined) {
            throw new runtime.RequiredError('accountNo','Required parameter requestParameters.accountNo was null or undefined when calling accountGetRefIdAccountNoGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Account/GetRefId/{accountNo}`.replace(`{${"accountNo"}}`, encodeURIComponent(String(requestParameters.accountNo))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async accountGetRefIdAccountNoGet(requestParameters: AccountGetRefIdAccountNoGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.accountGetRefIdAccountNoGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async accountHistoriesGetRaw(requestParameters: AccountHistoriesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountActionLogHistoriesOutputPagination>> {
        const queryParameters: any = {};

        if (requestParameters.refId !== undefined) {
            queryParameters['RefId'] = requestParameters.refId;
        }

        if (requestParameters.refType !== undefined) {
            queryParameters['RefType'] = requestParameters.refType;
        }

        if (requestParameters.pageIndex !== undefined) {
            queryParameters['PageIndex'] = requestParameters.pageIndex;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['PageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.sortField !== undefined) {
            queryParameters['SortField'] = requestParameters.sortField;
        }

        if (requestParameters.sortDirection !== undefined) {
            queryParameters['SortDirection'] = requestParameters.sortDirection;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Account/Histories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountActionLogHistoriesOutputPaginationFromJSON(jsonValue));
    }

    /**
     */
    async accountHistoriesGet(requestParameters: AccountHistoriesGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountActionLogHistoriesOutputPagination> {
        const response = await this.accountHistoriesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async accountReserveAccountNoPostRaw(requestParameters: AccountReserveAccountNoPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReserveAccountNoOutput>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/Account/ReserveAccountNo`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AccountReserveAccountNoPostRequestToJSON(requestParameters.accountReserveAccountNoPostRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReserveAccountNoOutputFromJSON(jsonValue));
    }

    /**
     */
    async accountReserveAccountNoPost(requestParameters: AccountReserveAccountNoPostOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReserveAccountNoOutput> {
        const response = await this.accountReserveAccountNoPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
