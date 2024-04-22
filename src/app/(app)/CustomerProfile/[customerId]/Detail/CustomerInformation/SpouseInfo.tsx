"use client"

import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import { useParams } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { getSpouseInfo } from "./spouseInfo.action";

export default function SpouseInfo() {
    const params = useParams()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
        getValues,
    } = useForm<SubmitInput>()
    const [isReady, setIsReady] = React.useState<boolean>(false)
    const [isEditable, setIsEditable] = React.useState<boolean>(false);

    const [getSpouseInfoState, getSpouseInfoAction] = useFormState(getSpouseInfo, {
        data: undefined,
        success: false,
        error: undefined
    })

    React.useEffect(() => {
        if (!getSpouseInfoState.success && getSpouseInfoState?.error) {
            setIsReady(true);
            // alert(getSpouseInfoState?.error)
        }
        if (getSpouseInfoState.success) {
            const { data } = getSpouseInfoState
            if (data?.data && data?.data?.spouseInfo) {
                const { data: { spouseInfo } } = data
                // console.log(spouseInfo)
                setValue('familyStatus', handleEmptyStringFormApi(spouseInfo.familyStatus));
                setValue('spouseReferenceType', handleEmptyStringFormApi(spouseInfo.spouseReferenceType));
                setValue('spouseIdentityId', handleEmptyStringFormApi(spouseInfo.spouseIdentityId));
                setValue('spouseTitle', !isEmptyStringFormApi(spouseInfo.spouseTitleCode) ? `${spouseInfo.spouseTitleCode} - ${spouseInfo.spouseTitleName}` : '-');
                setValue('spouseFirstName', handleEmptyStringFormApi(spouseInfo.spouseFirstName));
                setValue('spouseLastName', handleEmptyStringFormApi(spouseInfo.spouseLastName));
            }
            setIsReady(true);
        }

    }, [getSpouseInfoState])

    React.useEffect(() => {
        const { customerId } = params
        if (customerId) {
            const formData = new FormData();
            formData.append('corporateId', customerId as string)
            getSpouseInfoAction(formData)
        }
    }, []);

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="สถานภาพการสมรส"
            />
            <ContentLoading
                isLoading={!getSpouseInfoState.data && getSpouseInfoState.error === undefined && !isReady}
                error={getSpouseInfoState.error || null}
                hight={92}
            >
                <div className="grid grid-cols-3">
                    <InputHorizontal
                        label="สถานภาพ"
                        defaultValue={getValues('familyStatus')}
                        isEditable={isEditable}
                        register={register}
                        name="familyStatus"
                        isRequired
                    />
                    <InputHorizontal
                        label="ประเภทหลักฐานลูกค้า"
                        defaultValue={getValues('spouseReferenceType')}
                        isEditable={isEditable}
                        register={register}
                        name="spouseReferenceType"
                        isRequired
                    />
                    <InputHorizontal
                        label="เลขที่บัตร"
                        defaultValue={getValues('spouseIdentityId')}
                        isEditable={isEditable}
                        register={register}
                        name="spouseIdentityId"
                        isRequired
                    />
                    <InputHorizontal
                        label="คำนำหน้า"
                        defaultValue={getValues('spouseTitle')}
                        isEditable={isEditable}
                        register={register}
                        name="spouseTitle"
                        isRequired
                    />
                    <InputHorizontal
                        label="ชื่อคู่สมรส"
                        defaultValue={getValues('spouseFirstName')}
                        isEditable={isEditable}
                        register={register}
                        name="spouseFirstName"
                        isRequired
                    />
                    <InputHorizontal
                        label="นามสกุลคู่สมรส"
                        defaultValue={getValues('spouseLastName')}
                        isEditable={isEditable}
                        register={register}
                        name="spouseLastName"
                        isRequired
                    />
                </div>

            </ContentLoading>
        </>
    )
}

interface SubmitInput {
    familyStatus: string;
    spouseReferenceType: string;
    spouseIdentityId: string;
    spouseTitle: string;
    spouseFirstName: string;
    spouseLastName: string;
}