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


import * as runtime from '../runtime';
import type {
  AccountInfoResponseDataResponse,
  AddressInfoResponseDataResponse,
  AttorneyInfoResponseDataResponse,
  BankInfoResponseDataResponse,
  BaseResponse,
  BeneficiaryInfoResponseDataResponse,
  CustomerInfoListResponsePagination,
  CustomerProfileCustomerInformationCorporateIdPutRequest,
  DocReceiveAddressInfoResponseDataResponse,
  EmergencyContactInfoResponseDataResponse,
  FinancialInfoResponseDataResponse,
  MenuResponseListDataResponse,
  OccupationInfoResponseDataResponse,
  PersonalInfoResponseDataResponse,
  PoliticRelationInfoResponseDataResponse,
  SpouseInfoResponseDataResponse,
} from '../models';
import {
    AccountInfoResponseDataResponseFromJSON,
    AccountInfoResponseDataResponseToJSON,
    AddressInfoResponseDataResponseFromJSON,
    AddressInfoResponseDataResponseToJSON,
    AttorneyInfoResponseDataResponseFromJSON,
    AttorneyInfoResponseDataResponseToJSON,
    BankInfoResponseDataResponseFromJSON,
    BankInfoResponseDataResponseToJSON,
    BaseResponseFromJSON,
    BaseResponseToJSON,
    BeneficiaryInfoResponseDataResponseFromJSON,
    BeneficiaryInfoResponseDataResponseToJSON,
    CustomerInfoListResponsePaginationFromJSON,
    CustomerInfoListResponsePaginationToJSON,
    CustomerProfileCustomerInformationCorporateIdPutRequestFromJSON,
    CustomerProfileCustomerInformationCorporateIdPutRequestToJSON,
    DocReceiveAddressInfoResponseDataResponseFromJSON,
    DocReceiveAddressInfoResponseDataResponseToJSON,
    EmergencyContactInfoResponseDataResponseFromJSON,
    EmergencyContactInfoResponseDataResponseToJSON,
    FinancialInfoResponseDataResponseFromJSON,
    FinancialInfoResponseDataResponseToJSON,
    MenuResponseListDataResponseFromJSON,
    MenuResponseListDataResponseToJSON,
    OccupationInfoResponseDataResponseFromJSON,
    OccupationInfoResponseDataResponseToJSON,
    PersonalInfoResponseDataResponseFromJSON,
    PersonalInfoResponseDataResponseToJSON,
    PoliticRelationInfoResponseDataResponseFromJSON,
    PoliticRelationInfoResponseDataResponseToJSON,
    SpouseInfoResponseDataResponseFromJSON,
    SpouseInfoResponseDataResponseToJSON,
} from '../models';

export interface CustomerProfileCustomerInfoListGetRequest {
    corporateID?: string;
    referenceID?: string;
    fullName?: string;
    emailNumber?: string;
    pageIndex?: number;
    pageSize?: number;
    sortField?: string;
    sortDirection?: string;
    xPortalToken?: string;
}

export interface CustomerProfileCustomerInfoMenuGetRequest {
    corporateId?: string;
    xPortalToken?: string;
}

export interface CustomerProfileCustomerInformationATSGetRequest {
    corporateId?: string;
    referenceId?: string;
    xPortalToken?: string;
}

export interface CustomerProfileCustomerInformationAccountInfoGetRequest {
    corporateId?: string;
    referenceId?: string;
    xPortalToken?: string;
}

export interface CustomerProfileCustomerInformationAddressInfoGetRequest {
    addressTypeCode?: string;
    corporateId?: string;
    referenceId?: string;
    xPortalToken?: string;
}

export interface CustomerProfileCustomerInformationAttorneyInfoGetRequest {
    corporateId?: string;
    referenceId?: string;
    xPortalToken?: string;
}

export interface CustomerProfileCustomerInformationBeneficiaryInfoGetRequest {
    corporateId?: string;
    referenceId?: string;
    xPortalToken?: string;
}

export interface CustomerProfileCustomerInformationCorporateIdGetRequest {
    corporateId: string;
    xPortalToken?: string;
}

export interface CustomerProfileCustomerInformationCorporateIdPutOperationRequest {
    corporateId: string;
    xPortalToken?: string;
    customerProfileCustomerInformationCorporateIdPutRequest?: CustomerProfileCustomerInformationCorporateIdPutRequest;
}

