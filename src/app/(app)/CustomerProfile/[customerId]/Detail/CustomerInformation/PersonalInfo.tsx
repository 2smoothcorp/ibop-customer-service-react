"use client"

import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import dayjs from "dayjs";
import { useParams } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { getPersonalInfo } from "./personalInfo.action";

export default function PersonalInfo() {
    const params = useParams()
    const {
        register,
        handleSubmit,
        watch,
        formState,
        setValue,
        getValues,
    } = useForm<SubmitInput>()
    const [isReady, setIsReady] = React.useState<boolean>(false)
    const [isEditable, setIsEditable] = React.useState<boolean>(false);

    const [getPersonalInfoState, getPersonalInfoAction] = useFormState(getPersonalInfo, {
        data: undefined,
        success: false,
        error: undefined
    })

    React.useEffect(() => {
        if (!getPersonalInfoState.success && getPersonalInfoState?.error) {
            setIsReady(true);
        }
        if (getPersonalInfoState.success) {
            const { data } = getPersonalInfoState
            if (data?.data && data?.data?.personalInfo) {
                const { data: { personalInfo } } = data
                // console.log(personalInfo)
                setValue('personType', personalInfo.personTypeCode !== '-' ? `${personalInfo.personTypeCode} - ${personalInfo.personTypeDesc}` : '-');
                setValue('referenceTypeDesc', personalInfo.referenceTypeDesc ?? '-');
                setValue('referenceID', personalInfo.referenceID ?? '-');
                setValue('country', personalInfo.countryCode ? `${personalInfo.countryCode} - ${personalInfo.countryNameTh || personalInfo.countryNameEn}` : '-');
                setValue('nation', personalInfo.nationalityCode ? `${personalInfo.nationalityCode} - ${personalInfo.nationDesc}` : '-');
                setValue('identityExpireDate', personalInfo.identityExpireDate?.toString() ?? '-');
                setValue('gender', personalInfo.genderCode ? `${personalInfo.genderCode} - ${personalInfo.gender}` : '-')
                setValue('title', personalInfo.titleCodeTh ? `${personalInfo.titleCodeTh} - ${personalInfo.titleNameTh || personalInfo.titleNameEn}` : '-');
                setValue('firstNameTh', personalInfo.firstNameTh ?? '-');
                setValue('lastNameTh', personalInfo.lastNameTh ?? '-');
                setValue('firstNameEn', personalInfo.firstNameEn ?? '-');
                setValue('lastNameEn', personalInfo.lastNameEn ?? '-');
                setValue('birthDate', personalInfo.birthDate ? dayjs(personalInfo.birthDate).format('DD/MM/YYYY') : '-');
            }
            setIsReady(true);
        }

    }, [getPersonalInfoState])

    React.useEffect(() => {
        const { customerId } = params
        if (customerId) {
            const formData = new FormData();
            formData.append('corporateId', customerId as string)
            getPersonalInfoAction(formData)
        }
        // console.log('router.query', params)
    }, []);

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="ข้อมูลส่วนตัว"
            />
            <ContentLoading
                isLoading={!getPersonalInfoState.data && getPersonalInfoState.error === undefined && !isReady}
                error={getPersonalInfoState.error || null}
            >
                <div className="grid grid-cols-3">
                    <InputHorizontal
                        label="ประเภทลูกค้า"
                        defaultValue={getValues('personType')}
                        isEditable={isEditable}
                        register={register}
                        name="personType"
                        isRequired
                    />
                    <InputHorizontal
                        label="ประเภทหลักฐานลูกค้า"
                        defaultValue={getValues('referenceTypeDesc')}
                        isEditable={isEditable}
                        register={register}
                        name="referenceTypeDesc"
                        isRequired
                    />
                    <InputHorizontal
                        label="เลขที่บัตร"
                        defaultValue={getValues('referenceID')}
                        isEditable={isEditable}
                        register={register}
                        name="referenceID"
                        isRequired
                    />
                    <InputHorizontal
                        label="ประเทศที่ออกบัตร"
                        defaultValue={getValues('country')}
                        isEditable={isEditable}
                        register={register}
                        name="country"
                        isRequired
                    />
                    <InputHorizontal
                        label="ประเทศเจ้าของสัญชาติ"
                        defaultValue={getValues('nation')}
                        isEditable={isEditable}
                        register={register}
                        name="nation"
                        isRequired
                    />
                    <InputHorizontal
                        label="วันที่หมดอายุบัตร (ค.ศ.)"
                        defaultValue={getValues('identityExpireDate')}
                        isEditable={isEditable}
                        register={register}
                        name="identityExpireDate"
                        isRequired
                    />
                    <InputHorizontal
                        label="คำนำหน้า"
                        defaultValue={getValues('title')}
                        isEditable={isEditable}
                        register={register}
                        name="title"
                        isRequired
                    />
                    <InputHorizontal
                        label="ชื่อ (ภาษาไทย)"
                        defaultValue={getValues('firstNameTh')}
                        isEditable={isEditable}
                        register={register}
                        name="firstNameTh"
                        isRequired
                    />
                    <InputHorizontal
                        label="นามสกุล (ภาษาไทย)"
                        defaultValue={getValues('lastNameTh')}
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
                        defaultValue={getValues('firstNameEn')}
                        isEditable={isEditable}
                        register={register}
                        name="firstNameEn"
                        isRequired
                    />
                    <InputHorizontal
                        label="นามสกุล (ภาษาอังกฤษ)"
                        defaultValue={getValues('lastNameEn')}
                        isEditable={isEditable}
                        register={register}
                        name="lastNameEn"
                        isRequired
                    />
                    <InputHorizontal
                        label="เพศ"
                        defaultValue={getValues('gender')}
                        isEditable={isEditable}
                        register={register}
                        name="gender"
                        isRequired
                    />
                    <InputHorizontal
                        label="วัน/เดือน/ปีเกิด (ค.ศ.)"
                        defaultValue={getValues('birthDate')}
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