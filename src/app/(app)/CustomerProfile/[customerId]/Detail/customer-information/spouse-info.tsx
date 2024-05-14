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
                <div className="grid grid-cols-3 gap-1">
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


                </div>

            </ContentLoading>
        </>
    )
}