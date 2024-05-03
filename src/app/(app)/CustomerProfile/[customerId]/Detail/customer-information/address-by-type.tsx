"use client"


import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataCountriesCustom } from "@/hooks/masterDataCountries";
import { CustomerInformationState } from "@/libs/redux/store/customer-information-slice";
import { AddressInfoModel, AddressInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { AddressBySearchModeProps, AddressBySearchProps, getAddressBySearch, handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

export default function AddressByType({ useForm }: { useForm: UseFormReturn<CustomerInformationState, any, undefined> }) {
    const { register, setValue, watch } = useForm;
    const [thailandAddress, setThailandAddress] = useState<AddressBySearchProps[]>([]);
    const [address, setAddress] = useState<AddressBySearchProps | undefined>();
    const params = useParams()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';


    const { data: countries, isLoading: isLoadingCountries } = useMasterDataCountriesCustom();

    const getAddress = async (search: string, mode: AddressBySearchModeProps) => {
        const list = getAddressBySearch(search, mode);
        setThailandAddress(list);
    }

    const { data, isLoading, error } = useQuery({
        queryKey: ['addressByType', params.customerId],
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

    const setDefaultData = (addressInfo: AddressInfoModel) => {
        setValue('addressByType.addressNo', isEmptyStringFormApi(addressInfo.addressNo) ? '' : addressInfo.addressNo || '');
        setValue('addressByType.moo', isEmptyStringFormApi(addressInfo.moo) ? '' : addressInfo.moo || '');
        setValue('addressByType.buildingOrVillage', isEmptyStringFormApi(addressInfo.buildingOrVillage) ? '' : addressInfo.buildingOrVillage || '');
        setValue('addressByType.roomNo', isEmptyStringFormApi(addressInfo.roomNo) ? '' : addressInfo.roomNo || '');
        setValue('addressByType.floor', isEmptyStringFormApi(addressInfo.floor) ? '' : addressInfo.floor || '');
        setValue('addressByType.soi', isEmptyStringFormApi(addressInfo.soi) ? '' : addressInfo.soi || '');
        setValue('addressByType.street', isEmptyStringFormApi(addressInfo.street) ? '' : addressInfo.street || '');
        setValue('addressByType.countryCode', isEmptyStringFormApi(addressInfo.countryCode) ? '' : addressInfo.countryCode || '');
        setValue('addressByType.zipCode', isEmptyStringFormApi(addressInfo.zipCode) ? '' : addressInfo.zipCode || '');
        setValue('addressByType.provinceCode', isEmptyStringFormApi(addressInfo.provinceCode) ? '' : addressInfo.provinceCode || '');
        setValue('addressByType.districtCode', isEmptyStringFormApi(addressInfo.districtCode) ? '' : addressInfo.districtCode || '');
        setValue('addressByType.subDistrictCode', isEmptyStringFormApi(addressInfo.subDistrictCode) ? '' : addressInfo.subDistrictCode || '');
        setValue('addressByType.customAddress1', isEmptyStringFormApi(addressInfo.customAddress1) ? '' : addressInfo.customAddress1 || '');
        setValue('addressByType.customAddress2', isEmptyStringFormApi(addressInfo.customAddress2) ? '' : addressInfo.customAddress2 || '');
        setValue('addressByType.customAddress3', isEmptyStringFormApi(addressInfo.customAddress3) ? '' : addressInfo.customAddress3 || '');
        setAddress({
            value: {
                postCode: addressInfo.zipCode || '',
                province: addressInfo.provinceNameTh || '',
                provinceCode: addressInfo.provinceCode || '',
                district: addressInfo.districtNameTh || '',
                districtCode: addressInfo.districtCode || '',
                subDistrict: addressInfo.subDistrictNameTh || '',
                subDistrictCode: addressInfo.subDistrictCode || '',
            },
            label: `${addressInfo.subDistrictNameTh} > ${addressInfo.districtNameTh} > ${addressInfo.provinceNameTh} > ${addressInfo.zipCode}`
        })
    }

    const getData = async () => {
        if (!watch('addressByType.addressNo')) {
            const list = getAddressBySearch('', 'postCode');
            if (list.length > 0)
                setAddress(list[0])
        }
        if (data) {
            setDefaultData(data)
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

    const setAddresHook = (address: AddressBySearchProps) => {
        setValue('addressByType.zipCode', address.value.postCode, { "shouldDirty": true });
        setValue('addressByType.provinceCode', address.value.provinceCode, { "shouldDirty": true });
        setValue('addressByType.districtCode', address.value.districtCode, { "shouldDirty": true });
        setValue('addressByType.subDistrictCode', address.value.subDistrictCode, { "shouldDirty": true });
    }

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
                    <InputHorizontal
                        label="เลขที่"
                        defaultValue={watch("addressByType.addressNo")}
                        textShow={data && normalizationData('addressNo', data) || "-"}
                        isEditable={isEditable}
                        // register={register}
                        name="addressNo"
                        onChange={(value) => setValue('addressByType.addressNo', value, { shouldDirty: true })}
                    />
                    <InputHorizontal
                        label="หมู่ที่"
                        defaultValue={watch("addressByType.moo")}
                        textShow={data && normalizationData('moo', data) || "-"}
                        isEditable={isEditable}
                        // register={register}
                        name="moo"
                        onChange={(value) => setValue('addressByType.moo', value, { shouldDirty: true })}
                    />
                    <InputHorizontal
                        label="หมู่บ้าน / อาคาร"
                        defaultValue={watch("addressByType.buildingOrVillage")}
                        textShow={data && normalizationData('buildingOrVillage', data) || "-"}
                        isEditable={isEditable}
                        // register={register}
                        name="buildingOrVillage"
                        onChange={(value) => setValue('addressByType.buildingOrVillage', value, { shouldDirty: true })}
                    />
                    <InputHorizontal
                        label="เลขที่ห้อง"
                        defaultValue={watch("addressByType.roomNo")}
                        textShow={data && normalizationData('roomNo', data) || "-"}
                        isEditable={isEditable}
                        // register={register}
                        name="roomNo"
                        onChange={(value) => setValue('addressByType.roomNo', value, { shouldDirty: true })}
                    />
                    <InputHorizontal
                        label="ชั้น"
                        defaultValue={watch("addressByType.floor")}
                        textShow={data && normalizationData('floor', data) || "-"}
                        isEditable={isEditable}
                        // register={register}
                        name="floor"
                        onChange={(value) => setValue('addressByType.floor', value, { shouldDirty: true })}
                    />
                    <InputHorizontal
                        label="ตรอก / ซอย"
                        defaultValue={watch("addressByType.soi")}
                        textShow={data && normalizationData('soi', data) || "-"}
                        isEditable={isEditable}
                        // register={register}
                        name="soi"
                        onChange={(value) => setValue('addressByType.soi', value, { shouldDirty: true })}
                    />
                    <InputHorizontal
                        label="ถนน"
                        defaultValue={watch("addressByType.street")}
                        textShow={data && normalizationData('street', data) || "-"}
                        isEditable={isEditable}
                        // register={register}
                        name="street"
                        onChange={(value) => setValue('addressByType.street', value, { shouldDirty: true })}
                    />
                    <InputHorizontal
                        label="ประเทศ"
                        defaultValue={watch("addressByType.countryCode")}
                        textShow={data && normalizationData('country', data) || "-"}
                        isEditable={isEditable}
                        // register={register}
                        name="countryCode"
                        isRequired
                        type="autocomplete"
                        list={countries}
                        onChange={(value) => {
                            if (value !== watch("addressByType.countryCode")) {
                                setValue('addressByType.countryCode', value, { shouldDirty: true });
                            }
                        }}
                        placeholder="โปรดเลือกประเทศ"
                    />
                    <InputHorizontal
                        label="รหัสไปรษณีย์"
                        defaultValueAddress={address}
                        textShow={data && normalizationData('zipCode', data) || "-"}
                        isEditable={isEditable}
                        // register={register}
                        name="zipCode"
                        isRequired
                        type="addressThailand"
                        addressList={thailandAddress}
                        placeholder="โปรดเลือกประเทศ"
                        addressOptionType="postCode"
                        onChangeAddress={(item) => {
                            setAddress(item)
                            setAddresHook(item);
                        }}
                        onChange={(text) => {
                            getAddress(text, 'postCode')
                        }}
                    />
                    {
                        watch("addressByType.countryCode") !== '000'
                            ?
                            <>
                                <InputHorizontal
                                    label="ที่อยู่ 1"
                                    defaultValue={data && normalizationData('customAddress1', data) || ""}
                                    textShow={data && normalizationData('customAddress1', data) || "-"}
                                    onChange={(value) => setValue('addressByType.customAddress1', value, { shouldDirty: true })}
                                    isEditable={isEditable}
                                    name="customAddress1"
                                    isRequired
                                />
                                <InputHorizontal
                                    label="ที่อยู่ 2"
                                    defaultValue={data && normalizationData('customAddress2', data) || ""}
                                    textShow={data && normalizationData('customAddress2', data) || "-"}
                                    onChange={(value) => setValue('addressByType.customAddress2', value, { shouldDirty: true })}
                                    isEditable={isEditable}
                                    name="customAddress2"
                                    isRequired
                                />
                                <InputHorizontal
                                    label="ที่อยู่ 3"
                                    defaultValue={data && normalizationData('customAddress3', data) || "-"}
                                    textShow={data && normalizationData('customAddress3', data) || "-"}
                                    onChange={(value) => setValue('addressByType.customAddress3', value, { shouldDirty: true })}
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
                                    // register={register}
                                    name="provinceCode"
                                    isRequired
                                    type="addressThailand"
                                    addressList={thailandAddress}
                                    placeholder="โปรดเลือกจังหวัด"
                                    addressOptionType="province"
                                    onChangeAddress={(item) => {
                                        setAddress(item)
                                        setAddresHook(item);
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
                                    // register={register}
                                    name="districtCode"
                                    isRequired
                                    type="addressThailand"
                                    addressList={thailandAddress}
                                    placeholder="โปรดเลือกอำเภอ / เขต"
                                    addressOptionType="district"
                                    onChangeAddress={(item) => {
                                        setAddress(item);
                                        setAddresHook(item);
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
                                    // register={register}
                                    name="subDistrictCode"
                                    isRequired
                                    type="addressThailand"
                                    addressList={thailandAddress}
                                    placeholder="โปรดเลือกตำบล / แขวง"
                                    addressOptionType="subDistrict"
                                    onChangeAddress={(item) => {
                                        setAddress(item);
                                        setAddresHook(item);
                                    }}
                                    onChange={(text) => {
                                        getAddress(text, 'subDistrict')
                                    }}
                                />
                            </>
                    }
                </div>
            </ContentLoading>
        </>
    )
}