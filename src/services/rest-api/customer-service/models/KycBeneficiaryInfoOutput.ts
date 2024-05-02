/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.332
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { KycAddressOutput } from './KycAddressOutput';
import {
    KycAddressOutputFromJSON,
    KycAddressOutputFromJSONTyped,
    KycAddressOutputToJSON,
} from './KycAddressOutput';

/**
 * 
 * @export
 * @interface KycBeneficiaryInfoOutput
 */
export interface KycBeneficiaryInfoOutput {
    /**
     * 
     * @type {string}
     * @memberof KycBeneficiaryInfoOutput
     */
    corporateId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycBeneficiaryInfoOutput
     */
    referenceType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycBeneficiaryInfoOutput
     */
    referenceId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycBeneficiaryInfoOutput
     */
    beneficiaryFirstName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycBeneficiaryInfoOutput
     */
    beneficiaryLastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycBeneficiaryInfoOutput
     */
    beneficiaryRelationshipCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycBeneficiaryInfoOutput
     */
    beneficiaryRelationshipDesc?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycBeneficiaryInfoOutput
     */
    beneficiaryRelationshipOther?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycBeneficiaryInfoOutput
     */
    beneficiaryType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof KycBeneficiaryInfoOutput
     */
    beneficiaryNo?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof KycBeneficiaryInfoOutput
     */
    beneficiaryExpireDate?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof KycBeneficiaryInfoOutput
     */
    beneficiaryNeverExpire?: boolean;
    /**
     * 
     * @type {KycAddressOutput}
     * @memberof KycBeneficiaryInfoOutput
     */
    address?: KycAddressOutput | null;
}

/**
 * Check if a given object implements the KycBeneficiaryInfoOutput interface.
 */
export function instanceOfKycBeneficiaryInfoOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function KycBeneficiaryInfoOutputFromJSON(json: any): KycBeneficiaryInfoOutput {
    return KycBeneficiaryInfoOutputFromJSONTyped(json, false);
}

export function KycBeneficiaryInfoOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycBeneficiaryInfoOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'corporateId': !exists(json, 'corporateId') ? undefined : json['corporateId'],
        'referenceType': !exists(json, 'referenceType') ? undefined : json['referenceType'],
        'referenceId': !exists(json, 'referenceId') ? undefined : json['referenceId'],
        'beneficiaryFirstName': !exists(json, 'beneficiaryFirstName') ? undefined : json['beneficiaryFirstName'],
        'beneficiaryLastName': !exists(json, 'beneficiaryLastName') ? undefined : json['beneficiaryLastName'],
        'beneficiaryRelationshipCode': !exists(json, 'beneficiaryRelationshipCode') ? undefined : json['beneficiaryRelationshipCode'],
        'beneficiaryRelationshipDesc': !exists(json, 'beneficiaryRelationshipDesc') ? undefined : json['beneficiaryRelationshipDesc'],
        'beneficiaryRelationshipOther': !exists(json, 'beneficiaryRelationshipOther') ? undefined : json['beneficiaryRelationshipOther'],
        'beneficiaryType': !exists(json, 'beneficiaryType') ? undefined : json['beneficiaryType'],
        'beneficiaryNo': !exists(json, 'beneficiaryNo') ? undefined : json['beneficiaryNo'],
        'beneficiaryExpireDate': !exists(json, 'beneficiaryExpireDate') ? undefined : (new Date(json['beneficiaryExpireDate'])),
        'beneficiaryNeverExpire': !exists(json, 'beneficiaryNeverExpire') ? undefined : json['beneficiaryNeverExpire'],
        'address': !exists(json, 'address') ? undefined : KycAddressOutputFromJSON(json['address']),
    };
}

export function KycBeneficiaryInfoOutputToJSON(value?: KycBeneficiaryInfoOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'corporateId': value.corporateId,
        'referenceType': value.referenceType,
        'referenceId': value.referenceId,
        'beneficiaryFirstName': value.beneficiaryFirstName,
        'beneficiaryLastName': value.beneficiaryLastName,
        'beneficiaryRelationshipCode': value.beneficiaryRelationshipCode,
        'beneficiaryRelationshipDesc': value.beneficiaryRelationshipDesc,
        'beneficiaryRelationshipOther': value.beneficiaryRelationshipOther,
        'beneficiaryType': value.beneficiaryType,
        'beneficiaryNo': value.beneficiaryNo,
        'beneficiaryExpireDate': value.beneficiaryExpireDate === undefined ? undefined : (value.beneficiaryExpireDate.toISOString()),
        'beneficiaryNeverExpire': value.beneficiaryNeverExpire,
        'address': KycAddressOutputToJSON(value.address),
    };
}

