"use client"

import ContentLoading from "@/components/content/content-loading";
import InputElement, { InputElementProps } from "@/components/custom/input-element";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataRelationCustom } from "@/hooks/master-data-relation";
import { useAppSelector } from "@/libs/redux/hook";
import { CustomerContractState } from "@/libs/redux/store/customer-contract-slice";
import { EmergencyContactInfoModel, EmergencyContactInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { handleEmptyStringFormApi, objectToArray } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { UseFormReturn } from "react-hook-form";

export default function ContractEmergency({ useForm }: { useForm: UseFormReturn<CustomerContractState, any, undefined> }) {
    const { setValue, watch } = useForm
    const params = useParams()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';

    const { data: relation, isLoading: isLoadingRelation } = useMasterDataRelationCustom();

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

            case 'relationshipOther':
                return emergencyContactInfo.relationshipOther;

            case 'relationshipCode':
                return handleEmptyStringFormApi(emergencyContactInfo.relationshipCode);

            default:
                return '-';
        }
    }

    const confirmEmergencyContactInfo = useAppSelector(state => state.customerContract.confirm?.emergencyContactInfo)

    const setDefaultDataChange = () => {
        setTimeout(() => {
            if (confirmEmergencyContactInfo) {
                try {
                    const oldData = objectToArray({ emergencyContactInfo: confirmEmergencyContactInfo });
                    // console.log('oldData', oldData)
                    oldData.map((item) => {
                        const [key, value] = item;
                        setValue(key as any, value, {
                            shouldDirty: true,
                        })
                    });
                } catch (err) {
                    console.error(err)
                }
            }
        }, 100)
    }

    const setDefaultData = (emergencyContactInfo: EmergencyContactInfoModel[]) => {
        for (let i = 0; i < emergencyContactInfo.length; i++) {
            const item = emergencyContactInfo[i]
            setValue(`emergencyContactInfo.${i}.emergencyContactId`, normalizationData('emergencyContactId', item));
            setValue(`emergencyContactInfo.${i}.name`, normalizationData('name', item));
            setValue(`emergencyContactInfo.${i}.mobile`, normalizationData('mobile', item));
            setValue(`emergencyContactInfo.${i}.relationship`, normalizationData('relationship', item));
            setValue(`emergencyContactInfo.${i}.relationshipCode`, normalizationData('relationshipCode', item));
            setValue(`emergencyContactInfo.${i}.relationshipOther`, normalizationData('relationshipOther', item));
        }
    }

    const getData = async (): Promise<EmergencyContactInfoModel[]> => {
        if (data && data.length > 0) {
            setDefaultData(data)
            setDefaultDataChange()
            return data
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
                        setDefaultDataChange()
                        return data.emergencyContactInfo
                    }
                    setDefaultDataChange()
                }
            } catch (error) {
                console.error('error', error)
                throw error
            }
        }
        return []
    }

    const isRequired1 = watch(`emergencyContactInfo.0.name`) !== '' || watch(`emergencyContactInfo.0.mobile`) !== '' || watch(`emergencyContactInfo.0.relationshipCode`) !== ''
    const isRequired2 = watch(`emergencyContactInfo.1.name`) !== '' || watch(`emergencyContactInfo.1.mobile`) !== '' || watch(`emergencyContactInfo.1.relationshipCode`) !== ''
    const isRequired3 = watch(`emergencyContactInfo.2.name`) !== '' || watch(`emergencyContactInfo.2.mobile`) !== '' || watch(`emergencyContactInfo.2.relationshipCode`) !== ''

    const inputDate: InputElementProps[] = [
        {
            label: "ชื่อ-นามสกุล",
            isEditable: isEditable,
            textFieldElementProps: {
                name: "emergencyContactInfo.0.name",
                rules: {
                    required: isRequired1 ? 'โปรดกรอกเลขที่' : false,
                },
            },
        },
        {
            label: "โทรศัพท์มือถือ",
            isEditable: isEditable,
            textFieldElementProps: {
                name: "emergencyContactInfo.0.mobile",
                rules: {
                    required: isRequired1 ? 'โปรดกรอกเลขที่' : false,
                },
            },
        },
        {
            type: 'autocomplete',
            label: "ความสัมพันธ์",
            isEditable: isEditable,
            autocompleteElementProps: {
                name: "emergencyContactInfo.0.relationshipCode",
                rules: {
                    required: isRequired1 ? 'โปรดเลือกความสัมพันธ์' : false,
                },
                options: relation || [],
            },
            rightInputComponent: watch(`emergencyContactInfo.0.relationshipCode`) === '4' && (
                <div className="px-2">
                    <InputElement
                        label=""
                        isInputOnly
                        isEditable={isEditable}
                        textFieldElementProps={{
                            sx: { height: 40, width: 150 },
                            name: "emergencyContactInfo.0.relationshipOther",
                            rules: {
                                required: 'โปรดกรอกความสัมพันธ์',
                            }
                        }}
                    />
                </div>
            )
        },
        {
            label: "ชื่อ-นามสกุล",
            isEditable: isEditable,
            textFieldElementProps: {
                name: "emergencyContactInfo.1.name",
                rules: {
                    required: isRequired2 ? 'โปรดกรอกเลขที่' : false,
                },
            },
        },
        {
            label: "โทรศัพท์มือถือ",
            isEditable: isEditable,
            textFieldElementProps: {
                name: "emergencyContactInfo.1.mobile",
                rules: {
                    required: isRequired2 ? 'โปรดกรอกเลขที่' : false,
                },
            },
        },
        {
            type: 'autocomplete',
            label: "ความสัมพันธ์",
            isEditable: isEditable,
            autocompleteElementProps: {
                name: "emergencyContactInfo.1.relationshipCode",
                rules: {
                    required: isRequired2 ? 'โปรดเลือกความสัมพันธ์' : false,
                },
                options: relation || [],
            },
            rightInputComponent: watch(`emergencyContactInfo.1.relationshipCode`) === '4' && (
                <div className="px-2">
                    <InputElement
                        label=""
                        isInputOnly
                        isEditable={isEditable}
                        textFieldElementProps={{
                            sx: { height: 40, width: 150 },
                            name: "emergencyContactInfo.1.relationshipOther",
                            rules: {
                                required: 'โปรดกรอกความสัมพันธ์',
                            }
                        }}
                    />
                </div>
            )
        },
        {
            label: "ชื่อ-นามสกุล",
            isEditable: isEditable,
            textFieldElementProps: {
                name: "emergencyContactInfo.2.name",
                rules: {
                    required: isRequired3 ? 'โปรดกรอกเลขที่' : false,
                },
            },
        },
        {
            label: "โทรศัพท์มือถือ",
            isEditable: isEditable,
            textFieldElementProps: {
                name: "emergencyContactInfo.2.mobile",
            },
        },
        {
            type: 'autocomplete',
            label: "ความสัมพันธ์",
            isEditable: isEditable,
            autocompleteElementProps: {
                name: "emergencyContactInfo.2.relationshipCode",
                rules: {
                    required: isRequired3 ? 'โปรดเลือกความสัมพันธ์' : false,
                },
                options: relation || [],
            },
            rightInputComponent: watch(`emergencyContactInfo.2.relationshipCode`) === '4' && (
                <div className="px-2">
                    <InputElement
                        label=""
                        isInputOnly
                        isEditable={isEditable}
                        textFieldElementProps={{
                            sx: { height: 40, width: 150 },
                            name: "emergencyContactInfo.2.relationshipOther",
                            rules: {
                                required: 'โปรดกรอกความสัมพันธ์',
                            }
                        }}
                    />
                </div>
            )
        },
    ]

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
                <div className="grid grid-cols-3 gap-1">
                    {
                        inputDate.map((input, index) => {
                            return (
                                <InputElement
                                    key={index}
                                    {...input}
                                />
                            )
                        })
                    }
                </div>
                {/* {
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
                                        defaultValue={watch(`contractEmergency.${index}.relationshipCode`)}
                                        isEditable={isEditable}
                                        name={`relationship${index}`}
                                        type="autocomplete"
                                        list={relation}
                                        isRequired
                                        onChange={(item) => {
                                            setValue(`contractEmergency.${index}.relationshipCode`, item, { shouldDirty: true })
                                        }}
                                        rightInputComponent={
                                            watch(`contractEmergency.${index}.relationshipCode`) === '4' && (
                                                <InputText
                                                    className="ml-2"
                                                    name={`contractEmergency.${index}.relationshipOther`}
                                                    defaultValue={watch(`contractEmergency.${index}.relationshipOther`)}
                                                />
                                            )
                                        }
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
                } */}

            </ContentLoading>

        </>
    )
}