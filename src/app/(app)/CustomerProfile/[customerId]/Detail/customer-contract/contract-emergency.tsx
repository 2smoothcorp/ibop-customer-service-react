"use client"

import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataTitlesCustom } from "@/hooks/master-data-titles";
import { CustomerContractState } from "@/libs/redux/store/customer-contract-slice";
import { EmergencyContactInfoModel, EmergencyContactInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { handleEmptyStringFormApi } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { UseFormReturn } from "react-hook-form";

export default function ContractEmergency({ useForm }: { useForm: UseFormReturn<CustomerContractState, any, undefined> }) {
    const { setValue, watch } = useForm
    const params = useParams()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';

    const { data: titles, isLoading: isLoadingTitles } = useMasterDataTitlesCustom();

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

            case 'emergencyContactId':
                return emergencyContactInfo.emergencyContactId;

            default:
                return '-';
        }
    }

    const setDefaultData = (emergencyContactInfo: EmergencyContactInfoModel[]) => {
        for (let i = 0; i < emergencyContactInfo.length; i++) {
            const item = emergencyContactInfo[i]
            setValue(`contractEmergency.${i}.emergencyContactId`, normalizationData('emergencyContactId', item));
            setValue(`contractEmergency.${i}.name`, normalizationData('name', item));
            setValue(`contractEmergency.${i}.mobile`, normalizationData('mobile', item));
            setValue(`contractEmergency.${i}.relationship`, normalizationData('relationship', item));
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
                    isEditable
                        ? [0, 1, 2].map((index) => {
                            return (
                                <div key={index} className="grid grid-cols-3">
                                    <InputHorizontal
                                        label="ชื่อ-นามสกุล"
                                        defaultValue={watch(`contractEmergency.${index}.name`)}
                                        isEditable={isEditable}
                                        // register={register}
                                        name={`name${index}`}
                                        onChange={(value) => setValue(`contractEmergency.${index}.name`, value, { shouldDirty: true })}
                                    />
                                    <InputHorizontal
                                        label="โทรศัพท์มือถือ"
                                        defaultValue={watch(`contractEmergency.${index}.mobile`)}
                                        isEditable={isEditable}
                                        // register={register}
                                        name={`mobile${index}`}
                                        onChange={(value) => setValue(`contractEmergency.${index}.mobile`, value, { shouldDirty: true })}
                                    />
                                    < InputHorizontal
                                        label="ความสัมพันธ์"
                                        placeholder="โปรดเลือกความสัมพันธ์"
                                        defaultValue={watch(`contractEmergency.${index}.relationship`)}
                                        isEditable={isEditable}
                                        name={`relationship${index}`}
                                        type="autocomplete"
                                        list={titles}
                                        isRequired
                                        onChange={(value) => setValue(`contractEmergency.${index}.relationship`, value, { shouldDirty: true })}
                                    />
                                </div>
                            )
                        })
                        : data && data.map((item, index) => {
                            return (
                                <div key={index} className="grid grid-cols-3">
                                    <InputHorizontal
                                        label="ชื่อ-นามสกุล"
                                        defaultValue={item && normalizationData('name', item) || "-"}
                                        isEditable={isEditable}
                                        // register={register}
                                        name={`name${index}`}
                                    />
                                    <InputHorizontal
                                        label="โทรศัพท์มือถือ"
                                        defaultValue={item && normalizationData('mobile', item) || "-"}
                                        isEditable={isEditable}
                                        // register={register}
                                        name={`mobile${index}`}
                                    />
                                    <InputHorizontal
                                        label="ความสัมพันธ์"
                                        defaultValue={item && normalizationData('relationship', item) || "-"}
                                        isEditable={isEditable}
                                        // register={register}
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