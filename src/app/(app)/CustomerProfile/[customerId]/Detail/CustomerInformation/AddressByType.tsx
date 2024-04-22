"use client"

import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import { useParams } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { getAddressByType } from "./addressByType.action";

export default function AddressByType() {
    const params = useParams()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        setValue,
        getValues,
    } = useForm<SubmitInput>()
    const [isReady, setIsReady] = React.useState<boolean>(false);
    const [isEditable, setIsEditable] = React.useState<boolean>(false);

    const [getAddressByTypeState, getAddressByTypeAction] = useFormState(getAddressByType, {
        data: undefined,
        success: false,
        error: undefined
    })

    React.useEffect(() => {
        if (!getAddressByTypeState.success && getAddressByTypeState?.error) {
            setIsReady(true);
        }
        // console.log('getAddressByTypeState', getAddressByTypeState)
        if (getAddressByTypeState.success) {
            const { data } = getAddressByTypeState
            // console.log(data?.data?.addressInfoModel);
            if (data?.data && data?.data?.addressInfoModel) {
                const { data: { addressInfoModel } } = data;
                // console.log(addressInfoModel);
                setValue('addressNo', handleEmptyStringFormApi(addressInfoModel?.addressNo));
                setValue('moo', handleEmptyStringFormApi(addressInfoModel?.moo));
                setValue('buildingOrVillage', handleEmptyStringFormApi(addressInfoModel?.buildingOrVillage));
                setValue('roomNo', handleEmptyStringFormApi(addressInfoModel?.roomNo));
                setValue('floor', handleEmptyStringFormApi(addressInfoModel?.floor));
                setValue('soi', handleEmptyStringFormApi(addressInfoModel?.soi));
                setValue('street', handleEmptyStringFormApi(addressInfoModel?.street));
                setValue('country', !isEmptyStringFormApi(addressInfoModel?.countryCode) ? `${addressInfoModel?.countryCode} - ${addressInfoModel?.countryDesc}` : '-');
                setValue('zipCode', handleEmptyStringFormApi(addressInfoModel?.zipCode));
                setValue('province', !isEmptyStringFormApi(addressInfoModel?.provinceCode) ? `${addressInfoModel?.provinceCode} - ${addressInfoModel?.provinceNameTh}` : '-');
                setValue('district', !isEmptyStringFormApi(addressInfoModel?.districtCode) ? `${addressInfoModel?.districtCode} - ${addressInfoModel?.districtNameTh}` : '-');
                setValue('subDistrict', !isEmptyStringFormApi(addressInfoModel?.subDistrictCode) ? `${addressInfoModel?.subDistrictCode} - ${addressInfoModel?.subDistrictNameTh}` : '-');
            }
            setIsReady(true);
        }
    }, [getAddressByTypeState])

    React.useEffect(() => {
        const { customerId } = params
        if (customerId) {
            const formData = new FormData();
            formData.append('corporateId', customerId as string)
            getAddressByTypeAction(formData)
        }
    }, []);

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="ที่อยู่ตามประเภทหลักฐาน"
            />
            <ContentLoading
                isLoading={!getAddressByTypeState.data && getAddressByTypeState.error === undefined && !isReady}
                error={getAddressByTypeState.error || null}
                hight={184}
            >
                <div className="grid grid-cols-3">
                    <InputHorizontal
                        label="เลขที่"
                        defaultValue={getValues('addressNo')}
                        isEditable={isEditable}
                        register={register}
                        name="addressNo"
                    />
                    <InputHorizontal
                        label="หมู่ที่"
                        defaultValue={getValues('moo')}
                        isEditable={isEditable}
                        register={register}
                        name="moo"
                    />
                    <InputHorizontal
                        label="หมู่บ้าน / อาคาร"
                        defaultValue={getValues('buildingOrVillage')}
                        isEditable={isEditable}
                        register={register}
                        name="buildingOrVillage"
                    />
                    <InputHorizontal
                        label="ห้อง"
                        defaultValue={getValues('roomNo')}
                        isEditable={isEditable}
                        register={register}
                        name="roomNo"
                    />
                    <InputHorizontal
                        label="ชั้น"
                        defaultValue={getValues('floor')}
                        isEditable={isEditable}
                        register={register}
                        name="floor"
                    />
                    <InputHorizontal
                        label="ตรอก / ซอย"
                        defaultValue={getValues('soi')}
                        isEditable={isEditable}
                        register={register}
                        name="soi"
                    />
                    <InputHorizontal
                        label="ถนน"
                        defaultValue={getValues('street')}
                        isEditable={isEditable}
                        register={register}
                        name="street"
                    />
                    <InputHorizontal
                        label="ประเทศ"
                        defaultValue={getValues('country')}
                        isEditable={isEditable}
                        register={register}
                        name="country"
                        isRequired
                    />
                    <InputHorizontal
                        label="รหัสไปรษณีย์"
                        defaultValue={getValues('zipCode')}
                        isEditable={isEditable}
                        register={register}
                        name="zipCode"
                        isRequired
                    />
                    <InputHorizontal
                        label="จังหวัด"
                        defaultValue={getValues('province')}
                        isEditable={isEditable}
                        register={register}
                        name="province"
                        isRequired
                    />
                    <InputHorizontal
                        label="อำเภอ / เขต"
                        defaultValue={getValues('district')}
                        isEditable={isEditable}
                        register={register}
                        name="district"
                        isRequired
                    />
                    <InputHorizontal
                        label="ตำบล / แขวง"
                        defaultValue={getValues('subDistrict')}
                        isEditable={isEditable}
                        register={register}
                        name="subDistrict"
                        isRequired
                    />
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
    zipCode: string;
    province: string;
    district: string;
    subDistrict: string;
}