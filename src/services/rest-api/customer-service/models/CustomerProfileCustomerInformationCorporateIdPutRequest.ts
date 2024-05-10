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
import type { AttorneyInfoRequest } from './AttorneyInfoRequest';
import {
    AttorneyInfoRequestFromJSON,
    AttorneyInfoRequestFromJSONTyped,
    AttorneyInfoRequestToJSON,
} from './AttorneyInfoRequest';
import type { BankInfoRequest } from './BankInfoRequest';
import {
    BankInfoRequestFromJSON,
    BankInfoRequestFromJSONTyped,
    BankInfoRequestToJSON,
} from './BankInfoRequest';
import type { BeneficiaryInfoRequest } from './BeneficiaryInfoRequest';
import {
    BeneficiaryInfoRequestFromJSON,
    BeneficiaryInfoRequestFromJSONTyped,
    BeneficiaryInfoRequestToJSON,
} from './BeneficiaryInfoRequest';
import type { ConsentInfoRequest } from './ConsentInfoRequest';
import {
    ConsentInfoRequestFromJSON,
    ConsentInfoRequestFromJSONTyped,
    ConsentInfoRequestToJSON,
} from './ConsentInfoRequest';
import type { ContactInfoRequest } from './ContactInfoRequest';
import {
    ContactInfoRequestFromJSON,
    ContactInfoRequestFromJSONTyped,
    ContactInfoRequestToJSON,
} from './ContactInfoRequest';
import type { FATCAInfoRequest } from './FATCAInfoRequest';
import {
    FATCAInfoRequestFromJSON,
    FATCAInfoRequestFromJSONTyped,
    FATCAInfoRequestToJSON,
} from './FATCAInfoRequest';
import type { FinancialInfoRequest } from './FinancialInfoRequest';
import {
    FinancialInfoRequestFromJSON,
    FinancialInfoRequestFromJSONTyped,
    FinancialInfoRequestToJSON,
} from './FinancialInfoRequest';
import type { PersonalInfoRequest } from './PersonalInfoRequest';
import {
    PersonalInfoRequestFromJSON,
    PersonalInfoRequestFromJSONTyped,
    PersonalInfoRequestToJSON,
} from './PersonalInfoRequest';

/**
 * 
 * @export
 * @interface CustomerProfileCustomerInformationCorporateIdPutRequest
 */
export interface CustomerProfileCustomerInformationCorporateIdPutRequest {
    /**
     * 
     * @type {PersonalInfoRequest}
     * @memberof CustomerProfileCustomerInformationCorporateIdPutRequest
     */
    personalInfo?: PersonalInfoRequest | null;
    /**
     * 
     * @type {ContactInfoRequest}
     * @memberof CustomerProfileCustomerInformationCorporateIdPutRequest
     */
    contactInfo?: ContactInfoRequest | null;
    /**
     * 
     * @type {FinancialInfoRequest}
     * @memberof CustomerProfileCustomerInformationCorporateIdPutRequest
     */
    financialInfo?: FinancialInfoRequest | null;
    /**
     * 
     * @type {BeneficiaryInfoRequest}
     * @memberof CustomerProfileCustomerInformationCorporateIdPutRequest
     */
    beneficiaryInfo?: BeneficiaryInfoRequest | null;
    /**
     * 
     * @type {BankInfoRequest}
     * @memberof CustomerProfileCustomerInformationCorporateIdPutRequest
     */
    atsInfo?: BankInfoRequest | null;
    /**
     * 
     * @type {BankInfoRequest}
     * @memberof CustomerProfileCustomerInformationCorporateIdPutRequest
     */
    eDividendInfo?: BankInfoRequest | null;
    /**
     * 
     * @type {AttorneyInfoRequest}
     * @memberof CustomerProfileCustomerInformationCorporateIdPutRequest
     */
    attorneyInfo?: AttorneyInfoRequest | null;
    /**
     * 
     * @type {ConsentInfoRequest}
     * @memberof CustomerProfileCustomerInformationCorporateIdPutRequest
     */
    consentInfo?: ConsentInfoRequest | null;
    /**
     * 
     * @type {FATCAInfoRequest}
     * @memberof CustomerProfileCustomerInformationCorporateIdPutRequest
     */
    fatcaInfo?: FATCAInfoRequest | null;
}

/**
 * Check if a given object implements the CustomerProfileCustomerInformationCorporateIdPutRequest interface.
 */
export function instanceOfCustomerProfileCustomerInformationCorporateIdPutRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerProfileCustomerInformationCorporateIdPutRequestFromJSON(json: any): CustomerProfileCustomerInformationCorporateIdPutRequest {
    return CustomerProfileCustomerInformationCorporateIdPutRequestFromJSONTyped(json, false);
}

export function CustomerProfileCustomerInformationCorporateIdPutRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerProfileCustomerInformationCorporateIdPutRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'personalInfo': !exists(json, 'personalInfo') ? undefined : PersonalInfoRequestFromJSON(json['personalInfo']),
        'contactInfo': !exists(json, 'contactInfo') ? undefined : ContactInfoRequestFromJSON(json['contactInfo']),
        'financialInfo': !exists(json, 'financialInfo') ? undefined : FinancialInfoRequestFromJSON(json['financialInfo']),
        'beneficiaryInfo': !exists(json, 'beneficiaryInfo') ? undefined : BeneficiaryInfoRequestFromJSON(json['beneficiaryInfo']),
        'atsInfo': !exists(json, 'atsInfo') ? undefined : BankInfoRequestFromJSON(json['atsInfo']),
        'eDividendInfo': !exists(json, 'eDividendInfo') ? undefined : BankInfoRequestFromJSON(json['eDividendInfo']),
        'attorneyInfo': !exists(json, 'attorneyInfo') ? undefined : AttorneyInfoRequestFromJSON(json['attorneyInfo']),
        'consentInfo': !exists(json, 'consentInfo') ? undefined : ConsentInfoRequestFromJSON(json['consentInfo']),
        'fatcaInfo': !exists(json, 'fatcaInfo') ? undefined : FATCAInfoRequestFromJSON(json['fatcaInfo']),
    };
}

export function CustomerProfileCustomerInformationCorporateIdPutRequestToJSON(value?: CustomerProfileCustomerInformationCorporateIdPutRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'personalInfo': PersonalInfoRequestToJSON(value.personalInfo),
        'contactInfo': ContactInfoRequestToJSON(value.contactInfo),
        'financialInfo': FinancialInfoRequestToJSON(value.financialInfo),
        'beneficiaryInfo': BeneficiaryInfoRequestToJSON(value.beneficiaryInfo),
        'atsInfo': BankInfoRequestToJSON(value.atsInfo),
        'eDividendInfo': BankInfoRequestToJSON(value.eDividendInfo),
        'attorneyInfo': AttorneyInfoRequestToJSON(value.attorneyInfo),
        'consentInfo': ConsentInfoRequestToJSON(value.consentInfo),
        'fatcaInfo': FATCAInfoRequestToJSON(value.fatcaInfo),
    };
}

