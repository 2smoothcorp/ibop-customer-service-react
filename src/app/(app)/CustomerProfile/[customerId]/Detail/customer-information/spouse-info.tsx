"use client"

import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataReferenceCustom } from "@/hooks/master-data-reference";
import { useMasterDataTitlesCustom } from "@/hooks/master-data-titles";
import { SpouseInfoModel, SpouseInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";

export default function SpouseInfo({
    isEditable
}: {
    isEditable: boolean
}) {
    const params = useParams()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
        getValues,
    } = useForm<SubmitInput>()

    const { data: titles, isLoading: isLoadingTitles } = useMasterDataTitlesCustom();
    const { data: reference, isLoading: isLoadingReference } = useMasterDataReferenceCustom();


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
        setValue('familyStatus', isEmptyStringFormApi(spouseInfo.familyStatus) ? spouseInfo.familyStatus || '' : '');
        setValue('spouseReferenceType', isEmptyStringFormApi(spouseInfo.spouseReferenceType) ? spouseInfo.spouseReferenceType || '' : '');
        setValue('spouseIdentityId', isEmptyStringFormApi(spouseInfo.spouseIdentityId) ? spouseInfo.spouseIdentityId || '' : '');
        setValue('spouseTitleCode', isEmptyStringFormApi(spouseInfo.spouseTitleCode) ? spouseInfo.spouseTitleCode || '' : '');
        setValue('spouseFirstName', isEmptyStringFormApi(spouseInfo.spouseFirstName) ? spouseInfo.spouseFirstName || '' : '');
        setValue('spouseLastName', isEmptyStringFormApi(spouseInfo.spouseLastName) ? spouseInfo.spouseLastName || '' : '');
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
                isLoading={isLoading || isLoadingTitles || isLoadingReference}
                error={error && error.message || undefined}
                hight={92}
            >
                <div className="grid grid-cols-3">
                    <InputHorizontal
                        label="สถานภาพ"
                        defaultValue={data && normalizationData('familyStatus', data) || "-"}
                        isEditable={isEditable}
                        // register={register}
                        onChange={(value) => setValue('familyStatus', value)}
                        name="familyStatus"
                        isRequired
                        type="radio"
                        list={[
                            { value: "โสด", label: "โสด" },
                            { value: "สมรส", label: "สมรส" },
                        ]}
                    />
                    {
                        watch('familyStatus') === 'สมรส' && (
                            <>
                                <InputHorizontal
                                    label="ประเภทหลักฐานลูกค้า"
                                    defaultValue={data && (isEmptyStringFormApi(data.spouseReferenceType) ? data.spouseReferenceType : undefined) || undefined}
                                    textShow={data && normalizationData('spouseReferenceType', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="spouseReferenceType"
                                    isRequired
                                    type="autocomplete"
                                    list={reference}
                                    onChange={(value) => setValue('spouseTitleCode', value)}
                                    placeholder="โปรดเลือกประเภทหลักฐานลูกค้า"
                                />
                                <InputHorizontal
                                    label="เลขที่บัตร"
                                    defaultValue={data && (isEmptyStringFormApi(data.spouseIdentityId) ? data.spouseIdentityId : undefined) || undefined}
                                    textShow={data && normalizationData('spouseIdentityId', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="spouseIdentityId"
                                    isRequired
                                />
                                <InputHorizontal
                                    label="คำนำหน้า"
                                    defaultValue={data && (isEmptyStringFormApi(data.spouseTitleCode) ? data.spouseTitleCode : undefined) || undefined}
                                    textShow={data && normalizationData('spouseTitle', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="spouseTitleCode"
                                    isRequired
                                    type="autocomplete"
                                    list={titles}
                                    onChange={(value) => setValue('spouseTitleCode', value)}
                                    placeholder="โปรดเลือกคำนำหน้า"
                                />
                                <InputHorizontal
                                    label="ชื่อคู่สมรส"
                                    defaultValue={data && (isEmptyStringFormApi(data.spouseFirstName) ? data.spouseFirstName : undefined) || undefined}
                                    textShow={data && normalizationData('spouseFirstName', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="spouseFirstName"
                                    isRequired
                                />
                                <InputHorizontal
                                    label="นามสกุลคู่สมรส"
                                    defaultValue={data && (isEmptyStringFormApi(data.spouseLastName) ? data.spouseLastName : undefined) || undefined}
                                    textShow={data && normalizationData('spouseLastName', data) || "-"}
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
    spouseTitleCode: string;
    spouseFirstName: string;
    spouseLastName: string;
}