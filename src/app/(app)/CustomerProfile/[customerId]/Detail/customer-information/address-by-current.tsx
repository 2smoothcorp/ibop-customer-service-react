"use client"

import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import InputRadio from "@/components/custom/input-radio";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataCountriesCustom } from "@/hooks/masterDataCountries";
import { CusomterInformationState } from "@/libs/redux/store/customer-information-slice";
import { AddressInfoModel, AddressInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { AddressBySearchModeProps, AddressBySearchProps, getAddressBySearch, handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

export default function AddressByCurrent({ useForm }: { useForm: UseFormReturn<CusomterInformationState, any, undefined> }) {
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
        queryKey: ['addressByCurrent', params.customerId],
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

    const setDefaultData = (addressInfo: AddressInfoModel) => {
        setValue('addressByCurrent.addressType', '02');
        setValue('addressByCurrent.addressNo', isEmptyStringFormApi(addressInfo.addressNo) ? '' : addressInfo.addressNo || '');
        setValue('addressByCurrent.moo', isEmptyStringFormApi(addressInfo.moo) ? '' : addressInfo.moo || '');
        setValue('addressByCurrent.buildingOrVillage', isEmptyStringFormApi(addressInfo.buildingOrVillage) ? '' : addressInfo.buildingOrVillage || '');
        setValue('addressByCurrent.roomNo', isEmptyStringFormApi(addressInfo.roomNo) ? '' : addressInfo.roomNo || '');
        setValue('addressByCurrent.floor', isEmptyStringFormApi(addressInfo.floor) ? '' : addressInfo.floor || '');
        setValue('addressByCurrent.soi', isEmptyStringFormApi(addressInfo.soi) ? '' : addressInfo.soi || '');
        setValue('addressByCurrent.street', isEmptyStringFormApi(addressInfo.street) ? '' : addressInfo.street || '');
        setValue('addressByCurrent.countryCode', isEmptyStringFormApi(addressInfo.countryCode) ? '' : addressInfo.countryCode || '');
        setValue('addressByCurrent.zipCode', isEmptyStringFormApi(addressInfo.zipCode) ? '' : addressInfo.zipCode || '');
        setValue('addressByCurrent.provinceCode', isEmptyStringFormApi(addressInfo.provinceCode) ? '' : addressInfo.provinceCode || '');
        setValue('addressByCurrent.districtCode', isEmptyStringFormApi(addressInfo.districtCode) ? '' : addressInfo.districtCode || '');
        setValue('addressByCurrent.subDistrictCode', isEmptyStringFormApi(addressInfo.subDistrictCode) ? '' : addressInfo.subDistrictCode || '');
        setValue('addressByCurrent.customAddress1', isEmptyStringFormApi(addressInfo.customAddress1) ? '' : addressInfo.customAddress1 || '');
        setValue('addressByCurrent.customAddress2', isEmptyStringFormApi(addressInfo.customAddress2) ? '' : addressInfo.customAddress2 || '');
        setValue('addressByCurrent.customAddress3', isEmptyStringFormApi(addressInfo.customAddress3) ? '' : addressInfo.customAddress3 || '');
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
        if (!watch('addressByCurrent.addressNo')) {
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
                const request = await fetch(`/api/customer-profile/address-info/${customerId}/02`, { method: 'GET' });
                const response: AddressInfoResponseDataResponse = await request.json();
                // console.log('data', response)
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
                title="ที่อยู่ปัจจุบันที่ติดต่อได้"
            />
            <ContentLoading
                isLoading={isLoading || isLoadingCountries}
                error={error && error.message || undefined}
                hight={184}
            >
                <div className="w-full px-10">
                    <InputRadio
                        defaultValue={watch("addressByCurrent.addressType")}
                        onChange={(value) => setValue('addressByCurrent.addressType', value as "01" | "02")}
                        name={"addressType"}
                        list={[
                            { value: '01', label: 'ตามประเภทหลักฐาน' },
                            { value: '02', label: 'อื่นๆ (โปรดระบุข้อมูลด้านล่างนี้)' }
                        ]} />
                </div>
                {
                    watch("addressByCurrent.addressType") === '02' && <div className="grid grid-cols-3">
                        <InputHorizontal
                            label="เลขที่"
                            defaultValue={watch("addressByCurrent.addressNo")}
                            textShow={data && normalizationData('addressNo', data) || "-"}
                            isEditable={isEditable}
                            // register={register}
                            name="addressNo"
                            onChange={(value) => setValue('addressByCurrent.addressNo', value)}
                        />
                        <InputHorizontal
                            label="หมู่ที่"
                            defaultValue={watch("addressByCurrent.moo")}
                            textShow={data && normalizationData('moo', data) || "-"}
                            isEditable={isEditable}
                            // register={register}
                            name="moo"
                            onChange={(value) => setValue('addressByCurrent.moo', value)}
                        />
                        <InputHorizontal
                            label="หมู่บ้าน / อาคาร"
                            defaultValue={watch("addressByCurrent.buildingOrVillage")}
                            textShow={data && normalizationData('buildingOrVillage', data) || "-"}
                            isEditable={isEditable}
                            // register={register}
                            name="buildingOrVillage"
                            onChange={(value) => setValue('addressByCurrent.buildingOrVillage', value)}
                        />
                        <InputHorizontal
                            label="เลขที่ห้อง"
                            defaultValue={watch("addressByCurrent.roomNo")}
                            textShow={data && normalizationData('roomNo', data) || "-"}
                            isEditable={isEditable}
                            // register={register}
                            name="roomNo"
                            onChange={(value) => setValue('addressByCurrent.roomNo', value)}
                        />
                        <InputHorizontal
                            label="ชั้น"
                            defaultValue={watch("addressByCurrent.floor")}
                            textShow={data && normalizationData('floor', data) || "-"}
                            isEditable={isEditable}
                            // register={register}
                            name="floor"
                            onChange={(value) => setValue('addressByCurrent.floor', value)}
                        />
                        <InputHorizontal
                            label="ตรอก / ซอย"
                            defaultValue={watch("addressByCurrent.soi")}
                            textShow={data && normalizationData('soi', data) || "-"}
                            isEditable={isEditable}
                            // register={register}
                            name="soi"
                            onChange={(value) => setValue('addressByCurrent.soi', value)}
                        />
                        <InputHorizontal
                            label="ถนน"
                            defaultValue={watch("addressByCurrent.street")}
                            textShow={data && normalizationData('street', data) || "-"}
                            isEditable={isEditable}
                            // register={register}
                            name="street"
                            onChange={(value) => setValue('addressByCurrent.street', value)}
                        />
                        <InputHorizontal
                            label="ประเทศ"
                            defaultValue={watch("addressByCurrent.countryCode")}
                            textShow={data && normalizationData('country', data) || "-"}
                            isEditable={isEditable}
                            // register={register}
                            name="country"
                            isRequired
                            type="autocomplete"
                            list={countries}
                            onChange={(value) => {
                                if (value !== watch("addressByCurrent.countryCode")) {
                                    setValue('addressByCurrent.countryCode', value);
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
                            watch("addressByCurrent.countryCode") !== '000'
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
                }
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