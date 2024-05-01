"use client"


import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataCountriesCustom } from "@/hooks/masterDataCountries";
import { AddressInfoModel, AddressInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { AddressBySearchModeProps, AddressBySearchProps, getAddressBySearch, handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddressByType() {
    const [thailandAddress, setThailandAddress] = useState<AddressBySearchProps[]>([]);
    const [address, setAddress] = useState<AddressBySearchProps | undefined>();
    const params = useParams()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
        getValues,
    } = useForm<SubmitInput>()

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

        setValue('addressNo', isEmptyStringFormApi(addressInfo.addressNo) ? '' : addressInfo.addressNo || '');
        setValue('moo', isEmptyStringFormApi(addressInfo.moo) ? '' : addressInfo.moo || '');
        setValue('buildingOrVillage', isEmptyStringFormApi(addressInfo.buildingOrVillage) ? '' : addressInfo.buildingOrVillage || '');
        setValue('roomNo', isEmptyStringFormApi(addressInfo.roomNo) ? '' : addressInfo.roomNo || '');
        setValue('floor', isEmptyStringFormApi(addressInfo.floor) ? '' : addressInfo.floor || '');
        setValue('soi', isEmptyStringFormApi(addressInfo.soi) ? '' : addressInfo.soi || '');
        setValue('street', isEmptyStringFormApi(addressInfo.street) ? '' : addressInfo.street || '');
        setValue('countryCode', isEmptyStringFormApi(addressInfo.countryCode) ? '' : addressInfo.countryCode || '');
        setValue('zipCode', isEmptyStringFormApi(addressInfo.zipCode) ? '' : addressInfo.zipCode || '');
        setValue('provinceCode', isEmptyStringFormApi(addressInfo.provinceCode) ? '' : addressInfo.provinceCode || '');
        setValue('districtCode', isEmptyStringFormApi(addressInfo.districtCode) ? '' : addressInfo.districtCode || '');
        setValue('subDistrictCode', isEmptyStringFormApi(addressInfo.subDistrictCode) ? '' : addressInfo.subDistrictCode || '');
        setValue('customAddress1', isEmptyStringFormApi(addressInfo.customAddress1) ? '' : addressInfo.customAddress1 || '');
        setValue('customAddress2', isEmptyStringFormApi(addressInfo.customAddress2) ? '' : addressInfo.customAddress2 || '');
        setValue('customAddress3', isEmptyStringFormApi(addressInfo.customAddress3) ? '' : addressInfo.customAddress3 || '');
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
                        defaultValue={data && normalizationData('addressNo', data) || "-"}
                        isEditable={isEditable}
                        register={register}
                        name="addressNo"
                    />
                    <InputHorizontal
                        label="หมู่ที่"
                        defaultValue={data && normalizationData('moo', data) || "-"}
                        isEditable={isEditable}
                        register={register}
                        name="moo"
                    />
                    <InputHorizontal
                        label="หมู่บ้าน / อาคาร"
                        defaultValue={data && normalizationData('buildingOrVillage', data) || "-"}
                        isEditable={isEditable}
                        register={register}
                        name="buildingOrVillage"
                    />
                    <InputHorizontal
                        label="เลขที่ห้อง"
                        defaultValue={data && normalizationData('roomNo', data) || "-"}
                        isEditable={isEditable}
                        register={register}
                        name="roomNo"
                    />
                    <InputHorizontal
                        label="ชั้น"
                        defaultValue={data && normalizationData('floor', data) || "-"}
                        isEditable={isEditable}
                        register={register}
                        name="floor"
                    />
                    <InputHorizontal
                        label="ตรอก / ซอย"
                        defaultValue={data && normalizationData('soi', data) || "-"}
                        isEditable={isEditable}
                        register={register}
                        name="soi"
                    />
                    <InputHorizontal
                        label="ถนน"
                        defaultValue={data && normalizationData('street', data) || "-"}
                        isEditable={isEditable}
                        register={register}
                        name="street"
                    />
                    <InputHorizontal
                        label="ประเทศ"
                        defaultValue={data && normalizationData('countryCode', data) || undefined}
                        textShow={data && normalizationData('country', data) || "-"}
                        isEditable={isEditable}
                        register={register}
                        name="countryCode"
                        isRequired
                        type="autocomplete"
                        list={countries}
                        onChange={(value) => {
                            if (value !== watch("countryCode")) {
                                setValue('countryCode', value);
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
                        onChangeAddress={(item) => { setAddress(item) }}
                        onChange={(text) => {
                            getAddress(text, 'postCode')
                        }}
                    />
                    {
                        watch("countryCode") !== '000'
                            ?
                            <>
                                <InputHorizontal
                                    label="ที่อยู่ 1"
                                    defaultValue={data && normalizationData('customAddress1', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="customAddress1"
                                    isRequired
                                />
                                <InputHorizontal
                                    label="ที่อยู่ 2"
                                    defaultValue={data && normalizationData('customAddress2', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
                                    name="customAddress2"
                                    isRequired
                                />
                                <InputHorizontal
                                    label="ที่อยู่ 3"
                                    defaultValue={data && normalizationData('customAddress3', data) || "-"}
                                    isEditable={isEditable}
                                    register={register}
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
                                    onChangeAddress={(item) => { setAddress(item) }}
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
                                    onChangeAddress={(item) => { setAddress(item) }}
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
                                    onChangeAddress={(item) => { setAddress(item) }}
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

interface SubmitInput {
    addressNo: string;
    moo: string;
    buildingOrVillage: string;
    roomNo: string;
    floor: string;
    soi: string;
    street: string;
    country: string;
    countryCode: string;
    zipCode: string;
    provinceCode: string;
    districtCode: string;
    subDistrictCode: string;
    customAddress1: string;
    customAddress2: string;
    customAddress3: string;
}