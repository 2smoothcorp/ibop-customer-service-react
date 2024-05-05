import InputHorizontal from "@/components/custom/input-horizontal";
import { AddressInfo } from "@/libs/redux/store/customer-information-slice";
import { AddressInfoModel } from "@/services/rest-api/customer-service/models";
import { handleEmptyStringFormApi, isEmptyStringFormApi } from "@/utils/function";
import React from "react";
import { useForm } from "react-hook-form";

interface DetailSection {
    name: keyof AddressInfo
    label: string
    defaultValue?: string
    isRequired?: boolean
    isEditable?: boolean
    normalize?: string
    type?: string
}

const fieldList: Array<DetailSection> =
    [
        {
            label: 'เลขที่',
            name: 'addressNo'
        },
        {
            label: 'หมู่ที่',
            name: 'moo'
        },
        {
            label: 'หมู่บ้าน / อาคาร',
            name: 'buildingOrVillage'
        },
        {
            label: 'เลขที่ห้อง',
            name: 'roomNo'
        },
        {
            label: 'ชั้น',
            name: 'floor'
        },
        {
            label: 'ตรอก / ซอย',
            name: 'soi'
        },
        {
            label: 'ถนน',
            name: 'street'
        },
        {
            label: 'ประเทศ',
            name: 'countryCode',
            type: 'autocomplete'
        }
    ];

const getValueFromFieldName = (attributeName: string, data: AddressInfoModel | undefined, normalize?: string): string => {
    if (!data) return '-'
    const value = data[attributeName as keyof typeof data] || '-';
    return normalize ? normalizationData(normalize, data as AddressInfoModel, value) : value
}

const normalizationData = (attributeName: string, data: AddressInfoModel | undefined, defaultValue: string) => {
    switch (attributeName) {
        case 'addressNo':
            return handleEmptyStringFormApi(data?.addressNo);
        case 'moo':
            return handleEmptyStringFormApi(data?.moo);
        case 'buildingOrVillage':
            return handleEmptyStringFormApi(data?.buildingOrVillage);
        case 'roomNo':
            return handleEmptyStringFormApi(data?.roomNo);
        case 'floor':
            return handleEmptyStringFormApi(data?.floor);
        case 'soi':
            return handleEmptyStringFormApi(data?.soi);
        case 'street':
            return handleEmptyStringFormApi(data?.street);
        case 'countryCode':
            return handleEmptyStringFormApi(data?.countryCode);
        case 'country':
            return isEmptyStringFormApi(data?.countryCode) ? '-' : `${data?.countryCode} - ${data?.countryDesc}`;
        case 'zipCode':
            return handleEmptyStringFormApi(data?.zipCode);
        case 'province':
            return handleEmptyStringFormApi(data?.provinceNameTh);
        case 'district':
            return handleEmptyStringFormApi(data?.districtNameTh);
        case 'subDistrict':
            return handleEmptyStringFormApi(data?.subDistrictNameTh);
        case 'customAddress1':
            return handleEmptyStringFormApi(data?.customAddress1);
        case 'customAddress2':
            return handleEmptyStringFormApi(data?.customAddress2);
        case 'customAddress3':
            return handleEmptyStringFormApi(data?.customAddress3);
        default:
            return '-';
    }
}

const addressInfo: any = {};

const TestPage = () => {

    const isEditable = true

    //const addressInfo = useAppSelector(state => state.customerInformation)
    const addressInfo: AddressInfo = {
        addressType: '01',
        addressNo: '',
        moo: '',
        buildingOrVillage: '',
        roomNo: '',
        floor: '',
        soi: '',
        street: '',
        country: '',
        countryCode: '000',
        zipCode: '',
        provinceCode: '',
        districtCode: '',
        subDistrictCode: '',
        customAddress1: '',
        customAddress2: '',
        customAddress3: '',
    }

    const useFormAll = useForm<AddressInfo>({
        defaultValues: addressInfo
    })

    const { register, setValue, watch } = useFormAll;

    const setValueToForm = (name: keyof AddressInfo, value: any) => {
        setValue(name, value)
    }

    return (<div>

        <div className="grid grid-cols-3">
            {
                fieldList.map((detail: DetailSection, idx: number) => {
                    const { name, label, defaultValue, isRequired, normalize } = detail
                    const _value = getValueFromFieldName(name, addressInfo, normalize);
                    const textShow = watch(name);
                    return <React.Fragment key={`field-item-${idx}`}>
                        <InputHorizontal
                            label={label}
                            defaultValue={_value}
                            isEditable={isEditable}
                            textShow={textShow}
                            //register={register}
                            name={name}
                            isRequired={isRequired}
                            onChange={(value) => setValue(name, value, { shouldDirty: true })}
                        />
                    </React.Fragment>
                })
            }

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
    </div>)
}

export default TestPage