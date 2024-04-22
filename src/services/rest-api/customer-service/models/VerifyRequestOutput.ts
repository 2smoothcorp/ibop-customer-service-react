/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.268
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Represents the output data for a verification request, detailing various properties and states of the verification.
 * @export
 * @interface VerifyRequestOutput
 */
export interface VerifyRequestOutput {
    /**
     * 
     * @type {number}
     * @memberof VerifyRequestOutput
     */
    verifyRequestId?: number;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    refId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    refType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    mobileNo?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    firstNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    lastNameTh?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    email?: string | null;
    /**
     * 
     * @type {number}
     * @memberof VerifyRequestOutput
     */
    flowId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    status?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof VerifyRequestOutput
     */
    requestTimestamp?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    requestBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof VerifyRequestOutput
     */
    confirmTimestamp?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    remark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    channel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    configCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    mobileCountry?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    sourceSystem?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    icremark?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    customerType?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    bccMail?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    overrideReasonCode?: string | null;
    /**
     * 
     * @type {number}
     * @memberof VerifyRequestOutput
     */
    completeVerifyRequestId?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof VerifyRequestOutput
     */
    expireDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    overrideOtherReason?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof VerifyRequestOutput
     */
    faceToFace?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof VerifyRequestOutput
     */
    consentLogId?: number | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    branchCode?: string | null;
    /**
     * Determines if the verification was made face-to-face based on the channel of request.
     * @type {boolean}
     * @memberof VerifyRequestOutput
     */
    isFace2Face?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    requestor?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    fullName?: string | null;
    /**
     * Gets or sets the IC (Identity Card) value associated with the verification request.
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    ic?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VerifyRequestOutput
     */
    logUserName?: string | null;
}

/**
 * Check if a given object implements the VerifyRequestOutput interface.
 */
export function instanceOfVerifyRequestOutput(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function VerifyRequestOutputFromJSON(json: any): VerifyRequestOutput {
    return VerifyRequestOutputFromJSONTyped(json, false);
}

export function VerifyRequestOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyRequestOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'verifyRequestId': !exists(json, 'verifyRequestId') ? undefined : json['verifyRequestId'],
        'refId': !exists(json, 'refId') ? undefined : json['refId'],
        'refType': !exists(json, 'refType') ? undefined : json['refType'],
        'mobileNo': !exists(json, 'mobileNo') ? undefined : json['mobileNo'],
        'firstNameTh': !exists(json, 'firstNameTh') ? undefined : json['firstNameTh'],
        'lastNameTh': !exists(json, 'lastNameTh') ? undefined : json['lastNameTh'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'flowId': !exists(json, 'flowId') ? undefined : json['flowId'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'requestTimestamp': !exists(json, 'requestTimestamp') ? undefined : (json['requestTimestamp'] === null ? null : new Date(json['requestTimestamp'])),
        'requestBy': !exists(json, 'requestBy') ? undefined : json['requestBy'],
        'confirmTimestamp': !exists(json, 'confirmTimestamp') ? undefined : (json['confirmTimestamp'] === null ? null : new Date(json['confirmTimestamp'])),
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
        'channel': !exists(json, 'channel') ? undefined : json['channel'],
        'configCode': !exists(json, 'configCode') ? undefined : json['configCode'],
        'mobileCountry': !exists(json, 'mobileCountry') ? undefined : json['mobileCountry'],
        'sourceSystem': !exists(json, 'sourceSystem') ? undefined : json['sourceSystem'],
        'icremark': !exists(json, 'icremark') ? undefined : json['icremark'],
        'customerType': !exists(json, 'customerType') ? undefined : json['customerType'],
        'bccMail': !exists(json, 'bccMail') ? undefined : json['bccMail'],
        'overrideReasonCode': !exists(json, 'overrideReasonCode') ? undefined : json['overrideReasonCode'],
        'completeVerifyRequestId': !exists(json, 'completeVerifyRequestId') ? undefined : json['completeVerifyRequestId'],
        'expireDate': !exists(json, 'expireDate') ? undefined : (json['expireDate'] === null ? null : new Date(json['expireDate'])),
        'overrideOtherReason': !exists(json, 'overrideOtherReason') ? undefined : json['overrideOtherReason'],
        'faceToFace': !exists(json, 'faceToFace') ? undefined : json['faceToFace'],
        'consentLogId': !exists(json, 'consentLogId') ? undefined : json['consentLogId'],
        'branchCode': !exists(json, 'branchCode') ? undefined : json['branchCode'],
        'isFace2Face': !exists(json, 'isFace2Face') ? undefined : json['isFace2Face'],
        'requestor': !exists(json, 'requestor') ? undefined : json['requestor'],
        'fullName': !exists(json, 'fullName') ? undefined : json['fullName'],
        'ic': !exists(json, 'ic') ? undefined : json['ic'],
        'logUserName': !exists(json, 'logUserName') ? undefined : json['logUserName'],
    };
}

export function VerifyRequestOutputToJSON(value?: VerifyRequestOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'verifyRequestId': value.verifyRequestId,
        'refId': value.refId,
        'refType': value.refType,
        'mobileNo': value.mobileNo,
        'firstNameTh': value.firstNameTh,
        'lastNameTh': value.lastNameTh,
        'email': value.email,
        'flowId': value.flowId,
        'status': value.status,
        'requestTimestamp': value.requestTimestamp === undefined ? undefined : (value.requestTimestamp === null ? null : value.requestTimestamp.toISOString()),
        'requestBy': value.requestBy,
        'confirmTimestamp': value.confirmTimestamp === undefined ? undefined : (value.confirmTimestamp === null ? null : value.confirmTimestamp.toISOString()),
        'remark': value.remark,
        'channel': value.channel,
        'configCode': value.configCode,
        'mobileCountry': value.mobileCountry,
        'sourceSystem': value.sourceSystem,
        'icremark': value.icremark,
        'customerType': value.customerType,
        'bccMail': value.bccMail,
        'overrideReasonCode': value.overrideReasonCode,
        'completeVerifyRequestId': value.completeVerifyRequestId,
        'expireDate': value.expireDate === undefined ? undefined : (value.expireDate === null ? null : value.expireDate.toISOString()),
        'overrideOtherReason': value.overrideOtherReason,
        'faceToFace': value.faceToFace,
        'consentLogId': value.consentLogId,
        'branchCode': value.branchCode,
        'isFace2Face': value.isFace2Face,
        'requestor': value.requestor,
        'fullName': value.fullName,
        'ic': value.ic,
        'logUserName': value.logUserName,
    };
}