export interface CustomerProfileCustomerInformationDocReceiveInfoGetRequest {
    docReceiveType?: string;
    corporateId?: string;
    referenceId?: string;
    xPortalToken?: string;
}

export interface CustomerProfileCustomerInformationEDividendGetRequest {
    corporateId?: string;
    referenceId?: string;
    xPortalToken?: string;
}

export interface CustomerProfileCustomerInformationEmergencyContactInfoGetRequest {
    corporateId?: string;
    referenceId?: string;
    xPortalToken?: string;
}

export interface CustomerProfileCustomerInformationFinancialInfoGetRequest {
    corporateId?: string;
    referenceId?: string;
    xPortalToken?: string;
}

export interface CustomerProfileCustomerInformationOccupationInfoGetRequest {
    corporateId?: string;
    referenceId?: string;
    xPortalToken?: string;
}

export interface CustomerProfileCustomerInformationPersonalInfoGetRequest {
    corporateId?: string;
    referenceId?: string;
    xPortalToken?: string;
}

export interface CustomerProfileCustomerInformationPoliticRelationInfoGetRequest {
    corporateId?: string;
    referenceId?: string;
    xPortalToken?: string;
}

export interface CustomerProfileCustomerInformationSpouseInfoGetRequest {
    corporateId?: string;
    referenceId?: string;
    xPortalToken?: string;
}

/**
 * 
 */
export class CustomerProfileV2Api extends runtime.BaseAPI {

