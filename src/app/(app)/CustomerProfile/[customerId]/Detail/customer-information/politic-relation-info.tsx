"use client"

import ContentLabel from "@/components/content/content-label";
import ContentLoading from "@/components/content/content-loading";
import HeaderTitle from "@/components/navbar/header-title";
import { PoliticRelationInfoModel, PoliticRelationInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function PoliticRelationInfo() {
    const params = useParams()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
    } = useForm<SubmitInput>()
    const [isEditable, setIsEditable] = React.useState<boolean>(false);


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
        setValue('politicianRelation', normalizationData('personType', politicRelationInfo));
        setValue('politicianPosition', normalizationData('referenceTypeDesc', politicRelationInfo));
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
                    {data && data.politicianRelation ? `ใช่ - ${data && data.politicianPosition}` : "ไม่ใช่"}
                </ContentLabel>
            </ContentLoading>

        </>
    )
}

interface SubmitInput {
    politicianRelation: boolean;
    politicianPosition: string;
}