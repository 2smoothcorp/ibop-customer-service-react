"use client"

import ContentLoading from "@/components/content/content-loading";
import InputHorizontal from "@/components/custom/input-horizontal";
import HeaderTitle from "@/components/navbar/header-title";
import { useMasterDataOccupationCustom } from "@/hooks/master-data-occupation";
import { useMasterDataCountriesCustom } from "@/hooks/masterDataCountries";
import { CusomterInformationState } from "@/libs/redux/store/customer-information-slice";
import { AddressInfoModel, AddressInfoResponseDataResponse, ComboBox, ComboBoxListDataResponse, OccupationInfoModel, OccupationInfoResponseDataResponse } from "@/services/rest-api/customer-service";
import { AddressBySearchModeProps, AddressBySearchProps, getAddressBySearch, handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import { UseFormReturn } from "react-hook-form";

export default function OccupationInfo({ useForm }: { useForm: UseFormReturn<CusomterInformationState, any, undefined> }) {
    const { setValue, watch, register } = useForm;
    const [thailandAddress, setThailandAddress] = useState<AddressBySearchProps[]>([]);
    const [address, setAddress] = useState<AddressBySearchProps | undefined>();
    const params = useParams()
    const searchParams = useSearchParams()
    const isEditable = searchParams.get('edit') === 'true';

    const { data: countries, isLoading: isLoadingCountries } = useMasterDataCountriesCustom();

    const { data: occupationList, isLoading: isLoadingOccupation } = useMasterDataOccupationCustom();

    const getAddress = async (search: string, mode: AddressBySearchModeProps) => {
        const list = getAddressBySearch(search, mode);
        setThailandAddress(list);
    }

    const { data, isLoading, error } = useQuery({
        queryKey: ['occupationInfo', params.customerId], queryFn: async () => {
            if (data) {
                setDefaultData(data);
            }
            const list = getAddressBySearch('', 'postCode');
            setThailandAddress(list);
            const { customerId } = params
            const requestMasterData = await fetch(`/api/master-data/occupation`, { method: 'GET' });
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
                return occupation.addressInfoModel && (isEmptyStringFormApi(occupation.addressInfoModel.countryCode) ? '-' : `${occupation.addressInfoModel.countryCode} - ${occupation.addressInfoModel.countryDesc}`) || '-';
            case 'zipCode':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.zipCode) || '-';
            case 'province':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.provinceNameTh) || '-';
            case 'district':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.districtNameTh) || '-';
            case 'subDistrict':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.subDistrictNameTh) || '-';
            case 'customAddress1':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.customAddress1) || '-';
            case 'customAddress2':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.customAddress2) || '-';
            case 'customAddress3':
                return occupation.addressInfoModel && handleEmptyStringFormApi(occupation.addressInfoModel.customAddress3) || '-';

            default:
                return '-';
        }
    }

    const setDefaultData = (occupation: OccupationInfoProps) => {
        if (occupation.occupationInfo && occupation.masterDataOccupations) {
            const result = occupation.masterDataOccupations.find((item) => item.rValue === occupation.occupationInfo?.occupationCode);
            if (result) {
                setValue('occupationInfo.occupation.occupation', `${result.rValue} - ${result.rText}`);
            } else {
                setValue('occupationInfo.occupation.occupation', normalizationData('occupation', occupation));
            }
            setValue('occupationInfo.occupation.occupationCode', normalizationData('occupationCode', occupation));
            setValue('occupationInfo.occupation.jobWorkPlace', normalizationData('jobWorkPlace', occupation));
            setValue('occupationInfo.occupation.jobPosition', normalizationData('jobPosition', occupation));
            setValue('occupationInfo.occupation.jobDepartment', normalizationData('jobDepartment', occupation));
        }
        if (occupation.addressInfoModel) {
            setValue('occupationInfo.address.addressNo', normalizationData('addressNo', occupation));
            setValue('occupationInfo.address.moo', normalizationData('moo', occupation));
            setValue('occupationInfo.address.buildingOrVillage', normalizationData('buildingOrVillage', occupation));
            setValue('occupationInfo.address.roomNo', normalizationData('roomNo', occupation));
            setValue('occupationInfo.address.floor', normalizationData('floor', occupation));
            setValue('occupationInfo.address.soi', normalizationData('soi', occupation));
            setValue('occupationInfo.address.street', normalizationData('street', occupation));
            setValue('occupationInfo.address.country', normalizationData('country', occupation));
            setValue('occupationInfo.address.zipCode', normalizationData('zipCode', occupation));
            setValue('occupationInfo.address.provinceCode', normalizationData('province', occupation));
            setValue('occupationInfo.address.districtCode', normalizationData('district', occupation));
            setValue('occupationInfo.address.subDistrictCode', normalizationData('subDistrict', occupation));
            setValue('occupationInfo.address.customAddress1', normalizationData('customAddress1', occupation));
            setValue('occupationInfo.address.customAddress2', normalizationData('customAddress2', occupation));
            setValue('occupationInfo.address.customAddress3', normalizationData('customAddress3', occupation));
            // console.log(occupation.addressInfoModel)
            setAddress({
                value: {
                    postCode: occupation.addressInfoModel.zipCode || '',
                    province: occupation.addressInfoModel.provinceNameTh || '',
                    provinceCode: occupation.addressInfoModel.provinceCode || '',
                    district: occupation.addressInfoModel.districtNameTh || '',
                    districtCode: occupation.addressInfoModel.districtCode || '',
                    subDistrict: occupation.addressInfoModel.subDistrictNameTh || '',
                    subDistrictCode: occupation.addressInfoModel.subDistrictCode || '',
                },
                label: `${occupation.addressInfoModel.subDistrictNameTh} > ${occupation.addressInfoModel.districtNameTh} > ${occupation.addressInfoModel.provinceNameTh} > ${occupation.addressInfoModel.zipCode}`
            })
        } else {
            setValue('occupationInfo.address.country', '000 - ไทย')
            setValue('occupationInfo.address.countryCode', '000')
        }
    }

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
                    <InputHorizontal
                        label="อาชีพ"
                        defaultValue={data && normalizationData('occupationCode', data) || "-"}
                        textShow={data && normalizationData('occupation', data) || "-"}
                        isEditable={isEditable}
                        register={register}
                        name="occupationCode"
                        type="autocomplete"
                        list={occupationList}
                        onChange={(value) => {
                            setValue('occupationInfo.occupation.occupationCode', value)
                            setValue('occupationInfo.address.country', '000 - ไทย')
                            setValue('occupationInfo.address.countryCode', '000')
                            const zipCode = watch('occupationInfo.address.zipCode') === undefined;
                            console.log(zipCode)
                            if (zipCode) {
                                const defaultAddress = thailandAddress[0];
                                console.log(defaultAddress)
                                if (defaultAddress) {
                                    setAddress(defaultAddress)
                                }
                            }
                        }}
                        placeholder="โปรดเลือกอาชีพ"
                        isRequired
                    />
                </div>
                {
                    !["01", "02", "03", "04", "05", "06"].includes(watch('occupationInfo.occupation.occupationCode')) && watch('occupationInfo.occupation.occupationCode') !== '-' && (
                        <div className="grid grid-cols-3">
                            <InputHorizontal
                                label="ชื่อสถานที่ทำงาน / สถานศึกษา"
                                defaultValue={data && normalizationData('jobWorkPlace', data) || ""}
                                textShow={data && normalizationData('jobWorkPlace', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="jobWorkPlace"
                                onChange={(value) => setValue('occupationInfo.occupation.jobWorkPlace', value)}

                            />
                            <InputHorizontal
                                label="ตำแหน่งงาน"
                                defaultValue={data && normalizationData('jobPosition', data) || ""}
                                textShow={data && normalizationData('jobPosition', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="jobPosition"
                                onChange={(value) => setValue('occupationInfo.occupation.jobPosition', value)}
                            />
                            <InputHorizontal
                                label="ฝ่าย"
                                defaultValue={data && normalizationData('jobDepartment', data) || ""}
                                textShow={data && normalizationData('jobDepartment', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="jobDepartment"
                                onChange={(value) => setValue('occupationInfo.occupation.jobDepartment', value)}
                            />
                            <InputHorizontal
                                label="เลขที่"
                                defaultValue={data && normalizationData('addressNo', data) || ""}
                                textShow={data && normalizationData('addressNo', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="addressNo"
                                onChange={(value) => setValue('occupationInfo.address.addressNo', value)}
                            />
                            <InputHorizontal
                                label="หมู่ที่"
                                defaultValue={data && normalizationData('moo', data) || "-"}
                                textShow={data && normalizationData('moo', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="moo"
                                onChange={(value) => setValue('occupationInfo.address.moo', value)}
                            />
                            <InputHorizontal
                                label="หมู่บ้าน / อาคาร"
                                defaultValue={data && normalizationData('buildingOrVillage', data) || ""}
                                textShow={data && normalizationData('buildingOrVillage', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="buildingOrVillage"
                                onChange={(value) => setValue('occupationInfo.address.buildingOrVillage', value)}
                            />
                            <InputHorizontal
                                label="เลขที่ห้อง"
                                defaultValue={data && normalizationData('roomNo', data) || ""}
                                textShow={data && normalizationData('roomNo', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="roomNo"
                                onChange={(value) => setValue('occupationInfo.address.roomNo', value)}
                            />
                            <InputHorizontal
                                label="ชั้น"
                                defaultValue={data && normalizationData('floor', data) || ""}
                                textShow={data && normalizationData('floor', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="floor"
                                onChange={(value) => setValue('occupationInfo.address.floor', value)}
                            />
                            <InputHorizontal
                                label="ตรอก / ซอย"
                                defaultValue={data && normalizationData('soi', data) || ""}
                                textShow={data && normalizationData('soi', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="soi"
                                onChange={(value) => setValue('occupationInfo.address.soi', value)}
                            />
                            <InputHorizontal
                                label="ถนน"
                                defaultValue={data && normalizationData('street', data) || ""}
                                textShow={data && normalizationData('street', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="street"
                                onChange={(value) => setValue('occupationInfo.address.street', value)}
                            />
                            <InputHorizontal
                                label="ประเทศ"
                                defaultValue={watch('addressByType.countryCode')}
                                textShow={data && normalizationData('country', data) || "-"}
                                isEditable={isEditable}
                                register={register}
                                name="countryCode"
                                isRequired
                                type="autocomplete"
                                list={countries}
                                onChange={(value) => {
                                    if (value !== watch("occupationInfo.address.countryCode")) {
                                        setValue('occupationInfo.address.countryCode', value);
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
                                watch("occupationInfo.address.countryCode") !== '000'
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
                    )
                }
            </ContentLoading>

        </>
    )
}


interface OccupationInfoProps {
    masterDataOccupations: ComboBox[] | null | undefined,
    occupationInfo: OccupationInfoModel | null | undefined,
    addressInfoModel: AddressInfoModel | null | undefined
}