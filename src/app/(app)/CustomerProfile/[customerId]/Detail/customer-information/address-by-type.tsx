"use client"


import ContentLoading from "@/components/content/content-loading";
import InputElement, { InputElementProps } from "@/components/custom/input-element";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataCountriesCustom } from "@/hooks/masterDataCountries";
import { useAppSelector } from "@/libs/redux/hook";
import { CustomerInformationState } from "@/libs/redux/store/customer-information-slice";
import { AddressInfoModel, AddressInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { addressComponentToProps, getAddressToDistrict, getAddressToPostCode, getAddressToProvince, getAddressToSubDistrict, handleEmptyStringFormApi, isEmptyStringFormApi, objectToArray } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

export default function AddressInfoType1({ useForm }: { useForm: UseFormReturn<CustomerInformationState, any, undefined> }) {
    const { trigger, setValue, watch, resetField } = useForm;
    const params = useParams()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';


    const { data: countries, isLoading: isLoadingCountries } = useMasterDataCountriesCustom();


    const { data, isLoading, error } = useQuery({
        queryKey: ['addressInfoType1', params.customerId],
        queryFn: () => getData(),
    })

    const normalizationData = (name: string, addressInfo: AddressInfoModel): any => {
        switch (name) {
            case 'addressNo':
                return handleEmptyStringFormApi(addressInfo.addressNo);
            case 'moo':
                return handleEmptyStringFormApi(addressInfo.moo);
            case 'buildingOrVillage':
                return handleEmptyStringFormApi(addressInfo.buildingOrVillage);
            case 'roomNo':
                return handleEmptyStringFormApi(addressInfo.roomNo);
            case 'floor':
                return handleEmptyStringFormApi(addressInfo.floor);
            case 'soi':
                return handleEmptyStringFormApi(addressInfo.soi);
            case 'street':
                return handleEmptyStringFormApi(addressInfo.street);
            case 'countryCode':
                return handleEmptyStringFormApi(addressInfo.countryCode);
            case 'country':
                return isEmptyStringFormApi(addressInfo.countryCode) ? '-' : `${addressInfo.countryCode} - ${addressInfo.countryDesc}`;
            case 'zipCode':
                return handleEmptyStringFormApi(addressInfo.zipCode);
            case 'province':
                return handleEmptyStringFormApi(addressInfo.provinceNameTh);
            case 'district':
                return handleEmptyStringFormApi(addressInfo.districtNameTh);
            case 'subDistrict':
                return handleEmptyStringFormApi(addressInfo.subDistrictNameTh);
            case 'customAddress1':
                return handleEmptyStringFormApi(addressInfo.customAddress1);
            case 'customAddress2':
                return handleEmptyStringFormApi(addressInfo.customAddress2);
            case 'customAddress3':
                return handleEmptyStringFormApi(addressInfo.customAddress3);

            default:
                return '-';
        }
    }

    const confirmAddressInfoType1 = useAppSelector(state => state.customerInformation.confirm?.addressInfoType1)

    const setDefaultData = (addressInfo: AddressInfoModel) => {
        setValue('addressInfoType1.addressNo', isEmptyStringFormApi(addressInfo.addressNo) ? '' : addressInfo.addressNo || '');
        setValue('addressInfoType1.moo', isEmptyStringFormApi(addressInfo.moo) ? '' : addressInfo.moo || '');
        setValue('addressInfoType1.buildingOrVillage', isEmptyStringFormApi(addressInfo.buildingOrVillage) ? '' : addressInfo.buildingOrVillage || '');
        setValue('addressInfoType1.roomNo', isEmptyStringFormApi(addressInfo.roomNo) ? '' : addressInfo.roomNo || '');
        setValue('addressInfoType1.floor', isEmptyStringFormApi(addressInfo.floor) ? '' : addressInfo.floor || '');
        setValue('addressInfoType1.soi', isEmptyStringFormApi(addressInfo.soi) ? '' : addressInfo.soi || '');
        setValue('addressInfoType1.street', isEmptyStringFormApi(addressInfo.street) ? '' : addressInfo.street || '');
        setValue('addressInfoType1.countryCode', isEmptyStringFormApi(addressInfo.countryCode) ? '' : addressInfo.countryCode || '');
        setValue('addressInfoType1.zipCode', isEmptyStringFormApi(addressInfo.zipCode) ? '' : addressInfo.zipCode || '');
        setValue('addressInfoType1.provinceCode', isEmptyStringFormApi(addressInfo.provinceCode) ? '' : addressInfo.provinceCode || '');
        setValue('addressInfoType1.districtCode', isEmptyStringFormApi(addressInfo.districtCode) ? '' : addressInfo.districtCode || '');
        setValue('addressInfoType1.subDistrictCode', isEmptyStringFormApi(addressInfo.subDistrictCode) ? '' : addressInfo.subDistrictCode || '');
        setValue('addressInfoType1.customAddress1', isEmptyStringFormApi(addressInfo.customAddress1) ? '' : addressInfo.customAddress1 || '');
        setValue('addressInfoType1.customAddress2', isEmptyStringFormApi(addressInfo.customAddress2) ? '' : addressInfo.customAddress2 || '');
        setValue('addressInfoType1.customAddress3', isEmptyStringFormApi(addressInfo.customAddress3) ? '' : addressInfo.customAddress3 || '');
        setValue('addressInfoType1.addressTemp', {
            postCode: addressInfo.zipCode || '',
            province: addressInfo.provinceNameTh || '',
            provinceCode: addressInfo.provinceCode || '',
            district: addressInfo.districtNameTh || '',
            districtCode: addressInfo.districtCode || '',
            subDistrict: addressInfo.subDistrictNameTh || '',
            subDistrictCode: addressInfo.subDistrictCode || '',
        })
        if (confirmAddressInfoType1) {
            try {
                const oldData = objectToArray({ addressInfoType1: confirmAddressInfoType1 });
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

    const getData = async (): Promise<AddressInfoModel | null> => {
        if (data) {
            setDefaultData(data)
            return data
        }
        const { customerId } = params
        if (customerId) {
            try {
                const request = await fetch(`/api/customer-profile/address-info/${customerId}/01`, { method: 'GET' });
                const response: AddressInfoResponseDataResponse = await request.json();
                if (response.status == 200) {
                    const { data } = response;

                    if (data && data.addressInfoModel) {
                        setDefaultData(data.addressInfoModel)
                        return data.addressInfoModel
                    }
                }
            } catch (error) {
                console.error('error', error)
                throw error
            }
        }
        return null
    }

    const inputDate: InputElementProps[] = [
        {
            label: 'เลขที่',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType1.addressNo",
                rules: {
                    required: 'โปรดกรอกเลขที่',
                },
            },
        },
        {
            label: 'หมู่ที่',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType1.moo",
            },
        },
        {
            label: 'หมู่บ้าน / อาคาร',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType1.buildingOrVillage",
            },
        },
        {
            label: 'เลขที่ห้อง',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType1.roomNo",
            },
        },
        {
            label: 'ชั้น',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType1.floor",
            },
        },
        {
            label: 'ตรอก / ซอย',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType1.soi",
            },
        },
        {
            label: 'ถนน',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType1.street",
            },
        },
        {
            type: "autocomplete",
            label: "ประเทศ",
            isEditable: isEditable,
            autocompleteElementProps: {
                name: "addressInfoType1.countryCode",
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
                name: "addressInfoType1.addressTemp",
                required: 'โปรดเลือกรหัสไปรษณีย์',
                input: (value) => {
                    if (!value) return '';
                    return value.postCode;
                },
                options: getAddressToPostCode() || [],
                disabled: watch('addressInfoType1.countryCode') !== '000',
            })
        },
        {
            type: "autocomplete",
            label: "จังหวัด",
            isEditable: isEditable,
            autocompleteElementProps: addressComponentToProps({
                name: "addressInfoType1.addressTemp",
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
                name: "addressInfoType1.addressTemp",
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
                name: "addressInfoType1.addressTemp",
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
                name: "addressInfoType1.customAddress1",
                rules: {
                    required: 'โปรดกรอกที่อยู่ 1',
                },
            },
        },
        {
            label: 'ที่อยู่ 2',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType1.customAddress2",
                rules: {
                    required: 'โปรดกรอกที่อยู่ 2',
                },
            },
        },
        {
            label: 'ที่อยู่ 3',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType1.customAddress3",
                rules: {
                    required: 'โปรดกรอกที่อยู่ 3',
                },
            },
        },
    ]

    const addressTemp = watch('addressInfoType1.addressTemp')

    useEffect(() => {
        if (addressTemp && data && data.zipCode !== addressTemp.postCode) {
            setValue('addressInfoType1.zipCode', addressTemp.postCode, { shouldDirty: true })
            setValue('addressInfoType1.provinceCode', addressTemp.provinceCode, { shouldDirty: true })
            setValue('addressInfoType1.districtCode', addressTemp.districtCode, { shouldDirty: true })
            setValue('addressInfoType1.subDistrictCode', addressTemp.subDistrictCode, { shouldDirty: true })
        }
    }, [addressTemp, data, resetField, setValue])

    useEffect(() => {
        trigger('addressInfoType1')
    }, [isLoading, trigger, addressTemp])

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="ที่อยู่ตามประเภทหลักฐาน"
            />
            <ContentLoading
                isLoading={isLoading || isLoadingCountries}
                error={error && error.message || undefined}
                hight={184}
            >
                <div className="grid grid-cols-3">
                    {
                        inputDate.map((input, index) => {
                            if (
                                (watch('addressInfoType1.countryCode') === '000' && [12, 13, 14].includes(index)) ||
                                (watch('addressInfoType1.countryCode') !== '000' && [9, 10, 11].includes(index))
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
            </ContentLoading>
        </>
    )
}