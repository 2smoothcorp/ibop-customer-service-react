/* tslint:disable */
/* eslint-disable */
/**
 * Customer Service API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.219
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface Choice
 */
export interface Choice {
    /**
     * 
     * @type {number}
     * @memberof Choice
     */
    'choiceId'?: number;
    /**
     * 
     * @type {number}
     * @memberof Choice
     */
    'questionId'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Choice
     */
    'choiceTextTh'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Choice
     */
    'choiceTextEn'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof Choice
     */
    'sequence'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Choice
     */
    'score'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Choice
     */
    'logFlag'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Choice
     */
    'logUser'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Choice
     */
    'logTimestamp'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Choice
     */
    'choiceCode'?: string | null;
}

