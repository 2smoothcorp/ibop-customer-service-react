"use client"

import ContentLoading from "@/components/content/content-loading";
import InputElement, { InputElementProps } from "@/components/custom/input-element";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataOccupationCustom } from "@/hooks/master-data-occupation";
import { useMasterDataCountriesCustom } from "@/hooks/masterDataCountries";
import { useAppSelector } from "@/libs/redux/hook";
import { CustomerInformationState } from "@/libs/redux/store/customer-information-slice";
import { AddressInfoModel, AddressInfoResponseDataResponse, ComboBox, ComboBoxListDataResponse, OccupationInfoModel, OccupationInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { addressComponentToProps, getAddressToDistrict, getAddressToPostCode, getAddressToProvince, getAddressToSubDistrict, handleEmptyStringFormApi, isEmptyStringFormApi, objectToArray } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { RadioButtonGroup } from "react-hook-form-mui";

export default function OccupationInfo({ useForm }: { useForm: UseFormReturn<CustomerInformationState, any, undefined> }) {
    const { setValue, watch, trigger } = useForm;
    const params = useParams()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';

    const { data: countries, isLoading: isLoadingCountries } = useMasterDataCountriesCustom();

    const { data: occupationList, isLoading: isLoadingOccupation } = useMasterDataOccupationCustom();

    const { data, isLoading, error } = useQuery({
        queryKey: ['occupationInfo', params.customerId], queryFn: async (): Promise<OccupationInfoProps | null> => {
            if (data) {
                setDefaultData(data);
                return data;
            }
            const { customerId } = params
            const [
                responseMasterData,
                responseOccupation,
                responseAddress
            ]: [
                    ComboBoxListDataResponse,
                    OccupationInfoResponseDataResponse,
                    AddressInfoResponseDataResponse
                ] = await Promise.all([
                    fetch(`/api/master-data/occupation`, { method: 'GET' }).then(x => x.json()),
                    fetch(`/api/customer-profile/occupation/${customerId}`, { method: 'GET' }).then(x => x.json()),
                    fetch(`/api/customer-profile/address-info/${customerId}/03`, { method: 'GET' }).then(x => x.json())
                ]);
            // console.log(responseOccupation, responseAddress)
            let response: OccupationInfoProps = { occupationInfo: null, addressInfoType3: null, masterDataOccupations: null };
            if (responseOccupation.status === 200) {
                response = {
                    ...response,
                    occupationInfo: responseOccupation.data?.occupationInfo || null
                }
            }
            if (responseAddress.status === 200) {
                response = {
                    ...response,
                    addressInfoType3: responseAddress.data?.addressInfoModel || null
                }
            }
            if (responseMasterData.status === 200) {
                response = {
                    ...response,
                    masterDataOccupations: responseMasterData.data || null
                }
            }
            setDefaultData(response);
            return response;
        }
    })

    const normalizationData = (name: string, occupation: OccupationInfoProps): any => {
        switch (name) {
            case 'occupation':
                if (occupation.masterDataOccupations) {
                    const result = occupation.masterDataOccupations.find((item) => item.rValue === occupation.occupationInfo?.occupationCode);
                    if (result) {
                        return occupation.occupationInfo && `${result.rValue} - ${result.rText}`;
                    }
                }
                return occupation.occupationInfo && handleEmptyStringFormApi(occupation.occupationInfo.occupationCode) || '-';
            case 'occupationCode':
                return occupation.occupationInfo && handleEmptyStringFormApi(occupation.occupationInfo.occupationCode) || '-';
            case 'jobWorkPlace':
                return occupation.occupationInfo && handleEmptyStringFormApi(occupation.occupationInfo.jobWorkPlace) || '-';
            case 'jobPosition':
                return occupation.occupationInfo && handleEmptyStringFormApi(occupation.occupationInfo.jobPosition) || '-';
            case 'jobDepartment':
                return occupation.occupationInfo && handleEmptyStringFormApi(occupation.occupationInfo.jobDepartment) || '-';
            case 'addressNo':
                return occupation.addressInfoType3 && handleEmptyStringFormApi(occupation.addressInfoType3.addressNo) || '-';
            case 'moo':
                return occupation.addressInfoType3 && handleEmptyStringFormApi(occupation.addressInfoType3.moo) || '-';
            case 'buildingOrVillage':
                return occupation.addressInfoType3 && handleEmptyStringFormApi(occupation.addressInfoType3.buildingOrVillage) || '-';
            case 'roomNo':
                return occupation.addressInfoType3 && handleEmptyStringFormApi(occupation.addressInfoType3.roomNo) || '-';
            case 'floor':
                return occupation.addressInfoType3 && handleEmptyStringFormApi(occupation.addressInfoType3.floor) || '-';
            case 'soi':
                return occupation.addressInfoType3 && handleEmptyStringFormApi(occupation.addressInfoType3.soi) || '-';
            case 'street':
                return occupation.addressInfoType3 && handleEmptyStringFormApi(occupation.addressInfoType3.street) || '-';
            case 'country':
                return occupation.addressInfoType3 && (isEmptyStringFormApi(occupation.addressInfoType3.countryCode) ? '-' : `${occupation.addressInfoType3.countryCode} - ${occupation.addressInfoType3.countryDesc}`) || '-';
            case 'zipCode':
                return occupation.addressInfoType3 && handleEmptyStringFormApi(occupation.addressInfoType3.zipCode) || '-';
            case 'province':
                return occupation.addressInfoType3 && handleEmptyStringFormApi(occupation.addressInfoType3.provinceNameTh) || '-';
            case 'district':
                return occupation.addressInfoType3 && handleEmptyStringFormApi(occupation.addressInfoType3.districtNameTh) || '-';
            case 'subDistrict':
                return occupation.addressInfoType3 && handleEmptyStringFormApi(occupation.addressInfoType3.subDistrictNameTh) || '-';
            case 'customAddress1':
                return occupation.addressInfoType3 && handleEmptyStringFormApi(occupation.addressInfoType3.customAddress1) || '-';
            case 'customAddress2':
                return occupation.addressInfoType3 && handleEmptyStringFormApi(occupation.addressInfoType3.customAddress2) || '-';
            case 'customAddress3':
                return occupation.addressInfoType3 && handleEmptyStringFormApi(occupation.addressInfoType3.customAddress3) || '-';

            default:
                return '-';
        }
    }

    const confirmQccupation = useAppSelector(state => state.customerInformation.confirm?.occupationInfo)
    const confirmAddressInfoType3 = useAppSelector(state => state.customerInformation.confirm?.addressInfoType3)

    const setDefaultData = (occupation: OccupationInfoProps) => {
        if (occupation.occupationInfo && occupation.masterDataOccupations) {
            // const result = occupation.masterDataOccupations.find((item) => item.rValue === occupation.occupationInfo?.occupationCode);
            // if (result) {
            //     setValue('occupationInfo.occupation', `${result.rValue} - ${result.rText}`);
            // } else {
            //     setValue('occupationInfo.occupation.occupation', normalizationData('occupation', occupation));
            // }
            if (occupation.occupationInfo.occupationCode !== '-') {
                setValue('occupationInfo.occupationCode', normalizationData('occupationCode', occupation));
            }
            setValue('occupationInfo.jobWorkPlace', isEmptyStringFormApi(occupation.occupationInfo.jobWorkPlace) ? '' : normalizationData('jobWorkPlace', occupation));
            setValue('occupationInfo.jobPosition', isEmptyStringFormApi(occupation.occupationInfo.jobPosition) ? '' : normalizationData('jobPosition', occupation));
            setValue('occupationInfo.jobDepartment', isEmptyStringFormApi(occupation.occupationInfo.jobDepartment) ? '' : normalizationData('jobDepartment', occupation));
        }
        if (occupation.addressInfoType3) {
            setValue('addressInfoType3.addressType', '03');
            setValue('addressInfoType3.addressNo', normalizationData('addressNo', occupation));
            setValue('addressInfoType3.moo', normalizationData('moo', occupation));
            setValue('addressInfoType3.buildingOrVillage', normalizationData('buildingOrVillage', occupation));
            setValue('addressInfoType3.roomNo', normalizationData('roomNo', occupation));
            setValue('addressInfoType3.floor', normalizationData('floor', occupation));
            setValue('addressInfoType3.soi', normalizationData('soi', occupation));
            setValue('addressInfoType3.street', normalizationData('street', occupation));
            setValue('addressInfoType3.country', normalizationData('country', occupation));
            setValue('addressInfoType3.zipCode', normalizationData('zipCode', occupation));
            setValue('addressInfoType3.provinceCode', normalizationData('province', occupation));
            setValue('addressInfoType3.districtCode', normalizationData('district', occupation));
            setValue('addressInfoType3.subDistrictCode', normalizationData('subDistrict', occupation));
            setValue('addressInfoType3.customAddress1', normalizationData('customAddress1', occupation));
            setValue('addressInfoType3.customAddress2', normalizationData('customAddress2', occupation));
            setValue('addressInfoType3.customAddress3', normalizationData('customAddress3', occupation));
            setValue('addressInfoType3.addressTemp', {
                postCode: occupation.addressInfoType3.zipCode || '',
                province: occupation.addressInfoType3.provinceNameTh || '',
                provinceCode: occupation.addressInfoType3.provinceCode || '',
                district: occupation.addressInfoType3.districtNameTh || '',
                districtCode: occupation.addressInfoType3.districtCode || '',
                subDistrict: occupation.addressInfoType3.subDistrictNameTh || '',
                subDistrictCode: occupation.addressInfoType3.subDistrictCode || '',
            })
        }
        if (confirmQccupation) {
            try {
                const oldData = objectToArray({ occupationInfo: confirmQccupation });
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
        if (confirmAddressInfoType3) {
            try {
                const oldData = objectToArray({ addressInfoType3: confirmAddressInfoType3 });
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
    }

    const inputDate: InputElementProps[] = [
        {
            label: 'เลขที่',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType3.addressNo",
                rules: {
                    required: 'โปรดกรอกเลขที่',
                },
            },
        },
        {
            label: 'หมู่ที่',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType3.moo",
            },
        },
        {
            label: 'หมู่บ้าน / อาคาร',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType3.buildingOrVillage",
            },
        },
        {
            label: 'เลขที่ห้อง',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType3.roomNo",
            },
        },
        {
            label: 'ชั้น',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType3.floor",
            },
        },
        {
            label: 'ตรอก / ซอย',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType3.soi",
            },
        },
        {
            label: 'ถนน',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType3.street",
            },
        },
        {
            type: "autocomplete",
            label: "ประเทศ",
            isEditable: isEditable,
            autocompleteElementProps: {
                name: "addressInfoType3.countryCode",
                rules: {
                    required: 'โปรดเลือกประเทศ',
                },
                options: countries || [],
            }
        },
        {
            type: "autocomplete",
            label: "รหัสไปรษณีย์",
            isEditable: isEditable,
            autocompleteElementProps: addressComponentToProps({
                name: "addressInfoType3.addressTemp",
                required: 'โปรดเลือกรหัสไปรษณีย์',
                input: (value) => {
                    if (!value) return '';
                    return value.postCode;
                },
                options: getAddressToPostCode() || [],
            })
        },
        {
            type: "autocomplete",
            label: "จังหวัด",
            isEditable: isEditable,
            autocompleteElementProps: addressComponentToProps({
                name: "addressInfoType3.addressTemp",
                required: 'โปรดเลือกจังหวัด',
                input: (value) => {
                    if (!value) return '';
                    return value.province;
                },
                options: getAddressToProvince() || [],
            })
        },
        {
            type: "autocomplete",
            label: "อำเภอ",
            isEditable: isEditable,
            autocompleteElementProps: addressComponentToProps({
                name: "addressInfoType3.addressTemp",
                required: 'โปรดเลือกอำเภอ',
                input: (value) => {
                    if (!value) return '';
                    return value.district;
                },
                options: getAddressToDistrict() || [],
            })
        },
        {
            type: "autocomplete",
            label: "ตำบล",
            isEditable: isEditable,
            autocompleteElementProps: addressComponentToProps({
                name: "addressInfoType3.addressTemp",
                required: 'โปรดเลือกจังหวัด',
                input: (value) => {
                    if (!value) return '';
                    return value.subDistrict;
                },
                options: getAddressToSubDistrict() || [],
            })
        },
        {
            label: 'ที่อยู่ 1',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType3.customAddress1",
                rules: {
                    required: 'โปรดกรอกที่อยู่ 1',
                },
            },
        },
        {
            label: 'ที่อยู่ 2',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType3.customAddress2",
                rules: {
                    required: 'โปรดกรอกที่อยู่ 2',
                },
            },
        },
        {
            label: 'ที่อยู่ 3',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType3.customAddress3",
                rules: {
                    required: 'โปรดกรอกที่อยู่ 3',
                },
            },
        },
    ]

    const addressTemp = watch('addressInfoType3.addressTemp')

    useEffect(() => {
        if (addressTemp && data && data.addressInfoType3 && data.addressInfoType3.zipCode !== addressTemp.postCode) {
            setValue('addressInfoType3.zipCode', addressTemp.postCode, { shouldDirty: true })
            setValue('addressInfoType3.provinceCode', addressTemp.provinceCode, { shouldDirty: true })
            setValue('addressInfoType3.districtCode', addressTemp.districtCode, { shouldDirty: true })
            setValue('addressInfoType3.subDistrictCode', addressTemp.subDistrictCode, { shouldDirty: true })
        }
    }, [addressTemp, data, setValue])

    const occupationCode = watch('occupationInfo.occupationCode')

    useEffect(() => {
        if (trigger && occupationCode) {
            trigger('occupationInfo')
            trigger('addressInfoType3')
        }
    }, [isLoading, trigger, occupationCode])

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="อาชีพ"
            />
            <ContentLoading
                isLoading={isLoading || isLoadingCountries || isLoadingOccupation}
                error={error && error.message || undefined}
                hight={200}
            >
                <div className="grid grid-cols-3">
                    <InputElement
                        type="autocomplete"
                        isEditable={isEditable}
                        label="อาชีพ"
                        autocompleteElementProps={{
                            name: "occupationInfo.occupationCode",
                            rules: {
                                required: "โปรดเลือกอาชีพ"
                            },
                            options: occupationList || [],
                        }}
                    />
                    {
                        ["28", "44", "60", "76"].includes(watch('occupationInfo.occupationCode') || '') && (
                            <InputElement
                                isEditable={isEditable}
                                label="อาชีพโปรดระบุ"
                                textFieldElementProps={{
                                    name: "occupationInfo.occupationDescOther",
                                    rules: {
                                        required: "โปรดระบุอาชีพ"
                                    },
                                }}
                            />
                        )
                    }
                </div>
                {
                    !["01", "02", "03", "04", "05", "06"].includes(watch('occupationInfo.occupationCode') || '') &&
                    watch('occupationInfo.occupationCode') !== '' &&
                    watch('occupationInfo.occupationCode') !== '-' && (
                        <>
                            <div className="grid grid-cols-3">
                                <InputElement
                                    isEditable={isEditable}
                                    label="สถานที่ทำงาน / สถานศึกษา"
                                    textFieldElementProps={{
                                        name: "occupationInfo.jobWorkPlace",
                                        rules: {
                                            required: "โปรดระบุสถานที่ทำงาน / สถานศึกษา"
                                        },
                                    }}
                                />
                                <InputElement
                                    isEditable={isEditable}
                                    label="ตำแหน่งงาน"
                                    textFieldElementProps={{
                                        name: "occupationInfo.jobPosition",
                                        rules: {
                                            required: "โปรดระบุตำแหน่งงาน"
                                        },
                                    }}
                                />
                                <InputElement
                                    isEditable={isEditable}
                                    label="ฝ่าย"
                                    textFieldElementProps={{
                                        name: "occupationInfo.jobDepartment",
                                        rules: {
                                            required: "โปรดระบุฝ่าย"
                                        },
                                    }}
                                />
                            </div>
                            <div className="w-full flex flex-rows h-[60px]">
                                <div className="w-[16.66%] text-right align-middle my-auto">
                                    <div className="text-[18px] px-4 font-semibold tracking-wide">ที่อยู่สถานที่ทำงาน</div>
                                </div>
                                <RadioButtonGroup
                                    disabled={!isEditable}
                                    name="isAddressInfoType3SameType"
                                    row
                                    options={[
                                        { label: 'ตามประเภทหลักฐาน', id: '1', value: '1' },
                                        { label: 'ตามที่อยู่ปัจจุบัน', id: '2', value: '2' },
                                        { label: 'อื่นๆ (โปรดระบุข้อมูลด้านล่างนี้)', id: '0', value: '0' },
                                    ]}
                                />
                            </div>
                            {
                                watch('isAddressInfoType3SameType') === '0' && (
                                    <div className="grid grid-cols-3">
                                        {
                                            inputDate.map((input, index) => {
                                                if (
                                                    (watch('addressInfoType3.countryCode') === '000' && [12, 13, 14].includes(index)) ||
                                                    (watch('addressInfoType3.countryCode') !== '000' && [9, 10, 11].includes(index))
                                                ) {
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
                                )
                            }
                        </>
                    )
                }
            </ContentLoading>

        </>
    )
}


interface OccupationInfoProps {
    masterDataOccupations: ComboBox[] | null | undefined,
    occupationInfo: OccupationInfoModel | null | undefined,
    addressInfoType3: AddressInfoModel | null | undefined
}