    /**
     * Customer Information List v2
     */
    async customerProfileCustomerInfoListGetRaw(requestParameters: CustomerProfileCustomerInfoListGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CustomerInfoListResponsePagination>> {
        const queryParameters: any = {};

        if (requestParameters.corporateID !== undefined) {
            queryParameters['CorporateID'] = requestParameters.corporateID;
        }

        if (requestParameters.referenceID !== undefined) {
            queryParameters['ReferenceID'] = requestParameters.referenceID;
        }

        if (requestParameters.fullName !== undefined) {
            queryParameters['FullName'] = requestParameters.fullName;
        }

        if (requestParameters.emailNumber !== undefined) {
            queryParameters['EmailNumber'] = requestParameters.emailNumber;
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
            path: `/customer-profile/CustomerInfoList`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerInfoListResponsePaginationFromJSON(jsonValue));
    }

    /**
     * Customer Information List v2
     */
    async customerProfileCustomerInfoListGet(requestParameters: CustomerProfileCustomerInfoListGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CustomerInfoListResponsePagination> {
        const response = await this.customerProfileCustomerInfoListGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * CustomerInformation Menu
     */
    async customerProfileCustomerInfoMenuGetRaw(requestParameters: CustomerProfileCustomerInfoMenuGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MenuResponseListDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.corporateId !== undefined) {
            queryParameters['corporateId'] = requestParameters.corporateId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/customer-profile/CustomerInfoMenu`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MenuResponseListDataResponseFromJSON(jsonValue));
    }

    /**
     * CustomerInformation Menu
     */
    async customerProfileCustomerInfoMenuGet(requestParameters: CustomerProfileCustomerInfoMenuGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MenuResponseListDataResponse> {
        const response = await this.customerProfileCustomerInfoMenuGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get ATS
     */
    async customerProfileCustomerInformationATSGetRaw(requestParameters: CustomerProfileCustomerInformationATSGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankInfoResponseDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.corporateId !== undefined) {
            queryParameters['CorporateId'] = requestParameters.corporateId;
        }

        if (requestParameters.referenceId !== undefined) {
            queryParameters['ReferenceId'] = requestParameters.referenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/customer-profile/CustomerInformation/ATS`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BankInfoResponseDataResponseFromJSON(jsonValue));
    }

    /**
     * Get ATS
     */
    async customerProfileCustomerInformationATSGet(requestParameters: CustomerProfileCustomerInformationATSGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankInfoResponseDataResponse> {
        const response = await this.customerProfileCustomerInformationATSGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get AccountInfo
     */
    async customerProfileCustomerInformationAccountInfoGetRaw(requestParameters: CustomerProfileCustomerInformationAccountInfoGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountInfoResponseDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.corporateId !== undefined) {
            queryParameters['CorporateId'] = requestParameters.corporateId;
        }

        if (requestParameters.referenceId !== undefined) {
            queryParameters['ReferenceId'] = requestParameters.referenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/customer-profile/CustomerInformation/AccountInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountInfoResponseDataResponseFromJSON(jsonValue));
    }

    /**
     * Get AccountInfo
     */
    async customerProfileCustomerInformationAccountInfoGet(requestParameters: CustomerProfileCustomerInformationAccountInfoGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountInfoResponseDataResponse> {
        const response = await this.customerProfileCustomerInformationAccountInfoGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get AddressInfo
     */
    async customerProfileCustomerInformationAddressInfoGetRaw(requestParameters: CustomerProfileCustomerInformationAddressInfoGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddressInfoResponseDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.addressTypeCode !== undefined) {
            queryParameters['AddressTypeCode'] = requestParameters.addressTypeCode;
        }

        if (requestParameters.corporateId !== undefined) {
            queryParameters['CorporateId'] = requestParameters.corporateId;
        }

        if (requestParameters.referenceId !== undefined) {
            queryParameters['ReferenceId'] = requestParameters.referenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/customer-profile/CustomerInformation/AddressInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddressInfoResponseDataResponseFromJSON(jsonValue));
    }

    /**
     * Get AddressInfo
     */
    async customerProfileCustomerInformationAddressInfoGet(requestParameters: CustomerProfileCustomerInformationAddressInfoGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddressInfoResponseDataResponse> {
        const response = await this.customerProfileCustomerInformationAddressInfoGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get AttorneyInfo
     */
    async customerProfileCustomerInformationAttorneyInfoGetRaw(requestParameters: CustomerProfileCustomerInformationAttorneyInfoGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AttorneyInfoResponseDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.corporateId !== undefined) {
            queryParameters['CorporateId'] = requestParameters.corporateId;
        }

        if (requestParameters.referenceId !== undefined) {
            queryParameters['ReferenceId'] = requestParameters.referenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/customer-profile/CustomerInformation/AttorneyInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AttorneyInfoResponseDataResponseFromJSON(jsonValue));
    }

    /**
     * Get AttorneyInfo
     */
    async customerProfileCustomerInformationAttorneyInfoGet(requestParameters: CustomerProfileCustomerInformationAttorneyInfoGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AttorneyInfoResponseDataResponse> {
        const response = await this.customerProfileCustomerInformationAttorneyInfoGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get BeneficiaryInfo
     */
    async customerProfileCustomerInformationBeneficiaryInfoGetRaw(requestParameters: CustomerProfileCustomerInformationBeneficiaryInfoGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BeneficiaryInfoResponseDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.corporateId !== undefined) {
            queryParameters['CorporateId'] = requestParameters.corporateId;
        }

        if (requestParameters.referenceId !== undefined) {
            queryParameters['ReferenceId'] = requestParameters.referenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/customer-profile/CustomerInformation/BeneficiaryInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BeneficiaryInfoResponseDataResponseFromJSON(jsonValue));
    }

    /**
     * Get BeneficiaryInfo
     */
    async customerProfileCustomerInformationBeneficiaryInfoGet(requestParameters: CustomerProfileCustomerInformationBeneficiaryInfoGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BeneficiaryInfoResponseDataResponse> {
        const response = await this.customerProfileCustomerInformationBeneficiaryInfoGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * GET Update Data CustomerInfo
     */
    async customerProfileCustomerInformationCorporateIdGetRaw(requestParameters: CustomerProfileCustomerInformationCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BaseResponse>> {
        if (requestParameters.corporateId === null || requestParameters.corporateId === undefined) {
            throw new runtime.RequiredError('corporateId','Required parameter requestParameters.corporateId was null or undefined when calling customerProfileCustomerInformationCorporateIdGet.');
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
            path: `/customer-profile/CustomerInformation/{corporateId}`.replace(`{${"corporateId"}}`, encodeURIComponent(String(requestParameters.corporateId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseResponseFromJSON(jsonValue));
    }

    /**
     * GET Update Data CustomerInfo
     */
    async customerProfileCustomerInformationCorporateIdGet(requestParameters: CustomerProfileCustomerInformationCorporateIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BaseResponse> {
        const response = await this.customerProfileCustomerInformationCorporateIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update All Step CustomerInfo
     */
    async customerProfileCustomerInformationCorporateIdPutRaw(requestParameters: CustomerProfileCustomerInformationCorporateIdPutOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BaseResponse>> {
        if (requestParameters.corporateId === null || requestParameters.corporateId === undefined) {
            throw new runtime.RequiredError('corporateId','Required parameter requestParameters.corporateId was null or undefined when calling customerProfileCustomerInformationCorporateIdPut.');
        }

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
            path: `/customer-profile/CustomerInformation/{corporateId}`.replace(`{${"corporateId"}}`, encodeURIComponent(String(requestParameters.corporateId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CustomerProfileCustomerInformationCorporateIdPutRequestToJSON(requestParameters.customerProfileCustomerInformationCorporateIdPutRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BaseResponseFromJSON(jsonValue));
    }

    /**
     * Update All Step CustomerInfo
     */
    async customerProfileCustomerInformationCorporateIdPut(requestParameters: CustomerProfileCustomerInformationCorporateIdPutOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BaseResponse> {
        const response = await this.customerProfileCustomerInformationCorporateIdPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get DocReceiveInfo
     */
    async customerProfileCustomerInformationDocReceiveInfoGetRaw(requestParameters: CustomerProfileCustomerInformationDocReceiveInfoGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<DocReceiveAddressInfoResponseDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.docReceiveType !== undefined) {
            queryParameters['DocReceiveType'] = requestParameters.docReceiveType;
        }

        if (requestParameters.corporateId !== undefined) {
            queryParameters['CorporateId'] = requestParameters.corporateId;
        }

        if (requestParameters.referenceId !== undefined) {
            queryParameters['ReferenceId'] = requestParameters.referenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/customer-profile/CustomerInformation/DocReceiveInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => DocReceiveAddressInfoResponseDataResponseFromJSON(jsonValue));
    }

    /**
     * Get DocReceiveInfo
     */
    async customerProfileCustomerInformationDocReceiveInfoGet(requestParameters: CustomerProfileCustomerInformationDocReceiveInfoGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<DocReceiveAddressInfoResponseDataResponse> {
        const response = await this.customerProfileCustomerInformationDocReceiveInfoGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get E-Dividend
     */
    async customerProfileCustomerInformationEDividendGetRaw(requestParameters: CustomerProfileCustomerInformationEDividendGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BankInfoResponseDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.corporateId !== undefined) {
            queryParameters['CorporateId'] = requestParameters.corporateId;
        }

        if (requestParameters.referenceId !== undefined) {
            queryParameters['ReferenceId'] = requestParameters.referenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/customer-profile/CustomerInformation/EDividend`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BankInfoResponseDataResponseFromJSON(jsonValue));
    }

    /**
     * Get E-Dividend
     */
    async customerProfileCustomerInformationEDividendGet(requestParameters: CustomerProfileCustomerInformationEDividendGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BankInfoResponseDataResponse> {
        const response = await this.customerProfileCustomerInformationEDividendGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get EmergencyContactInfo
     */
    async customerProfileCustomerInformationEmergencyContactInfoGetRaw(requestParameters: CustomerProfileCustomerInformationEmergencyContactInfoGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EmergencyContactInfoResponseDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.corporateId !== undefined) {
            queryParameters['CorporateId'] = requestParameters.corporateId;
        }

        if (requestParameters.referenceId !== undefined) {
            queryParameters['ReferenceId'] = requestParameters.referenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/customer-profile/CustomerInformation/EmergencyContactInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EmergencyContactInfoResponseDataResponseFromJSON(jsonValue));
    }

    /**
     * Get EmergencyContactInfo
     */
    async customerProfileCustomerInformationEmergencyContactInfoGet(requestParameters: CustomerProfileCustomerInformationEmergencyContactInfoGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EmergencyContactInfoResponseDataResponse> {
        const response = await this.customerProfileCustomerInformationEmergencyContactInfoGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get FinancialInfo
     */
    async customerProfileCustomerInformationFinancialInfoGetRaw(requestParameters: CustomerProfileCustomerInformationFinancialInfoGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FinancialInfoResponseDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.corporateId !== undefined) {
            queryParameters['CorporateId'] = requestParameters.corporateId;
        }

        if (requestParameters.referenceId !== undefined) {
            queryParameters['ReferenceId'] = requestParameters.referenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/customer-profile/CustomerInformation/FinancialInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FinancialInfoResponseDataResponseFromJSON(jsonValue));
    }

    /**
     * Get FinancialInfo
     */
    async customerProfileCustomerInformationFinancialInfoGet(requestParameters: CustomerProfileCustomerInformationFinancialInfoGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FinancialInfoResponseDataResponse> {
        const response = await this.customerProfileCustomerInformationFinancialInfoGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get OccupationInfo
     */
    async customerProfileCustomerInformationOccupationInfoGetRaw(requestParameters: CustomerProfileCustomerInformationOccupationInfoGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OccupationInfoResponseDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.corporateId !== undefined) {
            queryParameters['CorporateId'] = requestParameters.corporateId;
        }

        if (requestParameters.referenceId !== undefined) {
            queryParameters['ReferenceId'] = requestParameters.referenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/customer-profile/CustomerInformation/OccupationInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OccupationInfoResponseDataResponseFromJSON(jsonValue));
    }

    /**
     * Get OccupationInfo
     */
    async customerProfileCustomerInformationOccupationInfoGet(requestParameters: CustomerProfileCustomerInformationOccupationInfoGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OccupationInfoResponseDataResponse> {
        const response = await this.customerProfileCustomerInformationOccupationInfoGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get PersonalInfo
     */
    async customerProfileCustomerInformationPersonalInfoGetRaw(requestParameters: CustomerProfileCustomerInformationPersonalInfoGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PersonalInfoResponseDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.corporateId !== undefined) {
            queryParameters['CorporateId'] = requestParameters.corporateId;
        }

        if (requestParameters.referenceId !== undefined) {
            queryParameters['ReferenceId'] = requestParameters.referenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/customer-profile/CustomerInformation/PersonalInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PersonalInfoResponseDataResponseFromJSON(jsonValue));
    }

    /**
     * Get PersonalInfo
     */
    async customerProfileCustomerInformationPersonalInfoGet(requestParameters: CustomerProfileCustomerInformationPersonalInfoGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PersonalInfoResponseDataResponse> {
        const response = await this.customerProfileCustomerInformationPersonalInfoGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get PoliticRelationInfo
     */
    async customerProfileCustomerInformationPoliticRelationInfoGetRaw(requestParameters: CustomerProfileCustomerInformationPoliticRelationInfoGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PoliticRelationInfoResponseDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.corporateId !== undefined) {
            queryParameters['CorporateId'] = requestParameters.corporateId;
        }

        if (requestParameters.referenceId !== undefined) {
            queryParameters['ReferenceId'] = requestParameters.referenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/customer-profile/CustomerInformation/PoliticRelationInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PoliticRelationInfoResponseDataResponseFromJSON(jsonValue));
    }

    /**
     * Get PoliticRelationInfo
     */
    async customerProfileCustomerInformationPoliticRelationInfoGet(requestParameters: CustomerProfileCustomerInformationPoliticRelationInfoGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PoliticRelationInfoResponseDataResponse> {
        const response = await this.customerProfileCustomerInformationPoliticRelationInfoGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get SpouseInfo
     */
    async customerProfileCustomerInformationSpouseInfoGetRaw(requestParameters: CustomerProfileCustomerInformationSpouseInfoGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SpouseInfoResponseDataResponse>> {
        const queryParameters: any = {};

        if (requestParameters.corporateId !== undefined) {
            queryParameters['CorporateId'] = requestParameters.corporateId;
        }

        if (requestParameters.referenceId !== undefined) {
            queryParameters['ReferenceId'] = requestParameters.referenceId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPortalToken !== undefined && requestParameters.xPortalToken !== null) {
            headerParameters['x-portal-token'] = String(requestParameters.xPortalToken);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/customer-profile/CustomerInformation/SpouseInfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SpouseInfoResponseDataResponseFromJSON(jsonValue));
    }

    /**
     * Get SpouseInfo
     */
    async customerProfileCustomerInformationSpouseInfoGet(requestParameters: CustomerProfileCustomerInformationSpouseInfoGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SpouseInfoResponseDataResponse> {
        const response = await this.customerProfileCustomerInformationSpouseInfoGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
