"use client"

import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataPersonTypeCustom } from "@/hooks/master-data-person-type";
import { useMasterDataReferenceCustom } from "@/hooks/master-data-reference";
import { useMasterDataTitlesCustom } from "@/hooks/master-data-titles";
import { useMasterDataCountriesCustom } from "@/hooks/masterDataCountries";
import { PersonalInfoModel, PersonalInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function PersonalInfo() {
    const params = useParams()
    const [isEditable, setIsEditable] = React.useState<boolean>(false);

    const { data, isLoading, error } = useQuery({
        queryKey: ['personalInfo', params.customerId],
        queryFn: () => getData(),
    })

    // master data
    const { data: personType, isLoading: isLoadingPersonType } = useMasterDataPersonTypeCustom();
    const { data: reference, isLoading: isLoadingReference } = useMasterDataReferenceCustom();
    const { data: countries, isLoading: isLoadingCountries } = useMasterDataCountriesCustom();
    const { data: titles, isLoading: isLoadingTitles } = useMasterDataTitlesCustom();


    const {
        register,
        handleSubmit,
        watch,
        formState,
        setValue,
        getValues,
    } = useForm<SubmitInput>()

    const normalizationData = (name: string, personalInfo: PersonalInfoModel): string => {
        switch (name) {
            case 'personTypeCode':
                return handleEmptyStringFormApi(personalInfo.personTypeCode);
            case 'personType':
                return !isEmptyStringFormApi(personalInfo.personTypeCode) ? `${personalInfo.personTypeCode} - ${personalInfo.personTypeDesc}` : '-';
            case 'referenceType':
                return handleEmptyStringFormApi(personalInfo.referenceType);
            case 'referenceTypeDesc':
                return !isEmptyStringFormApi(personalInfo.referenceType) ? `${personalInfo.referenceType} - ${personalInfo.referenceTypeDesc} ` : '-';
            case 'referenceID':
                return handleEmptyStringFormApi(personalInfo.referenceID);
            case 'countryCode':
                return handleEmptyStringFormApi(personalInfo.countryCode);
            case 'country':
                return !isEmptyStringFormApi(personalInfo.countryCode) ? `${personalInfo.countryCode} - ${personalInfo.countryNameTh || personalInfo.countryNameEn}` : '-';
            case 'nationalityCode':
                return handleEmptyStringFormApi(personalInfo.nationalityCode);
            case 'nation':
                return !isEmptyStringFormApi(personalInfo.nationalityCode) ? `${personalInfo.nationalityCode} - ${personalInfo.nationDesc}` : '-';
            case 'identityExpireDate':
                return !isEmptyStringFormApi(personalInfo.identityExpireDate) ? dayjs(personalInfo.identityExpireDate).format('DD/MM/YYYY') : '-';
            case 'genderCode':
                if (personalInfo.genderCode == 'M') {
                    return '0'
                }
                if (personalInfo.genderCode == 'F') {
                    return '1'
                }
                if (personalInfo.genderCode == 'O') {
                    return '2'
                }
                return handleEmptyStringFormApi(personalInfo.genderCode);
            case 'gender':
                let gender = '';
                if (personalInfo.genderCode == 'M') {
                    gender = '0'
                }
                if (personalInfo.genderCode == 'F') {
                    gender = '1'
                }
                if (personalInfo.genderCode == 'O') {
                    gender = '2'
                }
                return !isEmptyStringFormApi(personalInfo.genderCode) ? `${gender !== '' ? gender : personalInfo.genderCode} - ${personalInfo.gender}` : '-';
            case 'titleCode':
                return handleEmptyStringFormApi(personalInfo.titleCodeTh);
            case 'title':
                return !isEmptyStringFormApi(personalInfo.titleCodeTh) ? `${personalInfo.titleCodeTh} - ${personalInfo.titleNameTh || personalInfo.titleNameEn}` : '-';
            case 'firstNameTh':
                return handleEmptyStringFormApi(personalInfo.firstNameTh);
            case 'lastNameTh':
                return handleEmptyStringFormApi(personalInfo.lastNameTh);
            case 'firstNameEn':
                return handleEmptyStringFormApi(personalInfo.firstNameEn);
            case 'lastNameEn':
                return handleEmptyStringFormApi(personalInfo.lastNameEn);
            case 'birthDate':
                return !isEmptyStringFormApi(personalInfo.birthDate) ? dayjs(personalInfo.birthDate).format('DD/MM/YYYY') : '-';
            default:
                return '-';
        }
    }

    const setDefaultData = (personalInfo: PersonalInfoModel) => {
        setValue('personType', normalizationData('personType', personalInfo));
        setValue('personTypeCode', normalizationData('personTypeCode', personalInfo));
        setValue('referenceTypeDesc', normalizationData('referenceTypeDesc', personalInfo));
        setValue('referenceType', normalizationData('referenceType', personalInfo));
        setValue('referenceID', normalizationData('referenceID', personalInfo));
        setValue('country', normalizationData('country', personalInfo));
        setValue('countryCode', normalizationData('countryCode', personalInfo));
        setValue('nation', normalizationData('nation', personalInfo));
        setValue('nationalityCode', normalizationData('nationalityCode', personalInfo));
        setValue('identityExpireDate', normalizationData('identityExpireDate', personalInfo));
        setValue('gender', normalizationData('gender', personalInfo));
        setValue('genderCode', normalizationData('genderCode', personalInfo));
        setValue('title', normalizationData('title', personalInfo));
        setValue('titleCode', normalizationData('titleCode', personalInfo));
        setValue('firstNameTh', normalizationData('firstNameTh', personalInfo));
        setValue('lastNameTh', normalizationData('lastNameTh', personalInfo));
        setValue('firstNameEn', normalizationData('firstNameEn', personalInfo));
        setValue('lastNameEn', normalizationData('lastNameEn', personalInfo));
        setValue('birthDate', normalizationData('birthDate', personalInfo));

    }

    const getData = async () => {
        if (data) {
            setDefaultData(data)
        }
        const { customerId } = params
        if (customerId) {
            try {
                const request = await fetch(`/api/customer-profile/personal-info/${customerId}`, { method: 'GET' });
                const response: PersonalInfoResponseDataResponse = await request.json();
                if (response.status == 200) {
                    const { data } = response;
                    if (data && data.personalInfo) {
                        console.log(`data.personalInfo`, data.personalInfo)
                        setDefaultData(data.personalInfo)
                        return data.personalInfo
                    }
                }
            } catch (error) {
                throw error
            }
        }
        return null
    }

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="ข้อมูลส่วนตัว"
            />
            <ContentLoading
                isLoading={isLoading || isLoadingPersonType || isLoadingReference || isLoadingCountries || isLoadingTitles}
                error={error ? error.message : undefined}
            >
                <div className="grid grid-cols-3">
                    <InputHorizontal
                        label="ประเภทลูกค้า"
                        defaultValue={data && normalizationData('personTypeCode', data) || '-'}
                        textShow={data && normalizationData('personType', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="personTypeCode"
                        type="select"
                        list={personType}
                        isRequired
                    />
                    <InputHorizontal
                        label="ประเภทหลักฐานลูกค้า"
                        defaultValue={data && normalizationData('referenceType', data) || '-'}
                        textShow={data && normalizationData('referenceTypeDesc', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="referenceType"
                        type="select"
                        list={reference}
                        isRequired
                    />
                    <InputHorizontal
                        label="เลขที่บัตร"
                        defaultValue={data && normalizationData('referenceID', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="referenceID"
                        isRequired
                    />
                    <InputHorizontal
                        label="ประเทศที่ออกบัตร"
                        defaultValue={data && normalizationData('countryCode', data) || '-'}
                        textShow={data && normalizationData('country', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        type="select"
                        list={countries}
                        name="countryCode"
                        isRequired
                    />
                    <InputHorizontal
                        label="ประเทศเจ้าของสัญชาติ"
                        defaultValue={data && normalizationData('nationalityCode', data) || '-'}
                        textShow={data && normalizationData('nation', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="nationalityCode"
                        // type="select"
                        // list={branches}
                        isRequired
                    />
                    <InputHorizontal
                        label="วันที่หมดอายุบัตร (ค.ศ.)"
                        defaultValue={data && normalizationData('identityExpireDate', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="identityExpireDate"
                        isRequired
                    />
                    <InputHorizontal
                        label="คำนำหน้า"
                        defaultValue={data && normalizationData('titleCode', data) || '-'}
                        textShow={data && normalizationData('title', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="titleCode"
                        type="select"
                        list={titles}
                        isRequired
                    />
                    <InputHorizontal
                        label="ชื่อ (ภาษาไทย)"
                        defaultValue={data && normalizationData('firstNameTh', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="firstNameTh"
                        isRequired
                    />
                    <InputHorizontal
                        label="นามสกุล (ภาษาไทย)"
                        defaultValue={data && normalizationData('lastNameTh', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="lastNameTh"
                        isRequired
                    />
                    <InputHorizontal
                        label=""
                        defaultValue=""
                        register={register}
                        name=""
                    />
                    <InputHorizontal
                        label="ชื่อ (ภาษาอังกฤษ)"
                        defaultValue={data && normalizationData('firstNameEn', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="firstNameEn"
                        isRequired
                    />
                    <InputHorizontal
                        label="นามสกุล (ภาษาอังกฤษ)"
                        defaultValue={data && normalizationData('lastNameEn', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="lastNameEn"
                        isRequired
                    />
                    <InputHorizontal
                        label="เพศ"
                        defaultValue={data && normalizationData('genderCode', data) || '-'}
                        textShow={data && normalizationData('gender', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="genderCode"
                        type="select"
                        list={[
                            { value: '0', label: 'ชาย' },
                            { value: '1', label: 'หญิง' },
                            { value: '2', label: 'นิติบุคคล' },
                            { value: '3', label: 'ไม่ระบุ' },
                        ]}
                        isRequired
                    />
                    <InputHorizontal
                        label="วัน/เดือน/ปีเกิด (ค.ศ.)"
                        defaultValue={data && normalizationData('birthDate', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="birthDate"
                        // type="date"
                        isRequired
                    />
                </div>
            </ContentLoading>
        </>
    )
}

interface SubmitInput {
    personType: string;
    personTypeCode: string;
    referenceTypeDesc: string;
    referenceType: string;
    referenceID: string;
    riskGroup: string;
    country: string;
    countryCode: string;
    nation: string;
    nationalityCode: string;
    identityExpireDate: string;
    title: string;
    titleCode: string;
    gender: string;
    genderCode: string;
    firstNameTh: string;
    lastNameTh: string;
    firstNameEn: string;
    lastNameEn: string;
    birthDate: string;
}