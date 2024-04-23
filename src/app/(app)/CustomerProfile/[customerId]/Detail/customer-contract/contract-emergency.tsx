"use client"

import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { EmergencyContactInfoModel, EmergencyContactInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { handleEmptyStringFormApi } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContractEmergency() {
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
        queryKey: ['contractEmergency', params.customerId],
        queryFn: () => getData(),
    })

    const normalizationData = (name: string, emergencyContactInfo: EmergencyContactInfoModel): any => {
        switch (name) {
            case 'name':
                return handleEmptyStringFormApi(emergencyContactInfo.name);

            case 'mobile':
                return handleEmptyStringFormApi(emergencyContactInfo.mobile);

            case 'relationship':
                return handleEmptyStringFormApi(emergencyContactInfo.relationship);

            default:
                return '-';
        }
    }

    const setDefaultData = (emergencyContactInfo: EmergencyContactInfoModel[]) => {
        for (let i = 0; i < emergencyContactInfo.length; i++) {
            const item = emergencyContactInfo[i]
            if (i === 0) {
                setValue('name1', normalizationData('name', item));
                setValue('mobile1', normalizationData('mobile', item));
                setValue('relationship1', normalizationData('relationship', item));
            }
            if (i === 1) {
                setValue('name2', normalizationData('name', item));
                setValue('mobile2', normalizationData('mobile', item));
                setValue('relationship2', normalizationData('relationship', item));
            }
            if (i === 2) {
                setValue('name3', normalizationData('name', item));
                setValue('mobile3', normalizationData('mobile', item));
                setValue('relationship3', normalizationData('relationship', item));
            }
        }
    }

    const getData = async () => {
        if (data) {
            setDefaultData(data)
        }
        const { customerId } = params
        if (customerId) {
            try {
                const request = await fetch(`/api/customer-profile/contract-emergency-info/${customerId}`, { method: 'GET' });
                const response: EmergencyContactInfoResponseDataResponse = await request.json();
                if (response.status == 200) {
                    const { data } = response;

                    if (data && data.emergencyContactInfo) {
                        // console.log(data.emergencyContactInfo)
                        setDefaultData(data.emergencyContactInfo)
                        return data.emergencyContactInfo
                    }
                }
            } catch (error) {
                console.error('error', error)
                throw error
            }
        }
        return null
    }

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="บุคคลที่สามารถติดต่อได้กรณีฉุกเฉิน"
            />
            <ContentLoading
                isLoading={isLoading}
                error={error && error.message || undefined}
                hight={184}
            >

                {
                    data && data.map((item, index) => {
                        return (
                            <div key={index} className="grid grid-cols-3">
                                <InputHorizontal
                                    label="ชื่อ-นามสกุล"
                                    defaultValue={item && normalizationData('name', item) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name={`name${index}`}
                                />
                                <InputHorizontal
                                    label="โทรศัพท์มือถือ"
                                    defaultValue={item && normalizationData('mobile', item) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name={`mobile${index}`}
                                />
                                <InputHorizontal
                                    label="โทรศัพท์มือถือ"
                                    defaultValue={item && normalizationData('relationship', item) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name={`relationship${index}`}
                                />
                            </div>
                        )
                    })
                }

            </ContentLoading>

        </>
    )
}

interface SubmitInput {
    docReceiveChannel: string;
    addressNo: string;
    moo: string;
    buildingOrVillage: string;
    roomNo: string;
    floor: string;
    soi: string;
    street: string;
    countryCode: string;
    country: string;
    zipCode: string;
    province: string;
    district: string;
    subDistrict: string;
    mobileNo: string;
    officeNo: string;
    email: string;
    name1: string;
    mobile1: string;
    relationship1: string;
    name2: string;
    mobile2: string;
    relationship2: string;
    name3: string;
    mobile3: string;
    relationship3: string;
}