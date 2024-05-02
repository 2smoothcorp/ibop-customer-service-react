"use client"

import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataReferenceCustom } from "@/hooks/master-data-reference";
import { useMasterDataTitlesCustom } from "@/hooks/master-data-titles";
import { CusomterInformationState } from "@/libs/redux/store/customer-information-slice";
import { SpouseInfoModel, SpouseInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { UseFormReturn } from "react-hook-form";

export default function SpouseInfo({ useForm }: { useForm: UseFormReturn<CusomterInformationState, any, undefined> }) {
    const { setValue, watch } = useForm;
    const params = useParams()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';

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
        setValue('spouseInfo.familyStatus', isEmptyStringFormApi(spouseInfo.familyStatus) ? spouseInfo.familyStatus || '' : '');
        setValue('spouseInfo.spouseReferenceType', isEmptyStringFormApi(spouseInfo.spouseReferenceType) ? spouseInfo.spouseReferenceType || '' : '');
        setValue('spouseInfo.spouseIdentityId', isEmptyStringFormApi(spouseInfo.spouseIdentityId) ? spouseInfo.spouseIdentityId || '' : '');
        setValue('spouseInfo.spouseTitleCode', isEmptyStringFormApi(spouseInfo.spouseTitleCode) ? spouseInfo.spouseTitleCode || '' : '');
        setValue('spouseInfo.spouseFirstName', isEmptyStringFormApi(spouseInfo.spouseFirstName) ? spouseInfo.spouseFirstName || '' : '');
        setValue('spouseInfo.spouseLastName', isEmptyStringFormApi(spouseInfo.spouseLastName) ? spouseInfo.spouseLastName || '' : '');
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
                        onChange={(value) => setValue('spouseInfo.familyStatus', value)}
                        name="familyStatus"
                        isRequired
                        type="radio"
                        list={[
                            { value: "โสด", label: "โสด" },
                            { value: "สมรส", label: "สมรส" },
                        ]}
                    />
                    {
                        watch('spouseInfo.familyStatus') === 'สมรส' && (
                            <>
                                <InputHorizontal
                                    label="ประเภทหลักฐานลูกค้า"
                                    defaultValue={data && (isEmptyStringFormApi(data.spouseReferenceType) ? data.spouseReferenceType : undefined) || undefined}
                                    textShow={data && normalizationData('spouseReferenceType', data) || "-"}
                                    isEditable={isEditable}
                                    // register={register}
                                    name="spouseReferenceType"
                                    isRequired
                                    type="autocomplete"
                                    list={reference}
                                    onChange={(value) => setValue('spouseInfo.spouseTitleCode', value)}
                                    placeholder="โปรดเลือกประเภทหลักฐานลูกค้า"
                                />
                                <InputHorizontal
                                    label="เลขที่บัตร"
                                    defaultValue={data && (isEmptyStringFormApi(data.spouseIdentityId) ? data.spouseIdentityId : undefined) || undefined}
                                    textShow={data && normalizationData('spouseIdentityId', data) || "-"}
                                    isEditable={isEditable}
                                    // register={register}
                                    name="spouseIdentityId"
                                    isRequired
                                />
                                <InputHorizontal
                                    label="คำนำหน้า"
                                    defaultValue={data && (isEmptyStringFormApi(data.spouseTitleCode) ? data.spouseTitleCode : undefined) || undefined}
                                    textShow={data && normalizationData('spouseTitle', data) || "-"}
                                    isEditable={isEditable}
                                    // register={register}
                                    name="spouseTitleCode"
                                    isRequired
                                    type="autocomplete"
                                    list={titles}
                                    onChange={(value) => setValue('spouseInfo.spouseTitleCode', value)}
                                    placeholder="โปรดเลือกคำนำหน้า"
                                />
                                <InputHorizontal
                                    label="ชื่อคู่สมรส"
                                    defaultValue={data && (isEmptyStringFormApi(data.spouseFirstName) ? data.spouseFirstName : undefined) || undefined}
                                    textShow={data && normalizationData('spouseFirstName', data) || "-"}
                                    isEditable={isEditable}
                                    // register={register}
                                    name="spouseFirstName"
                                    isRequired
                                    onChange={(value) => setValue('spouseInfo.spouseFirstName', value)}
                                />
                                <InputHorizontal
                                    label="นามสกุลคู่สมรส"
                                    defaultValue={data && (isEmptyStringFormApi(data.spouseLastName) ? data.spouseLastName : undefined) || undefined}
                                    textShow={data && normalizationData('spouseLastName', data) || "-"}
                                    isEditable={isEditable}
                                    // register={register}
                                    name="spouseLastName"
                                    isRequired
                                    onChange={(value) => setValue('spouseInfo.spouseLastName', value)}
                                />
                            </>
                        )
                    }

                </div>

            </ContentLoading>
        </>
    )
}