"use client"

import ContentLabel from "@/components/content/content-label";
import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import InputRadio from "@/components/custom/input-radio";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataCountriesCustom } from "@/hooks/masterDataCountries";
import { CustomerContractState } from "@/libs/redux/store/customer-contract-slice";
import { DocReceiveAddressInfoModel, DocReceiveAddressInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { AddressBySearchModeProps, AddressBySearchProps, getAddressBySearch, handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

export default function ContractInformation({ useForm }: { useForm: UseFormReturn<CustomerContractState, any, undefined> }) {
    const { setValue, watch } = useForm
    const params = useParams()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';
    const [thailandAddress, setThailandAddress] = useState<AddressBySearchProps[]>([]);
    const [address, setAddress] = useState<AddressBySearchProps | undefined>();

    const { data: countries, isLoading: isLoadingCountries } = useMasterDataCountriesCustom();

    const { data, isLoading, error } = useQuery({
        queryKey: ['contractInformation', params.customerId],
        queryFn: () => getData(),
    })

    const getAddress = async (search: string, mode: AddressBySearchModeProps) => {
        const list = getAddressBySearch(search, mode);
        setThailandAddress(list);
    }

    const normalizationData = (name: string, addressInfo: DocReceiveAddressInfoModel): any => {
        switch (name) {
            case 'docReceiveChannel':
                if (addressInfo.docReceiveChannel === 'POST') {
                    return 'ไปรษณีย์';
                } else if (addressInfo.docReceiveChannel === 'EMAIL') {
                    return 'อีเมล';
                }
                return handleEmptyStringFormApi(addressInfo.docReceiveChannel);
            case 'docReceiveAddressType':
                return handleEmptyStringFormApi(addressInfo.docReceiveAddressType);
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
            case 'mobileNo':
                return handleEmptyStringFormApi(addressInfo.mobileNo);
            case 'officeNo':
                return handleEmptyStringFormApi(addressInfo.officeNo);
            case 'email':
                return handleEmptyStringFormApi(addressInfo.email);
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

    const setDefaultData = (addressInfo: DocReceiveAddressInfoModel) => {
        setValue('contractInformation.docReceiveChannel', handleEmptyStringFormApi(addressInfo.docReceiveChannel));
        setValue('contractInformation.docReceiveAddressType', handleEmptyStringFormApi(addressInfo.docReceiveAddressType));
        setValue('contractInformation.addressNo', normalizationData('addressNo', addressInfo));
        setValue('contractInformation.moo', normalizationData('moo', addressInfo));
        setValue('contractInformation.buildingOrVillage', normalizationData('buildingOrVillage', addressInfo));
        setValue('contractInformation.roomNo', normalizationData('roomNo', addressInfo));
        setValue('contractInformation.floor', normalizationData('floor', addressInfo));
        setValue('contractInformation.soi', normalizationData('soi', addressInfo));
        setValue('contractInformation.street', normalizationData('street', addressInfo));
        setValue('contractInformation.countryCode', normalizationData('countryCode', addressInfo));
        setValue('contractInformation.country', normalizationData('country', addressInfo));
        setValue('contractInformation.zipCode', normalizationData('zipCode', addressInfo));
        setValue('contractInformation.province', normalizationData('province', addressInfo));
        setValue('contractInformation.district', normalizationData('district', addressInfo));
        setValue('contractInformation.subDistrict', normalizationData('subDistrict', addressInfo));
        setValue('contractInformation.mobileNo', normalizationData('mobileNo', addressInfo));
        setValue('contractInformation.officeNo', normalizationData('officeNo', addressInfo));
        setValue('contractInformation.email', normalizationData('email', addressInfo));
        setValue('contractInformation.customAddress1', normalizationData('customAddress1', addressInfo));
        setValue('contractInformation.customAddress2', normalizationData('customAddress2', addressInfo));
        setValue('contractInformation.customAddress3', normalizationData('customAddress3', addressInfo));
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
        if (!watch('contractInformation.addressNo')) {
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
                // const request = await fetch(`/api/customer-profile/address-info/${customerId}/04`, { method: 'GET' });
                // const response: AddressInfoResponseDataResponse = await request.json();
                const request = await fetch(`/api/customer-profile/contract-address/${customerId}`, { method: 'GET' });
                const response: DocReceiveAddressInfoResponseDataResponse = await request.json();
                if (response.status == 200) {
                    const { data } = response;
                    if (data && data.addressInfoModel) {
                        // console.log(data.addressInfoModel)
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
        setValue('contractInformation.zipCode', address.value.postCode, { "shouldDirty": true });
        setValue('contractInformation.provinceCode', address.value.provinceCode, { "shouldDirty": true });
        setValue('contractInformation.districtCode', address.value.districtCode, { "shouldDirty": true });
        setValue('contractInformation.subDistrictCode', address.value.subDistrictCode, { "shouldDirty": true });
    }

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="ข้อมูลการติดต่อ CONTRACT INFORMATION"
            />
            <ContentLoading
                isLoading={isLoading || isLoadingCountries}
                error={error && error.message || undefined}
                hight={184}
            >
                <div className="px-2">
                    <ContentLabel
                        label="วิธีการรับเอกสาร Mailing Method (กรุณาเลือกเพียง 1 ช่องทาง)"
                    >
                        {
                            isEditable ? (
                                <InputRadio
                                    name={"politicianRelation"}
                                    defaultValue={watch('contractInformation.docReceiveChannel') || 'EMAIL'}
                                    list={[
                                        { label: "อีเมล", value: 'EMAIL' },
                                        { label: "ไปรษณีย์", value: 'POST' },
                                    ]}
                                    onChange={(value) => setValue('contractInformation.docReceiveChannel', value, { shouldDirty: true })}
                                />
                            ) : data && normalizationData('docReceiveChannel', data) || "-"
                        }
                    </ContentLabel>
                </div>
                <div className="px-2 pt-2">
                    <ContentLabel
                        label="ที่อยู่ติดต่อทางไปรษณีย์กรณีบริษัทส่งเอกสารอื่นๆ รวมถึงเอกสารจากนายทะเบียนหลักทรัพย์/ศูนย์รับฝากหลักทรัพย์ฯ ที่ต้องติดต่อทางไปรษณีย์ (กรุณาระบุข้อความให้ครบถ้วนแม้ว่าท่านจะได้ระบุวิธีการรับเอกสารทางอีเมล)"
                    >
                        {
                            isEditable ? (
                                <InputRadio
                                    name={"politicianRelation"}
                                    defaultValue={watch('contractInformation.docReceiveAddressType') || '04'}
                                    list={[
                                        { value: "01", label: "ตามประเภทหลักฐาน" },
                                        { value: "02", label: "ตามที่อยู่ปัจจุบัน" },
                                        { value: "03", label: "ตามที่อยู่สถานที่ทำงาน" },
                                        { value: "04", label: "อื่นๆ (โปรดระบุข้อมูลด้านล่างนี้)" }

                                    ]}
                                    onChange={(value) => setValue('contractInformation.docReceiveAddressType', value, { shouldDirty: true })}
                                />
                            ) : 'ที่อยู่ปัจจุบันที่ติดต่อได้'
                            //  data && normalizationData('docReceiveChannel', data) || "-"
                        }

                    </ContentLabel>
                </div>
                {
                    watch('contractInformation.docReceiveAddressType') === '04' && (
                        <div className="grid grid-cols-3">
                            <InputHorizontal
                                label="เลขที่"
                                defaultValue={watch("contractInformation.addressNo")}
                                textShow={data && normalizationData('addressNo', data) || "-"}
                                isEditable={isEditable}
                                // register={register}
                                name="addressNo"
                                onChange={(value) => setValue('contractInformation.addressNo', value, { shouldDirty: true })}
                            />
                            <InputHorizontal
                                label="หมู่ที่"
                                defaultValue={watch("contractInformation.moo")}
                                textShow={data && normalizationData('moo', data) || "-"}
                                isEditable={isEditable}
                                // register={register}
                                name="moo"
                                onChange={(value) => setValue('contractInformation.moo', value, { shouldDirty: true })}
                            />
                            <InputHorizontal
                                label="หมู่บ้าน / อาคาร"
                                defaultValue={watch("contractInformation.buildingOrVillage")}
                                textShow={data && normalizationData('buildingOrVillage', data) || "-"}
                                isEditable={isEditable}
                                // register={register}
                                name="buildingOrVillage"
                                onChange={(value) => setValue('contractInformation.buildingOrVillage', value, { shouldDirty: true })}
                            />
                            <InputHorizontal
                                label="เลขที่ห้อง"
                                defaultValue={watch("contractInformation.roomNo")}
                                textShow={data && normalizationData('roomNo', data) || "-"}
                                isEditable={isEditable}
                                // register={register}
                                name="roomNo"
                                onChange={(value) => setValue('contractInformation.roomNo', value, { shouldDirty: true })}
                            />
                            <InputHorizontal
                                label="ชั้น"
                                defaultValue={watch("contractInformation.floor")}
                                textShow={data && normalizationData('floor', data) || "-"}
                                isEditable={isEditable}
                                // register={register}
                                name="floor"
                                onChange={(value) => setValue('contractInformation.floor', value, { shouldDirty: true })}
                            />
                            <InputHorizontal
                                label="ตรอก / ซอย"
                                defaultValue={watch("contractInformation.soi")}
                                textShow={data && normalizationData('soi', data) || "-"}
                                isEditable={isEditable}
                                // register={register}
                                name="soi"
                                onChange={(value) => setValue('contractInformation.soi', value, { shouldDirty: true })}
                            />
                            <InputHorizontal
                                label="ถนน"
                                defaultValue={watch("contractInformation.street")}
                                textShow={data && normalizationData('street', data) || "-"}
                                isEditable={isEditable}
                                // register={register}
                                name="street"
                                onChange={(value) => setValue('contractInformation.street', value, { shouldDirty: true })}
                            />
                            <InputHorizontal
                                label="ประเทศ"
                                defaultValue={watch("contractInformation.countryCode")}
                                textShow={data && normalizationData('country', data) || "-"}
                                isEditable={isEditable}
                                // register={register}
                                name="country"
                                isRequired
                                type="autocomplete"
                                list={countries}
                                onChange={(value) => {
                                    if (value !== watch("contractInformation.countryCode")) {
                                        setValue('contractInformation.countryCode', value, { shouldDirty: true });
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
                                    setAddresHook(item)
                                }}
                                onChange={(text) => {
                                    getAddress(text, 'postCode')
                                }}
                            />
                            {
                                watch("contractInformation.countryCode") !== '000'
                                    ?
                                    <>
                                        <InputHorizontal
                                            label="ที่อยู่ 1"
                                            defaultValue={data && normalizationData('customAddress1', data) || ""}
                                            textShow={data && normalizationData('customAddress1', data) || "-"}
                                            onChange={(value) => setValue('contractInformation.customAddress1', value, { shouldDirty: true })}
                                            isEditable={isEditable}
                                            name="customAddress1"
                                            isRequired
                                        />
                                        <InputHorizontal
                                            label="ที่อยู่ 2"
                                            defaultValue={data && normalizationData('customAddress2', data) || ""}
                                            textShow={data && normalizationData('customAddress2', data) || "-"}
                                            onChange={(value) => setValue('contractInformation.customAddress2', value, { shouldDirty: true })}
                                            isEditable={isEditable}
                                            name="customAddress2"
                                            isRequired
                                        />
                                        <InputHorizontal
                                            label="ที่อยู่ 3"
                                            defaultValue={data && normalizationData('customAddress3', data) || "-"}
                                            textShow={data && normalizationData('customAddress3', data) || "-"}
                                            onChange={(value) => setValue('contractInformation.customAddress3', value, { shouldDirty: true })}
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
                                            // register={register}
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
                                            // register={register}
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

                            <InputHorizontal
                                label="โทรศัพท์มือถือ"
                                defaultValue={data && normalizationData('mobileNo', data) || ""}
                                textShow={data && normalizationData('mobileNo', data) || "-"}
                                isEditable={isEditable}
                                name="mobileNo"
                                isRequired
                                onChange={(value) => setValue('contractInformation.mobileNo', value, { shouldDirty: true })}
                            />
                            <InputHorizontal
                                label="โทรศัพท์พื้นฐาน"
                                defaultValue={data && normalizationData('officeNo', data) || ""}
                                textShow={data && normalizationData('officeNo', data) || "-"}
                                isEditable={isEditable}
                                name="officeNo"
                                isRequired
                                onChange={(value) => setValue('contractInformation.officeNo', value, { shouldDirty: true })}
                            />
                            <InputHorizontal
                                label="อีเมล"
                                defaultValue={data && normalizationData('email', data) || ""}
                                textShow={data && normalizationData('email', data) || "-"}
                                isEditable={isEditable}
                                name="email"
                                isRequired
                                onChange={(value) => setValue('contractInformation.email', value, { shouldDirty: true })}
                            />
                        </div>
                    )
                }
            </ContentLoading>

        </>
    )
}