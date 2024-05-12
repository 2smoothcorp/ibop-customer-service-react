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
import { RadioButtonGroup } from "react-hook-form-mui";

export default function AddressInfoType2({ useForm }: { useForm: UseFormReturn<CustomerInformationState, any, undefined> }) {
    const { trigger, setValue, watch } = useForm;
    const params = useParams()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';


    const { data: countries, isLoading: isLoadingCountries } = useMasterDataCountriesCustom();


    const { data, isLoading, error } = useQuery({
        queryKey: ['addressInfoType2', params.customerId],
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
            case 'provinceCode':
                return handleEmptyStringFormApi(addressInfo.provinceCode);
            case 'province':
                return isEmptyStringFormApi(addressInfo.provinceCode) ? '-' : addressInfo.provinceNameTh;
            case 'districtCode':
                return handleEmptyStringFormApi(addressInfo.districtCode);
            case 'district':
                return isEmptyStringFormApi(addressInfo.districtCode) ? '-' : addressInfo.districtNameTh;
            case 'subDistrictCode':
                return handleEmptyStringFormApi(addressInfo.subDistrictCode);
            case 'subDistrict':
                return isEmptyStringFormApi(addressInfo.subDistrictCode) ? '-' : addressInfo.subDistrictNameTh;
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

    const confirmAddressInfoType2 = useAppSelector(state => state.customerInformation.confirm?.addressInfoType2)

    const setDefaultData = (addressInfo: AddressInfoModel) => {
        if (!addressInfo) return;
        if (addressInfo.referenceBy === '01') {
            setValue('isAddressInfoType2SameType', '1');
        } else {
            setValue('isAddressInfoType2SameType', '0');
        }
        setValue('addressInfoType2.addressNo', isEmptyStringFormApi(addressInfo.addressNo) ? '' : addressInfo.addressNo || '');
        setValue('addressInfoType2.moo', isEmptyStringFormApi(addressInfo.moo) ? '' : addressInfo.moo || '');
        setValue('addressInfoType2.buildingOrVillage', isEmptyStringFormApi(addressInfo.buildingOrVillage) ? '' : addressInfo.buildingOrVillage || '');
        setValue('addressInfoType2.roomNo', isEmptyStringFormApi(addressInfo.roomNo) ? '' : addressInfo.roomNo || '');
        setValue('addressInfoType2.floor', isEmptyStringFormApi(addressInfo.floor) ? '' : addressInfo.floor || '');
        setValue('addressInfoType2.soi', isEmptyStringFormApi(addressInfo.soi) ? '' : addressInfo.soi || '');
        setValue('addressInfoType2.street', isEmptyStringFormApi(addressInfo.street) ? '' : addressInfo.street || '');
        setValue('addressInfoType2.countryCode', isEmptyStringFormApi(addressInfo.countryCode) ? '' : addressInfo.countryCode || '');
        setValue('addressInfoType2.zipCode', isEmptyStringFormApi(addressInfo.zipCode) ? '' : addressInfo.zipCode || '', { shouldDirty: false });
        setValue('addressInfoType2.provinceCode', isEmptyStringFormApi(addressInfo.provinceCode) ? '' : addressInfo.provinceCode || '', { shouldDirty: false });
        setValue('addressInfoType2.districtCode', isEmptyStringFormApi(addressInfo.districtCode) ? '' : addressInfo.districtCode || '', { shouldDirty: false });
        setValue('addressInfoType2.subDistrictCode', isEmptyStringFormApi(addressInfo.subDistrictCode) ? '' : addressInfo.subDistrictCode || '', { shouldDirty: false });
        setValue('addressInfoType2.customAddress1', isEmptyStringFormApi(addressInfo.customAddress1) ? '' : addressInfo.customAddress1 || '');
        setValue('addressInfoType2.customAddress2', isEmptyStringFormApi(addressInfo.customAddress2) ? '' : addressInfo.customAddress2 || '');
        setValue('addressInfoType2.customAddress3', isEmptyStringFormApi(addressInfo.customAddress3) ? '' : addressInfo.customAddress3 || '');
        setValue('addressInfoType2.addressTemp', {
            postCode: addressInfo.zipCode || '',
            province: addressInfo.provinceNameTh || '',
            provinceCode: addressInfo.provinceCode || '',
            district: addressInfo.districtNameTh || '',
            districtCode: addressInfo.districtCode || '',
            subDistrict: addressInfo.subDistrictNameTh || '',
            subDistrictCode: addressInfo.subDistrictCode || '',
        })
        if (confirmAddressInfoType2) {
            try {
                const oldData = objectToArray({ addressInfoType2: confirmAddressInfoType2 });
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
                const request = await fetch(`/api/customer-profile/address-info/${customerId}/02`, { method: 'GET' });
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

    const addressTemp = watch('addressInfoType2.addressTemp')

    useEffect(() => {
        if (addressTemp) {
            setValue('addressInfoType2.zipCode', addressTemp.postCode, { shouldDirty: true })
            setValue('addressInfoType2.provinceCode', addressTemp.provinceCode, { shouldDirty: true })
            setValue('addressInfoType2.districtCode', addressTemp.districtCode, { shouldDirty: true })
            setValue('addressInfoType2.subDistrictCode', addressTemp.subDistrictCode, { shouldDirty: true })
        }
    }, [addressTemp, setValue])

    useEffect(() => {
        if (!isLoading) {
            trigger('addressInfoType2')
        }
    }, [isLoading, trigger])

    const inputDate: InputElementProps[] = [
        {
            label: 'เลขที่',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType2.addressNo",
                rules: {
                    required: 'โปรดกรอกเลขที่',
                },
            },
        },
        {
            label: 'หมู่ที่',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType2.moo",
            },
        },
        {
            label: 'หมู่บ้าน / อาคาร',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType2.buildingOrVillage",
            },
        },
        {
            label: 'เลขที่ห้อง',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType2.roomNo",
            },
        },
        {
            label: 'ชั้น',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType2.floor",
            },
        },
        {
            label: 'ตรอก / ซอย',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType2.soi",
            },
        },
        {
            label: 'ถนน',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType2.street",
            },
        },
        {
            type: "autocomplete",
            label: "ประเทศ",
            isEditable: isEditable,
            autocompleteElementProps: {
                name: "addressInfoType2.countryCode",
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
                name: "addressInfoType2.addressTemp",
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
                name: "addressInfoType2.addressTemp",
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
                name: "addressInfoType2.addressTemp",
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
                name: "addressInfoType2.addressTemp",
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
                name: "addressInfoType2.customAddress1",
                rules: {
                    required: 'โปรดกรอกที่อยู่ 1',
                },
            },
        },
        {
            label: 'ที่อยู่ 2',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType2.customAddress2",
                rules: {
                    required: 'โปรดกรอกที่อยู่ 2',
                },
            },
        },
        {
            label: 'ที่อยู่ 3',
            isEditable: isEditable,
            textFieldElementProps: {
                name: "addressInfoType2.customAddress3",
                rules: {
                    required: 'โปรดกรอกที่อยู่ 3',
                },
            },
        },
    ]

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="ที่อยู่ปัจจุบันที่ติดต่อได้"
            />
            <ContentLoading
                isLoading={isLoading || isLoadingCountries}
                error={error && error.message || undefined}
                hight={184}
            >
                <div className="w-full px-10">
                    <RadioButtonGroup
                        disabled={!isEditable}
                        name="isAddressInfoType2SameType"
                        row
                        options={[
                            { label: 'ตามประเภทหลักฐาน', id: '1', value: '1' },
                            { label: 'อื่นๆ (โปรดระบุข้อมูลด้านล่างนี้)', id: '0', value: '0' },
                        ]}
                    />
                </div>
                <div className="grid grid-cols-3">
                    {
                        inputDate.map((input, index) => {
                            if (
                                (watch('isAddressInfoType2SameType') === '1') ||
                                (watch('addressInfoType2.countryCode') === '000' && [12, 13, 14].includes(index)) ||
                                (watch('addressInfoType2.countryCode') !== '000' && [9, 10, 11].includes(index))
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

                {/* {
                    watch("addressInfoType2.addressType") === '02' && <div className="grid grid-cols-3">
                        <InputHorizontal
                            label="เลขที่"
                            defaultValue={watch("addressInfoType2.addressNo")}
                            textShow={data && normalizationData('addressNo', data) || "-"}
                            isEditable={isEditable}
                            // register={register}
                            name="addressNo"
                            onChange={(value) => setValue('addressInfoType2.addressNo', value, { shouldDirty: true })}
                        />
                        <InputHorizontal
                            label="หมู่ที่"
                            defaultValue={watch("addressInfoType2.moo")}
                            textShow={data && normalizationData('moo', data) || "-"}
                            isEditable={isEditable}
                            // register={register}
                            name="moo"
                            onChange={(value) => setValue('addressInfoType2.moo', value, { shouldDirty: true })}
                        />
                        <InputHorizontal
                            label="หมู่บ้าน / อาคาร"
                            defaultValue={watch("addressInfoType2.buildingOrVillage")}
                            textShow={data && normalizationData('buildingOrVillage', data) || "-"}
                            isEditable={isEditable}
                            // register={register}
                            name="buildingOrVillage"
                            onChange={(value) => setValue('addressInfoType2.buildingOrVillage', value, { shouldDirty: true })}
                        />
                        <InputHorizontal
                            label="เลขที่ห้อง"
                            defaultValue={watch("addressInfoType2.roomNo")}
                            textShow={data && normalizationData('roomNo', data) || "-"}
                            isEditable={isEditable}
                            // register={register}
                            name="roomNo"
                            onChange={(value) => setValue('addressInfoType2.roomNo', value, { shouldDirty: true })}
                        />
                        <InputHorizontal
                            label="ชั้น"
                            defaultValue={watch("addressInfoType2.floor")}
                            textShow={data && normalizationData('floor', data) || "-"}
                            isEditable={isEditable}
                            // register={register}
                            name="floor"
                            onChange={(value) => setValue('addressInfoType2.floor', value, { shouldDirty: true })}
                        />
                        <InputHorizontal
                            label="ตรอก / ซอย"
                            defaultValue={watch("addressInfoType2.soi")}
                            textShow={data && normalizationData('soi', data) || "-"}
                            isEditable={isEditable}
                            // register={register}
                            name="soi"
                            onChange={(value) => setValue('addressInfoType2.soi', value, { shouldDirty: true })}
                        />
                        <InputHorizontal
                            label="ถนน"
                            defaultValue={watch("addressInfoType2.street")}
                            textShow={data && normalizationData('street', data) || "-"}
                            isEditable={isEditable}
                            // register={register}
                            name="street"
                            onChange={(value) => setValue('addressInfoType2.street', value, { shouldDirty: true })}
                        />
                        <InputHorizontal
                            label="ประเทศ"
                            defaultValue={watch("addressInfoType2.countryCode")}
                            textShow={data && normalizationData('country', data) || "-"}
                            isEditable={isEditable}
                            // register={register}
                            name="country"
                            isRequired
                            type="autocomplete"
                            list={countries}
                            onChange={(value) => {
                                if (value !== watch("addressInfoType2.countryCode")) {
                                    setValue('addressInfoType2.countryCode', value, { shouldDirty: true });
                                }
                            }}
                            placeholder="โปรดเลือกประเทศ"
                        />
                        <InputHorizontal
                            label="รหัสไปรษณีย์"
                            defaultValueAddress={address}
                            textShow={data && normalizationData('zipCode', data) || "-"}
                            isEditable={isEditable}
                            register={register}
                            name="zipCode"
                            isRequired
                            type="addressThailand"
                            addressList={thailandAddress}
                            placeholder="โปรดเลือกประเทศ"
                            addressOptionType="postCode"
                            onChangeAddress={(item) => {
                                setAddress(item)
                                setAddresHook(item)
                            }}
                            onChange={(text) => {
                                getAddress(text, 'postCode')
                            }}
                        />
                        {
                            watch("addressInfoType2.countryCode") !== '000'
                                ?
                                <>
                                    <InputHorizontal
                                        label="ที่อยู่ 1"
                                        defaultValue={data && normalizationData('customAddress1', data) || ""}
                                        textShow={data && normalizationData('customAddress1', data) || "-"}
                                        onChange={(value) => setValue('addressInfoType2.customAddress1', value, { shouldDirty: true })}
                                        isEditable={isEditable}
                                        name="customAddress1"
                                        isRequired
                                    />
                                    <InputHorizontal
                                        label="ที่อยู่ 2"
                                        defaultValue={data && normalizationData('customAddress2', data) || ""}
                                        textShow={data && normalizationData('customAddress2', data) || "-"}
                                        onChange={(value) => setValue('addressInfoType2.customAddress2', value, { shouldDirty: true })}
                                        isEditable={isEditable}
                                        name="customAddress2"
                                        isRequired
                                    />
                                    <InputHorizontal
                                        label="ที่อยู่ 3"
                                        defaultValue={data && normalizationData('customAddress3', data) || "-"}
                                        textShow={data && normalizationData('customAddress3', data) || "-"}
                                        onChange={(value) => setValue('addressInfoType2.customAddress3', value, { shouldDirty: true })}
                                        isEditable={isEditable}
                                        name="customAddress3"
                                        isRequired
                                    />
                                </>
                                : <>
                                    <InputHorizontal
                                        label="จังหวัด"
                                        defaultValueAddress={address}
                                        textShow={data && normalizationData('province', data) || "-"}
                                        isEditable={isEditable}
                                        register={register}
                                        name="provinceCode"
                                        isRequired
                                        type="addressThailand"
                                        addressList={thailandAddress}
                                        placeholder="โปรดเลือกจังหวัด"
                                        addressOptionType="province"
                                        onChangeAddress={(item) => {
                                            setAddress(item);
                                            setAddresHook(item)
                                        }}
                                        onChange={(text) => {
                                            getAddress(text, 'province')
                                        }}
                                    />
                                    <InputHorizontal
                                        label="อำเภอ / เขต"
                                        defaultValueAddress={address}
                                        textShow={data && normalizationData('district', data) || "-"}
                                        isEditable={isEditable}
                                        register={register}
                                        name="districtCode"
                                        isRequired
                                        type="addressThailand"
                                        addressList={thailandAddress}
                                        placeholder="โปรดเลือกอำเภอ / เขต"
                                        addressOptionType="district"
                                        onChangeAddress={(item) => {
                                            setAddress(item)
                                            setAddresHook(item)
                                        }}
                                        onChange={(text) => {
                                            getAddress(text, 'district')
                                        }}
                                    />
                                    <InputHorizontal
                                        label="ตำบล / แขวง"
                                        defaultValueAddress={address}
                                        textShow={data && normalizationData('subDistrict', data) || "-"}
                                        isEditable={isEditable}
                                        register={register}
                                        name="subDistrictCode"
                                        isRequired
                                        type="addressThailand"
                                        addressList={thailandAddress}
                                        placeholder="โปรดเลือกตำบล / แขวง"
                                        addressOptionType="subDistrict"
                                        onChangeAddress={(item) => {
                                            setAddress(item)
                                            setAddresHook(item)
                                        }}
                                        onChange={(text) => {
                                            getAddress(text, 'subDistrict')
                                        }}
                                    />

                                </>
                        }
                    </div>
                } */}
            </ContentLoading>

        </>
    )
}

interface SubmitInput {
    addressNo: string;
    moo: string;
    buildingOrVillage: string;
    roomNo: string;
    floor: string;
    soi: string;
    street: string;
    countryCode: string;
    zipCode: string;
    provinceCode: string;
    districtCode: string;
    subDistrictCode: string;
    customAddress1: string;
    customAddress2: string;
    customAddress3: string;
}