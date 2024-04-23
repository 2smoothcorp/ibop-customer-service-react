"use client"

import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { AddressInfoModel, AddressInfoResponseDataResponse, ComboBox, ComboBoxListDataResponse, OccupationInfoModel, OccupationInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { handleEmptyStringFormApi } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

export default function OccupationInfo() {
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

    const { data: occupations, } = useQuery({
        queryKey: ['masterDataOccupation'], queryFn: async () => {
            const request = await fetch(`/api/customer-profile/master-data/occupation`, { method: 'GET' });
            const response: ComboBoxListDataResponse = await request.json();
            if (response.status === 200) {
                return response.data;
            }
            return []
        }
    })

    const { data, isLoading, error } = useQuery({
        queryKey: ['occupationInfo', params.customerId], queryFn: async () => {
            if (data) {
                setDefaultData(data);
            }
            const { customerId } = params
            const requestMasterData = await fetch(`/api/customer-profile/master-data/occupation`, { method: 'GET' });
            const responseMasterData: ComboBoxListDataResponse = await requestMasterData.json();
            const requestOccupation = await fetch(`/api/customer-profile/occupation/${customerId}`, { method: 'GET' });
            const responseOccupation: OccupationInfoResponseDataResponse = await requestOccupation.json();
            const requestAddress = await fetch(`/api/customer-profile/address-info/${customerId}/03`, { method: 'GET' });
            const responseAddress: AddressInfoResponseDataResponse = await requestAddress.json();
            let response: OccupationInfoProps = { occupationInfo: null, addressInfoModel: null, masterDataOccupations: null };
            if (responseOccupation.status === 200) {
                response = {
                    ...response,
                    occupationInfo: responseOccupation.data?.occupationInfo || null
                }
            }
            if (responseAddress.status === 200) {
                response = {
                    ...response,
                    addressInfoModel: responseAddress.data?.addressInfoModel || null
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
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.addressNo) || '-';
            case 'moo':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.moo) || '-';
            case 'buildingOrVillage':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.buildingOrVillage) || '-';
            case 'roomNo':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.roomNo) || '-';
            case 'floor':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.floor) || '-';
            case 'soi':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.soi) || '-';
            case 'street':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.street) || '-';
            case 'country':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.countryDesc) || '-';
            case 'zipCode':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.zipCode) || '-';
            case 'province':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.provinceNameTh) || '-';
            case 'district':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.districtNameTh) || '-';
            case 'subDistrict':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.subDistrictNameTh) || '-';

            default:
                return '-';
        }
    }

    const setDefaultData = (occupation: OccupationInfoProps) => {
        if (occupation.occupationInfo && occupation.masterDataOccupations) {
            const result = occupation.masterDataOccupations.find((item) => item.rValue === occupation.occupationInfo?.occupationCode);
            if (result) {
                setValue('occupation', `${result.rValue} - ${result.rText}`);
            } else {
                setValue('occupation', normalizationData('occupation', occupation));
            }
            setValue('occupationCode', normalizationData('occupationCode', occupation));
            setValue('jobWorkPlace', normalizationData('jobWorkPlace', occupation));
            setValue('jobPosition', normalizationData('jobPosition', occupation));
            setValue('jobDepartment', normalizationData('jobDepartment', occupation));
        }
        if (occupation.addressInfoModel) {
            setValue('addressNo', normalizationData('addressNo', occupation));
            setValue('moo', normalizationData('moo', occupation));
            setValue('buildingOrVillage', normalizationData('buildingOrVillage', occupation));
            setValue('roomNo', normalizationData('roomNo', occupation));
            setValue('floor', normalizationData('floor', occupation));
            setValue('soi', normalizationData('soi', occupation));
            setValue('street', normalizationData('street', occupation));
            setValue('country', normalizationData('country', occupation));
            setValue('zipCode', normalizationData('zipCode', occupation));
            setValue('province', normalizationData('province', occupation));
            setValue('district', normalizationData('district', occupation));
            setValue('subDistrict', normalizationData('subDistrict', occupation));
        }
    }

    return (
        <>
            <HeaderTitle
                className="gap-0"
                title="อาชีพ"
            />
            <ContentLoading
                isLoading={isLoading}
                error={error && error.message || undefined}
                hight={200}
            >
                <InputHorizontal
                    isLableCols1
                    allGridCols="grid-cols-6"
                    inputCol="col-span-5"
                    label="อาชีพ"
                    defaultValue={data && normalizationData('occupation', data) || "-"}
                    isEditable={isEditable}
                    register={register}
                    name="occupation"
                />
                {
                    !["01", "02", "03", "04", "05", "06"].includes(watch('occupationCode')) && (
                        <div className="grid grid-cols-3">
                            <InputHorizontal
                                label="ชื่อสถานที่ทำงาน / สถานศึกษา"
                                defaultValue={data && normalizationData('jobWorkPlace', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="jobWorkPlace"
                            />
                            <InputHorizontal
                                label="ตำแหน่งงาน"
                                defaultValue={data && normalizationData('jobPosition', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="jobPosition"
                            />
                            <InputHorizontal
                                label="ฝ่าย"
                                defaultValue={data && normalizationData('jobDepartment', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="jobDepartment"
                            />
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
                                label="ห้อง"
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
                                defaultValue={data && normalizationData('country', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="country"
                                isRequired
                            />
                            <InputHorizontal
                                label="รหัสไปรษณีย์"
                                defaultValue={data && normalizationData('zipCode', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="zipCode"
                                isRequired
                            />
                            <InputHorizontal
                                label="จังหวัด"
                                defaultValue={data && normalizationData('province', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="province"
                                isRequired
                            />
                            <InputHorizontal
                                label="อำเภอ / เขต"
                                defaultValue={data && normalizationData('district', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="district"
                                isRequired
                            />
                            <InputHorizontal
                                label="ตำบล / แขวง"
                                defaultValue={data && normalizationData('subDistrict', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="subDistrict"
                                isRequired
                            />
                        </div>
                    )
                }
            </ContentLoading>

        </>
    )
}

interface SubmitInput {
    occupationCode: string;
    occupation: string;
    jobWorkPlace: string;
    jobPosition: string;
    jobDepartment: string;
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

interface OccupationInfoProps {
    masterDataOccupations: ComboBox[] | null | undefined,
    occupationInfo: OccupationInfoModel | null | undefined,
    addressInfoModel: AddressInfoModel | null | undefined
}