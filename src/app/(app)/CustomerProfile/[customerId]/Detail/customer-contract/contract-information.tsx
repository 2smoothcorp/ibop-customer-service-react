"use client"

import ContentLabel from "@/components/content/content-label";
import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { DocReceiveAddressInfoModel, DocReceiveAddressInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContractInformation() {
    const params = useParams()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
        getValues,
    } = useForm<SubmitInput>()
    const [isEditable, setIsEditable] = React.useState<boolean>(false);

    const { data, isLoading, error } = useQuery({
        queryKey: ['contractInformation', params.customerId],
        queryFn: () => getData(),
    })

    // const personalInfo = useAppSelector(state => state.customerInformation.personalInfo)

    // useEffect(() => {
    //     console.log(`cusomterContract`, personalInfo)
    // }, [personalInfo])

    const normalizationData = (name: string, addressInfo: DocReceiveAddressInfoModel): any => {
        switch (name) {
            case 'docReceiveChannel':
                if (addressInfo.docReceiveChannel === 'POST') {
                    return 'ไปรษณีย์';
                } else if (addressInfo.docReceiveChannel === 'EMAIL') {
                    return 'อีเมล';
                }
                return handleEmptyStringFormApi(addressInfo.docReceiveChannel);
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
        setValue('docReceiveChannel', handleEmptyStringFormApi(addressInfo.docReceiveChannel));
        setValue('addressNo', normalizationData('addressNo', addressInfo));
        setValue('moo', normalizationData('moo', addressInfo));
        setValue('buildingOrVillage', normalizationData('buildingOrVillage', addressInfo));
        setValue('roomNo', normalizationData('roomNo', addressInfo));
        setValue('floor', normalizationData('floor', addressInfo));
        setValue('soi', normalizationData('soi', addressInfo));
        setValue('street', normalizationData('street', addressInfo));
        setValue('countryCode', normalizationData('countryCode', addressInfo));
        setValue('country', normalizationData('country', addressInfo));
        setValue('zipCode', normalizationData('zipCode', addressInfo));
        setValue('province', normalizationData('province', addressInfo));
        setValue('district', normalizationData('district', addressInfo));
        setValue('subDistrict', normalizationData('subDistrict', addressInfo));
        setValue('mobileNo', normalizationData('mobileNo', addressInfo));
        setValue('officeNo', normalizationData('officeNo', addressInfo));
        setValue('email', normalizationData('email', addressInfo));
        setValue('customAddress1', normalizationData('customAddress1', addressInfo));
        setValue('customAddress2', normalizationData('customAddress2', addressInfo));
        setValue('customAddress3', normalizationData('customAddress3', addressInfo));
    }

    const getData = async () => {
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

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="ข้อมูลการติดต่อ CONTRACT INFORMATION"
            />
            <ContentLoading
                isLoading={isLoading}
                error={error && error.message || undefined}
                hight={184}
            >
                <div className="px-2">
                    <ContentLabel
                        label="วิธีการรับเอกสาร Mailing Method (กรุณาเลือกเพียง 1 ช่องทาง)"
                    >
                        {data && normalizationData('docReceiveChannel', data) || "-"}
                    </ContentLabel>
                </div>
                <div className="px-2 pt-2">
                    <ContentLabel
                        label="ที่อยู่ติดต่อทางไปรษณีย์กรณีบริษัทส่งเอกสารอื่นๆ รวมถึงเอกสารจากนายทะเบียนหลักทรัพย์/ศูนย์รับฝากหลักทรัพย์ฯ ที่ต้องติดต่อทางไปรษณีย์ (กรุณาระบุข้อความให้ครบถ้วนแม้ว่าท่านจะได้ระบุวิธีการรับเอกสารทางอีเมล)"
                    >
                        ที่อยู่ปัจจุบันที่ติดต่อได้
                    </ContentLabel>
                </div>

                <div className="grid grid-cols-3">
                    <InputHorizontal
                        label="เลขที่"
                        defaultValue={data && normalizationData('addressNo', data) || "-"}
                        isEditable={isEditable}
                        name="addressNo"
                    />
                    <InputHorizontal
                        label="หมู่ที่"
                        defaultValue={data && normalizationData('moo', data) || "-"}
                        isEditable={isEditable}
                        name="moo"
                    />
                    <InputHorizontal
                        label="หมู่บ้าน / อาคาร"
                        defaultValue={data && normalizationData('buildingOrVillage', data) || "-"}
                        isEditable={isEditable}
                        name="buildingOrVillage"
                    />
                    <InputHorizontal
                        label="เลขที่ห้อง"
                        defaultValue={data && normalizationData('roomNo', data) || "-"}
                        isEditable={isEditable}
                        name="roomNo"
                    />
                    <InputHorizontal
                        label="ชั้น"
                        defaultValue={data && normalizationData('floor', data) || "-"}
                        isEditable={isEditable}
                        name="floor"
                    />
                    <InputHorizontal
                        label="ตรอก / ซอย"
                        defaultValue={data && normalizationData('soi', data) || "-"}
                        isEditable={isEditable}
                        name="soi"
                    />
                    <InputHorizontal
                        label="ถนน"
                        defaultValue={data && normalizationData('street', data) || "-"}
                        isEditable={isEditable}
                        name="street"
                    />
                    <InputHorizontal
                        label="ประเทศ"
                        defaultValue={data && normalizationData('country', data) || "-"}
                        isEditable={isEditable}
                        name="country"
                        isRequired
                    />
                    <InputHorizontal
                        label="รหัสไปรษณีย์"
                        defaultValue={data && normalizationData('zipCode', data) || "-"}
                        isEditable={isEditable}
                        name="zipCode"
                        isRequired
                    />
                    {
                        data && data.countryCode !== '000'
                            ? <>
                                <InputHorizontal
                                    label="ที่อยู่ 1"
                                    defaultValue={data && normalizationData('customAddress1', data) || "-"}
                                    isEditable={isEditable}
                                    name="customAddress1"
                                    isRequired
                                />
                                <InputHorizontal
                                    label="ที่อยู่ 2"
                                    defaultValue={data && normalizationData('customAddress2', data) || "-"}
                                    isEditable={isEditable}
                                    name="customAddress2"
                                    isRequired
                                />
                                <InputHorizontal
                                    label="ที่อยู่ 3"
                                    defaultValue={data && normalizationData('customAddress3', data) || "-"}
                                    isEditable={isEditable}
                                    name="customAddress3"
                                    isRequired
                                />
                            </>
                            : <>
                                <InputHorizontal
                                    label="จังหวัด"
                                    defaultValue={data && normalizationData('province', data) || "-"}
                                    isEditable={isEditable}
                                    name="province"
                                    isRequired
                                />
                                <InputHorizontal
                                    label="อำเภอ / เขต"
                                    defaultValue={data && normalizationData('district', data) || "-"}
                                    isEditable={isEditable}
                                    name="district"
                                    isRequired
                                />
                                <InputHorizontal
                                    label="ตำบล / แขวง"
                                    defaultValue={data && normalizationData('subDistrict', data) || "-"}
                                    isEditable={isEditable}
                                    name="subDistrict"
                                    isRequired
                                />
                            </>
                    }

                    <InputHorizontal
                        label="โทรศัพท์มือถือ"
                        defaultValue={data && normalizationData('mobileNo', data) || "-"}
                        isEditable={isEditable}
                        name="mobileNo"
                        isRequired
                    />
                    <InputHorizontal
                        label="โทรศัพท์พื้นฐาน"
                        defaultValue={data && normalizationData('officeNo', data) || "-"}
                        isEditable={isEditable}
                        name="officeNo"
                        isRequired
                    />
                    <InputHorizontal
                        label="อีเมล"
                        defaultValue={data && normalizationData('email', data) || "-"}
                        isEditable={isEditable}
                        name="email"
                        isRequired
                    />
                </div>
            </ContentLoading>

        </>
    )
}

interface SubmitInput {
    docReceiveChannel: string;
    addressNo: string;
    moo: string;
    buildingOrVillage: string;
    roomNo: string;
    floor: string;
    soi: string;
    street: string;
    countryCode: string;
    country: string;
    zipCode: string;
    province: string;
    district: string;
    subDistrict: string;
    mobileNo: string;
    officeNo: string;
    email: string;
    customAddress1: string;
    customAddress2: string;
    customAddress3: string;
}