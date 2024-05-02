"use client"

import ContentLabel from "@/components/content/content-label";
import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import InputRadio from "@/components/custom/input-radio";
import HeaderTitle from "@/components/navbar/header-title";
import { CusomterInformationState } from "@/libs/redux/store/customer-information-slice";
import { PoliticRelationInfoModel, PoliticRelationInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { isEmptyStringFormApi } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { UseFormReturn } from "react-hook-form";

export default function PoliticRelationInfo({ useForm }: { useForm: UseFormReturn<CusomterInformationState, any, undefined> }) {
    const { setValue, watch } = useForm;
    const params = useParams()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';

    const { data, isLoading, error } = useQuery({
        queryKey: ['politicRelationInfo', params.customerId],
        queryFn: () => getData(),
    })

    const normalizationData = (name: string, politicRelationInfo: PoliticRelationInfoModel): any => {
        switch (name) {
            case 'politicianRelation':
                return politicRelationInfo.politicianRelation ?? false;
            case 'politicianPosition':
                return politicRelationInfo.politicianPosition ?? "";

            default:
                return '-';
        }
    }

    const setDefaultData = (politicRelationInfo: PoliticRelationInfoModel) => {
        setValue('politicRelationInfo.politicianRelationString', politicRelationInfo.politicianRelation ? 'true' : 'false');
        setValue('politicRelationInfo.politicianRelation', politicRelationInfo.politicianRelation || false);
        setValue('politicRelationInfo.politicianPosition', !isEmptyStringFormApi(politicRelationInfo.politicianPosition) ? politicRelationInfo.politicianPosition || '' : '');
    }

    const getData = async () => {
        if (data) {
            setDefaultData(data)
        }
        const { customerId } = params
        if (customerId) {
            try {
                const request = await fetch(`/api/customer-profile/politic-relation-info/${customerId}`, { method: 'GET' });
                const response: PoliticRelationInfoResponseDataResponse = await request.json();
                if (response.status == 200) {
                    const { data } = response;
                    if (data && data.politicRelationInfo) {
                        setDefaultData(data.politicRelationInfo)
                        return data.politicRelationInfo
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
                title="สถานภาพทางการเมือง"
            />
            <ContentLoading
                isLoading={isLoading}
                error={error && error.message || undefined}
                hight={120}
            >
                <ContentLabel
                    label="ท่านเป็นผู้มีสถานภาพทางการเมืองหรือเป็นสมาชิกในครอบครัว หรือเป็นผู้ใกล้ชิดกับบุคคลผู้มีสถานภาพทางการเมืองหรือไม่"
                >
                    {
                        isEditable
                            ? <InputRadio
                                name={"politicianRelation"}
                                defaultValue={watch('politicRelationInfo.politicianRelationString') || 'false'}
                                list={[
                                    { label: "ใช่", value: 'true' },
                                    { label: "ไม่ใช่", value: 'false' },
                                ]}
                                onChange={(value) => {
                                    setValue('politicRelationInfo.politicianRelationString', value);
                                    setValue('politicRelationInfo.politicianRelation', value == 'true')
                                }}
                            />
                            : data && data.politicianRelation ? `ใช่` : "ไม่ใช่"
                    }


                </ContentLabel>
                {
                    watch('politicRelationInfo.politicianRelation') && (
                        <InputHorizontal
                            labelWidth={120}
                            label="ระบุตำแหน่ง"
                            defaultValue={watch('politicRelationInfo.politicianPosition')}
                            textShow={data && data.politicianPosition || "-"}
                            isEditable={isEditable}
                            onChange={(value) => setValue('politicRelationInfo.politicianPosition', value)}
                            name="politicianPosition"
                            isRequired
                            type="text"
                        />
                    )
                }
            </ContentLoading>

        </>
    )
}