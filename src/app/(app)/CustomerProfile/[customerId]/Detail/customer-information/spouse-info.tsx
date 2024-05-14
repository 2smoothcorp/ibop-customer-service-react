"use client"

import ContentLoading from "@/components/content/content-loading";
import InputElement, { InputElementProps } from "@/components/custom/input-element";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataReferenceCustom } from "@/hooks/master-data-reference";
import { useMasterDataTitlesCustom } from "@/hooks/master-data-titles";
import { useAppSelector } from "@/libs/redux/hook";
import { CustomerInformationState } from "@/libs/redux/store/customer-information-slice";
import { SpouseInfoModel, SpouseInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { isEmptyStringFormApi, objectToArray } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

export default function SpouseInfo({ useForm }: { useForm: UseFormReturn<CustomerInformationState, any, undefined> }) {
    const { setValue, watch, trigger } = useForm;
    const params = useParams()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';

    const { data: titles, isLoading: isLoadingTitles } = useMasterDataTitlesCustom();
    const { data: reference, isLoading: isLoadingReference } = useMasterDataReferenceCustom();


    const { data, isLoading, error } = useQuery({
        queryKey: ['spouseInfo', params.customerId],
        queryFn: () => getData(),
    })

    // const normalizationData = (name: string, spouseInfo: SpouseInfoModel): any => {
    //     switch (name) {
    //         case 'familyStatus':
    //             return handleEmptyStringFormApi(spouseInfo.familyStatus);
    //         case 'spouseReferenceType':
    //             return handleEmptyStringFormApi(spouseInfo.spouseReferenceType);
    //         case 'spouseIdentityId':
    //             return handleEmptyStringFormApi(spouseInfo.spouseIdentityId);
    //         case 'spouseTitle':
    //             return !isEmptyStringFormApi(spouseInfo.spouseTitleCode) ? `${spouseInfo.spouseTitleCode} - ${spouseInfo.spouseTitleName}` : '-';
    //         case 'spouseFirstName':
    //             return handleEmptyStringFormApi(spouseInfo.spouseFirstName);
    //         case 'spouseLastName':
    //             return handleEmptyStringFormApi(spouseInfo.spouseLastName);
    //         default:
    //             return '-';
    //     }
    // }

    const confirmSpouseInfo = useAppSelector(state => state.customerInformation.confirm?.spouseInfo)

    const setDefaultDataChange = () => {
        setTimeout(() => {
            if (confirmSpouseInfo) {
                try {
                    const oldData = objectToArray({ spouseInfo: confirmSpouseInfo });
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

    const setDefaultData = (spouseInfo: SpouseInfoModel | null) => {
        if (spouseInfo) {
            if (spouseInfo.familyStatus !== 'โสด' && spouseInfo.familyStatus !== 'สมรส') {
                setValue('spouseInfo.familyStatus', 'โสด', { shouldDirty: true });
            } else {
                setValue('spouseInfo.familyStatus', !isEmptyStringFormApi(spouseInfo.familyStatus) ? spouseInfo.familyStatus || '' : '');
            }
            setValue('spouseInfo.spouseReferenceType', !isEmptyStringFormApi(spouseInfo.spouseReferenceType) ? spouseInfo.spouseReferenceType || '' : '');
            setValue('spouseInfo.spouseIdentityId', !isEmptyStringFormApi(spouseInfo.spouseIdentityId) ? spouseInfo.spouseIdentityId || '' : '');
            setValue('spouseInfo.spouseTitleCode', !isEmptyStringFormApi(spouseInfo.spouseTitleCode) ? spouseInfo.spouseTitleCode || '' : '');
            setValue('spouseInfo.spouseFirstName', !isEmptyStringFormApi(spouseInfo.spouseFirstName) ? spouseInfo.spouseFirstName || '' : '');
            setValue('spouseInfo.spouseLastName', !isEmptyStringFormApi(spouseInfo.spouseLastName) ? spouseInfo.spouseLastName || '' : '');
        } else {
            setValue('spouseInfo.familyStatus', 'โสด', { shouldDirty: true });
        }
    }

    const getData = async (): Promise<SpouseInfoModel | null> => {
        if (data) {
            setDefaultData(data)
            setDefaultDataChange();
            return data
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
                        setDefaultDataChange();
                        return data.spouseInfo
                    }
                    setDefaultData(null)
                    setDefaultDataChange();
                }
            } catch (error) {
                throw error
            }
        }
        return null
    }

    const inputDate: InputElementProps[] = [
        {
            type: 'radio',
            label: "สถานภาพ",
            isEditable: isEditable,
            radioButtonGroupProps: {
                name: 'spouseInfo.familyStatus',
                row: true,
                options: [
                    { id: "โสด", label: "โสด" },
                    { id: "สมรส", label: "สมรส" },
                ]
            }
        },
        {
            type: 'autocomplete',
            label: "ประเภทหลักฐานลูกค้า",
            isEditable: isEditable,
            autocompleteElementProps: {
                name: 'spouseInfo.spouseReferenceType',
                rules: {
                    required: 'โปรดเลือกประเภทหลักฐานลูกค้า'
                },
                options: reference || [],
            }
        },
        {
            label: "เลขที่บัตร",
            isEditable: isEditable,
            textFieldElementProps: {
                name: 'spouseInfo.spouseIdentityId',
                rules: {
                    required: 'โปรดกรอกเลขที่บัตร'
                }
            }
        },
        {
            type: 'autocomplete',
            label: "คำนำหน้า",
            isEditable: isEditable,
            autocompleteElementProps: {
                name: 'spouseInfo.spouseTitleCode',
                rules: {
                    required: 'โปรดเลือกคำนำหน้า'
                },
                options: titles || [],
            }
        },
        {
            label: 'ชื่อคู่สมรส',
            isEditable: isEditable,
            textFieldElementProps: {
                name: 'spouseInfo.spouseFirstName',
                rules: {
                    required: 'โปรดกรอกชื่อคู่สมรส'
                }
            }
        },
        {
            label: 'นามสกุลคู่สมรส',
            isEditable: isEditable,
            textFieldElementProps: {
                name: 'spouseInfo.spouseLastName',
                rules: {
                    required: 'โปรดกรอกนามสกุลคู่สมรส'
                }
            }
        }
    ]

    const familyStatus = watch('spouseInfo.familyStatus')

    useEffect(() => {
        if (trigger && familyStatus) {
            trigger('spouseInfo')
        }
    }, [familyStatus, isLoading, trigger])

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
                    {
                        inputDate.map((input, index) => {
                            if (watch('spouseInfo.familyStatus') !== 'สมรส' && index > 0) {
                                return null
                            } else {
                                return (
                                    <InputElement
                                        key={index}
                                        {...input}
                                    />
                                )
                            }

                        })
                    }
                    {/* <InputHorizontal
                        label="สถานภาพ"
                        defaultValue={watch('spouseInfo.familyStatus')}
                        textShow={data && normalizationData('familyStatus', data) || "-"}
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
                                    defaultValue={watch('spouseInfo.spouseReferenceType')}
                                    textShow={data && normalizationData('spouseReferenceType', data) || "-"}
                                    isEditable={isEditable}
                                    // register={register}
                                    name="spouseReferenceType"
                                    isRequired
                                    type="autocomplete"
                                    list={reference}
                                    onChange={(value) => setValue('spouseInfo.spouseTitleCode', value, { shouldDirty: true })}
                                    placeholder="โปรดเลือกประเภทหลักฐานลูกค้า"
                                />
                                <InputHorizontal
                                    label="เลขที่บัตร"
                                    defaultValue={watch('spouseInfo.spouseIdentityId')}
                                    textShow={data && normalizationData('spouseIdentityId', data) || "-"}
                                    isEditable={isEditable}
                                    // register={register}
                                    name="spouseIdentityId"
                                    onChange={(value) => setValue('spouseInfo.spouseIdentityId', value, { shouldDirty: true })}
                                    isRequired
                                />
                                <InputHorizontal
                                    label="คำนำหน้า"
                                    defaultValue={watch('spouseInfo.spouseTitleCode')}
                                    textShow={data && normalizationData('spouseTitle', data) || "-"}
                                    isEditable={isEditable}
                                    // register={register}
                                    name="spouseTitleCode"
                                    isRequired
                                    type="autocomplete"
                                    list={titles}
                                    onChange={(value) => setValue('spouseInfo.spouseTitleCode', value, { shouldDirty: true })}
                                    placeholder="โปรดเลือกคำนำหน้า"
                                />
                                <InputHorizontal
                                    label="ชื่อคู่สมรส"
                                    defaultValue={watch('spouseInfo.spouseFirstName')}
                                    textShow={data && normalizationData('spouseFirstName', data) || "-"}
                                    isEditable={isEditable}
                                    // register={register}
                                    name="spouseFirstName"
                                    isRequired
                                    onChange={(value) => setValue('spouseInfo.spouseFirstName', value, { shouldDirty: true })}
                                />
                                <InputHorizontal
                                    label="นามสกุลคู่สมรส"
                                    defaultValue={watch('spouseInfo.spouseLastName')}
                                    textShow={data && normalizationData('spouseLastName', data) || "-"}
                                    isEditable={isEditable}
                                    // register={register}
                                    name="spouseLastName"
                                    isRequired
                                    onChange={(value) => setValue('spouseInfo.spouseLastName', value, { shouldDirty: true })}
                                />
                            </>
                        )
                    } */}

                </div>

            </ContentLoading>
        </>
    )
}