"use client"

import ContentLoading from "@/components/content/content-loading";
import HeaderTitle from "@/components/navbar/header-title";
import { useParams } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { getPoliticRelationInfo } from "./politicRelationInfo.action";

export default function PoliticRelationInfo() {
    const params = useParams()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
    } = useForm<SubmitInput>()
    const politicianRelation = watch('politicianRelation');
    const politicianPosition = watch('politicianPosition');
    const [isReady, setIsReady] = React.useState<boolean>(false);
    const [isEditable, setIsEditable] = React.useState<boolean>(false);

    const [getPoliticRelationInfoState, getPoliticRelationInfoAction] = useFormState(getPoliticRelationInfo, {
        data: undefined,
        success: false,
        error: undefined
    })

    React.useEffect(() => {
        if (!getPoliticRelationInfoState.success && getPoliticRelationInfoState?.error) {
            setIsReady(true);
        }
        if (getPoliticRelationInfoState.success) {
            const { data } = getPoliticRelationInfoState
            if (data?.data && data?.data?.politicRelationInfo) {
                const { data: { politicRelationInfo } } = data
                // console.log(politicRelationInfo);
                setValue('politicianRelation', politicRelationInfo.politicianRelation ?? false);
                setValue('politicianPosition', politicRelationInfo.politicianPosition ?? "");
            }
            setIsReady(true);
        }
    }, [getPoliticRelationInfoState])

    React.useEffect(() => {
        const { customerId } = params
        if (customerId) {
            const formData = new FormData();
            formData.append('corporateId', customerId as string)
            getPoliticRelationInfoAction(formData)
        }
    }, []);

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="สถานภาพทางการเมือง"
            />
            <ContentLoading
                isLoading={!getPoliticRelationInfoState.data && getPoliticRelationInfoState.error === undefined && !isReady}
                error={getPoliticRelationInfoState.error || null}
                hight={120}
            >
                <div className="flex flex-col">
                    <span className="mx-4 font-bold">ท่านเป็นผู้มีสถานภาพทางการเมืองหรือเป็นสมาชิกในครอบครัว หรือเป็นผู้ใกล้ชิดกับบุคคลผู้มีสถานภาพทางการเมืองหรือไม่ * </span>
                    <span className="mx-4">{politicianRelation ? `ใช่ - ${politicianPosition}` : "ไม่ใช่"}</span>
                </div>
            </ContentLoading>

        </>
    )
}

interface SubmitInput {
    politicianRelation: boolean;
    politicianPosition: string;
}