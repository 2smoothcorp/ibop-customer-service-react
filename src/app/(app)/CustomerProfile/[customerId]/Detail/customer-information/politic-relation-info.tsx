"use client"

import ContentLabel from "@/components/content/content-label";
import ContentLoading from "@/components/content/content-loading";
import InputElement from "@/components/custom/input-element";
import HeaderTitle from "@/components/navbar/header-title";
import { useAppSelector } from "@/libs/redux/hook";
import { CustomerInformationState } from "@/libs/redux/store/customer-information-slice";
import { PoliticRelationInfoModel, PoliticRelationInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { isEmptyStringFormApi, objectToArray } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { RadioButtonGroup } from "react-hook-form-mui";

export default function PoliticRelationInfo({ useForm }: { useForm: UseFormReturn<CustomerInformationState, any, undefined> }) {
    const { setValue, watch, trigger } = useForm;
    const params = useParams()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';

    const { data, isLoading, error } = useQuery({
        queryKey: ['politicRelationInfo', params.customerId],
        queryFn: () => getData(),
    })

    // const normalizationData = (name: string, politicRelationInfo: PoliticRelationInfoModel): any => {
    //     switch (name) {
    //         case 'politicianRelation':
    //             return politicRelationInfo.politicianRelation ?? false;
    //         case 'politicianPosition':
    //             return politicRelationInfo.politicianPosition ?? "";

    //         default:
    //             return '-';
    //     }
    // }

    const confirmPoliticRelationInfo = useAppSelector(state => state.customerInformation.confirm?.politicRelationInfo)

    const setDefaultDataChange = () => {
        setTimeout(() => {
            if (confirmPoliticRelationInfo) {
                try {
                    const oldData = objectToArray({ politicRelationInfo: confirmPoliticRelationInfo });
                    oldData.map((item) => {
                        const [key, value] = item;
                        setValue(key as any, value, {
                            shouldDirty: true
                        })
                    });
                } catch (err) {
                    console.error(err)
                }
            }
        }, 100)
    }

    const setDefaultData = (politicRelationInfo: PoliticRelationInfoModel) => {
        setValue('politicRelationInfo.politicianRelationString', politicRelationInfo.politicianRelation ? 'true' : 'false');
        setValue('politicRelationInfo.politicianRelation', politicRelationInfo.politicianRelation || false);
        setValue('politicRelationInfo.politicianPosition', !isEmptyStringFormApi(politicRelationInfo.politicianPosition) ? politicRelationInfo.politicianPosition || '' : '');
    }

    const getData = async (): Promise<PoliticRelationInfoModel | null> => {
        if (data) {
            setDefaultData(data);
            setDefaultDataChange();
            return data
        }
        const { customerId } = params
        if (customerId) {
            try {
                const request = await fetch(`/api/customer-profile/politic-relation-info/${customerId}`, { method: 'GET' });
                const response: PoliticRelationInfoResponseDataResponse = await request.json();
                // console.log(response)
                if (response.status == 200) {
                    const { data } = response;
                    if (data && data.politicRelationInfo) {
                        setDefaultData(data.politicRelationInfo)
                        setDefaultDataChange()
                        return data.politicRelationInfo
                    }
                    setDefaultDataChange()
                }
            } catch (error) {
                throw error
            }
        }
        return null
    }

    const politicianRelation = watch('politicRelationInfo.politicianRelation')

    useEffect(() => {
        if (trigger && politicianRelation) {
            trigger('politicRelationInfo')
        }
    }, [isLoading, trigger, politicianRelation])

    const politicianRelationString = watch('politicRelationInfo.politicianRelationString')

    useEffect(() => {
        if (politicianRelationString === 'ture') {
            setValue('politicRelationInfo.politicianRelation', true, { shouldDirty: true })
        } else {
            setValue('politicRelationInfo.politicianRelation', false, { shouldDirty: true })
        }
    }, [politicianRelationString, setValue])

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
                            ?
                            <RadioButtonGroup
                                name="politicRelationInfo.politicianRelationString"
                                row
                                options={[
                                    { label: "ใช่", id: 'true', value: 'true' },
                                    { label: "ไม่ใช่", id: 'false', value: 'false' },
                                ]}
                            />
                            : data && data.politicianRelation ? `ใช่` : "ไม่ใช่"
                    }


                </ContentLabel>
                {
                    watch('politicRelationInfo.politicianRelationString') === 'true' && (
                        <InputElement
                            labelWidth={120}
                            label="ระบุตำแหน่ง"
                            isEditable={isEditable}
                            textFieldElementProps={{
                                name: "politicRelationInfo.politicianPosition",
                                rules: {
                                    required: 'กรุณาระบุตำแหน่ง',
                                },
                            }}
                        />
                        // <InputHorizontal
                        //     labelWidth={120}
                        //     label="ระบุตำแหน่ง"
                        //     defaultValue={watch('politicRelationInfo.politicianPosition')}
                        //     textShow={data && data.politicianPosition || "-"}
                        //     isEditable={isEditable}
                        //     onChange={(value) => setValue('politicRelationInfo.politicianPosition', value, { shouldDirty: true })}
                        //     name="politicianPosition"
                        //     isRequired
                        //     type="text"
                        // />
                    )
                }
            </ContentLoading>

        </>
    )
}