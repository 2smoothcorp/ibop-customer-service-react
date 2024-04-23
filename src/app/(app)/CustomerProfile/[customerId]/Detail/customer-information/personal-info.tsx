"use client"

import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
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
            case 'personType':
                return personalInfo.personTypeCode !== '-' ? `${personalInfo.personTypeCode} - ${personalInfo.personTypeDesc}` : '-';
            case 'referenceTypeDesc':
                return handleEmptyStringFormApi(personalInfo.referenceTypeDesc);
            case 'referenceID':
                return handleEmptyStringFormApi(personalInfo.referenceID);
            case 'country':
                return personalInfo.countryCode ? `${personalInfo.countryCode} - ${personalInfo.countryNameTh || personalInfo.countryNameEn}` : '-';
            case 'nation':
                return personalInfo.nationalityCode ? `${personalInfo.nationalityCode} - ${personalInfo.nationDesc}` : '-';
            case 'identityExpireDate':
                return !isEmptyStringFormApi(personalInfo.identityExpireDate) ? dayjs(personalInfo.identityExpireDate).format('DD/MM/YYYY') : '-';
            case 'gender':
                return personalInfo.genderCode ? `${personalInfo.genderCode} - ${personalInfo.gender}` : '-';
            case 'title':
                return personalInfo.titleCodeTh ? `${personalInfo.titleCodeTh} - ${personalInfo.titleNameTh || personalInfo.titleNameEn}` : '-';
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
        setValue('referenceTypeDesc', normalizationData('referenceTypeDesc', personalInfo));
        setValue('referenceID', normalizationData('referenceID', personalInfo));
        setValue('country', normalizationData('country', personalInfo));
        setValue('nation', normalizationData('nation', personalInfo));
        setValue('identityExpireDate', normalizationData('identityExpireDate', personalInfo));
        setValue('gender', normalizationData('gender', personalInfo));
        setValue('title', normalizationData('title', personalInfo));
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
                isLoading={isLoading}
                error={error ? error.message : undefined}
            >
                <div className="grid grid-cols-3">
                    <InputHorizontal
                        label="ประเภทลูกค้า"
                        defaultValue={data && normalizationData('personType', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="personType"
                        isRequired
                    />
                    <InputHorizontal
                        label="ประเภทหลักฐานลูกค้า"
                        defaultValue={data && normalizationData('referenceTypeDesc', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="referenceTypeDesc"
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
                        defaultValue={data && normalizationData('country', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="country"
                        isRequired
                    />
                    <InputHorizontal
                        label="ประเทศเจ้าของสัญชาติ"
                        defaultValue={data && normalizationData('nation', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="nation"
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
                        defaultValue={data && normalizationData('title', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="title"
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
                        defaultValue={data && normalizationData('gender', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="gender"
                        isRequired
                    />
                    <InputHorizontal
                        label="วัน/เดือน/ปีเกิด (ค.ศ.)"
                        defaultValue={data && normalizationData('birthDate', data) || '-'}
                        isEditable={isEditable}
                        register={register}
                        name="birthDate"
                        isRequired
                    />
                </div>
            </ContentLoading>
        </>
    )
}

interface SubmitInput {
    personType: string;
    referenceTypeDesc: string;
    referenceID: string;
    riskGroup: string;
    country: string;
    nation: string;
    identityExpireDate: string;
    title: string;
    gender: string;
    firstNameTh: string;
    lastNameTh: string;
    firstNameEn: string;
    lastNameEn: string;
    birthDate: string;
}