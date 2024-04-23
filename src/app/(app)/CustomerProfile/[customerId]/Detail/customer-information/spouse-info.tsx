"use client"

import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { SpouseInfoModel, SpouseInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

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
    const [isEditable, setIsEditable] = React.useState<boolean>(false);


    const { data, isLoading, error } = useQuery({
        queryKey: ['politicRelationInfo', params.customerId],
        queryFn: () => getData(),
    })

    const normalizationData = (name: string, spouseInfo: SpouseInfoModel): any => {
        switch (name) {
            case 'familyStatus':
                return handleEmptyStringFormApi(spouseInfo.familyStatus);
            case 'spouseReferenceType':
                return handleEmptyStringFormApi(spouseInfo.spouseReferenceType);
            case 'spouseIdentityId':
                return handleEmptyStringFormApi(spouseInfo.spouseIdentityId);
            case 'spouseTitle':
                return !isEmptyStringFormApi(spouseInfo.spouseTitleCode) ? `${spouseInfo.spouseTitleCode} - ${spouseInfo.spouseTitleName}` : '-';
            case 'spouseFirstName':
                return handleEmptyStringFormApi(spouseInfo.spouseFirstName);
            case 'spouseLastName':
                return handleEmptyStringFormApi(spouseInfo.spouseLastName);
            default:
                return '-';
        }
    }

    const setDefaultData = (spouseInfo: SpouseInfoModel) => {
        setValue('familyStatus', normalizationData('familyStatus', spouseInfo));
        setValue('spouseReferenceType', normalizationData('spouseReferenceType', spouseInfo));
        setValue('spouseIdentityId', normalizationData('spouseIdentityId', spouseInfo));
        setValue('spouseTitle', normalizationData('spouseTitle', spouseInfo));
        setValue('spouseFirstName', normalizationData('spouseFirstName', spouseInfo));
        setValue('spouseLastName', normalizationData('spouseLastName', spouseInfo));
    }

    const getData = async () => {
        if (data) {
            setDefaultData(data)
        }
        const { customerId } = params
        if (customerId) {
            try {
                const request = await fetch(`/api/customer-profile/spouse-info/${customerId}`, { method: 'GET' });
                const response: SpouseInfoResponseDataResponse = await request.json();
                if (response.status == 200) {
                    const { data } = response;
                    if (data && data.spouseInfo) {
                        setDefaultData(data.spouseInfo)
                        return data.spouseInfo
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
                title="สถานภาพการสมรส"
            />
            <ContentLoading
                isLoading={isLoading}
                error={error && error.message || undefined}
                hight={92}
            >
                <div className="grid grid-cols-3">
                    <InputHorizontal
                        label="สถานภาพ"
                        defaultValue={data && normalizationData('familyStatus', data) || "-"}
                        isEditable={isEditable}
                        register={register}
                        name="familyStatus"
                        isRequired
                    />
                    {
                        watch('familyStatus') === 'สมรส' && (
                            <>
                                <InputHorizontal
                                    label="ประเภทหลักฐานลูกค้า"
                                    defaultValue={data && normalizationData('spouseReferenceType', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="spouseReferenceType"
                                    isRequired
                                />
                                <InputHorizontal
                                    label="เลขที่บัตร"
                                    defaultValue={data && normalizationData('spouseIdentityId', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="spouseIdentityId"
                                    isRequired
                                />
                                <InputHorizontal
                                    label="คำนำหน้า"
                                    defaultValue={data && normalizationData('spouseTitle', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="spouseTitle"
                                    isRequired
                                />
                                <InputHorizontal
                                    label="ชื่อคู่สมรส"
                                    defaultValue={data && normalizationData('spouseFirstName', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="spouseFirstName"
                                    isRequired
                                />
                                <InputHorizontal
                                    label="นามสกุลคู่สมรส"
                                    defaultValue={data && normalizationData('spouseLastName', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="spouseLastName"
                                    isRequired
                                />
                            </>
                        )
                    }

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